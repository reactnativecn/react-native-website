"use strict";
exports.id = 34963;
exports.ids = [34963];
exports.modules = {

/***/ 13602:
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
	id: 'fast-refresh',
	title: '快速刷新'
};
const contentTitle = undefined;
const metadata = {
  "id": "fast-refresh",
  "title": "快速刷新",
  "description": "快速刷新是 React Native 一个特性，在修改组件的时候快速刷新会给你一个即时的反馈。快速刷新默认是开启的，可以通过调整 React Native 开发者菜单里面的 \"Enable Fast Refresh\" 来开启或关闭。在快速刷新开启的时候，大多数的修改能在一到两秒之内呈现。",
  "source": "@site/../cndocs/fast-refresh.md",
  "sourceDirName": ".",
  "slug": "/fast-refresh",
  "permalink": "/docs/next/fast-refresh",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fast-refresh.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fast-refresh",
    "title": "快速刷新"
  },
  "sidebar": "docs",
  "previous": {
    "title": "在设备上运行",
    "permalink": "/docs/next/running-on-device"
  },
  "next": {
    "title": "Metro",
    "permalink": "/docs/next/metro"
  }
};
const assets = {

};



const toc = [{
  "value": "原理",
  "id": "原理",
  "level": 2
}, {
  "value": "错误还原",
  "id": "错误还原",
  "level": 2
}, {
  "value": "限制",
  "id": "限制",
  "level": 2
}, {
  "value": "提示",
  "id": "提示",
  "level": 2
}, {
  "value": "Fast Refresh 与 Hooks",
  "id": "fast-refresh-与-hooks",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "快速刷新是 React Native 一个特性，在修改组件的时候快速刷新会给你一个即时的反馈。快速刷新默认是开启的，可以通过调整 React Native 开发者菜单里面的 \"Enable Fast Refresh\" 来开启或关闭。在快速刷新开启的时候，大多数的修改能在一到两秒之内呈现。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "原理",
      children: "原理"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果你编辑了一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "仅导出 React 组件"
        }), "的模块文件，快速刷新只会更新该模块的代码，并且重新渲染你的组件。你能够编辑文件里面的任何东西，包括样式，渲染逻辑，事件处理或者 effects。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果你编辑的模块并不导出 React 组件，快速刷新将会重新运行该模块，和其他引入该模块的模块文件。例如，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Button.js"
        }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Modal.js"
        }), " 同时引入了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Theme.js"
        }), " ，编辑 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "theme.js"
        }), " 的时候，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Button.js"
        }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Modal.js"
        }), " 都会更新。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["最后，如果你", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "编辑了某个文件，而这个文件被 React 渲染树 之外的模块引入"
        }), "，则快速刷新将会回退到完全刷新。你可能有一个文件，该文件渲染了一个 React 组件，同时又导出了一个被其他", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "非 React 组件"
        }), "引入的值。例如，你的 React 组件模块同时导出了一个常量，并且在非 React 组件模块引入了它。在这种情况下面，考虑将查询迁移到一个单独的文件并将其导入到两个文件中。这样快速刷新才能重新生效。其他的情况也类似。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "错误还原",
      children: "错误还原"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果在快速刷新的过程中出现了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "语法错误"
      }), "，可以在修复错误后重新保存文件。红屏警告会跟着消失。错误语法的模块会被阻止运行，这样你就不需要重载 app。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果出现了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "在模块初始化过程中的运行时错误"
      }), "（例如，将", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "StyleSheet.create"
      }), "错打成了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Style.create"
      }), "），在你修复错误之后，快速刷新会话会继续进行。红屏警告消失，模块更新。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果出现了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "组件内部发生的运行时错误"
      }), "，在你修复错误之后，快速刷新会话", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "也"
      }), "将继续进行。在这种情况下，React 将会使用更新后的代码重新挂载你的应用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你在代码中使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://zh-hans.reactjs.org/docs/error-boundaries.html",
        children: "error boundaries"
      }), "（这对于在生产环境中优雅地处理失败是一个好主意），它们将在红框之后的下一次编辑时重新尝试渲染。从这个意义上说，拥有错误边界可以防止您总是被踢出到根应用程序屏幕。然而，请记住错误边界不应该过于细粒度。它们由React在生产环境中使用，并且始终应该经过有意设计。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "限制",
      children: "限制"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当你正在编辑的时候，快速刷新会尝试保持组件里面的本地 state，但仅限于这种保持是安全的情况。以下是一些在你编辑文件之后，组件本地的 state 被重置的原因："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "class 组件的本地 state 不会被保持（仅保持函数组件和 Hooks 的 state）。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["除了 React 组件外，您正在编辑的模块可能还有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "其他"
        }), " 导出。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["有时候，一个模块导出的是一个高阶组件，例如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "createNavigationContainer(MyScreen)"
        }), "。如果返回的组件是一个 class 组件，state 将会被重置。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从长远来看，随着越来越多的代码库转移到函数组件和 Hooks，会出现更多 state 被保持的情况。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "提示",
      children: "提示"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "快速刷新默认保持函数组件（和 Hooks）的本地 state。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["有时候你可能想要 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "强制"
        }), " 状态被重置，某个组件被重新挂载。例如你正在调试一个发生在挂载期间的动画，这种情况是很有用的。为了做到这一点，你可以在文件的任何地方增加 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "// @refresh reset"
        }), "。这个指令是文件的本地指令，指示快速刷新在每次编辑时重新加载该文件中定义的组件。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fast-refresh-与-hooks",
      children: "Fast Refresh 与 Hooks"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Fast Refresh 会尽可能的在编辑刷新时保留组件的状态。特别是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useState"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useRef"
      }), "会保持它们的先前值，只要您不更改它们的参数或Hook调用的顺序。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["具有依赖关系的Hooks（例如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useEffect"
      }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useMemo"
      }), "和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useCallback"
      }), "）将始终在快速刷新期间更新。在进行快速刷新时，它们的依赖列表将被忽略。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["例如，当您将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useMemo(() => x * 2, [x])"
      }), " 编辑为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useMemo(() => x * 10, [x])"
      }), ", 即使 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "x"
      }), "(依赖项) 没有改变，它也会重新运行。如果React不这样做，则您所做的编辑不会反映在屏幕上！"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["有时候，这可能导致意外结果。例如，即使使用空数组作为依赖项，在快速刷新期间仍然会重新运行一次 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useEffect"
      }), ". 然而，编写能够适应偶尔重新运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useEffect"
      }), " 的代码是一个好习惯，即使没有快速刷新也是如此。这样可以更轻松地引入新的依赖项到其中。"]
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