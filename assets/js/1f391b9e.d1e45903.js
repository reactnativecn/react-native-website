exports.id = 66061;
exports.ids = [66061];
exports.modules = {

/***/ 99958:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": `tableOfContents_jeP5`,
	"docItemContainer": `docItemContainer_hgFs`
};


/***/ }),

/***/ 21021:
/***/ ((module) => {

// Exports
module.exports = {
	"admonition": `admonition_WCGJ`,
	"admonitionHeading": `admonitionHeading_GCBg`,
	"admonitionIcon": `admonitionIcon_L39b`,
	"admonitionContent": `admonitionContent_pbrs`
};


/***/ }),

/***/ 26180:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_mQmQ`
};


/***/ }),

/***/ 32266:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_D5yF`,
	"codeBlockTitle": `codeBlockTitle_x_ju`,
	"codeBlock": `codeBlock_RMoD`,
	"codeBlockStandalone": `codeBlockStandalone_wQog`,
	"codeBlockLines": `codeBlockLines_AclH`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_O625`,
	"buttonGroup": `buttonGroup_aaMX`
};


/***/ }),

/***/ 82176:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_TYdd`,
	"copyButtonIcons": `copyButtonIcons_z5j7`,
	"copyButtonIcon": `copyButtonIcon_FoOz`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_L0B6`
};


/***/ }),

/***/ 54005:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": `codeLine_FAqz`,
	"codeLineNumber": `codeLineNumber_BE9Z`,
	"codeLineContent": `codeLineContent_EF2y`
};


/***/ }),

/***/ 42467:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_HV9T`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_XzR1`
};


/***/ }),

/***/ 47168:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_jERq`
};


/***/ }),

/***/ 18887:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": `lastUpdated_ydrU`
};


/***/ }),

/***/ 14496:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": `iconEdit_bHB7`
};


/***/ }),

/***/ 67183:
/***/ ((module) => {

// Exports
module.exports = {
	"img": `img_SS3x`
};


/***/ }),

/***/ 93273:
/***/ ((module) => {

// Exports
module.exports = {
	"containsTaskList": `containsTaskList_QWGu`
};


/***/ }),

/***/ 91554:
/***/ ((module) => {

// Exports
module.exports = {
	"mdxPageWrapper": `mdxPageWrapper_sagS`
};


/***/ }),

/***/ 14472:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_IpIu`,
	"isBrowser": `isBrowser_QD4r`,
	"collapsibleContent": `collapsibleContent_Fd2D`
};


/***/ }),

/***/ 22047:
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
var Code_exports = {};
__export(Code_exports, {
  default: () => MDXCode
});
module.exports = __toCommonJS(Code_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_CodeBlock = __toESM(__webpack_require__(76715));
var import_InlineCode = __toESM(__webpack_require__(42126));
function MDXCode(props) {
  const shouldBeInline = import_react.default.Children.toArray(props.children).every(
    (el) => typeof el === "string" && !el.includes("\n")
  );
  return shouldBeInline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_InlineCode.default, { ...props }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CodeBlock.default, { ...props });
}


/***/ }),

/***/ 42126:
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
var InlineCode_exports = {};
__export(InlineCode_exports, {
  default: () => InlineCode
});
module.exports = __toCommonJS(InlineCode_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_Link = __toESM(__webpack_require__(47271));
const MarkdownInlineCodePrefix = "md ";
function InlineCode(props) {
  if (typeof props.children === "string" && props.children.startsWith(MarkdownInlineCodePrefix)) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      MarkdownInlineCode,
      {
        ...props,
        children: props.children.slice(MarkdownInlineCodePrefix.length)
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { ...props });
}
const MarkdownInlineCode = import_react.default.memo(function MarkdownInlineCodeInner(props) {
  const children = linkify(props.children);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { ...props, children });
});
function linkify(input) {
  const linkRegExp = /(?<link>\[(?<text>[^\]]+)?\]\((?<url>[^)]+)\))/g;
  const linkSplitRegExp = /\[[^\]]+?\]\([^)]+\)/g;
  const links = [];
  let match;
  while ((match = linkRegExp.exec(input)) !== null) {
    const link = match.groups.link;
    const text = match.groups.text;
    const url = match.groups.url;
    if (url.endsWith(".md") || url.endsWith(".mdx")) {
      throw new Error(
        "Markdown links inside code blocks can't link using a filename extensions. Problematic link: " + link
      );
    }
    links.push({ link, text, url });
  }
  return input.split(linkSplitRegExp).map((text, i) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [
      text,
      links[i] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Link.default, { to: links[i].url, children: links[i].text }) : null
    ] }, i);
  });
}


/***/ }),

/***/ 48665:
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
var TOC_exports = {};
__export(TOC_exports, {
  default: () => TOC
});
module.exports = __toCommonJS(TOC_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_TOCItems = __toESM(__webpack_require__(82513));
var import_styles_module = __toESM(__webpack_require__(99958));
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
function TOC({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)(import_styles_module.default.tableOfContents, "thin-scrollbar", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_TOCItems.default,
      {
        ...props,
        linkClassName: LINK_CLASS_NAME,
        linkActiveClassName: LINK_ACTIVE_CLASS_NAME
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "wwads-cn wwads-vertical",
        "data-id": "58",
        style: { maxWidth: 227, marginTop: 20 }
      }
    )
  ] });
}


/***/ }),

/***/ 61679:
/***/ ((module) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Noop_exports = {};
__export(Noop_exports, {
  default: () => Noop_default
});
module.exports = __toCommonJS(Noop_exports);
var Noop_default = () => null;


/***/ }),

/***/ 99328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Danger_exports = {};
__export(Danger_exports, {
  default: () => AdmonitionIconDanger
});
module.exports = __toCommonJS(Danger_exports);
var import_jsx_runtime = __webpack_require__(62540);
function AdmonitionIconDanger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 12 16", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
    }
  ) });
}


/***/ }),

/***/ 51251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Info_exports = {};
__export(Info_exports, {
  default: () => AdmonitionIconInfo
});
module.exports = __toCommonJS(Info_exports);
var import_jsx_runtime = __webpack_require__(62540);
function AdmonitionIconInfo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 14 16", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
    }
  ) });
}


/***/ }),

/***/ 52427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Note_exports = {};
__export(Note_exports, {
  default: () => AdmonitionIconNote
});
module.exports = __toCommonJS(Note_exports);
var import_jsx_runtime = __webpack_require__(62540);
function AdmonitionIconNote(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 14 16", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
    }
  ) });
}


/***/ }),

/***/ 54326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Tip_exports = {};
__export(Tip_exports, {
  default: () => AdmonitionIconTip
});
module.exports = __toCommonJS(Tip_exports);
var import_jsx_runtime = __webpack_require__(62540);
function AdmonitionIconTip(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 12 16", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
    }
  ) });
}


/***/ }),

/***/ 51667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Warning_exports = {};
__export(Warning_exports, {
  default: () => AdmonitionIconCaution
});
module.exports = __toCommonJS(Warning_exports);
var import_jsx_runtime = __webpack_require__(62540);
function AdmonitionIconCaution(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
    }
  ) });
}


/***/ }),

/***/ 78100:
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
var Layout_exports = {};
__export(Layout_exports, {
  default: () => AdmonitionLayout
});
module.exports = __toCommonJS(Layout_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_styles_module = __toESM(__webpack_require__(21021));
function AdmonitionContainer({ type, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_clsx.default)(
        import_theme_common.ThemeClassNames.common.admonition,
        import_theme_common.ThemeClassNames.common.admonitionType(type),
        import_styles_module.default.admonition,
        className
      ),
      children
    }
  );
}
function AdmonitionHeading({ icon, title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_styles_module.default.admonitionHeading, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_styles_module.default.admonitionIcon, children: icon }),
    title
  ] });
}
function AdmonitionContent({ children }) {
  return children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_styles_module.default.admonitionContent, children }) : null;
}
function AdmonitionLayout(props) {
  const { type, icon, title, children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdmonitionContainer, { type, className, children: [
    title || icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmonitionHeading, { title, icon }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmonitionContent, { children })
  ] });
}


/***/ }),

/***/ 9831:
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
var Caution_exports = {};
__export(Caution_exports, {
  default: () => AdmonitionTypeCaution
});
module.exports = __toCommonJS(Caution_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Warning = __toESM(__webpack_require__(51667));
const infimaClassName = "alert alert--warning";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Warning.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.caution",
      description: "The default label used for the Caution admonition (:::caution)",
      children: "caution"
    }
  )
};
function AdmonitionTypeCaution(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 56611:
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
var Danger_exports = {};
__export(Danger_exports, {
  default: () => AdmonitionTypeDanger
});
module.exports = __toCommonJS(Danger_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Danger = __toESM(__webpack_require__(99328));
const infimaClassName = "alert alert--danger";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Danger.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.danger",
      description: "The default label used for the Danger admonition (:::danger)",
      children: "danger"
    }
  )
};
function AdmonitionTypeDanger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 43960:
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
var Info_exports = {};
__export(Info_exports, {
  default: () => AdmonitionTypeInfo
});
module.exports = __toCommonJS(Info_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Info = __toESM(__webpack_require__(51251));
const infimaClassName = "alert alert--info";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Info.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.info",
      description: "The default label used for the Info admonition (:::info)",
      children: "info"
    }
  )
};
function AdmonitionTypeInfo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 90316:
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
var Note_exports = {};
__export(Note_exports, {
  default: () => AdmonitionTypeNote
});
module.exports = __toCommonJS(Note_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Note = __toESM(__webpack_require__(52427));
const infimaClassName = "alert alert--secondary";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Note.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.note",
      description: "The default label used for the Note admonition (:::note)",
      children: "note"
    }
  )
};
function AdmonitionTypeNote(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 79175:
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
var Tip_exports = {};
__export(Tip_exports, {
  default: () => AdmonitionTypeTip
});
module.exports = __toCommonJS(Tip_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Tip = __toESM(__webpack_require__(54326));
const infimaClassName = "alert alert--success";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tip.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.tip",
      description: "The default label used for the Tip admonition (:::tip)",
      children: "tip"
    }
  )
};
function AdmonitionTypeTip(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 20922:
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
var Warning_exports = {};
__export(Warning_exports, {
  default: () => AdmonitionTypeWarning
});
module.exports = __toCommonJS(Warning_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __toESM(__webpack_require__(37353));
var import_Layout = __toESM(__webpack_require__(78100));
var import_Warning = __toESM(__webpack_require__(51667));
const infimaClassName = "alert alert--warning";
const defaultProps = {
  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Warning.default, {}),
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.admonition.warning",
      description: "The default label used for the Warning admonition (:::warning)",
      children: "warning"
    }
  )
};
function AdmonitionTypeWarning(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      ...defaultProps,
      ...props,
      className: (0, import_clsx.default)(infimaClassName, props.className),
      children: props.children
    }
  );
}


/***/ }),

/***/ 45304:
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
var Types_exports = {};
__export(Types_exports, {
  default: () => Types_default
});
module.exports = __toCommonJS(Types_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Note = __toESM(__webpack_require__(90316));
var import_Tip = __toESM(__webpack_require__(79175));
var import_Info = __toESM(__webpack_require__(43960));
var import_Warning = __toESM(__webpack_require__(20922));
var import_Danger = __toESM(__webpack_require__(56611));
var import_Caution = __toESM(__webpack_require__(9831));
const admonitionTypes = {
  note: import_Note.default,
  tip: import_Tip.default,
  info: import_Info.default,
  warning: import_Warning.default,
  danger: import_Danger.default
};
const admonitionAliases = {
  secondary: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Note.default, { title: "secondary", ...props }),
  important: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Info.default, { title: "important", ...props }),
  success: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tip.default, { title: "success", ...props }),
  caution: import_Caution.default
};
var Types_default = {
  ...admonitionTypes,
  ...admonitionAliases
};


/***/ }),

/***/ 9897:
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
var Admonition_exports = {};
__export(Admonition_exports, {
  default: () => Admonition
});
module.exports = __toCommonJS(Admonition_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_theme_common = __webpack_require__(73);
var import_Types = __toESM(__webpack_require__(45304));
function getAdmonitionTypeComponent(type) {
  const component = import_Types.default[type];
  if (component) {
    return component;
  }
  console.warn(
    `No admonition component found for admonition type "${type}". Using Info as fallback.`
  );
  return import_Types.default.info;
}
function Admonition(unprocessedProps) {
  const props = (0, import_theme_common.processAdmonitionProps)(unprocessedProps);
  const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmonitionTypeComponent, { ...props });
}


/***/ }),

/***/ 60979:
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
var Container_exports = {};
__export(Container_exports, {
  default: () => CodeBlockContainer
});
module.exports = __toCommonJS(Container_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
var import_styles_module = __toESM(__webpack_require__(26180));
function CodeBlockContainer({ as: As, ...props }) {
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const prismCssVariables = (0, import_internal.getPrismCssVariables)(prismTheme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    As,
    {
      ...props,
      style: prismCssVariables,
      className: (0, import_clsx.default)(
        props.className,
        import_styles_module.default.codeBlockContainer,
        import_theme_common.ThemeClassNames.common.codeBlock
      )
    }
  );
}


/***/ }),

/***/ 33169:
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
var Element_exports = {};
__export(Element_exports, {
  default: () => CodeBlockJSX
});
module.exports = __toCommonJS(Element_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Container = __toESM(__webpack_require__(60979));
var import_styles_module = __toESM(__webpack_require__(32266));
function CodeBlockJSX({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Container.default,
    {
      as: "pre",
      tabIndex: 0,
      className: (0, import_clsx.default)(import_styles_module.default.codeBlockStandalone, "thin-scrollbar", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { className: import_styles_module.default.codeBlockLines, children })
    }
  );
}


/***/ }),

/***/ 71108:
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
var String_exports = {};
__export(String_exports, {
  default: () => CodeBlockString
});
module.exports = __toCommonJS(String_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
var import_prism_react_renderer = __webpack_require__(74003);
var import_Line = __toESM(__webpack_require__(97350));
var import_CopyButton = __toESM(__webpack_require__(49817));
var import_WordWrapButton = __toESM(__webpack_require__(41000));
var import_Container = __toESM(__webpack_require__(60979));
var import_styles_module = __toESM(__webpack_require__(32266));
function normalizeLanguage(language) {
  return language == null ? void 0 : language.toLowerCase();
}
function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp
}) {
  const {
    prism: { defaultLanguage, magicComments }
  } = (0, import_theme_common.useThemeConfig)();
  const language = normalizeLanguage(
    languageProp ?? (0, import_internal.parseLanguage)(blockClassName) ?? defaultLanguage
  );
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const wordWrap = (0, import_internal.useCodeWordWrap)();
  const title = (0, import_internal.parseCodeBlockTitle)(metastring) || titleProp;
  const { lineClassNames, code } = (0, import_internal.parseLines)(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp ?? (0, import_internal.containsLineNumbers)(metastring);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_Container.default,
    {
      as: "div",
      className: (0, import_clsx.default)(
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`
      ),
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_styles_module.default.codeBlockTitle, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_styles_module.default.codeBlockContent, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_prism_react_renderer.Highlight, { theme: prismTheme, code, language: language ?? "text", children: ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "pre",
            {
              tabIndex: 0,
              ref: wordWrap.codeBlockRef,
              className: (0, import_clsx.default)(className, import_styles_module.default.codeBlock, "thin-scrollbar"),
              style,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "code",
                {
                  className: (0, import_clsx.default)(
                    import_styles_module.default.codeBlockLines,
                    showLineNumbers && import_styles_module.default.codeBlockLinesWithNumbering
                  ),
                  children: tokens.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_Line.default,
                    {
                      line,
                      getLineProps,
                      getTokenProps,
                      classNames: lineClassNames[i],
                      showLineNumbers
                    },
                    i
                  ))
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_styles_module.default.buttonGroup, children: [
            (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_WordWrapButton.default,
              {
                className: import_styles_module.default.codeButton,
                onClick: () => wordWrap.toggle(),
                isEnabled: wordWrap.isEnabled
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CopyButton.default, { className: import_styles_module.default.codeButton, code })
          ] })
        ] })
      ]
    }
  );
}


/***/ }),

/***/ 49817:
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
var CopyButton_exports = {};
__export(CopyButton_exports, {
  default: () => CopyButton
});
module.exports = __toCommonJS(CopyButton_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __webpack_require__(63696);
var import_clsx = __toESM(__webpack_require__(78784));
var import_copy_text_to_clipboard = __toESM(__webpack_require__(88406));
var import_Translate = __webpack_require__(37353);
var import_Copy = __toESM(__webpack_require__(70314));
var import_Success = __toESM(__webpack_require__(63718));
var import_styles_module = __toESM(__webpack_require__(82176));
function CopyButton({ code, className }) {
  const [isCopied, setIsCopied] = (0, import_react.useState)(false);
  const copyTimeout = (0, import_react.useRef)(void 0);
  const handleCopyCode = (0, import_react.useCallback)(() => {
    (0, import_copy_text_to_clipboard.default)(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  (0, import_react.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      "aria-label": isCopied ? (0, import_Translate.translate)({
        id: "theme.CodeBlock.copied",
        message: "Copied",
        description: "The copied button label on code blocks"
      }) : (0, import_Translate.translate)({
        id: "theme.CodeBlock.copyButtonAriaLabel",
        message: "Copy code to clipboard",
        description: "The ARIA label for copy code blocks button"
      }),
      title: (0, import_Translate.translate)({
        id: "theme.CodeBlock.copy",
        message: "Copy",
        description: "The copy button label on code blocks"
      }),
      className: (0, import_clsx.default)(
        "clean-btn",
        className,
        import_styles_module.default.copyButton,
        isCopied && import_styles_module.default.copyButtonCopied
      ),
      onClick: handleCopyCode,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: import_styles_module.default.copyButtonIcons, "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Copy.default, { className: import_styles_module.default.copyButtonIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Success.default, { className: import_styles_module.default.copyButtonSuccessIcon })
      ] })
    }
  );
}


/***/ }),

/***/ 97350:
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
var Line_exports = {};
__export(Line_exports, {
  default: () => CodeBlockLine
});
module.exports = __toCommonJS(Line_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(54005));
function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: (0, import_clsx.default)(classNames, showLineNumbers && import_styles_module.default.codeLine)
  });
  const lineTokens = line.map((token, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ...getTokenProps({ token }) }, key));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { ...lineProps, children: [
    showLineNumbers ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_styles_module.default.codeLineNumber }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_styles_module.default.codeLineContent, children: lineTokens })
    ] }) : lineTokens,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
  ] });
}


/***/ }),

/***/ 41000:
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
var WordWrapButton_exports = {};
__export(WordWrapButton_exports, {
  default: () => WordWrapButton
});
module.exports = __toCommonJS(WordWrapButton_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __webpack_require__(37353);
var import_WordWrap = __toESM(__webpack_require__(50831));
var import_styles_module = __toESM(__webpack_require__(42467));
function WordWrapButton({ className, onClick, isEnabled }) {
  const title = (0, import_Translate.translate)({
    id: "theme.CodeBlock.wordWrapToggle",
    message: "Toggle word wrap",
    description: "The title attribute for toggle word wrapping button of code block lines"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      onClick,
      className: (0, import_clsx.default)(
        "clean-btn",
        className,
        isEnabled && import_styles_module.default.wordWrapButtonEnabled
      ),
      "aria-label": title,
      title,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_WordWrap.default, { className: import_styles_module.default.wordWrapButtonIcon, "aria-hidden": "true" })
    }
  );
}


/***/ }),

/***/ 76715:
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
var CodeBlock_exports = {};
__export(CodeBlock_exports, {
  default: () => CodeBlock
});
module.exports = __toCommonJS(CodeBlock_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_useIsBrowser = __toESM(__webpack_require__(64062));
var import_Element = __toESM(__webpack_require__(33169));
var import_String = __toESM(__webpack_require__(71108));
function maybeStringifyChildren(children) {
  if (import_react.default.Children.toArray(children).some((el) => (0, import_react.isValidElement)(el))) {
    return children;
  }
  return Array.isArray(children) ? children.join("") : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
  const isBrowser = (0, import_useIsBrowser.default)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === "string" ? import_String.default : import_Element.default;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlockComp, { ...props, children }, String(isBrowser));
}


/***/ }),

/***/ 35076:
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
var Draft_exports = {};
__export(Draft_exports, {
  default: () => Draft
});
module.exports = __toCommonJS(Draft_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_Admonition = __toESM(__webpack_require__(9897));
function Draft({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Admonition.default,
    {
      type: "caution",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.DraftBannerTitle, {}),
      className: (0, import_clsx.default)(className, import_theme_common.ThemeClassNames.common.draftBanner),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.DraftBannerMessage, {})
    }
  );
}


/***/ }),

/***/ 3971:
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
var Unlisted_exports = {};
__export(Unlisted_exports, {
  default: () => Unlisted
});
module.exports = __toCommonJS(Unlisted_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_Admonition = __toESM(__webpack_require__(9897));
function UnlistedBanner({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Admonition.default,
    {
      type: "caution",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.UnlistedBannerTitle, {}),
      className: (0, import_clsx.default)(className, import_theme_common.ThemeClassNames.common.unlistedBanner),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.UnlistedBannerMessage, {})
    }
  );
}
function Unlisted(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_theme_common.UnlistedMetadata, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnlistedBanner, { ...props })
  ] });
}


/***/ }),

/***/ 7144:
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
var ContentVisibility_exports = {};
__export(ContentVisibility_exports, {
  default: () => ContentVisibility
});
module.exports = __toCommonJS(ContentVisibility_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Draft = __toESM(__webpack_require__(35076));
var import_Unlisted = __toESM(__webpack_require__(3971));
function ContentVisibility({ metadata }) {
  const { unlisted, frontMatter } = metadata;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (unlisted || frontMatter.unlisted) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Unlisted.default, {}),
    frontMatter.draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Draft.default, {})
  ] });
}


/***/ }),

/***/ 44863:
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
var Details_exports = {};
__export(Details_exports, {
  default: () => Details
});
module.exports = __toCommonJS(Details_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Details = __webpack_require__(70591);
var import_styles_module = __toESM(__webpack_require__(47168));
const InfimaClasses = "alert alert--info";
function Details({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Details.Details,
    {
      ...props,
      className: (0, import_clsx.default)(InfimaClasses, import_styles_module.default.details, props.className)
    }
  );
}


/***/ }),

/***/ 87554:
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
var EditMetaRow_exports = {};
__export(EditMetaRow_exports, {
  default: () => EditMetaRow
});
module.exports = __toCommonJS(EditMetaRow_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_EditThisPage = __toESM(__webpack_require__(37356));
var import_LastUpdated = __toESM(__webpack_require__(30326));
var import_styles_module = __toESM(__webpack_require__(18887));
function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)("row", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col", children: editUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_EditThisPage.default, { editUrl }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.default)("col", import_styles_module.default.lastUpdated), children: (lastUpdatedAt || lastUpdatedBy) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_LastUpdated.default,
      {
        lastUpdatedAt,
        lastUpdatedBy
      }
    ) })
  ] });
}


/***/ }),

/***/ 37356:
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
var EditThisPage_exports = {};
__export(EditThisPage_exports, {
  default: () => EditThisPage
});
module.exports = __toCommonJS(EditThisPage_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Translate = __toESM(__webpack_require__(37353));
var import_theme_common = __webpack_require__(73);
var import_Link = __toESM(__webpack_require__(47271));
var import_Edit = __toESM(__webpack_require__(25607));
function EditThisPage({ editUrl }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Link.default, { to: editUrl, className: import_theme_common.ThemeClassNames.common.editThisPage, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Edit.default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Translate.default,
      {
        id: "theme.common.editThisPage",
        description: "The link label to edit the current page",
        children: "Edit this page"
      }
    )
  ] });
}


/***/ }),

/***/ 70314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Copy_exports = {};
__export(Copy_exports, {
  default: () => IconCopy
});
module.exports = __toCommonJS(Copy_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconCopy(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
    }
  ) });
}


/***/ }),

/***/ 25607:
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
var Edit_exports = {};
__export(Edit_exports, {
  default: () => IconEdit
});
module.exports = __toCommonJS(Edit_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(14496));
function IconEdit({ className, ...restProps }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      fill: "currentColor",
      height: "20",
      width: "20",
      viewBox: "0 0 40 40",
      className: (0, import_clsx.default)(import_styles_module.default.iconEdit, className),
      "aria-hidden": "true",
      ...restProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" }) })
    }
  );
}


/***/ }),

/***/ 63718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Success_exports = {};
__export(Success_exports, {
  default: () => IconSuccess
});
module.exports = __toCommonJS(Success_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconSuccess(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    }
  ) });
}


/***/ }),

/***/ 50831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var WordWrap_exports = {};
__export(WordWrap_exports, {
  default: () => IconWordWrap
});
module.exports = __toCommonJS(WordWrap_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconWordWrap(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    }
  ) });
}


/***/ }),

/***/ 30326:
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
var LastUpdated_exports = {};
__export(LastUpdated_exports, {
  default: () => LastUpdated
});
module.exports = __toCommonJS(LastUpdated_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Translate = __toESM(__webpack_require__(37353));
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
function LastUpdatedAtDate({ lastUpdatedAt }) {
  const atDate = new Date(lastUpdatedAt);
  const dateTimeFormat = (0, import_internal.useDateTimeFormat)({
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });
  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.lastUpdated.atDate",
      description: "The words used to describe on which date a page has been last updated",
      values: {
        date: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { dateTime: atDate.toISOString(), itemProp: "dateModified", children: formattedLastUpdatedAt }) })
      },
      children: " on {date}"
    }
  );
}
function LastUpdatedByUser({ lastUpdatedBy }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Translate.default,
    {
      id: "theme.lastUpdated.byUser",
      description: "The words used to describe by who the page has been last updated",
      values: {
        user: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: lastUpdatedBy })
      },
      children: " by {user}"
    }
  );
}
function LastUpdated({ lastUpdatedAt, lastUpdatedBy }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: import_theme_common.ThemeClassNames.common.lastUpdated, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Translate.default,
      {
        id: "theme.lastUpdated.lastUpdatedAtBy",
        description: "The sentence used to display when a page has been last updated, and by who",
        values: {
          atDate: lastUpdatedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LastUpdatedAtDate, { lastUpdatedAt }) : "",
          byUser: lastUpdatedBy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LastUpdatedByUser, { lastUpdatedBy }) : ""
        },
        children: "Last updated{atDate}{byUser}"
      }
    ),
     false && /* @__PURE__ */ 0
  ] });
}


/***/ }),

/***/ 94421:
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
var A_exports = {};
__export(A_exports, {
  default: () => MDXA
});
module.exports = __toCommonJS(A_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Link = __toESM(__webpack_require__(47271));
function MDXA(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Link.default, { ...props });
}


/***/ }),

/***/ 83052:
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
var Details_exports = {};
__export(Details_exports, {
  default: () => MDXDetails
});
module.exports = __toCommonJS(Details_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_Details = __toESM(__webpack_require__(44863));
function MDXDetails(props) {
  const items = import_react.default.Children.toArray(props.children);
  const summary = items.find(
    (item) => import_react.default.isValidElement(item) && item.type === "summary"
  );
  const children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: items.filter((item) => item !== summary) });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Details.default, { ...props, summary, children });
}


/***/ }),

/***/ 45400:
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
var Heading_exports = {};
__export(Heading_exports, {
  default: () => MDXHeading
});
module.exports = __toCommonJS(Heading_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Heading = __toESM(__webpack_require__(84811));
function MDXHeading(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { ...props });
}


/***/ }),

/***/ 89610:
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
var Img_exports = {};
__export(Img_exports, {
  default: () => MDXImg
});
module.exports = __toCommonJS(Img_exports);
var import_jsx_runtime = (
  // eslint-disable-next-line jsx-a11y/alt-text
  __webpack_require__(62540)
);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(67183));
function transformImgClassName(className) {
  return (0, import_clsx.default)(className, import_styles_module.default.img);
}
function MDXImg(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      decoding: "async",
      loading: "lazy",
      ...props,
      className: transformImgClassName(props.className)
    }
  );
}


/***/ }),

/***/ 84151:
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
var Li_exports = {};
__export(Li_exports, {
  default: () => MDXLi
});
module.exports = __toCommonJS(Li_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_useBrokenLinks = __toESM(__webpack_require__(60256));
function MDXLi(props) {
  (0, import_useBrokenLinks.default)().collectAnchor(props.id);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { ...props });
}


/***/ }),

/***/ 40695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Pre_exports = {};
__export(Pre_exports, {
  default: () => MDXPre
});
module.exports = __toCommonJS(Pre_exports);
var import_jsx_runtime = __webpack_require__(62540);
function MDXPre(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: props.children });
}


/***/ }),

/***/ 8042:
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
var Ul_exports = {};
__export(Ul_exports, {
  default: () => MDXUl
});
module.exports = __toCommonJS(Ul_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(93273));
function transformUlClassName(className) {
  if (typeof className === "undefined") {
    return void 0;
  }
  return (0, import_clsx.default)(
    className,
    // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    (className == null ? void 0 : className.includes("contains-task-list")) && import_styles_module.default.containsTaskList
  );
}
function MDXUl(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { ...props, className: transformUlClassName(props.className) });
}


/***/ }),

/***/ 39462:
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
var MDXComponents_exports = {};
__export(MDXComponents_exports, {
  default: () => MDXComponents_default
});
module.exports = __toCommonJS(MDXComponents_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Head = __toESM(__webpack_require__(78637));
var import_Code = __toESM(__webpack_require__(22047));
var import_A = __toESM(__webpack_require__(94421));
var import_Pre = __toESM(__webpack_require__(40695));
var import_Details = __toESM(__webpack_require__(83052));
var import_Heading = __toESM(__webpack_require__(45400));
var import_Ul = __toESM(__webpack_require__(8042));
var import_Li = __toESM(__webpack_require__(84151));
var import_Img = __toESM(__webpack_require__(89610));
var import_Admonition = __toESM(__webpack_require__(9897));
var import_Mermaid = __toESM(__webpack_require__(97913));
const MDXComponents = {
  Head: import_Head.default,
  details: import_Details.default,
  // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: import_Details.default,
  code: import_Code.default,
  a: import_A.default,
  pre: import_Pre.default,
  ul: import_Ul.default,
  li: import_Li.default,
  img: import_Img.default,
  h1: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h1", ...props }),
  h2: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h2", ...props }),
  h3: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h3", ...props }),
  h4: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h4", ...props }),
  h5: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h5", ...props }),
  h6: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Heading.default, { as: "h6", ...props }),
  admonition: import_Admonition.default,
  mermaid: import_Mermaid.default
};
var MDXComponents_default = MDXComponents;


/***/ }),

/***/ 94435:
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
var MDXContent_exports = {};
__export(MDXContent_exports, {
  default: () => MDXContent
});
module.exports = __toCommonJS(MDXContent_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react2 = __webpack_require__(66607);
var import_MDXComponents = __toESM(__webpack_require__(39462));
function MDXContent({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.MDXProvider, { components: import_MDXComponents.default, children });
}


/***/ }),

/***/ 26733:
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
var MDXPage_exports = {};
__export(MDXPage_exports, {
  default: () => MDXPage
});
module.exports = __toCommonJS(MDXPage_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_Layout = __toESM(__webpack_require__(35449));
var import_MDXContent = __toESM(__webpack_require__(94435));
var import_TOC = __toESM(__webpack_require__(48665));
var import_ContentVisibility = __toESM(__webpack_require__(7144));
var import_EditMetaRow = __toESM(__webpack_require__(87554));
var import_styles_module = __toESM(__webpack_require__(91554));
function MDXPage(props) {
  const { content: MDXPageContent } = props;
  const { metadata, assets } = MDXPageContent;
  const {
    title,
    editUrl,
    description,
    frontMatter,
    lastUpdatedBy,
    lastUpdatedAt
  } = metadata;
  const {
    keywords,
    wrapperClassName,
    hide_table_of_contents: hideTableOfContents
  } = frontMatter;
  const image = assets.image ?? frontMatter.image;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_theme_common.HtmlClassNameProvider,
    {
      className: (0, import_clsx.default)(
        wrapperClassName ?? import_theme_common.ThemeClassNames.wrapper.mdxPages,
        import_theme_common.ThemeClassNames.page.mdxPage
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Layout.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_theme_common.PageMetadata,
          {
            title,
            description,
            keywords,
            image
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "container container--fluid margin-vert--lg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)("row", import_styles_module.default.mdxPageWrapper), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)("col", !hideTableOfContents && "col--8"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ContentVisibility.default, { metadata }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_MDXContent.default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDXPageContent, {}) }) }),
            canDisplayEditMetaRow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_EditMetaRow.default,
              {
                className: (0, import_clsx.default)(
                  "margin-top--sm",
                  import_theme_common.ThemeClassNames.pages.pageFooterEditMetaRow
                ),
                editUrl,
                lastUpdatedAt,
                lastUpdatedBy
              }
            )
          ] }),
          !hideTableOfContents && MDXPageContent.toc.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col col--2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_TOC.default,
            {
              toc: MDXPageContent.toc,
              minHeadingLevel: frontMatter.toc_min_heading_level,
              maxHeadingLevel: frontMatter.toc_max_heading_level
            }
          ) })
        ] }) })
      ] })
    }
  );
}


/***/ }),

/***/ 97913:
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
var Mermaid_exports = {};
__export(Mermaid_exports, {
  default: () => import_Noop.default
});
module.exports = __toCommonJS(Mermaid_exports);
var import_Noop = __toESM(__webpack_require__(61679));


/***/ }),

/***/ 55729:
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
var Tree_exports = {};
__export(Tree_exports, {
  default: () => Tree_default
});
module.exports = __toCommonJS(Tree_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_Link = __toESM(__webpack_require__(47271));
function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: isChild ? void 0 : className, children: toc.map((heading) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Link.default,
      {
        to: `#${heading.id}`,
        className: linkClassName ?? void 0,
        dangerouslySetInnerHTML: { __html: heading.value }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      TOCItemTree,
      {
        isChild: true,
        toc: heading.children,
        className,
        linkClassName
      }
    )
  ] }, heading.id)) });
}
var Tree_default = import_react.default.memo(TOCItemTree);


/***/ }),

/***/ 82513:
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
var TOCItems_exports = {};
__export(TOCItems_exports, {
  default: () => TOCItems
});
module.exports = __toCommonJS(TOCItems_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __webpack_require__(63696);
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
var import_Tree = __toESM(__webpack_require__(55729));
function TOCItems({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link",
  linkActiveClassName = void 0,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = (0, import_theme_common.useThemeConfig)();
  const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = (0, import_internal.useFilteredAndTreeifiedTOC)({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0, import_react.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return void 0;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  (0, import_internal.useTOCHighlight)(tocHighlightConfig);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Tree.default,
    {
      toc: tocTree,
      className,
      linkClassName,
      ...props
    }
  );
}


/***/ }),

/***/ 70591:
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
var Details_exports = {};
__export(Details_exports, {
  Details: () => Details
});
module.exports = __toCommonJS(Details_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_clsx = __toESM(__webpack_require__(78784));
var import_useBrokenLinks = __toESM(__webpack_require__(60256));
var import_useIsBrowser = __toESM(__webpack_require__(64062));
var import_Collapsible = __webpack_require__(82685);
var import_styles_module = __toESM(__webpack_require__(14472));
function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === "SUMMARY" || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}
function Details({ summary, children, ...props }) {
  (0, import_useBrokenLinks.default)().collectAnchor(props.id);
  const isBrowser = (0, import_useIsBrowser.default)();
  const detailsRef = (0, import_react.useRef)(null);
  const { collapsed, setCollapsed } = (0, import_Collapsible.useCollapsible)({
    initialState: !props.open
  });
  const [open, setOpen] = (0, import_react.useState)(props.open);
  const summaryElement = import_react.default.isValidElement(summary) ? summary : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: summary ?? "Details" });
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { ...props, ref: detailsRef, open, "data-collapsed": collapsed, className: (0, import_clsx.default)(import_styles_module.default.details, isBrowser && import_styles_module.default.isBrowser, props.className), onMouseDown: (e) => {
      const target = e.target;
      if (isInSummary(target) && e.detail > 1) {
        e.preventDefault();
      }
    }, onClick: (e) => {
      e.stopPropagation();
      const target = e.target;
      const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
      if (!shouldToggle) {
        return;
      }
      e.preventDefault();
      if (collapsed) {
        setCollapsed(false);
        setOpen(true);
      } else {
        setCollapsed(true);
      }
    }, children: [
      summaryElement,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_Collapsible.Collapsible,
        {
          lazy: false,
          collapsed,
          disableSSRStyle: true,
          onCollapseTransitionEnd: (newCollapsed) => {
            setCollapsed(newCollapsed);
            setOpen(!newCollapsed);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_styles_module.default.collapsibleContent, children })
        }
      )
    ] })
  );
}


/***/ }),

/***/ 66607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43023);



/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63696);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 88406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var copy_text_to_clipboard_exports = {};
__export(copy_text_to_clipboard_exports, {
  default: () => copyTextToClipboard
});
module.exports = __toCommonJS(copy_text_to_clipboard_exports);
function copyTextToClipboard(text, { target = document.body } = {}) {
  if (typeof text !== "string") {
    throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
  }
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = text;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = text.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {
  }
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}


/***/ })

};
;