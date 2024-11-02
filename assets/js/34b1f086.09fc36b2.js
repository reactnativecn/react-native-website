"use strict";
exports.id = 95297;
exports.ids = [95297];
exports.modules = {

/***/ 79605:
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
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68781);


const frontMatter = {
	id: 'native-components-android',
	title: 'Android 原生UI组件'
};
const contentTitle = undefined;
const metadata = {
  "id": "native-components-android",
  "title": "Android 原生UI组件",
  "description": "在如今的 App 中，已经有成千上万的原生 UI 部件了——其中的一些是平台的一部分，另一些可能来自于一些第三方库，而且可能你自己还收藏了很多。React Native 已经封装了大部分最常见的组件，譬如ScrollView和TextInput，但不可能封装全部组件。而且，说不定你曾经为自己以前的 App 还封装过一些组件，React Native 肯定没法包含它们。幸运的是，在 React Naitve 应用程序中封装和植入已有的组件非常简单。",
  "source": "@site/versioned_docs/version-0.71/native-components-android.md",
  "sourceDirName": ".",
  "slug": "/native-components-android",
  "permalink": "/docs/0.71/native-components-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-components-android.md",
  "tags": [],
  "version": "0.71",
  "frontMatter": {
    "id": "native-components-android",
    "title": "Android 原生UI组件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "原生模块配置",
    "permalink": "/docs/0.71/native-modules-setup"
  },
  "next": {
    "title": "iOS 原生UI组件",
    "permalink": "/docs/0.71/native-components-ios"
  }
};
const assets = {

};




const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "ImageView 示例",
  "id": "imageview-示例",
  "level": 2
}, {
  "value": "1. 创建<code>ViewManager</code>的子类",
  "id": "1-创建viewmanager的子类",
  "level": 2
}, {
  "value": "2. 实现方法<code>createViewInstance</code>",
  "id": "2-实现方法createviewinstance",
  "level": 2
}, {
  "value": "3. 通过<code>@ReactProp</code>（或<code>@ReactPropGroup</code>）注解来导出属性的设置方法。",
  "id": "3-通过reactprop或reactpropgroup注解来导出属性的设置方法",
  "level": 2
}, {
  "value": "4. Register the <code>ViewManager</code>",
  "id": "4-register-the-viewmanager",
  "level": 2
}, {
  "value": "5. 实现对应的 JavaScript 模块",
  "id": "5-实现对应的-javascript-模块",
  "level": 2
}, {
  "value": "1. 创建一个 <code>Fragment</code>",
  "id": "1-创建一个-fragment",
  "level": 2
}, {
  "value": "2. 创建 <code>ViewManager</code> 子类",
  "id": "2-创建-viewmanager-子类",
  "level": 2
}, {
  "value": "3. 注册 <code>ViewManager</code>",
  "id": "3-注册-viewmanager",
  "level": 2
}, {
  "value": "4. 注册 <code>Package</code>",
  "id": "4-注册-package",
  "level": 2
}, {
  "value": "5. 执行 JavaScript 模块",
  "id": "5-执行-javascript-模块",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在如今的 App 中，已经有成千上万的原生 UI 部件了——其中的一些是平台的一部分，另一些可能来自于一些第三方库，而且可能你自己还收藏了很多。React Native 已经封装了大部分最常见的组件，譬如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextInput"
      }), "，但不可能封装全部组件。而且，说不定你曾经为自己以前的 App 还封装过一些组件，React Native 肯定没法包含它们。幸运的是，在 React Naitve 应用程序中封装和植入已有的组件非常简单。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["和原生模块向导一样，本向导也是一个相对高级的向导，我们假设你已经对 Android 编程颇有经验。本向导会引导你如何构建一个原生 UI 组件，带领你了解 React Native 核心库中", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ImageView"
      }), "组件的具体实现。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "imageview-示例",
      children: "ImageView 示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在这个例子里，我们来看看为了让 JavaScript 中可以使用 ImageView，需要做哪些准备工作。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生视图需要被一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), "的派生类（或者更常见的，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SimpleViewManager"
      }), "的派生类）创建和管理。一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SimpleViewManager"
      }), "可以用于这个场景，是因为它能够包含更多公共的属性，譬如背景颜色、透明度、Flexbox 布局等等。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这些子类本质上都是单例——React Native 只会为每个管理器创建一个实例。它们创建原生的视图并提供给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeViewHierarchyManager"
      }), "，NativeViewHierarchyManager 则会反过来委托它们在需要的时候去设置和更新视图的属性。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), "还会代理视图的所有委托，并给 JavaScript 发回对应的事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "提供原生视图很简单："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "创建一个 ViewManager 的子类。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "createViewInstance"
        }), "方法。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["导出视图的属性设置器：使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@ReactProp"
        }), "（或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@ReactPropGroup"
        }), "）注解。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["把这个视图管理类注册到应用程序包的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "createViewManagers"
        }), "里。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "实现 JavaScript 模块。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "1-创建viewmanager的子类",
      children: ["1. 创建", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), "的子类"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在这个例子里我们创建一个视图管理类", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactImageManager"
      }), "，它继承自", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SimpleViewManager<ReactImageView>"
      }), "。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactImageView"
      }), "是这个视图管理类所管理的对象类型，也就是我们自定义的原生视图。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getName"
      }), "方法返回的名字会用于在 JavaScript 端引用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "...\n\npublic class ReactImageManager extends SimpleViewManager<ReactImageView> {\n\n  public static final String REACT_CLASS = \"RCTImageView\";\n  ReactApplicationContext mCallerContext;\n\n  public ReactImageManager(ReactApplicationContext reactContext) {\n    mCallerContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "2-实现方法createviewinstance",
      children: ["2. 实现方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createViewInstance"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["视图在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createViewInstance"
      }), "中创建，且应当把自己初始化为默认的状态。所有属性的设置都通过后续的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "updateView"
      }), "来进行。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @Override\n  public ReactImageView createViewInstance(ThemedReactContext context) {\n    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "3-通过reactprop或reactpropgroup注解来导出属性的设置方法",
      children: ["3. 通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "（或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactPropGroup"
      }), "）注解来导出属性的设置方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要导出给 JavaScript 使用的属性，需要申明带有", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "（或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactPropGroup"
      }), "）注解的设置方法。方法的第一个参数是要修改属性的视图实例，第二个参数是要设置的属性值。方法的返回值类型必须为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "void"
      }), "，而且访问控制必须被声明为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "public"
      }), "。JavaScript 所得知的属性类型会由该方法第二个参数的类型来自动决定。支持的类型有：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boolean"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "float"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "double"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "String"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Boolean"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Integer"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReadableArray"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReadableMap"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "注解必须包含一个字符串类型的参数", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "name"
      }), "。这个参数指定了对应属性在 JavaScript 端的名字。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["除了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "name"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "注解还接受这些可选的参数：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultBoolean"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultInt"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultFloat"
      }), "。这些参数必须是对应的基础类型的值（也就是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boolean"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "float"
      }), "），这些值会被传递给 setter 方法，以免 JavaScript 端某些情况下在组件中移除了对应的属性。注意这个\"默认\"值只对基本类型生效，对于其他的类型而言，当对应的属性删除时，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "null"
      }), "会作为默认值提供给方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactPropGroup"
      }), "来注解的设置方法和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "不同。请参见", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactPropGroup"
      }), "注解类源代码中的文档来获取更多详情。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "重要！"
      }), " 在 ReactJS 里，修改一个属性会引发一次对设置方法的调用。有一种修改情况是，移除掉之前设置的属性。在这种情况下设置方法也一样会被调用，并且“默认”值会被作为参数提供（对于基础类型来说可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultBoolean"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultFloat"
      }), "等", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), "的属性提供，而对于复杂类型来说参数则会设置为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "null"
      }), "）"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @ReactProp(name = \"src\")\n  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {\n    view.setSource(sources);\n  }\n\n  @ReactProp(name = \"borderRadius\", defaultFloat = 0f)\n  public void setBorderRadius(ReactImageView view, float borderRadius) {\n    view.setBorderRadius(borderRadius);\n  }\n\n  @ReactProp(name = ViewProps.RESIZE_MODE)\n  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {\n    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "4-register-the-viewmanager",
      children: ["4. Register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["注册", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Java 中的最后一步就是把视图控制器注册到应用中。这和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.71/native-modules-android",
        children: "原生模块"
      }), "的注册方法类似，唯一的区别是我们把它放到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createViewManagers"
      }), "方法的返回值里。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @Override\n  public List<ViewManager> createViewManagers(\n                            ReactApplicationContext reactContext) {\n    return Arrays.<ViewManager>asList(\n      new ReactImageManager(reactContext)\n    );\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["完成上面这些代码后，请一定记得要重新编译！（运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yarn android"
      }), "命令）"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-实现对应的-javascript-模块",
      children: "5. 实现对应的 JavaScript 模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["整个过程的最后一步就是创建 JavaScript 模块并且定义 Java 和 JavaScript 之间的接口层。我们建议你使用 Flow 或是 TypeScript 来规范定义接口的具体结构，或者至少用注释说明清楚（老版本的 RN 使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "propTypes"
      }), "来规范接口定义，这一做法已不再支持）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// ImageView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n/**\n * Composes `View`.\n *\n * - src: string\n * - borderRadius: number\n * - resizeMode: 'cover' | 'contain' | 'stretch'\n */\nmodule.exports = requireNativeComponent('RCTImageView');\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "requireNativeComponent"
      }), "目前只接受一个参数，即原生视图的名字。如果你还需要做一些复杂的逻辑譬如事件处理，那么可以把原生组件用一个普通 React 组件封装。后文的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyCustomView"
      }), "例子里演示了这种用法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "事件",
      children: "事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们已经知道了怎么导出一个原生视图组件，并且我们可以在 JS 里很方便的控制它了。不过我们怎么才能处理来自用户的事件，譬如缩放操作或者拖动？当一个原生事件发生的时候，它应该也能触发 JavaScript 端视图上的事件，这两个视图会依据", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getId()"
      }), "而关联在一起。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "class MyCustomView extends View {\n   ...\n   public void onReceiveNativeEvent() {\n      WritableMap event = Arguments.createMap();\n      event.putString(\"message\", \"MyMessage\");\n      ReactContext reactContext = (ReactContext)getContext();\n      reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(\n          getId(),\n          \"topChange\",\n          event);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要把事件名", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "topChange"
      }), "映射到 JavaScript 端的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onChange"
      }), "回调属性上，需要在你的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), "中覆盖", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getExportedCustomBubblingEventTypeConstants"
      }), "方法，并在其中进行注册："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class ReactImageManager extends SimpleViewManager<MyCustomView> {\n    ...\n    public Map getExportedCustomBubblingEventTypeConstants() {\n        return MapBuilder.builder()\n            .put(\n                \"topChange\",\n                MapBuilder.of(\n                    \"phasedRegistrationNames\",\n                    MapBuilder.of(\"bubbled\", \"onChange\")))\n                    .build();\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个回调会传递一个原生事件对象，一般来说我们会在封装组件里进行处理以便外部使用："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MyCustomView.js\n\nclass MyCustomView extends React.Component {\n  constructor(props) {\n    super(props);\n    this._onChange = this._onChange.bind(this);\n  }\n  _onChange(event: Event) {\n    if (!this.props.onChangeMessage) {\n      return;\n    }\n    this.props.onChangeMessage(event.nativeEvent.message);\n  }\n  render() {\n    return (\n      <RCTMyCustomView\n        {...this.props}\n        onChange={this._onChange}\n      />\n    );\n  }\n}\n\nconst RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "与-android-fragment-的整合实例",
      children: "与 Android Fragment 的整合实例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了将现有的原生 UI 元素整合到 React Native 应用中，你可能需要使用 Android Fragments 来对本地组件进行更精细的控制，而不是从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " 返回一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "View"
      }), "。如果你想在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/guide/fragments/lifecycle",
        children: "生命周期方法"
      }), "的帮助下添加与视图绑定的自定义逻辑，如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onViewCreated"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPause"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onResume"
      }), "，你会用得到它。下面的步骤将告诉你如何做到这一点："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "1-创建一个-fragment",
      children: ["1. 创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Fragment"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyFragment.java"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// replace with your package\npackage com.mypackage;\nimport android.os.Bundle;\nimport android.view.LayoutInflater;\nimport android.view.View;\nimport android.view.ViewGroup;\nimport androidx.fragment.app.Fragment;\n// replace with your view's import\nimport com.mypackage.CustomView;\npublic class MyFragment extends Fragment {\n    CustomView customView;\n    @Override\n    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {\n        super.onCreateView(inflater, parent, savedInstanceState);\n        customView = new CustomView();\n        return customView; // this CustomView could be any view that you want to render\n    }\n    @Override\n    public void onViewCreated(View view, Bundle savedInstanceState) {\n        super.onViewCreated(view, savedInstanceState);\n        // do any logic that should happen in an `onCreate` method, e.g:\n        // customView.onCreate(savedInstanceState);\n    }\n    @Override\n    public void onPause() {\n        super.onPause();\n        // do any logic that should happen in an `onPause` method\n        // e.g.: customView.onPause();\n    }\n    @Override\n    public void onResume() {\n        super.onResume();\n       // do any logic that should happen in an `onResume` method\n       // e.g.: customView.onResume();\n    }\n    @Override\n    public void onDestroy() {\n        super.onDestroy();\n        // do any logic that should happen in an `onDestroy` method\n        // e.g.: customView.onDestroy();\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "2-创建-viewmanager-子类",
      children: ["2. 创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " 子类"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyViewManager.java"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// replace with your package\npackage com.mypackage;\nimport android.view.Choreographer;\nimport android.view.View;\nimport android.widget.FrameLayout;\nimport androidx.annotation.NonNull;\nimport androidx.annotation.Nullable;\nimport androidx.fragment.app.FragmentActivity;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReadableArray;\nimport com.facebook.react.common.MapBuilder;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.uimanager.annotations.ReactPropGroup;\nimport com.facebook.react.uimanager.ViewGroupManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\nimport java.util.Map;\npublic class MyViewManager extends ViewGroupManager<FrameLayout> {\n  public static final String REACT_CLASS = \"MyViewManager\";\n  public final int COMMAND_CREATE = 1;\n  ReactApplicationContext reactContext;\n  public MyViewManager(ReactApplicationContext reactContext) {\n    this.reactContext = reactContext;\n  }\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n  /**\n   * Return a FrameLayout which will later hold the Fragment\n   */\n  @Override\n  public FrameLayout createViewInstance(ThemedReactContext reactContext) {\n    return new FrameLayout(reactContext);\n  }\n  /**\n   * Map the \"create\" command to an integer\n   */\n  @Nullable\n  @Override\n  public Map<String, Integer> getCommandsMap() {\n    return MapBuilder.of(\"create\", COMMAND_CREATE);\n  }\n  /**\n   * Handle \"create\" command (called from JS) and call createFragment method\n   */\n  @Override\n  public void receiveCommand(@NonNull FrameLayout root, String commandId, @Nullable ReadableArray args) {\n    super.receiveCommand(root, commandId, args);\n    int reactNativeViewId = args.getInt(0);\n    int commandIdInt = Integer.parseInt(commandId);\n    switch (commandIdInt) {\n      case COMMAND_CREATE:\n        createFragment(root, reactNativeViewId);\n        break;\n      default: {}\n    }\n  }\n  /**\n   * Replace your React Native view with a custom fragment\n   */\n  public void createFragment(FrameLayout root, int reactNativeViewId) {\n    ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId).getParent();\n    setupLayout(parentView);\n    final MyFragment myFragment = new MyFragment();\n    FragmentActivity activity = (FragmentActivity) reactContext.getCurrentActivity();\n    activity.getSupportFragmentManager()\n            .beginTransaction()\n            .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))\n            .commit();\n  }\n  public void setupLayout(View view) {\n    Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {\n      @Override\n      public void doFrame(long frameTimeNanos) {\n        manuallyLayoutChildren(view);\n        view.getViewTreeObserver().dispatchOnGlobalLayout();\n        Choreographer.getInstance().postFrameCallback(this);\n      }\n    });\n  }\n  /**\n   * Layout all children properly\n   */\n  public void manuallyLayoutChildren(View view) {\n      // propWidth and propHeight coming from react-native props\n      int width = propWidth;\n      int height = propHeight;\n      view.measure(\n              View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),\n              View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));\n      view.layout(0, 0, width, height);\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "3-注册-viewmanager",
      children: ["3. 注册 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyPackage.java"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// replace with your package\npackage com.mypackage;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\nimport java.util.Arrays;\nimport java.util.List;\npublic class MyPackage implements ReactPackage {\n   @Override\n   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n       return Arrays.<ViewManager>asList(\n            new MyViewManager(reactContext)\n       );\n   }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "4-注册-package",
      children: ["4. 注册 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Package"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MainApplication.java"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "    @Override\n    protected List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n      ...\n      packages.add(new MyPackage());\n      return packages;\n    }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-执行-javascript-模块",
      children: "5. 执行 JavaScript 模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["I. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyViewManager.jsx"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { requireNativeComponent } from 'react-native';\nexport const MyViewManager =\n  requireNativeComponent('MyViewManager');\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["II. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: " MyView.jsx"
      }), " 调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "create"
      }), " 方法"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React, { useEffect, useRef } from 'react';\nimport { UIManager, findNodeHandle } from 'react-native';\nimport { MyViewManager } from './my-view-manager';\nconst createFragment = (viewId) =>\n  UIManager.dispatchViewManagerCommand(\n    viewId,\n    UIManager.MyViewManager.Commands.create.toString(), // we are calling the 'create' command\n    [viewId]\n  );\nexport const MyView = ({ style }) => {\n  const ref = useRef(null);\n  useEffect(() => {\n    const viewId = findNodeHandle(ref.current);\n    createFragment(viewId!);\n  }, []);\n  return (\n    <MyViewManager\n      style={{\n        ...(style || {}),\n        height: style && style.height !== undefined ? style.height || '100%',\n        width: style && style.width !== undefined ? style.width || '100%'\n      }}\n      ref={ref}\n    />\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果您想使用公开属性设置器 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), " (or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactPropGroup"
      }), ") 详见上面的 ImageView 示例"]
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

/***/ 68781:
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
    title: "提示",
    type: "info",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-turbomodules",
        children: "TurboModule"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-fabric-components",
        children: "Fabric Components"
      }), " to achieve similar results."]
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