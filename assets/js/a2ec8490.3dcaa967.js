"use strict";
exports.id = 50581;
exports.ids = [50581];
exports.modules = {

/***/ 30361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43023);


const frontMatter = {
	id: 'app-extensions',
	title: 'iOS 应用小组件'
};
const contentTitle = undefined;
const metadata = {
  "id": "app-extensions",
  "title": "iOS 应用小组件",
  "description": "小组件允许您在主要应用程序之外提供自定义功能和内容。iOS上有不同类型的应用小组件，它们都在App Extension编程指南中进行了介绍。在本指南中，我们将简要介绍如何在iOS上利用应用小组件的优势。",
  "source": "@site/versioned_docs/version-0.75/app-extensions.md",
  "sourceDirName": ".",
  "slug": "/app-extensions",
  "permalink": "/docs/0.75/app-extensions",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/app-extensions.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "app-extensions",
    "title": "iOS 应用小组件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "和原生端通信",
    "permalink": "/docs/0.75/communication-ios"
  },
  "next": {
    "title": "上架 App Store",
    "permalink": "/docs/0.75/publishing-to-app-store"
  }
};
const assets = {

};



const toc = [{
  "value": "小组件中的内存使用",
  "id": "小组件中的内存使用",
  "level": 2
}, {
  "value": "示例小组件：Today",
  "id": "示例小组件today",
  "level": 3
}, {
  "value": "其他类型的小组件",
  "id": "其他类型的小组件",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["小组件允许您在主要应用程序之外提供自定义功能和内容。iOS上有不同类型的应用小组件，它们都在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1",
        children: "App Extension编程指南"
      }), "中进行了介绍。在本指南中，我们将简要介绍如何在iOS上利用应用小组件的优势。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "小组件中的内存使用",
      children: "小组件中的内存使用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "由于这些小组件是在常规应用程序沙盒之外加载的，因此很有可能同时加载多个应用程序小组件。正如您所预期的那样，这些小组件具有较小的内存使用限制。在开发应用程序扩展时，请牢记这一点。强烈建议您在实际设备上测试您的应用程序，尤其是在开发应用程序小组件时更为重要：太频繁地，开发人员会发现他们的小组件在 iOS 模拟器中运行良好，但用户报告称它们无法加载到实际设备上。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们强烈推荐您观看Conrad Kramer关于", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://cocoaheads.tv/memory-use-in-extensions-by-conrad-kramer/",
        children: "小组件中的内存使用"
      }), " 的演讲以了解更多相关内容。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "示例小组件today",
      children: "示例小组件：Today"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个 Today 小组件的内存限制是16 MB。事实上，使用 React Native 实现的 Today 小组件可能会工作不可靠，因为内存使用量往往过高。如果你的 Today 小组件超出了内存限制，它将显示“无法加载”的消息："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: (__webpack_require__(72333)/* ["default"] */ .A) + "",
        width: "1242",
        height: "497"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["始终确保在真实设备上测试您的应用小组件，但要注意这可能还不足够，特别是在处理 Today 小组件时。调试配置构建更有可能超出内存限制，而发布配置构建则不会立即失败。我们强烈推荐您使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html",
        children: "Xcode 的 Instruments"
      }), "来分析您的真实世界内存使用情况，因为很可能您的发布配置构建非常接近16 MB 的限制。在这种情况下，通过执行常见操作（例如从 API 获取数据），您可以快速超过 16 MB 的限制。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要尝试扩展 React Native Today 小组件实现的示例项目，请参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/matejkriz/react-native-today-widget/",
        children: "react-native-today-widget"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "其他类型的小组件",
      children: "其他类型的小组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其他类型的小组件比 Today 具有更大的内存限制。例如，自定义键盘小组件限制为48 MB，共享小组件限制为120 MB。使用React Native实现此类应用程序小组件更可行。一个概念验证示例是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/andrewsardone/react-native-ios-share-extension",
        children: "react-native-ios-share-extension"
      }), "。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 72333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg");

/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;