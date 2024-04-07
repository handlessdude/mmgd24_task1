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
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _useSimulation = require("src/simulation/use-simulation");
const { runSimulation, setupSimulation } = (0, _useSimulation.useSimulation)();
setupSimulation();
runSimulation();

},{"src/simulation/use-simulation":"QMhTK"}],"QMhTK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSimulation", ()=>useSimulation);
var _useCanvasRenderer = require("src/simulation/use-canvas-renderer");
var _useGameState = require("src/simulation/use-game-state");
const useSimulation = ()=>{
    const { setupRenderer, draw, getField } = (0, _useCanvasRenderer.useCanvasRenderer)();
    const { simulationState, setupSimulationState, runQueueUpdates } = (0, _useGameState.useSimulationState)(getField);
    const runSimulation = (tFrame = 0)=>{
        simulationState.stopCycle = window.requestAnimationFrame(runSimulation);
        const nextTick = simulationState.lastTick + simulationState.tickLength;
        let numTicks = 0;
        if (tFrame > nextTick) {
            const timeSinceTick = tFrame - simulationState.lastTick;
            numTicks = Math.floor(timeSinceTick / simulationState.tickLength);
        }
        runQueueUpdates(numTicks);
        draw(simulationState.shapes);
        simulationState.lastRender = tFrame;
    };
    const stopSimulation = ()=>{
        window.cancelAnimationFrame(simulationState.stopCycle);
    };
    const setupSimulation = ()=>{
        setupRenderer();
        setupSimulationState();
    };
    return {
        setupSimulation,
        runSimulation,
        stopSimulation
    };
};

},{"src/simulation/use-canvas-renderer":"9fdbx","src/simulation/use-game-state":"d4NrR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fdbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCanvasRenderer", ()=>useCanvasRenderer);
var _exceptions = require("src/exceptions");
var _rectangle = require("src/entities/rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _triangleEquilateral = require("src/entities/triangle-equilateral");
var _hexagon = require("src/entities/hexagon");
var _circle = require("src/entities/circle");
var _shapeDrawables = require("src/utils/shape-drawables");
const useCanvasRenderer = ()=>{
    const canvas = document.getElementById("cnvs");
    const context = canvas.getContext("2d");
    if (!canvas || !context) throw new (0, _exceptions.NoCanvasFoundError)();
    const clearCanvas = ()=>{
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
    const draw = (shapes)=>{
        clearCanvas();
        shapes.forEach((shape)=>{
            if (shape instanceof (0, _rectangleDefault.default)) (0, _shapeDrawables.drawRectangle)(context, shape);
            else if (shape instanceof (0, _circle.Circle)) (0, _shapeDrawables.drawCircle)(context, shape);
            else if (shape instanceof (0, _triangleEquilateral.TriangleEquilateral)) (0, _shapeDrawables.drawEquilateralTriangle)(context, shape);
            else if (shape instanceof (0, _hexagon.Hexagon)) (0, _shapeDrawables.drawHexagon)(context, shape);
        });
    };
    const setupRenderer = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    return {
        setupRenderer,
        draw,
        getField: ()=>({
                width: canvas.width,
                height: canvas.height
            })
    };
};

},{"src/exceptions":"fdJvp","src/entities/rectangle":"jePgU","src/entities/triangle-equilateral":"2RB0s","src/entities/hexagon":"ggAuR","src/entities/circle":"cgXa9","src/utils/shape-drawables":"2PwC6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdJvp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoCanvasFoundError", ()=>NoCanvasFoundError);
class NoCanvasFoundError extends Error {
    constructor(){
        super("No canvas found on page.");
        this.name = "NoCanvasFoundError";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"jePgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _shape2D = require("src/entities/shape2d");
var _collisions = require("src/utils/collisions");
var _circle = require("src/entities/circle");
class Rectangle extends (0, _shape2D.Shape2d) {
    constructor(x, y, w, h, velocity = {
        x: 0,
        y: 0
    }){
        super(x, y, velocity);
        this.w = w;
        this.h = h;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.w;
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.y + this.h;
    }
    get points() {
        return [
            {
                x: this.left,
                y: this.bottom
            },
            {
                x: this.left,
                y: this.top
            },
            {
                x: this.right,
                y: this.top
            },
            {
                x: this.right,
                y: this.bottom
            }
        ];
    }
    get boundingBox() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
        };
    }
    contains(point) {
        return point.x >= this.x && point.x <= this.x + this.w && point.y >= this.y && point.y <= this.y + this.h;
    }
    intersects(shape) {
        if (shape instanceof (0, _circle.Circle)) return (0, _collisions.doCirclePolygonCollide)(shape, this);
        return (0, _collisions.doPolygonsCollide)(this, shape);
    }
}
exports.default = Rectangle;

},{"src/entities/shape2d":"kOnEl","src/utils/collisions":"htGfV","src/entities/circle":"cgXa9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOnEl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shape2d", ()=>Shape2d);
class Shape2d {
    constructor(x, y, velocity){
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.health = 3;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htGfV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkCirclesCollision", ()=>checkCirclesCollision);
parcelHelpers.export(exports, "AABBOverlap", ()=>AABBOverlap);
parcelHelpers.export(exports, "doPolygonsCollide", ()=>doPolygonsCollide);
parcelHelpers.export(exports, "doCirclePolygonCollide", ()=>doCirclePolygonCollide);
var _linal = require("src/utils/linal");
const AABBOverlap = (a, b)=>{
    const d1x = b.left - a.right;
    const d1y = b.top - a.bottom;
    const d2x = a.left - b.right;
    const d2y = a.top - b.bottom;
    if (d1x > 0.0 || d1y > 0.0) return false;
    if (d2x > 0.0 || d2y > 0.0) return false;
    return true;
};
const checkCirclesCollision = (first, second)=>{
    const centersDistSqr = Math.pow(first.center.x - second.center.x, 2) + Math.pow(first.center.y - second.center.y, 2);
    const radiusSumSqr = Math.pow(first.radius + second.radius, 2);
    return centersDistSqr <= radiusSumSqr;
};
const getAxes = (poly)=>{
    const points = poly.points;
    return points.map((p1, idx)=>{
        const p2 = points[(idx + 1) % points.length];
        if (!p2) throw new Error(`Error calculating normals to poly: ${points}`);
        const edge = (0, _linal.sub)(p2, p1);
        return (0, _linal.getNormalToVec)(edge);
    });
};
const projectPoints = (points, axis)=>{
    let min = Number.MAX_VALUE;
    let max = -Number.MAX_VALUE;
    points.forEach((p)=>{
        const projected = (0, _linal.dot)(p, axis);
        if (projected < min) min = projected;
        if (projected > max) max = projected;
    });
    return {
        min,
        max
    };
};
const projectPolygon = (axis, poly)=>projectPoints(poly.points, axis);
const overlap = (interval1, interval2)=>interval1.min <= interval2.max && interval1.max >= interval2.min;
const doPolygonsCollide = (first, second)=>{
    const axes = getAxes(first).concat(getAxes(second));
    for (const axis of axes){
        const projection1 = projectPolygon(axis, first);
        const projection2 = projectPolygon(axis, second);
        if (!overlap(projection1, projection2)) return false;
    }
    return true;
};
const findClosestPointOnPolygon = (circleCenter, points)=>{
    let result = -1;
    let minDistance = Number.MAX_VALUE;
    points.forEach((p, idx)=>{
        const distance = (0, _linal.pointsDistance)(p, circleCenter);
        if (distance < minDistance) {
            minDistance = distance;
            result = idx;
        }
    });
    return result;
};
const projectCircle = (center, radius, axis)=>{
    const direction = (0, _linal.normalize)(axis);
    const directionAndRadius = (0, _linal.mult)(direction, radius);
    const p1 = (0, _linal.add)(center, directionAndRadius);
    const p2 = (0, _linal.sub)(center, directionAndRadius);
    let min = (0, _linal.dot)(p1, axis);
    let max = (0, _linal.dot)(p2, axis);
    if (min > max) [min, max] = [
        max,
        min
    ];
    return {
        min,
        max
    };
};
const doCirclePolygonCollide = (circle, polygon)=>{
    const circleCenter = circle.center;
    const circleRadius = circle.radius;
    const points = polygon.points;
    let axis = {
        x: 0,
        y: 0
    };
    for(let i = 0; i < points.length; i++){
        const va = points[i];
        const vb = points[(i + 1) % points.length];
        const edge = (0, _linal.sub)(vb, va);
        axis = (0, _linal.getNormalToVec)(edge);
        const { min: minA, max: maxA } = projectPoints(points, axis);
        const { min: minB, max: maxB } = projectCircle(circleCenter, circleRadius, axis);
        if (minA >= maxB || minB >= maxA) return false;
    }
    const closestPointIdx = findClosestPointOnPolygon(circleCenter, points);
    const closestPoint = points[closestPointIdx];
    axis = (0, _linal.sub)(closestPoint, circleCenter);
    axis = (0, _linal.normalize)(axis);
    const { min: minA, max: maxA } = projectPoints(points, axis);
    const { min: minB, max: maxB } = projectCircle(circleCenter, circleRadius, axis);
    return !(minA >= maxB || minB >= maxA);
};

},{"src/utils/linal":"cJHD7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJHD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "arMean", ()=>arMean);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "pointsDistance", ()=>pointsDistance);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "mult", ()=>mult);
parcelHelpers.export(exports, "getNormalToVec", ()=>getNormalToVec);
const sub = (v1, v2)=>({
        x: v1.x - v2.x,
        y: v1.y - v2.y
    });
const add = (v1, v2)=>({
        x: v1.x + v2.x,
        y: v1.y + v2.y
    });
const normalize = (v)=>{
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.x / length,
        y: v.y / length
    };
};
const getNormalToVec = (vec)=>{
    const normal = {
        x: -vec.y,
        y: vec.x
    };
    return normalize(normal);
};
const mult = (v, k)=>{
    return {
        x: v.x * k,
        y: v.y * k
    };
};
const dot = (v1, v2)=>v1.x * v2.x + v1.y * v2.y;
const pointsDistance = (v1, v2)=>{
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    return Math.sqrt(dx * dx + dy * dy);
};
const arMean = (points)=>{
    const total = points.reduce((acc, cur)=>{
        acc.x += cur.x;
        acc.y += cur.y;
        return acc;
    }, {
        x: 0,
        y: 0
    });
    return {
        x: total.x / points.length,
        y: total.y / points.length
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgXa9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle);
var _shape2D = require("src/entities/shape2d");
var _collisions = require("src/utils/collisions");
class Circle extends (0, _shape2D.Shape2d) {
    constructor(x, y, radius, velocity){
        super(x, y, velocity);
        this.radius = radius;
    }
    get center() {
        return {
            x: this.x,
            y: this.y
        };
    }
    get left() {
        return this.x - this.radius;
    }
    get right() {
        return this.x + this.radius;
    }
    get top() {
        return this.y - this.radius;
    }
    get bottom() {
        return this.y + this.radius;
    }
    contains(p) {
        return Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2) <= Math.pow(this.radius, 2);
    }
    get boundingBox() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
        };
    }
    intersects(shape) {
        if (shape instanceof Circle) return (0, _collisions.checkCirclesCollision)(this, shape);
        return (0, _collisions.doCirclePolygonCollide)(this, shape);
    }
}

},{"src/entities/shape2d":"kOnEl","src/utils/collisions":"htGfV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RB0s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TriangleEquilateral", ()=>TriangleEquilateral);
var _regularPolygon = require("src/entities/regular-polygon");
var _circle = require("src/entities/circle");
var _collisions = require("src/utils/collisions");
class TriangleEquilateral extends (0, _regularPolygon.RegularPolygon) {
    get height() {
        return Math.sqrt(3) / 2 * this.side;
    }
    get left() {
        return this.x - this.side / 2;
    }
    get right() {
        return this.x + this.side / 2;
    }
    get top() {
        return this.y - 2 * this.height / 3;
    }
    get bottom() {
        return this.y + this.height / 3;
    }
    get points() {
        return [
            {
                x: this.left,
                y: this.bottom
            },
            {
                x: (this.left + this.right) / 2,
                y: this.top
            },
            {
                x: this.right,
                y: this.bottom
            }
        ];
    }
    contains() {
        return false;
    }
    get boundingBox() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
        };
    }
    intersects(shape) {
        const mightBeColliding = (0, _collisions.AABBOverlap)(this.boundingBox, shape);
        if (!mightBeColliding) return false;
        if (shape instanceof (0, _circle.Circle)) return (0, _collisions.doCirclePolygonCollide)(shape, this);
        return (0, _collisions.doPolygonsCollide)(this, shape);
    }
}

},{"src/entities/regular-polygon":"eLRvh","src/entities/circle":"cgXa9","src/utils/collisions":"htGfV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLRvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegularPolygon", ()=>RegularPolygon);
var _shape2D = require("src/entities/shape2d");
class RegularPolygon extends (0, _shape2D.Shape2d) {
    constructor(x, y, side, velocity){
        super(x, y, velocity);
        this.side = side;
        this.velocity = velocity;
    }
    get center() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

},{"src/entities/shape2d":"kOnEl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggAuR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hexagon", ()=>Hexagon);
var _regularPolygon = require("src/entities/regular-polygon");
var _circle = require("src/entities/circle");
var _collisions = require("src/utils/collisions");
const angleDeg = 60; // Angle between each side of the hexagon
class Hexagon extends (0, _regularPolygon.RegularPolygon) {
    get height() {
        return 2 * (Math.sqrt(3) / 2) * this.side;
    }
    get left() {
        return this.x - this.side;
    }
    get right() {
        return this.x + this.side;
    }
    get top() {
        return this.y - this.height / 2;
    }
    get bottom() {
        return this.y + this.height / 2;
    }
    get points() {
        return Array.from({
            length: 6
        }, (_, i)=>{
            const angleRad = Math.PI / 180 * (angleDeg * i);
            const x = this.x + this.side * Math.cos(angleRad);
            const y = this.y + this.side * Math.sin(angleRad);
            return {
                x,
                y
            };
        });
    }
    contains() {
        return false;
    }
    get boundingBox() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
        };
    }
    intersects(shape) {
        const mightBeColliding = (0, _collisions.AABBOverlap)(this.boundingBox, shape);
        if (!mightBeColliding) return false;
        if (shape instanceof (0, _circle.Circle)) return (0, _collisions.doCirclePolygonCollide)(shape, this);
        return (0, _collisions.doPolygonsCollide)(this, shape);
    }
}

},{"src/entities/regular-polygon":"eLRvh","src/entities/circle":"cgXa9","src/utils/collisions":"htGfV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PwC6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawRectangle", ()=>drawRectangle);
parcelHelpers.export(exports, "drawCircle", ()=>drawCircle);
parcelHelpers.export(exports, "drawHexagon", ()=>drawHexagon);
parcelHelpers.export(exports, "drawEquilateralTriangle", ()=>drawEquilateralTriangle);
const defaultColor = "#000000";
const healthToColorMap = {
    3: "#478665",
    2: "#d7c072",
    1: "#c94954"
};
const drawRectangle = (context, shape)=>{
    context.beginPath();
    context.rect(shape.x, shape.y, shape.w, shape.h);
    context.fillStyle = healthToColorMap[shape.health] || defaultColor;
    context.fill();
};
const drawCircle = (context, shape)=>{
    context.beginPath();
    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
    context.fillStyle = healthToColorMap[shape.health] || defaultColor;
    context.fill();
};
const drawEquilateralTriangle = (context, shape)=>{
    context.beginPath();
    context.moveTo(shape.left, shape.bottom);
    context.lineTo(shape.right, shape.bottom);
    context.lineTo(shape.x, shape.top);
    context.closePath();
    context.fillStyle = healthToColorMap[shape.health] || defaultColor;
    context.fill();
};
const drawHexagon = (context, shape)=>{
    shape.points.forEach((p, idx, arr)=>{
        if (idx === 0) {
            context.beginPath();
            context.moveTo(p.x, p.y);
            return;
        }
        context.lineTo(p.x, p.y);
        if (idx === arr.length - 1) context.closePath();
    });
    context.fillStyle = healthToColorMap[shape.health] || defaultColor;
    context.fill();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4NrR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSimulationState", ()=>useSimulationState);
var _shapeFactories = require("src/utils/shape-factories");
var _utils = require("src/utils");
const nSamples = 70;
// help me p[l;ease
const useSimulationState = (field)=>{
    const buildRandomShapes = ()=>{
        const rectangles = (0, _utils.genNSamples)(nSamples, ()=>(0, _shapeFactories.makeRectangle)(field));
        const circles = (0, _utils.genNSamples)(nSamples, ()=>(0, _shapeFactories.makeCircle)(field));
        const triangles = (0, _utils.genNSamples)(nSamples, ()=>(0, _shapeFactories.makeTriangle)(field));
        const hexagons = (0, _utils.genNSamples)(nSamples, ()=>(0, _shapeFactories.makeHexagon)(field));
        return [
            rectangles,
            circles,
            triangles,
            hexagons
        ].flat();
    };
    const simulationState = {
        shapes: [],
        lastTick: 0,
        lastRender: 0,
        tickLength: 15,
        stopCycle: 0
    };
    const setupSimulationState = ()=>{
        simulationState.lastTick = performance.now();
        simulationState.lastRender = simulationState.lastTick;
        simulationState.tickLength = 15; //ms
        simulationState.shapes = buildRandomShapes();
    };
    const hasReachedBorders = (shape)=>{
        const { width, height } = field();
        return shape.left <= 0 || shape.right >= width || shape.top <= 0 || shape.bottom >= height;
    };
    const killShapes = false;
    const update = ()=>{
        const shapesToDelete = new Set();
        const beenHitBy = new Map();
        simulationState.shapes.forEach((shape)=>{
            simulationState.shapes.forEach((otherShape)=>{
                if (shapesToDelete.has(otherShape)) return;
                if (shape === otherShape) return;
                if (!shape.intersects(otherShape)) return;
                shape.velocity = (0, _utils.negate)(shape.velocity);
                otherShape.velocity = (0, _utils.negate)(otherShape.velocity);
                if (beenHitBy.get(shape) === otherShape || beenHitBy.get(otherShape) === shape) return;
                beenHitBy.set(shape, otherShape);
                beenHitBy.set(otherShape, shape);
                if (!killShapes) return;
                if (shape.health >= 1) {
                    shape.health -= 1;
                    if (shape.health < 1) shapesToDelete.add(shape);
                }
                if (otherShape.health >= 1) {
                    otherShape.health -= 1;
                    if (otherShape.health < 1) shapesToDelete.add(otherShape);
                }
            });
            if (shapesToDelete.has(shape)) return;
            if (hasReachedBorders(shape)) shape.velocity = (0, _utils.negate)(shape.velocity);
            shape.x += shape.velocity.x;
            shape.y += shape.velocity.y;
        });
        if (!killShapes) return;
        simulationState.shapes = simulationState.shapes.filter((shape)=>!shapesToDelete.has(shape));
    };
    const runQueueUpdates = (numTicks)=>{
        for(let i = 0; i < numTicks; i++){
            simulationState.lastTick = simulationState.lastTick + simulationState.tickLength;
            update();
        }
    };
    return {
        simulationState,
        setupSimulationState,
        runQueueUpdates
    };
};

},{"src/utils/shape-factories":"639eS","src/utils":"6Mk9B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"639eS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeRectangle", ()=>makeRectangle);
parcelHelpers.export(exports, "makeCircle", ()=>makeCircle);
parcelHelpers.export(exports, "makeTriangle", ()=>makeTriangle);
parcelHelpers.export(exports, "makeHexagon", ()=>makeHexagon);
var _rectangle = require("src/entities/rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _circle = require("src/entities/circle");
var _triangleEquilateral = require("src/entities/triangle-equilateral");
var _hexagon = require("src/entities/hexagon");
var _index = require("src/utils/index");
const minSide = 10;
const maxSide = 20;
const minR = minSide / 2;
const maxR = maxSide / 2;
const genRandomVelocity = ()=>({
        x: (0, _index.getFromInterval)(-2, 2),
        y: (0, _index.getFromInterval)(-2, 2)
    });
const makeRectangle = (field)=>{
    const { width: fieldWidth, height: fieldHeight } = field();
    const rw = (0, _index.getFromInterval)(minSide, maxSide);
    const rh = (0, _index.getFromInterval)(minSide, maxSide);
    const x = (0, _index.getFromInterval)(0, fieldWidth - rw);
    const y = (0, _index.getFromInterval)(0, fieldHeight - rh);
    return new (0, _rectangleDefault.default)(x, y, rw, rh, genRandomVelocity());
};
const makeCircle = (field)=>{
    const { width: fieldWidth, height: fieldHeight } = field();
    const radius = (0, _index.getFromInterval)(minR, maxR);
    const x = (0, _index.getFromInterval)(radius, fieldWidth - radius);
    const y = (0, _index.getFromInterval)(radius, fieldHeight - radius);
    return new (0, _circle.Circle)(x, y, radius, genRandomVelocity());
};
const makeTriangle = (field)=>{
    const { width: fieldWidth, height: fieldHeight } = field();
    const side = (0, _index.getFromInterval)(minSide, maxSide);
    const x = (0, _index.getFromInterval)(0, fieldWidth);
    const y = (0, _index.getFromInterval)(0, fieldHeight);
    const shape = new (0, _triangleEquilateral.TriangleEquilateral)(x, y, side, genRandomVelocity());
    const halfSide = side / 2;
    shape.x = (0, _index.getFromInterval)(halfSide, fieldWidth - halfSide);
    shape.y = (0, _index.getFromInterval)(shape.height * 2 / 3, fieldHeight - shape.height / 3);
    return shape;
};
const makeHexagon = (field)=>{
    const { width: fieldWidth, height: fieldHeight } = field();
    const side = (0, _index.getFromInterval)(minR, maxR);
    const x = (0, _index.getFromInterval)(0, fieldWidth);
    const y = (0, _index.getFromInterval)(0, fieldHeight);
    const shape = new (0, _hexagon.Hexagon)(x, y, side, genRandomVelocity());
    const halfHeight = shape.height / 2;
    shape.x = (0, _index.getFromInterval)(side, fieldWidth - side);
    shape.y = (0, _index.getFromInterval)(halfHeight, fieldHeight - halfHeight);
    return shape;
};

},{"src/entities/rectangle":"jePgU","src/entities/circle":"cgXa9","src/entities/triangle-equilateral":"2RB0s","src/entities/hexagon":"ggAuR","src/utils/index":"6Mk9B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Mk9B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clip", ()=>clip);
parcelHelpers.export(exports, "getFromInterval", ()=>getFromInterval);
parcelHelpers.export(exports, "genNSamples", ()=>genNSamples);
parcelHelpers.export(exports, "negate", ()=>negate);
const clip = (x, lower, upper)=>Math.max(Math.min(x, upper), lower);
const negate = (vec)=>({
        x: -vec.x,
        y: -vec.y
    });
const getFromInterval = (min, max)=>Math.random() * (max - min) + min;
const genNSamples = (n, factory)=>Array.from({
        length: n
    }, factory);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequire20db")

//# sourceMappingURL=index.b71e74eb.js.map
