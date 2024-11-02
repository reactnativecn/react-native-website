"use strict";
exports.id = 43843;
exports.ids = [43843];
exports.modules = {

/***/ 63039:
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
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    title: "注意",
    type: "caution",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个文档仍然是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "实验性"
      }), "的，随着我们的迭代，细节会有变化。欢迎在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/reactwg/react-native-new-architecture/discussions/8",
        children: "工作小组内的讨论"
      }), "中分享你的反馈。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此外，它还包含几个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "手动步骤"
      }), "。请注意新架构尚未稳定下来，最终的开发者体验会继续迭代改善。我们正在努力开发工具、模板和库，以帮助你在新架构上快速入门，而不需要经历整个设置过程。"]
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

/***/ 76467:
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
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63039);


const frontMatter = {
	id: 'new-architecture-app-renderer-android',
	title: '在 Android 上启用 Fabric'
};
const contentTitle = undefined;
const metadata = {
  "id": "new-architecture-app-renderer-android",
  "title": "在 Android 上启用 Fabric",
  "description": "Make sure your application meets all the prerequisites.",
  "source": "@site/versioned_docs/version-0.75/new-architecture-app-renderer-android.md",
  "sourceDirName": ".",
  "slug": "/new-architecture-app-renderer-android",
  "permalink": "/docs/new-architecture-app-renderer-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-android.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "new-architecture-app-renderer-android",
    "title": "在 Android 上启用 Fabric"
  }
};
const assets = {

};




const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "1. Provide a <code>JSIModulePackage</code> inside your <code>ReactNativeHost</code>",
  "id": "1-provide-a-jsimodulepackage-inside-your-reactnativehost",
  "level": 2
}, {
  "value": "2. Make sure your call <code>setIsFabric</code> on your Activity’s <code>ReactRootView</code>",
  "id": "2-make-sure-your-call-setisfabric-on-your-activitys-reactrootview",
  "level": 2
}, {
  "value": "Migrating Android ViewManagers",
  "id": "migrating-android-viewmanagers",
  "level": 2
}, {
  "value": "JavaScript changes",
  "id": "javascript-changes",
  "level": 3
}, {
  "value": "Native/Java Changes",
  "id": "nativejava-changes",
  "level": 3
}, {
  "value": "Native/C++ Changes",
  "id": "nativec-changes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Make sure your application meets all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "new-architecture-app-intro",
        children: "prerequisites"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "1-provide-a-jsimodulepackage-inside-your-reactnativehost",
      children: ["1. Provide a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JSIModulePackage"
      }), " inside your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In order to enable Fabric in your app, you would need to add a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JSIModulePackage"
      }), " inside your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), ". If you followed the TurboModule section of this guide, you probably already know where to find your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), ". If not, you can locate your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " by searching for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getReactNativeHost()"
      }), ". The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " is usually located inside your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Application"
      }), " class."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once you located it, you need to add the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getJSIModulePackage"
      }), " method as from the snippet below:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title='MyApplication.java'",
        children: "public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost =\n    new ReactNativeHost(this) {\n\n      // Add those lines:\n      @Nullable\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new JSIModulePackage() {\n          @Override\n          public List<JSIModuleSpec> getJSIModules(\n              final ReactApplicationContext reactApplicationContext,\n              final JavaScriptContextHolder jsContext) {\n            final List<JSIModuleSpec> specs = new ArrayList<>();\n            specs.add(new JSIModuleSpec() {\n              @Override\n              public JSIModuleType getJSIModuleType() {\n                return JSIModuleType.UIManager;\n              }\n\n              @Override\n              public JSIModuleProvider<UIManager> getJSIModuleProvider() {\n                final ComponentFactory componentFactory = new ComponentFactory();\n                CoreComponentsRegistry.register(componentFactory);\n                final ReactInstanceManager reactInstanceManager = getReactInstanceManager();\n\n                ViewManagerRegistry viewManagerRegistry =\n                    new ViewManagerRegistry(\n                        reactInstanceManager.getOrCreateViewManagers(\n                            reactApplicationContext));\n\n                return new FabricJSIModuleProvider(\n                    reactApplicationContext,\n                    componentFactory,\n                    new EmptyReactNativeConfig(),\n                    viewManagerRegistry);\n              }\n            });\n            return specs;\n          }\n        };\n      }\n    };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "2-make-sure-your-call-setisfabric-on-your-activitys-reactrootview",
      children: ["2. Make sure your call ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setIsFabric"
      }), " on your Activity’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactRootView"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Inside your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Activity"
      }), " class, you need to make sure you’re calling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setIsFabric"
      }), " on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactRootView"
      }), ".\nIf you don’t have a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactActivityDelegate"
      }), " you might need to create one."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class MainActivity extends ReactActivity {\n\n  // Add the Activity Delegate, if you don't have one already.\n  public static class MainActivityDelegate extends ReactActivityDelegate {\n\n    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {\n      super(activity, mainComponentName);\n    }\n\n    @Override\n    protected ReactRootView createRootView() {\n      ReactRootView reactRootView = new ReactRootView(getContext());\n\n      // Make sure to call setIsFabric(true) on your ReactRootView\n      reactRootView.setIsFabric(true);\n      return reactRootView;\n    }\n  }\n\n  // Make sure to override the `createReactActivityDelegate()` method.\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new MainActivityDelegate(this, getMainComponentName());\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The crucial part in this code is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "reactRootView.setIsFabric(true)"
      }), " which will enable the new renderer for this Activity."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now verify that everything works correctly by running your android app:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "yarn react-native run-android\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In your Metro terminal log, you will now see the following log to confirm that Fabric is running correctly:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BUNDLE ./App.js\nLOG Running \"App\" with {\"fabric\":true,\"initialProps\":{},\"rootTag\":1}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "migrating-android-viewmanagers",
      children: "Migrating Android ViewManagers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["First, make sure you followed the instructions to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#enabling-the-new-renderer-fabric-in-your-android-application",
        children: "Enabling the New Renderer (Fabric) in Your Android Application"
      }), ". Plus we will also assume that you followed the instructions from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#enabling-the-new-nativemodule-system-turbomodule-in-your-android-application",
        children: "Enabling the New NativeModule System (TurboModule) in Your Android Application"
      }), " as the Makefile (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Android.mk"
      }), ") and other native builds setup steps are presented over there and won’t be repeated here."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "javascript-changes",
      children: "JavaScript changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Make sure your other JS changes are ready to go by following Preparing your JavaScript codebase for the new React Native Renderer (Fabric)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Replace the call to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "requireNativeComponent"
        }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "codegenNativeComponent"
        }), ". This tells the JS codegen to start generating the native implementation of the component, consisting of C++ and Java classes. This is how it looks for the WebView component:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ts",
        children: "import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\n// babel-plugin-codegen will replace the function call to use NativeComponentRegistry\n// 'RCTWebView' is interopped by RCTFabricComponentsPlugins\n\nexport default (codegenNativeComponent<NativeProps>(\n  'RCTWebView',\n): HostComponent<NativeProps>);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "[Flow users]"
        }), " Make sure your native component has Flow types for its props, since the JS codegen uses these types to generate the type-safe native implementation of the component. The codegen generates C++ classes during the build time, which guarantees that the native implementation is always up-to-date with its JS interface. Use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/main/Libraries/Types/CodegenTypes.js#L28-L30",
          children: "these c++ compatible types"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"RNTMyNativeViewNativeComponent.js\"",
        children: "import type {Int32} from 'react-native/Libraries/Types/CodegenTypes';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\nimport type {HostComponent} from 'react-native';\nimport type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps, // This is required.\n  someNumber: Int32,\n|}>;\n\n[...]\n\nexport default (codegenNativeComponent<NativeProps>(\n  'RNTMyNativeView',\n): HostComponent<NativeProps>);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "[TypeScript users]"
        }), " We are currently investigating a support for TypeScript."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "nativejava-changes",
      children: "Native/Java Changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Update (or Create) your ViewManager to use the generated classes from the Codegen."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Specifically you will have to implement the generated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ViewManagerInterface"
      }), " and to pass events to the generated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ViewManagerDelegate."
      }), "\nYour ViewManager could follow this structure. The MyNativeView class in this example is an Android View implementation (like a subclass of LinearLayout, Button, TextView, etc.)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title='MyNativeViewManager.java'",
        children: "// View manager for MyNativeView components.\n@ReactModule(name = MyNativeViewManager.REACT_CLASS)\npublic class MyNativeViewManager extends SimpleViewManager<MyNativeView>\n        implements RNTMyNativeViewManagerInterface<MyNativeView> {\n\n  public static final String REACT_CLASS = \"RNTMyNativeView\";\n\n  private final ViewManagerDelegate<MyNativeView> mDelegate;\n\n  public MyNativeViewManager() {\n    mDelegate = new RNTMyNativeViewManagerDelegate<>(this);\n  }\n\n  @Nullable\n  @Override\n  protected ViewManagerDelegate<MyNativeView> getDelegate() {\n    return mDelegate;\n  }\n\n  @NonNull\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @NonNull\n  @Override\n  protected MyNativeView createViewInstance(@NonNull ThemedReactContext reactContext) {\n    return new MyNativeView(reactContext);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Add your ViewManager to one of the Packages loaded by your Application."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Specifically inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " , update ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages"
      }), " method to include the following:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n    @Override\n    public boolean getUseDeveloperSupport() { /* ... */ }\n\n    @Override\n    protected List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n\n      // ... other packages or `TurboReactPackage added` here...\n\n      // Add those lines.\n      packages.add(new ReactPackage() {\n        @NonNull\n        @Override\n        public List<NativeModule> createNativeModules(\n            @NonNull ReactApplicationContext reactContext) {\n          return Collections.emptyList();\n        }\n\n        @NonNull\n        @Override\n        public List<ViewManager> createViewManagers(\n            @NonNull ReactApplicationContext reactContext) {\n          // Your ViewManager is returned here.\n          return Collections.singletonList(new MyNativeViewManager());\n        }\n      });\n      return packages;\n    }\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Add a Fabric Component Registry"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You need to create a new component Registry that will allow you to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "register"
      }), " your components to be discovered by Fabric. Let’s create the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyComponentsRegistry"
      }), " file with the following content."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As you can see, some methods are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "native()"
      }), " which we will implement in C++ in the following paragraph."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "package com.awesomeproject;\n\nimport com.facebook.jni.HybridData;\nimport com.facebook.proguard.annotations.DoNotStrip;\nimport com.facebook.react.fabric.ComponentFactory;\nimport com.facebook.soloader.SoLoader;\n\n@DoNotStrip\npublic class MyComponentsRegistry {\n  static {\n    SoLoader.loadLibrary(\"fabricjni\");\n  }\n\n  @DoNotStrip private final HybridData mHybridData;\n\n  @DoNotStrip\n  private native HybridData initHybrid(ComponentFactory componentFactory);\n\n  @DoNotStrip\n  private MyComponentsRegistry(ComponentFactory componentFactory) {\n    mHybridData = initHybrid(componentFactory);\n  }\n\n  @DoNotStrip\n  public static MyComponentsRegistry register(ComponentFactory componentFactory) {\n    return new MyComponentsRegistry(componentFactory);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Register your custom Fabric Component Registry"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, let’s edit the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getJSIModulePackage"
      }), " from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " to also register your Component Registry alongside the Core one:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n    @Nullable\n    @Override\n    protected JSIModulePackage getJSIModulePackage() {\n      return new JSIModulePackage() {\n        @Override\n        public List<JSIModuleSpec> getJSIModules(\n                final ReactApplicationContext reactApplicationContext,\n                final JavaScriptContextHolder jsContext) {\n          final List<JSIModuleSpec> specs = new ArrayList<>();\n          specs.add(new JSIModuleSpec() {\n            // ...\n\n            @Override\n            public JSIModuleProvider<UIManager> getJSIModuleProvider() {\n              final ComponentFactory componentFactory = new ComponentFactory();\n              CoreComponentsRegistry.register(componentFactory);\n\n              // Add this line just below CoreComponentsRegistry.register\n              MyComponentsRegistry.register(componentFactory);\n\n              // ...\n            }\n          });\n          return specs;\n        }\n      };\n    }\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "nativec-changes",
      children: "Native/C++ Changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It’s now time to provide an implementation for your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyComponentsRegistry"
      }), " in C++:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
          children: ["Create a header file: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "MyComponentsRegistry.h"
          })]
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The file should be placed inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main/jni"
      }), " folder.\nPlease note that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "kJavaDescriptor"
      }), " should be adapted to follow the package name you picked for your project."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        metastring: "title=\"MyComponentsRegistry.h\"",
        children: "#pragma once\n\n#include <ComponentFactory.h>\n#include <fbjni/fbjni.h>\n#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>\n#include <react/renderer/componentregistry/ComponentDescriptorRegistry.h>\n\nnamespace facebook {\nnamespace react {\n\nclass MyComponentsRegistry\n    : public facebook::jni::HybridClass<MyComponentsRegistry> {\n  public:\n  constexpr static auto kJavaDescriptor =\n      \"Lcom/awesomeproject/MyComponentsRegistry;\";\n\n  static void registerNatives();\n\n  MyComponentsRegistry(ComponentFactory *delegate);\n\n  private:\n  friend HybridBase;\n\n  static std::shared_ptr<ComponentDescriptorProviderRegistry const>\n  sharedProviderRegistry();\n\n  const ComponentFactory *delegate_;\n\n  static jni::local_ref<jhybriddata> initHybrid(\n      jni::alias_ref<jclass>,\n      ComponentFactory *delegate);\n};\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
          children: ["Create an implementation file: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "MyComponentsRegistry.cpp"
          })]
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The file should be placed inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main/jni"
      }), " folder alongside `MyComponentsRegistry.h"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        metastring: "title=\"MyComponentsRegistry.cpp\"",
        children: "#include \"MyComponentsRegistry.h\"\n\n#include <CoreComponentsRegistry.h>\n#include <fbjni/fbjni.h>\n#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>\n#include <react/renderer/components/rncore/ComponentDescriptors.h>\n#include <react/renderer/components/samplelibrary/ComponentDescriptors.h>\n\nnamespace facebook {\nnamespace react {\n\nMyComponentsRegistry::MyComponentsRegistry(\n    ComponentFactory *delegate)\n    : delegate_(delegate) {}\n\nstd::shared_ptr<ComponentDescriptorProviderRegistry const>\nMyComponentsRegistry::sharedProviderRegistry() {\n  auto providerRegistry = CoreComponentsRegistry::sharedProviderRegistry();\n\n  providerRegistry->add(concreteComponentDescriptorProvider<\n                        RNTMyNativeViewComponentDescriptor>());\n\n  return providerRegistry;\n}\n\njni::local_ref<MyComponentsRegistry::jhybriddata>\nMyComponentsRegistry::initHybrid(\n    jni::alias_ref<jclass>,\n    ComponentFactory *delegate) {\n  auto instance = makeCxxInstance(delegate);\n\n  auto buildRegistryFunction =\n      [](EventDispatcher::Weak const &eventDispatcher,\n          ContextContainer::Shared const &contextContainer)\n      -> ComponentDescriptorRegistry::Shared {\n    auto registry = MyComponentsRegistry::sharedProviderRegistry()\n                        ->createComponentDescriptorRegistry(\n                            {eventDispatcher, contextContainer});\n\n    auto mutableRegistry =\n        std::const_pointer_cast<ComponentDescriptorRegistry>(registry);\n\n    mutableRegistry->setFallbackComponentDescriptor(\n        std::make_shared<UnimplementedNativeViewComponentDescriptor>(\n            ComponentDescriptorParameters{\n                eventDispatcher, contextContainer, nullptr}));\n\n    return registry;\n  };\n\n  delegate->buildRegistryFunction = buildRegistryFunction;\n  return instance;\n}\n\nvoid MyComponentsRegistry::registerNatives() {\n  registerHybrid({\n      makeNativeMethod(\"initHybrid\", MyComponentsRegistry::initHybrid),\n  });\n}\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Load your file in the OnLoad.cpp"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you followed the TurboModule instructions, you should have a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "OnLoad.cpp"
      }), " file inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main/jni"
      }), " folder. There you should add a line to load the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyComponentsRegistry"
      }), " class:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        metastring: "title=\"OnLoad.cpp\"",
        children: "#include <fbjni/fbjni.h>\n#include \"MyApplicationTurboModuleManagerDelegate.h\"\n// Add this import\n#include \"MyComponentsRegistry.h\"\n\nJNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *) {\n  return facebook::jni::initialize(vm, [] {\n    facebook::react::MyApplicationTurboModuleManagerDelegate::registerNatives();\n\n    // Add this line\n    facebook::react::MyComponentsRegistry::registerNatives();\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now verify that everything works correctly by running your android app:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "yarn react-native run-android\n"
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