"use strict";
exports.id = 87613;
exports.ids = [87613];
exports.modules = {

/***/ 60229:
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
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68472);


const frontMatter = {
	id: 'native-modules-android',
	title: 'Android 原生模块'
};
const contentTitle = undefined;
const metadata = {
  "id": "native-modules-android",
  "title": "Android 原生模块",
  "description": "有时候 App 需要访问平台 API，但 React Native 可能还没有相应的模块包装；或者你需要复用一些 Java 代码，而不是用 Javascript 重新实现一遍；又或者你需要实现某些高性能的、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。",
  "source": "@site/versioned_docs/version-0.70/native-modules-android.md",
  "sourceDirName": ".",
  "slug": "/native-modules-android",
  "permalink": "/docs/0.70/native-modules-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-android.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "native-modules-android",
    "title": "Android 原生模块"
  },
  "sidebar": "docs",
  "previous": {
    "title": "原生模块简介",
    "permalink": "/docs/0.70/native-modules-intro"
  },
  "next": {
    "title": "iOS 原生模块",
    "permalink": "/docs/0.70/native-modules-ios"
  }
};
const assets = {

};




const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "Native Module Setup",
  "id": "native-module-setup",
  "level": 2
}, {
  "value": "开启 Gradle Daemon",
  "id": "开启-gradle-daemon",
  "level": 3
}, {
  "value": "Toast 模块",
  "id": "toast-模块",
  "level": 2
}, {
  "value": "参数类型",
  "id": "参数类型",
  "level": 3
}, {
  "value": "注册模块",
  "id": "注册模块",
  "level": 3
}, {
  "value": "更多特性",
  "id": "更多特性",
  "level": 2
}, {
  "value": "回调函数",
  "id": "回调函数",
  "level": 3
}, {
  "value": "Promises",
  "id": "promises",
  "level": 3
}, {
  "value": "多线程",
  "id": "多线程",
  "level": 3
}, {
  "value": "发送事件到 JavaScript",
  "id": "发送事件到-javascript",
  "level": 3
}, {
  "value": "从<code>startActivityForResult</code>中获取结果",
  "id": "从startactivityforresult中获取结果",
  "level": 3
}, {
  "value": "监听生命周期事件",
  "id": "监听生命周期事件",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有时候 App 需要访问平台 API，但 React Native 可能还没有相应的模块包装；或者你需要复用一些 Java 代码，而不是用 Javascript 重新实现一遍；又或者你需要实现某些高性能的、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们把 React Native 设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果 React Native 还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "native-module-setup",
      children: "Native Module Setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Native modules are usually distributed as npm packages, apart from the typical javascript files and resources they will contain an Android library project. This project is, from NPM's perspective just like any other media asset, meaning there isn't anything special about it from this point of view. To get the basic scaffolding make sure to read ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-modules-setup",
        children: "Native Modules Setup"
      }), " guide first."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "开启-gradle-daemon",
      children: "开启 Gradle Daemon"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们建议开启", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.gradle.org/2.9/userguide/gradle_daemon.html",
        children: "Gradle Daemon"
      }), "来加速 Java 代码编译。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "toast-模块",
      children: "Toast 模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本向导会用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://developer.android.com/reference/android/widget/Toast.html",
        children: "Toast"
      }), "作为例子。假设我们希望可以从 Javascript 发起一个 Toast 消息（一种会在屏幕下方弹出、保持一段时间的消息通知）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们首先来创建一个原生模块。一个原生模块是一个继承了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "的 Java 类，它可以实现一些 JavaScript 所需的功能。我们这里的目标是可以在 JavaScript 里写", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ToastExample.show('Awesome', ToastExample.SHORT);"
      }), "，来调起一个短暂的 Toast 通知。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["创建一个新的 Java 类并命名为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ToastModule.java"
      }), "，放置到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/"
      }), "目录下，其具体代码如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// ToastModule.java\n\npackage com.your-app-name;\n\nimport android.widget.Toast;\n\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\n\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class ToastModule extends ReactContextBaseJavaModule {\n  private static ReactApplicationContext reactContext;\n\n  private static final String DURATION_SHORT_KEY = \"SHORT\";\n  private static final String DURATION_LONG_KEY = \"LONG\";\n\n  public ToastModule(ReactApplicationContext context) {\n    super(context);\n    reactContext = context;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "要求派生类实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getName"
      }), "方法。这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。这里我们把这个模块叫做", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ToastExample"
      }), "，这样就可以在 JavaScript 中通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules.ToastExample"
      }), "访问到这个模块。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "译注：RN 已经内置了一个名为 ToastAndroid 的模块，所以在练习时请勿使用 ToastAndroid 的名字，否则运行时会报错名字冲突！"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @Override\n  public String getName() {\n    return \"ToastExample\";\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一个可选的方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getContants"
      }), "返回了需要导出给 JavaScript 使用的常量。它并不一定需要实现，但在定义一些可以被 JavaScript 同步访问到的预定义的值时非常有用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @Override\n  public Map<String, Object> getConstants() {\n    final Map<String, Object> constants = new HashMap<>();\n    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);\n    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);\n    return constants;\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要导出一个方法给 JavaScript 使用，Java 方法需要使用注解", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactMethod"
      }), "。方法的返回类型必须为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "void"
      }), "。React Native 的跨语言访问是异步进行的，所以想要给 JavaScript 返回一个值的唯一办法是使用回调函数或者发送事件（参见下文的描述）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "  @ReactMethod\n  public void show(String message, int duration) {\n    Toast.makeText(getReactApplicationContext(), message, duration).show();\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "参数类型",
      children: "参数类型"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["下面的参数类型在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactMethod"
      }), "注明的方法中，会被直接映射到它们对应的 JavaScript 类型。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-text",
        children: "Boolean -> Bool\nInteger -> Number\nDouble -> Number\nFloat -> Number\nString -> String\nCallback -> function\nReadableMap -> Object\nReadableArray -> Array\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableMap.java",
        children: "ReadableMap"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableArray.java",
        children: "ReadableArray"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "注册模块",
      children: "注册模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Java 这边要做的最后一件事就是注册这个模块。我们需要在应用的 Package 类的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createNativeModules"
      }), "方法中添加这个模块。如果模块没有被注册，它也无法在 JavaScript 中被访问到。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["创建一个新的 Java 类并命名为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomToastPackage.java"
      }), "，放置到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/"
      }), "目录下，其具体代码如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// CustomToastPackage.java\n\npackage com.your-app-name;\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class CustomToastPackage implements ReactPackage {\n\n  @Override\n  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n    return Collections.emptyList();\n  }\n\n  @Override\n  public List<NativeModule> createNativeModules(\n                              ReactApplicationContext reactContext) {\n    List<NativeModule> modules = new ArrayList<>();\n\n    modules.add(new ToastModule(reactContext));\n\n    return modules;\n  }\n\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个 package 需要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MainApplication.java"
      }), "文件的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages"
      }), "方法中提供。这个文件位于你的 react-native 应用文件夹的 android 目录中。具体路径是: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/MainApplication.java"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "// MainApplication.java\n...\nimport com.your-app-name.CustomToastPackage; // <-- 引入你自己的包\n...\nprotected List<ReactPackage> getPackages() {\n  @SuppressWarnings(\"UnnecessaryLocalVariable\")\n  List<ReactPackage> packages = new PackageList(this).getPackages();\n  // Packages that cannot be autolinked yet can be added manually here, for example:\n  // packages.add(new MyReactNativePackage());\n  packages.add(new CustomToastPackage()); // <-- 添加这一行，类名替换成你的Package类的名字 name.\n  return packages;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了让你的功能从 JavaScript 端访问起来更为方便，通常我们都会把原生模块封装成一个 JavaScript 模块。这不是必须的，但省下了每次都从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules"
      }), "中获取对应模块的步骤。这个 JS 文件也可以用于添加一些其他 JavaScript 端实现的功能。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// ToastExample.js\n/**\n * This exposes the native ToastExample module as a JS module. This has a\n * function 'show' which takes the following parameters:\n *\n * 1. String message: A string with the text to toast\n * 2. int duration: The duration of the toast. May be ToastExample.SHORT or\n *    ToastExample.LONG\n */\nimport { NativeModules } from 'react-native';\n// 下一句中的ToastExample即对应上文\n// public String getName()中返回的字符串\nexport default NativeModules.ToastExample;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，在别处的 JavaScript 代码中可以这样调用你的方法："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import ToastExample from './ToastExample';\n\nToastExample.show('Awesome', ToastExample.SHORT);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "更多特性",
      children: "更多特性"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "回调函数",
      children: "回调函数"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块还支持一种特殊的参数——回调函数。它提供了一个函数来把返回值传回给 JavaScript。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "import com.facebook.react.bridge.Callback;\n\npublic class UIManagerModule extends ReactContextBaseJavaModule {\n\n...\n\n  @ReactMethod\n  public void measureLayout(\n      int tag,\n      int ancestorTag,\n      Callback errorCallback,\n      Callback successCallback) {\n    try {\n      measureLayout(tag, ancestorTag, mMeasureBuffer);\n      float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);\n      float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);\n      float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);\n      float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);\n      successCallback.invoke(relativeX, relativeY, width, height);\n    } catch (IllegalViewOperationException e) {\n      errorCallback.invoke(e.getMessage());\n    }\n  }\n\n...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个函数可以在 JavaScript 里这样使用："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "UIManager.measureLayout(\n  100,\n  100,\n  (msg) => {\n    console.log(msg);\n  },\n  (x, y, width, height) => {\n    console.log(x + ':' + y + ':' + width + ':' + height);\n  }\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块通常只应调用回调函数一次。但是，它可以保存 callback 并在将来调用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "请务必注意 callback 并非在对应的原生函数返回后立即被执行——注意跨语言通讯是异步的，这个执行过程会通过消息循环来进行。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "promises",
      children: "Promises"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Promises"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "译注"
      }), "：这一部分涉及到较新的 js 语法和特性，不熟悉的读者建议先阅读 ES6 的相关书籍和文档。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块还可以使用 promise 来简化代码，搭配 ES2016(ES7)标准的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "async/await"
      }), "语法则效果更佳。如果桥接原生方法的最后一个参数是一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Promise"
      }), "，则对应的 JS 方法就会返回一个 Promise 对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们把上面的代码用 promise 来代替回调进行重构："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "import com.facebook.react.bridge.Promise;\n\npublic class UIManagerModule extends ReactContextBaseJavaModule {\n\n...\n  private static final String E_LAYOUT_ERROR = \"E_LAYOUT_ERROR\";\n  @ReactMethod\n  public void measureLayout(\n      int tag,\n      int ancestorTag,\n      Promise promise) {\n    try {\n      measureLayout(tag, ancestorTag, mMeasureBuffer);\n\n      WritableMap map = Arguments.createMap();\n\n      map.putDouble(\"relativeX\", PixelUtil.toDIPFromPixel(mMeasureBuffer[0]));\n      map.putDouble(\"relativeY\", PixelUtil.toDIPFromPixel(mMeasureBuffer[1]));\n      map.putDouble(\"width\", PixelUtil.toDIPFromPixel(mMeasureBuffer[2]));\n      map.putDouble(\"height\", PixelUtil.toDIPFromPixel(mMeasureBuffer[3]));\n\n      promise.resolve(map);\n    } catch (IllegalViewOperationException e) {\n      promise.reject(E_LAYOUT_ERROR, e);\n    }\n  }\n\n...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在 JavaScript 端的方法会返回一个 Promise。这样你就可以在一个声明了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "async"
      }), "的异步函数内使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "await"
      }), "关键字来调用，并等待其结果返回。（虽然这样写着看起来像同步操作，但实际仍然是异步的，并不会阻塞执行来等待）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "async function measureLayout() {\n  try {\n    const { relativeX, relativeY, width, height } =\n      await UIManager.measureLayout(100, 100);\n\n    console.log(\n      relativeX + ':' + relativeY + ':' + width + ':' + height\n    );\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmeasureLayout();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "多线程",
      children: "多线程"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块不应对自己被调用时所处的线程做任何假设，当前的状况有可能会在将来的版本中改变。如果一个过程要阻塞执行一段时间，这个工作应当分配到一个内部管理的工作线程，然后从那边可以调用任意的回调函数。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "译注"
      }), "：我们通常用 AsyncTask 来完成这项工作。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "发送事件到-javascript",
      children: "发送事件到 JavaScript"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块可以在没有被调用的情况下往 JavaScript 发送事件通知。最简单的办法就是通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTDeviceEventEmitter"
      }), "，这可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContext"
      }), "来获得对应的引用，像这样："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "...\nimport com.facebook.react.modules.core.DeviceEventManagerModule;\nimport com.facebook.react.bridge.WritableMap;\nimport com.facebook.react.bridge.Arguments;\n...\nprivate void sendEvent(ReactContext reactContext,\n                       String eventName,\n                       @Nullable WritableMap params) {\n  reactContext\n      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)\n      .emit(eventName, params);\n}\n@ReactMethod\npublic void addListener(String eventName) {\n  // Set up any upstream listeners or background tasks as necessary\n}\n@ReactMethod\npublic void removeListeners(Integer count) {\n  // Remove upstream listeners, stop unnecessary background tasks\n}\n...\nWritableMap params = Arguments.createMap();\nparams.putString(\"eventProperty\", \"someValue\");\n...\nsendEvent(reactContext, \"EventReminder\", params);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["JavaScript 模块可以通过使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeEventEmitter"
      }), "模块来监听事件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { NativeEventEmitter, NativeModules } from 'react-native';\n// ...\n\n  componentDidMount() {\n    // ...\n    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);\n    this.eventListener = eventEmitter.addListener('EventReminder', (event) => {\n       console.log(event.eventProperty) // \"someValue\"\n    });\n    // ...\n  }\n  componentWillUnmount() {\n    this.eventListener.remove(); // 组件卸载时记得移除监听事件\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "从startactivityforresult中获取结果",
      children: ["从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "startActivityForResult"
      }), "中获取结果"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "startActivityForResult"
      }), "调起了一个 activity 并想从其中获取返回结果，那么你需要监听", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onActivityResult"
      }), "事件。具体的做法是继承", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BaseActivityEventListener"
      }), "或是实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ActivityEventListener"
      }), "。我们推荐前一种做法，因为它相对来说不太会受到 API 变更的影响。然后你需要在模块的构造函数中注册这一监听事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "reactContext.addActivityEventListener(mActivityResultListener);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在你可以通过重写下面的方法来实现对", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onActivityResult"
      }), "的监听："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\npublic void onActivityResult(\n  final Activity activity,\n  final int requestCode,\n  final int resultCode,\n  final Intent intent) {\n  // 在这里实现你自己的逻辑\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["下面我们写一个简单的图片选择器来实践一下。这个图片选择器会把", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pickImage"
      }), "方法暴露给 JavaScript，而这个方法在调用时就会把图片的路径返回到 JS 端。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class ImagePickerModule extends ReactContextBaseJavaModule {\n\n  private static final int IMAGE_PICKER_REQUEST = 467081;\n  private static final String E_ACTIVITY_DOES_NOT_EXIST = \"E_ACTIVITY_DOES_NOT_EXIST\";\n  private static final String E_PICKER_CANCELLED = \"E_PICKER_CANCELLED\";\n  private static final String E_FAILED_TO_SHOW_PICKER = \"E_FAILED_TO_SHOW_PICKER\";\n  private static final String E_NO_IMAGE_DATA_FOUND = \"E_NO_IMAGE_DATA_FOUND\";\n\n  private Promise mPickerPromise;\n\n  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {\n\n    @Override\n    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {\n      if (requestCode == IMAGE_PICKER_REQUEST) {\n        if (mPickerPromise != null) {\n          if (resultCode == Activity.RESULT_CANCELED) {\n            mPickerPromise.reject(E_PICKER_CANCELLED, \"Image picker was cancelled\");\n          } else if (resultCode == Activity.RESULT_OK) {\n            Uri uri = intent.getData();\n\n            if (uri == null) {\n              mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, \"No image data found\");\n            } else {\n              mPickerPromise.resolve(uri.toString());\n            }\n          }\n\n          mPickerPromise = null;\n        }\n      }\n    }\n  };\n\n  ImagePickerModule(ReactApplicationContext reactContext) {\n    super(reactContext);\n\n    // Add the listener for `onActivityResult`\n    reactContext.addActivityEventListener(mActivityEventListener);\n  }\n\n  @Override\n  public String getName() {\n    return \"ImagePickerModule\";\n  }\n\n  @ReactMethod\n  public void pickImage(final Promise promise) {\n    Activity currentActivity = getCurrentActivity();\n\n    if (currentActivity == null) {\n      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, \"Activity doesn't exist\");\n      return;\n    }\n\n    // Store the promise to resolve/reject when picker returns data\n    mPickerPromise = promise;\n\n    try {\n      final Intent galleryIntent = new Intent(Intent.ACTION_PICK);\n\n      galleryIntent.setType(\"image/*\");\n\n      final Intent chooserIntent = Intent.createChooser(galleryIntent, \"Pick an image\");\n\n      currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);\n    } catch (Exception e) {\n      mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);\n      mPickerPromise = null;\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "监听生命周期事件",
      children: "监听生命周期事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["监听 activity 的生命周期事件（比如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onResume"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPause"
      }), "等等）和我们在前面实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ActivityEventListener"
      }), "的做法类似。模块必须实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LifecycleEventListener"
      }), "，然后需要在构造函数中注册一个监听函数："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "reactContext.addLifecycleEventListener(this);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在你可以通过实现下列方法来监听 activity 的生命周期事件了："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\npublic void onHostResume() {\n    // Activity `onResume`\n}\n\n@Override\npublic void onHostPause() {\n    // Activity `onPause`\n}\n\n@Override\npublic void onHostDestroy() {\n    // Activity `onDestroy`\n}\n"
      })
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

/***/ 68472:
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