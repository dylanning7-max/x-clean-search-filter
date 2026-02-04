import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetShadowHostId,
  PlasmoMountShadowHost
} from "plasmo"
import type { ChangeEvent } from "react"
import { useEffect, useRef, useState } from "react"

import { XCSF_ME_HANDLE_KEY, XCSF_SYNC_STATE_KEY, type XcsfSyncState } from "../lib/constants"
import { XCSF_OPEN_FOLLOWING_SYNC } from "../lib/messages"
import {
  XCSF_NAVIGATION_EVENT,
  installNavigationBridgeOnce,
  isSearchUrl
} from "../lib/navigation-watcher"

export const config: PlasmoCSConfig = {
  matches: ["https://x.com/*", "https://twitter.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = () =>
  document.documentElement

export const getShadowHostId: PlasmoGetShadowHostId = () => "xcsf-csui-host"

export const mountShadowHost: PlasmoMountShadowHost = ({ shadowHost }) => {
  const host = shadowHost as HTMLElement
  if (host.parentElement !== document.documentElement) {
    document.documentElement.appendChild(host)
  }
  host.style.setProperty("position", "fixed", "important")
  host.style.setProperty("top", "0")
  host.style.setProperty("left", "0")
  host.style.setProperty("width", "0")
  host.style.setProperty("height", "0px")
  host.style.setProperty("overflow", "visible")
  host.style.setProperty("z-index", "2147483647", "important")
  host.style.setProperty("pointer-events", "none")
}

const OPEN_DELAY_MS = 200
const CLOSE_DELAY_MS = 150

const overlayStyles = `
.xcsf-dock-root {
  position: fixed !important;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2147483647 !important;
  pointer-events: auto;
}

.xcsf-dock-root, .xcsf-dock-root * {
  box-sizing: border-box;
}

.xcsf-dock-shell {
  pointer-events: auto;
  display: flex;
  justify-content: flex-end;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: #0f1419;
  isolation: isolate;
}

.xcsf-pill {
  width: 38px;
  height: 116px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  letter-spacing: 0.04em;
  user-select: none;
}

.xcsf-pill-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.xcsf-card {
  width: 244px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);
  padding: 10px 12px;
}

.xcsf-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.xcsf-title {
  font-weight: 700;
}

.xcsf-status {
  font-size: 12px;
  opacity: 0.75;
}

.xcsf-close {
  display: none;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 0 2px;
}

.xcsf-dock-shell[data-hovered="1"] .xcsf-close {
  display: inline-block;
}

.xcsf-stats {
  margin-top: 8px;
  font-variant-numeric: tabular-nums;
  display: grid;
  gap: 4px;
}

.xcsf-toggle-row {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.xcsf-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
}

.xcsf-collapse {
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 2px 4px;
  font-size: 12px;
}

.xcsf-sync {
  margin-top: 10px;
  display: grid;
  gap: 6px;
}

.xcsf-sync-btn {
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: inherit;
  padding: 6px 8px;
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}

.xcsf-sync-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.xcsf-sync-meta {
  font-size: 11px;
  opacity: 0.8;
  display: grid;
  gap: 3px;
}

.xcsf-note {
  margin-top: 8px;
  font-size: 11px;
  opacity: 0.75;
}

@media (prefers-color-scheme: dark) {
  .xcsf-dock-shell {
    color: #f7f9f9;
  }

  .xcsf-pill,
  .xcsf-card {
    background: rgba(0, 0, 0, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
  }

  .xcsf-sync-btn {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
}
`

type StatsState = {
  dimmedCount: number
  unknownCount: number
}

const hasStorage = () =>
  typeof chrome !== "undefined" && Boolean(chrome.storage?.local)

const hasRuntimeContext = () =>
  typeof chrome !== "undefined" && Boolean(chrome.runtime?.id)

const safeSetLocal = (items: Record<string, unknown>) => {
  if (!hasStorage() || !hasRuntimeContext()) return
  try {
    chrome.storage.local.set(items, () => {
      void chrome.runtime?.lastError
    })
  } catch {
    // Ignore transient "Extension context invalidated" during hot reload/reload.
  }
}

const safeRemoveLocal = (keys: string[]) => {
  if (!hasStorage() || !hasRuntimeContext()) return
  try {
    chrome.storage.local.remove(keys, () => {
      void chrome.runtime?.lastError
    })
  } catch {
    // Ignore transient "Extension context invalidated" during hot reload/reload.
  }
}

function Overlay() {
  const [enabled, setEnabled] = useState(true)
  const [, setShowUi] = useState(true)
  const [collapsed, setCollapsed] = useState(true)
  const [, setWatchdogTick] = useState(0)
  const [meHandle, setMeHandle] = useState<string | null>(null)
  const [syncState, setSyncState] = useState<XcsfSyncState>({
    status: "idle",
    mode: "active",
    importedThisRun: 0,
    totalKnownFollowing: 0
  })
  const [stats, setStats] = useState<StatsState>({
    dimmedCount: 0,
    unknownCount: 0
  })
  const [isSearchRoute, setIsSearchRoute] = useState(isSearchUrl(window.location.href))
  const [hovered, setHovered] = useState(false)
  const [hoverOpen, setHoverOpen] = useState(false)
  const previousIsSearchRouteRef = useRef(isSearchUrl(window.location.href))

  const openTimerRef = useRef<number | null>(null)
  const closeTimerRef = useRef<number | null>(null)
  const dockRootRef = useRef<HTMLDivElement | null>(null)

  const clearTimers = () => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const syncFromStorage = () => {
    if (!hasStorage() || !hasRuntimeContext()) return

    chrome.storage.local.get(
      [
        "enabled",
        "showUi",
        "collapsed",
        "xcsf_stats",
        "xcsf_enabled",
        XCSF_ME_HANDLE_KEY,
        XCSF_SYNC_STATE_KEY
      ],
      (result) => {
        const hasEnabled = typeof result.enabled === "boolean"
        const hasLegacy = typeof result.xcsf_enabled === "boolean"
        if (!hasEnabled && hasLegacy) {
          safeSetLocal({ enabled: result.xcsf_enabled })
          safeRemoveLocal(["xcsf_enabled"])
          setEnabled(result.xcsf_enabled)
        } else {
          setEnabled(result.enabled !== false)
        }

        // v1.1.1: do not allow permanent hide through showUi=false
        if (result.showUi === false) {
          setShowUi(true)
          safeSetLocal({ showUi: true })
        } else {
          setShowUi(true)
        }

        setCollapsed(result.collapsed !== false)
        setMeHandle((result[XCSF_ME_HANDLE_KEY] as string | undefined) ?? null)

        const storedSyncState = result[XCSF_SYNC_STATE_KEY] as
          | XcsfSyncState
          | undefined
        if (storedSyncState) {
          setSyncState(storedSyncState)
        }

        const storedStats = result.xcsf_stats as
          | { dimmedCount?: number; unknownCount?: number }
          | undefined
        setStats({
          dimmedCount: storedStats?.dimmedCount ?? 0,
          unknownCount: storedStats?.unknownCount ?? 0
        })
      }
    )
  }

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.currentTarget.checked
    setEnabled(next)
    safeSetLocal({ enabled: next })
  }

  const handleSyncFollowing = () => {
    if (!meHandle || !chrome.runtime?.id) return
    chrome.runtime.sendMessage(
      {
        action: XCSF_OPEN_FOLLOWING_SYNC
      },
      (response?: { ok?: boolean; error?: string }) => {
        if (chrome.runtime?.lastError) {
          setSyncState((current) => ({
            ...current,
            status: "error",
            lastMessage: chrome.runtime?.lastError?.message ?? "Failed to open sync window"
          }))
          return
        }

        if (!response?.ok) {
          setSyncState((current) => ({
            ...current,
            status: "error",
            lastMessage: response?.error ?? "Failed to open sync window"
          }))
        }
      }
    )
  }

  const handleMouseEnter = () => {
    setHovered(true)
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    if (collapsed) {
      if (openTimerRef.current !== null) window.clearTimeout(openTimerRef.current)
      openTimerRef.current = window.setTimeout(() => {
        setHoverOpen(true)
      }, OPEN_DELAY_MS)
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (collapsed) {
      closeTimerRef.current = window.setTimeout(() => {
        setHoverOpen(false)
      }, CLOSE_DELAY_MS)
    }
  }

  const collapseDock = () => {
    clearTimers()
    setHoverOpen(false)
    setHovered(false)
    setCollapsed(true)
    safeSetLocal({ collapsed: true })
  }

  useEffect(() => {
    syncFromStorage()
    installNavigationBridgeOnce()

    const onNavigation = (event: Event) => {
      const navEvent = event as CustomEvent<{ href?: string }>
      const href = navEvent.detail?.href ?? window.location.href
      const next = isSearchUrl(href)
      setIsSearchRoute((current) => (current === next ? current : next))
    }

    const onStorageChanged = (
      changes: Record<string, chrome.storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName !== "local") return
      if (changes.enabled) setEnabled(changes.enabled.newValue !== false)
      if (changes.showUi && changes.showUi.newValue === false) {
        setShowUi(true)
        safeSetLocal({ showUi: true })
      }
      if (changes.collapsed) setCollapsed(changes.collapsed.newValue !== false)
      if (changes[XCSF_ME_HANDLE_KEY]) {
        setMeHandle((changes[XCSF_ME_HANDLE_KEY].newValue as string | undefined) ?? null)
      }
      if (changes[XCSF_SYNC_STATE_KEY]) {
        const nextSyncState = changes[XCSF_SYNC_STATE_KEY].newValue as
          | XcsfSyncState
          | undefined
        if (nextSyncState) {
          setSyncState(nextSyncState)
        }
      }
      if (changes.xcsf_stats) {
        const nextStats = changes.xcsf_stats.newValue as
          | { dimmedCount?: number; unknownCount?: number }
          | undefined
        setStats({
          dimmedCount: nextStats?.dimmedCount ?? 0,
          unknownCount: nextStats?.unknownCount ?? 0
        })
      }
    }

    if (hasStorage() && hasRuntimeContext()) {
      chrome.storage.onChanged.addListener(onStorageChanged)
    }
    window.addEventListener(XCSF_NAVIGATION_EVENT, onNavigation)

    return () => {
      if (hasStorage() && hasRuntimeContext()) {
        chrome.storage.onChanged.removeListener(onStorageChanged)
      }
      window.removeEventListener(XCSF_NAVIGATION_EVENT, onNavigation)
      clearTimers()
    }
  }, [])

  useEffect(() => {
    const routeTimerId = window.setInterval(() => {
      const next = isSearchUrl(window.location.href)
      setIsSearchRoute((current) => (current === next ? current : next))
    }, 500)

    return () => {
      window.clearInterval(routeTimerId)
    }
  }, [])

  useEffect(() => {
    if (previousIsSearchRouteRef.current && !isSearchRoute) {
      setCollapsed(true)
      setHoverOpen(false)
      setHovered(false)
      safeSetLocal({ collapsed: true })
    }
    previousIsSearchRouteRef.current = isSearchRoute
  }, [isSearchRoute])

  useEffect(() => {
    const watchdogId = window.setInterval(() => {
      const root = dockRootRef.current
      if (!root) return

      const rootNode = root.getRootNode()
      if (!(rootNode instanceof ShadowRoot)) return

      const host = rootNode.host as HTMLElement
      if (!host.isConnected) {
        document.documentElement.appendChild(host)
        setWatchdogTick((value) => value + 1)
      }
    }, 2000)

    return () => {
      window.clearInterval(watchdogId)
    }
  }, [])

  useEffect(() => {
    if (!collapsed) {
      setHoverOpen(true)
    } else if (!hovered) {
      setHoverOpen(false)
    }
  }, [collapsed, hovered])

  const expanded = !collapsed || hoverOpen
  const syncRunning = syncState.status === "running"
  const syncDisabled = !isSearchRoute || !meHandle || syncRunning

  return (
    <>
      <style>{overlayStyles}</style>
      <div className="xcsf-dock-root" ref={dockRootRef}>
        <div
          className="xcsf-dock-shell"
          data-hovered={hovered ? "1" : "0"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {expanded ? (
            <div className="xcsf-card">
              <div className="xcsf-row">
                <div>
                  <div className="xcsf-title">XCSF</div>
                  <div className="xcsf-status">{enabled ? "Active" : "Off"}</div>
                </div>
                <button
                  className="xcsf-close"
                  type="button"
                  onClick={collapseDock}
                  aria-label="Collapse XCSF panel">
                  {"\u00D7"}
                </button>
              </div>
              <div className="xcsf-stats">
                {isSearchRoute ? (
                  <>
                    <div>Dimmed: {stats.dimmedCount}</div>
                    <div>Unknown: {stats.unknownCount}</div>
                  </>
                ) : (
                  <div>Active only on Search</div>
                )}
              </div>
              <div className="xcsf-toggle-row">
                <label className="xcsf-toggle">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={handleToggle}
                  />
                  <span>{enabled ? "ON" : "OFF"}</span>
                </label>
                <button
                  className="xcsf-collapse"
                  type="button"
                  onClick={collapseDock}
                  aria-label="Collapse XCSF panel">
                  Collapse
                </button>
              </div>
              <div className="xcsf-sync">
                <button
                  className="xcsf-sync-btn"
                  type="button"
                  onClick={handleSyncFollowing}
                  disabled={syncDisabled}
                  aria-label="Sync following list">
                  Sync Following
                </button>
                <div className="xcsf-sync-meta">
                  <div>Status: {syncState.status}</div>
                  <div>Imported: {syncState.importedThisRun ?? 0}</div>
                  <div>Total Following: {syncState.totalKnownFollowing ?? 0}</div>
                  <div>
                    {meHandle ? `Me: @${meHandle}` : "Login required"}
                  </div>
                </div>
                {!isSearchRoute ? (
                  <div className="xcsf-note">Switch to Search to apply filtering.</div>
                ) : null}
              </div>
            </div>
          ) : (
            <button
              className="xcsf-pill"
              type="button"
              onClick={() => {
                setCollapsed(false)
                safeSetLocal({ collapsed: false })
              }}
              aria-label="Expand XCSF panel">
              <span className="xcsf-pill-label">XCSF</span>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Overlay
