exports.id = 67098;
exports.ids = [67098];
exports.modules = {

/***/ 47817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocVersionRoot_exports = {};
__export(DocVersionRoot_exports, {
  default: () => DocVersionRoot
});
module.exports = __toCommonJS(DocVersionRoot_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_theme_common = __webpack_require__(73);
var import_client = __webpack_require__(95877);
var import_renderRoutes = __toESM(__webpack_require__(90693));
var import_SearchMetadata = __toESM(__webpack_require__(92146));
function DocVersionRootMetadata(props) {
  const { version } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_SearchMetadata.default,
      {
        version: version.version,
        tag: (0, import_client.getDocsVersionSearchTag)(version.pluginId, version.version)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.PageMetadata, { children: version.noIndex && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) })
  ] });
}
function DocVersionRootContent(props) {
  const { version, route } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.HtmlClassNameProvider, { className: version.className, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_client.DocsVersionProvider, { version, children: (0, import_renderRoutes.default)(route.routes) }) });
}
function DocVersionRoot(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocVersionRootMetadata, { ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocVersionRootContent, { ...props })
  ] });
}


/***/ })

};
;