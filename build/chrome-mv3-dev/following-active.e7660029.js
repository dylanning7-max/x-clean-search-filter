(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3uNHv":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "F:\\cursor\\workspace\\x-clean-search-filter\\src\\contents\\following-active.ts",
    "bundleId": "098d8557e7660029",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1].replace(/;/g, "") : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"c5tYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _followingImporter = require("../lib/following-importer");
const config = {
    matches: [
        "https://x.com/*/following*",
        "https://twitter.com/*/following*"
    ]
};
const isActiveSyncRoute = ()=>new URLSearchParams(window.location.search).has("xcsf_sync");
if (isActiveSyncRoute()) (0, _followingImporter.startFollowingImporter)("active");

},{"../lib/following-importer":"gb7X4","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"gb7X4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startFollowingImporter", ()=>startFollowingImporter);
var _constants = require("./constants");
var _followingStore = require("./following-store");
const USER_CELL_SELECTOR = '[data-testid="UserCell"], div[data-testid="cellInnerDiv"]';
const USER_CELL_ROOT_SELECTOR = '[data-testid="UserCell"]';
const FLUSH_BATCH_SIZE = 50;
const FLUSH_INTERVAL_MS = 1000;
const ACTIVE_MAX_PER_RUN = 2000;
const ACTIVE_SCROLL_STEP = 800;
const ACTIVE_WAIT_MS = 1400;
const ACTIVE_NO_NEW_LIMIT = 12;
const BLOCK_KEYWORDS = [
    "suspicious",
    "unusual activity",
    "captcha",
    "are you a robot",
    "help us keep x safe",
    "confirm you're human",
    "your account has been locked"
];
const hasLocalStorageApi = ()=>typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
const shouldSkipCellInnerDiv = (el)=>el.matches('div[data-testid="cellInnerDiv"]') && Boolean(el.closest('[data-testid="UserCell"]'));
const extractPrimaryHandleFromCell = (cell)=>{
    const root = cell.matches(USER_CELL_ROOT_SELECTOR) ? cell : cell.closest(USER_CELL_ROOT_SELECTOR);
    if (!root) return null;
    const nameNodes = root.querySelectorAll('div[data-testid="User-Name"]');
    for (const nameNode of nameNodes){
        if (nameNode.closest(USER_CELL_ROOT_SELECTOR) !== root) continue;
        const links = nameNode.querySelectorAll('a[href^="/"][role="link"], a[href^="/"]');
        for (const link of links){
            const handle = (0, _followingStore.extractHandleFromHref)(link.getAttribute("href") ?? "");
            if (handle) return handle;
        }
    }
    // Fallback: use the first profile-like link in the card order.
    const fallbackLinks = root.querySelectorAll('a[href^="/"][role="link"], a[href^="/"]');
    for (const link of fallbackLinks){
        if (link.closest(USER_CELL_ROOT_SELECTOR) !== root) continue;
        const handle = (0, _followingStore.extractHandleFromHref)(link.getAttribute("href") ?? "");
        if (handle) return handle;
    }
    return null;
};
const collectHandlesFromRoot = (root)=>{
    const handles = new Set();
    const addFromElement = (element)=>{
        const handle = extractPrimaryHandleFromCell(element);
        if (handle) handles.add(handle);
    };
    if (root.matches(USER_CELL_SELECTOR) && !shouldSkipCellInnerDiv(root)) addFromElement(root);
    root.querySelectorAll(USER_CELL_SELECTOR).forEach((el)=>{
        if (shouldSkipCellInnerDiv(el)) return;
        addFromElement(el);
    });
    return Array.from(handles);
};
const updateSyncState = (patch)=>{
    if (!hasLocalStorageApi()) return;
    chrome.storage.local.get([
        (0, _constants.XCSF_SYNC_STATE_KEY)
    ], (result)=>{
        const current = result[0, _constants.XCSF_SYNC_STATE_KEY] ?? {
            status: "idle",
            mode: "passive"
        };
        chrome.storage.local.set({
            [(0, _constants.XCSF_SYNC_STATE_KEY)]: {
                ...current,
                ...patch
            }
        });
    });
};
const maybeWriteProgress = (runtime, force = false)=>{
    const now = Date.now();
    if (!force && now - runtime.lastStateWriteAt < 250) return;
    runtime.lastStateWriteAt = now;
    updateSyncState({
        importedThisRun: runtime.importedThisRun,
        totalKnownFollowing: runtime.totalKnownFollowing
    });
};
const flushPending = async (runtime, force = false)=>{
    if (!force && runtime.pendingHandles.size < FLUSH_BATCH_SIZE) return;
    if (runtime.pendingHandles.size === 0) return;
    const handles = Array.from(runtime.pendingHandles);
    runtime.pendingHandles.clear();
    try {
        const { addedCount, totalKnownFollowing } = await (0, _followingStore.batchUpsertFollowing)(handles);
        runtime.importedThisRun += addedCount;
        runtime.totalKnownFollowing = totalKnownFollowing;
        maybeWriteProgress(runtime);
    } catch (error) {
        updateSyncState({
            status: "error",
            finishedAt: Date.now(),
            lastMessage: error instanceof Error ? error.message : "Failed to upsert following list"
        });
        runtime.disposed = true;
    }
};
const scheduleFlush = (runtime)=>{
    if (runtime.flushTimer !== null) return;
    runtime.flushTimer = window.setInterval(()=>{
        flushPending(runtime, false);
    }, FLUSH_INTERVAL_MS);
};
const collectVisibleHandles = (runtime)=>{
    const beforeSize = runtime.pendingHandles.size;
    const roots = document.querySelectorAll(USER_CELL_SELECTOR);
    roots.forEach((root)=>{
        if (shouldSkipCellInnerDiv(root)) return;
        const handles = collectHandlesFromRoot(root);
        handles.forEach((handle)=>{
            runtime.pendingHandles.add(handle);
            runtime.seenThisRun.add(handle);
        });
    });
    return runtime.pendingHandles.size - beforeSize;
};
const hasBlockingUi = ()=>{
    const text = document.body?.innerText?.toLowerCase() ?? "";
    return BLOCK_KEYWORDS.some((keyword)=>text.includes(keyword));
};
const hasEmptyState = ()=>Boolean(document.querySelector('[data-testid="emptyState"]'));
const wait = (ms)=>new Promise((resolve)=>window.setTimeout(resolve, ms));
const runActiveImporter = async (runtime)=>{
    let noNewRounds = 0;
    while(!runtime.disposed){
        const beforeSeen = runtime.seenThisRun.size;
        collectVisibleHandles(runtime);
        await flushPending(runtime, false);
        if (runtime.importedThisRun >= ACTIVE_MAX_PER_RUN) {
            updateSyncState({
                status: "done",
                finishedAt: Date.now(),
                lastMessage: `Reached per-run cap (${ACTIVE_MAX_PER_RUN})`
            });
            break;
        }
        if (hasEmptyState()) {
            updateSyncState({
                status: "done",
                finishedAt: Date.now(),
                lastMessage: "Reached end of following list"
            });
            break;
        }
        if (hasBlockingUi()) {
            updateSyncState({
                status: "error",
                finishedAt: Date.now(),
                lastMessage: "Detected verification/blocking screen"
            });
            break;
        }
        const seenDelta = runtime.seenThisRun.size - beforeSeen;
        if (seenDelta === 0) noNewRounds += 1;
        else noNewRounds = 0;
        if (noNewRounds >= ACTIVE_NO_NEW_LIMIT) {
            updateSyncState({
                status: "done",
                finishedAt: Date.now(),
                lastMessage: "No new handles detected"
            });
            break;
        }
        window.scrollBy(0, ACTIVE_SCROLL_STEP);
        await wait(ACTIVE_WAIT_MS);
    }
    await flushPending(runtime, true);
    maybeWriteProgress(runtime, true);
};
const runPassiveImporter = (runtime)=>{
    const observer = new MutationObserver((mutations)=>{
        if (runtime.disposed) return;
        for (const mutation of mutations)for (const node of mutation.addedNodes){
            if (!(node instanceof HTMLElement)) continue;
            const handles = collectHandlesFromRoot(node);
            handles.forEach((handle)=>{
                runtime.pendingHandles.add(handle);
                runtime.seenThisRun.add(handle);
            });
        }
        flushPending(runtime, false);
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    collectVisibleHandles(runtime);
    flushPending(runtime, true);
    window.addEventListener("beforeunload", ()=>{
        runtime.disposed = true;
        observer.disconnect();
        if (runtime.flushTimer !== null) {
            window.clearInterval(runtime.flushTimer);
            runtime.flushTimer = null;
        }
        flushPending(runtime, true);
    });
};
const startFollowingImporter = (mode)=>{
    const runtime = {
        mode,
        pendingHandles: new Set(),
        seenThisRun: new Set(),
        flushTimer: null,
        importedThisRun: 0,
        totalKnownFollowing: 0,
        disposed: false,
        lastStateWriteAt: 0
    };
    scheduleFlush(runtime);
    if (mode === "active") {
        updateSyncState({
            status: "running",
            mode: "active",
            startedAt: Date.now(),
            importedThisRun: 0,
            finishedAt: undefined,
            lastMessage: "Sync started"
        });
        runActiveImporter(runtime).finally(()=>{
            runtime.disposed = true;
            if (runtime.flushTimer !== null) {
                window.clearInterval(runtime.flushTimer);
                runtime.flushTimer = null;
            }
        });
        return;
    }
    runPassiveImporter(runtime);
};

},{"./constants":"b7WBk","./following-store":"3d3kl","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"b7WBk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XCSF_SYNC_STATE_KEY", ()=>XCSF_SYNC_STATE_KEY);
parcelHelpers.export(exports, "XCSF_ME_HANDLE_KEY", ()=>XCSF_ME_HANDLE_KEY);
parcelHelpers.export(exports, "XCSF_FOLLOW_CACHE_KEY", ()=>XCSF_FOLLOW_CACHE_KEY);
parcelHelpers.export(exports, "XCSF_FOLLOWING_VERSION_KEY", ()=>XCSF_FOLLOWING_VERSION_KEY);
const XCSF_SYNC_STATE_KEY = "xcsf_sync_state";
const XCSF_ME_HANDLE_KEY = "xcsf_me_handle";
const XCSF_FOLLOW_CACHE_KEY = "xcsf_follow_cache";
const XCSF_FOLLOWING_VERSION_KEY = "xcsf_following_version";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3d3kl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeHandle", ()=>normalizeHandle);
parcelHelpers.export(exports, "extractHandleFromHref", ()=>extractHandleFromHref);
parcelHelpers.export(exports, "hasFollowingHandleSync", ()=>hasFollowingHandleSync);
parcelHelpers.export(exports, "getFollowingMemorySnapshot", ()=>getFollowingMemorySnapshot);
parcelHelpers.export(exports, "ensureFollowingMemoryWarmup", ()=>ensureFollowingMemoryWarmup);
parcelHelpers.export(exports, "refreshFollowingMemoryFromDb", ()=>refreshFollowingMemoryFromDb);
parcelHelpers.export(exports, "countFollowing", ()=>countFollowing);
parcelHelpers.export(exports, "batchUpsertFollowing", ()=>batchUpsertFollowing);
var _constants = require("./constants");
const DB_NAME = "xcsf_db";
const DB_VERSION = 1;
const STORE_NAME = "following_v1";
const WARMUP_BATCH_SIZE = 1000;
const RESERVED_PATH_PREFIXES = [
    "/i/",
    "/home",
    "/search",
    "/explore",
    "/messages",
    "/notifications",
    "/settings"
];
const HANDLE_PATH_REGEX = /^\/[A-Za-z0-9_]{1,30}$/;
const followingMemory = new Set();
let followingMemoryReady = false;
let warmupPromise = null;
const hasLocalStorageApi = ()=>typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
const nextFrame = ()=>new Promise((resolve)=>{
        window.requestAnimationFrame(()=>resolve());
    });
const openDb = ()=>new Promise((resolve, reject)=>{
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = ()=>{
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, {
                keyPath: "handle"
            });
        };
        request.onsuccess = ()=>{
            resolve(request.result);
        };
        request.onerror = ()=>{
            reject(request.error ?? new Error("Failed to open IndexedDB"));
        };
    });
const withStore = (mode, executor)=>openDb().then((db)=>new Promise((resolve, reject)=>{
            const tx = db.transaction(STORE_NAME, mode);
            const store = tx.objectStore(STORE_NAME);
            executor(store, tx).then((value)=>resolve(value)).catch((error)=>reject(error));
            tx.oncomplete = ()=>db.close();
            tx.onerror = ()=>reject(tx.error ?? new Error("IDB transaction failed"));
        }));
const requestToPromise = (request)=>new Promise((resolve, reject)=>{
        request.onsuccess = ()=>resolve(request.result);
        request.onerror = ()=>reject(request.error ?? new Error("IDB request failed"));
    });
const normalizeHandle = (raw)=>{
    if (!raw) return null;
    const normalized = raw.trim().toLowerCase().replace(/^@+/, "");
    return normalized.length > 0 ? normalized : null;
};
const extractHandleFromHref = (href)=>{
    if (!href.startsWith("/")) return null;
    if (RESERVED_PATH_PREFIXES.some((prefix)=>href.startsWith(prefix))) return null;
    const pathname = href.split("?")[0].split("#")[0];
    if (!HANDLE_PATH_REGEX.test(pathname)) return null;
    return normalizeHandle(pathname.slice(1));
};
const hasFollowingHandleSync = (handle)=>{
    const normalized = normalizeHandle(handle);
    if (!normalized) return false;
    return followingMemory.has(normalized);
};
const setFollowingVersion = ()=>{
    if (!hasLocalStorageApi()) return;
    chrome.storage.local.get([
        (0, _constants.XCSF_FOLLOWING_VERSION_KEY)
    ], (result)=>{
        const current = Number(result[0, _constants.XCSF_FOLLOWING_VERSION_KEY] ?? 0) || 0;
        chrome.storage.local.set({
            [(0, _constants.XCSF_FOLLOWING_VERSION_KEY)]: current + 1
        });
    });
};
const getFollowingMemorySnapshot = ()=>({
        ready: followingMemoryReady,
        size: followingMemory.size
    });
const warmupFromKey = async (fromKey)=>{
    return withStore("readonly", async (store)=>{
        const range = fromKey ? IDBKeyRange.lowerBound(fromKey, true) : undefined;
        const request = store.openCursor(range);
        return new Promise((resolve, reject)=>{
            let processed = 0;
            let lastKey = null;
            request.onerror = ()=>{
                reject(request.error ?? new Error("Failed to warm up following memory"));
            };
            request.onsuccess = ()=>{
                const cursor = request.result;
                if (!cursor) {
                    resolve(null);
                    return;
                }
                const record = cursor.value;
                followingMemory.add(record.handle);
                lastKey = record.handle;
                processed += 1;
                if (processed >= WARMUP_BATCH_SIZE) {
                    resolve(lastKey);
                    return;
                }
                cursor.continue();
            };
        });
    });
};
const loadFollowingMemoryInChunks = async ()=>{
    followingMemory.clear();
    followingMemoryReady = false;
    let fromKey = null;
    while(true){
        const nextKey = await warmupFromKey(fromKey);
        if (!nextKey) break;
        fromKey = nextKey;
        await nextFrame();
    }
    followingMemoryReady = true;
};
const ensureFollowingMemoryWarmup = ()=>{
    if (!warmupPromise) warmupPromise = loadFollowingMemoryInChunks().finally(()=>{
        warmupPromise = null;
    });
    return warmupPromise;
};
const refreshFollowingMemoryFromDb = async ()=>{
    await ensureFollowingMemoryWarmup();
};
const countFollowing = async ()=>{
    return withStore("readonly", async (store)=>{
        const request = store.count();
        return requestToPromise(request);
    });
};
const batchUpsertFollowing = async (handles)=>{
    const normalized = Array.from(new Set(handles.map((handle)=>normalizeHandle(handle)).filter((handle)=>Boolean(handle))));
    if (normalized.length === 0) return {
        addedCount: 0,
        totalKnownFollowing: await countFollowing()
    };
    const now = Date.now();
    const addedCount = await withStore("readwrite", async (store)=>{
        let added = 0;
        for (const handle of normalized){
            const existing = await requestToPromise(store.get(handle));
            if (!existing) added += 1;
            store.put({
                handle,
                updatedAt: now
            });
            followingMemory.add(handle);
        }
        return added;
    });
    const totalKnownFollowing = await countFollowing();
    followingMemoryReady = true;
    setFollowingVersion();
    return {
        addedCount,
        totalKnownFollowing
    };
};

},{"./constants":"b7WBk","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}]},["3uNHv","c5tYz"], "c5tYz", "parcelRequireb3b3")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLElBQUk7UUFDdEI7UUFFQSxPQUFPO0lBQ1Q7SUFFQSxNQUFNLHNCQUFzQixNQUFNO0lBQ2xDLHVCQUF1QjtJQUN2QjtJQUVBLE9BQU87UUFDTDtRQUNBO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMTIwZmQ4MDYxNzA3MDI0Yi5qcyIsInNyYy9jb250ZW50cy9mb2xsb3dpbmctYWN0aXZlLnRzIiwic3JjL2xpYi9mb2xsb3dpbmctaW1wb3J0ZXIudHMiLCJzcmMvbGliL2NvbnN0YW50cy50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9saWIvZm9sbG93aW5nLXN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJGOlxcXFxjdXJzb3JcXFxcd29ya3NwYWNlXFxcXHgtY2xlYW4tc2VhcmNoLWZpbHRlclxcXFxzcmNcXFxcY29udGVudHNcXFxcZm9sbG93aW5nLWFjdGl2ZS50c1wiLFwiYnVuZGxlSWRcIjpcIjA5OGQ4NTU3ZTc2NjAwMjlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV0ucmVwbGFjZSgvOy9nLFwiXCIpOnZvaWQgMDtyZXR1cm4gdHlwZW9mIGU8XCJ1XCI/ZS5jcmVhdGVQb2xpY3kob3x8YHRydXN0ZWQtaHRtbC0ke3N9YCx7Y3JlYXRlSFRNTDphPT5hfSk6dm9pZCAwfXZhciBUPSQoKTtmdW5jdGlvbiBnKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMpfWZ1bmN0aW9uIGYoKXtyZXR1cm4hZygpfWZ1bmN0aW9uIEYoKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9cztsZXQgdD1gXG4gIDxzdHlsZT5cbiAgICAjJHtzfSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm94LXNoYWRvdzogIzMzMyA0LjdweCA0LjdweDtcbiAgICB9XG5cbiAgICAjJHtzfTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICMke3N9IC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgXG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYDtyZXR1cm4gZS5pbm5lckhUTUw9VD9ULmNyZWF0ZUhUTUwodCk6dCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5mb250RmFtaWx5PVwic2Fucy1zZXJpZlwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjQ3cyBlYXNlLWluLW91dFwiLGV9ZnVuY3Rpb24gTihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZigpJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKSksdCgpKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntmKCkmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCl9KX0pfXZhciBrPSgpPT57bGV0IGU7aWYoZigpKXtsZXQgdD1GKCk7ZT1OKHQpfXJldHVybntzaG93OmFzeW5jKHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57YXdhaXQgZTtsZXQgbz1nKCk7by5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihvLm9uY2xpY2s9cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sby5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLG8uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLG8uc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTphc3luYygpPT57YXdhaXQgZTtsZXQgdD1nKCk7dC5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBXPWAke0V9JHttb2R1bGUuaWR9X19gLGksQT0hMSxNPWsoKTthc3luYyBmdW5jdGlvbiBoKCl7YyhcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLEE/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTpNLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIFIoKXtpPy5kaXNjb25uZWN0KCksaT1sPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6V30pLGkub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57aCgpfSksaS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJmgoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKEE9ITApfSl9ZnVuY3Rpb24gaigpe2lmKGw/LnJ1bnRpbWUpdHJ5e1IoKSxzZXRJbnRlcnZhbChSLDI0ZTMpfWNhdGNoe3JldHVybn19aigpO1AoYXN5bmMgZT0+e2MoXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKG89Pm8uZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShvPT5MKG1vZHVsZS5idW5kbGUsby5pZCkpJiYoTS5zaG93KCksbD8ucnVudGltZT9pLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57aCgpfSw0NzAwKSl9KTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vQ29udGVudFNjcmlwdCB9IGZyb20gXCJwbGFzbW9cIlxuXG5pbXBvcnQgeyBzdGFydEZvbGxvd2luZ0ltcG9ydGVyIH0gZnJvbSBcIi4uL2xpYi9mb2xsb3dpbmctaW1wb3J0ZXJcIlxuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9Db250ZW50U2NyaXB0ID0ge1xuICBtYXRjaGVzOiBbXCJodHRwczovL3guY29tLyovZm9sbG93aW5nKlwiLCBcImh0dHBzOi8vdHdpdHRlci5jb20vKi9mb2xsb3dpbmcqXCJdXG59XG5cbmNvbnN0IGlzQWN0aXZlU3luY1JvdXRlID0gKCkgPT5cbiAgbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5oYXMoXCJ4Y3NmX3N5bmNcIilcblxuaWYgKGlzQWN0aXZlU3luY1JvdXRlKCkpIHtcbiAgc3RhcnRGb2xsb3dpbmdJbXBvcnRlcihcImFjdGl2ZVwiKVxufVxuXG4iLCJpbXBvcnQge1xuICBYQ1NGX1NZTkNfU1RBVEVfS0VZLFxuICB0eXBlIFhjc2ZTeW5jTW9kZSxcbiAgdHlwZSBYY3NmU3luY1N0YXRlXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5pbXBvcnQgeyBiYXRjaFVwc2VydEZvbGxvd2luZywgZXh0cmFjdEhhbmRsZUZyb21IcmVmIH0gZnJvbSBcIi4vZm9sbG93aW5nLXN0b3JlXCJcblxuY29uc3QgVVNFUl9DRUxMX1NFTEVDVE9SID0gJ1tkYXRhLXRlc3RpZD1cIlVzZXJDZWxsXCJdLCBkaXZbZGF0YS10ZXN0aWQ9XCJjZWxsSW5uZXJEaXZcIl0nXG5jb25zdCBVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUiA9ICdbZGF0YS10ZXN0aWQ9XCJVc2VyQ2VsbFwiXSdcbmNvbnN0IEZMVVNIX0JBVENIX1NJWkUgPSA1MFxuY29uc3QgRkxVU0hfSU5URVJWQUxfTVMgPSAxMDAwXG5jb25zdCBBQ1RJVkVfTUFYX1BFUl9SVU4gPSAyMDAwXG5jb25zdCBBQ1RJVkVfU0NST0xMX1NURVAgPSA4MDBcbmNvbnN0IEFDVElWRV9XQUlUX01TID0gMTQwMFxuY29uc3QgQUNUSVZFX05PX05FV19MSU1JVCA9IDEyXG5jb25zdCBCTE9DS19LRVlXT1JEUyA9IFtcbiAgXCJzdXNwaWNpb3VzXCIsXG4gIFwidW51c3VhbCBhY3Rpdml0eVwiLFxuICBcImNhcHRjaGFcIixcbiAgXCJhcmUgeW91IGEgcm9ib3RcIixcbiAgXCJoZWxwIHVzIGtlZXAgeCBzYWZlXCIsXG4gIFwiY29uZmlybSB5b3UncmUgaHVtYW5cIixcbiAgXCJ5b3VyIGFjY291bnQgaGFzIGJlZW4gbG9ja2VkXCJcbl1cblxudHlwZSBJbXBvcnRSdW50aW1lID0ge1xuICBtb2RlOiBYY3NmU3luY01vZGVcbiAgcGVuZGluZ0hhbmRsZXM6IFNldDxzdHJpbmc+XG4gIHNlZW5UaGlzUnVuOiBTZXQ8c3RyaW5nPlxuICBmbHVzaFRpbWVyOiBudW1iZXIgfCBudWxsXG4gIGltcG9ydGVkVGhpc1J1bjogbnVtYmVyXG4gIHRvdGFsS25vd25Gb2xsb3dpbmc6IG51bWJlclxuICBkaXNwb3NlZDogYm9vbGVhblxuICBsYXN0U3RhdGVXcml0ZUF0OiBudW1iZXJcbn1cblxuY29uc3QgaGFzTG9jYWxTdG9yYWdlQXBpID0gKCkgPT5cbiAgdHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCb29sZWFuKGNocm9tZS5zdG9yYWdlPy5sb2NhbClcblxuY29uc3Qgc2hvdWxkU2tpcENlbGxJbm5lckRpdiA9IChlbDogSFRNTEVsZW1lbnQpID0+XG4gIGVsLm1hdGNoZXMoJ2RpdltkYXRhLXRlc3RpZD1cImNlbGxJbm5lckRpdlwiXScpICYmXG4gIEJvb2xlYW4oZWwuY2xvc2VzdCgnW2RhdGEtdGVzdGlkPVwiVXNlckNlbGxcIl0nKSlcblxuY29uc3QgZXh0cmFjdFByaW1hcnlIYW5kbGVGcm9tQ2VsbCA9IChjZWxsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCByb290ID0gY2VsbC5tYXRjaGVzKFVTRVJfQ0VMTF9ST09UX1NFTEVDVE9SKVxuICAgID8gY2VsbFxuICAgIDogY2VsbC5jbG9zZXN0PEhUTUxFbGVtZW50PihVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUilcbiAgaWYgKCFyb290KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IG5hbWVOb2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2RpdltkYXRhLXRlc3RpZD1cIlVzZXItTmFtZVwiXScpXG4gIGZvciAoY29uc3QgbmFtZU5vZGUgb2YgbmFtZU5vZGVzKSB7XG4gICAgaWYgKG5hbWVOb2RlLmNsb3Nlc3QoVVNFUl9DRUxMX1JPT1RfU0VMRUNUT1IpICE9PSByb290KSBjb250aW51ZVxuXG4gICAgY29uc3QgbGlua3MgPSBuYW1lTm9kZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignYVtocmVmXj1cIi9cIl1bcm9sZT1cImxpbmtcIl0sIGFbaHJlZl49XCIvXCJdJylcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgIGNvbnN0IGhhbmRsZSA9IGV4dHJhY3RIYW5kbGVGcm9tSHJlZihsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPz8gXCJcIilcbiAgICAgIGlmIChoYW5kbGUpIHJldHVybiBoYW5kbGVcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjazogdXNlIHRoZSBmaXJzdCBwcm9maWxlLWxpa2UgbGluayBpbiB0aGUgY2FyZCBvcmRlci5cbiAgY29uc3QgZmFsbGJhY2tMaW5rcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJ2FbaHJlZl49XCIvXCJdW3JvbGU9XCJsaW5rXCJdLCBhW2hyZWZePVwiL1wiXScpXG4gIGZvciAoY29uc3QgbGluayBvZiBmYWxsYmFja0xpbmtzKSB7XG4gICAgaWYgKGxpbmsuY2xvc2VzdChVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUikgIT09IHJvb3QpIGNvbnRpbnVlXG4gICAgY29uc3QgaGFuZGxlID0gZXh0cmFjdEhhbmRsZUZyb21IcmVmKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA/PyBcIlwiKVxuICAgIGlmIChoYW5kbGUpIHJldHVybiBoYW5kbGVcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGNvbGxlY3RIYW5kbGVzRnJvbVJvb3QgPSAocm9vdDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaGFuZGxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgY29uc3QgYWRkRnJvbUVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSBleHRyYWN0UHJpbWFyeUhhbmRsZUZyb21DZWxsKGVsZW1lbnQpXG4gICAgaWYgKGhhbmRsZSkge1xuICAgICAgaGFuZGxlcy5hZGQoaGFuZGxlKVxuICAgIH1cbiAgfVxuXG4gIGlmIChyb290Lm1hdGNoZXMoVVNFUl9DRUxMX1NFTEVDVE9SKSAmJiAhc2hvdWxkU2tpcENlbGxJbm5lckRpdihyb290KSkge1xuICAgIGFkZEZyb21FbGVtZW50KHJvb3QpXG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFVTRVJfQ0VMTF9TRUxFQ1RPUikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHJldHVyblxuICAgIGFkZEZyb21FbGVtZW50KGVsKVxuICB9KVxuXG4gIHJldHVybiBBcnJheS5mcm9tKGhhbmRsZXMpXG59XG5cbmNvbnN0IHVwZGF0ZVN5bmNTdGF0ZSA9IChwYXRjaDogUGFydGlhbDxYY3NmU3luY1N0YXRlPikgPT4ge1xuICBpZiAoIWhhc0xvY2FsU3RvcmFnZUFwaSgpKSByZXR1cm5cblxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1hDU0ZfU1lOQ19TVEFURV9LRVldLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICAocmVzdWx0W1hDU0ZfU1lOQ19TVEFURV9LRVldIGFzIFhjc2ZTeW5jU3RhdGUgfCB1bmRlZmluZWQpID8/XG4gICAgICAoe1xuICAgICAgICBzdGF0dXM6IFwiaWRsZVwiLFxuICAgICAgICBtb2RlOiBcInBhc3NpdmVcIlxuICAgICAgfSBzYXRpc2ZpZXMgWGNzZlN5bmNTdGF0ZSlcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICBbWENTRl9TWU5DX1NUQVRFX0tFWV06IHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgLi4ucGF0Y2hcbiAgICAgIH0gc2F0aXNmaWVzIFhjc2ZTeW5jU3RhdGVcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBtYXliZVdyaXRlUHJvZ3Jlc3MgPSAocnVudGltZTogSW1wb3J0UnVudGltZSwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gIGlmICghZm9yY2UgJiYgbm93IC0gcnVudGltZS5sYXN0U3RhdGVXcml0ZUF0IDwgMjUwKSByZXR1cm5cbiAgcnVudGltZS5sYXN0U3RhdGVXcml0ZUF0ID0gbm93XG5cbiAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICBpbXBvcnRlZFRoaXNSdW46IHJ1bnRpbWUuaW1wb3J0ZWRUaGlzUnVuLFxuICAgIHRvdGFsS25vd25Gb2xsb3dpbmc6IHJ1bnRpbWUudG90YWxLbm93bkZvbGxvd2luZ1xuICB9KVxufVxuXG5jb25zdCBmbHVzaFBlbmRpbmcgPSBhc3luYyAocnVudGltZTogSW1wb3J0UnVudGltZSwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBpZiAoIWZvcmNlICYmIHJ1bnRpbWUucGVuZGluZ0hhbmRsZXMuc2l6ZSA8IEZMVVNIX0JBVENIX1NJWkUpIHJldHVyblxuICBpZiAocnVudGltZS5wZW5kaW5nSGFuZGxlcy5zaXplID09PSAwKSByZXR1cm5cblxuICBjb25zdCBoYW5kbGVzID0gQXJyYXkuZnJvbShydW50aW1lLnBlbmRpbmdIYW5kbGVzKVxuICBydW50aW1lLnBlbmRpbmdIYW5kbGVzLmNsZWFyKClcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWRkZWRDb3VudCwgdG90YWxLbm93bkZvbGxvd2luZyB9ID0gYXdhaXQgYmF0Y2hVcHNlcnRGb2xsb3dpbmcoaGFuZGxlcylcbiAgICBydW50aW1lLmltcG9ydGVkVGhpc1J1biArPSBhZGRlZENvdW50XG4gICAgcnVudGltZS50b3RhbEtub3duRm9sbG93aW5nID0gdG90YWxLbm93bkZvbGxvd2luZ1xuICAgIG1heWJlV3JpdGVQcm9ncmVzcyhydW50aW1lKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHVwZGF0ZVN5bmNTdGF0ZSh7XG4gICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgIGZpbmlzaGVkQXQ6IERhdGUubm93KCksXG4gICAgICBsYXN0TWVzc2FnZTpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cHNlcnQgZm9sbG93aW5nIGxpc3RcIlxuICAgIH0pXG4gICAgcnVudGltZS5kaXNwb3NlZCA9IHRydWVcbiAgfVxufVxuXG5jb25zdCBzY2hlZHVsZUZsdXNoID0gKHJ1bnRpbWU6IEltcG9ydFJ1bnRpbWUpID0+IHtcbiAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkgcmV0dXJuXG4gIHJ1bnRpbWUuZmx1c2hUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgdm9pZCBmbHVzaFBlbmRpbmcocnVudGltZSwgZmFsc2UpXG4gIH0sIEZMVVNIX0lOVEVSVkFMX01TKVxufVxuXG5jb25zdCBjb2xsZWN0VmlzaWJsZUhhbmRsZXMgPSAocnVudGltZTogSW1wb3J0UnVudGltZSkgPT4ge1xuICBjb25zdCBiZWZvcmVTaXplID0gcnVudGltZS5wZW5kaW5nSGFuZGxlcy5zaXplXG4gIGNvbnN0IHJvb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oVVNFUl9DRUxMX1NFTEVDVE9SKVxuICByb290cy5mb3JFYWNoKChyb290KSA9PiB7XG4gICAgaWYgKHNob3VsZFNraXBDZWxsSW5uZXJEaXYocm9vdCkpIHJldHVyblxuICAgIGNvbnN0IGhhbmRsZXMgPSBjb2xsZWN0SGFuZGxlc0Zyb21Sb290KHJvb3QpXG4gICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgIHJ1bnRpbWUucGVuZGluZ0hhbmRsZXMuYWRkKGhhbmRsZSlcbiAgICAgIHJ1bnRpbWUuc2VlblRoaXNSdW4uYWRkKGhhbmRsZSlcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBydW50aW1lLnBlbmRpbmdIYW5kbGVzLnNpemUgLSBiZWZvcmVTaXplXG59XG5cbmNvbnN0IGhhc0Jsb2NraW5nVWkgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5ib2R5Py5pbm5lclRleHQ/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIlxuICByZXR1cm4gQkxPQ0tfS0VZV09SRFMuc29tZSgoa2V5d29yZCkgPT4gdGV4dC5pbmNsdWRlcyhrZXl3b3JkKSlcbn1cblxuY29uc3QgaGFzRW1wdHlTdGF0ZSA9ICgpID0+IEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwiZW1wdHlTdGF0ZVwiXScpKVxuXG5jb25zdCB3YWl0ID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbmNvbnN0IHJ1bkFjdGl2ZUltcG9ydGVyID0gYXN5bmMgKHJ1bnRpbWU6IEltcG9ydFJ1bnRpbWUpID0+IHtcbiAgbGV0IG5vTmV3Um91bmRzID0gMFxuXG4gIHdoaWxlICghcnVudGltZS5kaXNwb3NlZCkge1xuICAgIGNvbnN0IGJlZm9yZVNlZW4gPSBydW50aW1lLnNlZW5UaGlzUnVuLnNpemVcbiAgICBjb2xsZWN0VmlzaWJsZUhhbmRsZXMocnVudGltZSlcbiAgICBhd2FpdCBmbHVzaFBlbmRpbmcocnVudGltZSwgZmFsc2UpXG5cbiAgICBpZiAocnVudGltZS5pbXBvcnRlZFRoaXNSdW4gPj0gQUNUSVZFX01BWF9QRVJfUlVOKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxuICAgICAgICBmaW5pc2hlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICBsYXN0TWVzc2FnZTogYFJlYWNoZWQgcGVyLXJ1biBjYXAgKCR7QUNUSVZFX01BWF9QRVJfUlVOfSlgXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaGFzRW1wdHlTdGF0ZSgpKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxuICAgICAgICBmaW5pc2hlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICBsYXN0TWVzc2FnZTogXCJSZWFjaGVkIGVuZCBvZiBmb2xsb3dpbmcgbGlzdFwiXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaGFzQmxvY2tpbmdVaSgpKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgZmluaXNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiRGV0ZWN0ZWQgdmVyaWZpY2F0aW9uL2Jsb2NraW5nIHNjcmVlblwiXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjb25zdCBzZWVuRGVsdGEgPSBydW50aW1lLnNlZW5UaGlzUnVuLnNpemUgLSBiZWZvcmVTZWVuXG4gICAgaWYgKHNlZW5EZWx0YSA9PT0gMCkge1xuICAgICAgbm9OZXdSb3VuZHMgKz0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBub05ld1JvdW5kcyA9IDBcbiAgICB9XG5cbiAgICBpZiAobm9OZXdSb3VuZHMgPj0gQUNUSVZFX05PX05FV19MSU1JVCkge1xuICAgICAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBcImRvbmVcIixcbiAgICAgICAgZmluaXNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiTm8gbmV3IGhhbmRsZXMgZGV0ZWN0ZWRcIlxuICAgICAgfSlcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbEJ5KDAsIEFDVElWRV9TQ1JPTExfU1RFUClcbiAgICBhd2FpdCB3YWl0KEFDVElWRV9XQUlUX01TKVxuICB9XG5cbiAgYXdhaXQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIHRydWUpXG4gIG1heWJlV3JpdGVQcm9ncmVzcyhydW50aW1lLCB0cnVlKVxufVxuXG5jb25zdCBydW5QYXNzaXZlSW1wb3J0ZXIgPSAocnVudGltZTogSW1wb3J0UnVudGltZSkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBpZiAocnVudGltZS5kaXNwb3NlZCkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgY29udGludWVcbiAgICAgICAgY29uc3QgaGFuZGxlcyA9IGNvbGxlY3RIYW5kbGVzRnJvbVJvb3Qobm9kZSlcbiAgICAgICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgICAgICBydW50aW1lLnBlbmRpbmdIYW5kbGVzLmFkZChoYW5kbGUpXG4gICAgICAgICAgcnVudGltZS5zZWVuVGhpc1J1bi5hZGQoaGFuZGxlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIGZhbHNlKVxuICB9KVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbiAgY29sbGVjdFZpc2libGVIYW5kbGVzKHJ1bnRpbWUpXG4gIHZvaWQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIHRydWUpXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKCkgPT4ge1xuICAgIHJ1bnRpbWUuZGlzcG9zZWQgPSB0cnVlXG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocnVudGltZS5mbHVzaFRpbWVyKVxuICAgICAgcnVudGltZS5mbHVzaFRpbWVyID0gbnVsbFxuICAgIH1cbiAgICB2b2lkIGZsdXNoUGVuZGluZyhydW50aW1lLCB0cnVlKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RhcnRGb2xsb3dpbmdJbXBvcnRlciA9IChtb2RlOiBYY3NmU3luY01vZGUpID0+IHtcbiAgY29uc3QgcnVudGltZTogSW1wb3J0UnVudGltZSA9IHtcbiAgICBtb2RlLFxuICAgIHBlbmRpbmdIYW5kbGVzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICBzZWVuVGhpc1J1bjogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgZmx1c2hUaW1lcjogbnVsbCxcbiAgICBpbXBvcnRlZFRoaXNSdW46IDAsXG4gICAgdG90YWxLbm93bkZvbGxvd2luZzogMCxcbiAgICBkaXNwb3NlZDogZmFsc2UsXG4gICAgbGFzdFN0YXRlV3JpdGVBdDogMFxuICB9XG5cbiAgc2NoZWR1bGVGbHVzaChydW50aW1lKVxuXG4gIGlmIChtb2RlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICAgIHN0YXR1czogXCJydW5uaW5nXCIsXG4gICAgICBtb2RlOiBcImFjdGl2ZVwiLFxuICAgICAgc3RhcnRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgaW1wb3J0ZWRUaGlzUnVuOiAwLFxuICAgICAgZmluaXNoZWRBdDogdW5kZWZpbmVkLFxuICAgICAgbGFzdE1lc3NhZ2U6IFwiU3luYyBzdGFydGVkXCJcbiAgICB9KVxuICAgIHZvaWQgcnVuQWN0aXZlSW1wb3J0ZXIocnVudGltZSkuZmluYWxseSgoKSA9PiB7XG4gICAgICBydW50aW1lLmRpc3Bvc2VkID0gdHJ1ZVxuICAgICAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChydW50aW1lLmZsdXNoVGltZXIpXG4gICAgICAgIHJ1bnRpbWUuZmx1c2hUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgcnVuUGFzc2l2ZUltcG9ydGVyKHJ1bnRpbWUpXG59XG4iLCJleHBvcnQgY29uc3QgWENTRl9TWU5DX1NUQVRFX0tFWSA9IFwieGNzZl9zeW5jX3N0YXRlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX01FX0hBTkRMRV9LRVkgPSBcInhjc2ZfbWVfaGFuZGxlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX0ZPTExPV19DQUNIRV9LRVkgPSBcInhjc2ZfZm9sbG93X2NhY2hlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX0ZPTExPV0lOR19WRVJTSU9OX0tFWSA9IFwieGNzZl9mb2xsb3dpbmdfdmVyc2lvblwiXG5cbmV4cG9ydCB0eXBlIFhjc2ZTeW5jU3RhdHVzID1cbiAgfCBcImlkbGVcIlxuICB8IFwicnVubmluZ1wiXG4gIHwgXCJkb25lXCJcbiAgfCBcImVycm9yXCJcbiAgfCBcImNhbmNlbGVkXCJcblxuZXhwb3J0IHR5cGUgWGNzZlN5bmNNb2RlID0gXCJwYXNzaXZlXCIgfCBcImFjdGl2ZVwiXG5cbmV4cG9ydCB0eXBlIFhjc2ZTeW5jU3RhdGUgPSB7XG4gIHN0YXR1czogWGNzZlN5bmNTdGF0dXNcbiAgbW9kZTogWGNzZlN5bmNNb2RlXG4gIHN0YXJ0ZWRBdD86IG51bWJlclxuICBmaW5pc2hlZEF0PzogbnVtYmVyXG4gIGltcG9ydGVkVGhpc1J1bj86IG51bWJlclxuICB0b3RhbEtub3duRm9sbG93aW5nPzogbnVtYmVyXG4gIGxhc3RNZXNzYWdlPzogc3RyaW5nXG59XG5cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFhDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuY29uc3QgREJfTkFNRSA9IFwieGNzZl9kYlwiXG5jb25zdCBEQl9WRVJTSU9OID0gMVxuY29uc3QgU1RPUkVfTkFNRSA9IFwiZm9sbG93aW5nX3YxXCJcbmNvbnN0IFdBUk1VUF9CQVRDSF9TSVpFID0gMTAwMFxuXG5jb25zdCBSRVNFUlZFRF9QQVRIX1BSRUZJWEVTID0gW1xuICBcIi9pL1wiLFxuICBcIi9ob21lXCIsXG4gIFwiL3NlYXJjaFwiLFxuICBcIi9leHBsb3JlXCIsXG4gIFwiL21lc3NhZ2VzXCIsXG4gIFwiL25vdGlmaWNhdGlvbnNcIixcbiAgXCIvc2V0dGluZ3NcIlxuXVxuXG5jb25zdCBIQU5ETEVfUEFUSF9SRUdFWCA9IC9eXFwvW0EtWmEtejAtOV9dezEsMzB9JC9cblxudHlwZSBGb2xsb3dpbmdSZWNvcmQgPSB7XG4gIGhhbmRsZTogc3RyaW5nXG4gIHVwZGF0ZWRBdDogbnVtYmVyXG59XG5cbmNvbnN0IGZvbGxvd2luZ01lbW9yeSA9IG5ldyBTZXQ8c3RyaW5nPigpXG5sZXQgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSBmYWxzZVxubGV0IHdhcm11cFByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG5jb25zdCBoYXNMb2NhbFN0b3JhZ2VBcGkgPSAoKSA9PlxuICB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIEJvb2xlYW4oY2hyb21lLnN0b3JhZ2U/LmxvY2FsKVxuXG5jb25zdCBuZXh0RnJhbWUgPSAoKSA9PlxuICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKVxuICB9KVxuXG5jb25zdCBvcGVuRGIgPSAoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihEQl9OQU1FLCBEQl9WRVJTSU9OKVxuXG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0XG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoU1RPUkVfTkFNRSkpIHtcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSwge1xuICAgICAgICAgIGtleVBhdGg6IFwiaGFuZGxlXCJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpXG4gICAgfVxuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IgPz8gbmV3IEVycm9yKFwiRmFpbGVkIHRvIG9wZW4gSW5kZXhlZERCXCIpKVxuICAgIH1cbiAgfSlcblxuY29uc3Qgd2l0aFN0b3JlID0gPFQ+KFxuICBtb2RlOiBJREJUcmFuc2FjdGlvbk1vZGUsXG4gIGV4ZWN1dG9yOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlLCB0eDogSURCVHJhbnNhY3Rpb24pID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4gPT5cbiAgb3BlbkRiKCkudGhlbihcbiAgICAoZGIpID0+XG4gICAgICBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgbW9kZSlcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKVxuXG4gICAgICAgIGV4ZWN1dG9yKHN0b3JlLCB0eClcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXG5cbiAgICAgICAgdHgub25jb21wbGV0ZSA9ICgpID0+IGRiLmNsb3NlKClcbiAgICAgICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJREIgdHJhbnNhY3Rpb24gZmFpbGVkXCIpKVxuICAgICAgfSlcbiAgKVxuXG5jb25zdCByZXF1ZXN0VG9Qcm9taXNlID0gPFQ+KHJlcXVlc3Q6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IgPz8gbmV3IEVycm9yKFwiSURCIHJlcXVlc3QgZmFpbGVkXCIpKVxuICB9KVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlID0gKHJhdzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICBpZiAoIXJhdykgcmV0dXJuIG51bGxcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHJhdy50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eQCsvLCBcIlwiKVxuICByZXR1cm4gbm9ybWFsaXplZC5sZW5ndGggPiAwID8gbm9ybWFsaXplZCA6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RIYW5kbGVGcm9tSHJlZiA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFocmVmLnN0YXJ0c1dpdGgoXCIvXCIpKSByZXR1cm4gbnVsbFxuICBpZiAoUkVTRVJWRURfUEFUSF9QUkVGSVhFUy5zb21lKChwcmVmaXgpID0+IGhyZWYuc3RhcnRzV2l0aChwcmVmaXgpKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBwYXRobmFtZSA9IGhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXVxuICBpZiAoIUhBTkRMRV9QQVRIX1JFR0VYLnRlc3QocGF0aG5hbWUpKSByZXR1cm4gbnVsbFxuICByZXR1cm4gbm9ybWFsaXplSGFuZGxlKHBhdGhuYW1lLnNsaWNlKDEpKVxufVxuXG5leHBvcnQgY29uc3QgaGFzRm9sbG93aW5nSGFuZGxlU3luYyA9IChoYW5kbGU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhhbmRsZShoYW5kbGUpXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBmb2xsb3dpbmdNZW1vcnkuaGFzKG5vcm1hbGl6ZWQpXG59XG5cbmNvbnN0IHNldEZvbGxvd2luZ1ZlcnNpb24gPSAoKSA9PiB7XG4gIGlmICghaGFzTG9jYWxTdG9yYWdlQXBpKCkpIHJldHVyblxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXSwgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIocmVzdWx0W1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXSA/PyAwKSB8fCAwXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXTogY3VycmVudCArIDEgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGxvd2luZ01lbW9yeVNuYXBzaG90ID0gKCkgPT4gKHtcbiAgcmVhZHk6IGZvbGxvd2luZ01lbW9yeVJlYWR5LFxuICBzaXplOiBmb2xsb3dpbmdNZW1vcnkuc2l6ZVxufSlcblxuY29uc3Qgd2FybXVwRnJvbUtleSA9IGFzeW5jIChmcm9tS2V5OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gIHJldHVybiB3aXRoU3RvcmUoXCJyZWFkb25seVwiLCBhc3luYyAoc3RvcmUpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IGZyb21LZXkgPyBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGZyb21LZXksIHRydWUpIDogdW5kZWZpbmVkXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLm9wZW5DdXJzb3IocmFuZ2UpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHByb2Nlc3NlZCA9IDBcbiAgICAgIGxldCBsYXN0S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkZhaWxlZCB0byB3YXJtIHVwIGZvbGxvd2luZyBtZW1vcnlcIikpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdFxuICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgIHJlc29sdmUobnVsbClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGN1cnNvci52YWx1ZSBhcyBGb2xsb3dpbmdSZWNvcmRcbiAgICAgICAgZm9sbG93aW5nTWVtb3J5LmFkZChyZWNvcmQuaGFuZGxlKVxuICAgICAgICBsYXN0S2V5ID0gcmVjb3JkLmhhbmRsZVxuICAgICAgICBwcm9jZXNzZWQgKz0gMVxuXG4gICAgICAgIGlmIChwcm9jZXNzZWQgPj0gV0FSTVVQX0JBVENIX1NJWkUpIHtcbiAgICAgICAgICByZXNvbHZlKGxhc3RLZXkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJzb3IuY29udGludWUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IGxvYWRGb2xsb3dpbmdNZW1vcnlJbkNodW5rcyA9IGFzeW5jICgpID0+IHtcbiAgZm9sbG93aW5nTWVtb3J5LmNsZWFyKClcbiAgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSBmYWxzZVxuXG4gIGxldCBmcm9tS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IG5leHRLZXkgPSBhd2FpdCB3YXJtdXBGcm9tS2V5KGZyb21LZXkpXG4gICAgaWYgKCFuZXh0S2V5KSBicmVha1xuICAgIGZyb21LZXkgPSBuZXh0S2V5XG4gICAgYXdhaXQgbmV4dEZyYW1lKClcbiAgfVxuXG4gIGZvbGxvd2luZ01lbW9yeVJlYWR5ID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgZW5zdXJlRm9sbG93aW5nTWVtb3J5V2FybXVwID0gKCkgPT4ge1xuICBpZiAoIXdhcm11cFByb21pc2UpIHtcbiAgICB3YXJtdXBQcm9taXNlID0gbG9hZEZvbGxvd2luZ01lbW9yeUluQ2h1bmtzKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICB3YXJtdXBQcm9taXNlID0gbnVsbFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHdhcm11cFByb21pc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hGb2xsb3dpbmdNZW1vcnlGcm9tRGIgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGVuc3VyZUZvbGxvd2luZ01lbW9yeVdhcm11cCgpXG59XG5cbmV4cG9ydCBjb25zdCBjb3VudEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHdpdGhTdG9yZShcInJlYWRvbmx5XCIsIGFzeW5jIChzdG9yZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5jb3VudCgpXG4gICAgcmV0dXJuIHJlcXVlc3RUb1Byb21pc2UocmVxdWVzdClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGJhdGNoVXBzZXJ0Rm9sbG93aW5nID0gYXN5bmMgKGhhbmRsZXM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBBcnJheS5mcm9tKFxuICAgIG5ldyBTZXQoXG4gICAgICBoYW5kbGVzXG4gICAgICAgIC5tYXAoKGhhbmRsZSkgPT4gbm9ybWFsaXplSGFuZGxlKGhhbmRsZSkpXG4gICAgICAgIC5maWx0ZXIoKGhhbmRsZSk6IGhhbmRsZSBpcyBzdHJpbmcgPT4gQm9vbGVhbihoYW5kbGUpKVxuICAgIClcbiAgKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRlZENvdW50OiAwLFxuICAgICAgdG90YWxLbm93bkZvbGxvd2luZzogYXdhaXQgY291bnRGb2xsb3dpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcblxuICBjb25zdCBhZGRlZENvdW50ID0gYXdhaXQgd2l0aFN0b3JlKFwicmVhZHdyaXRlXCIsIGFzeW5jIChzdG9yZSkgPT4ge1xuICAgIGxldCBhZGRlZCA9IDBcbiAgICBmb3IgKGNvbnN0IGhhbmRsZSBvZiBub3JtYWxpemVkKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHJlcXVlc3RUb1Byb21pc2UoXG4gICAgICAgIHN0b3JlLmdldChoYW5kbGUpIGFzIElEQlJlcXVlc3Q8Rm9sbG93aW5nUmVjb3JkIHwgdW5kZWZpbmVkPlxuICAgICAgKVxuICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBhZGRlZCArPSAxXG4gICAgICB9XG4gICAgICBzdG9yZS5wdXQoeyBoYW5kbGUsIHVwZGF0ZWRBdDogbm93IH0gc2F0aXNmaWVzIEZvbGxvd2luZ1JlY29yZClcbiAgICAgIGZvbGxvd2luZ01lbW9yeS5hZGQoaGFuZGxlKVxuICAgIH1cblxuICAgIHJldHVybiBhZGRlZFxuICB9KVxuXG4gIGNvbnN0IHRvdGFsS25vd25Gb2xsb3dpbmcgPSBhd2FpdCBjb3VudEZvbGxvd2luZygpXG4gIGZvbGxvd2luZ01lbW9yeVJlYWR5ID0gdHJ1ZVxuICBzZXRGb2xsb3dpbmdWZXJzaW9uKClcblxuICByZXR1cm4ge1xuICAgIGFkZGVkQ291bnQsXG4gICAgdG90YWxLbm93bkZvbGxvd2luZ1xuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJmb2xsb3dpbmctYWN0aXZlLmU3NjYwMDI5LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);