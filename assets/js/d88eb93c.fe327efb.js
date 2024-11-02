"use strict";
exports.id = 69195;
exports.ids = [69195];
exports.modules = {

/***/ 49143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43023);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "caution",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This document refers to the architecture of the new renderer, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "fabric-renderer",
        children: "Fabric"
      }), ", that is in active roll-out."]
    })
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

/***/ 6177:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43023);
/* harmony import */ var _fabric_warning_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49143);


const frontMatter = {
	id: 'render-pipeline',
	title: '渲染，提交与挂载（渲染流水线）'
};
const contentTitle = undefined;
const metadata = {
  "id": "render-pipeline",
  "title": "渲染，提交与挂载（渲染流水线）",
  "description": "React Native 渲染器通过一系列加工处理，将 React 代码渲染到宿主平台。这一系列加工处理就是渲染流水线（pipeline），它的作用是初始化渲染和 UI 状态更新。 接下来介绍的是渲染流水线，及其在各种场景中的不同之处。",
  "source": "@site/architecture/render-pipeline.md",
  "sourceDirName": ".",
  "slug": "/render-pipeline",
  "permalink": "/architecture/render-pipeline",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/architecture/render-pipeline.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "render-pipeline",
    "title": "渲染，提交与挂载（渲染流水线）"
  },
  "sidebar": "architecture",
  "previous": {
    "title": "Fabric",
    "permalink": "/architecture/fabric-renderer"
  },
  "next": {
    "title": "跨平台的实现",
    "permalink": "/architecture/xplat-implementation"
  }
};
const assets = {

};




const toc = [..._fabric_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "初次渲染",
  "id": "初次渲染",
  "level": 2
}, {
  "value": "阶段一：渲染",
  "id": "阶段一渲染",
  "level": 3
}, {
  "value": "阶段二：提交",
  "id": "阶段二提交",
  "level": 3
}, {
  "value": "阶段三：挂载",
  "id": "阶段三挂载",
  "level": 3
}, {
  "value": "React 状态更新",
  "id": "react-状态更新",
  "level": 2
}, {
  "value": "阶段一：渲染",
  "id": "阶段一渲染-1",
  "level": 3
}, {
  "value": "阶段二：提交",
  "id": "阶段二提交-1",
  "level": 3
}, {
  "value": "阶段三：挂载",
  "id": "阶段三挂载-1",
  "level": 3
}, {
  "value": "React Native 渲染器状态更新",
  "id": "react-native-渲染器状态更新",
  "level": 2
}, {
  "value": "阶段二：提交",
  "id": "阶段二提交-2",
  "level": 3
}, {
  "value": "阶段三：挂载",
  "id": "阶段三挂载-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fabric_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 渲染器通过一系列加工处理，将 React 代码渲染到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/architecture/glossary#host-platform",
        children: "宿主平台"
      }), "。这一系列加工处理就是渲染流水线（pipeline），它的作用是初始化渲染和 UI 状态更新。 接下来介绍的是渲染流水线，及其在各种场景中的不同之处。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "（译注：pipeline 的原义是将计算机指令处理过程拆分为多个步骤，并通过多个硬件处理单元并行执行来加快指令执行速度。其具体执行过程类似工厂中的流水线，并因此得名。）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "渲染流水线可大致分为三个阶段："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["渲染（Render）：在 JavaScript 中，React 执行那些产品逻辑代码创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/architecture/glossary#react-element-tree-and-react-element",
          children: "React 元素树（React Element Trees）"
        }), "。然后在 C++ 中，用 React 元素树创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/architecture/glossary#react-shadow-tree-and-react-shadow-node",
          children: "React 影子树（React Shadow Tree）"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "提交（Commit）：在 React 影子树完全创建后，渲染器会触发一次提交。这会将 React 元素树和新创建的 React 影子树的提升为“下一棵要挂载的树”。 这个过程中也包括了布局信息计算。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["挂载（Mount）：React 影子树有了布局计算结果后，它会被转化为一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/architecture/glossary#host-view-tree-and-host-view",
          children: "宿主视图树（Host View Tree）"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "渲染流水线的各个阶段可能发生在不同的线程中，更详细的信息可以参考线程模型部分。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://reactnative.dev/assets/images/data-flow-17cc787288df187badd01e1ff17d2833.jpg",
        alt: "React Native renderer Data flow"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "渲染流水线存在三种不同场景："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "初始化渲染"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "React 状态更新"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "React Native 渲染器的状态更新"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "初次渲染",
      children: "初次渲染"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "想象一下你准备渲染一个组件："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "function MyComponent() {\n  return (\n    <View>\n      <Text>Hello, World</Text>\n    </View>\n  );\n}\n\n// <MyComponent />\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在上面的例子中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: " <MyComponent />"
      }), "是 React 元素。React 会将 React 元素简化为最终的 React 宿主组件。每一次都会递归地调用函数组件 MyComponet ，或类组件的 render 方法，直至所有的组件都被调用过。现在，你拥有一棵 React 宿主组件的 React 元素树。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段一渲染",
      children: "阶段一：渲染"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase one: render",
        src: (__webpack_require__(37519)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在元素简化的过程中，每调用一个 React 元素，渲染器同时会同步地创建 React 影子节点。这个过程只发生在 React 宿主组件上，不会发生在 React 复合组件上。比如，一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<View>"
      }), "会创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewShadowNode"
      }), " 对象，一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<Text>"
      }), "会创建一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextShadowNode"
      }), "对象。注意，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<MyComponent>"
      }), "并没有直接对应的 React 影子节点。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React 为两个 React 元素节点创建一对父子关系的同时，渲染器也会为对应的 React 影子节点创建一样的父子关系。这就是影子节点的组装方式。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "其他细节"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "创建 React 影子节点、创建两个影子节点的父子关系的操作是同步的，也是线程安全的。该操作的执行是从 React（JavaScript）到渲染器（C++）的，大部分情况下是在 JavaScript 线程上执行的。（译注：后面线程模型有解释）"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["React 元素树和元素树中的元素并不是一直存在的，它只一个当前视图的描述，而最终是由 React “fiber” 来实现的。每一个 “fiber” 都代表一个宿主组件，存着一个 C++ 指针，指向 React 影子节点。这些都是因为有了 JSI 才有可能实现的。学习更多关于 “fibers” 的资料参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/acdlite/react-fiber-architecture#what-is-a-fiber",
          children: "这篇文档"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "React 影子树是不可变的。为了更新任意的 React 影子节点，渲染器会创建了一棵新的 React 影子树。为了让状态更新更高效，渲染器提供了 clone 操作。更多细节可参考后面的 React 状态更新部分。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在上面的示例中，各个渲染阶段的产物如图所示："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Step one",
        src: (__webpack_require__(79047)/* ["default"] */ .A) + "",
        width: "2121",
        height: "1023"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React 影子树创建完成后，渲染器触发了一次 React 元素树的提交。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段二提交",
      children: "阶段二：提交"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase two: commit",
        src: (__webpack_require__(93374)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "提交阶段（Commit Phase）由两个操作组成：布局计算和树的提升。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "布局计算（Layout Calculation）"
        }), "：这一步会计算每个 React 影子节点的位置和大小。在 React Native 中，每一个 React 影子节点的布局都是通过 Yoga 布局引擎来计算的。实际的计算需要考虑每一个 React 影子节点的样式，该样式来自于 JavaScript 中的 React 元素。计算还需要考虑 React 影子树的根节点的布局约束，这决定了最终节点能够拥有多少可用空间。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Step two",
        src: (__webpack_require__(12012)/* ["default"] */ .A) + "",
        width: "2117",
        height: "1026"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "树提升，从新树到下一棵树（Tree Promotion，New Tree → Next Tree）"
        }), "：这一步会将新的 React 影子树提升为要挂载的下一棵树。这次提升代表着新树拥有了所有要挂载的信息，并且能够代表 React 元素树的最新状态。下一棵树会在 UI 线程下一个“tick”进行挂载。（译注：tick 是 CPU 的最小时间单元）"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "更多细节"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "这些操作都是在后台线程中异步执行的。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "绝大多数布局计算都是 C++ 中执行，只有某些组件，比如 Text、TextInput 组件等等，的布局计算是在宿主平台执行的。文字的大小和位置在每个宿主平台都是特别的，需要在宿主平台层进行计算。为此，Yoga 布局引擎调用了宿主平台的函数来计算这些组件的布局。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段三挂载",
      children: "阶段三：挂载"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase three: mount",
        src: (__webpack_require__(35432)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "挂载阶段（Mount Phase）会将已经包含布局计算数据的 React 影子树，转换为以像素形式渲染在屏幕中的宿主视图树。请记住，这棵 React 元素树看起来是这样的："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<View>\n  <Text>Hello, World</Text>\n</View>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["站在更高的抽象层次上，React Native 渲染器为每个 React 影子节点创建了对应的宿主视图，并且将它们挂载在屏幕上。在上面的例子中，渲染器为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<View>"
      }), " 创建了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android.view.ViewGroup"
      }), " 实例，为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<Text>"
      }), " 创建了文字内容为“Hello World”的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android.widget.TextView"
      }), "实例 。iOS 也是类似的，创建了一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), " 并调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSLayoutManager"
      }), " 创建文本。然后会为宿主视图配置来自 React 影子节点上的属性，这些宿主视图的大小位置都是通过计算好的布局信息配置的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Step two",
        src: (__webpack_require__(23637)/* ["default"] */ .A) + "",
        width: "2206",
        height: "1066"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "更详细地说，挂载阶段由三个步骤组成："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "树对比（Tree Diffing）："
        }), " 这个步骤完全用的是 C++ 计算的，会对比“已经渲染的树”（previously rendered tree）和”下一棵树”之间的差异。计算的结果是一系列宿主平台上的原子变更操作，比如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "createView"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "updateView"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "removeView"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "deleteView"
        }), " 等等。在这个步骤中，还会将 React 影子树拍平，来避免不必要的宿主视图创建。关于视图拍平的算法细节可以在后文找到。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "**树提升，从下一棵树到已渲染树（Tree Promotion，Next Tree → Rendered Tree）：**在这个步骤中，会自动将“下一棵树”提升为“先前渲染的树”，因此在下一个挂载阶段，树的对比计算用的是正确的树。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "**视图挂载（View Mounting）：**这个步骤会在对应的原生视图上执行原子变更操作，该步骤是发生在原生平台的 UI 线程的。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "更多细节"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "挂载阶段的所有操作都是在 UI 线程同步执行的。如果提交阶段是在后台线程执行，那么在挂载阶段会在 UI 线程的下一个“tick”执行。另外，如果提交阶段是在 UI 线程执行的，那么挂载阶段也是在 UI 线程执行。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "挂载阶段的调度和执行很大程度取决于宿主平台。例如，当前 Android 和 iOS 挂载层的渲染架构是不一样的。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在初始化渲染时，“先前渲染的树”是空的。因此，树对比（tree diffing）步骤只会生成一系列仅包含创建视图、设置属性、添加视图的变更操作。而在接下来的 React 状态更新场景中，树对比的性能至关重要。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在当前生产环境的测试中，在视图拍平之前，React 影子树通常由大约 600-1000 个 React 影子节点组成。在视图拍平之后，树的节点数量会减少到大约 200 个。在 iPad 或桌面应用程序上，这个节点数量可能要乘个 10。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-状态更新",
      children: "React 状态更新"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来，我们继续看 React 状态更新时，渲染流水线（render pipeline）的各个阶段是什么样的。假设你在初始化渲染时，渲染的是如下组件："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "function MyComponent() {\n  return (\n    <View>\n      <View\n        style={{backgroundColor: 'red', height: 20, width: 20}}\n      />\n      <View\n        style={{backgroundColor: 'blue', height: 20, width: 20}}\n      />\n    </View>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["应用我们在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#%E5%88%9D%E6%AC%A1%E6%B8%B2%E6%9F%93",
        children: "初次渲染"
      }), "部分学的知识，你可以得到如下的三棵树："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Render pipeline 4",
        src: (__webpack_require__(71578)/* ["default"] */ .A) + "",
        width: "2005",
        height: "838"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请注意，节点 3 对应的宿主视图背景是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "红的"
      }), "，而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
        children: ["节点 4 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "对应的宿主视图背景是"
        }), "蓝的"]
      }), "。假设 JavaScript 的产品逻辑是，将第一个内嵌的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<View>"
      }), "的背景颜色由红色改为黄色。新的 React 元素树看起来大概是这样："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<View>\n  <View\n    style={{backgroundColor: 'yellow', height: 20, width: 20}}\n  />\n  <View\n    style={{backgroundColor: 'blue', height: 20, width: 20}}\n  />\n</View>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "React Native 是如何处理这个更新的？"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从概念上讲，当发生状态更新时，为了更新已经挂载的宿主视图，渲染器需要直接更新 React 元素树。 但是为了线程的安全，React 元素树和 React 影子树都必须是不可变的（immutable）。这意味着 React 并不能直接改变当前的 React 元素树和 React 影子树，而是必须为每棵树创建一个包含新属性、新样式和新子节点的新副本。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "让我们继续探究状态更新时，渲染流水线的各个阶段发生了什么。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段一渲染-1",
      children: "阶段一：渲染"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase one: render",
        src: (__webpack_require__(37519)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React 要创建了一个包含新状态的新的 React 元素树，它就要复制所有变更的 React 元素和 React 影子节点。 复制后，再提交新的 React 元素树。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 渲染器利用结构共享的方式，将不可变特性的开销变得最小。为了更新 React 元素的新状态，从该元素到根元素路径上的所有元素都需要复制。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "但 React 只会复制有新属性、新样式或新子元素的 React 元素"
      }), "，任何没有因状态更新发生变动的 React 元素都不会复制，而是由新树和旧树共享。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在上面的例子中，React 创建新树使用了这些操作："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["CloneNode(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 3"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "{backgroundColor: 'yellow'}"
        }), ") → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 3'"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["CloneNode(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 2"
        }), ") → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 2'"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["AppendChild(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 2'"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 3'"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["AppendChild(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 2'"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 4"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["CloneNode(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 1"
        }), ") → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 1'"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["AppendChild(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 1'"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Node 2'"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["操作完成后，**节点 1'（Node 1'）**就是新的 React 元素树的根节点。我们用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "T"
      }), " 代表“先前渲染的树”，用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "T'"
      }), " 代表“新树”。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Render pipeline 5",
        src: (__webpack_require__(61411)/* ["default"] */ .A) + "",
        width: "2040",
        height: "797"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["注意节点 4 在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "T"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "T'"
      }), " 之间是共享的。结构共享提升了性能并减少了内存的使用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段二提交-1",
      children: "阶段二：提交"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase two: commit",
        src: (__webpack_require__(93374)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React 创建完新的 React 元素树和 React 影子树后，需要提交它们。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "**布局计算（Layout Calculation）：**状态更新时的布局计算，和初始化渲染的布局计算类似。一个重要的不同之处是布局计算可能会导致共享的 React 影子节点被复制。这是因为，如果共享的 React 影子节点的父节点引起了布局改变，共享的 React 影子节点的布局也可能发生改变。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "树提升（Tree Promotion ，New Tree → Next Tree）:"
        }), " 和初始化渲染的树提升类似。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "树对比（Tree Diffing）："
        }), " 这个步骤会计算“先前渲染的树”（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "T"
        }), "）和“下一棵树”（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "T'"
        }), "）的区别。计算的结果是原生视图的变更操作。", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["在上面的例子中，这些操作包括：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "UpdateView(**Node 3'**, {backgroundColor: '“yellow“})"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段三挂载-1",
      children: "阶段三：挂载"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase three: mount",
        src: (__webpack_require__(35432)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "树提升（Tree Promotion ，Next Tree → Rendered Tree）:"
        }), " 在这个步骤中，会自动将“下一棵树”提升为“先前渲染的树”，因此在下一个挂载阶段，树的对比计算用的是正确的树。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["**视图挂载（View Mounting）：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "这个步骤会在对应的原生视图上执行原子变更操作。在上面的例子中，只有"
        }), "视图 3（View 3）**的背景颜色会更新，变为黄色。\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Render pipeline 6",
          src: (__webpack_require__(99432)/* ["default"] */ .A) + "",
          width: "2038",
          height: "798"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "react-native-渲染器状态更新",
      children: "React Native 渲染器状态更新"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "对于影子树中的大多数信息而言，React 是唯一所有方也是唯一事实源。并且所有来源于 React 的数据都是单向流动的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "但有一个例外。这个例外是一种非常重要的机制：C++ 组件可以拥有状态，且该状态可以不直接暴露给 JavaScript，这时候 JavaScript （或 React）就不是唯一事实源了。通常，只有复杂的宿主组件才会用到 C++ 状态，绝大多数宿主组件都不需要此功能。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["例如，ScrollView 使用这种机制让渲染器知道当前的偏移量是多少。偏移量的更新是宿主平台的触发，具体地说是 ScrollView 组件。这些偏移量信息在 React Native 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/direct-manipulation#measurecallback",
        children: "measure"
      }), " 等 API 中有用到。 因为偏移量数据是由 C++ 状态持有的，所以源于宿主平台更新，不影响 React 元素树。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从概念上讲，C++ 状态更新类似于我们前面提到的 React 状态更新，但有两点不同："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "因为不涉及 React，所以跳过了“渲染阶段”（Render phase）。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "更新可以源自和发生在任何线程，包括主线程。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段二提交-2",
      children: "阶段二：提交"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase two: commit",
        src: (__webpack_require__(93374)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["提交阶段（Commit Phase）：在执行 C++ 状态更新时，会有一段代码把影子节点**（N）**的 C++ 状态设置为值 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "S"
      }), "。React Native 渲染器会反复尝试获取 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "N"
      }), " 的最新提交版本，并使用新状态 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "S"
      }), " 复制它 ，并将新的影子节点 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "N'"
      }), " 提交给影子树。如果 React 在此期间执行了另一次提交，或者其他 C++ 状态有了更新，本次 C++ 状态提交失败。这时渲染器将多次重试 C++ 状态更新，直到提交成功。这可以防止真实源的冲突和竞争。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "阶段三挂载-2",
      children: "阶段三：挂载"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Phase three: mount",
        src: (__webpack_require__(35432)/* ["default"] */ .A) + "",
        width: "1622",
        height: "92"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "挂载阶段（Mount Phase）实际上与 React 状态更新的挂载阶段相同。渲染器仍然需要重新计算布局、执行树对比等操作。详细步骤在前面已经讲过了。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 37519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/phase-one-render-cdd8336227468340a4c6b37d485e5bf8.png");

/***/ }),

/***/ 35432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/phase-three-mount-3544340fff87101e0f7815560061fec7.png");

/***/ }),

/***/ 93374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/phase-two-commit-bc6267e2319ae0ccfaa52663d36ad48f.png");

/***/ }),

/***/ 79047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-1-e5243e792e2cd1a55617acb26adbcf2b.png");

/***/ }),

/***/ 12012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-2-75ee0201996c04a64f009f1a67bf470a.png");

/***/ }),

/***/ 23637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-3-1dc3249f58a1ecef0392b7faabaca37c.png");

/***/ }),

/***/ 71578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-4-0f4611cfae668670f72f2b4c89813714.png");

/***/ }),

/***/ 61411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-5-5c32c125c1752ce394bdb54da364addb.png");

/***/ }),

/***/ 99432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/render-pipeline-6-dabe7cbda658efec9aeb1ad3be75b72c.png");

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