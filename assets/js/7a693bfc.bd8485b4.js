"use strict";
exports.id = 7734;
exports.ids = [7734];
exports.modules = {

/***/ 10126:
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
	id: 'using-a-scrollview',
	title: '使用滚动视图'
};
const contentTitle = undefined;
const metadata = {
  "id": "using-a-scrollview",
  "title": "使用滚动视图",
  "description": "ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。ScrollView 不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。",
  "source": "@site/versioned_docs/version-0.73/using-a-scrollview.md",
  "sourceDirName": ".",
  "slug": "/using-a-scrollview",
  "permalink": "/docs/0.73/using-a-scrollview",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/using-a-scrollview.md",
  "tags": [],
  "version": "0.73",
  "frontMatter": {
    "id": "using-a-scrollview",
    "title": "使用滚动视图"
  },
  "sidebar": "docs",
  "previous": {
    "title": "处理文本输入",
    "permalink": "/docs/0.73/handling-text-input"
  },
  "next": {
    "title": "使用长列表",
    "permalink": "/docs/0.73/using-a-listview"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/scrollview",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ScrollView"
        })
      }), "是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。ScrollView 不仅可以垂直滚动，还能水平滚动（通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "horizontal"
      }), "属性来设置）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["下面的示例代码创建了一个垂直滚动的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "，其中还混杂了图片和文字组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Using ScrollView",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Image%2C%20ScrollView%2C%20Text%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20logo%20%3D%20%7B%5Cn%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%5Cn%20%20width%3A%2064%2C%5Cn%20%20height%3A%2064%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CScrollView%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScroll%20me%20plz%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EIf%20you%20like%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScrolling%20down%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EWhat's%20the%20best%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EFramework%20around%3F%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2080%20%7D%7D%3EReact%20Native%3C%2FText%3E%5Cn%20%20%3C%2FScrollView%3E%5Cn)%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ScrollViews 可以通过使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pagingEnabled"
      }), "属性来允许使用滑动手势对视图进行分页，在 Android 上也可以利用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/react-native-viewpager",
        children: "ViewPager"
      }), "组件水平滑动视图。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 iOS 上包含单个子元素的 ScrollViews 可以允许用户对内容进行缩放. 通过设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "maximumZoomScale"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "minimumZoomScale"
      }), "两者的属性, 您的用户能够利用捏合以及扩大手势来放大或缩小。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "适合用来显示数量不多的滚动元素。放置在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "组件。下面我们来看看", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/using-a-listview",
        children: "如何使用长列表"
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