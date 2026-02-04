import {
  XCSF_ME_HANDLE_KEY,
  XCSF_SYNC_STATE_KEY,
  type XcsfSyncState
} from "../lib/constants"
import { XCSF_OPEN_FOLLOWING_SYNC } from "../lib/messages"

const SYNC_WINDOW_ID_KEY = "xcsf_sync_window_id"

const hasStorageApi = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const setSyncState = (patch: Partial<XcsfSyncState>) => {
  if (!hasStorageApi()) return

  chrome.storage.local.get([XCSF_SYNC_STATE_KEY], (result) => {
    const current =
      (result[XCSF_SYNC_STATE_KEY] as XcsfSyncState | undefined) ??
      ({
        status: "idle",
        mode: "active"
      } satisfies XcsfSyncState)

    chrome.storage.local.set({
      [XCSF_SYNC_STATE_KEY]: {
        ...current,
        ...patch
      } satisfies XcsfSyncState
    })
  })
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message || message.action !== XCSF_OPEN_FOLLOWING_SYNC) return

  chrome.storage.local.get([XCSF_ME_HANDLE_KEY], (result) => {
    const meHandle = result[XCSF_ME_HANDLE_KEY] as string | undefined
    if (!meHandle) {
      sendResponse({
        ok: false,
        error: "missing_me_handle"
      })
      return
    }

    const url = `https://x.com/${meHandle}/following?xcsf_sync=1`
    chrome.windows.create(
      {
        url,
        type: "popup",
        width: 420,
        height: 720,
        focused: true
      },
      (createdWindow) => {
        const windowId = createdWindow?.id
        if (typeof windowId === "number") {
          chrome.storage.local.set({ [SYNC_WINDOW_ID_KEY]: windowId })
        }

        setSyncState({
          status: "running",
          mode: "active",
          startedAt: Date.now(),
          finishedAt: undefined,
          importedThisRun: 0,
          lastMessage: "Popup opened"
        })

        sendResponse({
          ok: true
        })
      }
    )
  })

  return true
})

chrome.windows.onRemoved.addListener((windowId) => {
  chrome.storage.local.get([SYNC_WINDOW_ID_KEY, XCSF_SYNC_STATE_KEY], (result) => {
    const trackedId = result[SYNC_WINDOW_ID_KEY] as number | undefined
    if (trackedId !== windowId) return

    chrome.storage.local.remove([SYNC_WINDOW_ID_KEY])

    const syncState = result[XCSF_SYNC_STATE_KEY] as XcsfSyncState | undefined
    if (!syncState || syncState.status !== "running" || syncState.mode !== "active") {
      return
    }

    setSyncState({
      status: "canceled",
      finishedAt: Date.now(),
      lastMessage: "Popup closed by user"
    })
  })
})

