"use strict";
exports.id = 16031;
exports.ids = [16031];
exports.modules = {

/***/ 99347:
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
	id: 'headless-js-android',
	title: 'Headless JS（后台任务）'
};
const contentTitle = undefined;
const metadata = {
  "id": "headless-js-android",
  "title": "Headless JS（后台任务）",
  "description": "Headless JS 是一种使用 js 在后台执行任务的方法。它可以用来在后台同步数据、处理推送通知或是播放音乐等等。",
  "source": "@site/versioned_docs/version-0.72/headless-js-android.md",
  "sourceDirName": ".",
  "slug": "/headless-js-android",
  "permalink": "/docs/0.72/headless-js-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/headless-js-android.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "headless-js-android",
    "title": "Headless JS（后台任务）"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Appendix",
    "permalink": "/docs/0.72/new-architecture-appendix"
  },
  "next": {
    "title": "打包发布",
    "permalink": "/docs/0.72/signed-apk-android"
  }
};
const assets = {

};



const toc = [{
  "value": "JS 端的 API",
  "id": "js-端的-api",
  "level": 2
}, {
  "value": "Java 端的 API",
  "id": "java-端的-api",
  "level": 2
}, {
  "value": "重试",
  "id": "重试",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Headless JS 是一种使用 js 在后台执行任务的方法。它可以用来在后台同步数据、处理推送通知或是播放音乐等等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "js-端的-api",
      children: "JS 端的 API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先我们要通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AppRegistry"
      }), "来注册一个异步函数，这个函数我们称之为“任务”。注册方式类似在 index.js 中注册 RN 应用："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { AppRegistry } from 'react-native';\nAppRegistry.registerHeadlessTask('SomeTaskName', () =>\n  require('SomeTaskName')\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后创建 require 中引用的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SomeTaskName.js"
      }), "文件:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "module.exports = async taskData => {\n  // 要做的任务\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以在任务中处理任何事情（网络请求、定时器等等），但唯独", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "不要涉及用户界面"
      }), "！在任务完成后（例如在 promise 中调用 resolve），RN 会进入一个“暂停”模式，直到有新任务需要执行或者是应用回到前台。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "java-端的-api",
      children: "Java 端的 API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["没错，我们还需要一些原生代码，但是请放心并不麻烦。首先需要像下面这样继承", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HeadlessJsTaskService"
      }), "，然后覆盖", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getTaskConfig"
      }), "方法的实现："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "package com.your_application_name;\nimport android.content.Intent;\nimport android.os.Bundle;\nimport com.facebook.react.HeadlessJsTaskService;\nimport com.facebook.react.bridge.Arguments;\nimport com.facebook.react.jstasks.HeadlessJsTaskConfig;\nimport javax.annotation.Nullable;\n\npublic class MyTaskService extends HeadlessJsTaskService {\n\n  @Override\n  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {\n    Bundle extras = intent.getExtras();\n    if (extras != null) {\n      return new HeadlessJsTaskConfig(\n          \"SomeTaskName\",\n          Arguments.fromBundle(extras),\n          5000, // 任务的超时时间\n          false // 可选参数：是否允许任务在前台运行，默认为false\n        );\n    }\n    return null;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后记得把服务添加到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AndroidManifest"
      }), "文件里："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<service android:name=\"com.example.MyTaskService\" />\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["好了，现在当你", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/reference/android/content/Context.html#startService(android.content.Intent)",
        children: "启动服务时"
      }), "（例如一个周期性的任务或是响应一些系统事件/广播），JS 任务就会开始执行。例如："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "Intent service = new Intent(getApplicationContext(), MyTaskService.class);\nBundle bundle = new Bundle();\n\nbundle.putString(\"foo\", \"bar\");\nservice.putExtras(bundle);\n\ngetApplicationContext().startService(service);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "重试",
      children: "重试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["By default, the headless JS task will not perform any retries. In order to do so, you need to create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HeadlessJsRetryPolicy"
      }), " and throw a specfic ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Error"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LinearCountingRetryPolicy"
      }), " is an implementation of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HeadlessJsRetryPolicy"
      }), " that allows you to specify a maximum number of retries with a fixed delay between each attempt. If that does not suit your needs then you can easily implement your own ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HeadlessJsRetryPolicy"
      }), ". These policies can simply be passed as an extra argument to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HeadlessJsTaskConfig"
      }), " constructor, e.g."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "HeadlessJsRetryPolicy retryPolicy = new LinearCountingRetryPolicy(\n3, // Max number of retry attempts\n1000 // Delay between each retry attempt\n);\nreturn new HeadlessJsTaskConfig(\n'SomeTaskName',\nArguments.fromBundle(extras),\n5000,\nfalse,\nretryPolicy\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A retry attempt will only be made when a specific ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Error"
      }), " is thrown. Inside a headless JS task, you can import the error and throw it when a retry attempt is required."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import {HeadlessJsTaskError} from 'HeadlessJsTask';\nmodule.exports = async (taskData) => {\nconst condition = ...;\nif (!condition) {\n  throw new HeadlessJsTaskError();\n}\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you wish all errors to cause a retry attempt, you will need to catch them and throw the above error."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The function passed to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setTimeout"
        }), " does not always behave as expected. Instead the function is called only when the application is launched again. If you just need to wait, use the retry functionality."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["默认情况下，如果应用正在前台运行时尝试执行任务，那么应用会崩溃。这是为了防止开发者在任务中处理太多逻辑而拖慢用户界面。如果你必须要这么做，那么可以设置第四个参数为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "false"
        }), "来更改这一限制。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果你是通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "BroadcastReceiver"
        }), "来启动的服务，那么谨记在从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "onReceive()"
        }), "返回之前要调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "HeadlessJsTaskService.acquireWakeLockNow()"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们可以使用 Java API 来开启一个 service。首先你需要考虑好 Service 启动的时机，并据此实现相关逻辑。下面是一个使用 Service 来处理网络连接变化的简单范例。\n接下来的几行代码展示了如何在 Android Manifest 文件中注册一个Broadcast Receiver。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-xml",
        children: "<receiver android:name=\".NetworkChangeReceiver\" >\n  <intent-filter>\n    <action android:name=\"android.net.conn.CONNECTIVITY_CHANGE\" />\n  </intent-filter>\n</receiver>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个 Broadcast Receiver 主要在 onReceive 函数中处理广播 Intent 。这是一个让你确认 App 是否在前台工作的绝佳时机。如果 App 当前不在前台工作，那么我们就可以开始准备我们用来启动 Service 的 Intent 了。额外提及一点：如果有信息需要传递给Service，可以使用 putExtra 方法把信息打包成 bundle携带。当然也可以不传递任何信息（但是，始终谨记 bundle 只能够承载那些 parcelable 的值）。在最后，Service 将获取到 wakelock 并启动起来。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class NetworkChangeReceiver extends BroadcastReceiver {\n\n    @Override\n    public void onReceive(final Context context, final Intent intent) {\n        /**\n          这部分代码会在每次网络状态变化时调用，比如掉线的时候\n        **/\n        if (!isAppOnForeground((context))) {\n            /**\n              启动服务并发送当前的网络状态信息\n            **/\n            boolean hasInternet = isNetworkAvailable(context);\n            Intent serviceIntent = new Intent(context, MyTaskService.class);\n            serviceIntent.putExtra(\"hasInternet\", hasInternet);\n            context.startService(serviceIntent);\n            HeadlessJsTaskService.acquireWakeLockNow(context);\n        }\n    }\n\n    private boolean isAppOnForeground(Context context) {\n        /**\n          我们需要先检查应用当前是否在前台运行，否则应用会崩溃。\n         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not\n        **/\n        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);\n        List<ActivityManager.RunningAppProcessInfo> appProcesses =\n        activityManager.getRunningAppProcesses();\n        if (appProcesses == null) {\n            return false;\n        }\n        final String packageName = context.getPackageName();\n        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {\n            if (appProcess.importance ==\n            ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&\n             appProcess.processName.equals(packageName)) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static boolean isNetworkAvailable(Context context) {\n        ConnectivityManager cm = (ConnectivityManager)\n        context.getSystemService(Context.CONNECTIVITY_SERVICE);\n        NetworkInfo netInfo = cm.getActiveNetworkInfo();\n        return (netInfo != null && netInfo.isConnected());\n    }\n\n\n}\n"
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