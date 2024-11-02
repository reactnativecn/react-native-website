exports.id = 39645;
exports.ids = [39645];
exports.modules = {

/***/ 20155:
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

/***/ 63559:
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
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20155);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34103);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52553);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64034);
/* harmony import */ var _site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4__);


const frontMatter = {
	id: 'new-architecture-app-modules-android',
	title: '在 Android 上启用 TurboModule'
};
const contentTitle = undefined;
const metadata = {
  "id": "new-architecture-app-modules-android",
  "title": "在 Android 上启用 TurboModule",
  "description": "Make sure your application meets all the prerequisites.",
  "source": "@site/versioned_docs/version-0.71/new-architecture-app-modules-android.md",
  "sourceDirName": ".",
  "slug": "/new-architecture-app-modules-android",
  "permalink": "/docs/0.71/new-architecture-app-modules-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-modules-android.md",
  "tags": [],
  "version": "0.71",
  "frontMatter": {
    "id": "new-architecture-app-modules-android",
    "title": "在 Android 上启用 TurboModule"
  },
  "sidebar": "docs",
  "previous": {
    "title": "在应用中启用的预备工作",
    "permalink": "/docs/0.71/new-architecture-app-intro"
  },
  "next": {
    "title": "在 iOS 上启用 TurboModule",
    "permalink": "/docs/0.71/new-architecture-app-modules-ios"
  }
};
const assets = {

};







const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "1. Enable NDK and the native build",
  "id": "1-enable-ndk-and-the-native-build",
  "level": 2
}, {
  "value": "2. Java/Kotlin - Provide a <code>ReactPackageTurboModuleManagerDelegate</code>",
  "id": "2-javakotlin---provide-a-reactpackageturbomodulemanagerdelegate",
  "level": 2
}, {
  "value": "3. Adapt your <code>ReactNativeHost</code> to use the <code>ReactPackageTurboModuleManagerDelegate</code>",
  "id": "3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate",
  "level": 2
}, {
  "value": "4. Extend the <code>getPackages()</code> from your <code>ReactNativeHost</code> to use the TurboModule",
  "id": "4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule",
  "level": 2
}, {
  "value": "5. C++ Provide a native implementation for the methods in your <code>*TurboModuleDelegate</code> class",
  "id": "5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class",
  "level": 2
}, {
  "value": "MyApplicationTurboModuleManagerDelegate.h",
  "id": "myapplicationturbomodulemanagerdelegateh",
  "level": 4
}, {
  "value": "MyApplicationTurboModuleManagerDelegate.cpp",
  "id": "myapplicationturbomodulemanagerdelegatecpp",
  "level": 4
}, {
  "value": "MyApplicationModuleProvider.h",
  "id": "myapplicationmoduleproviderh",
  "level": 4
}, {
  "value": "MyApplicationModuleProvider.cpp",
  "id": "myapplicationmoduleprovidercpp",
  "level": 4
}, {
  "value": "OnLoad.cpp",
  "id": "onloadcpp",
  "level": 4
}, {
  "value": "6. Enable the <code>useTurboModules</code> flag in your Application <code>onCreate</code>",
  "id": "6-enable-the-useturbomodules-flag-in-your-application-oncreate",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Make sure your application meets all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "new-architecture-app-intro",
        children: "prerequisites"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-enable-ndk-and-the-native-build",
      children: "1. Enable NDK and the native build"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In this iteration of the guide we’re setting up the project to let you build from source. You might notice an increase in your build time because of this.\nYou can mitigate this by following the approach described in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/next/build-speed",
          children: "Speeding up your Build phase"
        }), " guide."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Codegen will output some Java and some C++ code that now we need to build."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let’s edit your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "module-level"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build.gradle"
      }), " to include the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "two"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "externalNativeBuild"
      }), " blocks detailed below inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android{}"
      }), " block:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-groovy",
        children: "android {\n    defaultConfig {\n        applicationId \"com.awesomeproject\"\n        // ...\n\n        // Add this block\n        externalNativeBuild {\n            ndkBuild {\n                arguments \"APP_PLATFORM=android-21\",\n                        \"APP_STL=c++_shared\",\n                        \"NDK_TOOLCHAIN_VERSION=clang\",\n                        \"GENERATED_SRC_DIR=$buildDir/generated/source\",\n                        \"PROJECT_BUILD_DIR=$buildDir\",\n                        \"REACT_ANDROID_DIR=$rootDir/../node_modules/react-native/ReactAndroid\",\n                        \"REACT_ANDROID_BUILD_DIR=$rootDir/../node_modules/react-native/ReactAndroid/build\",\n                        \"NODE_MODULES_DIR=$rootDir/../node_modules\"\n                cFlags \"-Wall\", \"-Werror\", \"-fexceptions\", \"-frtti\", \"-DWITH_INSPECTOR=1\"\n                cppFlags \"-std=c++17\"\n                targets \"myapplication_appmodules\"\n                // Fix for windows limit on number of character in file paths and in command lines\n                if (Os.isFamily(Os.FAMILY_WINDOWS)) {\n                    arguments \"NDK_APP_SHORT_COMMANDS=true\"\n                }\n            }\n        }\n    }\n\n    // Add this block\n    externalNativeBuild {\n        ndkBuild {\n            path \"$projectDir/src/main/jni/Android.mk\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the same ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build.gradle"
      }), " file, inside the same ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android{}"
      }), " let’s add also the following section:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-groovy",
        children: "android {\n    // ...\n\n    def reactAndroidProjectDir = project(':ReactAndroid').projectDir\n    def packageReactNdkLibs = tasks.register(\"packageReactNdkLibs\", Copy) {\n        dependsOn(\":ReactAndroid:packageReactNdkLibsForBuck\")\n        dependsOn(\"generateCodegenArtifactsFromSchema\")\n        from(\"$reactAndroidProjectDir/src/main/jni/prebuilt/lib\")\n        into(\"$buildDir/react-ndk/exported\")\n    }\n\n    afterEvaluate {\n        preBuild.dependsOn(packageReactNdkLibs)\n        configureNdkBuildDebug.dependsOn(preBuild)\n        configureNdkBuildRelease.dependsOn(preBuild)\n    }\n\n    packagingOptions {\n        pickFirst '**/libhermes.so'\n        pickFirst '**/libjsc.so'\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, we need to create a Makefile inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main/jni"
      }), " folder called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Android.mk"
      }), " with the following content:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-makefile",
        children: "THIS_DIR := $(call my-dir)\n\ninclude $(REACT_ANDROID_DIR)/Android-prebuilt.mk\n\n# If you wish to add a custom TurboModule or Fabric component in your app you\n# will have to include the following autogenerated makefile.\n# include $(GENERATED_SRC_DIR)/codegen/jni/Android.mk\n\n# Includes the MK file for autolinked libraries\ninclude $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni/Android-rncli.mk\n\ninclude $(CLEAR_VARS)\n\nLOCAL_PATH := $(THIS_DIR)\n\n# You can customize the name of your application .so file here.\nLOCAL_MODULE := awesomeapp_appmodules\n\nLOCAL_C_INCLUDES := $(LOCAL_PATH) $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni\nLOCAL_SRC_FILES := $(wildcard $(LOCAL_PATH)/*.cpp) $(wildcard $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni/*.cpp)\nLOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH) $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni\n\n# If you wish to add a custom TurboModule or Fabric component in your app you\n# will have to uncomment those lines to include the generated source\n# files from the codegen (placed in $(GENERATED_SRC_DIR)/codegen/jni)\n#\n# LOCAL_C_INCLUDES += $(GENERATED_SRC_DIR)/codegen/jni\n# LOCAL_SRC_FILES += $(wildcard $(GENERATED_SRC_DIR)/codegen/jni/*.cpp)\n# LOCAL_EXPORT_C_INCLUDES += $(GENERATED_SRC_DIR)/codegen/jni\n\n# Here you should add any native library you wish to depend on.\nLOCAL_SHARED_LIBRARIES := \\\nlibfabricjni \\\nlibfbjni \\\nlibfolly_runtime \\\nlibglog \\\nlibjsi \\\nlibreact_codegen_rncore \\\nlibreact_debug \\\nlibreact_nativemodule_core \\\nlibreact_render_componentregistry \\\nlibreact_render_core \\\nlibreact_render_debug \\\nlibreact_render_graphics \\\nlibrrc_view \\\nlibruntimeexecutor \\\nlibturbomodulejsijni \\\nlibyoga\n\n# Autolinked libraries\nLOCAL_SHARED_LIBRARIES += $(call import-codegen-modules)\n\nLOCAL_CFLAGS := -DLOG_TAG=\\\"ReactNative\\\" -fexceptions -frtti -std=c++17\n\ninclude $(BUILD_SHARED_LIBRARY)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This setup will run a native build on your project and will compile the C++ files that have been generated by the codegen. You will see the native build running with the Gradle task ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ":app:externalNativeBuildDebug"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now verify that everything works correctly by running your android app:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "yarn react-native run-android\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "2-javakotlin---provide-a-reactpackageturbomodulemanagerdelegate",
      children: ["2. Java/Kotlin - Provide a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackageTurboModuleManagerDelegate"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now is time to actually use the TurboModule.\nFirst, we will need to create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackageTurboModuleManagerDelegate"
      }), " subclass, like the following:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "package com.awesomeproject;\n\nimport com.facebook.jni.HybridData;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.ReactPackageTurboModuleManagerDelegate;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n\npublic class MyApplicationTurboModuleManagerDelegate extends ReactPackageTurboModuleManagerDelegate {\n\n    private static volatile boolean sIsSoLibraryLoaded;\n\n    protected MyApplicationTurboModuleManagerDelegate(ReactApplicationContext reactApplicationContext, List<ReactPackage> packages) {\n        super(reactApplicationContext, packages);\n    }\n\n    protected native HybridData initHybrid();\n\n    public static class Builder extends ReactPackageTurboModuleManagerDelegate.Builder {\n        protected MyApplicationTurboModuleManagerDelegate build(\n                ReactApplicationContext context, List<ReactPackage> packages) {\n            return new MyApplicationTurboModuleManagerDelegate(context, packages);\n        }\n    }\n\n    @Override\n    protected synchronized void maybeLoadOtherSoLibraries() {\n        // Prevents issues with initializer interruptions.\n        if (!sIsSoLibraryLoaded) {\n            SoLoader.loadLibrary(\"myapplication_appmodules\");\n            sIsSoLibraryLoaded = true;\n        }\n    }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "package com.awesomeproject\n\nimport com.facebook.jni.HybridData\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.ReactPackageTurboModuleManagerDelegate\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.soloader.SoLoader\n\nclass MyApplicationTurboModuleManagerDelegate\nprotected constructor(\n    reactApplicationContext: ReactApplicationContext,\n    packages: List<ReactPackage>\n) : ReactPackageTurboModuleManagerDelegate(reactApplicationContext, packages) {\n\n    override protected external fun initHybrid(): HybridData?\n    class Builder : ReactPackageTurboModuleManagerDelegate.Builder() {\n        override protected fun build(\n            context: ReactApplicationContext,\n            packages: List<ReactPackage>\n        ): MyApplicationTurboModuleManagerDelegate =\n            MyApplicationTurboModuleManagerDelegate(context, packages)\n    }\n\n    @Synchronized\n    override protected fun maybeLoadOtherSoLibraries() {\n        // Prevents issues with initializer interruptions.\n        if (!isSoLibraryLoaded) {\n            SoLoader.loadLibrary(\"myapplication_appmodules\")\n            isSoLibraryLoaded = true\n        }\n    }\n\n    companion object {\n        @Volatile private var isSoLibraryLoaded = false\n    }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Please note that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SoLoader.loadLibrary"
      }), " parameter (in this case ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "\"myapplication_appmodules\")"
      }), " should be the same as the one specified for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LOCAL_MODULE :="
      }), " inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Android.mk"
      }), " file you created before."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This class will then be responsible of loading the TurboModules and will take care of loading the native library build with the NDK at runtime."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate",
      children: ["3. Adapt your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " to use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackageTurboModuleManagerDelegate"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Then, you can provide the class you created to your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), ". You can locate your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
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
        children: "getReactPackageTurboModuleManagerDelegateBuilder"
      }), " method as from the snippet below:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() { /* ... */ }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "class MyApplication : Application(), ReactApplication {\n    private val reactNativeHost: ReactNativeHost =\n        object : ReactNativeHost(this) {\n\n            override fun getUseDeveloperSupport(): Boolean {\n                /* ... */\n            }\n\n            override fun getPackages(): List<ReactPackage?>? {\n                /* ... */\n            }\n\n            override fun getJSMainModuleName(): String? {\n                /* ... */\n            }\n\n            @NonNull\n            override fun getReactPackageTurboModuleManagerDelegateBuilder() =\n                ReactPackageTurboModuleManagerDelegate.Builder()\n        }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule",
      children: ["4. Extend the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages()"
      }), " from your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " to use the TurboModule"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Still on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactNativeHost"
      }), " , we need to extend the the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages()"
      }), " method to include the newly created TurboModule. Update the method to include the following:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() {\n                List<ReactPackage> packages = new PackageList(this).getPackages();\n\n                // Add those lines\n                packages.add(new TurboReactPackage() {\n                    @Nullable\n                    @Override\n                    public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n                        if (name.equals(NativeAwesomeManager.NAME)) {\n                            return new NativeAwesomeManager(reactContext);\n                        } else {\n                            return null;\n                        }\n                    }\n\n                    @Override\n                    public ReactModuleInfoProvider getReactModuleInfoProvider() {\n                        return () -> {\n                            final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();\n                            moduleInfos.put(\n                                    NativeAwesomeManager.NAME,\n                                    new ReactModuleInfo(\n                                            NativeAwesomeManager.NAME,\n                                            \"NativeAwesomeManager\",\n                                            false, // canOverrideExistingModule\n                                            false, // needsEagerInit\n                                            true, // hasConstants\n                                            false, // isCxxModule\n                                            true // isTurboModule\n                                    )\n                            );\n                            return moduleInfos;\n                        };\n                    }\n                });\n                return packages;\n            }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "class MyApplication() : Application(), ReactApplication {\n\n    private val reactNativeHost: ReactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport(): Boolean {\n                /* ... */\n            }\n\n            override protected fun getPackages(): List<ReactPackage>? {\n                val packages: MutableList<ReactPackage> = PackageList(this).getPackages()\n\n                // Add those lines\n                packages.add(\n                    object : TurboReactPackage() {\n                        @Nullable\n                        override fun getModule(\n                            name: String,\n                            reactContext: ReactApplicationContext?\n                        ): NativeModule? =\n                            if ((name == NativeAwesomeManager.NAME)) {\n                                NativeAwesomeManager(reactContext)\n                            } else {\n                                null\n                            }\n\n                        override fun getReactModuleInfoProvider() =\n                            mutableMapOf<String, ReactModuleInfo>(\n                                NativeAwesomeManager.NAME,\n                                ReactModuleInfo(\n                                    NativeAwesomeManager.NAME,\n                                    \"NativeAwesomeManager\",\n                                    false, // canOverrideExistingModule\n                                    false, // needsEagerInit\n                                    true, // hasConstants\n                                    false, // isCxxModule\n                                    true // isTurboModule\n                                )\n                            )\n                    }\n                )\n                return packages\n            }\n\n            override protected fun getJSMainModuleName(): String? {\n                /* ... */\n            }\n\n            @NonNull\n            override protected fun getReactPackageTurboModuleManagerDelegateBuilder():\n                ReactPackageTurboModuleManagerDelegate.Builder? {\n                return Builder()\n            }\n        }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class",
      children: ["5. C++ Provide a native implementation for the methods in your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "*TurboModuleDelegate"
      }), " class"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you take a closer look at the class ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyApplicationTurboModuleManagerDelegate"
      }), " that you created before, you will notice how some of the methods are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "native"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Therefore, you need to provide some C++ classes to implement those methods. Specifically you will need those files, to be added inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main/jni"
      }), " folder:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MyApplicationTurboModuleManagerDelegate.h"
        }), " An header file for the TurboModule Delegate."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MyApplicationTurboModuleManagerDelegate.cpp"
        }), " The implementation of the aforementioned header file."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MyApplicationModuleProvider.h"
        }), " A header file for the TurboModule provider, where you can specify which TurboModules you want to load."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MyApplicationModuleProvider.cpp"
        }), " The implementation for the aforementioned header file."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "OnLoad.cpp"
        }), " Where the initialisation code will be placed. Specifically TurboModule uses FBJNI so the initialisation for such library lives there."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The content of those files should be the following:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "myapplicationturbomodulemanagerdelegateh",
      children: "MyApplicationTurboModuleManagerDelegate.h"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Please note that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "kJavaDescriptor"
      }), " should be adapted to follow the package name you picked for your project."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <string>\n\n#include <ReactCommon/TurboModuleManagerDelegate.h>\n#include <fbjni/fbjni.h>\n\nnamespace facebook {\nnamespace react {\n\nclass MyApplicationTurboModuleManagerDelegate : public jni::HybridClass<MyApplicationTurboModuleManagerDelegate, TurboModuleManagerDelegate> {\npublic:\n  // Adapt it to the package you used for your Java class.\n  static constexpr auto kJavaDescriptor =\n      \"Lcom/awesomeproject/MyApplicationTurboModuleManagerDelegate;\";\n\n  static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject>);\n\n  static void registerNatives();\n\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) override;\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) override;\n\nprivate:\n  friend HybridBase;\n  using HybridBase::HybridBase;\n\n};\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "myapplicationturbomodulemanagerdelegatecpp",
      children: "MyApplicationTurboModuleManagerDelegate.cpp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include \"MyApplicationTurboModuleManagerDelegate.h\"\n#include \"MyApplicationModuleProvider.h\"\n\nnamespace facebook {\nnamespace react {\n\njni::local_ref<MyApplicationTurboModuleManagerDelegate::jhybriddata> MyApplicationTurboModuleManagerDelegate::initHybrid(jni::alias_ref<jhybridobject>) {\n  return makeCxxInstance();\n}\n\nvoid MyApplicationTurboModuleManagerDelegate::registerNatives() {\n  registerHybrid({\n    makeNativeMethod(\"initHybrid\", MyApplicationTurboModuleManagerDelegate::initHybrid),\n  });\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) {\n  // Not implemented yet: provide pure-C++ NativeModules here.\n  return nullptr;\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) {\n  return MyApplicationModuleProvider(name, params);\n}\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "myapplicationmoduleproviderh",
      children: "MyApplicationModuleProvider.h"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        children: "#pragma once\n\n#include <memory>\n#include <string>\n\n#include <ReactCommon/JavaTurboModule.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params);\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "myapplicationmoduleprovidercpp",
      children: "MyApplicationModuleProvider.cpp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Please adapt the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "samplelibrary.h"
      }), " import to match the same library name you provided when building the apps.\nThis is the C++ generated file that is created by the codegen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here you can also specify more than one provider, should you have more than one TurboModule. Specifically in this example we look for a TurboModule from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "samplelibrary"
      }), " (the one we specified) and we fallback to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rncore"
      }), " Module Provider (containing all the Core modules)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include \"MyApplicationModuleProvider.h\"\n\n#include <rncore.h>\n#include <samplelibrary.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {\n    auto module = samplelibrary_ModuleProvider(moduleName, params);\n    if (module != nullptr) {\n      return module;\n    }\n\n    return rncore_ModuleProvider(moduleName, params);\n}\n\n} // namespace react\n} // namespace facebook\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "onloadcpp",
      children: "OnLoad.cpp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fbjni/fbjni.h>\n#include \"MyApplicationTurboModuleManagerDelegate.h\"\n\nJNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *) {\n  return facebook::jni::initialize(vm, [] {\n    facebook::react::MyApplicationTurboModuleManagerDelegate::registerNatives();\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "6-enable-the-useturbomodules-flag-in-your-application-oncreate",
      children: ["6. Enable the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useTurboModules"
      }), " flag in your Application ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onCreate"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now you can finally enable the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboModule "
      }), "support in your Application. To do so, you need to turn on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useTurboModule"
      }), " flag inside your Application ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onCreate"
      }), " method."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
      groupId: "android-language",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().defaultAndroidLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_4___default().androidLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "java",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-java",
            children: "public class MyApplication extends Application implements ReactApplication {\n\n    @Override\n    public void onCreate() {\n        ReactFeatureFlags.useTurboModules = true;\n        //...\n    }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            children: "class MyApplication : Application(), ReactApplication {\n\n    override fun onCreate() {\n        ReactFeatureFlags.useTurboModules = true\n        // ...\n    }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It’s now time to run again your Android app to verify that everything works correctly:"
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