"use strict";
exports.id = 62013;
exports.ids = [62013];
exports.modules = {

/***/ 91818:
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
	id: 'architecture-glossary',
	title: '术语表'
};
const contentTitle = undefined;
const metadata = {
  "id": "architecture-glossary",
  "title": "术语表",
  "description": "Fabric 渲染器（Fabric Renderer）",
  "source": "@site/versioned_docs/version-0.76/glossary.md",
  "sourceDirName": ".",
  "slug": "/architecture-glossary",
  "permalink": "/docs/architecture-glossary",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/glossary.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {
    "id": "architecture-glossary",
    "title": "术语表"
  }
};
const assets = {

};



const toc = [{
  "value": "Fabric 渲染器（Fabric Renderer）",
  "id": "fabric-渲染器fabric-renderer",
  "level": 2
}, {
  "value": "宿主平台（Host platform）",
  "id": "宿主平台host-platform",
  "level": 2
}, {
  "value": "宿主视图树（Host View Tree）",
  "id": "宿主视图树host-view-tree",
  "level": 2
}, {
  "value": "JavaScript Interfaces (JSI)",
  "id": "javascript-interfaces-jsi",
  "level": 2
}, {
  "value": "Java Native Interface (JNI)",
  "id": "java-native-interface-jni",
  "level": 2
}, {
  "value": "React 组件（React Component）",
  "id": "react-组件react-component",
  "level": 2
}, {
  "value": "React 复合组件（React Composite Components）",
  "id": "react-复合组件react-composite-components",
  "level": 2
}, {
  "value": "React 宿主组件（React Host Components or Host Components）",
  "id": "react-宿主组件react-host-components-or-host-components",
  "level": 2
}, {
  "value": "React 元素树（React Element Trees）",
  "id": "react-元素树react-element-trees",
  "level": 2
}, {
  "value": "React 影子树（React Shadow Tree and React Shadow Node)",
  "id": "react-影子树react-shadow-tree-and-react-shadow-node",
  "level": 2
}, {
  "value": "Yoga 树（以及 Yoga 节点）",
  "id": "yoga-树以及-yoga-节点",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fabric-渲染器fabric-renderer",
      children: "Fabric 渲染器（Fabric Renderer）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React Native 执行的 React 框架代码，和 React 在 Web 中执行代码是同一份。但是，React Native 渲染的是通用平台视图（宿主视图）而不是 DOM 节点（可以认为 DOM 是 Web 的宿主视图）。 Fabric 渲染器使得渲染宿主视图变得可行。Fabric 让 React 与各个平台直接通信并管理其宿主视图实例。 Fabric 渲染器存在于 JavaScript 中，并且它调用的是由 C++ 代码暴露的接口。在这篇文章中有更多关于 React 渲染器的信息。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "宿主平台host-platform",
      children: "宿主平台（Host platform）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React Native 嵌入的平台，比如 Android、iOS、Windows、macOS。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "宿主视图树host-view-tree",
      children: "宿主视图树（Host View Tree）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "宿主视图树就是一系列的宿主视图。宿主平台有 Android 平台、iOS 平台等等。在 Android 上，宿主视图就是 android.view.ViewGroup实例、 android.widget.TextView实例等等。宿主视图就像积木一样地构成了宿主视图树。每个宿主视图的大小和坐标位置基于的是 LayoutMetrics，而  LayoutMetrics是通过布局引擎 Yoga 计算出来的。宿主视图的样式和内容信息，是从 React 影子树中得到的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "javascript-interfaces-jsi",
      children: "JavaScript Interfaces (JSI)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个轻量级的 API，给在 C++ 应用中嵌入的 JavaScript 引擎用的。Fabric 使用它在 Fabric 的 C++ 核心和 React 之间进行通信。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "java-native-interface-jni",
      children: "Java Native Interface (JNI)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Java Native Interface (JNI)：一个用 Java 写的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.oracle.com/javase/8/docs/technotes/guides/jni/",
        children: "API"
      }), "，用于在 Java 中写 native(译注：指调用 C++) 方法。作用是实现 Fabric 的 C++ 核心和 Android 的通信。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-组件react-component",
      children: "React 组件（React Component）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React 组件就是 JavaScript 函数或者类，描述如何创建 React 元素。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html",
        children: "Read more about React components, elements in this blog post."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-复合组件react-composite-components",
      children: "React 复合组件（React Composite Components）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React 组件的 render 方法中，包括其他 React 复合组件和 React 宿主组件。（译注：复合组件就是开发者声明的组件）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-宿主组件react-host-components-or-host-components",
      children: "React 宿主组件（React Host Components or Host Components）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React 组件的视图是通过宿主视图，比如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<View>"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<Text>"
      }), "，实现的。在 Web 中，ReactDOM 的宿主组件就是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<p>"
      }), "标签、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<div>"
      }), "标签代表的组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-元素树react-element-trees",
      children: "React 元素树（React Element Trees）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React 元素树是通过 JavaScript 中的 React 创建的，该树由一系类 React 元素组成。一个 React 元素就是一个普通的 JavaScript 对象，它描述了应该在屏幕中展示什么。一个元素包括属性 props、样式 styles、子元素 children。React 元素分为两类：React 复合组件实例（React Composite Components）和 React 宿主组件（React Host Components）实例，并且它只存在于 JavaScript 中。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-影子树react-shadow-tree-and-react-shadow-node",
      children: "React 影子树（React Shadow Tree and React Shadow Node)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React 影子树是通过 Fabric 渲染器创建的，树由一系列 React 影子节点组成。一个 React 影子节点是一个对象，代表一个已经挂载的 React 宿主组件，其包含的属性 props 来自 JavaScript。它也包括布局信息，比如坐标系 x、y，宽高 width、height。在新渲染器 Fabric 中，React 影子节点对象只存在于 C++ 中。而在老架构中，它存在于手机运行时的堆栈中，比如 Android 的 JVM。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "yoga-树以及-yoga-节点",
      children: "Yoga 树（以及 Yoga 节点）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Yoga Tree"
      }), " is used by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/",
        children: "Yoga"
      }), " to calculate layout information for a React Shadow Tree. Each React Shadow Node typically creates a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Yoga Node"
      }), " because React Native employs Yoga to calculate layout. However, this is not a hard requirement. Fabric can also create React Shadow Nodes that do not use Yoga; the implementation of each React Shadow Node determines how to calculate layout."]
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