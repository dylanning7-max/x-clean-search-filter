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
})({"fuuC6":[function(require,module,exports) {
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
    "entryFilePath": "F:\\cursor\\workspace\\x-clean-search-filter\\src\\contents\\index.ts",
    "bundleId": "080cb7f1f9c199dd",
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

},{}],"69aao":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _meHandle = require("../lib/me-handle");
var _navigationWatcher = require("../lib/navigation-watcher");
var _searchFilter = require("../lib/search-filter");
const config = {
    matches: [
        "https://x.com/*",
        "https://twitter.com/*"
    ]
};
console.log("[XCSF] content script loaded");
(0, _searchFilter.installOnce)();
(0, _meHandle.detectAndPersistMeHandle)();
const navigationWatcher = new (0, _navigationWatcher.NavigationWatcher)({
    onNavigate: (event, { from, to })=>{
        switch(event){
            case "enter-search":
                console.log("[XCSF] Enter Search", {
                    from,
                    to
                });
                (0, _searchFilter.setRouteActive)(true);
                break;
            case "leave-search":
                console.log("[XCSF] Leave Search", {
                    from,
                    to
                });
                (0, _searchFilter.setRouteActive)(false);
                break;
            case "search-to-search":
                console.log("[XCSF] Search-to-Search", {
                    from,
                    to
                });
                (0, _searchFilter.setRouteActive)(true);
                break;
            default:
                break;
        }
    }
});
navigationWatcher.start();
if ((0, _navigationWatcher.isSearchUrl)(window.location.href)) (0, _searchFilter.setRouteActive)(true);

},{"../lib/me-handle":"dWNfC","../lib/navigation-watcher":"3j5KC","../lib/search-filter":"9GgVM","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"dWNfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectAndPersistMeHandle", ()=>detectAndPersistMeHandle);
var _constants = require("./constants");
var _followingStore = require("./following-store");
const MAX_ME_HANDLE_RETRY = 10;
const RETRY_INTERVAL_MS = 1000;
const hasLocalStorageApi = ()=>typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
const readMeHandleFromDom = ()=>{
    const profileLink = document.querySelector('a[data-testid="AppTabBar_Profile_Link"][href]');
    if (!profileLink) return null;
    const href = profileLink.getAttribute("href") ?? "";
    return (0, _followingStore.extractHandleFromHref)(href);
};
const detectAndPersistMeHandle = ()=>{
    if (!hasLocalStorageApi()) return;
    let attempts = 0;
    const timer = window.setInterval(()=>{
        const handle = readMeHandleFromDom();
        attempts += 1;
        if (handle) {
            chrome.storage.local.set({
                [(0, _constants.XCSF_ME_HANDLE_KEY)]: handle
            });
            window.clearInterval(timer);
            return;
        }
        if (attempts >= MAX_ME_HANDLE_RETRY) window.clearInterval(timer);
    }, RETRY_INTERVAL_MS);
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

},{"./constants":"b7WBk","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"3j5KC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XCSF_NAVIGATION_EVENT", ()=>XCSF_NAVIGATION_EVENT);
parcelHelpers.export(exports, "installNavigationBridgeOnce", ()=>installNavigationBridgeOnce);
parcelHelpers.export(exports, "isSearchUrl", ()=>isSearchUrl);
parcelHelpers.export(exports, "NavigationWatcher", ()=>NavigationWatcher);
const XCSF_NAVIGATION_EVENT = "xcsf:navigation";
let bridgeInstalled = false;
let lastEmittedHref = "";
let urlMutationObserver = null;
let mutationCheckRafId = null;
const emitNavigationEvent = (force = false)=>{
    const href = window.location.href;
    if (!force && href === lastEmittedHref) return;
    lastEmittedHref = href;
    const payload = {
        href,
        pathname: window.location.pathname,
        search: window.location.search
    };
    window.dispatchEvent(new CustomEvent(XCSF_NAVIGATION_EVENT, {
        detail: payload
    }));
};
const patchHistoryMethod = (method)=>{
    const original = history[method];
    history[method] = function(...args) {
        const result = original.apply(history, args);
        emitNavigationEvent(true);
        return result;
    };
};
const installNavigationBridgeOnce = ()=>{
    if (bridgeInstalled) return;
    bridgeInstalled = true;
    patchHistoryMethod("pushState");
    patchHistoryMethod("replaceState");
    window.addEventListener("popstate", ()=>emitNavigationEvent(true));
    urlMutationObserver = new MutationObserver(()=>{
        if (mutationCheckRafId !== null) return;
        mutationCheckRafId = window.requestAnimationFrame(()=>{
            mutationCheckRafId = null;
            emitNavigationEvent(false);
        });
    });
    urlMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    emitNavigationEvent(true);
};
const isSearchUrl = (href)=>{
    try {
        const url = new URL(href);
        return url.pathname.startsWith("/search");
    } catch  {
        return href.includes("/search");
    }
};
class NavigationWatcher {
    constructor({ onNavigate }){
        this.onNavigationEvent = ()=>{
            this.checkForNavigation();
        };
        this.onNavigate = onNavigate;
        this.lastUrl = window.location.href;
    }
    start() {
        installNavigationBridgeOnce();
        window.addEventListener(XCSF_NAVIGATION_EVENT, this.onNavigationEvent);
        this.checkForNavigation();
    }
    stop() {
        window.removeEventListener(XCSF_NAVIGATION_EVENT, this.onNavigationEvent);
    }
    checkForNavigation() {
        const currentUrl = window.location.href;
        if (currentUrl === this.lastUrl) return;
        const from = this.lastUrl;
        const to = currentUrl;
        const wasSearch = isSearchUrl(from);
        const isSearch = isSearchUrl(to);
        if (!wasSearch && isSearch) this.onNavigate("enter-search", {
            from,
            to
        });
        else if (wasSearch && !isSearch) this.onNavigate("leave-search", {
            from,
            to
        });
        else if (wasSearch && isSearch) this.onNavigate("search-to-search", {
            from,
            to
        });
        this.lastUrl = currentUrl;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"9GgVM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureStylesInjected", ()=>ensureStylesInjected);
parcelHelpers.export(exports, "getTweetAuthorHandle", ()=>getTweetAuthorHandle);
parcelHelpers.export(exports, "classifyCell", ()=>classifyCell);
parcelHelpers.export(exports, "applyStyles", ()=>applyStyles);
parcelHelpers.export(exports, "collectUserCellsFromNode", ()=>collectUserCellsFromNode);
parcelHelpers.export(exports, "resetStats", ()=>resetStats);
parcelHelpers.export(exports, "setFilterEnabled", ()=>setFilterEnabled);
parcelHelpers.export(exports, "syncEnabledFromStorage", ()=>syncEnabledFromStorage);
parcelHelpers.export(exports, "installOnce", ()=>installOnce);
parcelHelpers.export(exports, "setRouteActive", ()=>setRouteActive);
var _constants = require("./constants");
var _followingStore = require("./following-store");
const DEBUG = false;
const STYLE_ID = "xcsf-style";
const STATS_KEY = "xcsf_stats";
const FOLLOW_CACHE_KEY = "xcsf_follow_cache";
const MAX_CELLS_PER_FRAME = 50;
const CACHE_TTL_MS = 604800000;
const PROCESSED_ATTR = "data-xcsf-processed";
const STATE_ATTR = "data-xcsf-state";
const USER_CELL_SELECTOR = '[data-testid="UserCell"], div[data-testid="cellInnerDiv"]';
const USER_CELL_ROOT_SELECTOR = '[data-testid="UserCell"]';
const TWEET_SELECTOR = 'article[data-testid="tweet"]';
const CANDIDATE_SELECTOR = `${USER_CELL_SELECTOR}, ${TWEET_SELECTOR}`;
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
]);
const TWEET_HANDLE_DENYLIST_PREFIXES = [
    "/i/",
    "/home",
    "/search",
    "/explore",
    "/messages",
    "/notifications",
    "/settings"
];
const HANDLE_PATH_REGEX = /^\/[A-Za-z0-9_]{1,30}$/;
const shouldSkipCellInnerDiv = (el)=>el.matches('div[data-testid="cellInnerDiv"]') && Boolean(el.closest('[data-testid="UserCell"]'));
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
`;
let followCache = {};
let followCacheLoaded = false;
let followCachePersistTimer = null;
let followCacheDirty = false;
let dimmedCount = 0;
let unknownCount = 0;
let statsTimer = null;
let lastSentStats = "";
let statsDirty = false;
let nodeStateRegistry = new WeakMap();
let enabledWanted = true;
let routeActive = false;
let running = false;
let storageHydrated = false;
let installDone = false;
let clickHandlerInstalled = false;
let tweetRescanTimer = null;
let tweetBatchRescanRafId = null;
const tweetBatchRescanQueue = new Set();
let tweetBatchRescanReason = "unknown";
const handleMemo = new WeakMap();
const ensureStylesInjected = ()=>{
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLE_CONTENT;
    document.head.appendChild(style);
};
const hasLocalStorageApi = ()=>typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
const setLocal = (items)=>{
    if (!hasLocalStorageApi()) return;
    chrome.storage.local.set(items);
};
const getLocal = (key)=>new Promise((resolve)=>{
        if (!hasLocalStorageApi()) {
            resolve(undefined);
            return;
        }
        chrome.storage.local.get([
            key
        ], (result)=>{
            resolve(result[key]);
        });
    });
const normalizeHandle = (raw)=>{
    if (!raw) return null;
    const normalized = raw.trim().toLowerCase().replace(/^@+/, "");
    return normalized.length > 0 ? normalized : null;
};
const parseFollowCache = (raw)=>{
    let value = raw;
    if (typeof value === "string") try {
        value = JSON.parse(value);
    } catch  {
        return {};
    }
    if (!value || typeof value !== "object") return {};
    const parsed = {};
    for (const [rawHandle, rawEntry] of Object.entries(value)){
        const handle = normalizeHandle(rawHandle);
        if (!handle || !rawEntry || typeof rawEntry !== "object") continue;
        const entry = rawEntry;
        const state = entry.state;
        const updatedAt = entry.updatedAt;
        if ((state === "followed" || state === "pending" || state === "not_followed") && typeof updatedAt === "number") parsed[handle] = {
            state,
            updatedAt
        };
    }
    return parsed;
};
const extractHandleFromPathname = (pathname)=>{
    const path = pathname.split("?")[0].split("#")[0];
    const parts = path.split("/").filter(Boolean);
    if (parts.length !== 1) return null;
    const segment = parts[0].toLowerCase();
    if (RESERVED_PATH_SEGMENTS.has(segment)) return null;
    return normalizeHandle(segment);
};
const extractHandleFromLink = (href)=>{
    try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return null;
        return extractHandleFromPathname(url.pathname);
    } catch  {
        return null;
    }
};
const extractHandleFromUserCell = (cell)=>{
    const root = cell.matches(USER_CELL_ROOT_SELECTOR) ? cell : cell.closest(USER_CELL_ROOT_SELECTOR);
    if (!root) return null;
    const nameNodes = root.querySelectorAll('div[data-testid="User-Name"]');
    for (const nameNode of nameNodes){
        if (nameNode.closest(USER_CELL_ROOT_SELECTOR) !== root) continue;
        const links = nameNode.querySelectorAll('a[href^="/"][role="link"], a[href^="/"]');
        for (const link of links){
            const handle = extractHandleFromLink(link.getAttribute("href") ?? "");
            if (handle) return handle;
        }
    }
    return null;
};
const getTweetAuthorHandle = (articleEl)=>{
    const userNameNodes = articleEl.querySelectorAll('div[data-testid="User-Name"]');
    for (const userNameNode of userNameNodes){
        if (userNameNode.closest(TWEET_SELECTOR) !== articleEl) continue;
        const links = userNameNode.querySelectorAll("a[href]");
        for (const link of links){
            const href = link.getAttribute("href") ?? "";
            if (!href.startsWith("/")) continue;
            if (TWEET_HANDLE_DENYLIST_PREFIXES.some((prefix)=>href.startsWith(prefix))) continue;
            const pathname = href.split("?")[0].split("#")[0];
            if (!HANDLE_PATH_REGEX.test(pathname)) continue;
            const handle = normalizeHandle(pathname.slice(1));
            if (handle) return handle;
        }
    }
    return null;
};
const schedulePersistFollowCache = ()=>{
    if (!followCacheDirty || followCachePersistTimer !== null) return;
    followCachePersistTimer = window.setTimeout(()=>{
        followCachePersistTimer = null;
        if (!followCacheDirty) return;
        followCacheDirty = false;
        setLocal({
            [FOLLOW_CACHE_KEY]: followCache
        });
    }, 300);
};
const pruneExpiredCacheEntries = ()=>{
    const now = Date.now();
    let changed = false;
    Object.keys(followCache).forEach((key)=>{
        if (now - followCache[key].updatedAt > CACHE_TTL_MS) {
            delete followCache[key];
            changed = true;
        }
    });
    if (changed) {
        followCacheDirty = true;
        schedulePersistFollowCache();
    }
};
const getCachedFollowState = (handle)=>{
    if (!handle) return null;
    const entry = followCache[handle];
    if (!entry) return null;
    if (Date.now() - entry.updatedAt > CACHE_TTL_MS) {
        delete followCache[handle];
        followCacheDirty = true;
        schedulePersistFollowCache();
        return null;
    }
    return entry.state;
};
const statusFromCachedState = (cachedState)=>{
    if (cachedState === "followed") return "following";
    if (cachedState === "pending") return "pending";
    if (cachedState === "not_followed") return "not_followed";
    return "unknown";
};
const resolveStatusByHandle = (handle)=>{
    const cachedState = getCachedFollowState(handle);
    if (cachedState) return statusFromCachedState(cachedState);
    if (handle && (0, _followingStore.hasFollowingHandleSync)(handle)) return "following";
    return "unknown";
};
const readHandleForRoot = (rootEl, options)=>{
    const memoized = handleMemo.get(rootEl);
    if (!options?.forceRefresh && memoized) return memoized;
    let handle = null;
    if (rootEl.matches(TWEET_SELECTOR)) handle = getTweetAuthorHandle(rootEl);
    else if (rootEl.matches(USER_CELL_SELECTOR)) handle = extractHandleFromUserCell(rootEl);
    if (handle) {
        handleMemo.set(rootEl, handle);
        return handle;
    }
    if (memoized) // Handle could change when X reuses node shells; allow fresh lookup to reset memo.
    handleMemo.delete(rootEl);
    return null;
};
const flushTweetBatchRescan = ()=>{
    tweetBatchRescanRafId = null;
    if (!running || !routeActive || !enabledWanted) {
        tweetBatchRescanQueue.clear();
        return;
    }
    let processedCount = 0;
    const iterator = tweetBatchRescanQueue.values();
    while(processedCount < MAX_CELLS_PER_FRAME){
        const next = iterator.next();
        if (next.done) break;
        const tweet = next.value;
        tweetBatchRescanQueue.delete(tweet);
        if (tweet.isConnected) processTweet(tweet, tweetBatchRescanReason);
        else removeTrackedNode(tweet);
        processedCount += 1;
    }
    if (tweetBatchRescanQueue.size > 0) tweetBatchRescanRafId = window.requestAnimationFrame(flushTweetBatchRescan);
};
const clearTweetBatchRescan = ()=>{
    tweetBatchRescanQueue.clear();
    if (tweetBatchRescanRafId !== null) {
        window.cancelAnimationFrame(tweetBatchRescanRafId);
        tweetBatchRescanRafId = null;
    }
};
const rescanAllTweets = (reason)=>{
    if (!running || !routeActive || !enabledWanted) return;
    document.querySelectorAll(TWEET_SELECTOR).forEach((tweet)=>{
        tweetBatchRescanQueue.add(tweet);
    });
    if (tweetBatchRescanQueue.size === 0) return;
    tweetBatchRescanReason = reason;
    if (tweetBatchRescanRafId === null) tweetBatchRescanRafId = window.requestAnimationFrame(flushTweetBatchRescan);
};
const queueTweetRescan = ()=>{
    if (tweetRescanTimer !== null) return;
    tweetRescanTimer = window.setTimeout(()=>{
        tweetRescanTimer = null;
        if (!running || !routeActive || !enabledWanted) return;
        rescanAllTweets("cache-update");
    }, 250);
};
const upsertFollowCache = (handle, status)=>{
    if (!handle) return;
    if (status !== "following" && status !== "pending" && status !== "not_followed") return;
    const nextState = status === "following" ? "followed" : status;
    const prev = followCache[handle];
    if (prev && prev.state === nextState) followCache[handle] = {
        ...prev,
        updatedAt: Date.now()
    };
    else {
        followCache[handle] = {
            state: nextState,
            updatedAt: Date.now()
        };
        queueTweetRescan();
    }
    followCacheDirty = true;
    schedulePersistFollowCache();
};
const scheduleStatsFlush = ()=>{
    statsDirty = true;
    if (statsTimer !== null) return;
    statsTimer = window.setTimeout(()=>{
        statsTimer = null;
        if (!statsDirty) return;
        statsDirty = false;
        const payload = {
            dimmedCount,
            unknownCount,
            updatedAt: Date.now()
        };
        const key = `${payload.dimmedCount}:${payload.unknownCount}`;
        if (key === lastSentStats) return;
        lastSentStats = key;
        setLocal({
            [STATS_KEY]: payload
        });
    }, 200);
};
const decrementCounts = (state)=>{
    if (state === "followed" || state === "pending") dimmedCount = Math.max(0, dimmedCount - 1);
    if (state === "unknown") unknownCount = Math.max(0, unknownCount - 1);
};
const incrementCounts = (state)=>{
    if (state === "followed" || state === "pending") dimmedCount += 1;
    if (state === "unknown") unknownCount += 1;
};
const setNodeState = (el, nextState)=>{
    const prevState = nodeStateRegistry.get(el);
    if (prevState === nextState) return;
    if (prevState) decrementCounts(prevState);
    incrementCounts(nextState);
    nodeStateRegistry.set(el, nextState);
    scheduleStatsFlush();
};
const removeTrackedNode = (el)=>{
    const prevState = nodeStateRegistry.get(el);
    if (!prevState) return;
    decrementCounts(prevState);
    nodeStateRegistry.delete(el);
    scheduleStatsFlush();
};
const toMarkerState = (status)=>status === "following" ? "followed" : status;
const markElementState = (el, status)=>{
    const shouldDim = status === "following" || status === "pending";
    const markerState = toMarkerState(status);
    const currentState = el.getAttribute(STATE_ATTR);
    const currentProcessed = el.getAttribute(PROCESSED_ATTR);
    const hasDimClass = el.classList.contains("xcsf-dim");
    const hasDebugClass = el.classList.contains("xcsf-debug");
    const shouldUpdateDom = currentState !== markerState || currentProcessed !== "1" || hasDimClass !== shouldDim || hasDebugClass !== DEBUG;
    if (shouldUpdateDom) {
        if (shouldDim) {
            el.classList.add("xcsf-dim");
            if (DEBUG) el.classList.add("xcsf-debug");
            else el.classList.remove("xcsf-debug");
        } else el.classList.remove("xcsf-dim", "xcsf-debug");
        el.setAttribute(PROCESSED_ATTR, "1");
        el.setAttribute(STATE_ATTR, markerState);
    }
    setNodeState(el, markerState);
};
const getButtonStatus = (button)=>{
    const ariaLabel = button.getAttribute("aria-label")?.toLowerCase() ?? "";
    const testId = button.getAttribute("data-testid")?.toLowerCase() ?? "";
    if (ariaLabel.includes("pending")) return "pending";
    if (ariaLabel.includes("following")) return "following";
    if (testId.includes("pending") || testId.includes("cancel")) return "pending";
    if (testId.includes("unfollow")) return "following";
    if (ariaLabel.includes("follow") || testId.includes("follow")) return "not_followed";
    return null;
};
const classifyCell = (cell)=>{
    const buttons = cell.querySelectorAll("button");
    let hasNotFollowed = false;
    for (const button of buttons){
        const status = getButtonStatus(button);
        if (status === "pending") return "pending";
        if (status === "following") return "following";
        if (status === "not_followed") hasNotFollowed = true;
    }
    return hasNotFollowed ? "not_followed" : "unknown";
};
const processUserCell = (cell)=>{
    const status = classifyCell(cell);
    const handle = extractHandleFromUserCell(cell);
    if (handle) handleMemo.set(cell, handle);
    upsertFollowCache(handle, status);
    markElementState(cell, status);
};
const processTweet = (article, reason = "observer")=>{
    const handle = getTweetAuthorHandle(article);
    if (handle) handleMemo.set(article, handle);
    const cachedState = getCachedFollowState(handle);
    const status = resolveStatusByHandle(handle);
    const nextState = toMarkerState(status);
    const previousState = article.getAttribute(STATE_ATTR);
    markElementState(article, status);
    if ((cachedState === "followed" || cachedState === "pending") && previousState !== nextState && handle) {
        const logState = cachedState === "followed" ? "followed" : "pending";
        console.log(`[XCSF Cache-Hit] handle: @${handle}, state: ${logState}, reason: ${reason}`);
    }
};
const applyStyles = (cell, status)=>{
    markElementState(cell, status);
};
const collectUserCellsFromNode = (node)=>{
    if (!(node instanceof HTMLElement)) return [];
    const results = new Set();
    const maybeAddCell = (el)=>{
        if (shouldSkipCellInnerDiv(el)) return;
        results.add(el);
    };
    if (node.matches(USER_CELL_SELECTOR)) maybeAddCell(node);
    node.querySelectorAll(USER_CELL_SELECTOR).forEach((el)=>{
        maybeAddCell(el);
    });
    return Array.from(results);
};
const collectCandidatesFromNode = (node)=>{
    if (!(node instanceof HTMLElement)) return [];
    const results = new Set();
    const maybeAddCandidate = (el)=>{
        if (shouldSkipCellInnerDiv(el)) return;
        results.add(el);
    };
    if (node.matches(CANDIDATE_SELECTOR)) maybeAddCandidate(node);
    node.querySelectorAll(CANDIDATE_SELECTOR).forEach((el)=>{
        maybeAddCandidate(el);
    });
    return Array.from(results);
};
class SearchObserver {
    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.observer = new MutationObserver((mutations)=>{
            this.handleMutations(mutations);
        });
        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
    }
    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        this.observer?.disconnect();
        this.observer = null;
        this.queue.clear();
        this.dirtySet.clear();
        if (this.rafId !== null) {
            window.cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
        if (this.healRafId !== null) {
            window.cancelAnimationFrame(this.healRafId);
            this.healRafId = null;
        }
    }
    enqueueDocument(selector, force = false) {
        document.querySelectorAll(selector).forEach((el)=>{
            if (shouldSkipCellInnerDiv(el)) return;
            this.enqueue(el, force);
        });
        this.scheduleFlush();
    }
    enqueueElement(el, force = false) {
        if (shouldSkipCellInnerDiv(el)) {
            const parentUserCell = el.closest('[data-testid="UserCell"]');
            if (parentUserCell) this.enqueue(parentUserCell, force);
        } else this.enqueue(el, force);
        this.scheduleFlush();
    }
    handleMutations(mutations) {
        for (const mutation of mutations){
            if (mutation.type === "attributes") {
                this.handleAttributeMutation(mutation);
                continue;
            }
            for (const node of mutation.addedNodes)for (const candidate of collectCandidatesFromNode(node))this.enqueue(candidate, false);
            for (const node of mutation.removedNodes)this.removeTrackedCandidates(node);
        }
        this.scheduleFlush();
        this.scheduleHealFlush();
    }
    handleAttributeMutation(mutation) {
        if (mutation.attributeName !== "class") return;
        if (!(mutation.target instanceof HTMLElement)) return;
        let rootEl = null;
        if (mutation.target.matches(TWEET_SELECTOR)) rootEl = mutation.target;
        else if (mutation.target.matches(USER_CELL_SELECTOR) && !shouldSkipCellInnerDiv(mutation.target)) rootEl = mutation.target;
        if (!rootEl || !rootEl.isConnected) return;
        if (rootEl.classList.contains("xcsf-dim")) return;
        const handle = readHandleForRoot(rootEl);
        const status = resolveStatusByHandle(handle);
        if (status !== "following" && status !== "pending") return;
        this.dirtySet.add(rootEl);
    }
    removeTrackedCandidates(node) {
        if (!(node instanceof HTMLElement)) return;
        if (node.matches(CANDIDATE_SELECTOR) && !shouldSkipCellInnerDiv(node)) removeTrackedNode(node);
        node.querySelectorAll(CANDIDATE_SELECTOR).forEach((el)=>{
            if (shouldSkipCellInnerDiv(el)) return;
            removeTrackedNode(el);
        });
    }
    enqueue(el, force) {
        if (!el.isConnected) return;
        if (!force) {
            if (this.processed.has(el)) return;
            if (el.getAttribute(PROCESSED_ATTR) === "1") return;
        } else this.forceQueue.add(el);
        this.queue.add(el);
    }
    scheduleFlush() {
        if (this.rafId !== null || this.queue.size === 0) return;
        this.rafId = window.requestAnimationFrame(()=>this.flush());
    }
    scheduleHealFlush() {
        if (this.healRafId !== null || this.dirtySet.size === 0) return;
        this.healRafId = window.requestAnimationFrame(()=>this.flushHeals());
    }
    flush() {
        this.rafId = null;
        if (!this.isRunning) return;
        let processedCount = 0;
        const iterator = this.queue.values();
        while(processedCount < MAX_CELLS_PER_FRAME){
            const next = iterator.next();
            if (next.done) break;
            const el = next.value;
            this.queue.delete(el);
            this.processElement(el);
            processedCount += 1;
        }
        if (this.queue.size > 0) this.scheduleFlush();
    }
    flushHeals() {
        this.healRafId = null;
        if (!this.isRunning) return;
        let processedCount = 0;
        const iterator = this.dirtySet.values();
        while(processedCount < MAX_CELLS_PER_FRAME){
            const next = iterator.next();
            if (next.done) break;
            const rootEl = next.value;
            this.dirtySet.delete(rootEl);
            this.healElement(rootEl);
            processedCount += 1;
        }
        if (this.dirtySet.size > 0) this.scheduleHealFlush();
    }
    healElement(rootEl) {
        if (!rootEl.isConnected) {
            removeTrackedNode(rootEl);
            return;
        }
        if (rootEl.classList.contains("xcsf-dim")) return;
        const handle = readHandleForRoot(rootEl, {
            forceRefresh: true
        });
        if (!handle) return;
        const status = resolveStatusByHandle(handle);
        if (status !== "following" && status !== "pending") return;
        markElementState(rootEl, status);
    }
    processElement(el) {
        if (!el.isConnected) return;
        const forced = this.forceQueue.has(el);
        if (forced) this.forceQueue.delete(el);
        else if (this.processed.has(el)) return;
        if (el.matches(TWEET_SELECTOR)) processTweet(el);
        else if (el.matches(USER_CELL_SELECTOR)) processUserCell(el);
        this.processed.add(el);
    }
    constructor(){
        this.observer = null;
        this.queue = new Set();
        this.dirtySet = new Set();
        this.forceQueue = new WeakSet();
        this.processed = new WeakSet();
        this.rafId = null;
        this.healRafId = null;
        this.isRunning = false;
    }
}
const observer = new SearchObserver();
const resetStats = ()=>{
    nodeStateRegistry = new WeakMap();
    dimmedCount = 0;
    unknownCount = 0;
    statsDirty = true;
    lastSentStats = "";
    scheduleStatsFlush();
};
const undimDocument = ()=>{
    document.querySelectorAll(".xcsf-dim").forEach((el)=>{
        el.classList.remove("xcsf-dim", "xcsf-debug");
        el.removeAttribute(PROCESSED_ATTR);
        el.removeAttribute(STATE_ATTR);
    });
    document.querySelectorAll(`[${PROCESSED_ATTR}="1"]`).forEach((el)=>{
        if (!el.classList.contains("xcsf-dim")) {
            el.removeAttribute(PROCESSED_ATTR);
            el.removeAttribute(STATE_ATTR);
        }
    });
    document.querySelectorAll(CANDIDATE_SELECTOR).forEach((el)=>{
        nodeStateRegistry.delete(el);
    });
};
const ensureStarted = ()=>{
    if (running) return;
    running = true;
    ensureStylesInjected();
    observer.start();
    window.requestAnimationFrame(()=>{
        window.requestAnimationFrame(()=>{
            if (!running) return;
            observer.enqueueDocument(CANDIDATE_SELECTOR, true);
        });
    });
};
const ensureStopped = ()=>{
    clearTweetBatchRescan();
    if (tweetRescanTimer !== null) {
        window.clearTimeout(tweetRescanTimer);
        tweetRescanTimer = null;
    }
    if (running) {
        running = false;
        observer.stop();
        undimDocument();
    }
    resetStats();
};
const reconcile = (_reason)=>{
    if (routeActive && enabledWanted) ensureStarted();
    else ensureStopped();
};
const isFollowLikeInteraction = (target)=>{
    if (!target) return false;
    const button = target.closest("button");
    if (!button) return false;
    const ariaLabel = button.getAttribute("aria-label")?.toLowerCase() ?? "";
    const testId = button.getAttribute("data-testid")?.toLowerCase() ?? "";
    return ariaLabel.includes("follow") || ariaLabel.includes("pending") || testId.includes("follow") || testId.includes("pending") || testId.includes("cancel") || testId.includes("unfollow");
};
const installFollowInteractionListener = ()=>{
    if (clickHandlerInstalled) return;
    clickHandlerInstalled = true;
    document.addEventListener("click", (event)=>{
        if (!routeActive) return;
        const target = event.target;
        if (!isFollowLikeInteraction(target)) return;
        const clickedButton = target?.closest("button");
        const candidateCell = clickedButton?.closest('[data-testid="UserCell"]') ?? clickedButton?.closest('div[data-testid="cellInnerDiv"]');
        if (!candidateCell) return;
        const delayMs = 900;
        window.setTimeout(()=>{
            if (!routeActive) return;
            observer.enqueueElement(candidateCell, true);
        }, delayMs);
    });
};
const setFilterEnabled = (next)=>{
    enabledWanted = next;
    reconcile("setFilterEnabled");
};
const syncEnabledFromStorage = ()=>{
    if (typeof chrome === "undefined" || !chrome.storage?.local) return;
    chrome.storage.local.get([
        "enabled"
    ], (result)=>{
        enabledWanted = result.enabled !== false;
        storageHydrated = true;
        reconcile("hydrate");
    });
};
const installOnce = ()=>{
    if (installDone) return;
    installDone = true;
    (0, _followingStore.refreshFollowingMemoryFromDb)().then(()=>{
        rescanAllTweets("following-memory-init");
    });
    (async ()=>{
        const cached = await getLocal(FOLLOW_CACHE_KEY);
        followCache = parseFollowCache(cached);
        followCacheLoaded = true;
        pruneExpiredCacheEntries();
        if (typeof cached === "string") {
            followCacheDirty = true;
            schedulePersistFollowCache();
        }
        rescanAllTweets("init");
    })();
    installFollowInteractionListener();
    syncEnabledFromStorage();
    if (typeof chrome === "undefined" || !chrome.storage?.onChanged) return;
    chrome.storage.onChanged.addListener((changes, areaName)=>{
        if (areaName !== "local") return;
        if (changes.enabled) {
            enabledWanted = changes.enabled.newValue !== false;
            reconcile("storage_change");
        }
        if (changes.xcsf_follow_cache) {
            const nextValue = changes.xcsf_follow_cache.newValue;
            followCache = parseFollowCache(nextValue);
            pruneExpiredCacheEntries();
            if (typeof nextValue === "string") {
                followCacheDirty = true;
                schedulePersistFollowCache();
            }
            rescanAllTweets("cache-update");
        }
        if (changes[0, _constants.XCSF_FOLLOWING_VERSION_KEY]) (0, _followingStore.refreshFollowingMemoryFromDb)().then(()=>{
            rescanAllTweets("following-memory-update");
        });
    });
};
const setRouteActive = (next)=>{
    const wasRouteActive = routeActive;
    routeActive = next;
    if (storageHydrated) reconcile(next ? "route_enter" : "route_leave");
    if (next && wasRouteActive && running) {
        resetStats();
        observer.enqueueDocument(CANDIDATE_SELECTOR, true);
    }
};

},{"./constants":"b7WBk","./following-store":"3d3kl","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}]},["fuuC6","69aao"], "69aao", "parcelRequireb3b3")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQixJQUFJLEtBQUs7WUFDdkMsZ0JBQWdCO1FBQ2xCO0lBRUo7QUFDRjtBQUVPLE1BQU0saUJBQWlCLENBQUM7SUFDN0IsTUFBTSxpQkFBaUI7SUFDdkIsY0FBYztJQUNkLElBQUksaUJBQ0YsVUFBVSxPQUFPLGdCQUFnQjtJQUduQyxJQUFJLFFBQVEsa0JBQWtCLFNBQVM7UUFDckM7UUFDQSxTQUFTLGdCQUFnQixvQkFBb0I7SUFDL0M7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNTNjMTI2OWFkNWFiYThiZS5qcyIsInNyYy9jb250ZW50cy9pbmRleC50cyIsInNyYy9saWIvbWUtaGFuZGxlLnRzIiwic3JjL2xpYi9jb25zdGFudHMudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvbGliL2ZvbGxvd2luZy1zdG9yZS50cyIsInNyYy9saWIvbmF2aWdhdGlvbi13YXRjaGVyLnRzIiwic3JjL2xpYi9zZWFyY2gtZmlsdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJGOlxcXFxjdXJzb3JcXFxcd29ya3NwYWNlXFxcXHgtY2xlYW4tc2VhcmNoLWZpbHRlclxcXFxzcmNcXFxcY29udGVudHNcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCIwODBjYjdmMWY5YzE5OWRkXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NvbnRlbnRTY3JpcHQgfSBmcm9tIFwicGxhc21vXCJcblxuaW1wb3J0IHsgZGV0ZWN0QW5kUGVyc2lzdE1lSGFuZGxlIH0gZnJvbSBcIi4uL2xpYi9tZS1oYW5kbGVcIlxuaW1wb3J0IHsgTmF2aWdhdGlvbldhdGNoZXIsIGlzU2VhcmNoVXJsIH0gZnJvbSBcIi4uL2xpYi9uYXZpZ2F0aW9uLXdhdGNoZXJcIlxuaW1wb3J0IHsgaW5zdGFsbE9uY2UsIHNldFJvdXRlQWN0aXZlIH0gZnJvbSBcIi4uL2xpYi9zZWFyY2gtZmlsdGVyXCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ29udGVudFNjcmlwdCA9IHtcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly94LmNvbS8qXCIsIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS8qXCJdXG59XG5cbmNvbnNvbGUubG9nKFwiW1hDU0ZdIGNvbnRlbnQgc2NyaXB0IGxvYWRlZFwiKVxuXG5pbnN0YWxsT25jZSgpXG5kZXRlY3RBbmRQZXJzaXN0TWVIYW5kbGUoKVxuXG5jb25zdCBuYXZpZ2F0aW9uV2F0Y2hlciA9IG5ldyBOYXZpZ2F0aW9uV2F0Y2hlcih7XG4gIG9uTmF2aWdhdGU6IChldmVudCwgeyBmcm9tLCB0byB9KSA9PiB7XG4gICAgc3dpdGNoIChldmVudCkge1xuICAgICAgY2FzZSBcImVudGVyLXNlYXJjaFwiOlxuICAgICAgICBjb25zb2xlLmxvZyhcIltYQ1NGXSBFbnRlciBTZWFyY2hcIiwgeyBmcm9tLCB0byB9KVxuICAgICAgICBzZXRSb3V0ZUFjdGl2ZSh0cnVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImxlYXZlLXNlYXJjaFwiOlxuICAgICAgICBjb25zb2xlLmxvZyhcIltYQ1NGXSBMZWF2ZSBTZWFyY2hcIiwgeyBmcm9tLCB0byB9KVxuICAgICAgICBzZXRSb3V0ZUFjdGl2ZShmYWxzZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzZWFyY2gtdG8tc2VhcmNoXCI6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1hDU0ZdIFNlYXJjaC10by1TZWFyY2hcIiwgeyBmcm9tLCB0byB9KVxuICAgICAgICBzZXRSb3V0ZUFjdGl2ZSh0cnVlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbn0pXG5cbm5hdmlnYXRpb25XYXRjaGVyLnN0YXJ0KClcblxuaWYgKGlzU2VhcmNoVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkge1xuICBzZXRSb3V0ZUFjdGl2ZSh0cnVlKVxufVxuIiwiaW1wb3J0IHsgWENTRl9NRV9IQU5ETEVfS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcbmltcG9ydCB7IGV4dHJhY3RIYW5kbGVGcm9tSHJlZiB9IGZyb20gXCIuL2ZvbGxvd2luZy1zdG9yZVwiXG5cbmNvbnN0IE1BWF9NRV9IQU5ETEVfUkVUUlkgPSAxMFxuY29uc3QgUkVUUllfSU5URVJWQUxfTVMgPSAxMDAwXG5cbmNvbnN0IGhhc0xvY2FsU3RvcmFnZUFwaSA9ICgpID0+XG4gIHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgQm9vbGVhbihjaHJvbWUuc3RvcmFnZT8ubG9jYWwpXG5cbmNvbnN0IHJlYWRNZUhhbmRsZUZyb21Eb20gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXG4gICAgJ2FbZGF0YS10ZXN0aWQ9XCJBcHBUYWJCYXJfUHJvZmlsZV9MaW5rXCJdW2hyZWZdJ1xuICApXG4gIGlmICghcHJvZmlsZUxpbmspIHJldHVybiBudWxsXG5cbiAgY29uc3QgaHJlZiA9IHByb2ZpbGVMaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPz8gXCJcIlxuICByZXR1cm4gZXh0cmFjdEhhbmRsZUZyb21IcmVmKGhyZWYpXG59XG5cbmV4cG9ydCBjb25zdCBkZXRlY3RBbmRQZXJzaXN0TWVIYW5kbGUgPSAoKSA9PiB7XG4gIGlmICghaGFzTG9jYWxTdG9yYWdlQXBpKCkpIHJldHVyblxuXG4gIGxldCBhdHRlbXB0cyA9IDBcbiAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHJlYWRNZUhhbmRsZUZyb21Eb20oKVxuICAgIGF0dGVtcHRzICs9IDFcblxuICAgIGlmIChoYW5kbGUpIHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtYQ1NGX01FX0hBTkRMRV9LRVldOiBoYW5kbGUgfSlcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGF0dGVtcHRzID49IE1BWF9NRV9IQU5ETEVfUkVUUlkpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKVxuICAgIH1cbiAgfSwgUkVUUllfSU5URVJWQUxfTVMpXG59XG5cbiIsImV4cG9ydCBjb25zdCBYQ1NGX1NZTkNfU1RBVEVfS0VZID0gXCJ4Y3NmX3N5bmNfc3RhdGVcIlxuZXhwb3J0IGNvbnN0IFhDU0ZfTUVfSEFORExFX0tFWSA9IFwieGNzZl9tZV9oYW5kbGVcIlxuZXhwb3J0IGNvbnN0IFhDU0ZfRk9MTE9XX0NBQ0hFX0tFWSA9IFwieGNzZl9mb2xsb3dfY2FjaGVcIlxuZXhwb3J0IGNvbnN0IFhDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZID0gXCJ4Y3NmX2ZvbGxvd2luZ192ZXJzaW9uXCJcblxuZXhwb3J0IHR5cGUgWGNzZlN5bmNTdGF0dXMgPVxuICB8IFwiaWRsZVwiXG4gIHwgXCJydW5uaW5nXCJcbiAgfCBcImRvbmVcIlxuICB8IFwiZXJyb3JcIlxuICB8IFwiY2FuY2VsZWRcIlxuXG5leHBvcnQgdHlwZSBYY3NmU3luY01vZGUgPSBcInBhc3NpdmVcIiB8IFwiYWN0aXZlXCJcblxuZXhwb3J0IHR5cGUgWGNzZlN5bmNTdGF0ZSA9IHtcbiAgc3RhdHVzOiBYY3NmU3luY1N0YXR1c1xuICBtb2RlOiBYY3NmU3luY01vZGVcbiAgc3RhcnRlZEF0PzogbnVtYmVyXG4gIGZpbmlzaGVkQXQ/OiBudW1iZXJcbiAgaW1wb3J0ZWRUaGlzUnVuPzogbnVtYmVyXG4gIHRvdGFsS25vd25Gb2xsb3dpbmc/OiBudW1iZXJcbiAgbGFzdE1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgWENTRl9GT0xMT1dJTkdfVkVSU0lPTl9LRVkgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5jb25zdCBEQl9OQU1FID0gXCJ4Y3NmX2RiXCJcbmNvbnN0IERCX1ZFUlNJT04gPSAxXG5jb25zdCBTVE9SRV9OQU1FID0gXCJmb2xsb3dpbmdfdjFcIlxuY29uc3QgV0FSTVVQX0JBVENIX1NJWkUgPSAxMDAwXG5cbmNvbnN0IFJFU0VSVkVEX1BBVEhfUFJFRklYRVMgPSBbXG4gIFwiL2kvXCIsXG4gIFwiL2hvbWVcIixcbiAgXCIvc2VhcmNoXCIsXG4gIFwiL2V4cGxvcmVcIixcbiAgXCIvbWVzc2FnZXNcIixcbiAgXCIvbm90aWZpY2F0aW9uc1wiLFxuICBcIi9zZXR0aW5nc1wiXG5dXG5cbmNvbnN0IEhBTkRMRV9QQVRIX1JFR0VYID0gL15cXC9bQS1aYS16MC05X117MSwzMH0kL1xuXG50eXBlIEZvbGxvd2luZ1JlY29yZCA9IHtcbiAgaGFuZGxlOiBzdHJpbmdcbiAgdXBkYXRlZEF0OiBudW1iZXJcbn1cblxuY29uc3QgZm9sbG93aW5nTWVtb3J5ID0gbmV3IFNldDxzdHJpbmc+KClcbmxldCBmb2xsb3dpbmdNZW1vcnlSZWFkeSA9IGZhbHNlXG5sZXQgd2FybXVwUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbmNvbnN0IGhhc0xvY2FsU3RvcmFnZUFwaSA9ICgpID0+XG4gIHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgQm9vbGVhbihjaHJvbWUuc3RvcmFnZT8ubG9jYWwpXG5cbmNvbnN0IG5leHRGcmFtZSA9ICgpID0+XG4gIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpXG4gIH0pXG5cbmNvbnN0IG9wZW5EYiA9ICgpOiBQcm9taXNlPElEQkRhdGFiYXNlPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKERCX05BTUUsIERCX1ZFUlNJT04pXG5cbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHRcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhTVE9SRV9OQU1FKSkge1xuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShTVE9SRV9OQU1FLCB7XG4gICAgICAgICAga2V5UGF0aDogXCJoYW5kbGVcIlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdClcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb3BlbiBJbmRleGVkREJcIikpXG4gICAgfVxuICB9KVxuXG5jb25zdCB3aXRoU3RvcmUgPSA8VD4oXG4gIG1vZGU6IElEQlRyYW5zYWN0aW9uTW9kZSxcbiAgZXhlY3V0b3I6IChzdG9yZTogSURCT2JqZWN0U3RvcmUsIHR4OiBJREJUcmFuc2FjdGlvbikgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiA9PlxuICBvcGVuRGIoKS50aGVuKFxuICAgIChkYikgPT5cbiAgICAgIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FLCBtb2RlKVxuICAgICAgICBjb25zdCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpXG5cbiAgICAgICAgZXhlY3V0b3Ioc3RvcmUsIHR4KVxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcblxuICAgICAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gZGIuY2xvc2UoKVxuICAgICAgICB0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBFcnJvcihcIklEQiB0cmFuc2FjdGlvbiBmYWlsZWRcIikpXG4gICAgICB9KVxuICApXG5cbmNvbnN0IHJlcXVlc3RUb1Byb21pc2UgPSA8VD4ocmVxdWVzdDogSURCUmVxdWVzdDxUPik6IFByb21pc2U8VD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdClcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJREIgcmVxdWVzdCBmYWlsZWRcIikpXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIYW5kbGUgPSAocmF3OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICghcmF3KSByZXR1cm4gbnVsbFxuICBjb25zdCBub3JtYWxpemVkID0gcmF3LnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL15AKy8sIFwiXCIpXG4gIHJldHVybiBub3JtYWxpemVkLmxlbmd0aCA+IDAgPyBub3JtYWxpemVkIDogbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZXh0cmFjdEhhbmRsZUZyb21IcmVmID0gKGhyZWY6IHN0cmluZykgPT4ge1xuICBpZiAoIWhyZWYuc3RhcnRzV2l0aChcIi9cIikpIHJldHVybiBudWxsXG4gIGlmIChSRVNFUlZFRF9QQVRIX1BSRUZJWEVTLnNvbWUoKHByZWZpeCkgPT4gaHJlZi5zdGFydHNXaXRoKHByZWZpeCkpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHBhdGhuYW1lID0gaHJlZi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdXG4gIGlmICghSEFORExFX1BBVEhfUkVHRVgudGVzdChwYXRobmFtZSkpIHJldHVybiBudWxsXG4gIHJldHVybiBub3JtYWxpemVIYW5kbGUocGF0aG5hbWUuc2xpY2UoMSkpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNGb2xsb3dpbmdIYW5kbGVTeW5jID0gKGhhbmRsZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSGFuZGxlKGhhbmRsZSlcbiAgaWYgKCFub3JtYWxpemVkKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIGZvbGxvd2luZ01lbW9yeS5oYXMobm9ybWFsaXplZClcbn1cblxuY29uc3Qgc2V0Rm9sbG93aW5nVmVyc2lvbiA9ICgpID0+IHtcbiAgaWYgKCFoYXNMb2NhbFN0b3JhZ2VBcGkoKSkgcmV0dXJuXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbWENTRl9GT0xMT1dJTkdfVkVSU0lPTl9LRVldLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IE51bWJlcihyZXN1bHRbWENTRl9GT0xMT1dJTkdfVkVSU0lPTl9LRVldID8/IDApIHx8IDBcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbWENTRl9GT0xMT1dJTkdfVkVSU0lPTl9LRVldOiBjdXJyZW50ICsgMSB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93aW5nTWVtb3J5U25hcHNob3QgPSAoKSA9PiAoe1xuICByZWFkeTogZm9sbG93aW5nTWVtb3J5UmVhZHksXG4gIHNpemU6IGZvbGxvd2luZ01lbW9yeS5zaXplXG59KVxuXG5jb25zdCB3YXJtdXBGcm9tS2V5ID0gYXN5bmMgKGZyb21LZXk6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIHdpdGhTdG9yZShcInJlYWRvbmx5XCIsIGFzeW5jIChzdG9yZSkgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gZnJvbUtleSA/IElEQktleVJhbmdlLmxvd2VyQm91bmQoZnJvbUtleSwgdHJ1ZSkgOiB1bmRlZmluZWRcbiAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUub3BlbkN1cnNvcihyYW5nZSlcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcHJvY2Vzc2VkID0gMFxuICAgICAgbGV0IGxhc3RLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IgPz8gbmV3IEVycm9yKFwiRmFpbGVkIHRvIHdhcm0gdXAgZm9sbG93aW5nIG1lbW9yeVwiKSlcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHJlcXVlc3QucmVzdWx0XG4gICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVjb3JkID0gY3Vyc29yLnZhbHVlIGFzIEZvbGxvd2luZ1JlY29yZFxuICAgICAgICBmb2xsb3dpbmdNZW1vcnkuYWRkKHJlY29yZC5oYW5kbGUpXG4gICAgICAgIGxhc3RLZXkgPSByZWNvcmQuaGFuZGxlXG4gICAgICAgIHByb2Nlc3NlZCArPSAxXG5cbiAgICAgICAgaWYgKHByb2Nlc3NlZCA+PSBXQVJNVVBfQkFUQ0hfU0laRSkge1xuICAgICAgICAgIHJlc29sdmUobGFzdEtleSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgbG9hZEZvbGxvd2luZ01lbW9yeUluQ2h1bmtzID0gYXN5bmMgKCkgPT4ge1xuICBmb2xsb3dpbmdNZW1vcnkuY2xlYXIoKVxuICBmb2xsb3dpbmdNZW1vcnlSZWFkeSA9IGZhbHNlXG5cbiAgbGV0IGZyb21LZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgbmV4dEtleSA9IGF3YWl0IHdhcm11cEZyb21LZXkoZnJvbUtleSlcbiAgICBpZiAoIW5leHRLZXkpIGJyZWFrXG4gICAgZnJvbUtleSA9IG5leHRLZXlcbiAgICBhd2FpdCBuZXh0RnJhbWUoKVxuICB9XG5cbiAgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVGb2xsb3dpbmdNZW1vcnlXYXJtdXAgPSAoKSA9PiB7XG4gIGlmICghd2FybXVwUHJvbWlzZSkge1xuICAgIHdhcm11cFByb21pc2UgPSBsb2FkRm9sbG93aW5nTWVtb3J5SW5DaHVua3MoKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHdhcm11cFByb21pc2UgPSBudWxsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gd2FybXVwUHJvbWlzZVxufVxuXG5leHBvcnQgY29uc3QgcmVmcmVzaEZvbGxvd2luZ01lbW9yeUZyb21EYiA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZW5zdXJlRm9sbG93aW5nTWVtb3J5V2FybXVwKClcbn1cblxuZXhwb3J0IGNvbnN0IGNvdW50Rm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gd2l0aFN0b3JlKFwicmVhZG9ubHlcIiwgYXN5bmMgKHN0b3JlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmNvdW50KClcbiAgICByZXR1cm4gcmVxdWVzdFRvUHJvbWlzZShyZXF1ZXN0KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYmF0Y2hVcHNlcnRGb2xsb3dpbmcgPSBhc3luYyAoaGFuZGxlczogc3RyaW5nW10pID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IEFycmF5LmZyb20oXG4gICAgbmV3IFNldChcbiAgICAgIGhhbmRsZXNcbiAgICAgICAgLm1hcCgoaGFuZGxlKSA9PiBub3JtYWxpemVIYW5kbGUoaGFuZGxlKSlcbiAgICAgICAgLmZpbHRlcigoaGFuZGxlKTogaGFuZGxlIGlzIHN0cmluZyA9PiBCb29sZWFuKGhhbmRsZSkpXG4gICAgKVxuICApXG5cbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZGVkQ291bnQ6IDAsXG4gICAgICB0b3RhbEtub3duRm9sbG93aW5nOiBhd2FpdCBjb3VudEZvbGxvd2luZygpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gIGNvbnN0IGFkZGVkQ291bnQgPSBhd2FpdCB3aXRoU3RvcmUoXCJyZWFkd3JpdGVcIiwgYXN5bmMgKHN0b3JlKSA9PiB7XG4gICAgbGV0IGFkZGVkID0gMFxuICAgIGZvciAoY29uc3QgaGFuZGxlIG9mIG5vcm1hbGl6ZWQpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcmVxdWVzdFRvUHJvbWlzZShcbiAgICAgICAgc3RvcmUuZ2V0KGhhbmRsZSkgYXMgSURCUmVxdWVzdDxGb2xsb3dpbmdSZWNvcmQgfCB1bmRlZmluZWQ+XG4gICAgICApXG4gICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgIGFkZGVkICs9IDFcbiAgICAgIH1cbiAgICAgIHN0b3JlLnB1dCh7IGhhbmRsZSwgdXBkYXRlZEF0OiBub3cgfSBzYXRpc2ZpZXMgRm9sbG93aW5nUmVjb3JkKVxuICAgICAgZm9sbG93aW5nTWVtb3J5LmFkZChoYW5kbGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZGVkXG4gIH0pXG5cbiAgY29uc3QgdG90YWxLbm93bkZvbGxvd2luZyA9IGF3YWl0IGNvdW50Rm9sbG93aW5nKClcbiAgZm9sbG93aW5nTWVtb3J5UmVhZHkgPSB0cnVlXG4gIHNldEZvbGxvd2luZ1ZlcnNpb24oKVxuXG4gIHJldHVybiB7XG4gICAgYWRkZWRDb3VudCxcbiAgICB0b3RhbEtub3duRm9sbG93aW5nXG4gIH1cbn1cblxuIiwiZXhwb3J0IHR5cGUgTmF2aWdhdGlvbkV2ZW50ID1cbiAgfCBcImVudGVyLXNlYXJjaFwiXG4gIHwgXCJsZWF2ZS1zZWFyY2hcIlxuICB8IFwic2VhcmNoLXRvLXNlYXJjaFwiXG5cbmV4cG9ydCB0eXBlIE5hdmlnYXRpb25EZXRhaWxzID0ge1xuICBmcm9tOiBzdHJpbmdcbiAgdG86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOYXZpZ2F0aW9uSGFuZGxlciA9IChcbiAgZXZlbnQ6IE5hdmlnYXRpb25FdmVudCxcbiAgZGV0YWlsczogTmF2aWdhdGlvbkRldGFpbHNcbikgPT4gdm9pZFxuXG5leHBvcnQgY29uc3QgWENTRl9OQVZJR0FUSU9OX0VWRU5UID0gXCJ4Y3NmOm5hdmlnYXRpb25cIlxuXG50eXBlIE5hdmlnYXRpb25QYXlsb2FkID0ge1xuICBocmVmOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBzZWFyY2g6IHN0cmluZ1xufVxuXG5sZXQgYnJpZGdlSW5zdGFsbGVkID0gZmFsc2VcbmxldCBsYXN0RW1pdHRlZEhyZWYgPSBcIlwiXG5sZXQgdXJsTXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5sZXQgbXV0YXRpb25DaGVja1JhZklkOiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG5jb25zdCBlbWl0TmF2aWdhdGlvbkV2ZW50ID0gKGZvcmNlID0gZmFsc2UpID0+IHtcbiAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIGlmICghZm9yY2UgJiYgaHJlZiA9PT0gbGFzdEVtaXR0ZWRIcmVmKSByZXR1cm5cbiAgbGFzdEVtaXR0ZWRIcmVmID0gaHJlZlxuXG4gIGNvbnN0IHBheWxvYWQ6IE5hdmlnYXRpb25QYXlsb2FkID0ge1xuICAgIGhyZWYsXG4gICAgcGF0aG5hbWU6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICBzZWFyY2g6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgfVxuXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudDxOYXZpZ2F0aW9uUGF5bG9hZD4oWENTRl9OQVZJR0FUSU9OX0VWRU5ULCB7XG4gICAgICBkZXRhaWw6IHBheWxvYWRcbiAgICB9KVxuICApXG59XG5cbmNvbnN0IHBhdGNoSGlzdG9yeU1ldGhvZCA9IChtZXRob2Q6IFwicHVzaFN0YXRlXCIgfCBcInJlcGxhY2VTdGF0ZVwiKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsID0gaGlzdG9yeVttZXRob2RdIGFzICguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd25cbiAgaGlzdG9yeVttZXRob2RdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseShoaXN0b3J5LCBhcmdzKVxuICAgIGVtaXROYXZpZ2F0aW9uRXZlbnQodHJ1ZSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluc3RhbGxOYXZpZ2F0aW9uQnJpZGdlT25jZSA9ICgpID0+IHtcbiAgaWYgKGJyaWRnZUluc3RhbGxlZCkgcmV0dXJuXG4gIGJyaWRnZUluc3RhbGxlZCA9IHRydWVcblxuICBwYXRjaEhpc3RvcnlNZXRob2QoXCJwdXNoU3RhdGVcIilcbiAgcGF0Y2hIaXN0b3J5TWV0aG9kKFwicmVwbGFjZVN0YXRlXCIpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKCkgPT4gZW1pdE5hdmlnYXRpb25FdmVudCh0cnVlKSlcblxuICB1cmxNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGlmIChtdXRhdGlvbkNoZWNrUmFmSWQgIT09IG51bGwpIHJldHVyblxuICAgIG11dGF0aW9uQ2hlY2tSYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbXV0YXRpb25DaGVja1JhZklkID0gbnVsbFxuICAgICAgZW1pdE5hdmlnYXRpb25FdmVudChmYWxzZSlcbiAgICB9KVxuICB9KVxuICB1cmxNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSlcblxuICBlbWl0TmF2aWdhdGlvbkV2ZW50KHRydWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1NlYXJjaFVybCA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYpXG4gICAgcmV0dXJuIHVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3NlYXJjaFwiKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gaHJlZi5pbmNsdWRlcyhcIi9zZWFyY2hcIilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldhdGNoZXIge1xuICBwcml2YXRlIGxhc3RVcmw6IHN0cmluZ1xuICBwcml2YXRlIHJlYWRvbmx5IG9uTmF2aWdhdGU6IE5hdmlnYXRpb25IYW5kbGVyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25OYXZpZ2F0aW9uRXZlbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGVja0Zvck5hdmlnYXRpb24oKVxuICB9XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG9uTmF2aWdhdGVcbiAgfToge1xuICAgIG9uTmF2aWdhdGU6IE5hdmlnYXRpb25IYW5kbGVyXG4gIH0pIHtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSBvbk5hdmlnYXRlXG4gICAgdGhpcy5sYXN0VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGluc3RhbGxOYXZpZ2F0aW9uQnJpZGdlT25jZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoWENTRl9OQVZJR0FUSU9OX0VWRU5ULCB0aGlzLm9uTmF2aWdhdGlvbkV2ZW50KVxuICAgIHRoaXMuY2hlY2tGb3JOYXZpZ2F0aW9uKClcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoWENTRl9OQVZJR0FUSU9OX0VWRU5ULCB0aGlzLm9uTmF2aWdhdGlvbkV2ZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0Zvck5hdmlnYXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgaWYgKGN1cnJlbnRVcmwgPT09IHRoaXMubGFzdFVybCkgcmV0dXJuXG5cbiAgICBjb25zdCBmcm9tID0gdGhpcy5sYXN0VXJsXG4gICAgY29uc3QgdG8gPSBjdXJyZW50VXJsXG4gICAgY29uc3Qgd2FzU2VhcmNoID0gaXNTZWFyY2hVcmwoZnJvbSlcbiAgICBjb25zdCBpc1NlYXJjaCA9IGlzU2VhcmNoVXJsKHRvKVxuXG4gICAgaWYgKCF3YXNTZWFyY2ggJiYgaXNTZWFyY2gpIHtcbiAgICAgIHRoaXMub25OYXZpZ2F0ZShcImVudGVyLXNlYXJjaFwiLCB7IGZyb20sIHRvIH0pXG4gICAgfSBlbHNlIGlmICh3YXNTZWFyY2ggJiYgIWlzU2VhcmNoKSB7XG4gICAgICB0aGlzLm9uTmF2aWdhdGUoXCJsZWF2ZS1zZWFyY2hcIiwgeyBmcm9tLCB0byB9KVxuICAgIH0gZWxzZSBpZiAod2FzU2VhcmNoICYmIGlzU2VhcmNoKSB7XG4gICAgICB0aGlzLm9uTmF2aWdhdGUoXCJzZWFyY2gtdG8tc2VhcmNoXCIsIHsgZnJvbSwgdG8gfSlcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RVcmwgPSBjdXJyZW50VXJsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFhDU0ZfRk9MTE9XSU5HX1ZFUlNJT05fS0VZXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5pbXBvcnQge1xuICBoYXNGb2xsb3dpbmdIYW5kbGVTeW5jLFxuICByZWZyZXNoRm9sbG93aW5nTWVtb3J5RnJvbURiXG59IGZyb20gXCIuL2ZvbGxvd2luZy1zdG9yZVwiXG5cbmV4cG9ydCB0eXBlIENlbGxTdGF0dXMgPSBcImZvbGxvd2luZ1wiIHwgXCJwZW5kaW5nXCIgfCBcIm5vdF9mb2xsb3dlZFwiIHwgXCJ1bmtub3duXCJcblxudHlwZSBDYWNoZWRGb2xsb3dTdGF0ZSA9IFwiZm9sbG93ZWRcIiB8IFwicGVuZGluZ1wiIHwgXCJub3RfZm9sbG93ZWRcIlxuXG50eXBlIEZvbGxvd0NhY2hlRW50cnkgPSB7XG4gIHN0YXRlOiBDYWNoZWRGb2xsb3dTdGF0ZVxuICB1cGRhdGVkQXQ6IG51bWJlclxufVxuXG50eXBlIEZvbGxvd0NhY2hlID0gUmVjb3JkPHN0cmluZywgRm9sbG93Q2FjaGVFbnRyeT5cbnR5cGUgVHJhY2tlZE5vZGVTdGF0ZSA9IFwiZm9sbG93ZWRcIiB8IFwicGVuZGluZ1wiIHwgXCJub3RfZm9sbG93ZWRcIiB8IFwidW5rbm93blwiXG5cbmNvbnN0IERFQlVHID0gZmFsc2VcbmNvbnN0IFNUWUxFX0lEID0gXCJ4Y3NmLXN0eWxlXCJcbmNvbnN0IFNUQVRTX0tFWSA9IFwieGNzZl9zdGF0c1wiXG5jb25zdCBGT0xMT1dfQ0FDSEVfS0VZID0gXCJ4Y3NmX2ZvbGxvd19jYWNoZVwiXG5jb25zdCBNQVhfQ0VMTFNfUEVSX0ZSQU1FID0gNTBcbmNvbnN0IENBQ0hFX1RUTF9NUyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG5jb25zdCBQUk9DRVNTRURfQVRUUiA9IFwiZGF0YS14Y3NmLXByb2Nlc3NlZFwiXG5jb25zdCBTVEFURV9BVFRSID0gXCJkYXRhLXhjc2Ytc3RhdGVcIlxuY29uc3QgVVNFUl9DRUxMX1NFTEVDVE9SID0gJ1tkYXRhLXRlc3RpZD1cIlVzZXJDZWxsXCJdLCBkaXZbZGF0YS10ZXN0aWQ9XCJjZWxsSW5uZXJEaXZcIl0nXG5jb25zdCBVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUiA9ICdbZGF0YS10ZXN0aWQ9XCJVc2VyQ2VsbFwiXSdcbmNvbnN0IFRXRUVUX1NFTEVDVE9SID0gJ2FydGljbGVbZGF0YS10ZXN0aWQ9XCJ0d2VldFwiXSdcbmNvbnN0IENBTkRJREFURV9TRUxFQ1RPUiA9IGAke1VTRVJfQ0VMTF9TRUxFQ1RPUn0sICR7VFdFRVRfU0VMRUNUT1J9YFxuY29uc3QgUkVTRVJWRURfUEFUSF9TRUdNRU5UUyA9IG5ldyBTZXQoW1xuICBcIlwiLFxuICBcImhvbWVcIixcbiAgXCJleHBsb3JlXCIsXG4gIFwibm90aWZpY2F0aW9uc1wiLFxuICBcIm1lc3NhZ2VzXCIsXG4gIFwic2VhcmNoXCIsXG4gIFwic2V0dGluZ3NcIixcbiAgXCJjb21wb3NlXCIsXG4gIFwiaGFzaHRhZ1wiLFxuICBcImlcIlxuXSlcbmNvbnN0IFRXRUVUX0hBTkRMRV9ERU5ZTElTVF9QUkVGSVhFUyA9IFtcbiAgXCIvaS9cIixcbiAgXCIvaG9tZVwiLFxuICBcIi9zZWFyY2hcIixcbiAgXCIvZXhwbG9yZVwiLFxuICBcIi9tZXNzYWdlc1wiLFxuICBcIi9ub3RpZmljYXRpb25zXCIsXG4gIFwiL3NldHRpbmdzXCJcbl1cbmNvbnN0IEhBTkRMRV9QQVRIX1JFR0VYID0gL15cXC9bQS1aYS16MC05X117MSwzMH0kL1xuXG5jb25zdCBzaG91bGRTa2lwQ2VsbElubmVyRGl2ID0gKGVsOiBIVE1MRWxlbWVudCkgPT5cbiAgZWwubWF0Y2hlcygnZGl2W2RhdGEtdGVzdGlkPVwiY2VsbElubmVyRGl2XCJdJykgJiZcbiAgQm9vbGVhbihlbC5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJVc2VyQ2VsbFwiXScpKVxuXG5jb25zdCBTVFlMRV9DT05URU5UID0gYFxuLnhjc2YtZGltIHtcbiAgb3BhY2l0eTogMC4zMCAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgZmlsdGVyIDAuMnMgZWFzZTtcbn1cblxuLnhjc2YtZGVidWcge1xuICBvdXRsaW5lOiAycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4ICFpbXBvcnRhbnQ7XG59XG5gXG5cbmxldCBmb2xsb3dDYWNoZTogRm9sbG93Q2FjaGUgPSB7fVxubGV0IGZvbGxvd0NhY2hlTG9hZGVkID0gZmFsc2VcbmxldCBmb2xsb3dDYWNoZVBlcnNpc3RUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGxcbmxldCBmb2xsb3dDYWNoZURpcnR5ID0gZmFsc2VcblxubGV0IGRpbW1lZENvdW50ID0gMFxubGV0IHVua25vd25Db3VudCA9IDBcbmxldCBzdGF0c1RpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbFxubGV0IGxhc3RTZW50U3RhdHMgPSBcIlwiXG5sZXQgc3RhdHNEaXJ0eSA9IGZhbHNlXG5sZXQgbm9kZVN0YXRlUmVnaXN0cnkgPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgVHJhY2tlZE5vZGVTdGF0ZT4oKVxuXG5sZXQgZW5hYmxlZFdhbnRlZCA9IHRydWVcbmxldCByb3V0ZUFjdGl2ZSA9IGZhbHNlXG5sZXQgcnVubmluZyA9IGZhbHNlXG5sZXQgc3RvcmFnZUh5ZHJhdGVkID0gZmFsc2VcbmxldCBpbnN0YWxsRG9uZSA9IGZhbHNlXG5cbmxldCBjbGlja0hhbmRsZXJJbnN0YWxsZWQgPSBmYWxzZVxubGV0IHR3ZWV0UmVzY2FuVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsXG5sZXQgdHdlZXRCYXRjaFJlc2NhblJhZklkOiBudW1iZXIgfCBudWxsID0gbnVsbFxuY29uc3QgdHdlZXRCYXRjaFJlc2NhblF1ZXVlID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKVxubGV0IHR3ZWV0QmF0Y2hSZXNjYW5SZWFzb24gPSBcInVua25vd25cIlxuY29uc3QgaGFuZGxlTWVtbyA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBzdHJpbmc+KClcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVN0eWxlc0luamVjdGVkID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU1RZTEVfSUQpKSByZXR1cm5cblxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKVxuICBzdHlsZS5pZCA9IFNUWUxFX0lEXG4gIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVfQ09OVEVOVFxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxufVxuXG5jb25zdCBoYXNMb2NhbFN0b3JhZ2VBcGkgPSAoKSA9PlxuICB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIEJvb2xlYW4oY2hyb21lLnN0b3JhZ2U/LmxvY2FsKVxuXG5jb25zdCBzZXRMb2NhbCA9IChpdGVtczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgaWYgKCFoYXNMb2NhbFN0b3JhZ2VBcGkoKSkgcmV0dXJuXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChpdGVtcylcbn1cblxuY29uc3QgZ2V0TG9jYWwgPSA8VD4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCFoYXNMb2NhbFN0b3JhZ2VBcGkoKSkge1xuICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldLCAocmVzdWx0KSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3VsdFtrZXldIGFzIFQgfCB1bmRlZmluZWQpXG4gICAgfSlcbiAgfSlcblxuY29uc3Qgbm9ybWFsaXplSGFuZGxlID0gKHJhdzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICBpZiAoIXJhdykgcmV0dXJuIG51bGxcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHJhdy50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eQCsvLCBcIlwiKVxuICByZXR1cm4gbm9ybWFsaXplZC5sZW5ndGggPiAwID8gbm9ybWFsaXplZCA6IG51bGxcbn1cblxuY29uc3QgcGFyc2VGb2xsb3dDYWNoZSA9IChyYXc6IHVua25vd24pOiBGb2xsb3dDYWNoZSA9PiB7XG4gIGxldCB2YWx1ZSA9IHJhd1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZDogRm9sbG93Q2FjaGUgPSB7fVxuICBmb3IgKGNvbnN0IFtyYXdIYW5kbGUsIHJhd0VudHJ5XSBvZiBPYmplY3QuZW50cmllcyhcbiAgICB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICApKSB7XG4gICAgY29uc3QgaGFuZGxlID0gbm9ybWFsaXplSGFuZGxlKHJhd0hhbmRsZSlcbiAgICBpZiAoIWhhbmRsZSB8fCAhcmF3RW50cnkgfHwgdHlwZW9mIHJhd0VudHJ5ICE9PSBcIm9iamVjdFwiKSBjb250aW51ZVxuXG4gICAgY29uc3QgZW50cnkgPSByYXdFbnRyeSBhcyB7IHN0YXRlPzogdW5rbm93bjsgdXBkYXRlZEF0PzogdW5rbm93biB9XG4gICAgY29uc3Qgc3RhdGUgPSBlbnRyeS5zdGF0ZVxuICAgIGNvbnN0IHVwZGF0ZWRBdCA9IGVudHJ5LnVwZGF0ZWRBdFxuXG4gICAgaWYgKFxuICAgICAgKHN0YXRlID09PSBcImZvbGxvd2VkXCIgfHxcbiAgICAgICAgc3RhdGUgPT09IFwicGVuZGluZ1wiIHx8XG4gICAgICAgIHN0YXRlID09PSBcIm5vdF9mb2xsb3dlZFwiKSAmJlxuICAgICAgdHlwZW9mIHVwZGF0ZWRBdCA9PT0gXCJudW1iZXJcIlxuICAgICkge1xuICAgICAgcGFyc2VkW2hhbmRsZV0gPSB7IHN0YXRlLCB1cGRhdGVkQXQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWRcbn1cblxuY29uc3QgZXh0cmFjdEhhbmRsZUZyb21QYXRobmFtZSA9IChwYXRobmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBwYXRobmFtZS5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdXG4gIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pXG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDEpIHJldHVybiBudWxsXG4gIGNvbnN0IHNlZ21lbnQgPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpXG4gIGlmIChSRVNFUlZFRF9QQVRIX1NFR01FTlRTLmhhcyhzZWdtZW50KSkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIG5vcm1hbGl6ZUhhbmRsZShzZWdtZW50KVxufVxuXG5jb25zdCBleHRyYWN0SGFuZGxlRnJvbUxpbmsgPSAoaHJlZjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChocmVmLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxuICAgIGlmICh1cmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBleHRyYWN0SGFuZGxlRnJvbVBhdGhuYW1lKHVybC5wYXRobmFtZSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBleHRyYWN0SGFuZGxlRnJvbVVzZXJDZWxsID0gKGNlbGw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBjZWxsLm1hdGNoZXMoVVNFUl9DRUxMX1JPT1RfU0VMRUNUT1IpXG4gICAgPyBjZWxsXG4gICAgOiBjZWxsLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KFVTRVJfQ0VMTF9ST09UX1NFTEVDVE9SKVxuICBpZiAoIXJvb3QpIHJldHVybiBudWxsXG5cbiAgY29uc3QgbmFtZU5vZGVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignZGl2W2RhdGEtdGVzdGlkPVwiVXNlci1OYW1lXCJdJylcbiAgZm9yIChjb25zdCBuYW1lTm9kZSBvZiBuYW1lTm9kZXMpIHtcbiAgICBpZiAobmFtZU5vZGUuY2xvc2VzdChVU0VSX0NFTExfUk9PVF9TRUxFQ1RPUikgIT09IHJvb3QpIGNvbnRpbnVlXG5cbiAgICBjb25zdCBsaW5rcyA9IG5hbWVOb2RlLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCdhW2hyZWZePVwiL1wiXVtyb2xlPVwibGlua1wiXSwgYVtocmVmXj1cIi9cIl0nKVxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgY29uc3QgaGFuZGxlID0gZXh0cmFjdEhhbmRsZUZyb21MaW5rKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA/PyBcIlwiKVxuICAgICAgaWYgKGhhbmRsZSkgcmV0dXJuIGhhbmRsZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUd2VldEF1dGhvckhhbmRsZSA9IChhcnRpY2xlRWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lTm9kZXMgPSBhcnRpY2xlRWwucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2RpdltkYXRhLXRlc3RpZD1cIlVzZXItTmFtZVwiXScpXG5cbiAgZm9yIChjb25zdCB1c2VyTmFtZU5vZGUgb2YgdXNlck5hbWVOb2Rlcykge1xuICAgIGlmICh1c2VyTmFtZU5vZGUuY2xvc2VzdChUV0VFVF9TRUxFQ1RPUikgIT09IGFydGljbGVFbCkgY29udGludWVcblxuICAgIGNvbnN0IGxpbmtzID0gdXNlck5hbWVOb2RlLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXVwiKVxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA/PyBcIlwiXG4gICAgICBpZiAoIWhyZWYuc3RhcnRzV2l0aChcIi9cIikpIGNvbnRpbnVlXG4gICAgICBpZiAoVFdFRVRfSEFORExFX0RFTllMSVNUX1BSRUZJWEVTLnNvbWUoKHByZWZpeCkgPT4gaHJlZi5zdGFydHNXaXRoKHByZWZpeCkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gaHJlZi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdXG4gICAgICBpZiAoIUhBTkRMRV9QQVRIX1JFR0VYLnRlc3QocGF0aG5hbWUpKSBjb250aW51ZVxuXG4gICAgICBjb25zdCBoYW5kbGUgPSBub3JtYWxpemVIYW5kbGUocGF0aG5hbWUuc2xpY2UoMSkpXG4gICAgICBpZiAoaGFuZGxlKSByZXR1cm4gaGFuZGxlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3Qgc2NoZWR1bGVQZXJzaXN0Rm9sbG93Q2FjaGUgPSAoKSA9PiB7XG4gIGlmICghZm9sbG93Q2FjaGVEaXJ0eSB8fCBmb2xsb3dDYWNoZVBlcnNpc3RUaW1lciAhPT0gbnVsbCkgcmV0dXJuXG5cbiAgZm9sbG93Q2FjaGVQZXJzaXN0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9sbG93Q2FjaGVQZXJzaXN0VGltZXIgPSBudWxsXG4gICAgaWYgKCFmb2xsb3dDYWNoZURpcnR5KSByZXR1cm5cbiAgICBmb2xsb3dDYWNoZURpcnR5ID0gZmFsc2VcbiAgICBzZXRMb2NhbCh7IFtGT0xMT1dfQ0FDSEVfS0VZXTogZm9sbG93Q2FjaGUgfSlcbiAgfSwgMzAwKVxufVxuXG5jb25zdCBwcnVuZUV4cGlyZWRDYWNoZUVudHJpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZVxuXG4gIE9iamVjdC5rZXlzKGZvbGxvd0NhY2hlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobm93IC0gZm9sbG93Q2FjaGVba2V5XS51cGRhdGVkQXQgPiBDQUNIRV9UVExfTVMpIHtcbiAgICAgIGRlbGV0ZSBmb2xsb3dDYWNoZVtrZXldXG4gICAgICBjaGFuZ2VkID0gdHJ1ZVxuICAgIH1cbiAgfSlcblxuICBpZiAoY2hhbmdlZCkge1xuICAgIGZvbGxvd0NhY2hlRGlydHkgPSB0cnVlXG4gICAgc2NoZWR1bGVQZXJzaXN0Rm9sbG93Q2FjaGUoKVxuICB9XG59XG5cbmNvbnN0IGdldENhY2hlZEZvbGxvd1N0YXRlID0gKGhhbmRsZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIWhhbmRsZSkgcmV0dXJuIG51bGxcbiAgY29uc3QgZW50cnkgPSBmb2xsb3dDYWNoZVtoYW5kbGVdXG4gIGlmICghZW50cnkpIHJldHVybiBudWxsXG5cbiAgaWYgKERhdGUubm93KCkgLSBlbnRyeS51cGRhdGVkQXQgPiBDQUNIRV9UVExfTVMpIHtcbiAgICBkZWxldGUgZm9sbG93Q2FjaGVbaGFuZGxlXVxuICAgIGZvbGxvd0NhY2hlRGlydHkgPSB0cnVlXG4gICAgc2NoZWR1bGVQZXJzaXN0Rm9sbG93Q2FjaGUoKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZW50cnkuc3RhdGVcbn1cblxuY29uc3Qgc3RhdHVzRnJvbUNhY2hlZFN0YXRlID0gKGNhY2hlZFN0YXRlOiBDYWNoZWRGb2xsb3dTdGF0ZSB8IG51bGwpOiBDZWxsU3RhdHVzID0+IHtcbiAgaWYgKGNhY2hlZFN0YXRlID09PSBcImZvbGxvd2VkXCIpIHJldHVybiBcImZvbGxvd2luZ1wiXG4gIGlmIChjYWNoZWRTdGF0ZSA9PT0gXCJwZW5kaW5nXCIpIHJldHVybiBcInBlbmRpbmdcIlxuICBpZiAoY2FjaGVkU3RhdGUgPT09IFwibm90X2ZvbGxvd2VkXCIpIHJldHVybiBcIm5vdF9mb2xsb3dlZFwiXG4gIHJldHVybiBcInVua25vd25cIlxufVxuXG5jb25zdCByZXNvbHZlU3RhdHVzQnlIYW5kbGUgPSAoaGFuZGxlOiBzdHJpbmcgfCBudWxsKTogQ2VsbFN0YXR1cyA9PiB7XG4gIGNvbnN0IGNhY2hlZFN0YXRlID0gZ2V0Q2FjaGVkRm9sbG93U3RhdGUoaGFuZGxlKVxuICBpZiAoY2FjaGVkU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdHVzRnJvbUNhY2hlZFN0YXRlKGNhY2hlZFN0YXRlKVxuICB9XG5cbiAgaWYgKGhhbmRsZSAmJiBoYXNGb2xsb3dpbmdIYW5kbGVTeW5jKGhhbmRsZSkpIHtcbiAgICByZXR1cm4gXCJmb2xsb3dpbmdcIlxuICB9XG5cbiAgcmV0dXJuIFwidW5rbm93blwiXG59XG5cbmNvbnN0IHJlYWRIYW5kbGVGb3JSb290ID0gKFxuICByb290RWw6IEhUTUxFbGVtZW50LFxuICBvcHRpb25zPzogeyBmb3JjZVJlZnJlc2g/OiBib29sZWFuIH1cbikgPT4ge1xuICBjb25zdCBtZW1vaXplZCA9IGhhbmRsZU1lbW8uZ2V0KHJvb3RFbClcbiAgaWYgKCFvcHRpb25zPy5mb3JjZVJlZnJlc2ggJiYgbWVtb2l6ZWQpIHJldHVybiBtZW1vaXplZFxuXG4gIGxldCBoYW5kbGU6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGlmIChyb290RWwubWF0Y2hlcyhUV0VFVF9TRUxFQ1RPUikpIHtcbiAgICBoYW5kbGUgPSBnZXRUd2VldEF1dGhvckhhbmRsZShyb290RWwpXG4gIH0gZWxzZSBpZiAocm9vdEVsLm1hdGNoZXMoVVNFUl9DRUxMX1NFTEVDVE9SKSkge1xuICAgIGhhbmRsZSA9IGV4dHJhY3RIYW5kbGVGcm9tVXNlckNlbGwocm9vdEVsKVxuICB9XG5cbiAgaWYgKGhhbmRsZSkge1xuICAgIGhhbmRsZU1lbW8uc2V0KHJvb3RFbCwgaGFuZGxlKVxuICAgIHJldHVybiBoYW5kbGVcbiAgfVxuXG4gIGlmIChtZW1vaXplZCkge1xuICAgIC8vIEhhbmRsZSBjb3VsZCBjaGFuZ2Ugd2hlbiBYIHJldXNlcyBub2RlIHNoZWxsczsgYWxsb3cgZnJlc2ggbG9va3VwIHRvIHJlc2V0IG1lbW8uXG4gICAgaGFuZGxlTWVtby5kZWxldGUocm9vdEVsKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZmx1c2hUd2VldEJhdGNoUmVzY2FuID0gKCkgPT4ge1xuICB0d2VldEJhdGNoUmVzY2FuUmFmSWQgPSBudWxsXG4gIGlmICghcnVubmluZyB8fCAhcm91dGVBY3RpdmUgfHwgIWVuYWJsZWRXYW50ZWQpIHtcbiAgICB0d2VldEJhdGNoUmVzY2FuUXVldWUuY2xlYXIoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHByb2Nlc3NlZENvdW50ID0gMFxuICBjb25zdCBpdGVyYXRvciA9IHR3ZWV0QmF0Y2hSZXNjYW5RdWV1ZS52YWx1ZXMoKVxuICB3aGlsZSAocHJvY2Vzc2VkQ291bnQgPCBNQVhfQ0VMTFNfUEVSX0ZSQU1FKSB7XG4gICAgY29uc3QgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKVxuICAgIGlmIChuZXh0LmRvbmUpIGJyZWFrXG5cbiAgICBjb25zdCB0d2VldCA9IG5leHQudmFsdWVcbiAgICB0d2VldEJhdGNoUmVzY2FuUXVldWUuZGVsZXRlKHR3ZWV0KVxuICAgIGlmICh0d2VldC5pc0Nvbm5lY3RlZCkge1xuICAgICAgcHJvY2Vzc1R3ZWV0KHR3ZWV0LCB0d2VldEJhdGNoUmVzY2FuUmVhc29uKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVUcmFja2VkTm9kZSh0d2VldClcbiAgICB9XG4gICAgcHJvY2Vzc2VkQ291bnQgKz0gMVxuICB9XG5cbiAgaWYgKHR3ZWV0QmF0Y2hSZXNjYW5RdWV1ZS5zaXplID4gMCkge1xuICAgIHR3ZWV0QmF0Y2hSZXNjYW5SYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmx1c2hUd2VldEJhdGNoUmVzY2FuKVxuICB9XG59XG5cbmNvbnN0IGNsZWFyVHdlZXRCYXRjaFJlc2NhbiA9ICgpID0+IHtcbiAgdHdlZXRCYXRjaFJlc2NhblF1ZXVlLmNsZWFyKClcbiAgaWYgKHR3ZWV0QmF0Y2hSZXNjYW5SYWZJZCAhPT0gbnVsbCkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0d2VldEJhdGNoUmVzY2FuUmFmSWQpXG4gICAgdHdlZXRCYXRjaFJlc2NhblJhZklkID0gbnVsbFxuICB9XG59XG5cbmNvbnN0IHJlc2NhbkFsbFR3ZWV0cyA9IChyZWFzb246IHN0cmluZykgPT4ge1xuICBpZiAoIXJ1bm5pbmcgfHwgIXJvdXRlQWN0aXZlIHx8ICFlbmFibGVkV2FudGVkKSByZXR1cm5cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihUV0VFVF9TRUxFQ1RPUikuZm9yRWFjaCgodHdlZXQpID0+IHtcbiAgICB0d2VldEJhdGNoUmVzY2FuUXVldWUuYWRkKHR3ZWV0KVxuICB9KVxuICBpZiAodHdlZXRCYXRjaFJlc2NhblF1ZXVlLnNpemUgPT09IDApIHJldHVyblxuXG4gIHR3ZWV0QmF0Y2hSZXNjYW5SZWFzb24gPSByZWFzb25cbiAgaWYgKHR3ZWV0QmF0Y2hSZXNjYW5SYWZJZCA9PT0gbnVsbCkge1xuICAgIHR3ZWV0QmF0Y2hSZXNjYW5SYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmx1c2hUd2VldEJhdGNoUmVzY2FuKVxuICB9XG59XG5cbmNvbnN0IHF1ZXVlVHdlZXRSZXNjYW4gPSAoKSA9PiB7XG4gIGlmICh0d2VldFJlc2NhblRpbWVyICE9PSBudWxsKSByZXR1cm5cbiAgdHdlZXRSZXNjYW5UaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0d2VldFJlc2NhblRpbWVyID0gbnVsbFxuICAgIGlmICghcnVubmluZyB8fCAhcm91dGVBY3RpdmUgfHwgIWVuYWJsZWRXYW50ZWQpIHJldHVyblxuICAgIHJlc2NhbkFsbFR3ZWV0cyhcImNhY2hlLXVwZGF0ZVwiKVxuICB9LCAyNTApXG59XG5cbmNvbnN0IHVwc2VydEZvbGxvd0NhY2hlID0gKGhhbmRsZTogc3RyaW5nIHwgbnVsbCwgc3RhdHVzOiBDZWxsU3RhdHVzKSA9PiB7XG4gIGlmICghaGFuZGxlKSByZXR1cm5cbiAgaWYgKHN0YXR1cyAhPT0gXCJmb2xsb3dpbmdcIiAmJiBzdGF0dXMgIT09IFwicGVuZGluZ1wiICYmIHN0YXR1cyAhPT0gXCJub3RfZm9sbG93ZWRcIikgcmV0dXJuXG5cbiAgY29uc3QgbmV4dFN0YXRlOiBDYWNoZWRGb2xsb3dTdGF0ZSA9XG4gICAgc3RhdHVzID09PSBcImZvbGxvd2luZ1wiID8gXCJmb2xsb3dlZFwiIDogc3RhdHVzXG5cbiAgY29uc3QgcHJldiA9IGZvbGxvd0NhY2hlW2hhbmRsZV1cbiAgaWYgKHByZXYgJiYgcHJldi5zdGF0ZSA9PT0gbmV4dFN0YXRlKSB7XG4gICAgZm9sbG93Q2FjaGVbaGFuZGxlXSA9IHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB1cGRhdGVkQXQ6IERhdGUubm93KClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9sbG93Q2FjaGVbaGFuZGxlXSA9IHtcbiAgICAgIHN0YXRlOiBuZXh0U3RhdGUsXG4gICAgICB1cGRhdGVkQXQ6IERhdGUubm93KClcbiAgICB9XG4gICAgcXVldWVUd2VldFJlc2NhbigpXG4gIH1cblxuICBmb2xsb3dDYWNoZURpcnR5ID0gdHJ1ZVxuICBzY2hlZHVsZVBlcnNpc3RGb2xsb3dDYWNoZSgpXG59XG5cbmNvbnN0IHNjaGVkdWxlU3RhdHNGbHVzaCA9ICgpID0+IHtcbiAgc3RhdHNEaXJ0eSA9IHRydWVcbiAgaWYgKHN0YXRzVGltZXIgIT09IG51bGwpIHJldHVyblxuXG4gIHN0YXRzVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc3RhdHNUaW1lciA9IG51bGxcbiAgICBpZiAoIXN0YXRzRGlydHkpIHJldHVyblxuICAgIHN0YXRzRGlydHkgPSBmYWxzZVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBkaW1tZWRDb3VudCxcbiAgICAgIHVua25vd25Db3VudCxcbiAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKVxuICAgIH1cbiAgICBjb25zdCBrZXkgPSBgJHtwYXlsb2FkLmRpbW1lZENvdW50fToke3BheWxvYWQudW5rbm93bkNvdW50fWBcbiAgICBpZiAoa2V5ID09PSBsYXN0U2VudFN0YXRzKSByZXR1cm5cbiAgICBsYXN0U2VudFN0YXRzID0ga2V5XG4gICAgc2V0TG9jYWwoeyBbU1RBVFNfS0VZXTogcGF5bG9hZCB9KVxuICB9LCAyMDApXG59XG5cbmNvbnN0IGRlY3JlbWVudENvdW50cyA9IChzdGF0ZTogVHJhY2tlZE5vZGVTdGF0ZSkgPT4ge1xuICBpZiAoc3RhdGUgPT09IFwiZm9sbG93ZWRcIiB8fCBzdGF0ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICBkaW1tZWRDb3VudCA9IE1hdGgubWF4KDAsIGRpbW1lZENvdW50IC0gMSlcbiAgfVxuICBpZiAoc3RhdGUgPT09IFwidW5rbm93blwiKSB7XG4gICAgdW5rbm93bkNvdW50ID0gTWF0aC5tYXgoMCwgdW5rbm93bkNvdW50IC0gMSlcbiAgfVxufVxuXG5jb25zdCBpbmNyZW1lbnRDb3VudHMgPSAoc3RhdGU6IFRyYWNrZWROb2RlU3RhdGUpID0+IHtcbiAgaWYgKHN0YXRlID09PSBcImZvbGxvd2VkXCIgfHwgc3RhdGUgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgZGltbWVkQ291bnQgKz0gMVxuICB9XG4gIGlmIChzdGF0ZSA9PT0gXCJ1bmtub3duXCIpIHtcbiAgICB1bmtub3duQ291bnQgKz0gMVxuICB9XG59XG5cbmNvbnN0IHNldE5vZGVTdGF0ZSA9IChlbDogSFRNTEVsZW1lbnQsIG5leHRTdGF0ZTogVHJhY2tlZE5vZGVTdGF0ZSkgPT4ge1xuICBjb25zdCBwcmV2U3RhdGUgPSBub2RlU3RhdGVSZWdpc3RyeS5nZXQoZWwpXG4gIGlmIChwcmV2U3RhdGUgPT09IG5leHRTdGF0ZSkgcmV0dXJuXG5cbiAgaWYgKHByZXZTdGF0ZSkge1xuICAgIGRlY3JlbWVudENvdW50cyhwcmV2U3RhdGUpXG4gIH1cblxuICBpbmNyZW1lbnRDb3VudHMobmV4dFN0YXRlKVxuICBub2RlU3RhdGVSZWdpc3RyeS5zZXQoZWwsIG5leHRTdGF0ZSlcbiAgc2NoZWR1bGVTdGF0c0ZsdXNoKClcbn1cblxuY29uc3QgcmVtb3ZlVHJhY2tlZE5vZGUgPSAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHByZXZTdGF0ZSA9IG5vZGVTdGF0ZVJlZ2lzdHJ5LmdldChlbClcbiAgaWYgKCFwcmV2U3RhdGUpIHJldHVyblxuXG4gIGRlY3JlbWVudENvdW50cyhwcmV2U3RhdGUpXG4gIG5vZGVTdGF0ZVJlZ2lzdHJ5LmRlbGV0ZShlbClcbiAgc2NoZWR1bGVTdGF0c0ZsdXNoKClcbn1cblxuY29uc3QgdG9NYXJrZXJTdGF0ZSA9IChzdGF0dXM6IENlbGxTdGF0dXMpOiBUcmFja2VkTm9kZVN0YXRlID0+XG4gIHN0YXR1cyA9PT0gXCJmb2xsb3dpbmdcIiA/IFwiZm9sbG93ZWRcIiA6IHN0YXR1c1xuXG5jb25zdCBtYXJrRWxlbWVudFN0YXRlID0gKGVsOiBIVE1MRWxlbWVudCwgc3RhdHVzOiBDZWxsU3RhdHVzKSA9PiB7XG4gIGNvbnN0IHNob3VsZERpbSA9IHN0YXR1cyA9PT0gXCJmb2xsb3dpbmdcIiB8fCBzdGF0dXMgPT09IFwicGVuZGluZ1wiXG4gIGNvbnN0IG1hcmtlclN0YXRlID0gdG9NYXJrZXJTdGF0ZShzdGF0dXMpXG4gIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGVsLmdldEF0dHJpYnV0ZShTVEFURV9BVFRSKVxuICBjb25zdCBjdXJyZW50UHJvY2Vzc2VkID0gZWwuZ2V0QXR0cmlidXRlKFBST0NFU1NFRF9BVFRSKVxuICBjb25zdCBoYXNEaW1DbGFzcyA9IGVsLmNsYXNzTGlzdC5jb250YWlucyhcInhjc2YtZGltXCIpXG4gIGNvbnN0IGhhc0RlYnVnQ2xhc3MgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4Y3NmLWRlYnVnXCIpXG5cbiAgY29uc3Qgc2hvdWxkVXBkYXRlRG9tID1cbiAgICBjdXJyZW50U3RhdGUgIT09IG1hcmtlclN0YXRlIHx8XG4gICAgY3VycmVudFByb2Nlc3NlZCAhPT0gXCIxXCIgfHxcbiAgICBoYXNEaW1DbGFzcyAhPT0gc2hvdWxkRGltIHx8XG4gICAgaGFzRGVidWdDbGFzcyAhPT0gREVCVUdcblxuICBpZiAoc2hvdWxkVXBkYXRlRG9tKSB7XG4gICAgaWYgKHNob3VsZERpbSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInhjc2YtZGltXCIpXG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInhjc2YtZGVidWdcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJ4Y3NmLWRlYnVnXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJ4Y3NmLWRpbVwiLCBcInhjc2YtZGVidWdcIilcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoUFJPQ0VTU0VEX0FUVFIsIFwiMVwiKVxuICAgIGVsLnNldEF0dHJpYnV0ZShTVEFURV9BVFRSLCBtYXJrZXJTdGF0ZSlcbiAgfVxuXG4gIHNldE5vZGVTdGF0ZShlbCwgbWFya2VyU3RhdGUpXG59XG5cbmNvbnN0IGdldEJ1dHRvblN0YXR1cyA9IChidXR0b246IEhUTUxFbGVtZW50KTogQ2VsbFN0YXR1cyB8IG51bGwgPT4ge1xuICBjb25zdCBhcmlhTGFiZWwgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8udG9Mb3dlckNhc2UoKSA/PyBcIlwiXG4gIGNvbnN0IHRlc3RJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKT8udG9Mb3dlckNhc2UoKSA/PyBcIlwiXG5cbiAgaWYgKGFyaWFMYWJlbC5pbmNsdWRlcyhcInBlbmRpbmdcIikpIHJldHVybiBcInBlbmRpbmdcIlxuICBpZiAoYXJpYUxhYmVsLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpKSByZXR1cm4gXCJmb2xsb3dpbmdcIlxuICBpZiAodGVzdElkLmluY2x1ZGVzKFwicGVuZGluZ1wiKSB8fCB0ZXN0SWQuaW5jbHVkZXMoXCJjYW5jZWxcIikpIHJldHVybiBcInBlbmRpbmdcIlxuICBpZiAodGVzdElkLmluY2x1ZGVzKFwidW5mb2xsb3dcIikpIHJldHVybiBcImZvbGxvd2luZ1wiXG4gIGlmIChhcmlhTGFiZWwuaW5jbHVkZXMoXCJmb2xsb3dcIikgfHwgdGVzdElkLmluY2x1ZGVzKFwiZm9sbG93XCIpKSByZXR1cm4gXCJub3RfZm9sbG93ZWRcIlxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBjbGFzc2lmeUNlbGwgPSAoY2VsbDogSFRNTEVsZW1lbnQpOiBDZWxsU3RhdHVzID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGNlbGwucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJidXR0b25cIilcbiAgbGV0IGhhc05vdEZvbGxvd2VkID0gZmFsc2VcblxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZ2V0QnV0dG9uU3RhdHVzKGJ1dHRvbilcbiAgICBpZiAoc3RhdHVzID09PSBcInBlbmRpbmdcIikgcmV0dXJuIFwicGVuZGluZ1wiXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJmb2xsb3dpbmdcIikgcmV0dXJuIFwiZm9sbG93aW5nXCJcbiAgICBpZiAoc3RhdHVzID09PSBcIm5vdF9mb2xsb3dlZFwiKSBoYXNOb3RGb2xsb3dlZCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBoYXNOb3RGb2xsb3dlZCA/IFwibm90X2ZvbGxvd2VkXCIgOiBcInVua25vd25cIlxufVxuXG5jb25zdCBwcm9jZXNzVXNlckNlbGwgPSAoY2VsbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc3RhdHVzID0gY2xhc3NpZnlDZWxsKGNlbGwpXG4gIGNvbnN0IGhhbmRsZSA9IGV4dHJhY3RIYW5kbGVGcm9tVXNlckNlbGwoY2VsbClcbiAgaWYgKGhhbmRsZSkge1xuICAgIGhhbmRsZU1lbW8uc2V0KGNlbGwsIGhhbmRsZSlcbiAgfVxuICB1cHNlcnRGb2xsb3dDYWNoZShoYW5kbGUsIHN0YXR1cylcbiAgbWFya0VsZW1lbnRTdGF0ZShjZWxsLCBzdGF0dXMpXG59XG5cbmNvbnN0IHByb2Nlc3NUd2VldCA9IChhcnRpY2xlOiBIVE1MRWxlbWVudCwgcmVhc29uID0gXCJvYnNlcnZlclwiKSA9PiB7XG4gIGNvbnN0IGhhbmRsZSA9IGdldFR3ZWV0QXV0aG9ySGFuZGxlKGFydGljbGUpXG4gIGlmIChoYW5kbGUpIHtcbiAgICBoYW5kbGVNZW1vLnNldChhcnRpY2xlLCBoYW5kbGUpXG4gIH1cbiAgY29uc3QgY2FjaGVkU3RhdGUgPSBnZXRDYWNoZWRGb2xsb3dTdGF0ZShoYW5kbGUpXG4gIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNCeUhhbmRsZShoYW5kbGUpXG5cbiAgY29uc3QgbmV4dFN0YXRlID0gdG9NYXJrZXJTdGF0ZShzdGF0dXMpXG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBhcnRpY2xlLmdldEF0dHJpYnV0ZShTVEFURV9BVFRSKVxuICBtYXJrRWxlbWVudFN0YXRlKGFydGljbGUsIHN0YXR1cylcblxuICBpZiAoXG4gICAgKGNhY2hlZFN0YXRlID09PSBcImZvbGxvd2VkXCIgfHwgY2FjaGVkU3RhdGUgPT09IFwicGVuZGluZ1wiKSAmJlxuICAgIHByZXZpb3VzU3RhdGUgIT09IG5leHRTdGF0ZSAmJlxuICAgIGhhbmRsZVxuICApIHtcbiAgICBjb25zdCBsb2dTdGF0ZSA9IGNhY2hlZFN0YXRlID09PSBcImZvbGxvd2VkXCIgPyBcImZvbGxvd2VkXCIgOiBcInBlbmRpbmdcIlxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtYQ1NGIENhY2hlLUhpdF0gaGFuZGxlOiBAJHtoYW5kbGV9LCBzdGF0ZTogJHtsb2dTdGF0ZX0sIHJlYXNvbjogJHtyZWFzb259YFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlTdHlsZXMgPSAoY2VsbDogSFRNTEVsZW1lbnQsIHN0YXR1czogQ2VsbFN0YXR1cykgPT4ge1xuICBtYXJrRWxlbWVudFN0YXRlKGNlbGwsIHN0YXR1cylcbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3RVc2VyQ2VsbHNGcm9tTm9kZSA9IChub2RlOiBOb2RlKTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBbXVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpXG4gIGNvbnN0IG1heWJlQWRkQ2VsbCA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXN1bHRzLmFkZChlbClcbiAgfVxuXG4gIGlmIChub2RlLm1hdGNoZXMoVVNFUl9DRUxMX1NFTEVDVE9SKSkge1xuICAgIG1heWJlQWRkQ2VsbChub2RlKVxuICB9XG5cbiAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihVU0VSX0NFTExfU0VMRUNUT1IpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgbWF5YmVBZGRDZWxsKGVsKVxuICB9KVxuXG4gIHJldHVybiBBcnJheS5mcm9tKHJlc3VsdHMpXG59XG5cbmNvbnN0IGNvbGxlY3RDYW5kaWRhdGVzRnJvbU5vZGUgPSAobm9kZTogTm9kZSk6IEhUTUxFbGVtZW50W10gPT4ge1xuICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gW11cblxuICBjb25zdCByZXN1bHRzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKVxuICBjb25zdCBtYXliZUFkZENhbmRpZGF0ZSA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHJldHVyblxuICAgIHJlc3VsdHMuYWRkKGVsKVxuICB9XG5cbiAgaWYgKG5vZGUubWF0Y2hlcyhDQU5ESURBVEVfU0VMRUNUT1IpKSB7XG4gICAgbWF5YmVBZGRDYW5kaWRhdGUobm9kZSlcbiAgfVxuXG4gIG5vZGUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0FORElEQVRFX1NFTEVDVE9SKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG1heWJlQWRkQ2FuZGlkYXRlKGVsKVxuICB9KVxuXG4gIHJldHVybiBBcnJheS5mcm9tKHJlc3VsdHMpXG59XG5cbmNsYXNzIFNlYXJjaE9ic2VydmVyIHtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcmVhZG9ubHkgcXVldWUgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpXG4gIHByaXZhdGUgcmVhZG9ubHkgZGlydHlTZXQgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpXG4gIHByaXZhdGUgcmVhZG9ubHkgZm9yY2VRdWV1ZSA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpXG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvY2Vzc2VkID0gbmV3IFdlYWtTZXQ8SFRNTEVsZW1lbnQ+KClcbiAgcHJpdmF0ZSByYWZJZDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBoZWFsUmFmSWQ6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgaXNSdW5uaW5nID0gZmFsc2VcblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHJldHVyblxuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTXV0YXRpb25zKG11dGF0aW9ucylcbiAgICB9KVxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIl1cbiAgICB9KVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSByZXR1cm5cbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLm9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbFxuICAgIHRoaXMucXVldWUuY2xlYXIoKVxuICAgIHRoaXMuZGlydHlTZXQuY2xlYXIoKVxuXG4gICAgaWYgKHRoaXMucmFmSWQgIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKVxuICAgICAgdGhpcy5yYWZJZCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWFsUmFmSWQgIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhlYWxSYWZJZClcbiAgICAgIHRoaXMuaGVhbFJhZklkID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGVucXVldWVEb2N1bWVudChzZWxlY3Rvcjogc3RyaW5nLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oc2VsZWN0b3IpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHJldHVyblxuICAgICAgdGhpcy5lbnF1ZXVlKGVsLCBmb3JjZSlcbiAgICB9KVxuICAgIHRoaXMuc2NoZWR1bGVGbHVzaCgpXG4gIH1cblxuICBlbnF1ZXVlRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoc2hvdWxkU2tpcENlbGxJbm5lckRpdihlbCkpIHtcbiAgICAgIGNvbnN0IHBhcmVudFVzZXJDZWxsID0gZWwuY2xvc2VzdDxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3RpZD1cIlVzZXJDZWxsXCJdJylcbiAgICAgIGlmIChwYXJlbnRVc2VyQ2VsbCkge1xuICAgICAgICB0aGlzLmVucXVldWUocGFyZW50VXNlckNlbGwsIGZvcmNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVucXVldWUoZWwsIGZvcmNlKVxuICAgIH1cbiAgICB0aGlzLnNjaGVkdWxlRmx1c2goKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNdXRhdGlvbnMobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjb2xsZWN0Q2FuZGlkYXRlc0Zyb21Ob2RlKG5vZGUpKSB7XG4gICAgICAgICAgdGhpcy5lbnF1ZXVlKGNhbmRpZGF0ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICB0aGlzLnJlbW92ZVRyYWNrZWRDYW5kaWRhdGVzKG5vZGUpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2NoZWR1bGVGbHVzaCgpXG4gICAgdGhpcy5zY2hlZHVsZUhlYWxGbHVzaCgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkge1xuICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICE9PSBcImNsYXNzXCIpIHJldHVyblxuICAgIGlmICghKG11dGF0aW9uLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICBsZXQgcm9vdEVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gICAgaWYgKG11dGF0aW9uLnRhcmdldC5tYXRjaGVzKFRXRUVUX1NFTEVDVE9SKSkge1xuICAgICAgcm9vdEVsID0gbXV0YXRpb24udGFyZ2V0XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG11dGF0aW9uLnRhcmdldC5tYXRjaGVzKFVTRVJfQ0VMTF9TRUxFQ1RPUikgJiZcbiAgICAgICFzaG91bGRTa2lwQ2VsbElubmVyRGl2KG11dGF0aW9uLnRhcmdldClcbiAgICApIHtcbiAgICAgIHJvb3RFbCA9IG11dGF0aW9uLnRhcmdldFxuICAgIH1cblxuICAgIGlmICghcm9vdEVsIHx8ICFyb290RWwuaXNDb25uZWN0ZWQpIHJldHVyblxuICAgIGlmIChyb290RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwieGNzZi1kaW1cIikpIHJldHVyblxuXG4gICAgY29uc3QgaGFuZGxlID0gcmVhZEhhbmRsZUZvclJvb3Qocm9vdEVsKVxuICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNCeUhhbmRsZShoYW5kbGUpXG4gICAgaWYgKHN0YXR1cyAhPT0gXCJmb2xsb3dpbmdcIiAmJiBzdGF0dXMgIT09IFwicGVuZGluZ1wiKSByZXR1cm5cblxuICAgIHRoaXMuZGlydHlTZXQuYWRkKHJvb3RFbClcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVHJhY2tlZENhbmRpZGF0ZXMobm9kZTogTm9kZSkge1xuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVyblxuXG4gICAgaWYgKG5vZGUubWF0Y2hlcyhDQU5ESURBVEVfU0VMRUNUT1IpICYmICFzaG91bGRTa2lwQ2VsbElubmVyRGl2KG5vZGUpKSB7XG4gICAgICByZW1vdmVUcmFja2VkTm9kZShub2RlKVxuICAgIH1cblxuICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0FORElEQVRFX1NFTEVDVE9SKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKHNob3VsZFNraXBDZWxsSW5uZXJEaXYoZWwpKSByZXR1cm5cbiAgICAgIHJlbW92ZVRyYWNrZWROb2RlKGVsKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGVucXVldWUoZWw6IEhUTUxFbGVtZW50LCBmb3JjZTogYm9vbGVhbikge1xuICAgIGlmICghZWwuaXNDb25uZWN0ZWQpIHJldHVyblxuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIGlmICh0aGlzLnByb2Nlc3NlZC5oYXMoZWwpKSByZXR1cm5cbiAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoUFJPQ0VTU0VEX0FUVFIpID09PSBcIjFcIikgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9yY2VRdWV1ZS5hZGQoZWwpXG4gICAgfVxuICAgIHRoaXMucXVldWUuYWRkKGVsKVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZUZsdXNoKCkge1xuICAgIGlmICh0aGlzLnJhZklkICE9PSBudWxsIHx8IHRoaXMucXVldWUuc2l6ZSA9PT0gMCkgcmV0dXJuXG4gICAgdGhpcy5yYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5mbHVzaCgpKVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZUhlYWxGbHVzaCgpIHtcbiAgICBpZiAodGhpcy5oZWFsUmFmSWQgIT09IG51bGwgfHwgdGhpcy5kaXJ0eVNldC5zaXplID09PSAwKSByZXR1cm5cbiAgICB0aGlzLmhlYWxSYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5mbHVzaEhlYWxzKCkpXG4gIH1cblxuICBwcml2YXRlIGZsdXNoKCkge1xuICAgIHRoaXMucmFmSWQgPSBudWxsXG4gICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuXG5cbiAgICBsZXQgcHJvY2Vzc2VkQ291bnQgPSAwXG4gICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLnF1ZXVlLnZhbHVlcygpXG5cbiAgICB3aGlsZSAocHJvY2Vzc2VkQ291bnQgPCBNQVhfQ0VMTFNfUEVSX0ZSQU1FKSB7XG4gICAgICBjb25zdCBuZXh0ID0gaXRlcmF0b3IubmV4dCgpXG4gICAgICBpZiAobmV4dC5kb25lKSBicmVha1xuXG4gICAgICBjb25zdCBlbCA9IG5leHQudmFsdWVcbiAgICAgIHRoaXMucXVldWUuZGVsZXRlKGVsKVxuICAgICAgdGhpcy5wcm9jZXNzRWxlbWVudChlbClcbiAgICAgIHByb2Nlc3NlZENvdW50ICs9IDFcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xdWV1ZS5zaXplID4gMCkge1xuICAgICAgdGhpcy5zY2hlZHVsZUZsdXNoKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZsdXNoSGVhbHMoKSB7XG4gICAgdGhpcy5oZWFsUmFmSWQgPSBudWxsXG4gICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuXG5cbiAgICBsZXQgcHJvY2Vzc2VkQ291bnQgPSAwXG4gICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmRpcnR5U2V0LnZhbHVlcygpXG4gICAgd2hpbGUgKHByb2Nlc3NlZENvdW50IDwgTUFYX0NFTExTX1BFUl9GUkFNRSkge1xuICAgICAgY29uc3QgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKVxuICAgICAgaWYgKG5leHQuZG9uZSkgYnJlYWtcblxuICAgICAgY29uc3Qgcm9vdEVsID0gbmV4dC52YWx1ZVxuICAgICAgdGhpcy5kaXJ0eVNldC5kZWxldGUocm9vdEVsKVxuICAgICAgdGhpcy5oZWFsRWxlbWVudChyb290RWwpXG4gICAgICBwcm9jZXNzZWRDb3VudCArPSAxXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlydHlTZXQuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVIZWFsRmx1c2goKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGVhbEVsZW1lbnQocm9vdEVsOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghcm9vdEVsLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZW1vdmVUcmFja2VkTm9kZShyb290RWwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHJvb3RFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4Y3NmLWRpbVwiKSkgcmV0dXJuXG5cbiAgICBjb25zdCBoYW5kbGUgPSByZWFkSGFuZGxlRm9yUm9vdChyb290RWwsIHsgZm9yY2VSZWZyZXNoOiB0cnVlIH0pXG4gICAgaWYgKCFoYW5kbGUpIHJldHVyblxuXG4gICAgY29uc3Qgc3RhdHVzID0gcmVzb2x2ZVN0YXR1c0J5SGFuZGxlKGhhbmRsZSlcbiAgICBpZiAoc3RhdHVzICE9PSBcImZvbGxvd2luZ1wiICYmIHN0YXR1cyAhPT0gXCJwZW5kaW5nXCIpIHJldHVyblxuXG4gICAgbWFya0VsZW1lbnRTdGF0ZShyb290RWwsIHN0YXR1cylcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0VsZW1lbnQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCFlbC5pc0Nvbm5lY3RlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBmb3JjZWQgPSB0aGlzLmZvcmNlUXVldWUuaGFzKGVsKVxuICAgIGlmIChmb3JjZWQpIHtcbiAgICAgIHRoaXMuZm9yY2VRdWV1ZS5kZWxldGUoZWwpXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2Nlc3NlZC5oYXMoZWwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwubWF0Y2hlcyhUV0VFVF9TRUxFQ1RPUikpIHtcbiAgICAgIHByb2Nlc3NUd2VldChlbClcbiAgICB9IGVsc2UgaWYgKGVsLm1hdGNoZXMoVVNFUl9DRUxMX1NFTEVDVE9SKSkge1xuICAgICAgcHJvY2Vzc1VzZXJDZWxsKGVsKVxuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc2VkLmFkZChlbClcbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBTZWFyY2hPYnNlcnZlcigpXG5cbmV4cG9ydCBjb25zdCByZXNldFN0YXRzID0gKCkgPT4ge1xuICBub2RlU3RhdGVSZWdpc3RyeSA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBUcmFja2VkTm9kZVN0YXRlPigpXG4gIGRpbW1lZENvdW50ID0gMFxuICB1bmtub3duQ291bnQgPSAwXG4gIHN0YXRzRGlydHkgPSB0cnVlXG4gIGxhc3RTZW50U3RhdHMgPSBcIlwiXG4gIHNjaGVkdWxlU3RhdHNGbHVzaCgpXG59XG5cbmNvbnN0IHVuZGltRG9jdW1lbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLnhjc2YtZGltXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInhjc2YtZGltXCIsIFwieGNzZi1kZWJ1Z1wiKVxuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShQUk9DRVNTRURfQVRUUilcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoU1RBVEVfQVRUUilcbiAgfSlcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgWyR7UFJPQ0VTU0VEX0FUVFJ9PVwiMVwiXWApXG4gICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhcInhjc2YtZGltXCIpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShQUk9DRVNTRURfQVRUUilcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFNUQVRFX0FUVFIpXG4gICAgICB9XG4gICAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihDQU5ESURBVEVfU0VMRUNUT1IpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgbm9kZVN0YXRlUmVnaXN0cnkuZGVsZXRlKGVsKVxuICB9KVxufVxuXG5jb25zdCBlbnN1cmVTdGFydGVkID0gKCkgPT4ge1xuICBpZiAocnVubmluZykgcmV0dXJuXG4gIHJ1bm5pbmcgPSB0cnVlXG5cbiAgZW5zdXJlU3R5bGVzSW5qZWN0ZWQoKVxuICBvYnNlcnZlci5zdGFydCgpXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKCFydW5uaW5nKSByZXR1cm5cbiAgICAgIG9ic2VydmVyLmVucXVldWVEb2N1bWVudChDQU5ESURBVEVfU0VMRUNUT1IsIHRydWUpXG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgZW5zdXJlU3RvcHBlZCA9ICgpID0+IHtcbiAgY2xlYXJUd2VldEJhdGNoUmVzY2FuKClcbiAgaWYgKHR3ZWV0UmVzY2FuVGltZXIgIT09IG51bGwpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHR3ZWV0UmVzY2FuVGltZXIpXG4gICAgdHdlZXRSZXNjYW5UaW1lciA9IG51bGxcbiAgfVxuICBpZiAocnVubmluZykge1xuICAgIHJ1bm5pbmcgPSBmYWxzZVxuICAgIG9ic2VydmVyLnN0b3AoKVxuICAgIHVuZGltRG9jdW1lbnQoKVxuICB9XG4gIHJlc2V0U3RhdHMoKVxufVxuXG5jb25zdCByZWNvbmNpbGUgPSAoX3JlYXNvbjogc3RyaW5nKSA9PiB7XG4gIGlmIChyb3V0ZUFjdGl2ZSAmJiBlbmFibGVkV2FudGVkKSB7XG4gICAgZW5zdXJlU3RhcnRlZCgpXG4gIH0gZWxzZSB7XG4gICAgZW5zdXJlU3RvcHBlZCgpXG4gIH1cbn1cblxuY29uc3QgaXNGb2xsb3dMaWtlSW50ZXJhY3Rpb24gPSAodGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgaWYgKCF0YXJnZXQpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGJ1dHRvbiA9IHRhcmdldC5jbG9zZXN0PEhUTUxFbGVtZW50PihcImJ1dHRvblwiKVxuICBpZiAoIWJ1dHRvbikgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgYXJpYUxhYmVsID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIlxuICBjb25zdCB0ZXN0SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0aWRcIik/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIlxuICByZXR1cm4gKFxuICAgIGFyaWFMYWJlbC5pbmNsdWRlcyhcImZvbGxvd1wiKSB8fFxuICAgIGFyaWFMYWJlbC5pbmNsdWRlcyhcInBlbmRpbmdcIikgfHxcbiAgICB0ZXN0SWQuaW5jbHVkZXMoXCJmb2xsb3dcIikgfHxcbiAgICB0ZXN0SWQuaW5jbHVkZXMoXCJwZW5kaW5nXCIpIHx8XG4gICAgdGVzdElkLmluY2x1ZGVzKFwiY2FuY2VsXCIpIHx8XG4gICAgdGVzdElkLmluY2x1ZGVzKFwidW5mb2xsb3dcIilcbiAgKVxufVxuXG5jb25zdCBpbnN0YWxsRm9sbG93SW50ZXJhY3Rpb25MaXN0ZW5lciA9ICgpID0+IHtcbiAgaWYgKGNsaWNrSGFuZGxlckluc3RhbGxlZCkgcmV0dXJuXG4gIGNsaWNrSGFuZGxlckluc3RhbGxlZCA9IHRydWVcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFyb3V0ZUFjdGl2ZSkgcmV0dXJuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIGlmICghaXNGb2xsb3dMaWtlSW50ZXJhY3Rpb24odGFyZ2V0KSkgcmV0dXJuXG5cbiAgICBjb25zdCBjbGlja2VkQnV0dG9uID0gdGFyZ2V0Py5jbG9zZXN0PEhUTUxFbGVtZW50PihcImJ1dHRvblwiKVxuICAgIGNvbnN0IGNhbmRpZGF0ZUNlbGwgPVxuICAgICAgY2xpY2tlZEJ1dHRvbj8uY2xvc2VzdDxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3RpZD1cIlVzZXJDZWxsXCJdJykgPz9cbiAgICAgIGNsaWNrZWRCdXR0b24/LmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCdkaXZbZGF0YS10ZXN0aWQ9XCJjZWxsSW5uZXJEaXZcIl0nKVxuICAgIGlmICghY2FuZGlkYXRlQ2VsbCkgcmV0dXJuXG5cbiAgICBjb25zdCBkZWxheU1zID0gOTAwXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFyb3V0ZUFjdGl2ZSkgcmV0dXJuXG4gICAgICBvYnNlcnZlci5lbnF1ZXVlRWxlbWVudChjYW5kaWRhdGVDZWxsLCB0cnVlKVxuICAgIH0sIGRlbGF5TXMpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXJFbmFibGVkID0gKG5leHQ6IGJvb2xlYW4pID0+IHtcbiAgZW5hYmxlZFdhbnRlZCA9IG5leHRcbiAgcmVjb25jaWxlKFwic2V0RmlsdGVyRW5hYmxlZFwiKVxufVxuXG5leHBvcnQgY29uc3Qgc3luY0VuYWJsZWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiBjaHJvbWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIWNocm9tZS5zdG9yYWdlPy5sb2NhbCkgcmV0dXJuXG5cbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImVuYWJsZWRcIl0sIChyZXN1bHQpID0+IHtcbiAgICBlbmFibGVkV2FudGVkID0gcmVzdWx0LmVuYWJsZWQgIT09IGZhbHNlXG4gICAgc3RvcmFnZUh5ZHJhdGVkID0gdHJ1ZVxuICAgIHJlY29uY2lsZShcImh5ZHJhdGVcIilcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGluc3RhbGxPbmNlID0gKCkgPT4ge1xuICBpZiAoaW5zdGFsbERvbmUpIHJldHVyblxuICBpbnN0YWxsRG9uZSA9IHRydWVcblxuICB2b2lkIHJlZnJlc2hGb2xsb3dpbmdNZW1vcnlGcm9tRGIoKS50aGVuKCgpID0+IHtcbiAgICByZXNjYW5BbGxUd2VldHMoXCJmb2xsb3dpbmctbWVtb3J5LWluaXRcIilcbiAgfSlcblxuICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FjaGVkID0gYXdhaXQgZ2V0TG9jYWw8dW5rbm93bj4oRk9MTE9XX0NBQ0hFX0tFWSlcbiAgICBmb2xsb3dDYWNoZSA9IHBhcnNlRm9sbG93Q2FjaGUoY2FjaGVkKVxuICAgIGZvbGxvd0NhY2hlTG9hZGVkID0gdHJ1ZVxuICAgIHBydW5lRXhwaXJlZENhY2hlRW50cmllcygpXG4gICAgaWYgKHR5cGVvZiBjYWNoZWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZvbGxvd0NhY2hlRGlydHkgPSB0cnVlXG4gICAgICBzY2hlZHVsZVBlcnNpc3RGb2xsb3dDYWNoZSgpXG4gICAgfVxuICAgIHJlc2NhbkFsbFR3ZWV0cyhcImluaXRcIilcbiAgfSkoKVxuXG4gIGluc3RhbGxGb2xsb3dJbnRlcmFjdGlvbkxpc3RlbmVyKClcbiAgc3luY0VuYWJsZWRGcm9tU3RvcmFnZSgpXG5cbiAgaWYgKHR5cGVvZiBjaHJvbWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIWNocm9tZS5zdG9yYWdlPy5vbkNoYW5nZWQpIHJldHVyblxuXG4gIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICBpZiAoYXJlYU5hbWUgIT09IFwibG9jYWxcIikgcmV0dXJuXG5cbiAgICBpZiAoY2hhbmdlcy5lbmFibGVkKSB7XG4gICAgICBlbmFibGVkV2FudGVkID0gY2hhbmdlcy5lbmFibGVkLm5ld1ZhbHVlICE9PSBmYWxzZVxuICAgICAgcmVjb25jaWxlKFwic3RvcmFnZV9jaGFuZ2VcIilcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy54Y3NmX2ZvbGxvd19jYWNoZSkge1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gY2hhbmdlcy54Y3NmX2ZvbGxvd19jYWNoZS5uZXdWYWx1ZVxuICAgICAgZm9sbG93Q2FjaGUgPSBwYXJzZUZvbGxvd0NhY2hlKG5leHRWYWx1ZSlcbiAgICAgIHBydW5lRXhwaXJlZENhY2hlRW50cmllcygpXG4gICAgICBpZiAodHlwZW9mIG5leHRWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBmb2xsb3dDYWNoZURpcnR5ID0gdHJ1ZVxuICAgICAgICBzY2hlZHVsZVBlcnNpc3RGb2xsb3dDYWNoZSgpXG4gICAgICB9XG4gICAgICByZXNjYW5BbGxUd2VldHMoXCJjYWNoZS11cGRhdGVcIilcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1tYQ1NGX0ZPTExPV0lOR19WRVJTSU9OX0tFWV0pIHtcbiAgICAgIHZvaWQgcmVmcmVzaEZvbGxvd2luZ01lbW9yeUZyb21EYigpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNjYW5BbGxUd2VldHMoXCJmb2xsb3dpbmctbWVtb3J5LXVwZGF0ZVwiKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRSb3V0ZUFjdGl2ZSA9IChuZXh0OiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHdhc1JvdXRlQWN0aXZlID0gcm91dGVBY3RpdmVcbiAgcm91dGVBY3RpdmUgPSBuZXh0XG4gIGlmIChzdG9yYWdlSHlkcmF0ZWQpIHtcbiAgICByZWNvbmNpbGUobmV4dCA/IFwicm91dGVfZW50ZXJcIiA6IFwicm91dGVfbGVhdmVcIilcbiAgfVxuXG4gIGlmIChuZXh0ICYmIHdhc1JvdXRlQWN0aXZlICYmIHJ1bm5pbmcpIHtcbiAgICByZXNldFN0YXRzKClcbiAgICBvYnNlcnZlci5lbnF1ZXVlRG9jdW1lbnQoQ0FORElEQVRFX1NFTEVDVE9SLCB0cnVlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMuZjljMTk5ZGQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);