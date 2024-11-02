"use strict";
exports.id = 80753;
exports.ids = [80753];
exports.modules = {

/***/ 54160:
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
	id: 'height-and-width',
	title: '高度与宽度'
};
const contentTitle = undefined;
const metadata = {
  "id": "height-and-width",
  "title": "高度与宽度",
  "description": "组件的高度和宽度决定了其在屏幕上显示的尺寸。",
  "source": "@site/versioned_docs/version-0.72/height-and-width.md",
  "sourceDirName": ".",
  "slug": "/height-and-width",
  "permalink": "/docs/0.72/height-and-width",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/height-and-width.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "height-and-width",
    "title": "高度与宽度"
  },
  "sidebar": "docs",
  "previous": {
    "title": "样式",
    "permalink": "/docs/0.72/style"
  },
  "next": {
    "title": "使用 Flexbox 布局",
    "permalink": "/docs/0.72/flexbox"
  }
};
const assets = {

};



const toc = [{
  "value": "指定宽高",
  "id": "指定宽高",
  "level": 2
}, {
  "value": "弹性（Flex）宽高",
  "id": "弹性flex宽高",
  "level": 2
}, {
  "value": "百分比宽高",
  "id": "百分比宽高",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "组件的高度和宽度决定了其在屏幕上显示的尺寸。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "指定宽高",
      children: "指定宽高"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最简单的给组件设定尺寸的方式就是在样式中指定固定的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "width"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "height"
      }), "。React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Height and Width",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FixedDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20100%2C%20height%3A%20100%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20150%2C%20height%3A%20150%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FixedDimensionsBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这样给组件设置尺寸也是一种常见的模式，比如要求在不同尺寸的屏幕上都显示成一样的大小。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "弹性flex宽高",
      children: "弹性（Flex）宽高"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在组件样式中使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex"
      }), "可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex:1"
      }), "来指定某个组件扩张以撑满所有剩余的空间。如果有多个并列的子组件使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex:1"
      }), "，则这些子组件会平分父容器中剩余的空间。如果这些并列的子组件的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex"
      }), "值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex"
      }), "值的比）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "width"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "height"
        }), "，也没有设定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        }), "，则父容器的尺寸为零。其子组件如果使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        }), "，也是无法显示的。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Dimensions",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FlexDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%2F%2F%20%E8%AF%95%E8%AF%95%E5%8E%BB%E6%8E%89%E7%88%B6View%E4%B8%AD%E7%9A%84%60flex%3A%201%60%E3%80%82%5Cn%20%20%20%20%2F%2F%20%E5%88%99%E7%88%B6View%E4%B8%8D%E5%86%8D%E5%85%B7%E6%9C%89%E5%B0%BA%E5%AF%B8%EF%BC%8C%E5%9B%A0%E6%AD%A4%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B9%9F%E6%97%A0%E6%B3%95%E5%86%8D%E6%92%91%E5%BC%80%E3%80%82%5Cn%20%20%20%20%2F%2F%20%E7%84%B6%E5%90%8E%E5%86%8D%E7%94%A8%60height%3A%20300%60%E6%9D%A5%E4%BB%A3%E6%9B%BF%E7%88%B6View%E7%9A%84%60flex%3A%201%60%E8%AF%95%E8%AF%95%E7%9C%8B%EF%BC%9F%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%202%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%203%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FlexDimensionsBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "百分比宽高",
      children: "百分比宽高"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你想要按比例填充屏幕上某一部分，又不想使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex"
      }), " 布局，那么可以在组件的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style"
      }), "中使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "百分比"
      }), "。与弹性宽高相似，百分比宽高要求父容器有一个明确的尺寸。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Percentage Dimensions",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cnconst%20PercentageDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%2F%2F%20Try%20removing%20the%20%60height%3A%20'100%25'%60%20on%20the%20parent%20View.%5Cn%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20height%3A%20'100%25'%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20height%3A%20'15%25'%2C%20backgroundColor%3A%20'powderblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20width%3A%20'66%25'%2C%20height%3A%20'35%25'%2C%20backgroundColor%3A%20'skyblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20width%3A%20'33%25'%2C%20height%3A%20'50%25'%2C%20backgroundColor%3A%20'steelblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cnexport%20default%20PercentageDimensionsBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当你熟练掌握了如何控制组件的尺寸后，下一步可以", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.72/flexbox",
        children: "学习如何在屏幕上排列组件了"
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