"use strict";
exports.id = 36241;
exports.ids = [36241];
exports.modules = {

/***/ 42422:
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
	id: 'communication-ios',
	title: '和原生端通信'
};
const contentTitle = undefined;
const metadata = {
  "id": "communication-ios",
  "title": "和原生端通信",
  "description": "通过植入原生应用和原生 UI 组件两篇文档，我们学习了 React Native 和原生组件的互相整合。在整合的过程中，我们会需要在两个世界间互相通信。有些方法已经在其他的指南中提到了，这篇文章总结了所有可行的技术。",
  "source": "@site/versioned_docs/version-0.75/communication-ios.md",
  "sourceDirName": ".",
  "slug": "/communication-ios",
  "permalink": "/docs/0.75/communication-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-ios.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "communication-ios",
    "title": "和原生端通信"
  },
  "sidebar": "docs",
  "previous": {
    "title": "在iOS模拟器上运行",
    "permalink": "/docs/0.75/running-on-simulator-ios"
  },
  "next": {
    "title": "iOS 应用小组件",
    "permalink": "/docs/0.75/app-extensions"
  }
};
const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "从原生组件传递属性到 React Native",
  "id": "从原生组件传递属性到-react-native",
  "level": 3
}, {
  "value": "从 React Native 传递属性到原生组件",
  "id": "从-react-native-传递属性到原生组件",
  "level": 3
}, {
  "value": "属性的限制",
  "id": "属性的限制",
  "level": 2
}, {
  "value": "其他的跨语言交互（事件和原生模块）",
  "id": "其他的跨语言交互事件和原生模块",
  "level": 2
}, {
  "value": "从原生代码调用 React Natvie 函数（事件）",
  "id": "从原生代码调用-react-natvie-函数事件",
  "level": 3
}, {
  "value": "从 React Native 中调用原生方法（原生模块）",
  "id": "从-react-native-中调用原生方法原生模块",
  "level": 3
}, {
  "value": "布局计算流",
  "id": "布局计算流",
  "level": 2
}, {
  "value": "在 React Native 中嵌入一个原生组件",
  "id": "在-react-native-中嵌入一个原生组件",
  "level": 3
}, {
  "value": "在原生中嵌入一个 React Native 组件",
  "id": "在原生中嵌入一个-react-native-组件",
  "level": 3
}, {
  "value": "固定大小的 React Native 内容",
  "id": "固定大小的-react-native-内容",
  "level": 4
}, {
  "value": "弹性大小的 React Native",
  "id": "弹性大小的-react-native",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "integration-with-existing-apps",
        children: "植入原生应用"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-components-ios",
        children: "原生 UI 组件"
      }), "两篇文档，我们学习了 React Native 和原生组件的互相整合。在整合的过程中，我们会需要在两个世界间互相通信。有些方法已经在其他的指南中提到了，这篇文章总结了所有可行的技术。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React Native 是从 React 中得到的灵感，因此基本的信息流是类似的。在 React 中信息是单向的。我们维护着组件层次，在其中每个组件都仅依赖于它父组件和自己的状态。通过属性（props）我们将信息从上而下的从父组件传递到子元素。如果一个祖先组件需要自己子孙的状态，推荐的方法是传递一个回调函数给对应的子元素。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React Native 也运用了相同的概念。只要我们完全在框架内构建应用，就可以通过属性和回调函数来调动整个应用。但是，当我们混合 React Native 和原生组件时，我们需要一些特殊的，跨语言的机制来传递信息。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "属性是最简单的跨组件通信。因此我们需要一个方法从原生组件传递属性到 React Native 或者从 React Native 到原生组件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "从原生组件传递属性到-react-native",
      children: "从原生组件传递属性到 React Native"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "将 React Natvie 视图封装到原生组件中。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "是一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "容器，承载着 React Native 应用。同时它也提供了一个联通原生端和被托管端的接口。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "的初始化函数你可以将任意属性传递给 React Native 应用。参数", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "initialProperties"
      }), "必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSDictionary"
      }), "的一个实例。这一字典参数会在内部被转化为一个可供 JS 组件调用的 JSON 对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSArray *imageList = @[@\"http://foo.com/bar1.png\",\n                       @\"http://foo.com/bar2.png\"];\n\nNSDictionary *props = @{@\"images\" : imageList};\n\nRCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                 moduleName:@\"ImageBrowserApp\"\n                                          initialProperties:props];\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "import React from 'react';\nimport {\n  View,\n  Image\n} from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return (\n      <Image source={{uri: imgURI}} />\n    );\n  }\n  render() {\n    return (\n      <View>\n        {this.props.images.map(this.renderImage)}\n      </View>\n    );\n  }\n}\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "同样提供了一个可读写的属性", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "appProperties"
      }), "。在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "appProperties"
      }), "设置之后，React Native 应用将会根据新的属性重新渲染。当然，只有在新属性和之前的属性有区别时更新才会被触发。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSArray *imageList = @[@\"http://foo.com/bar3.png\",\n                       @\"http://foo.com/bar4.png\"];\n\nrootView.appProperties = @{@\"images\" : imageList};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你可以随时更新属性，但是更新必须在主线程中进行，读取则可以在任何线程中进行。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "注意:"
          })
        }), " 目前有一个已知问题，如果在 bridge 还没初始化完成前就设置 appProperties，设置可能会无效，具体讨论请见 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/20115",
          children: "https://github.com/facebook/react-native/issues/20115"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "更新属性时并不能做到只更新一部分属性。我们建议你自己封装一个函数来构造属性。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "注意："
          })
        }), " 目前，最顶层的 RN 组件（即 registerComponent 方法中调用的那个）的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "componentWillReceiveProps"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "componentWillUpdateProps"
        }), "方法在属性更新后不会触发。但是，你可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "componentWillMount"
        }), "访问新的属性值。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "从-react-native-传递属性到原生组件",
      children: "从 React Native 传递属性到原生组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这篇", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-components-ios#%E5%B1%9E%E6%80%A7",
        children: "文档"
      }), "详细讨论了暴露原生组件属性的问题。简而言之，在你自定义的原生组件中通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_CUSTOM_VIEW_PROPERTY"
      }), "宏导出属性，就可以直接在 React Native 中使用，就好像它们是普通的 React Native 组件一样。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "属性的限制",
      children: "属性的限制"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "跨语言属性的主要缺点是不支持回调方法，因而无法实现自下而上的数据绑定。设想你有一个小的 RN 视图，当一个 JS 动作触发时你想从原生的父视图中移除它。此时你会发现根本做不到，因为信息需要自下而上进行传递。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["虽然我们有跨语言回调（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-modules-ios#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0",
        children: "参阅这里"
      }), "），但是这些回调函数并不总能满足需求。最主要的问题是它们并不是被设计来当作属性进行传递。这一机制的本意是允许我们从 JS 触发一个原生动作，然后用 JS 处理那个动作的处理结果。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "其他的跨语言交互事件和原生模块",
      children: "其他的跨语言交互（事件和原生模块）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如上一章所说，使用属性总会有一些限制。有时候属性并不足以满足应用逻辑，因此我们需要更灵活的解决办法。这一章描述了其他的在 React Native 中可用的通信方法。他们可以用来内部通信（在 JS 和 RN 的原生层之间），也可以用作外部通信（在 RN 和纯原生部分之间）。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React Native 允许使用跨语言的函数调用。你可以在 JS 中调用原生代码，也可以在原生代码中调用 JS。在不同端需要用不同的方法来实现相同的目的。在原生代码中我们使用事件机制来调度 JS 中的处理函数，而在 React Native 中我们直接使用原生模块导出的方法。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "从原生代码调用-react-natvie-函数事件",
      children: "从原生代码调用 React Natvie 函数（事件）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["事件的详细用法在这篇", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-components-ios#%E4%BA%8B%E4%BB%B6",
        children: "文章"
      }), "中进行了讨论。注意使用事件无法确保执行的时间，因为事件的处理函数是在单独的线程中执行。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "事件很强大，它可以不需要引用直接修改 React Native 组件。但是，当你使用时要注意下面这些陷阱："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "由于事件可以从各种地方产生，它们可能导致混乱的依赖。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "事件共享相同的命名空间，因此你可能遇到名字冲突。冲突不会在编写代码时被探测到，因此很难排错。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果你使用了同一个 React Native 组件的多个引用，然后想在事件中区分它们，name 你很可能需要在事件中同时传递一些标识（你可以使用原生视图中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "reactTag"
        }), "作为标识）。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React Native 中嵌入原生组件时，通常的做法是用原生组件的 RCTViewManager 作为视图的代理，通过 bridge 向 JS 发送事件。这样可以集中在一处调用相关的事件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "从-react-native-中调用原生方法原生模块",
      children: "从 React Native 中调用原生方法（原生模块）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块是 JS 中也可以使用的 Objective-C 类。一般来说这样的每一个模块的实例都是在每一次通过 JS bridge 通信时创建的。他们可以导出任意的函数和常量给 React Native。相关细节可以参阅这篇", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-modules-ios#content",
        children: "文章"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["事实上原生模块的单实例模式限制了嵌入。假设我们有一个 React Native 组件被嵌入了一个原生视图，并且我们希望更新原生的父视图。使用原生模块机制，我们可以导出一个函数，不仅要接收预设参数，还要接收父视图的标识。这个标识将会用来获得父视图的引用以更新父视图。那样的话，我们需要维持模块中标识到原生模块的映射。虽然这个解决办法很复杂，它仍被用在了管理所有 React Native 视图的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTUIManager"
      }), "类中，"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块同样可以暴露已有的原生库给 JS，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/react-native-geolocation",
        children: "地理定位库"
      }), "就是一个现成的例子。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "警告：所有原生模块共享同一个命名空间。创建新模块时注意避免命名冲突。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "布局计算流",
      children: "布局计算流"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当集成原生模块和 React Natvie 时，我们同样需要一个能协同不同的布局系统的办法。这一章节讨论了常见的布局问题，并且提供了解决机制的简单说明。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "在-react-native-中嵌入一个原生组件",
      children: "在 React Native 中嵌入一个原生组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个情况在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-components-ios#%E6%A0%B7%E5%BC%8F",
        children: "这篇文章"
      }), "中进行了讨论。基本上，由于所有的原生视图都是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "的子集，大多数类型和尺寸属性将和你期望的一样可以使用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "在原生中嵌入一个-react-native-组件",
      children: "在原生中嵌入一个 React Native 组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "固定大小的-react-native-内容",
      children: "固定大小的 React Native 内容"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最简单的情况是一个对于原生端已知的，固定大小的 React Native 应用，尤其是一个全屏的 React Native 视图。如果我们需要一个小一点的根视图，我们可以明确的设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "的 frame。比如说，创建一个 200 像素高，宿主视图那样宽的 RN app，我们可以这样做："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "// SomeViewController.m\n\n- (void)viewDidLoad\n{\n  [...]\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:appName\n                                            initialProperties:props];\n  rootView.frame = CGRectMake(0, 0, self.view.width, 200);\n  [self.view addSubview:rootView];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当我们创建了一个固定大小的根视图，则需要在 JS 中遵守它的边界。换句话说，我们需要确保 React Native 内容能够在固定的大小中放下。最简单的办法是使用 flexbox 布局。如果你使用绝对定位，并且 React 组件在根视图边界外可见，则 React Native 组件将会和原生视图重叠，导致某些不符合期望的行为。比如说，当你点击根视图边界之外的区域", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableHighlight"
      }), "将不会高亮。通过重新设置 frame 的属性来动态更新根视图的大小是完全可行的。React Native 将会关注内容布局的变化。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "弹性大小的-react-native",
      children: "弹性大小的 React Native"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有时候我们需要渲染一些不知道大小的内容。假设尺寸将会在 JS 中动态指定。我们有两个解决办法。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["你可以将 React Native 视图包裹在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ScrollView"
        }), "中。这样可以保证你的内容总是可以访问，并且不会和原生视图重叠。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["React Native 允许你在 JS 中决定 RN 应用的尺寸，并且将它传递给宿主视图", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTRootView"
        }), "。然后宿主视图将重新布局子视图，保证 UI 统一。我们通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTRootView"
        }), "的弹性模式来达到目的。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "支持 4 种不同的弹性模式："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "// RCTRootView.h\n\ntypedef NS_ENUM(NSInteger, RCTRootViewSizeFlexibility) {\n  RCTRootViewSizeFlexibilityNone = 0,\n  RCTRootViewSizeFlexibilityWidth,\n  RCTRootViewSizeFlexibilityHeight,\n  RCTRootViewSizeFlexibilityWidthAndHeight,\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认值是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootViewSizeFlexibilityNone"
      }), "，表示使用固定大小的根视图（仍然可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setFrame"
      }), "更改）。其他三种模式可以跟踪 React Native 尺寸的变化。比如说，设置模式为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootViewSizeFlexibilityHeight"
      }), "，React Native 将会测量内容的高度然后传递回", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "的代理。代理可以执行任意的行为，包括设置根视图的 frame 以使内容尺寸相匹配。代理仅仅在内容的尺寸发生变化时才进行调用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "注意："
          })
        }), " 在 JS 和原生中都设置弹性尺寸可能导致不确定的行为。比如--不要在设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTRootView"
        }), "为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTRootViewSizeFlexibilityWidth"
        }), "时同时指定最顶层的 RN 组件宽度可变（使用 Flexbox）。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "看一个例子："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "// FlexibleSizeExampleView.m\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  [...]\n\n  _rootView = [[RCTRootView alloc] initWithBridge:bridge\n  moduleName:@\"FlexibilityExampleApp\"\n  initialProperties:@{}];\n\n  _rootView.delegate = self;\n  _rootView.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;\n  _rootView.frame = CGRectMake(0, 0, self.frame.size.width, 0);\n}\n\n#pragma mark - RCTRootViewDelegate\n- (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView\n{\n  CGRect newFrame = rootView.frame;\n  newFrame.size = rootView.intrinsicContentSize;\n\n  rootView.frame = newFrame;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在例子中我们使用一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlexibleSizeExampleView"
      }), "视图来包含根视图。我们创建了根视图，初始化并且设置了代理。代理将会处理尺寸更新。然后，我们设置根视图的弹性尺寸为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootViewSizeFlexibilityHeight"
      }), "，意味着", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rootViewDidChangeIntrinsicSize:"
      }), "方法将会在每次 React Native 内容高度变化时进行调用。最后，我们设置根视图的宽度和位置。注意我们也设置了高度，但是并没有效果，因为我们已经将高度设置为根据 RN 内容进行弹性变化了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以在这里查看完整的例子", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/packages/rn-tester/RNTester/NativeExampleViews/FlexibleSizeExampleView.m",
        children: "源代码"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["动态改变根视图的弹性模式是可行的。改变根视图的弹性模式将会导致布局的重新计算，并且在重新量出内容尺寸时会调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rootViewDidChangeIntrinsicSize"
      }), "方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "React Native 布局是通过一个单独的线程进行计算，而原生 UI 视图是通过主线程更新。这可能导致短暂的原生端和 React Native 端的不一致。这是一个已知的问题，我们的团队已经在着手解决不同源的 UI 同步更新。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["除非根视图成为其他视图的子视图，否则 React Native 不会进行任何的布局计算。如果你想在还没有获得 React Native 视图的尺寸之前先隐藏视图，请将根视图添加为子视图并且在初始化的时候进行隐藏（使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "UIView"
        }), "的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hidden"
        }), "属性），然后在代理方法中改变它的可见性。"]
      })
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