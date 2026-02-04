import {
  XCSF_SYNC_STATE_KEY,
  type XcsfSyncMode,
  type XcsfSyncState
} from "./constants"
import { batchUpsertFollowing, extractHandleFromHref } from "./following-store"

const USER_CELL_SELECTOR = '[data-testid="UserCell"], div[data-testid="cellInnerDiv"]'
const USER_CELL_ROOT_SELECTOR = '[data-testid="UserCell"]'
const FLUSH_BATCH_SIZE = 50
const FLUSH_INTERVAL_MS = 1000
const ACTIVE_MAX_PER_RUN = 2000
const ACTIVE_SCROLL_STEP = 800
const ACTIVE_WAIT_MS = 1400
const ACTIVE_NO_NEW_LIMIT = 12
const BLOCK_KEYWORDS = [
  "suspicious",
  "unusual activity",
  "captcha",
  "are you a robot",
  "help us keep x safe",
  "confirm you're human",
  "your account has been locked"
]

type ImportRuntime = {
  mode: XcsfSyncMode
  pendingHandles: Set<string>
  seenThisRun: Set<string>
  flushTimer: number | null
  importedThisRun: number
  totalKnownFollowing: number
  disposed: boolean
  lastStateWriteAt: number
}

const hasLocalStorageApi = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const shouldSkipCellInnerDiv = (el: HTMLElement) =>
  el.matches('div[data-testid="cellInnerDiv"]') &&
  Boolean(el.closest('[data-testid="UserCell"]'))

const extractPrimaryHandleFromCell = (cell: HTMLElement) => {
  const root = cell.matches(USER_CELL_ROOT_SELECTOR)
    ? cell
    : cell.closest<HTMLElement>(USER_CELL_ROOT_SELECTOR)
  if (!root) return null

  const nameNodes = root.querySelectorAll<HTMLElement>('div[data-testid="User-Name"]')
  for (const nameNode of nameNodes) {
    if (nameNode.closest(USER_CELL_ROOT_SELECTOR) !== root) continue

    const links = nameNode.querySelectorAll<HTMLAnchorElement>('a[href^="/"][role="link"], a[href^="/"]')
    for (const link of links) {
      const handle = extractHandleFromHref(link.getAttribute("href") ?? "")
      if (handle) return handle
    }
  }

  // Fallback: use the first profile-like link in the card order.
  const fallbackLinks = root.querySelectorAll<HTMLAnchorElement>('a[href^="/"][role="link"], a[href^="/"]')
  for (const link of fallbackLinks) {
    if (link.closest(USER_CELL_ROOT_SELECTOR) !== root) continue
    const handle = extractHandleFromHref(link.getAttribute("href") ?? "")
    if (handle) return handle
  }

  return null
}

const collectHandlesFromRoot = (root: HTMLElement) => {
  const handles = new Set<string>()

  const addFromElement = (element: HTMLElement) => {
    const handle = extractPrimaryHandleFromCell(element)
    if (handle) {
      handles.add(handle)
    }
  }

  if (root.matches(USER_CELL_SELECTOR) && !shouldSkipCellInnerDiv(root)) {
    addFromElement(root)
  }

  root.querySelectorAll<HTMLElement>(USER_CELL_SELECTOR).forEach((el) => {
    if (shouldSkipCellInnerDiv(el)) return
    addFromElement(el)
  })

  return Array.from(handles)
}

const updateSyncState = (patch: Partial<XcsfSyncState>) => {
  if (!hasLocalStorageApi()) return

  chrome.storage.local.get([XCSF_SYNC_STATE_KEY], (result) => {
    const current =
      (result[XCSF_SYNC_STATE_KEY] as XcsfSyncState | undefined) ??
      ({
        status: "idle",
        mode: "passive"
      } satisfies XcsfSyncState)

    chrome.storage.local.set({
      [XCSF_SYNC_STATE_KEY]: {
        ...current,
        ...patch
      } satisfies XcsfSyncState
    })
  })
}

const maybeWriteProgress = (runtime: ImportRuntime, force = false) => {
  const now = Date.now()
  if (!force && now - runtime.lastStateWriteAt < 250) return
  runtime.lastStateWriteAt = now

  updateSyncState({
    importedThisRun: runtime.importedThisRun,
    totalKnownFollowing: runtime.totalKnownFollowing
  })
}

const flushPending = async (runtime: ImportRuntime, force = false) => {
  if (!force && runtime.pendingHandles.size < FLUSH_BATCH_SIZE) return
  if (runtime.pendingHandles.size === 0) return

  const handles = Array.from(runtime.pendingHandles)
  runtime.pendingHandles.clear()

  try {
    const { addedCount, totalKnownFollowing } = await batchUpsertFollowing(handles)
    runtime.importedThisRun += addedCount
    runtime.totalKnownFollowing = totalKnownFollowing
    maybeWriteProgress(runtime)
  } catch (error) {
    updateSyncState({
      status: "error",
      finishedAt: Date.now(),
      lastMessage:
        error instanceof Error ? error.message : "Failed to upsert following list"
    })
    runtime.disposed = true
  }
}

const scheduleFlush = (runtime: ImportRuntime) => {
  if (runtime.flushTimer !== null) return
  runtime.flushTimer = window.setInterval(() => {
    void flushPending(runtime, false)
  }, FLUSH_INTERVAL_MS)
}

const collectVisibleHandles = (runtime: ImportRuntime) => {
  const beforeSize = runtime.pendingHandles.size
  const roots = document.querySelectorAll<HTMLElement>(USER_CELL_SELECTOR)
  roots.forEach((root) => {
    if (shouldSkipCellInnerDiv(root)) return
    const handles = collectHandlesFromRoot(root)
    handles.forEach((handle) => {
      runtime.pendingHandles.add(handle)
      runtime.seenThisRun.add(handle)
    })
  })

  return runtime.pendingHandles.size - beforeSize
}

const hasBlockingUi = () => {
  const text = document.body?.innerText?.toLowerCase() ?? ""
  return BLOCK_KEYWORDS.some((keyword) => text.includes(keyword))
}

const hasEmptyState = () => Boolean(document.querySelector('[data-testid="emptyState"]'))

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

const runActiveImporter = async (runtime: ImportRuntime) => {
  let noNewRounds = 0

  while (!runtime.disposed) {
    const beforeSeen = runtime.seenThisRun.size
    collectVisibleHandles(runtime)
    await flushPending(runtime, false)

    if (runtime.importedThisRun >= ACTIVE_MAX_PER_RUN) {
      updateSyncState({
        status: "done",
        finishedAt: Date.now(),
        lastMessage: `Reached per-run cap (${ACTIVE_MAX_PER_RUN})`
      })
      break
    }

    if (hasEmptyState()) {
      updateSyncState({
        status: "done",
        finishedAt: Date.now(),
        lastMessage: "Reached end of following list"
      })
      break
    }

    if (hasBlockingUi()) {
      updateSyncState({
        status: "error",
        finishedAt: Date.now(),
        lastMessage: "Detected verification/blocking screen"
      })
      break
    }

    const seenDelta = runtime.seenThisRun.size - beforeSeen
    if (seenDelta === 0) {
      noNewRounds += 1
    } else {
      noNewRounds = 0
    }

    if (noNewRounds >= ACTIVE_NO_NEW_LIMIT) {
      updateSyncState({
        status: "done",
        finishedAt: Date.now(),
        lastMessage: "No new handles detected"
      })
      break
    }

    window.scrollBy(0, ACTIVE_SCROLL_STEP)
    await wait(ACTIVE_WAIT_MS)
  }

  await flushPending(runtime, true)
  maybeWriteProgress(runtime, true)
}

const runPassiveImporter = (runtime: ImportRuntime) => {
  const observer = new MutationObserver((mutations) => {
    if (runtime.disposed) return

    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        const handles = collectHandlesFromRoot(node)
        handles.forEach((handle) => {
          runtime.pendingHandles.add(handle)
          runtime.seenThisRun.add(handle)
        })
      }
    }

    void flushPending(runtime, false)
  })

  observer.observe(document.body, { childList: true, subtree: true })
  collectVisibleHandles(runtime)
  void flushPending(runtime, true)

  window.addEventListener("beforeunload", () => {
    runtime.disposed = true
    observer.disconnect()
    if (runtime.flushTimer !== null) {
      window.clearInterval(runtime.flushTimer)
      runtime.flushTimer = null
    }
    void flushPending(runtime, true)
  })
}

export const startFollowingImporter = (mode: XcsfSyncMode) => {
  const runtime: ImportRuntime = {
    mode,
    pendingHandles: new Set<string>(),
    seenThisRun: new Set<string>(),
    flushTimer: null,
    importedThisRun: 0,
    totalKnownFollowing: 0,
    disposed: false,
    lastStateWriteAt: 0
  }

  scheduleFlush(runtime)

  if (mode === "active") {
    updateSyncState({
      status: "running",
      mode: "active",
      startedAt: Date.now(),
      importedThisRun: 0,
      finishedAt: undefined,
      lastMessage: "Sync started"
    })
    void runActiveImporter(runtime).finally(() => {
      runtime.disposed = true
      if (runtime.flushTimer !== null) {
        window.clearInterval(runtime.flushTimer)
        runtime.flushTimer = null
      }
    })
    return
  }

  runPassiveImporter(runtime)
}
