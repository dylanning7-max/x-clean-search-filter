import { XCSF_ME_HANDLE_KEY } from "./constants"
import { extractHandleFromHref } from "./following-store"

const MAX_ME_HANDLE_RETRY = 10
const RETRY_INTERVAL_MS = 1000

const hasLocalStorageApi = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const readMeHandleFromDom = () => {
  const profileLink = document.querySelector<HTMLAnchorElement>(
    'a[data-testid="AppTabBar_Profile_Link"][href]'
  )
  if (!profileLink) return null

  const href = profileLink.getAttribute("href") ?? ""
  return extractHandleFromHref(href)
}

export const detectAndPersistMeHandle = () => {
  if (!hasLocalStorageApi()) return

  let attempts = 0
  const timer = window.setInterval(() => {
    const handle = readMeHandleFromDom()
    attempts += 1

    if (handle) {
      chrome.storage.local.set({ [XCSF_ME_HANDLE_KEY]: handle })
      window.clearInterval(timer)
      return
    }

    if (attempts >= MAX_ME_HANDLE_RETRY) {
      window.clearInterval(timer)
    }
  }, RETRY_INTERVAL_MS)
}

