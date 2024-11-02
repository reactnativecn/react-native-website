"use strict";
exports.id = 59973;
exports.ids = [59973];
exports.modules = {

/***/ 78189:
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
	id: 'using-a-listview',
	title: '使用长列表'
};
const contentTitle = undefined;
const metadata = {
  "id": "using-a-listview",
  "title": "使用长列表",
  "description": "React Native 提供了几个适用于展示长列表数据的组件，一般而言我们会选用FlatList或是SectionList。",
  "source": "@site/versioned_docs/version-0.71/using-a-listview.md",
  "sourceDirName": ".",
  "slug": "/using-a-listview",
  "permalink": "/docs/0.71/using-a-listview",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/using-a-listview.md",
  "tags": [],
  "version": "0.71",
  "frontMatter": {
    "id": "using-a-listview",
    "title": "使用长列表"
  },
  "sidebar": "docs",
  "previous": {
    "title": "使用滚动视图",
    "permalink": "/docs/0.71/using-a-scrollview"
  },
  "next": {
    "title": "特定平台代码",
    "permalink": "/docs/0.71/platform-specific-code"
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
      children: ["React Native 提供了几个适用于展示长列表数据的组件，一般而言我们会选用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.71/flatlist",
        children: "FlatList"
      }), "或是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.71/sectionlist",
        children: "SectionList"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "更适于长列表数据，且元素个数可以增删。和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.71/using-a-scrollview",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ScrollView"
        })
      }), "不同的是，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "组件必须的两个属性是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "renderItem"
      }), "。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "是列表的数据源，而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "renderItem"
      }), "则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["下面的例子创建了一个简单的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "，并预设了一些模拟数据。首先是初始化", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "所需的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "，其中的每一项（行）数据之后都在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "renderItem"
      }), "中被渲染成了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Text"
      }), "组件，最后构成整个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "FlatList Basics",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20FlatList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20flex%3A%201%2C%5Cn%20%20%20paddingTop%3A%2022%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20height%3A%2044%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnconst%20FlatListBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20data%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Devin'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dan'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dominic'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jackson'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'James'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Joel'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'John'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jillian'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jimmy'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Julie'%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem.key%7D%3C%2FText%3E%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20FlatListBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SectionList"
      }), "将是个不错的选择"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "SectionList Basics",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20SectionList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20flex%3A%201%2C%5Cn%20%20%20paddingTop%3A%2022%5Cn%20%20%7D%2C%5Cn%20%20sectionHeader%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%202%2C%5Cn%20%20%20%20paddingLeft%3A%2010%2C%5Cn%20%20%20%20paddingRight%3A%2010%2C%5Cn%20%20%20%20paddingBottom%3A%202%2C%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20backgroundColor%3A%20'rgba(247%2C247%2C247%2C1.0)'%2C%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20height%3A%2044%2C%5Cn%20%20%7D%2C%5Cn%7D)%5Cn%5Cnconst%20SectionListBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CSectionList%5Cn%20%20%20%20%20%20%20%20%20%20sections%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'D'%2C%20data%3A%20%5B'Devin'%2C%20'Dan'%2C%20'Dominic'%5D%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'J'%2C%20data%3A%20%5B'Jackson'%2C%20'James'%2C%20'Jillian'%2C%20'Jimmy'%2C%20'Joel'%2C%20'John'%2C%20'Julie'%5D%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem%7D%3C%2FText%3E%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.sectionHeader%7D%3E%7Bsection.title%7D%3C%2FText%3E%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20index)%20%3D%3E%20index%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20SectionListBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["列表的一个常用场景就是从服务器端取回列表数据然后显示，要实现这一过程，你可能还需要学习", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.71/network",
        children: "React Native 的网络相关用法"
      }), "."]
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