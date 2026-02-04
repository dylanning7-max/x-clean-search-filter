import type { PlasmoContentScript } from "plasmo"

import { startFollowingImporter } from "../lib/following-importer"

export const config: PlasmoContentScript = {
  matches: ["https://x.com/*/following*", "https://twitter.com/*/following*"]
}

const isActiveSyncRoute = () =>
  new URLSearchParams(window.location.search).has("xcsf_sync")

if (!isActiveSyncRoute()) {
  startFollowingImporter("passive")
}

