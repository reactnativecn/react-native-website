exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 14366:
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
var Content_exports = {};
__export(Content_exports, {
  default: () => NotFoundContent
});
module.exports = __toCommonJS(Content_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Heading = __toESM(__webpack_require__(84811));
function NotFoundContent({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: (0, import_clsx.default)("container margin-vert--xl", className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "col col--6 col--offset-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h1", className: "hero__title", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Translate.default,
      {
        id: "theme.NotFound.title",
        description: "The title of the 404 page",
        children: "Page Not Found"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Translate.default,
      {
        id: "theme.NotFound.p1",
        description: "The first paragraph of the 404 page",
        children: "We could not find what you were looking for."
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Translate.default,
      {
        id: "theme.NotFound.p2",
        description: "The 2nd paragraph of the 404 page",
        children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
      }
    ) })
  ] }) }) });
}


/***/ }),

/***/ 440:
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
var NotFound_exports = {};
__export(NotFound_exports, {
  default: () => Index
});
module.exports = __toCommonJS(NotFound_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Translate = __webpack_require__(37353);
var import_theme_common = __webpack_require__(73);
var import_Layout = __toESM(__webpack_require__(35449));
var import_Content = __toESM(__webpack_require__(14366));
function Index() {
  const title = (0, import_Translate.translate)({
    id: "theme.NotFound.title",
    message: "Page Not Found"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.PageMetadata, { title }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Layout.default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Content.default, {}) })
  ] });
}


/***/ })

};
;