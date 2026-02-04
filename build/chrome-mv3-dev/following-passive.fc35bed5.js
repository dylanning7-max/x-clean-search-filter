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
})({"lxX3Q":[function(require,module,exports) {
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
    "entryFilePath": "F:\\cursor\\workspace\\x-clean-search-filter\\src\\contents\\following-passive.ts",
    "bundleId": "d4f963e2fc35bed5",
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

},{}],"dpsEL":[function(require,module,exports) {
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
if (!isActiveSyncRoute()) (0, _followingImporter.startFollowingImporter)("passive");

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

},{"./constants":"b7WBk","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}]},["lxX3Q","dpsEL"], "dpsEL", "parcelRequireb3b3")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxnQkFBZ0IsSUFBSTtRQUN0QjtRQUVBLE9BQU87SUFDVDtJQUVBLE1BQU0sc0JBQXNCLE1BQU07SUFDbEMsdUJBQXVCO0lBQ3ZCO0lBRUEsT0FBTztRQUNMO1FBQ0E7SUFDRjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMi9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS05YWE2NDExNjlkOTRjZmNhLmpzIiwic3JjL2NvbnRlbnRzL2ZvbGxvd2luZy1wYXNzaXZlLnRzIiwic3JjL2xpYi9mb2xsb3dpbmctaW1wb3J0ZXIudHMiLCJzcmMvbGliL2NvbnN0YW50cy50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9saWIvZm9sbG93aW5nLXN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJGOlxcXFxjdXJzb3JcXFxcd29ya3NwYWNlXFxcXHgtY2xlYW4tc2VhcmNoLWZpbHRlclxcXFxzcmNcXFxcY29udGVudHNcXFxcZm9sbG93aW5nLXBhc3NpdmUudHNcIixcImJ1bmRsZUlkXCI6XCJkNGY5NjNlMmZjMzViZWQ1XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NvbnRlbnRTY3JpcHQgfSBmcm9tIFwicGxhc21vXCJcblxuaW1wb3J0IHsgc3RhcnRGb2xsb3dpbmdJbXBvcnRlciB9IGZyb20gXCIuLi9saWIvZm9sbG93aW5nLWltcG9ydGVyXCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ29udGVudFNjcmlwdCA9IHtcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly94LmNvbS8qL2ZvbGxvd2luZypcIiwgXCJodHRwczovL3R3aXR0ZXIuY29tLyovZm9sbG93aW5nKlwiXVxufVxuXG5jb25zdCBpc0FjdGl2ZVN5bmNSb3V0ZSA9ICgpID0+XG4gIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuaGFzKFwieGNzZl9zeW5jXCIpXG5cbmlmICghaXNBY3RpdmVTeW5jUm91dGUoKSkge1xuICBzdGFydEZvbGxvd2luZ0ltcG9ydGVyKFwicGFzc2l2ZVwiKVxufVxuXG4iLCJpbXBvcnQge1xuICBYQ1NGX1NZTkNfU1RBVEVfS0VZLFxuICB0eXBlIFhjc2ZTeW5jTW9kZSxcbiAgdHlwZSBYY3NmU3luY1N0YXRlXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5pbXBvcnQgeyBiYXRjaFVwc2VydEZvbGxvd2luZywgZXh0cmFjdEhhbmRsZUZyb21IcmVmIH0gZnJvbSBcIi4vZm9sbG93aW5nLXN0b3JlXCJcblxuY29uc3QgVVNFUl9DRUxMX1NFTEVDVE9SID0gJ1tkYXRhLXRlc3RpZD1cIlVzZXJDZWxsXCJdLCBkaXZbZGF0YS10ZXN0aWQ9XCJjZWxsSW5uZXJEaXZcIl0nXG5jb25zdCBVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUiA9ICdbZGF0YS10ZXN0aWQ9XCJVc2VyQ2VsbFwiXSdcbmNvbnN0IEZMVVNIX0JBVENIX1NJWkUgPSA1MFxuY29uc3QgRkxVU0hfSU5URVJWQUxfTVMgPSAxMDAwXG5jb25zdCBBQ1RJVkVfTUFYX1BFUl9SVU4gPSAyMDAwXG5jb25zdCBBQ1RJVkVfU0NST0xMX1NURVAgPSA4MDBcbmNvbnN0IEFDVElWRV9XQUlUX01TID0gMTQwMFxuY29uc3QgQUNUSVZFX05PX05FV19MSU1JVCA9IDEyXG5jb25zdCBCTE9DS19LRVlXT1JEUyA9IFtcbiAgXCJzdXNwaWNpb3VzXCIsXG4gIFwidW51c3VhbCBhY3Rpdml0eVwiLFxuICBcImNhcHRjaGFcIixcbiAgXCJhcmUgeW91IGEgcm9ib3RcIixcbiAgXCJoZWxwIHVzIGtlZXAgeCBzYWZlXCIsXG4gIFwiY29uZmlybSB5b3UncmUgaHVtYW5cIixcbiAgXCJ5b3VyIGFjY291bnQgaGFzIGJlZW4gbG9ja2VkXCJcbl1cblxudHlwZSBJbXBvcnRSdW50aW1lID0ge1xuICBtb2RlOiBYY3NmU3luY01vZGVcbiAgcGVuZGluZ0hhbmRsZXM6IFNldDxzdHJpbmc+XG4gIHNlZW5UaGlzUnVuOiBTZXQ8c3RyaW5nPlxuICBmbHVzaFRpbWVyOiBudW1iZXIgfCBudWxsXG4gIGltcG9ydGVkVGhpc1J1bjogbnVtYmVyXG4gIHRvdGFsS25vd25Gb2xsb3dpbmc6IG51bWJlclxuICBkaXNwb3NlZDogYm9vbGVhblxuICBsYXN0U3RhdGVXcml0ZUF0OiBudW1iZXJcbn1cblxuY29uc3QgaGFzTG9jYWxTdG9yYWdlQXBpID0gKCkgPT5cbiAgdHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCb29sZWFuKGNocm9tZS5zdG9yYWdlPy5sb2NhbClcblxuY29uc3Qgc2hvdWxkU2tpcENlbGxJbm5lckRpdiA9IChlbDogSFRNTEVsZW1lbnQpID0+XG4gIGVsLm1hdGNoZXMoJ2RpdltkYXRhLXRlc3RpZD1cImNlbGxJbm5lckRpdlwiXScpICYmXG4gIEJvb2xlYW4oZWwuY2xvc2VzdCgnW2RhdGEtdGVzdGlkPVwiVXNlckNlbGxcIl0nKSlcblxuY29uc3QgZXh0cmFjdFByaW1hcnlIYW5kbGVGcm9tQ2VsbCA9IChjZWxsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCByb290ID0gY2VsbC5tYXRjaGVzKFVTRVJfQ0VMTF9ST09UX1NFTEVDVE9SKVxuICAgID8gY2VsbFxuICAgIDogY2VsbC5jbG9zZXN0PEhUTUxFbGVtZW50PihVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUilcbiAgaWYgKCFyb290KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IG5hbWVOb2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2RpdltkYXRhLXRlc3RpZD1cIlVzZXItTmFtZVwiXScpXG4gIGZvciAoY29uc3QgbmFtZU5vZGUgb2YgbmFtZU5vZGVzKSB7XG4gICAgaWYgKG5hbWVOb2RlLmNsb3Nlc3QoVVNFUl9DRUxMX1JPT1RfU0VMRUNUT1IpICE9PSByb290KSBjb250aW51ZVxuXG4gICAgY29uc3QgbGlua3MgPSBuYW1lTm9kZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignYVtocmVmXj1cIi9cIl1bcm9sZT1cImxpbmtcIl0sIGFbaHJlZl49XCIvXCJdJylcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgIGNvbnN0IGhhbmRsZSA9IGV4dHJhY3RIYW5kbGVGcm9tSHJlZihsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPz8gXCJcIilcbiAgICAgIGlmIChoYW5kbGUpIHJldHVybiBoYW5kbGVcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjazogdXNlIHRoZSBmaXJzdCBwcm9maWxlLWxpa2UgbGluayBpbiB0aGUgY2FyZCBvcmRlci5cbiAgY29uc3QgZmFsbGJhY2tMaW5rcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJ2FbaHJlZl49XCIvXCJdW3JvbGU9XCJsaW5rXCJdLCBhW2hyZWZePVwiL1wiXScpXG4gIGZvciAoY29uc3QgbGluayBvZiBmYWxsYmFja0xpbmtzKSB7XG4gICAgaWYgKGxpbmsuY2xvc2VzdChVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUikgIT09IHJvb3QpIGNvbnRpbnVlXG4gICAgY29uc3QgaGFuZGxlID0gZXh0cmFjdEhhbmRsZUZyb21IcmVmKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA/PyBcIlwiKVxuICAgIGlmIChoYW5kbGUpIHJldHVybiBoYW5kbGVcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGNvbGxlY3RIYW5kbGVzRnJvbVJvb3QgPSAocm9vdDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaGFuZGxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgY29uc3QgYWRkRnJvbUVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSBleHRyYWN0UHJpbWFyeUhhbmRsZUZyb21DZWxsKGVsZW1lbnQpXG4gICAgaWYgKGhhbmRsZSkge1xuICAgICAgaGFuZGxlcy5hZGQoaGFuZGxlKVxuICAgIH1cbiAgfVxuXG4gIGlmIChyb290Lm1hdGNoZXMoVVNFUl9DRUxMX1NFTEVDVE9SKSAmJiAhc2hvdWxkU2tpcENlbGxJbm5lckRpdihyb290KSkge1xuICAgIGFkZEZyb21FbGVtZW50KHJvb3QpXG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFVTRVJfQ0VMTF9TRUxFQ1RPUikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHJldHVyblxuICAgIGFkZEZyb21FbGVtZW50KGVsKVxuICB9KVxuXG4gIHJldHVybiBBcnJheS5mcm9tKGhhbmRsZXMpXG59XG5cbmNvbnN0IHVwZGF0ZVN5bmNTdGF0ZSA9IChwYXRjaDogUGFydGlhbDxYY3NmU3luY1N0YXRlPikgPT4ge1xuICBpZiAoIWhhc0xvY2FsU3RvcmFnZUFwaSgpKSByZXR1cm5cblxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1hDU0ZfU1lOQ19TVEFURV9LRVldLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICAocmVzdWx0W1hDU0ZfU1lOQ19TVEFURV9LRVldIGFzIFhjc2ZTeW5jU3RhdGUgfCB1bmRlZmluZWQpID8/XG4gICAgICAoe1xuICAgICAgICBzdGF0dXM6IFwiaWRsZVwiLFxuICAgICAgICBtb2RlOiBcInBhc3NpdmVcIlxuICAgICAgfSBzYXRpc2ZpZXMgWGNzZlN5bmNTdGF0ZSlcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICBbWENTRl9TWU5DX1NUQVRFX0tFWV06IHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgLi4ucGF0Y2hcbiAgICAgIH0gc2F0aXNmaWVzIFhjc2ZTeW5jU3RhdGVcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBtYXliZVdyaXRlUHJvZ3Jlc3MgPSAocnVudGltZTogSW1wb3J0UnVudGltZSwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gIGlmICghZm9yY2UgJiYgbm93IC0gcnVudGltZS5sYXN0U3RhdGVXcml0ZUF0IDwgMjUwKSByZXR1cm5cbiAgcnVudGltZS5sYXN0U3RhdGVXcml0ZUF0ID0gbm93XG5cbiAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICBpbXBvcnRlZFRoaXNSdW46IHJ1bnRpbWUuaW1wb3J0ZWRUaGlzUnVuLFxuICAgIHRvdGFsS25vd25Gb2xsb3dpbmc6IHJ1bnRpbWUudG90YWxLbm93bkZvbGxvd2luZ1xuICB9KVxufVxuXG5jb25zdCBmbHVzaFBlbmRpbmcgPSBhc3luYyAocnVudGltZTogSW1wb3J0UnVudGltZSwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBpZiAoIWZvcmNlICYmIHJ1bnRpbWUucGVuZGluZ0hhbmRsZXMuc2l6ZSA8IEZMVVNIX0JBVENIX1NJWkUpIHJldHVyblxuICBpZiAocnVudGltZS5wZW5kaW5nSGFuZGxlcy5zaXplID09PSAwKSByZXR1cm5cblxuICBjb25zdCBoYW5kbGVzID0gQXJyYXkuZnJvbShydW50aW1lLnBlbmRpbmdIYW5kbGVzKVxuICBydW50aW1lLnBlbmRpbmdIYW5kbGVzLmNsZWFyKClcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWRkZWRDb3VudCwgdG90YWxLbm93bkZvbGxvd2luZyB9ID0gYXdhaXQgYmF0Y2hVcHNlcnRGb2xsb3dpbmcoaGFuZGxlcylcbiAgICBydW50aW1lLmltcG9ydGVkVGhpc1J1biArPSBhZGRlZENvdW50XG4gICAgcnVudGltZS50b3RhbEtub3duRm9sbG93aW5nID0gdG90YWxLbm93bkZvbGxvd2luZ1xuICAgIG1heWJlV3JpdGVQcm9ncmVzcyhydW50aW1lKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHVwZGF0ZVN5bmNTdGF0ZSh7XG4gICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgIGZpbmlzaGVkQXQ6IERhdGUubm93KCksXG4gICAgICBsYXN0TWVzc2FnZTpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cHNlcnQgZm9sbG93aW5nIGxpc3RcIlxuICAgIH0pXG4gICAgcnVudGltZS5kaXNwb3NlZCA9IHRydWVcbiAgfVxufVxuXG5jb25zdCBzY2hlZHVsZUZsdXNoID0gKHJ1bnRpbWU6IEltcG9ydFJ1bnRpbWUpID0+IHtcbiAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkgcmV0dXJuXG4gIHJ1bnRpbWUuZmx1c2hUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgdm9pZCBmbHVzaFBlbmRpbmcocnVudGltZSwgZmFsc2UpXG4gIH0sIEZMVVNIX0lOVEVSVkFMX01TKVxufVxuXG5jb25zdCBjb2xsZWN0VmlzaWJsZUhhbmRsZXMgPSAocnVudGltZTogSW1wb3J0UnVudGltZSkgPT4ge1xuICBjb25zdCBiZWZvcmVTaXplID0gcnVudGltZS5wZW5kaW5nSGFuZGxlcy5zaXplXG4gIGNvbnN0IHJvb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oVVNFUl9DRUxMX1NFTEVDVE9SKVxuICByb290cy5mb3JFYWNoKChyb290KSA9PiB7XG4gICAgaWYgKHNob3VsZFNraXBDZWxsSW5uZXJEaXYocm9vdCkpIHJldHVyblxuICAgIGNvbnN0IGhhbmRsZXMgPSBjb2xsZWN0SGFuZGxlc0Zyb21Sb290KHJvb3QpXG4gICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgIHJ1bnRpbWUucGVuZGluZ0hhbmRsZXMuYWRkKGhhbmRsZSlcbiAgICAgIHJ1bnRpbWUuc2VlblRoaXNSdW4uYWRkKGhhbmRsZSlcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBydW50aW1lLnBlbmRpbmdIYW5kbGVzLnNpemUgLSBiZWZvcmVTaXplXG59XG5cbmNvbnN0IGhhc0Jsb2NraW5nVWkgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5ib2R5Py5pbm5lclRleHQ/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIlxuICByZXR1cm4gQkxPQ0tfS0VZV09SRFMuc29tZSgoa2V5d29yZCkgPT4gdGV4dC5pbmNsdWRlcyhrZXl3b3JkKSlcbn1cblxuY29uc3QgaGFzRW1wdHlTdGF0ZSA9ICgpID0+IEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwiZW1wdHlTdGF0ZVwiXScpKVxuXG5jb25zdCB3YWl0ID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbmNvbnN0IHJ1bkFjdGl2ZUltcG9ydGVyID0gYXN5bmMgKHJ1bnRpbWU6IEltcG9ydFJ1bnRpbWUpID0+IHtcbiAgbGV0IG5vTmV3Um91bmRzID0gMFxuXG4gIHdoaWxlICghcnVudGltZS5kaXNwb3NlZCkge1xuICAgIGNvbnN0IGJlZm9yZVNlZW4gPSBydW50aW1lLnNlZW5UaGlzUnVuLnNpemVcbiAgICBjb2xsZWN0VmlzaWJsZUhhbmRsZXMocnVudGltZSlcbiAgICBhd2FpdCBmbHVzaFBlbmRpbmcocnVudGltZSwgZmFsc2UpXG5cbiAgICBpZiAocnVudGltZS5pbXBvcnRlZFRoaXNSdW4gPj0gQUNUSVZFX01BWF9QRVJfUlVOKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxuICAgICAgICBmaW5pc2hlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICBsYXN0TWVzc2FnZTogYFJlYWNoZWQgcGVyLXJ1biBjYXAgKCR7QUNUSVZFX01BWF9QRVJfUlVOfSlgXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaGFzRW1wdHlTdGF0ZSgpKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZG9uZVwiLFxuICAgICAgICBmaW5pc2hlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICBsYXN0TWVzc2FnZTogXCJSZWFjaGVkIGVuZCBvZiBmb2xsb3dpbmcgbGlzdFwiXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaGFzQmxvY2tpbmdVaSgpKSB7XG4gICAgICB1cGRhdGVTeW5jU3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgZmluaXNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiRGV0ZWN0ZWQgdmVyaWZpY2F0aW9uL2Jsb2NraW5nIHNjcmVlblwiXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjb25zdCBzZWVuRGVsdGEgPSBydW50aW1lLnNlZW5UaGlzUnVuLnNpemUgLSBiZWZvcmVTZWVuXG4gICAgaWYgKHNlZW5EZWx0YSA9PT0gMCkge1xuICAgICAgbm9OZXdSb3VuZHMgKz0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBub05ld1JvdW5kcyA9IDBcbiAgICB9XG5cbiAgICBpZiAobm9OZXdSb3VuZHMgPj0gQUNUSVZFX05PX05FV19MSU1JVCkge1xuICAgICAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBcImRvbmVcIixcbiAgICAgICAgZmluaXNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiTm8gbmV3IGhhbmRsZXMgZGV0ZWN0ZWRcIlxuICAgICAgfSlcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbEJ5KDAsIEFDVElWRV9TQ1JPTExfU1RFUClcbiAgICBhd2FpdCB3YWl0KEFDVElWRV9XQUlUX01TKVxuICB9XG5cbiAgYXdhaXQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIHRydWUpXG4gIG1heWJlV3JpdGVQcm9ncmVzcyhydW50aW1lLCB0cnVlKVxufVxuXG5jb25zdCBydW5QYXNzaXZlSW1wb3J0ZXIgPSAocnVudGltZTogSW1wb3J0UnVudGltZSkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBpZiAocnVudGltZS5kaXNwb3NlZCkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgY29udGludWVcbiAgICAgICAgY29uc3QgaGFuZGxlcyA9IGNvbGxlY3RIYW5kbGVzRnJvbVJvb3Qobm9kZSlcbiAgICAgICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgICAgICBydW50aW1lLnBlbmRpbmdIYW5kbGVzLmFkZChoYW5kbGUpXG4gICAgICAgICAgcnVudGltZS5zZWVuVGhpc1J1bi5hZGQoaGFuZGxlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIGZhbHNlKVxuICB9KVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbiAgY29sbGVjdFZpc2libGVIYW5kbGVzKHJ1bnRpbWUpXG4gIHZvaWQgZmx1c2hQZW5kaW5nKHJ1bnRpbWUsIHRydWUpXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKCkgPT4ge1xuICAgIHJ1bnRpbWUuZGlzcG9zZWQgPSB0cnVlXG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocnVudGltZS5mbHVzaFRpbWVyKVxuICAgICAgcnVudGltZS5mbHVzaFRpbWVyID0gbnVsbFxuICAgIH1cbiAgICB2b2lkIGZsdXNoUGVuZGluZyhydW50aW1lLCB0cnVlKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RhcnRGb2xsb3dpbmdJbXBvcnRlciA9IChtb2RlOiBYY3NmU3luY01vZGUpID0+IHtcbiAgY29uc3QgcnVudGltZTogSW1wb3J0UnVudGltZSA9IHtcbiAgICBtb2RlLFxuICAgIHBlbmRpbmdIYW5kbGVzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICBzZWVuVGhpc1J1bjogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgZmx1c2hUaW1lcjogbnVsbCxcbiAgICBpbXBvcnRlZFRoaXNSdW46IDAsXG4gICAgdG90YWxLbm93bkZvbGxvd2luZzogMCxcbiAgICBkaXNwb3NlZDogZmFsc2UsXG4gICAgbGFzdFN0YXRlV3JpdGVBdDogMFxuICB9XG5cbiAgc2NoZWR1bGVGbHVzaChydW50aW1lKVxuXG4gIGlmIChtb2RlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgdXBkYXRlU3luY1N0YXRlKHtcbiAgICAgIHN0YXR1czogXCJydW5uaW5nXCIsXG4gICAgICBtb2RlOiBcImFjdGl2ZVwiLFxuICAgICAgc3RhcnRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgaW1wb3J0ZWRUaGlzUnVuOiAwLFxuICAgICAgZmluaXNoZWRBdDogdW5kZWZpbmVkLFxuICAgICAgbGFzdE1lc3NhZ2U6IFwiU3luYyBzdGFydGVkXCJcbiAgICB9KVxuICAgIHZvaWQgcnVuQWN0aXZlSW1wb3J0ZXIocnVudGltZSkuZmluYWxseSgoKSA9PiB7XG4gICAgICBydW50aW1lLmRpc3Bvc2VkID0gdHJ1ZVxuICAgICAgaWYgKHJ1bnRpbWUuZmx1c2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChydW50aW1lLmZsdXNoVGltZXIpXG4gICAgICAgIHJ1bnRpbWUuZmx1c2hUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgcnVuUGFzc2l2ZUltcG9ydGVyKHJ1bnRpbWUpXG59XG4iLCJleHBvcnQgY29uc3QgWENTRl9TWU5DX1NUQVRFX0tFWSA9IFwieGNzZl9zeW5jX3N0YXRlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX01FX0hBTkRMRV9LRVkgPSBcInhjc2ZfbWVfaGFuZGxlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX0ZPTExPV19DQUNIRV9LRVkgPSBcInhjc2ZfZm9sbG93X2NhY2hlXCJcbmV4cG9ydCBjb25zdCBYQ1NGX0ZPTExPV0lOR19WRVJTSU9OX0tFWSA9IFwieGNzZl9mb2xsb3dpbmdfdmVyc2lvblwiXG5cbmV4cG9ydCB0eXBlIFhjc2ZTeW5jU3RhdHVzID1cbiAgfCBcImlkbGVcIlxuICB8IFwicnVubmluZ1wiXG4gIHwgXCJkb25lXCJcbiAgfCBcImVycm9yXCJcbiAgfCBcImNhbmNlbGVkXCJcblxuZXhwb3J0IHR5cGUgWGNzZlN5bmNNb2RlID0gXCJwYXNzaXZlXCIgfCBcImFjdGl2ZVwiXG5cbmV4cG9ydCB0eXBlIFhjc2ZTeW5jU3RhdGUgPSB7XG4gIHN0YXR1czogWGNzZlN5bmNTdGF0dXNcbiAgbW9kZTogWGNzZlN5bmNNb2RlXG4gIHN0YXJ0ZWRBdD86IG51bWJlclxuICBmaW5pc2hlZEF0PzogbnVtYmVyXG4gIGltcG9ydGVkVGhpc1J1bj86IG51bWJlclxuICB0b3RhbEtub3duRm9sbG93aW5nPzogbnVtYmVyXG4gIGxhc3RNZXNzYWdlPzogc3RyaW5nXG59XG5cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFhDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuY29uc3QgREJfTkFNRSA9IFwieGNzZl9kYlwiXG5jb25zdCBEQl9WRVJTSU9OID0gMVxuY29uc3QgU1RPUkVfTkFNRSA9IFwiZm9sbG93aW5nX3YxXCJcbmNvbnN0IFdBUk1VUF9CQVRDSF9TSVpFID0gMTAwMFxuXG5jb25zdCBSRVNFUlZFRF9QQVRIX1BSRUZJWEVTID0gW1xuICBcIi9pL1wiLFxuICBcIi9ob21lXCIsXG4gIFwiL3NlYXJjaFwiLFxuICBcIi9leHBsb3JlXCIsXG4gIFwiL21lc3NhZ2VzXCIsXG4gIFwiL25vdGlmaWNhdGlvbnNcIixcbiAgXCIvc2V0dGluZ3NcIlxuXVxuXG5jb25zdCBIQU5ETEVfUEFUSF9SRUdFWCA9IC9eXFwvW0EtWmEtejAtOV9dezEsMzB9JC9cblxudHlwZSBGb2xsb3dpbmdSZWNvcmQgPSB7XG4gIGhhbmRsZTogc3RyaW5nXG4gIHVwZGF0ZWRBdDogbnVtYmVyXG59XG5cbmNvbnN0IGZvbGxvd2luZ01lbW9yeSA9IG5ldyBTZXQ8c3RyaW5nPigpXG5sZXQgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSBmYWxzZVxubGV0IHdhcm11cFByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG5jb25zdCBoYXNMb2NhbFN0b3JhZ2VBcGkgPSAoKSA9PlxuICB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIEJvb2xlYW4oY2hyb21lLnN0b3JhZ2U/LmxvY2FsKVxuXG5jb25zdCBuZXh0RnJhbWUgPSAoKSA9PlxuICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKVxuICB9KVxuXG5jb25zdCBvcGVuRGIgPSAoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihEQl9OQU1FLCBEQl9WRVJTSU9OKVxuXG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0XG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoU1RPUkVfTkFNRSkpIHtcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSwge1xuICAgICAgICAgIGtleVBhdGg6IFwiaGFuZGxlXCJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpXG4gICAgfVxuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IgPz8gbmV3IEVycm9yKFwiRmFpbGVkIHRvIG9wZW4gSW5kZXhlZERCXCIpKVxuICAgIH1cbiAgfSlcblxuY29uc3Qgd2l0aFN0b3JlID0gPFQ+KFxuICBtb2RlOiBJREJUcmFuc2FjdGlvbk1vZGUsXG4gIGV4ZWN1dG9yOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlLCB0eDogSURCVHJhbnNhY3Rpb24pID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4gPT5cbiAgb3BlbkRiKCkudGhlbihcbiAgICAoZGIpID0+XG4gICAgICBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgbW9kZSlcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKVxuXG4gICAgICAgIGV4ZWN1dG9yKHN0b3JlLCB0eClcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXG5cbiAgICAgICAgdHgub25jb21wbGV0ZSA9ICgpID0+IGRiLmNsb3NlKClcbiAgICAgICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJREIgdHJhbnNhY3Rpb24gZmFpbGVkXCIpKVxuICAgICAgfSlcbiAgKVxuXG5jb25zdCByZXF1ZXN0VG9Qcm9taXNlID0gPFQ+KHJlcXVlc3Q6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IgPz8gbmV3IEVycm9yKFwiSURCIHJlcXVlc3QgZmFpbGVkXCIpKVxuICB9KVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlID0gKHJhdzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICBpZiAoIXJhdykgcmV0dXJuIG51bGxcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHJhdy50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eQCsvLCBcIlwiKVxuICByZXR1cm4gbm9ybWFsaXplZC5sZW5ndGggPiAwID8gbm9ybWFsaXplZCA6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RIYW5kbGVGcm9tSHJlZiA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFocmVmLnN0YXJ0c1dpdGgoXCIvXCIpKSByZXR1cm4gbnVsbFxuICBpZiAoUkVTRVJWRURfUEFUSF9QUkVGSVhFUy5zb21lKChwcmVmaXgpID0+IGhyZWYuc3RhcnRzV2l0aChwcmVmaXgpKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBwYXRobmFtZSA9IGhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXVxuICBpZiAoIUhBTkRMRV9QQVRIX1JFR0VYLnRlc3QocGF0aG5hbWUpKSByZXR1cm4gbnVsbFxuICByZXR1cm4gbm9ybWFsaXplSGFuZGxlKHBhdGhuYW1lLnNsaWNlKDEpKVxufVxuXG5leHBvcnQgY29uc3QgaGFzRm9sbG93aW5nSGFuZGxlU3luYyA9IChoYW5kbGU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhhbmRsZShoYW5kbGUpXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBmb2xsb3dpbmdNZW1vcnkuaGFzKG5vcm1hbGl6ZWQpXG59XG5cbmNvbnN0IHNldEZvbGxvd2luZ1ZlcnNpb24gPSAoKSA9PiB7XG4gIGlmICghaGFzTG9jYWxTdG9yYWdlQXBpKCkpIHJldHVyblxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXSwgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIocmVzdWx0W1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXSA/PyAwKSB8fCAwXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1hDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXTogY3VycmVudCArIDEgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGxvd2luZ01lbW9yeVNuYXBzaG90ID0gKCkgPT4gKHtcbiAgcmVhZHk6IGZvbGxvd2luZ01lbW9yeVJlYWR5LFxuICBzaXplOiBmb2xsb3dpbmdNZW1vcnkuc2l6ZVxufSlcblxuY29uc3Qgd2FybXVwRnJvbUtleSA9IGFzeW5jIChmcm9tS2V5OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gIHJldHVybiB3aXRoU3RvcmUoXCJyZWFkb25seVwiLCBhc3luYyAoc3RvcmUpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IGZyb21LZXkgPyBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGZyb21LZXksIHRydWUpIDogdW5kZWZpbmVkXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLm9wZW5DdXJzb3IocmFuZ2UpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHByb2Nlc3NlZCA9IDBcbiAgICAgIGxldCBsYXN0S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkZhaWxlZCB0byB3YXJtIHVwIGZvbGxvd2luZyBtZW1vcnlcIikpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdFxuICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgIHJlc29sdmUobnVsbClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGN1cnNvci52YWx1ZSBhcyBGb2xsb3dpbmdSZWNvcmRcbiAgICAgICAgZm9sbG93aW5nTWVtb3J5LmFkZChyZWNvcmQuaGFuZGxlKVxuICAgICAgICBsYXN0S2V5ID0gcmVjb3JkLmhhbmRsZVxuICAgICAgICBwcm9jZXNzZWQgKz0gMVxuXG4gICAgICAgIGlmIChwcm9jZXNzZWQgPj0gV0FSTVVQX0JBVENIX1NJWkUpIHtcbiAgICAgICAgICByZXNvbHZlKGxhc3RLZXkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJzb3IuY29udGludWUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IGxvYWRGb2xsb3dpbmdNZW1vcnlJbkNodW5rcyA9IGFzeW5jICgpID0+IHtcbiAgZm9sbG93aW5nTWVtb3J5LmNsZWFyKClcbiAgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSBmYWxzZVxuXG4gIGxldCBmcm9tS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IG5leHRLZXkgPSBhd2FpdCB3YXJtdXBGcm9tS2V5KGZyb21LZXkpXG4gICAgaWYgKCFuZXh0S2V5KSBicmVha1xuICAgIGZyb21LZXkgPSBuZXh0S2V5XG4gICAgYXdhaXQgbmV4dEZyYW1lKClcbiAgfVxuXG4gIGZvbGxvd2luZ01lbW9yeVJlYWR5ID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgZW5zdXJlRm9sbG93aW5nTWVtb3J5V2FybXVwID0gKCkgPT4ge1xuICBpZiAoIXdhcm11cFByb21pc2UpIHtcbiAgICB3YXJtdXBQcm9taXNlID0gbG9hZEZvbGxvd2luZ01lbW9yeUluQ2h1bmtzKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICB3YXJtdXBQcm9taXNlID0gbnVsbFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHdhcm11cFByb21pc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hGb2xsb3dpbmdNZW1vcnlGcm9tRGIgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGVuc3VyZUZvbGxvd2luZ01lbW9yeVdhcm11cCgpXG59XG5cbmV4cG9ydCBjb25zdCBjb3VudEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHdpdGhTdG9yZShcInJlYWRvbmx5XCIsIGFzeW5jIChzdG9yZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5jb3VudCgpXG4gICAgcmV0dXJuIHJlcXVlc3RUb1Byb21pc2UocmVxdWVzdClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGJhdGNoVXBzZXJ0Rm9sbG93aW5nID0gYXN5bmMgKGhhbmRsZXM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBBcnJheS5mcm9tKFxuICAgIG5ldyBTZXQoXG4gICAgICBoYW5kbGVzXG4gICAgICAgIC5tYXAoKGhhbmRsZSkgPT4gbm9ybWFsaXplSGFuZGxlKGhhbmRsZSkpXG4gICAgICAgIC5maWx0ZXIoKGhhbmRsZSk6IGhhbmRsZSBpcyBzdHJpbmcgPT4gQm9vbGVhbihoYW5kbGUpKVxuICAgIClcbiAgKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRlZENvdW50OiAwLFxuICAgICAgdG90YWxLbm93bkZvbGxvd2luZzogYXdhaXQgY291bnRGb2xsb3dpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcblxuICBjb25zdCBhZGRlZENvdW50ID0gYXdhaXQgd2l0aFN0b3JlKFwicmVhZHdyaXRlXCIsIGFzeW5jIChzdG9yZSkgPT4ge1xuICAgIGxldCBhZGRlZCA9IDBcbiAgICBmb3IgKGNvbnN0IGhhbmRsZSBvZiBub3JtYWxpemVkKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHJlcXVlc3RUb1Byb21pc2UoXG4gICAgICAgIHN0b3JlLmdldChoYW5kbGUpIGFzIElEQlJlcXVlc3Q8Rm9sbG93aW5nUmVjb3JkIHwgdW5kZWZpbmVkPlxuICAgICAgKVxuICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBhZGRlZCArPSAxXG4gICAgICB9XG4gICAgICBzdG9yZS5wdXQoeyBoYW5kbGUsIHVwZGF0ZWRBdDogbm93IH0gc2F0aXNmaWVzIEZvbGxvd2luZ1JlY29yZClcbiAgICAgIGZvbGxvd2luZ01lbW9yeS5hZGQoaGFuZGxlKVxuICAgIH1cblxuICAgIHJldHVybiBhZGRlZFxuICB9KVxuXG4gIGNvbnN0IHRvdGFsS25vd25Gb2xsb3dpbmcgPSBhd2FpdCBjb3VudEZvbGxvd2luZygpXG4gIGZvbGxvd2luZ01lbW9yeVJlYWR5ID0gdHJ1ZVxuICBzZXRGb2xsb3dpbmdWZXJzaW9uKClcblxuICByZXR1cm4ge1xuICAgIGFkZGVkQ291bnQsXG4gICAgdG90YWxLbm93bkZvbGxvd2luZ1xuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJmb2xsb3dpbmctcGFzc2l2ZS5mYzM1YmVkNS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);