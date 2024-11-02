exports.id = 9647;
exports.ids = [9647];
exports.modules = {

/***/ 30591:
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
var DocsRoot_exports = {};
__export(DocsRoot_exports, {
  default: () => DocsRoot
});
module.exports = __toCommonJS(DocsRoot_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_renderRoutes = __toESM(__webpack_require__(90693));
var import_Layout = __toESM(__webpack_require__(35449));
function DocsRoot(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.HtmlClassNameProvider, { className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.wrapper.docsPages), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Layout.default, { children: (0, import_renderRoutes.default)(props.route.routes) }) });
}


/***/ })

};
;