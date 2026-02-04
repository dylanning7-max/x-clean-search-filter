export type NavigationEvent =
  | "enter-search"
  | "leave-search"
  | "search-to-search"

export type NavigationDetails = {
  from: string
  to: string
}

export type NavigationHandler = (
  event: NavigationEvent,
  details: NavigationDetails
) => void

export const XCSF_NAVIGATION_EVENT = "xcsf:navigation"

type NavigationPayload = {
  href: string
  pathname: string
  search: string
}

let bridgeInstalled = false
let lastEmittedHref = ""
let urlMutationObserver: MutationObserver | null = null
let mutationCheckRafId: number | null = null

const emitNavigationEvent = (force = false) => {
  const href = window.location.href
  if (!force && href === lastEmittedHref) return
  lastEmittedHref = href

  const payload: NavigationPayload = {
    href,
    pathname: window.location.pathname,
    search: window.location.search
  }

  window.dispatchEvent(
    new CustomEvent<NavigationPayload>(XCSF_NAVIGATION_EVENT, {
      detail: payload
    })
  )
}

const patchHistoryMethod = (method: "pushState" | "replaceState") => {
  const original = history[method] as (...args: unknown[]) => unknown
  history[method] = function (...args) {
    const result = original.apply(history, args)
    emitNavigationEvent(true)
    return result
  }
}

export const installNavigationBridgeOnce = () => {
  if (bridgeInstalled) return
  bridgeInstalled = true

  patchHistoryMethod("pushState")
  patchHistoryMethod("replaceState")
  window.addEventListener("popstate", () => emitNavigationEvent(true))

  urlMutationObserver = new MutationObserver(() => {
    if (mutationCheckRafId !== null) return
    mutationCheckRafId = window.requestAnimationFrame(() => {
      mutationCheckRafId = null
      emitNavigationEvent(false)
    })
  })
  urlMutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
  })

  emitNavigationEvent(true)
}

export const isSearchUrl = (href: string) => {
  try {
    const url = new URL(href)
    return url.pathname.startsWith("/search")
  } catch {
    return href.includes("/search")
  }
}

export class NavigationWatcher {
  private lastUrl: string
  private readonly onNavigate: NavigationHandler
  private readonly onNavigationEvent = () => {
    this.checkForNavigation()
  }

  constructor({
    onNavigate
  }: {
    onNavigate: NavigationHandler
  }) {
    this.onNavigate = onNavigate
    this.lastUrl = window.location.href
  }

  start() {
    installNavigationBridgeOnce()
    window.addEventListener(XCSF_NAVIGATION_EVENT, this.onNavigationEvent)
    this.checkForNavigation()
  }

  stop() {
    window.removeEventListener(XCSF_NAVIGATION_EVENT, this.onNavigationEvent)
  }

  private checkForNavigation() {
    const currentUrl = window.location.href
    if (currentUrl === this.lastUrl) return

    const from = this.lastUrl
    const to = currentUrl
    const wasSearch = isSearchUrl(from)
    const isSearch = isSearchUrl(to)

    if (!wasSearch && isSearch) {
      this.onNavigate("enter-search", { from, to })
    } else if (wasSearch && !isSearch) {
      this.onNavigate("leave-search", { from, to })
    } else if (wasSearch && isSearch) {
      this.onNavigate("search-to-search", { from, to })
    }

    this.lastUrl = currentUrl
  }
}
