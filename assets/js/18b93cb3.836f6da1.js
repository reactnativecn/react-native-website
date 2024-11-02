exports.id = 34828;
exports.ids = [34828];
exports.modules = {

/***/ 90876:
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
var versions_exports = {};
__export(versions_exports, {
  default: () => versions_default
});
module.exports = __toCommonJS(versions_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_Layout = __toESM(__webpack_require__(35449));
var import_useBaseUrl = __toESM(__webpack_require__(93756));
const versions = __webpack_require__(6715);
const VersionItem = ({ version, currentVersion }) => {
  const versionName = version === "next" ? "Master" : version;
  const isCurrentVersion = currentVersion === version;
  const isNext = version === "next";
  const isRC = version.toUpperCase().indexOf("-RC") !== -1;
  const latestMajorVersion = versions[0].toUpperCase().replace("-RC", "");
  const documentationLink = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "a",
    {
      href: (0, import_useBaseUrl.default)(
        "docs/" + (isCurrentVersion ? "" : version + "/") + "getting-started"
      ),
      children: "\u6587\u6863"
    }
  );
  let releaseNotesURL = "https://github.com/facebook/react-native/releases";
  let releaseNotesTitle = "\u66F4\u65B0\u65E5\u5FD7\uFF08\u82F1\u6587\uFF09";
  if (isNext) {
    releaseNotesURL = `https://github.com/facebook/react-native/compare/${latestMajorVersion}-stable...master`;
    releaseNotesTitle = latestMajorVersion + "\u4E4B\u540E\u63D0\u4EA4\u7684 Commits";
  } else if (!isRC) {
    releaseNotesURL = `https://github.com/facebook/react-native/releases/tag/v${version}.0`;
  }
  const releaseNotesLink = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: releaseNotesURL, children: releaseNotesTitle });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: versionName }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: documentationLink }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: releaseNotesLink })
  ] });
};
const Versions = () => {
  const currentVersion = versions.length > 0 ? versions[0] : null;
  const latestVersions = ["next"].concat(
    versions.filter((version) => version.indexOf("-RC") !== -1)
  );
  const stableVersions = versions.filter(
    (version) => version.indexOf("-RC") === -1 && version !== currentVersion
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Layout.default, { title: "\u7248\u672C", wrapperClassName: "versions-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "React Native \u7248\u672C\u89C4\u5219" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "\u5F00\u6E90\u7248\u672C\u7684React Native\u539F\u5219\u4E0A\u6BCF\u6708\u53D1\u5E03\u4E00\u4E2A\u65B0\u7248\u672C\u3002\u5173\u4E8E\u7248\u672C\u8FED\u4EE3\u7684\u8BA8\u8BBA\u8BF7\u79FB\u6B65",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          href: "https://github.com/react-native-community/react-native-releases",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "react-native-releases" })
        }
      ),
      " ",
      "\u4ED3\u5E93\uFF08\u6CE8\u610F\u8BF7\u4E0D\u8981\u5728\u8FD9\u4E2A\u4ED3\u5E93\u91CC\u8BA8\u8BBA\u4E00\u822C\u7684\u95EE\u9898\uFF09\u3002\u5728\u6BCF\u6B21\u53D1\u5E03\u65B0\u7684\u7A33\u5B9A\u7248\u672C\u7684\u540C\u65F6\uFF0C \u4E00\u822C\u8FD8\u4F1A\u5728\u6700\u65B0\u4E3B\u4EE3\u7801\u5206\u652F",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/facebook/react-native", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "facebook/react-native" }) }),
      "\u4E0A\u5207\u51FA\u4E00\u4E2A\u65B0\u7684\u6D4B\u8BD5\u5019\u9009\u7248\u672C\uFF08RC\uFF09\u3002 \u8FD9\u4E2A\u5019\u9009\u7248\u672C\u4F1A\u5728\u8FD9\u4E00\u4E2A\u6708\u4E2D\u63A5\u53D7\u5927\u5BB6\u7684",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: (0, import_useBaseUrl.default)("docs/upgrading"), children: "\u5C1D\u9C9C\u6D4B\u8BD5" }),
      "\u5E76\u79EF\u6781\u542C\u53D6",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/facebook/react-native/issues", children: "\u63CF\u8FF0\u6E05\u695A\u7684\u3001\u6709\u5EFA\u8BBE\u6027\u7684\u610F\u89C1\u53CD\u9988" }),
      "\u3002\u5728\u89E3\u51B3\u4E00\u4E9B\u91CD\u8981\u7684\u95EE\u9898\u540E\uFF0C\u8FD9\u4E00\u5019\u9009\u7248\u672C\u5C31\u4F1A\u6210\u4E3A\u65B0\u7684\u7A33\u5B9A\u7248\u672C\u3002"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u6700\u65B0\u5019\u9009\u7248\u672C\uFF08\u672A\u6B63\u5F0F\u53D1\u5E03\uFF09" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u8981\u4E86\u89E3\u5C1D\u8BD5\u6700\u65B0\u7684\u53D8\u5316\u5E76\u63D0\u4F9B\u79EF\u6781\u7684\u610F\u89C1\u53CD\u9988\uFF0C\u90A3\u5C31\u6765\u8BD5\u8BD5\u6700\u65B0\u7684\u5019\u9009\u7248\u672C\u5427\u3002 Facebook\u7684\u5B98\u65B9\u5E94\u7528\u4F1A\u79EF\u6781\u5730\u66FF\u5927\u5BB6\u8BD5\u7528\u65B0\u4EE3\u7801\uFF0C\u751A\u81F3\u5728\u8FD8\u6CA1\u6709\u5207\u51FA\u5019\u9009\u7248\u65F6\u5C31\u5DF2\u7ECF\u5E94\u7528\u5230\u4E0A\u7EBF\u7684\u5E94\u7528\u4E2D\u3002" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { className: "versions", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: latestVersions.map((version) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      VersionItem,
      {
        version,
        currentVersion
      },
      "version_" + version
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u7A33\u5B9A\u7248\u672C" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "\u6700\u65B0\u7684\u7A33\u5B9A\u7248\u672C\u4F1A\u5728\u6BCF\u6B21\u4F7F\u7528",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "npx react-native init" }),
      "\u547D\u4EE4\u521B\u5EFA\u65B0\u9879\u76EE\u65F6\u81EA\u52A8\u91C7\u7528\u3002"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { className: "versions", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      VersionItem,
      {
        version: currentVersion,
        currentVersion
      },
      "version_" + currentVersion
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u4E4B\u524D\u7684\u7248\u672C" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { className: "versions", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stableVersions.map((version) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      VersionItem,
      {
        version,
        currentVersion
      },
      "version_" + version
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u5F52\u6863\u7684\u7248\u672C" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "\u8001\u7248\u672C\u7684\u6587\u6863\uFF08",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0.70" }),
      "\u4E4B\u524D\uFF09\u7531\u4E8E\u683C\u5F0F\u4E0D\u517C\u5BB9\uFF0C\u5C06\u4EC5\u4EE5markdown\u5F62\u5F0F\u7684\u6587\u6863\u4FDD\u5B58\uFF0C\u4E0D\u518D\u53D1\u5E03\u5230\u7F51\u9875\u4E0A\uFF0C\u8BF7\u79FB\u6B65",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/reactnativecn/react-native-website/tree/production/archived_docs", children: "\u5F52\u6863\u6587\u6863\u76EE\u5F55" }),
      "\u67E5\u770B \u3002"
    ] })
  ] });
};
var versions_default = Versions;


/***/ }),

/***/ 6715:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["0.75","0.74","0.73","0.72","0.71","0.70"]');

/***/ })

};
;