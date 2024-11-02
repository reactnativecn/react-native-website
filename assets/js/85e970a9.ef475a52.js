exports.id = 77755;
exports.ids = [77755];
exports.modules = {

/***/ 48681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43023);
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32068);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34103);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52553);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64034);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4__);


const frontMatter = {
	id: 'native-modules-android',
	title: 'Android 原生模块'
};
const contentTitle = undefined;
const metadata = {
  "id": "native-modules-android",
  "title": "Android 原生模块",
  "description": "欢迎来到 Android 的原生模块。请先阅读 原生模块简介 以了解原生模块的基本概念。",
  "source": "@site/versioned_docs/version-0.74/native-modules-android.md",
  "sourceDirName": ".",
  "slug": "/native-modules-android",
  "permalink": "/docs/0.74/native-modules-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-android.md",
  "tags": [],
  "version": "0.74",
  "frontMatter": {
    "id": "native-modules-android",
    "title": "Android 原生模块"
  },
  "sidebar": "docs",
  "previous": {
    "title": "原生模块简介",
    "permalink": "/docs/0.74/native-modules-intro"
  },
  "next": {
    "title": "iOS 原生模块",
    "permalink": "/docs/0.74/native-modules-ios"
  }
};
const assets = {

};







const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "创建一个 Calendar 原生模块",
  "id": "创建一个-calendar-原生模块",
  "level": 2
}, {
  "value": "设置",
  "id": "设置",
  "level": 3
}, {
  "value": "创建自定义原生模块文件",
  "id": "创建自定义原生模块文件",
  "level": 3
}, {
  "value": "模块名称",
  "id": "模块名称",
  "level": 3
}, {
  "value": "向 JavaScript 导出原生方法",
  "id": "向-javascript-导出原生方法",
  "level": 3
}, {
  "value": "同步方法",
  "id": "同步方法",
  "level": 3
}, {
  "value": "在 Android 上注册模块",
  "id": "在-android-上注册模块",
  "level": 3
}, {
  "value": "测试已构建的内容",
  "id": "测试已构建的内容",
  "level": 3
}, {
  "value": "在迭代过程中构建",
  "id": "在迭代过程中构建",
  "level": 3
}, {
  "value": "小结 ✨",
  "id": "小结-",
  "level": 3
}, {
  "value": "超越日历原生模块",
  "id": "超越日历原生模块",
  "level": 2
}, {
  "value": "更好的原生模块导出",
  "id": "更好的原生模块导出",
  "level": 3
}, {
  "value": "参数类型",
  "id": "参数类型",
  "level": 3
}, {
  "value": "导出常量",
  "id": "导出常量",
  "level": 3
}, {
  "value": "回调函数",
  "id": "回调函数",
  "level": 3
}, {
  "value": "Promises",
  "id": "promises",
  "level": 3
}, {
  "value": "向 JavaScript 发送事件",
  "id": "向-javascript-发送事件",
  "level": 3
}, {
  "value": "从 startActivityForResult 获取结果",
  "id": "从-startactivityforresult-获取结果",
  "level": 3
}, {
  "value": "监听生命周期事件",
  "id": "监听生命周期事件",
  "level": 3
}, {
  "value": "线程管理",
  "id": "线程管理",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["欢迎来到 Android 的原生模块。请先阅读 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-modules-intro",
        children: "原生模块简介"
      }), " 以了解原生模块的基本概念。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "创建一个-calendar-原生模块",
      children: "创建一个 Calendar 原生模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在以下指南中，你将创建一个名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), " 的原生模块，它允许你从 JavaScript 访问 Android 的日历 API。最终，你将能够从 JavaScript 中调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule.createCalendarEvent('Dinner Party'， 'My House');"
      }), "，从而调用 Java/Kotlin 方法创建一个日历事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "设置",
      children: "设置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "要开始，请在 Android Studio 中打开 React Native 应用程序中的 Android 项目。你可以在 React Native 应用中找到 Android 项目的位置:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/docs/assets/native-modules-android-open-project.png",
        width: "500",
        alt: "Image of opening up an Android project within a React Native app inside of Android Studio."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
        children: "Image of where you can find your Android project"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们建议使用 Android Studio 来编写你的原生代码。Android Studio 是一个为 Android 开发而构建的 IDE，使用它将帮助你快速解决代码语法错误等小问题。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们还建议启用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.gradle.org/2.9/userguide/gradle_daemon.html",
        children: "Gradle Daemon"
      }), " 以加快你迭代 Java/Kotlin 代码时的构建速度。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "创建自定义原生模块文件",
      children: "创建自定义原生模块文件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["第一步是在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/"
      }), " 文件夹中创建 Java/Kotlin 文件(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule.java"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule.kt"
      }), ")。该 Java/Kotlin 文件将包含您的原生模块 Java/Kotlin 类。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/docs/assets/native-modules-android-add-class.png",
        width: "700",
        alt: "Image of adding a class called CalendarModule.java within the Android Studio."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
        children: "Image of how to add the CalendarModuleClass"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后添加如下代码："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class CalendarModule extends ReactContextBaseJavaModule {\n   CalendarModule(ReactApplicationContext context) {\n       super(context);\n   }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name\nimport com.facebook.react.bridge.NativeModule\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.react.bridge.ReactContext\nimport com.facebook.react.bridge.ReactContextBaseJavaModule\nimport com.facebook.react.bridge.ReactMethod\n\nclass CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {...}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["正如您所看到的，您的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "类继承自", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "类。对于安卓系统，Java/Kotlin 原生模块是用扩展了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "并实现了 JavaScript 所需功能的类来编写的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["值得注意的是，从技术上讲，Java/Kotlin 类只需要扩展", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BaseJavaModule"
      }), "类或实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModule"
      }), "接口，才能被 React Native 视为原生模块。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然而，我们建议您使用上面所示的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "提供了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactApplicationContext"
      }), "(RAC)的访问权限，这对于需要挂钩到活动生命周期方法的原生模块非常有用。使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "也将使您更容易在将来实现原生模块的类型安全性。为了实现原生模块类型安全性(将在未来版本中推出)，React Native 会查看每个原生模块的 JavaScript 规范，并生成一个抽象基类，该基类扩展自", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactContextBaseJavaModule"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "模块名称",
      children: "模块名称"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["所有 Android 平台上的 Java/Kotlin 原生模块都需要实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getName()"
      }), " 方法。该方法返回一个字符串，代表了原生模块的名称。这样，原生模块就可以通过其名称在 JavaScript 中被访问。例如，在下面的代码片段中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getName()"
      }), " 返回 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "\"CalendarModule\""
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "// add to CalendarModule.java\n@Override\npublic String getName() {\n   return \"CalendarModule\";\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "// add to CalendarModule.kt\noverride fun getName() = \"CalendarModule\"\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "可以通过以下方式在 JS 中访问原生模块:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const {CalendarModule} = ReactNative.NativeModules;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "向-javascript-导出原生方法",
      children: "向 JavaScript 导出原生方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来，您需要在原生模块中添加一个方法，该方法可以创建日历事件，并可以在 JavaScript 中调用。所有打算从 JavaScript 调用的原生模块方法都必须使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactMethod"
      }), "进行注解。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "设置一个方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createCalendarEvent()"
      }), "，可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule.createCalendarEvent()"
      }), "在 JS 中调用。目前，该方法将采用名称和位置作为字符串参数。参数类型选项将在稍后介绍。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@ReactMethod\npublic void createCalendarEvent(String name， String location) {\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "@ReactMethod fun createCalendarEvent(name: String， location: String) {}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在您从应用程序调用该方法时，请在该方法中添加一条调试日志以确认它已被调用。以下是如何从 Android 工具包中导入并使用[Log](https:// developer.android.com/reference/android/util/Log)类的示例:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "import android.util.Log;\n\n@ReactMethod\npublic void createCalendarEvent(String name， String location) {\n   Log.d(\"CalendarModule\"， \"Create event called with name: \" + name\n   + \" and location: \" + location);\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "import android.util.Log\n\n@ReactMethod\nfun createCalendarEvent(name: String， location: String) {\n    Log.d(\"CalendarModule\"， \"Create event called with name: $name and location: $location\")\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一旦您完成了原生模块的实现并将其与 JavaScript 连接起来，您便可以遵循", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/studio/debug/am-logcat.html",
        children: "这些步骤"
      }), "查看应用程序的日志。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "同步方法",
      children: "同步方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "isBlockingSynchronousMethod = true"
      }), " 传递给原生方法，将其标记为同步方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@ReactMethod(isBlockingSynchronousMethod = true)\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "@ReactMethod(isBlockingSynchronousMethod = true)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["就目前而言，我们并不建议这么做，因为以同步的方式调用方法可能会带来严重的性能损失，并且可能会给你的原生模块引入与线程相关的 bug。此外，请注意，如果你选择启用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "isBlockingSynchronousMethod"
      }), "， 你的应用程序将无法再使用 Google Chrome 调试器。这是因为同步方法需要 JS VM 与应用程序共享内存。对于 Google Chrome 调试器而言，React Native 运行在 Google Chrome 中的 JS VM 内部，并通过 WebSockets 与移动设备进行异步通信。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "在-android-上注册模块",
      children: "在 Android 上注册模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一旦编写了原生模块，就需要将其注册到 React Native 中。为此，你需要将你的原生模块添加到一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 中，并将该 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 注册到 React Native。在初始化过程中，React Native 会遍历所有包，并对于每个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), "，注册其中的每个原生模块。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 会调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createNativeModules()"
      }), " 方法，以获取要注册的原生模块列表。对于 Android 而言，如果一个模块未在 createNativeModules 中被实例化并返回，那么它就不会在 JavaScript 中可用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要将你的原生模块添加到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 中，首先在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/"
      }), " 文件夹中创建一个新的 Java/Kotlin 类(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyAppPackage.java"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyAppPackage.kt"
      }), ")，并实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 接口:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后添加以下内容:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "package com.your-app-name; // replace your-app-name with your app’s name\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class MyAppPackage implements ReactPackage {\n\n   @Override\n   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n       return Collections.emptyList();\n   }\n\n   @Override\n   public List<NativeModule> createNativeModules(\n           ReactApplicationContext reactContext) {\n       List<NativeModule> modules = new ArrayList<>();\n\n       modules.add(new CalendarModule(reactContext));\n\n       return modules;\n   }\n\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "package com.your-app-name // replace your-app-name with your app’s name\n\nimport android.view.View\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.bridge.NativeModule\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.react.uimanager.ReactShadowNode\nimport com.facebook.react.uimanager.ViewManager\n\nclass MyAppPackage : ReactPackage {\n\n    override fun createViewManagers(\n        reactContext: ReactApplicationContext\n    ): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()\n\n    override fun createNativeModules(\n        reactContext: ReactApplicationContext\n    ): MutableList<NativeModule> = listOf(CalendarModule(reactContext)).toMutableList()\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个文件导入了你创建的原生模块", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "。然后在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createNativeModules()"
      }), "函数中实例化了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "并将其作为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules"
      }), "列表返回以便注册。如果将来你添加更多原生模块，也可以在这里实例化它们并添加到返回的列表中。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["值得注意的是，这种注册原生模块的方式会在应用启动时主动地初始化所有原生模块，从而增加了应用的启动时间。你可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/TurboReactPackage.java",
        children: "TurboReactPackage"
      }), "作为替代方案。与返回已实例化的原生模块对象列表的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createNativeModules"
      }), "不同，TurboReactPackage 实现了一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getModule(String name， ReactApplicationContext rac)"
      }), "方法，在需要时创建原生模块对象。目前实现 TurboReactPackage 有点复杂。除了实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getModule()"
      }), "方法外，你还必须实现一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getReactModuleInfoProvider()"
      }), "方法，该方法返回包可实例化的所有原生模块列表以及实例化它们的函数，示例", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/8ac467c51b94c82d81930b4802b2978c85539925/ReactAndroid/src/main/java/com/facebook/react/CoreModulesPackage.java#L86-L165",
        children: "在此"
      }), "。再次说明，使用 TurboReactPackage 将使你的应用拥有更快的启动时间，但目前编写起来有些麻烦。所以如果你选择使用 TurboReactPackage，请小心谨慎。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要注册", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "包，你必须将", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyAppPackage"
      }), "添加到 ReactNativeHost 的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages()"
      }), "方法返回的包列表中。打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MainApplication.java"
      }), "或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MainApplication.kt"
      }), "文件，位于如下路径:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/app/src/main/java/com/your-app-name/"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["找到 ReactNativeHost 的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages()"
      }), "方法，并将你的包添加到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages()"
      }), "返回的包列表中。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@Override\n  protected List<ReactPackage> getPackages() {\n    @SuppressWarnings(\"UnnecessaryLocalVariable\")\n    List<ReactPackage> packages = new PackageList(this).getPackages();\n    // below MyAppPackage is added to the list of packages returned\n    packages.add(new MyAppPackage());\n    return packages;\n  }\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "override fun getPackages(): List<ReactPackage> =\n    PackageList(this).packages.apply {\n        // Packages that cannot be autolinked yet can be added manually here， for example:\n        // packages.add(new MyReactNativePackage());\n        add(MyAppPackage())\n    }\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "您已成功为 Android 注册了原生模块!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "测试已构建的内容",
      children: "测试已构建的内容"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "此时，您已为 Android 原生模块搭建了基本的脚手架。通过在 JavaScript 中访问原生模块并调用它导出的方法来测试一下。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在应用中找到一个添加调用原生模块的 createCalendarEvent()方法的位置。下面是一个示例组件 NewModuleButton，您可以在应用中添加它。您可以在 NewModuleButton 的 onPress()函数中调用原生模块。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react';\nimport {NativeModules， Button} from 'react-native';\n\nconst NewModuleButton = () => {\n  const onPress = () => {\n    console.log('We will invoke the native module here!');\n  };\n\n  return (\n    <Button\n      title=\"Click to invoke your native module!\"\n      color=\"#841584\"\n      onPress={onPress}\n    />\n  );\n};\n\nexport default NewModuleButton;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了从 JavaScript 访问您的原生模块，您需要先从 React Native 导入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {NativeModules} from 'react-native';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后您就可以从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules"
      }), "访问", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule"
      }), "原生模块了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const {CalendarModule} = NativeModules;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在您有了可用的 CalendarModule 原生模块，就可以调用您的原生方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createCalendarEvent()"
      }), "了。下面是在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NewModuleButton"
      }), "的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPress()"
      }), "方法中添加的代码:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const onPress = () => {\n  CalendarModule.createCalendarEvent('testName'， 'testLocation');\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "最后一步是重新构建 React Native 应用程序，以便您可以使用最新的原生代码(包括您新的原生模块!)。在您的 react native 应用程序所在的命令行中，运行以下命令:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "package-manager",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultPackageManager),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().packageManagers),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-shell",
            children: "npm run android\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-shell",
            children: "yarn android\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "在迭代过程中构建",
      children: "在迭代过程中构建"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在学习这些指南并对您的原生模块进行迭代的过程中，您需要对应用程序进行原生重建，以从 JavaScript 访问您最新的更改。这是因为您编写的代码位于应用程序的原生部分。虽然 React Native 的 metro bundler 可以监视 JavaScript 中的更改并为您实时重建，但它不会对原生代码进行操作。因此，如果您想测试最新的原生更改，需要使用上述命令进行重建。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "小结-",
      children: "小结 ✨"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在，您应该能够在应用程序中调用原生模块上的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createCalendarEvent()"
      }), "方法。在我们的示例中，这是通过按下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NewModuleButton"
      }), "来实现的。您可以通过查看在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createCalendarEvent()"
      }), "方法中设置的日志来确认这一点。您可以按照", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/studio/debug/am-logcat.html",
        children: "这些步骤"
      }), "在应用中查看 ADB 日志。然后，您应该能够搜索您的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Log.d"
      }), "消息(在我们的示例中是\"Create event called with name: testName and location: testLocation\")，并在每次调用原生模块方法时看到您的消息被记录。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/docs/assets/native-modules-android-logs.png",
        width: "1000",
        alt: "Image of logs."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
        children: "Image of ADB logs in Android Studio"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在这一点上，您已经创建了一个 Android 原生模块，并从您的 React Native 应用程序中的 JavaScript 调用了它的原生方法。您可以继续学习诸如原生模块方法可用的参数类型以及如何设置回调和承诺之类的内容。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "超越日历原生模块",
      children: "超越日历原生模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "更好的原生模块导出",
      children: "更好的原生模块导出"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["从上面的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeModules"
      }), " 导入您的原生模块是有点麻烦的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了让您原生模块的消费者无需每次都这样访问您的原生模块，您可以为该模块创建一个 JavaScript 包装器。创建一个名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarModule.js"
      }), " 的新 JavaScript 文件，其中包含以下内容:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "/**\n* 这将原生 CalendarModule 模块作为 JS 模块暴露。它有一个名为 'createCalendarEvent' 的函数，该函数接受以下参数:\n\n* 1. String name: 表示事件名称的字符串\n* 2. String location: 表示事件位置的字符串\n*/\nimport {NativeModules} from 'react-native';\nconst {CalendarModule} = NativeModules;\nexport default CalendarModule;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "此 JavaScript 文件也将成为您添加任何 JavaScript 端功能的绝佳位置。例如，如果您使用 TypeScript 等类型系统，可以在此处为您的原生模块添加类型注释。虽然 React Native 目前还不支持从原生到 JS 的类型安全性，但您所有的 JS 代码都将是类型安全的。这样做也将使您将来更容易切换到类型安全的原生模块。下面是为 CalendarModule 添加类型安全性的示例:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "/**\n * 这个模块以 JS 模块的方式暴露了原生 CalendarModule。它有一个名为 \"createCalendarEvent\" 的函数，接受以下两个参数:\n *\n * 1. String name: 代表事件名称的字符串\n * 2. String location: 代表事件地点的字符串\n */\nimport {NativeModules} from 'react-native';\nconst {CalendarModule} = NativeModules;\ninterface CalendarInterface {\n  createCalendarEvent(name: string， location: string): void;\n}\nexport default CalendarModule as CalendarInterface;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在其他 JavaScript 文件中，你可以如下引入原生模块并调用它的方法:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import CalendarModule from './CalendarModule';\nCalendarModule.createCalendarEvent('foo'， 'bar');\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["这假设你导入 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CalendarModule"
        }), " 的位置与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CalendarModule.js"
        }), " 在同一层级目录。如有必要，请相应更新导入路径。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "参数类型",
      children: "参数类型"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当在 JavaScript 中调用原生模块方法时，React Native 会将参数从 JS 对象转换为对应的 Java/Kotlin 对象类型。例如，如果你的 Java 原生模块方法接受一个 double 类型，在 JS 中你需要用数字来调用该方法。React Native 会为你处理转换。下面列出了原生模块方法支持的参数类型以及它们在 JavaScript 中对应的等价类型。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Java"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Kotlin"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "JavaScript"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "?boolean"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "boolean"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Double"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Double"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "?number"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "double"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "number"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "String"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "String"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Callback"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Callback"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Function"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Promise"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Promise"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Promise"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ReadableMap"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ReadableMap"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Object"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ReadableArray"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ReadableArray"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Array"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "以下类型目前虽然受支持，但在 TurboModules 中将不再支持，请避免使用:"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Integer Java/Kotlin -> ?number"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Float Java/Kotlin -> ?number"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "int Java -> number"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "float Java -> number"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "对于上面未列出的参数类型，你需要自行处理类型转换。例如，在 Android 中，Date 类型的转换并不是开箱即用的。你可以在原生方法中自己处理 Date 类型的转换，如下所示:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "    String dateFormat = \"yyyy-MM-dd\";\n    SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);\n    Calendar eStartDate = Calendar.getInstance();\n    try {\n        eStartDate.setTime(sdf.parse(startDate));\n    }\n\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "    val dateFormat = \"yyyy-MM-dd\"\n    val sdf = SimpleDateFormat(dateFormat， Locale.US)\n    val eStartDate = Calendar.getInstance()\n    try {\n        sdf.parse(startDate)?.let {\n            eStartDate.time = it\n        }\n    }\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "导出常量",
      children: "导出常量"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一个原生模块可以通过实现在 JavaScript 中可用的原生方法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getConstants()"
      }), " 来导出常量。接下来，您将实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getConstants()"
      }), " 并返回一个包含 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "DEFAULT_EVENT_NAME"
      }), " 常量的映射，您可以在 JavaScript 中访问该常量:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@Override\npublic Map<String， Object> getConstants() {\n   final Map<String， Object> constants = new HashMap<>();\n   constants.put(\"DEFAULT_EVENT_NAME\"， \"New Event\");\n   return constants;\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "override fun getConstants(): MutableMap<String， Any> =\n    hashMapOf(\"DEFAULT_EVENT_NAME\" to \"New Event\")\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后，可以在 JS 中通过在原生模块上调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getConstants"
      }), "来访问该常量:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();\nconsole.log(DEFAULT_EVENT_NAME);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["理论上可以直接从原生模块对象访问在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getConstants()"
      }), "中导出的常量。但这种做法将来不再受支持，因此我们鼓励社区转而采用上述方式，以避免将来不得不迁移代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["目前，常量仅在初始化时导出，因此如果您在运行时更改了 getConstants 的值，它不会影响 JavaScript 环境。这种情况将随着 Turbomodules 而改变。使用 Turbomodules 后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getConstants()"
        }), "将成为一个常规的原生模块方法，每次调用都会触及原生端。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "回调函数",
      children: "回调函数"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块还支持一种独特的参数类型:回调函数。回调函数用于将数据从 Java/Kotlin 异步传递到 JavaScript，同时也可用于从原生端异步执行 JavaScript 代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了在原生模块方法中加入回调函数，首先要引入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Callback"
      }), "接口，然后将", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Callback"
      }), "类型的参数添加到你的原生模块方法中。目前使用回调参数还有一些细微差别，不过这些将在 TurboModules 中得到解决。目前，你的函数参数只能有两个回调函数——一个成功回调和一个失败回调。另外，如果原生模块方法调用的最后一个参数是函数，则将被视为成功回调;如果倒数第二个参数是函数，则被视为失败回调。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "import com.facebook.react.bridge.Callback;\n\n@ReactMethod\npublic void createCalendarEvent(String name， String location， Callback callBack) {\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "import com.facebook.react.bridge.Callback\n\n@ReactMethod fun createCalendarEvent(name: String， location: String， callback: Callback) {}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以在 Java/Kotlin 方法中调用回调函数，提供任何需要传递给 JavaScript 的数据。请注意，你只能从原生代码传递可序列化的数据到 JavaScript。如果需要传递原生对象，你可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WriteableMaps"
      }), "，如果需要使用集合，可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WritableArrays"
      }), "。还需要强调的是，回调函数不会在原生函数完成后立即被调用。下面是之前创建的一个事件 ID，将被传递给回调函数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "  @ReactMethod\n   public void createCalendarEvent(String name， String location， Callback callBack) {\n       Integer eventId = ...\n       callBack.invoke(eventId);\n   }\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "  @ReactMethod\n  fun createCalendarEvent(name: String， location: String， callback: Callback) {\n      val eventId = ...\n      callback.invoke(eventId)\n  }\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后就可以在 JavaScript 中使用以下方法:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const onPress = () => {\n  CalendarModule.createCalendarEvent(\n    'Party'，\n    'My House'，\n    eventId => {\n      console.log(`Created a new event with id ${eventId}`);\n    }，\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "另一个需要注意的重要细节是，原生模块方法只能调用一次回调函数，这意味着你可以调用成功回调或失败回调，但不能两者兼得，而且每个回调最多只能被调用一次。不过，原生模块可以存储回调函数，并在以后调用它。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "处理回调错误有两种方法。第一种是遵循 Node 的惯例，将传给回调函数的第一个参数视为错误对象。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "  @ReactMethod\n   public void createCalendarEvent(String name， String location， Callback callBack) {\n       Integer eventId = ...\n       callBack.invoke(null， eventId);\n   }\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "  @ReactMethod\n  fun createCalendarEvent(name: String， location: String， callback: Callback) {\n      val eventId = ...\n      callback.invoke(null， eventId)\n  }\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 JavaScript 中，你可以先检查第一个参数，看看是否传递了错误:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const onPress = () => {\n  CalendarModule.createCalendarEvent(\n    'testName'，\n    'testLocation'，\n    (error， eventId) => {\n      if (error) {\n        console.error(`Error found! ${error}`);\n      }\n      console.log(`event id ${eventId} returned`);\n    }，\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "另一种选择是使用 onSuccess 和 onFailure 回调函数:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@ReactMethod\npublic void createCalendarEvent(String name， String location， Callback myFailureCallback， Callback mySuccessCallback) {\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "@ReactMethod\n  fun createCalendarEvent(\n      name: String，\n      location: String，\n      myFailureCallback: Callback，\n      mySuccessCallback: Callback\n  ) {}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 JavaScript 中，您可以为错误和成功响应分别添加单独的回调函数:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const onPress = () => {\n  CalendarModule.createCalendarEvent(\n    'testName'，\n    'testLocation'，\n    error => {\n      console.error(`Error found! ${error}`);\n    }，\n    eventId => {\n      console.log(`event id ${eventId} returned`);\n    }，\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "promises",
      children: "Promises"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块也可以实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        children: "Promise"
      }), "承诺，这有助于简化您的 JavaScript 代码，尤其是在使用 ES2016 的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        children: "async/await"
      }), "语法时。当原生模块 Java/Kotlin 方法的最后一个参数为 Promise 时，对应的 JS 方法将返回一个 JS Promise 对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "用 Promise 重构上述代码，代码如下:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "import com.facebook.react.bridge.Promise;\n\n@ReactMethod\npublic void createCalendarEvent(String name， String location， Promise promise) {\n    try {\n        Integer eventId = ...\n        promise.resolve(eventId);\n    } catch(Exception e) {\n        promise.reject(\"Create Event Error\"， e);\n    }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "import com.facebook.react.bridge.Promise\n\n@ReactMethod\nfun createCalendarEvent(name: String， location: String， promise: Promise) {\n    try {\n        val eventId = ...\n        promise.resolve(eventId)\n    } catch (e: Throwable) {\n        promise.reject(\"Create Event Error\"， e)\n    }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "类似于回调，原生模块方法可以拒绝或解决一个 Promise(但不能两者都做)，并且最多只能执行一次。这意味着您可以调用成功回调或失败回调， 但不能两者都调用，且每个回调最多只能被调用一次。不过，原生模块可以存储回调并稍后调用它。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该方法的 JavaScript 对应部分返回一个 Promise。这意味着您可以在异步函数中使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "await"
      }), " 关键字调用它并等待其结果:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const onSubmit = async () => {\n  try {\n    const eventId = await CalendarModule.createCalendarEvent(\n      'Party'，\n      'My House'，\n    );\n    console.log(`Created a new event with id ${eventId}`);\n  } catch (e) {\n    console.error(e);\n  }\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "reject 方法接受以下几种参数组合:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "String code， String message， WritableMap userInfo， Throwable throwable\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "code: String， message: String， userInfo: WritableMap， throwable: Throwable\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["更多详细内容，您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java",
        children: "这里"
      }), "查阅 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Promise.java"
      }), " 接口。如果未提供 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "userInfo"
      }), "，React Native 会将其设置为 null。对于其余参数，React Native 将使用默认值。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "message"
      }), " 参数提供了显示在错误调用堆栈顶部的错误 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "message"
      }), "。以下是在 JavaScript 中显示的错误消息示例，该消息来自 Java/Kotlin 中的以下 reject 调用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Java/Kotlin 的 reject 调用:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "promise.reject(\"Create Event error\"， \"Error parsing date\"， e);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "promise.reject(\"Create Event error\"， \"Error parsing date\"， e)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React Native 应用中，如果 promise 被拒绝时，会抛出如下错误信息:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/docs/assets/native-modules-android-errorscreen.png",
        width: "200",
        alt: "Image of error message in React Native app."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
        children: "Image of error message"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "向-javascript-发送事件",
      children: "向 JavaScript 发送事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块无需直接调用即可向 JavaScript 发送事件信号。例如，您可能需要提醒 JavaScript 某项即将发生的原生 Android 日历应用程序日历事件。最简单的方式是使用从 ReactContext 中获取的 RCTDeviceEventEmitter，如下代码片段所示。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "...\nimport com.facebook.react.modules.core.DeviceEventManagerModule;\nimport com.facebook.react.bridge.WritableMap;\nimport com.facebook.react.bridge.Arguments;\n...\nprivate void sendEvent(ReactContext reactContext，\n                      String eventName，\n                      @Nullable WritableMap params) {\n reactContext\n     .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)\n     .emit(eventName， params);\n}\n\nprivate int listenerCount = 0;\n\n@ReactMethod\npublic void addListener(String eventName) {\n  if (listenerCount == 0) {\n    // Set up any upstream listeners or background tasks as necessary\n  }\n\n  listenerCount += 1;\n}\n\n@ReactMethod\npublic void removeListeners(Integer count) {\n  listenerCount -= count;\n  if (listenerCount == 0) {\n    // Remove upstream listeners， stop unnecessary background tasks\n  }\n}\n...\nWritableMap params = Arguments.createMap();\nparams.putString(\"eventProperty\"， \"someValue\");\n...\nsendEvent(reactContext， \"EventReminder\"， params);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "...\nimport com.facebook.react.bridge.WritableMap\nimport com.facebook.react.bridge.Arguments\nimport com.facebook.react.modules.core.DeviceEventManagerModule\n...\n\nprivate fun sendEvent(reactContext: ReactContext， eventName: String， params: WritableMap?) {\n    reactContext\n      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)\n      .emit(eventName， params)\n}\n\nprivate var listenerCount = 0\n\n@ReactMethod\nfun addListener(eventName: String) {\n  if (listenerCount == 0) {\n    // Set up any upstream listeners or background tasks as necessary\n  }\n\n  listenerCount += 1\n}\n\n@ReactMethod\nfun removeListeners(count: Int) {\n  listenerCount -= count\n  if (listenerCount == 0) {\n    // Remove upstream listeners， stop unnecessary background tasks\n  }\n}\n...\nval params = Arguments.createMap().apply {\n    putString(\"eventProperty\"， \"someValue\")\n}\n...\nsendEvent(reactContext， \"EventReminder\"， params)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["JavaScript 模块可通过在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/EventEmitter/NativeEventEmitter.js",
        children: "NativeEventEmitter"
      }), " 类上调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "addListener"
      }), " 方法来注册接收事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {NativeEventEmitter， NativeModules} from 'react-native';\n...\nuseEffect(() => {\n    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);\n    let eventListener = eventEmitter.addListener('EventReminder'， event => {\n      console.log(event.eventProperty) // \"someValue\"\n    });\n\n    // Removes the listener once unmounted\n    return () => {\n      eventListener.remove();\n    };\n  }， []);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "从-startactivityforresult-获取结果",
      children: "从 startActivityForResult 获取结果"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你想从使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "startActivityForResult"
      }), "启动的 Activity 中获取结果，需要监听", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onActivityResult"
      }), "。为此，你必须扩展", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BaseActivityEventListener"
      }), "或实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ActivityEventListener"
      }), "。前者更可取，因为它更有弹性应对 API 变化。然后，你需要在模块的构造函数中注册监听器，就像这样:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "reactContext.addActivityEventListener(mActivityResultListener);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "reactContext.addActivityEventListener(mActivityResultListener);\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在你可以通过实现以下方法来监听 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onActivityResult"
      }), " 事件:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@Override\npublic void onActivityResult(\n final Activity activity，\n final int requestCode，\n final int resultCode，\n final Intent intent) {\n // Your logic here\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "override fun onActivityResult(\n    activity: Activity?，\n    requestCode: Int，\n    resultCode: Int，\n    intent: Intent?\n) {\n    // Your logic here\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["让我们实现一个基本的图像选择器来演示这一点。该图像选择器将向 JavaScript 暴露方法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pickImage"
      }), "，调用该方法时会返回图像路径。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "public class ImagePickerModule extends ReactContextBaseJavaModule {\n\n  private static final int IMAGE_PICKER_REQUEST = 1;\n  private static final String E_ACTIVITY_DOES_NOT_EXIST = \"E_ACTIVITY_DOES_NOT_EXIST\";\n  private static final String E_PICKER_CANCELLED = \"E_PICKER_CANCELLED\";\n  private static final String E_FAILED_TO_SHOW_PICKER = \"E_FAILED_TO_SHOW_PICKER\";\n  private static final String E_NO_IMAGE_DATA_FOUND = \"E_NO_IMAGE_DATA_FOUND\";\n\n  private Promise mPickerPromise;\n\n  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {\n\n    @Override\n    public void onActivityResult(Activity activity， int requestCode， int resultCode， Intent intent) {\n      if (requestCode == IMAGE_PICKER_REQUEST) {\n        if (mPickerPromise != null) {\n          if (resultCode == Activity.RESULT_CANCELED) {\n            mPickerPromise.reject(E_PICKER_CANCELLED， \"Image picker was cancelled\");\n          } else if (resultCode == Activity.RESULT_OK) {\n            Uri uri = intent.getData();\n\n            if (uri == null) {\n              mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND， \"No image data found\");\n            } else {\n              mPickerPromise.resolve(uri.toString());\n            }\n          }\n\n          mPickerPromise = null;\n        }\n      }\n    }\n  };\n\n  ImagePickerModule(ReactApplicationContext reactContext) {\n    super(reactContext);\n\n    // Add the listener for `onActivityResult`\n    reactContext.addActivityEventListener(mActivityEventListener);\n  }\n\n  @Override\n  public String getName() {\n    return \"ImagePickerModule\";\n  }\n\n  @ReactMethod\n  public void pickImage(final Promise promise) {\n    Activity currentActivity = getCurrentActivity();\n\n    if (currentActivity == null) {\n      promise.reject(E_ACTIVITY_DOES_NOT_EXIST， \"Activity doesn't exist\");\n      return;\n    }\n\n    // Store the promise to resolve/reject when picker returns data\n    mPickerPromise = promise;\n\n    try {\n      final Intent galleryIntent = new Intent(Intent.ACTION_PICK);\n\n      galleryIntent.setType(\"image/*\");\n\n      final Intent chooserIntent = Intent.createChooser(galleryIntent， \"Pick an image\");\n\n      currentActivity.startActivityForResult(chooserIntent， IMAGE_PICKER_REQUEST);\n    } catch (Exception e) {\n      mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER， e);\n      mPickerPromise = null;\n    }\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "class ImagePickerModule(reactContext: ReactApplicationContext) :\n    ReactContextBaseJavaModule(reactContext) {\n\n    private var pickerPromise: Promise? = null\n\n    private val activityEventListener =\n        object : BaseActivityEventListener() {\n            override fun onActivityResult(\n                activity: Activity?，\n                requestCode: Int，\n                resultCode: Int，\n                intent: Intent?\n            ) {\n                if (requestCode == IMAGE_PICKER_REQUEST) {\n                    pickerPromise?.let { promise ->\n                        when (resultCode) {\n                            Activity.RESULT_CANCELED ->\n                                promise.reject(E_PICKER_CANCELLED， \"Image picker was cancelled\")\n                            Activity.RESULT_OK -> {\n                                val uri = intent?.data\n\n                                uri?.let { promise.resolve(uri.toString())}\n                                    ?: promise.reject(E_NO_IMAGE_DATA_FOUND， \"No image data found\")\n                            }\n                        }\n\n                        pickerPromise = null\n                    }\n                }\n            }\n        }\n\n    init {\n        reactContext.addActivityEventListener(activityEventListener)\n    }\n\n    override fun getName() = \"ImagePickerModule\"\n\n    @ReactMethod\n    fun pickImage(promise: Promise) {\n        val activity = currentActivity\n\n        if (activity == null) {\n            promise.reject(E_ACTIVITY_DOES_NOT_EXIST， \"Activity doesn't exist\")\n            return\n        }\n\n        pickerPromise = promise\n\n        try {\n            val galleryIntent = Intent(Intent.ACTION_PICK).apply { type = \"image\\/*\" }\n\n            val chooserIntent = Intent.createChooser(galleryIntent， \"Pick an image\")\n\n            activity.startActivityForResult(chooserIntent， IMAGE_PICKER_REQUEST)\n        } catch (t: Throwable) {\n            pickerPromise?.reject(E_FAILED_TO_SHOW_PICKER， t)\n            pickerPromise = null\n        }\n    }\n\n    companion object {\n        const val IMAGE_PICKER_REQUEST = 1\n        const val E_ACTIVITY_DOES_NOT_EXIST = \"E_ACTIVITY_DOES_NOT_EXIST\"\n        const val E_PICKER_CANCELLED = \"E_PICKER_CANCELLED\"\n        const val E_FAILED_TO_SHOW_PICKER = \"E_FAILED_TO_SHOW_PICKER\"\n        const val E_NO_IMAGE_DATA_FOUND = \"E_NO_IMAGE_DATA_FOUND\"\n    }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "监听生命周期事件",
      children: "监听生命周期事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["监听如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onResume"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPause"
      }), " 等活动的生命周期事件，跟实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ActivityEventListener"
      }), " 的方式非常相似。该模块必须实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LifecycleEventListener"
      }), "。然后，你需要在模块的构造函数中注册一个监听器，就像这样:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "reactContext.addLifecycleEventListener(this);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "reactContext.addLifecycleEventListener(this)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，通过实现以下方法，您可以监听活动的生命周期事件:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "@Override\npublic void onHostResume() {\n   // Activity `onResume`\n}\n@Override\npublic void onHostPause() {\n   // Activity `onPause`\n}\n@Override\npublic void onHostDestroy() {\n   // Activity `onDestroy`\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "override fun onHostResume() {\n    // Activity `onResume`\n}\n\noverride fun onHostPause() {\n    // Activity `onPause`\n}\n\noverride fun onHostDestroy() {\n    // Activity `onDestroy`\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "线程管理",
      children: "线程管理"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "截至目前，在 Android 系统上，所有原生模块的异步方法都在同一个线程上执行。原生模块不应对它们被调用所在的线程作任何假设，因为当前的分配方式在未来可能会发生变化。如果需要进行阻塞调用，则应将繁重工作分派到内部管理的工作线程，并从那里分发任何回调。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
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

/***/ 32068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      children: ["原生模块和原生组件是我们传统架构中使用的稳定技术。\n当新架构稳定后，它们将被弃用。新架构使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-turbomodules",
        children: "TurboModule"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-fabric-components",
        children: "Fabric 组件"
      }), "来实现类似的功能。"]
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

/***/ 25154:
/***/ ((module) => {

// Exports
module.exports = {
	"tabItem": `tabItem_wHwb`
};


/***/ }),

/***/ 63910:
/***/ ((module) => {

// Exports
module.exports = {
	"tabList": `tabList_J5MA`,
	"tabItem": `tabItem_l0OV`
};


/***/ }),

/***/ 64034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TabsConstants_exports = {};
__export(TabsConstants_exports, {
  default: () => TabsConstants_default
});
module.exports = __toCommonJS(TabsConstants_exports);
var import_ExecutionEnvironment = __toESM(__webpack_require__(1448));
const isMacOS = import_ExecutionEnvironment.default.canUseDOM ? navigator.platform.startsWith("Mac") : false;
const isWindows = import_ExecutionEnvironment.default.canUseDOM ? navigator.platform.startsWith("Win") : false;
const syntax = [
  { label: "\u51FD\u6570\u5F0F\u7EC4\u4EF6", value: "functional" },
  { label: "Class \u7EC4\u4EF6", value: "classical" }
];
const defaultSyntax = "functional";
const packageManagers = [
  { label: "npm", value: "npm" },
  { label: "Yarn", value: "yarn" }
];
const defaultPackageManager = "npm";
const androidLanguages = [
  { label: "Java", value: "java" },
  { label: "Kotlin", value: "kotlin" }
];
const defaultAndroidLanguage = "java";
const appleLanguages = [
  { label: "ObjectiveC", value: "objc" },
  { label: "Swift", value: "swift" }
];
const defaultAppleLanguage = "objc";
const javaScriptSpecLanguages = [
  { label: "TypeScript", value: "typescript" },
  { label: "Flow", value: "flow" }
];
const defaultJavaScriptSpecLanguages = "typescript";
const snackLanguages = [
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" }
];
const defaultSnackLanguage = "typescript";
const jsDebuggers = [
  { label: "Hermes Debugger / Expo", value: "hermes" },
  { label: "Flipper", value: "flipper" },
  { label: "New Debugger (Experimental)", value: "new-debugger" }
];
const defaultJsDebugger = "flipper";
const guides = [
  { label: "\u5B8C\u6574\u539F\u751F\u73AF\u5883", value: "native" },
  { label: "\u7B80\u6613\u6C99\u76D2\u73AF\u5883", value: "quickstart" }
];
const defaultGuide = "native";
const platforms = [
  { label: "Android", value: "android" },
  { label: "iOS", value: "ios" }
];
const defaultPlatform = isMacOS ? "ios" : "android";
const oses = [
  { label: "macOS", value: "macos" },
  { label: "Windows", value: "windows" },
  { label: "Linux", value: "linux" }
];
const defaultOs = isMacOS ? "macos" : isWindows ? "windows" : "linux";
const getDevNotesTabs = (tabs = ["android", "ios", "web", "windows"]) => [
  tabs.includes("android") ? { label: "Android", value: "android" } : void 0,
  tabs.includes("ios") ? { label: "iOS", value: "ios" } : void 0,
  tabs.includes("web") ? { label: "Web", value: "web" } : void 0,
  tabs.includes("windows") ? { label: "Windows", value: "windows" } : void 0
].filter(Boolean);
var TabsConstants_default = {
  defaultGuide,
  defaultJsDebugger,
  defaultOs,
  defaultPackageManager,
  defaultPlatform,
  defaultSyntax,
  defaultAndroidLanguage,
  defaultAppleLanguage,
  defaultJavaScriptSpecLanguages,
  getDevNotesTabs,
  guides,
  oses,
  packageManagers,
  platforms,
  syntax,
  androidLanguages,
  appleLanguages,
  javaScriptSpecLanguages,
  jsDebuggers,
  snackLanguages,
  defaultSnackLanguage
};


/***/ }),

/***/ 52553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TabItem_exports = {};
__export(TabItem_exports, {
  default: () => TabItem
});
module.exports = __toCommonJS(TabItem_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(25154));
function TabItem({ children, hidden, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "tabpanel",
      className: (0, import_clsx.default)(import_styles_module.default.tabItem, className),
      ...{ hidden },
      children
    }
  );
}


/***/ }),

/***/ 34103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Tabs_exports = {};
__export(Tabs_exports, {
  default: () => Tabs
});
module.exports = __toCommonJS(Tabs_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __webpack_require__(63696);
var import_clsx = __toESM(__webpack_require__(78784));
var import_internal = __webpack_require__(64012);
var import_useIsBrowser = __toESM(__webpack_require__(64062));
var import_styles_module = __toESM(__webpack_require__(63910));
function TabList({ className, block, selectedValue, selectValue, tabValues }) {
  const tabRefs = [];
  const { blockElementScrollPositionUntilNextRender } = (0, import_internal.useScrollPositionBlocker)();
  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex].value;
    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
    }
  };
  const handleKeydown = (event) => {
    let focusElement = null;
    switch (event.key) {
      case "Enter": {
        handleTabChange(event);
        break;
      }
      case "ArrowRight": {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] ?? tabRefs[0];
        break;
      }
      case "ArrowLeft": {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement == null ? void 0 : focusElement.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "ul",
    {
      role: "tablist",
      "aria-orientation": "horizontal",
      className: (0, import_clsx.default)(
        "tabs",
        {
          "tabs--block": block
        },
        className
      ),
      children: tabValues.map(({ value, label, attributes }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "li",
        {
          role: "tab",
          tabIndex: selectedValue === value ? 0 : -1,
          "aria-selected": selectedValue === value,
          ref: (tabControl) => tabRefs.push(tabControl),
          onKeyDown: handleKeydown,
          onClick: handleTabChange,
          ...attributes,
          className: (0, import_clsx.default)("tabs__item", import_styles_module.default.tabItem, attributes == null ? void 0 : attributes.className, {
            "tabs__item--active": selectedValue === value
          }),
          children: label ?? value
        },
        value
      ))
    }
  );
}
function TabContent({ lazy, children, selectedValue }) {
  const childTabs = (Array.isArray(children) ? children : [children]).filter(
    Boolean
  );
  if (lazy) {
    const selectedTabItem = childTabs.find(
      (tabItem) => tabItem.props.value === selectedValue
    );
    if (!selectedTabItem) {
      return null;
    }
    return (0, import_react.cloneElement)(selectedTabItem, {
      className: (0, import_clsx.default)("margin-top--md", selectedTabItem.props.className)
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "margin-top--md", children: childTabs.map(
    (tabItem, i) => (0, import_react.cloneElement)(tabItem, {
      key: i,
      hidden: tabItem.props.value !== selectedValue
    })
  ) });
}
function TabsComponent(props) {
  const tabs = (0, import_internal.useTabs)(props);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)("tabs-container", import_styles_module.default.tabList), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabList, { ...tabs, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabContent, { ...tabs, ...props })
  ] });
}
function Tabs(props) {
  const isBrowser = (0, import_useIsBrowser.default)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    TabsComponent,
    {
      ...props,
      children: (0, import_internal.sanitizeTabsChildren)(props.children)
    },
    String(isBrowser)
  );
}


/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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