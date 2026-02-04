import {
  XCSF_FOLLOWING_VERSION_KEY
} from "./constants"
import {
  hasFollowingHandleSync,
  refreshFollowingMemoryFromDb
} from "./following-store"

export type CellStatus = "following" | "pending" | "not_followed" | "unknown"

type CachedFollowState = "followed" | "pending" | "not_followed"

type FollowCacheEntry = {
  state: CachedFollowState
  updatedAt: number
}

type FollowCache = Record<string, FollowCacheEntry>
type TrackedNodeState = "followed" | "pending" | "not_followed" | "unknown"

const DEBUG = false
const STYLE_ID = "xcsf-style"
const STATS_KEY = "xcsf_stats"
const FOLLOW_CACHE_KEY = "xcsf_follow_cache"
const MAX_CELLS_PER_FRAME = 50
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000
const PROCESSED_ATTR = "data-xcsf-processed"
const STATE_ATTR = "data-xcsf-state"
const USER_CELL_SELECTOR = '[data-testid="UserCell"], div[data-testid="cellInnerDiv"]'
const USER_CELL_ROOT_SELECTOR = '[data-testid="UserCell"]'
const TWEET_SELECTOR = 'article[data-testid="tweet"]'
const CANDIDATE_SELECTOR = `${USER_CELL_SELECTOR}, ${TWEET_SELECTOR}`
const RESERVED_PATH_SEGMENTS = new Set([
  "",
  "home",
  "explore",
  "notifications",
  "messages",
  "search",
  "settings",
  "compose",
  "hashtag",
  "i"
])
const TWEET_HANDLE_DENYLIST_PREFIXES = [
  "/i/",
  "/home",
  "/search",
  "/explore",
  "/messages",
  "/notifications",
  "/settings"
]
const HANDLE_PATH_REGEX = /^\/[A-Za-z0-9_]{1,30}$/

const shouldSkipCellInnerDiv = (el: HTMLElement) =>
  el.matches('div[data-testid="cellInnerDiv"]') &&
  Boolean(el.closest('[data-testid="UserCell"]'))

const STYLE_CONTENT = `
.xcsf-dim {
  opacity: 0.30 !important;
  filter: grayscale(100%) !important;
  transition: opacity 0.2s ease, filter 0.2s ease;
}

.xcsf-debug {
  outline: 2px solid red !important;
  outline-offset: -2px !important;
}
`

let followCache: FollowCache = {}
let followCacheLoaded = false
let followCachePersistTimer: number | null = null
let followCacheDirty = false

let dimmedCount = 0
let unknownCount = 0
let statsTimer: number | null = null
let lastSentStats = ""
let statsDirty = false
let nodeStateRegistry = new WeakMap<HTMLElement, TrackedNodeState>()

let enabledWanted = true
let routeActive = false
let running = false
let storageHydrated = false
let installDone = false

let clickHandlerInstalled = false
let tweetRescanTimer: number | null = null
let tweetBatchRescanRafId: number | null = null
const tweetBatchRescanQueue = new Set<HTMLElement>()
let tweetBatchRescanReason = "unknown"
const handleMemo = new WeakMap<HTMLElement, string>()

export const ensureStylesInjected = () => {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement("style")
  style.id = STYLE_ID
  style.textContent = STYLE_CONTENT
  document.head.appendChild(style)
}

const hasLocalStorageApi = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const setLocal = (items: Record<string, unknown>) => {
  if (!hasLocalStorageApi()) return
  chrome.storage.local.set(items)
}

const getLocal = <T>(key: string): Promise<T | undefined> =>
  new Promise((resolve) => {
    if (!hasLocalStorageApi()) {
      resolve(undefined)
      return
    }
    chrome.storage.local.get([key], (result) => {
      resolve(result[key] as T | undefined)
    })
  })

const normalizeHandle = (raw: string | null | undefined) => {
  if (!raw) return null
  const normalized = raw.trim().toLowerCase().replace(/^@+/, "")
  return normalized.length > 0 ? normalized : null
}

const parseFollowCache = (raw: unknown): FollowCache => {
  let value = raw

  if (typeof value === "string") {
    try {
      value = JSON.parse(value)
    } catch {
      return {}
    }
  }

  if (!value || typeof value !== "object") {
    return {}
  }

  const parsed: FollowCache = {}
  for (const [rawHandle, rawEntry] of Object.entries(
    value as Record<string, unknown>
  )) {
    const handle = normalizeHandle(rawHandle)
    if (!handle || !rawEntry || typeof rawEntry !== "object") continue

    const entry = rawEntry as { state?: unknown; updatedAt?: unknown }
    const state = entry.state
    const updatedAt = entry.updatedAt

    if (
      (state === "followed" ||
        state === "pending" ||
        state === "not_followed") &&
      typeof updatedAt === "number"
    ) {
      parsed[handle] = { state, updatedAt }
    }
  }

  return parsed
}

const extractHandleFromPathname = (pathname: string) => {
  const path = pathname.split("?")[0].split("#")[0]
  const parts = path.split("/").filter(Boolean)
  if (parts.length !== 1) return null
  const segment = parts[0].toLowerCase()
  if (RESERVED_PATH_SEGMENTS.has(segment)) return null
  return normalizeHandle(segment)
}

const extractHandleFromLink = (href: string) => {
  try {
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return null
    return extractHandleFromPathname(url.pathname)
  } catch {
    return null
  }
}

const extractHandleFromUserCell = (cell: HTMLElement) => {
  const root = cell.matches(USER_CELL_ROOT_SELECTOR)
    ? cell
    : cell.closest<HTMLElement>(USER_CELL_ROOT_SELECTOR)
  if (!root) return null

  const nameNodes = root.querySelectorAll<HTMLElement>('div[data-testid="User-Name"]')
  for (const nameNode of nameNodes) {
    if (nameNode.closest(USER_CELL_ROOT_SELECTOR) !== root) continue

    const links = nameNode.querySelectorAll<HTMLAnchorElement>('a[href^="/"][role="link"], a[href^="/"]')
    for (const link of links) {
      const handle = extractHandleFromLink(link.getAttribute("href") ?? "")
      if (handle) return handle
    }
  }

  return null
}

export const getTweetAuthorHandle = (articleEl: HTMLElement) => {
  const userNameNodes = articleEl.querySelectorAll<HTMLElement>('div[data-testid="User-Name"]')

  for (const userNameNode of userNameNodes) {
    if (userNameNode.closest(TWEET_SELECTOR) !== articleEl) continue

    const links = userNameNode.querySelectorAll<HTMLAnchorElement>("a[href]")
    for (const link of links) {
      const href = link.getAttribute("href") ?? ""
      if (!href.startsWith("/")) continue
      if (TWEET_HANDLE_DENYLIST_PREFIXES.some((prefix) => href.startsWith(prefix))) {
        continue
      }

      const pathname = href.split("?")[0].split("#")[0]
      if (!HANDLE_PATH_REGEX.test(pathname)) continue

      const handle = normalizeHandle(pathname.slice(1))
      if (handle) return handle
    }
  }

  return null
}

const schedulePersistFollowCache = () => {
  if (!followCacheDirty || followCachePersistTimer !== null) return

  followCachePersistTimer = window.setTimeout(() => {
    followCachePersistTimer = null
    if (!followCacheDirty) return
    followCacheDirty = false
    setLocal({ [FOLLOW_CACHE_KEY]: followCache })
  }, 300)
}

const pruneExpiredCacheEntries = () => {
  const now = Date.now()
  let changed = false

  Object.keys(followCache).forEach((key) => {
    if (now - followCache[key].updatedAt > CACHE_TTL_MS) {
      delete followCache[key]
      changed = true
    }
  })

  if (changed) {
    followCacheDirty = true
    schedulePersistFollowCache()
  }
}

const getCachedFollowState = (handle: string | null) => {
  if (!handle) return null
  const entry = followCache[handle]
  if (!entry) return null

  if (Date.now() - entry.updatedAt > CACHE_TTL_MS) {
    delete followCache[handle]
    followCacheDirty = true
    schedulePersistFollowCache()
    return null
  }

  return entry.state
}

const statusFromCachedState = (cachedState: CachedFollowState | null): CellStatus => {
  if (cachedState === "followed") return "following"
  if (cachedState === "pending") return "pending"
  if (cachedState === "not_followed") return "not_followed"
  return "unknown"
}

const resolveStatusByHandle = (handle: string | null): CellStatus => {
  const cachedState = getCachedFollowState(handle)
  if (cachedState) {
    return statusFromCachedState(cachedState)
  }

  if (handle && hasFollowingHandleSync(handle)) {
    return "following"
  }

  return "unknown"
}

const readHandleForRoot = (
  rootEl: HTMLElement,
  options?: { forceRefresh?: boolean }
) => {
  const memoized = handleMemo.get(rootEl)
  if (!options?.forceRefresh && memoized) return memoized

  let handle: string | null = null
  if (rootEl.matches(TWEET_SELECTOR)) {
    handle = getTweetAuthorHandle(rootEl)
  } else if (rootEl.matches(USER_CELL_SELECTOR)) {
    handle = extractHandleFromUserCell(rootEl)
  }

  if (handle) {
    handleMemo.set(rootEl, handle)
    return handle
  }

  if (memoized) {
    // Handle could change when X reuses node shells; allow fresh lookup to reset memo.
    handleMemo.delete(rootEl)
  }

  return null
}

const flushTweetBatchRescan = () => {
  tweetBatchRescanRafId = null
  if (!running || !routeActive || !enabledWanted) {
    tweetBatchRescanQueue.clear()
    return
  }

  let processedCount = 0
  const iterator = tweetBatchRescanQueue.values()
  while (processedCount < MAX_CELLS_PER_FRAME) {
    const next = iterator.next()
    if (next.done) break

    const tweet = next.value
    tweetBatchRescanQueue.delete(tweet)
    if (tweet.isConnected) {
      processTweet(tweet, tweetBatchRescanReason)
    } else {
      removeTrackedNode(tweet)
    }
    processedCount += 1
  }

  if (tweetBatchRescanQueue.size > 0) {
    tweetBatchRescanRafId = window.requestAnimationFrame(flushTweetBatchRescan)
  }
}

const clearTweetBatchRescan = () => {
  tweetBatchRescanQueue.clear()
  if (tweetBatchRescanRafId !== null) {
    window.cancelAnimationFrame(tweetBatchRescanRafId)
    tweetBatchRescanRafId = null
  }
}

const rescanAllTweets = (reason: string) => {
  if (!running || !routeActive || !enabledWanted) return

  document.querySelectorAll<HTMLElement>(TWEET_SELECTOR).forEach((tweet) => {
    tweetBatchRescanQueue.add(tweet)
  })
  if (tweetBatchRescanQueue.size === 0) return

  tweetBatchRescanReason = reason
  if (tweetBatchRescanRafId === null) {
    tweetBatchRescanRafId = window.requestAnimationFrame(flushTweetBatchRescan)
  }
}

const queueTweetRescan = () => {
  if (tweetRescanTimer !== null) return
  tweetRescanTimer = window.setTimeout(() => {
    tweetRescanTimer = null
    if (!running || !routeActive || !enabledWanted) return
    rescanAllTweets("cache-update")
  }, 250)
}

const upsertFollowCache = (handle: string | null, status: CellStatus) => {
  if (!handle) return
  if (status !== "following" && status !== "pending" && status !== "not_followed") return

  const nextState: CachedFollowState =
    status === "following" ? "followed" : status

  const prev = followCache[handle]
  if (prev && prev.state === nextState) {
    followCache[handle] = {
      ...prev,
      updatedAt: Date.now()
    }
  } else {
    followCache[handle] = {
      state: nextState,
      updatedAt: Date.now()
    }
    queueTweetRescan()
  }

  followCacheDirty = true
  schedulePersistFollowCache()
}

const scheduleStatsFlush = () => {
  statsDirty = true
  if (statsTimer !== null) return

  statsTimer = window.setTimeout(() => {
    statsTimer = null
    if (!statsDirty) return
    statsDirty = false
    const payload = {
      dimmedCount,
      unknownCount,
      updatedAt: Date.now()
    }
    const key = `${payload.dimmedCount}:${payload.unknownCount}`
    if (key === lastSentStats) return
    lastSentStats = key
    setLocal({ [STATS_KEY]: payload })
  }, 200)
}

const decrementCounts = (state: TrackedNodeState) => {
  if (state === "followed" || state === "pending") {
    dimmedCount = Math.max(0, dimmedCount - 1)
  }
  if (state === "unknown") {
    unknownCount = Math.max(0, unknownCount - 1)
  }
}

const incrementCounts = (state: TrackedNodeState) => {
  if (state === "followed" || state === "pending") {
    dimmedCount += 1
  }
  if (state === "unknown") {
    unknownCount += 1
  }
}

const setNodeState = (el: HTMLElement, nextState: TrackedNodeState) => {
  const prevState = nodeStateRegistry.get(el)
  if (prevState === nextState) return

  if (prevState) {
    decrementCounts(prevState)
  }

  incrementCounts(nextState)
  nodeStateRegistry.set(el, nextState)
  scheduleStatsFlush()
}

const removeTrackedNode = (el: HTMLElement) => {
  const prevState = nodeStateRegistry.get(el)
  if (!prevState) return

  decrementCounts(prevState)
  nodeStateRegistry.delete(el)
  scheduleStatsFlush()
}

const toMarkerState = (status: CellStatus): TrackedNodeState =>
  status === "following" ? "followed" : status

const markElementState = (el: HTMLElement, status: CellStatus) => {
  const shouldDim = status === "following" || status === "pending"
  const markerState = toMarkerState(status)
  const currentState = el.getAttribute(STATE_ATTR)
  const currentProcessed = el.getAttribute(PROCESSED_ATTR)
  const hasDimClass = el.classList.contains("xcsf-dim")
  const hasDebugClass = el.classList.contains("xcsf-debug")

  const shouldUpdateDom =
    currentState !== markerState ||
    currentProcessed !== "1" ||
    hasDimClass !== shouldDim ||
    hasDebugClass !== DEBUG

  if (shouldUpdateDom) {
    if (shouldDim) {
      el.classList.add("xcsf-dim")
      if (DEBUG) {
        el.classList.add("xcsf-debug")
      } else {
        el.classList.remove("xcsf-debug")
      }
    } else {
      el.classList.remove("xcsf-dim", "xcsf-debug")
    }

    el.setAttribute(PROCESSED_ATTR, "1")
    el.setAttribute(STATE_ATTR, markerState)
  }

  setNodeState(el, markerState)
}

const getButtonStatus = (button: HTMLElement): CellStatus | null => {
  const ariaLabel = button.getAttribute("aria-label")?.toLowerCase() ?? ""
  const testId = button.getAttribute("data-testid")?.toLowerCase() ?? ""

  if (ariaLabel.includes("pending")) return "pending"
  if (ariaLabel.includes("following")) return "following"
  if (testId.includes("pending") || testId.includes("cancel")) return "pending"
  if (testId.includes("unfollow")) return "following"
  if (ariaLabel.includes("follow") || testId.includes("follow")) return "not_followed"

  return null
}

export const classifyCell = (cell: HTMLElement): CellStatus => {
  const buttons = cell.querySelectorAll<HTMLElement>("button")
  let hasNotFollowed = false

  for (const button of buttons) {
    const status = getButtonStatus(button)
    if (status === "pending") return "pending"
    if (status === "following") return "following"
    if (status === "not_followed") hasNotFollowed = true
  }

  return hasNotFollowed ? "not_followed" : "unknown"
}

const processUserCell = (cell: HTMLElement) => {
  const status = classifyCell(cell)
  const handle = extractHandleFromUserCell(cell)
  if (handle) {
    handleMemo.set(cell, handle)
  }
  upsertFollowCache(handle, status)
  markElementState(cell, status)
}

const processTweet = (article: HTMLElement, reason = "observer") => {
  const handle = getTweetAuthorHandle(article)
  if (handle) {
    handleMemo.set(article, handle)
  }
  const cachedState = getCachedFollowState(handle)
  const status = resolveStatusByHandle(handle)

  const nextState = toMarkerState(status)
  const previousState = article.getAttribute(STATE_ATTR)
  markElementState(article, status)

  if (
    (cachedState === "followed" || cachedState === "pending") &&
    previousState !== nextState &&
    handle
  ) {
    const logState = cachedState === "followed" ? "followed" : "pending"
    console.log(
      `[XCSF Cache-Hit] handle: @${handle}, state: ${logState}, reason: ${reason}`
    )
  }
}

export const applyStyles = (cell: HTMLElement, status: CellStatus) => {
  markElementState(cell, status)
}

export const collectUserCellsFromNode = (node: Node): HTMLElement[] => {
  if (!(node instanceof HTMLElement)) return []

  const results = new Set<HTMLElement>()
  const maybeAddCell = (el: HTMLElement) => {
    if (shouldSkipCellInnerDiv(el)) {
      return
    }
    results.add(el)
  }

  if (node.matches(USER_CELL_SELECTOR)) {
    maybeAddCell(node)
  }

  node.querySelectorAll<HTMLElement>(USER_CELL_SELECTOR).forEach((el) => {
    maybeAddCell(el)
  })

  return Array.from(results)
}

const collectCandidatesFromNode = (node: Node): HTMLElement[] => {
  if (!(node instanceof HTMLElement)) return []

  const results = new Set<HTMLElement>()
  const maybeAddCandidate = (el: HTMLElement) => {
    if (shouldSkipCellInnerDiv(el)) return
    results.add(el)
  }

  if (node.matches(CANDIDATE_SELECTOR)) {
    maybeAddCandidate(node)
  }

  node.querySelectorAll<HTMLElement>(CANDIDATE_SELECTOR).forEach((el) => {
    maybeAddCandidate(el)
  })

  return Array.from(results)
}

class SearchObserver {
  private observer: MutationObserver | null = null
  private readonly queue = new Set<HTMLElement>()
  private readonly dirtySet = new Set<HTMLElement>()
  private readonly forceQueue = new WeakSet<HTMLElement>()
  private readonly processed = new WeakSet<HTMLElement>()
  private rafId: number | null = null
  private healRafId: number | null = null
  private isRunning = false

  start() {
    if (this.isRunning) return
    this.isRunning = true

    this.observer = new MutationObserver((mutations) => {
      this.handleMutations(mutations)
    })
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    })
  }

  stop() {
    if (!this.isRunning) return
    this.isRunning = false

    this.observer?.disconnect()
    this.observer = null
    this.queue.clear()
    this.dirtySet.clear()

    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId)
      this.rafId = null
    }

    if (this.healRafId !== null) {
      window.cancelAnimationFrame(this.healRafId)
      this.healRafId = null
    }
  }

  enqueueDocument(selector: string, force = false) {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      if (shouldSkipCellInnerDiv(el)) return
      this.enqueue(el, force)
    })
    this.scheduleFlush()
  }

  enqueueElement(el: HTMLElement, force = false) {
    if (shouldSkipCellInnerDiv(el)) {
      const parentUserCell = el.closest<HTMLElement>('[data-testid="UserCell"]')
      if (parentUserCell) {
        this.enqueue(parentUserCell, force)
      }
    } else {
      this.enqueue(el, force)
    }
    this.scheduleFlush()
  }

  private handleMutations(mutations: MutationRecord[]) {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        this.handleAttributeMutation(mutation)
        continue
      }

      for (const node of mutation.addedNodes) {
        for (const candidate of collectCandidatesFromNode(node)) {
          this.enqueue(candidate, false)
        }
      }

      for (const node of mutation.removedNodes) {
        this.removeTrackedCandidates(node)
      }
    }
    this.scheduleFlush()
    this.scheduleHealFlush()
  }

  private handleAttributeMutation(mutation: MutationRecord) {
    if (mutation.attributeName !== "class") return
    if (!(mutation.target instanceof HTMLElement)) return

    let rootEl: HTMLElement | null = null
    if (mutation.target.matches(TWEET_SELECTOR)) {
      rootEl = mutation.target
    } else if (
      mutation.target.matches(USER_CELL_SELECTOR) &&
      !shouldSkipCellInnerDiv(mutation.target)
    ) {
      rootEl = mutation.target
    }

    if (!rootEl || !rootEl.isConnected) return
    if (rootEl.classList.contains("xcsf-dim")) return

    const handle = readHandleForRoot(rootEl)
    const status = resolveStatusByHandle(handle)
    if (status !== "following" && status !== "pending") return

    this.dirtySet.add(rootEl)
  }

  private removeTrackedCandidates(node: Node) {
    if (!(node instanceof HTMLElement)) return

    if (node.matches(CANDIDATE_SELECTOR) && !shouldSkipCellInnerDiv(node)) {
      removeTrackedNode(node)
    }

    node.querySelectorAll<HTMLElement>(CANDIDATE_SELECTOR).forEach((el) => {
      if (shouldSkipCellInnerDiv(el)) return
      removeTrackedNode(el)
    })
  }

  private enqueue(el: HTMLElement, force: boolean) {
    if (!el.isConnected) return
    if (!force) {
      if (this.processed.has(el)) return
      if (el.getAttribute(PROCESSED_ATTR) === "1") return
    } else {
      this.forceQueue.add(el)
    }
    this.queue.add(el)
  }

  private scheduleFlush() {
    if (this.rafId !== null || this.queue.size === 0) return
    this.rafId = window.requestAnimationFrame(() => this.flush())
  }

  private scheduleHealFlush() {
    if (this.healRafId !== null || this.dirtySet.size === 0) return
    this.healRafId = window.requestAnimationFrame(() => this.flushHeals())
  }

  private flush() {
    this.rafId = null
    if (!this.isRunning) return

    let processedCount = 0
    const iterator = this.queue.values()

    while (processedCount < MAX_CELLS_PER_FRAME) {
      const next = iterator.next()
      if (next.done) break

      const el = next.value
      this.queue.delete(el)
      this.processElement(el)
      processedCount += 1
    }

    if (this.queue.size > 0) {
      this.scheduleFlush()
    }
  }

  private flushHeals() {
    this.healRafId = null
    if (!this.isRunning) return

    let processedCount = 0
    const iterator = this.dirtySet.values()
    while (processedCount < MAX_CELLS_PER_FRAME) {
      const next = iterator.next()
      if (next.done) break

      const rootEl = next.value
      this.dirtySet.delete(rootEl)
      this.healElement(rootEl)
      processedCount += 1
    }

    if (this.dirtySet.size > 0) {
      this.scheduleHealFlush()
    }
  }

  private healElement(rootEl: HTMLElement) {
    if (!rootEl.isConnected) {
      removeTrackedNode(rootEl)
      return
    }
    if (rootEl.classList.contains("xcsf-dim")) return

    const handle = readHandleForRoot(rootEl, { forceRefresh: true })
    if (!handle) return

    const status = resolveStatusByHandle(handle)
    if (status !== "following" && status !== "pending") return

    markElementState(rootEl, status)
  }

  private processElement(el: HTMLElement) {
    if (!el.isConnected) return

    const forced = this.forceQueue.has(el)
    if (forced) {
      this.forceQueue.delete(el)
    } else if (this.processed.has(el)) {
      return
    }

    if (el.matches(TWEET_SELECTOR)) {
      processTweet(el)
    } else if (el.matches(USER_CELL_SELECTOR)) {
      processUserCell(el)
    }

    this.processed.add(el)
  }
}

const observer = new SearchObserver()

export const resetStats = () => {
  nodeStateRegistry = new WeakMap<HTMLElement, TrackedNodeState>()
  dimmedCount = 0
  unknownCount = 0
  statsDirty = true
  lastSentStats = ""
  scheduleStatsFlush()
}

const undimDocument = () => {
  document.querySelectorAll<HTMLElement>(".xcsf-dim").forEach((el) => {
    el.classList.remove("xcsf-dim", "xcsf-debug")
    el.removeAttribute(PROCESSED_ATTR)
    el.removeAttribute(STATE_ATTR)
  })

  document
    .querySelectorAll<HTMLElement>(`[${PROCESSED_ATTR}="1"]`)
    .forEach((el) => {
      if (!el.classList.contains("xcsf-dim")) {
        el.removeAttribute(PROCESSED_ATTR)
        el.removeAttribute(STATE_ATTR)
      }
    })

  document.querySelectorAll<HTMLElement>(CANDIDATE_SELECTOR).forEach((el) => {
    nodeStateRegistry.delete(el)
  })
}

const ensureStarted = () => {
  if (running) return
  running = true

  ensureStylesInjected()
  observer.start()
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (!running) return
      observer.enqueueDocument(CANDIDATE_SELECTOR, true)
    })
  })
}

const ensureStopped = () => {
  clearTweetBatchRescan()
  if (tweetRescanTimer !== null) {
    window.clearTimeout(tweetRescanTimer)
    tweetRescanTimer = null
  }
  if (running) {
    running = false
    observer.stop()
    undimDocument()
  }
  resetStats()
}

const reconcile = (_reason: string) => {
  if (routeActive && enabledWanted) {
    ensureStarted()
  } else {
    ensureStopped()
  }
}

const isFollowLikeInteraction = (target: HTMLElement | null) => {
  if (!target) return false

  const button = target.closest<HTMLElement>("button")
  if (!button) return false

  const ariaLabel = button.getAttribute("aria-label")?.toLowerCase() ?? ""
  const testId = button.getAttribute("data-testid")?.toLowerCase() ?? ""
  return (
    ariaLabel.includes("follow") ||
    ariaLabel.includes("pending") ||
    testId.includes("follow") ||
    testId.includes("pending") ||
    testId.includes("cancel") ||
    testId.includes("unfollow")
  )
}

const installFollowInteractionListener = () => {
  if (clickHandlerInstalled) return
  clickHandlerInstalled = true

  document.addEventListener("click", (event) => {
    if (!routeActive) return
    const target = event.target as HTMLElement | null
    if (!isFollowLikeInteraction(target)) return

    const clickedButton = target?.closest<HTMLElement>("button")
    const candidateCell =
      clickedButton?.closest<HTMLElement>('[data-testid="UserCell"]') ??
      clickedButton?.closest<HTMLElement>('div[data-testid="cellInnerDiv"]')
    if (!candidateCell) return

    const delayMs = 900
    window.setTimeout(() => {
      if (!routeActive) return
      observer.enqueueElement(candidateCell, true)
    }, delayMs)
  })
}

export const setFilterEnabled = (next: boolean) => {
  enabledWanted = next
  reconcile("setFilterEnabled")
}

export const syncEnabledFromStorage = () => {
  if (typeof chrome === "undefined" || !chrome.storage?.local) return

  chrome.storage.local.get(["enabled"], (result) => {
    enabledWanted = result.enabled !== false
    storageHydrated = true
    reconcile("hydrate")
  })
}

export const installOnce = () => {
  if (installDone) return
  installDone = true

  void refreshFollowingMemoryFromDb().then(() => {
    rescanAllTweets("following-memory-init")
  })

  void (async () => {
    const cached = await getLocal<unknown>(FOLLOW_CACHE_KEY)
    followCache = parseFollowCache(cached)
    followCacheLoaded = true
    pruneExpiredCacheEntries()
    if (typeof cached === "string") {
      followCacheDirty = true
      schedulePersistFollowCache()
    }
    rescanAllTweets("init")
  })()

  installFollowInteractionListener()
  syncEnabledFromStorage()

  if (typeof chrome === "undefined" || !chrome.storage?.onChanged) return

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local") return

    if (changes.enabled) {
      enabledWanted = changes.enabled.newValue !== false
      reconcile("storage_change")
    }

    if (changes.xcsf_follow_cache) {
      const nextValue = changes.xcsf_follow_cache.newValue
      followCache = parseFollowCache(nextValue)
      pruneExpiredCacheEntries()
      if (typeof nextValue === "string") {
        followCacheDirty = true
        schedulePersistFollowCache()
      }
      rescanAllTweets("cache-update")
    }

    if (changes[XCSF_FOLLOWING_VERSION_KEY]) {
      void refreshFollowingMemoryFromDb().then(() => {
        rescanAllTweets("following-memory-update")
      })
    }
  })
}

export const setRouteActive = (next: boolean) => {
  const wasRouteActive = routeActive
  routeActive = next
  if (storageHydrated) {
    reconcile(next ? "route_enter" : "route_leave")
  }

  if (next && wasRouteActive && running) {
    resetStats()
    observer.enqueueDocument(CANDIDATE_SELECTOR, true)
  }
}
