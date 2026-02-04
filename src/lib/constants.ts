export const XCSF_SYNC_STATE_KEY = "xcsf_sync_state"
export const XCSF_ME_HANDLE_KEY = "xcsf_me_handle"
export const XCSF_FOLLOW_CACHE_KEY = "xcsf_follow_cache"
export const XCSF_FOLLOWING_VERSION_KEY = "xcsf_following_version"

export type XcsfSyncStatus =
  | "idle"
  | "running"
  | "done"
  | "error"
  | "canceled"

export type XcsfSyncMode = "passive" | "active"

export type XcsfSyncState = {
  status: XcsfSyncStatus
  mode: XcsfSyncMode
  startedAt?: number
  finishedAt?: number
  importedThisRun?: number
  totalKnownFollowing?: number
  lastMessage?: string
}

