import { XCSF_FOLLOWING_VERSION_KEY } from "./constants"

const DB_NAME = "xcsf_db"
const DB_VERSION = 1
const STORE_NAME = "following_v1"
const WARMUP_BATCH_SIZE = 1000

const RESERVED_PATH_PREFIXES = [
  "/i/",
  "/home",
  "/search",
  "/explore",
  "/messages",
  "/notifications",
  "/settings"
]

const HANDLE_PATH_REGEX = /^\/[A-Za-z0-9_]{1,30}$/

type FollowingRecord = {
  handle: string
  updatedAt: number
}

const followingMemory = new Set<string>()
let followingMemoryReady = false
let warmupPromise: Promise<void> | null = null

const hasLocalStorageApi = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const nextFrame = () =>
  new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve())
  })

const openDb = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "handle"
        })
      }
    }

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = () => {
      reject(request.error ?? new Error("Failed to open IndexedDB"))
    }
  })

const withStore = <T>(
  mode: IDBTransactionMode,
  executor: (store: IDBObjectStore, tx: IDBTransaction) => Promise<T>
): Promise<T> =>
  openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, mode)
        const store = tx.objectStore(STORE_NAME)

        executor(store, tx)
          .then((value) => resolve(value))
          .catch((error) => reject(error))

        tx.oncomplete = () => db.close()
        tx.onerror = () => reject(tx.error ?? new Error("IDB transaction failed"))
      })
  )

const requestToPromise = <T>(request: IDBRequest<T>): Promise<T> =>
  new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error("IDB request failed"))
  })

export const normalizeHandle = (raw: string | null | undefined) => {
  if (!raw) return null
  const normalized = raw.trim().toLowerCase().replace(/^@+/, "")
  return normalized.length > 0 ? normalized : null
}

export const extractHandleFromHref = (href: string) => {
  if (!href.startsWith("/")) return null
  if (RESERVED_PATH_PREFIXES.some((prefix) => href.startsWith(prefix))) {
    return null
  }

  const pathname = href.split("?")[0].split("#")[0]
  if (!HANDLE_PATH_REGEX.test(pathname)) return null
  return normalizeHandle(pathname.slice(1))
}

export const hasFollowingHandleSync = (handle: string | null | undefined) => {
  const normalized = normalizeHandle(handle)
  if (!normalized) return false
  return followingMemory.has(normalized)
}

const setFollowingVersion = () => {
  if (!hasLocalStorageApi()) return
  chrome.storage.local.get([XCSF_FOLLOWING_VERSION_KEY], (result) => {
    const current = Number(result[XCSF_FOLLOWING_VERSION_KEY] ?? 0) || 0
    chrome.storage.local.set({ [XCSF_FOLLOWING_VERSION_KEY]: current + 1 })
  })
}

export const getFollowingMemorySnapshot = () => ({
  ready: followingMemoryReady,
  size: followingMemory.size
})

const warmupFromKey = async (fromKey: string | null): Promise<string | null> => {
  return withStore("readonly", async (store) => {
    const range = fromKey ? IDBKeyRange.lowerBound(fromKey, true) : undefined
    const request = store.openCursor(range)

    return new Promise<string | null>((resolve, reject) => {
      let processed = 0
      let lastKey: string | null = null

      request.onerror = () => {
        reject(request.error ?? new Error("Failed to warm up following memory"))
      }

      request.onsuccess = () => {
        const cursor = request.result
        if (!cursor) {
          resolve(null)
          return
        }

        const record = cursor.value as FollowingRecord
        followingMemory.add(record.handle)
        lastKey = record.handle
        processed += 1

        if (processed >= WARMUP_BATCH_SIZE) {
          resolve(lastKey)
          return
        }

        cursor.continue()
      }
    })
  })
}

const loadFollowingMemoryInChunks = async () => {
  followingMemory.clear()
  followingMemoryReady = false

  let fromKey: string | null = null
  while (true) {
    const nextKey = await warmupFromKey(fromKey)
    if (!nextKey) break
    fromKey = nextKey
    await nextFrame()
  }

  followingMemoryReady = true
}

export const ensureFollowingMemoryWarmup = () => {
  if (!warmupPromise) {
    warmupPromise = loadFollowingMemoryInChunks().finally(() => {
      warmupPromise = null
    })
  }
  return warmupPromise
}

export const refreshFollowingMemoryFromDb = async () => {
  await ensureFollowingMemoryWarmup()
}

export const countFollowing = async () => {
  return withStore("readonly", async (store) => {
    const request = store.count()
    return requestToPromise(request)
  })
}

export const batchUpsertFollowing = async (handles: string[]) => {
  const normalized = Array.from(
    new Set(
      handles
        .map((handle) => normalizeHandle(handle))
        .filter((handle): handle is string => Boolean(handle))
    )
  )

  if (normalized.length === 0) {
    return {
      addedCount: 0,
      totalKnownFollowing: await countFollowing()
    }
  }

  const now = Date.now()

  const addedCount = await withStore("readwrite", async (store) => {
    let added = 0
    for (const handle of normalized) {
      const existing = await requestToPromise(
        store.get(handle) as IDBRequest<FollowingRecord | undefined>
      )
      if (!existing) {
        added += 1
      }
      store.put({ handle, updatedAt: now } satisfies FollowingRecord)
      followingMemory.add(handle)
    }

    return added
  })

  const totalKnownFollowing = await countFollowing()
  followingMemoryReady = true
  setFollowingVersion()

  return {
    addedCount,
    totalKnownFollowing
  }
}

