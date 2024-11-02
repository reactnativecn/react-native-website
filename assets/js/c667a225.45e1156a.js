exports.id = 65455;
exports.ids = [65455,31753,58449];
exports.modules = {

/***/ 75756:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43023);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34103);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52553);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64034);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__);


const frontMatter = {
	id: 'turbo-native-modules-android',
	title: 'Turbo Native Modules: Android'
};
const contentTitle = undefined;
const metadata = {
  "id": "turbo-native-modules-android",
  "title": "Turbo Native Modules: Android",
  "description": "Now it's time to write some Android platform code to make sure localStorage survives after the application is closed.",
  "source": "@site/../cndocs/turbo-native-modules-android.md",
  "sourceDirName": ".",
  "slug": "/turbo-native-modules-android",
  "permalink": "/docs/next/turbo-native-modules-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/turbo-native-modules-android.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "turbo-native-modules-android",
    "title": "Turbo Native Modules: Android"
  }
};
const assets = {

};






const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now it's time to write some Android platform code to make sure ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "localStorage"
      }), " survives after the application is closed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The first step is to implement the generated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeLocalStorageSpec"
      }), " interface:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            metastring: "title=\"android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.java\"",
            children: "package com.nativelocalstorage;\n\nimport android.content.Context;\nimport android.content.SharedPreferences;\nimport com.nativelocalstorage.NativeLocalStorageSpec;\nimport com.facebook.react.bridge.ReactApplicationContext;\n\npublic class NativeLocalStorageModule extends NativeLocalStorageSpec {\n\n  private static final String NAME = \"NativeLocalStorage\";\n\n  public NativeLocalStorageModule(ReactApplicationContext reactContext) {\n    super(reactContext);\n  }\n\n  @Override\n  public String getName() {\n    return NAME;\n  }\n\n  @Override\n  public void setItem(String value, String key) {\n    SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE);\n    SharedPreferences.Editor editor = sharedPref.edit();\n    editor.putString(key, value);\n    editor.apply();\n  }\n\n  @Override\n  public String getItem(String key) {\n    SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE);\n    String username = sharedPref.getString(key, null);\n    return username;\n  }\n\n  @Override\n  public void removeItem(String key) {\n    SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE);\n    sharedPref.edit().remove(key).apply();\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.kt\"",
            children: "package com.nativelocalstorage\n\nimport android.content.Context\nimport android.content.SharedPreferences\nimport com.nativelocalstorage.NativeLocalStorageSpec\nimport com.facebook.react.bridge.ReactApplicationContext\n\nclass NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {\n\n  override fun getName() = NAME\n\n  override fun setItem(value: String, key: String) {\n    val sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE)\n    val editor = sharedPref.edit()\n    editor.putString(key, value)\n    editor.apply()\n  }\n\n  override fun getItem(key: String): String? {\n    val sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE)\n    val username = sharedPref.getString(key, null)\n    return username.toString()\n  }\n\n  override fun removeItem(key: String) {\n    val sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE)\n    val editor = sharedPref.edit()\n    editor.remove(key)\n    editor.apply()\n  }\n\n  override fun clear() {\n    val sharedPref = getReactApplicationContext().getSharedPreferences(\"my_prefs\", Context.MODE_PRIVATE)\n    val editor = sharedPref.edit()\n    editor.clear()\n    editor.apply()\n  }\n\n  companion object {\n    const val NAME = \"NativeLocalStorage\"\n  }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Next we need to create ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeLocalStoragePackage"
      }), ". It provides an object to register our Module in the React Native runtime, by wrapping it as a Turbo Native Package:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            metastring: "title=\"android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.java\"",
            children: "package com.nativelocalstorage;\n\nimport com.facebook.react.TurboReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.model.ReactModuleInfo;\nimport com.facebook.react.module.model.ReactModuleInfoProvider;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class NativeLocalStoragePackage extends TurboReactPackage {\n\n  @Override\n  public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n    if (name.equals(NativeLocalStorageModule.NAME)) {\n      return new NativeLocalStorageModule(reactContext);\n    } else {\n      return null;\n    }\n  }\n\n  @Override\n  public ReactModuleInfoProvider getReactModuleInfoProvider() {\n    return new ReactModuleInfoProvider() {\n      @Override\n      public Map<String, ReactModuleInfo> get() {\n        Map<String, ReactModuleInfo> map = new HashMap<>();\n        map.put(NativeLocalStorageModule.NAME, new ReactModuleInfo(\n          NativeLocalStorageModule.NAME,       // name\n          NativeLocalStorageModule.NAME,       // className\n          false, // canOverrideExistingModule\n          false, // needsEagerInit\n          false, // isCXXModule\n          true   // isTurboModule\n        ));\n        return map;\n      }\n    };\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.kt\"",
            children: "package com.nativelocalstorage\n\nimport com.facebook.react.TurboReactPackage\nimport com.facebook.react.bridge.NativeModule\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.react.module.model.ReactModuleInfo\nimport com.facebook.react.module.model.ReactModuleInfoProvider\n\nclass NativeLocalStoragePackage : TurboReactPackage() {\n\n  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =\n    if (name == NativeLocalStorageModule.NAME) {\n      NativeLocalStorageModule(reactContext)\n    } else {\n      null\n    }\n\n  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {\n    mapOf(\n      NativeLocalStorageModule.NAME to ReactModuleInfo(\n        _name = NativeLocalStorageModule.NAME,\n        _className = NativeLocalStorageModule.NAME,\n        _canOverrideExistingModule = false,\n        _needsEagerInit = false,\n        isCxxModule = false,\n        isTurboModule = true\n      )\n    )\n  }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, we need to tell the React Native in our main application how to find this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Package"
      }), ". We call this \"registering\" the package in React Native."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this case, you add it to be returned by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/8d8b8c343e62115a5509e1aed62047053c2f6e39/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/ReactNativeHost.java#L233",
        children: "getPackages"
      }), " method."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Later you’ll learn how to distribute your Turbo Native Modules as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/next/the-new-architecture/create-module-library#publish-the-library-on-npm",
          children: "npm packages"
        }), ", which our build tooling will autolink for you."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "android-language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            metastring: "title=\"android/app/src/main/java/com/turobmoduleexample/MainApplication.java\"",
            children: "package com.inappmodule;\n\nimport android.app.Application;\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactHost;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;\nimport com.facebook.react.defaults.DefaultReactHost;\nimport com.facebook.react.defaults.DefaultReactNativeHost;\nimport com.facebook.soloader.SoLoader;\n// highlight-add-next-line\nimport com.nativelocalstorage.NativeLocalStoragePackage;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MainApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost reactNativeHost = new DefaultReactNativeHost(this) {\n    @Override\n    public List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n      // Packages that cannot be autolinked yet can be added manually here, for example:\n      // packages.add(new MyReactNativePackage());\n      // highlight-add-next-line\n      packages.add(new NativeLocalStoragePackage());\n      return packages;\n    }\n\n    @Override\n    public String getJSMainModuleName() {\n      return \"index\";\n    }\n\n    @Override\n    public boolean getUseDeveloperSupport() {\n      return BuildConfig.DEBUG;\n    }\n\n    @Override\n    public boolean isNewArchEnabled() {\n      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;\n    }\n\n    @Override\n    public boolean isHermesEnabled() {\n      return BuildConfig.IS_HERMES_ENABLED;\n    }\n  };\n\n  @Override\n  public ReactHost getReactHost() {\n    return DefaultReactHost.getDefaultReactHost(getApplicationContext(), reactNativeHost);\n  }\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {\n      // If you opted-in for the New Architecture, we load the native entry point for this app.\n      DefaultNewArchitectureEntryPoint.load();\n    }\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"android/app/src/main/java/com/turobmoduleexample/MainApplication.kt\"",
            children: "package com.inappmodule\n\nimport android.app.Application\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactHost\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load\nimport com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost\nimport com.facebook.react.defaults.DefaultReactNativeHost\nimport com.facebook.soloader.SoLoader\n// highlight-add-next-line\nimport com.nativelocalstorage.NativeLocalStoragePackage\n\nclass MainApplication : Application(), ReactApplication {\n\n  override val reactNativeHost: ReactNativeHost =\n      object : DefaultReactNativeHost(this) {\n        override fun getPackages(): List<ReactPackage> =\n            PackageList(this).packages.apply {\n              // Packages that cannot be autolinked yet can be added manually here, for example:\n              // add(MyReactNativePackage())\n              // highlight-add-next-line\n              add(NativeLocalStoragePackage())\n            }\n\n        override fun getJSMainModuleName(): String = \"index\"\n\n        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG\n\n        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED\n        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED\n      }\n\n  override val reactHost: ReactHost\n    get() = getDefaultReactHost(applicationContext, reactNativeHost)\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {\n      // If you opted-in for the New Architecture, we load the native entry point for this app.\n      load()\n    }\n  }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now build and run your code on an emulator:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "package-manager",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPackageManager),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().packageManagers),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm run android\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn run android\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      width: "30%",
      height: "30%",
      playsinline: "true",
      autoplay: "true",
      muted: "true",
      loop: "true",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/docs/assets/turbo-native-modules/turbo-native-modules-android.webm",
        type: "video/webm"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/docs/assets/turbo-native-modules/turbo-native-modules-android.mp4",
        type: "video/mp4"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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

/***/ 28562:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43023);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34103);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52553);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64034);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__);


const frontMatter = {
	id: 'turbo-native-modules-ios',
	title: 'Turbo Native Modules: iOS'
};
const contentTitle = undefined;
const metadata = {
  "id": "turbo-native-modules-ios",
  "title": "Turbo Native Modules: iOS",
  "description": "Now it's time to write some iOS platform code to make sure localStorage survives after the application is closed.",
  "source": "@site/../cndocs/turbo-native-modules-ios.md",
  "sourceDirName": ".",
  "slug": "/turbo-native-modules-ios",
  "permalink": "/docs/next/turbo-native-modules-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/turbo-native-modules-ios.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "turbo-native-modules-ios",
    "title": "Turbo Native Modules: iOS"
  }
};
const assets = {

};






const toc = [{
  "value": "Prepare your Xcode Project",
  "id": "prepare-your-xcode-project",
  "level": 2
}, {
  "value": "Implement localStorage with NSUserDefaults",
  "id": "implement-localstorage-with-nsuserdefaults",
  "level": 2
}, {
  "value": "Build and run your code on a Simulator",
  "id": "build-and-run-your-code-on-a-simulator",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now it's time to write some iOS platform code to make sure ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "localStorage"
      }), " survives after the application is closed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "prepare-your-xcode-project",
      children: "Prepare your Xcode Project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We need to prepare your iOS project using Xcode. After completing these ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "6 steps"
      }), " you'll have ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTNativeLocalStorage"
      }), " that implements the generated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeLocalStorageSpec"
      }), " interface."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Open the CocoPods generated Xcode Workspace:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "cd ios\nopen TurboModuleExample.xcworkspace\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Open Xcode Workspace",
      src: "/docs/assets/turbo-native-modules/xcode/1.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Right click on app and select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New Group"
        }), ", call the new group ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeLocalStorage"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Right click on app and select New Group",
      src: "/docs/assets/turbo-native-modules/xcode/2.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeLocalStorage"
        }), " group, create ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New"
        }), "→", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "File from Template"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create a new file using the Cocoa Touch Class template",
      src: "/docs/assets/turbo-native-modules/xcode/3.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "Cocoa Touch Class"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Use the Cocoa Touch Class template",
      src: "/docs/assets/turbo-native-modules/xcode/4.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Name the Cocoa Touch Class ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTNativeLocalStorage"
        }), " with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "Objective-C"
        }), " language."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create an Objective-C RCTNativeLocalStorage class",
      src: "/docs/assets/turbo-native-modules/xcode/5.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Rename ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTNativeLocalStorage.m"
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTNativeLocalStorage.mm"
        }), " making it an Objective-C++ file."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Convert to and Objective-C++ file",
      src: "/docs/assets/turbo-native-modules/xcode/6.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "implement-localstorage-with-nsuserdefaults",
      children: "Implement localStorage with NSUserDefaults"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Start by updating ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTNativeLocalStorage.h"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"NativeLocalStorage/RCTNativeLocalStorage.h\"",
        children: "//  RCTNativeLocalStorage.h\n//  TurboModuleExample\n\n#import <Foundation/Foundation.h>\n// highlight-add-next-line\n#import <NativeLocalStorageSpec/NativeLocalStorageSpec.h>\n\nNS_ASSUME_NONNULL_BEGIN\n\n// highlight-remove-next-line\n@interface RCTNativeLocalStorage : NSObject\n// highlight-add-next-line\n@interface RCTNativeLocalStorage : NSObject <NativeLocalStorageSpec>\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Then update our implementation to use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSUserDefaults"
      }), " with a custom ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/documentation/foundation/nsuserdefaults/1409957-initwithsuitename",
        children: "suite name"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"NativeLocalStorage/RCTNativeLocalStorage.mm\"",
        children: "//  RCTNativeLocalStorage.m\n//  TurboModuleExample\n\n#import \"RCTNativeLocalStorage.h\"\n\nstatic NSString *const RCTNativeLocalStorageKey = @\"local-storage\";\n\n@interface RCTNativeLocalStorage()\n@property (strong, nonatomic) NSUserDefaults *localStorage;\n@end\n\n@implementation RCTNativeLocalStorage\n\nRCT_EXPORT_MODULE(NativeLocalStorage)\n\n- (id) init {\n  if (self = [super init]) {\n    _localStorage = [[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];\n  }\n  return self;\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {\n  return std::make_shared<facebook::react::NativeLocalStorageSpecJSI>(params);\n}\n\n- (NSString * _Nullable)getItem:(NSString *)key {\n  return [self.localStorage stringForKey:key];\n}\n\n- (void)setItem:(NSString *)value\n          key:(NSString *)key {\n  [self.localStorage setObject:value forKey:key];\n}\n\n- (void)removeItem:(NSString *)key {\n  [self.localStorage removeObjectForKey:key];\n}\n\n- (void)clear {\n  NSDictionary *keys = [self.localStorage dictionaryRepresentation];\n  for (NSString *key in keys) {\n    [self removeItem:key];\n  }\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Important things to note:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_EXPORT_MODULE"
        }), " exports and registers the module using the identifier we'll use to access it in the JavaScript environment: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeLocalStorage"
        }), ". See these ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "./legacy/native-modules-ios#module-name",
          children: "docs"
        }), " for more details."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["You can use Xcode to jump to the Codegen ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@protocol NativeLocalStorageSpec"
        }), ". You can also use Xcode to generate stubs for you."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "build-and-run-your-code-on-a-simulator",
      children: "Build and run your code on a Simulator"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "package-manager",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPackageManager),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().packageManagers),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm run ios\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn run ios\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      width: "30%",
      height: "30%",
      playsinline: "true",
      autoplay: "true",
      muted: "true",
      loop: "true",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/docs/assets/turbo-native-modules/turbo-native-modules-ios.webm",
        type: "video/webm"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/docs/assets/turbo-native-modules/turbo-native-modules-ios.mp4",
        type: "video/mp4"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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

/***/ 80258:
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
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34103);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52553);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64034);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _turbo_native_modules_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33988);
/* harmony import */ var _turbo_native_modules_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turbo_native_modules_components__WEBPACK_IMPORTED_MODULE_4__);


const frontMatter = {
	id: 'turbo-native-modules-introduction',
	title: 'Native Modules: Introduction'
};
const contentTitle = 'Native Modules';
const metadata = {
  "id": "turbo-native-modules-introduction",
  "title": "Native Modules: Introduction",
  "description": "Your React Native application code may need to interact with native platform APIs that aren't provided by React Native or an existing library. You can write the integration code yourself using a Turbo Native Module. This guide will show you how to write one.",
  "source": "@site/../cndocs/turbo-native-modules.md",
  "sourceDirName": ".",
  "slug": "/turbo-native-modules-introduction",
  "permalink": "/docs/next/turbo-native-modules-introduction",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/turbo-native-modules.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "turbo-native-modules-introduction",
    "title": "Native Modules: Introduction"
  },
  "sidebar": "docs",
  "previous": {
    "title": "桥接原生平台",
    "permalink": "/docs/next/native-platform"
  },
  "next": {
    "title": "Cross-Platform with C++",
    "permalink": "/docs/next/the-new-architecture/pure-cxx-modules"
  }
};
const assets = {

};







const toc = [{
  "value": "Native Persistent Storage",
  "id": "native-persistent-storage",
  "level": 2
}, {
  "value": "1. Declare Typed Specification",
  "id": "1-declare-typed-specification",
  "level": 3
}, {
  "value": "2. Configure Codegen to run",
  "id": "2-configure-codegen-to-run",
  "level": 3
}, {
  "value": "3. Write Application Code using the Turbo Native Module",
  "id": "3-write-application-code-using-the-turbo-native-module",
  "level": 3
}, {
  "value": "4. Write your Native Platform code",
  "id": "4-write-your-native-platform-code",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "native-modules",
        children: "Native Modules"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Your React Native application code may need to interact with native platform APIs that aren't provided by React Native or an existing library. You can write the integration code yourself using a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Turbo Native Module"
      }), ". This guide will show you how to write one."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The basic steps are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "define a typed JavaScript specification"
        }), " using one of the most popular JavaScript type annotation languages: Flow or TypeScript;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "configure your dependency management system to run Codegen"
        }), ", which converts the specification into native language interfaces;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "write your application code"
        }), " using your specification; and"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "write your native platform code using the generated interfaces"
        }), " to write and hook your native code into the React Native runtime environment."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Lets work through each of these steps by building an example Turbo Native Module. The rest of this guide assume that you have created your application running the command:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli@latest init TurboModuleExample --version 0.76.0\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "native-persistent-storage",
      children: "Native Persistent Storage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This guide will show you how to write an implementation of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://html.spec.whatwg.org/multipage/webstorage.html#dom-localstorage-dev",
        children: "Web Storage API"
      }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "localStorage"
      }), ". The API is relatable to a React developer who might be writing application code on your project."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To make this work on mobile, we need to use Android and iOS APIs:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Android: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.android.com/reference/android/content/SharedPreferences",
          children: "SharedPreferences"
        }), ", and"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["iOS: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.apple.com/documentation/foundation/nsuserdefaults",
          children: "NSUserDefaults"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-declare-typed-specification",
      children: "1. Declare Typed Specification"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native provides a tool called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/next/the-new-architecture/what-is-codegen",
        children: "Codegen"
      }), ", which takes a specification written in TypeScript or Flow and generates platform specific code for Android and iOS. The specification declares the methods and data types that will pass back and forth between your native code and the React Native JavaScript runtime. A Turbo Native Module is both your specification, the native code you write, and the Codegen interfaces generated from your specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To create a specs file:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Inside the root folder of your app, create a new folder called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "specs"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Create a new file called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeLocalStorage.ts"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You can see all of the types you can use in your specification and the native types that are generated in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/next/appendix",
          children: "Appendix"
        }), " documentation."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here is an implementation of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "localStorage"
      }), " specification:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultJavaScriptSpecLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().javaScriptSpecLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            metastring: "title=\"specs/NativeLocalStorage.ts\"",
            children: "import type {TurboModule} from 'react-native';\nimport {TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  setItem(value: string, key: string): void;\n  getItem(key: string): string | null;\n  removeItem(key: string): void;\n  clear(): void;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeLocalStorage',\n) as Spec;\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-flow",
            metastring: "title=\"NativeLocalStorage.js\"",
            children: "import type {TurboModule} from 'react-native';\nimport {TurboModule, TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  setItem(value: string, key: string): void;\n  getItem(key: string): ?string;\n  removeItem(key: string): void;\n  clear(): void;\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-configure-codegen-to-run",
      children: "2. Configure Codegen to run"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The specification is used by the React Native Codegen tools to generate platform specific interfaces and boilerplate for us. To do this, Codegen needs to know where to find our specification and what to do with it. Update your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " to include:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"package.json\"",
        children: "     \"start\": \"react-native start\",\n     \"test\": \"jest\"\n   },\n   // highlight-add-start\n   \"codegenConfig\": {\n     \"name\": \"NativeLocalStorageSpec\",\n     \"type\": \"modules\",\n     \"jsSrcsDir\": \"specs\",\n     \"android\": {\n       \"javaPackageName\": \"com.nativelocalstorage\"\n     }\n   },\n   // highlight-add-end\n   \"dependencies\": {\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With everything wired up for Codegen, we need to prepare our native code to hook into our generated code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "platforms",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPlatform),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "android",
        label: "Android",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Codegen is executed through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "generateCodegenArtifactsFromSchema"
          }), " Gradle task:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "cd android\n./gradlew generateCodegenArtifactsFromSchema\n\nBUILD SUCCESSFUL in 837ms\n14 actionable tasks: 3 executed, 11 up-to-date\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "This is automatically run when you build your Android application."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "ios",
        label: "iOS",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Codegen is run as part of the script phases that's automatically added to the project generated by CocoaPods."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ios\nbundle install\nbundle exec pod install\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "The output will look like this:"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-shell",
            children: "...\nFramework build type is static library\n[Codegen] Adding script_phases to ReactCodegen.\n[Codegen] Generating ./build/generated/ios/ReactCodegen.podspec.json\n[Codegen] Analyzing /Users/me/src/TurboModuleExample/package.json\n[Codegen] Searching for codegen-enabled libraries in the app.\n[Codegen] Found TurboModuleExample\n[Codegen] Searching for codegen-enabled libraries in the project dependencies.\n[Codegen] Found react-native\n...\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-write-application-code-using-the-turbo-native-module",
      children: "3. Write Application Code using the Turbo Native Module"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeLocalStorage"
      }), ", here’s a modified ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " that includes some text we want persisted, an input field and some buttons to update this value."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboModuleRegistry"
      }), " supports 2 modes of retrieving a Turbo Native Module:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "get<T>(name: string): T | null"
        }), " which will return ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "null"
        }), " if the Turbo Native Module is unavailable."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getEnforcing<T>(name: string): T"
        }), " which will throw an exception if the Turbo Native Module is unavailable. This assumes the module is always available."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"App.tsx\"",
        children: "import React from 'react';\nimport {\n  SafeAreaView,\n  StyleSheet,\n  Text,\n  TextInput,\n  Button,\n} from 'react-native';\n\nimport NativeLocalStorage from './specs/NativeLocalStorage';\n\nconst EMPTY = '<empty>';\n\nfunction App(): React.JSX.Element {\n  const [value, setValue] = React.useState<string | null>(null);\n\n  const [editingValue, setEditingValue] = React.useState<\n    string | null\n  >(null);\n\n  React.useEffect(() => {\n    const storedValue = NativeLocalStorage?.getItem('myKey');\n    setValue(storedValue ?? '');\n  }, []);\n\n  function saveValue() {\n    NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');\n    setValue(editingValue);\n  }\n\n  function clearAll() {\n    NativeLocalStorage?.clear();\n    setValue('');\n  }\n\n  function deleteValue() {\n    NativeLocalStorage?.removeItem(editingValue ?? EMPTY);\n    setValue('');\n  }\n\n  return (\n    <SafeAreaView style={{flex: 1}}>\n      <Text style={styles.text}>\n        Current stored value is: {value ?? 'No Value'}\n      </Text>\n      <TextInput\n        placeholder=\"Enter the text you want to store\"\n        style={styles.textInput}\n        onChangeText={setEditingValue}\n      />\n      <Button title=\"Save\" onPress={saveValue} />\n      <Button title=\"Delete\" onPress={deleteValue} />\n      <Button title=\"Clear\" onPress={clearAll} />\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  text: {\n    margin: 10,\n    fontSize: 20,\n  },\n  textInput: {\n    margin: 10,\n    height: 40,\n    borderColor: 'black',\n    borderWidth: 1,\n    paddingLeft: 5,\n    paddingRight: 5,\n    borderRadius: 5,\n  },\n});\n\nexport default App;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-write-your-native-platform-code",
      children: "4. Write your Native Platform code"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With everything prepared, we're going to start writing native platform code. We do this in 2 parts:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This guide shows you how to create a Turbo Native Module that only works with the New Architecture. If you need to support both the New Architecture and the Legacy Architecture, please refer to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/reactwg/react-native-new-architecture/blob/main/docs/backwards-compat.md",
          children: "backwards compatibility guide"
        }), "."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "platforms",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPlatform),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "android",
        label: "Android",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_turbo_native_modules_components__WEBPACK_IMPORTED_MODULE_4__.TurboNativeModulesAndroid, {})
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "ios",
        label: "iOS",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_turbo_native_modules_components__WEBPACK_IMPORTED_MODULE_4__.TurboNativeModulesIOS, {})
      })]
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

/***/ 33988:
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
var turbo_native_modules_components_exports = {};
__export(turbo_native_modules_components_exports, {
  TurboNativeModulesAndroid: () => TurboNativeModulesAndroid,
  TurboNativeModulesIOS: () => TurboNativeModulesIOS
});
module.exports = __toCommonJS(turbo_native_modules_components_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_turbo_native_modules_ios = __toESM(__webpack_require__(28562));
var import_turbo_native_modules_android = __toESM(__webpack_require__(75756));
function TurboNativeModulesIOS() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_turbo_native_modules_ios.default, {});
}
function TurboNativeModulesAndroid() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_turbo_native_modules_android.default, {});
}


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