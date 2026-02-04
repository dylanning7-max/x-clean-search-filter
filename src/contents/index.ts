import type { PlasmoContentScript } from "plasmo"

import { detectAndPersistMeHandle } from "../lib/me-handle"
import { NavigationWatcher, isSearchUrl } from "../lib/navigation-watcher"
import { installOnce, setRouteActive } from "../lib/search-filter"

export const config: PlasmoContentScript = {
  matches: ["https://x.com/*", "https://twitter.com/*"]
}

console.log("[XCSF] content script loaded")

installOnce()
detectAndPersistMeHandle()

const navigationWatcher = new NavigationWatcher({
  onNavigate: (event, { from, to }) => {
    switch (event) {
      case "enter-search":
        console.log("[XCSF] Enter Search", { from, to })
        setRouteActive(true)
        break
      case "leave-search":
        console.log("[XCSF] Leave Search", { from, to })
        setRouteActive(false)
        break
      case "search-to-search":
        console.log("[XCSF] Search-to-Search", { from, to })
        setRouteActive(true)
        break
      default:
        break
    }
  }
})

navigationWatcher.start()

if (isSearchUrl(window.location.href)) {
  setRouteActive(true)
}
