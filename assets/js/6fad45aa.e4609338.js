exports.id = 54007;
exports.ids = [54007,31987,55378];
exports.modules = {

/***/ 82030:
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
	id: 'fabric-native-components-android',
	title: 'Fabric 原生 UI 组件：Android'
};
const contentTitle = undefined;
const metadata = {
  "id": "fabric-native-components-android",
  "title": "Fabric 原生 UI 组件：Android",
  "description": "现在，是时候编写一些 Android 平台代码，以便能够渲染 web 视图。以下是需要的步骤：",
  "source": "@site/versioned_docs/version-0.76/fabric-native-components-android.md",
  "sourceDirName": ".",
  "slug": "/fabric-native-components-android",
  "permalink": "/docs/fabric-native-components-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fabric-native-components-android.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {
    "id": "fabric-native-components-android",
    "title": "Fabric 原生 UI 组件：Android"
  }
};
const assets = {

};






const toc = [{
  "value": "1. 使用 Gradle 运行 Codegen",
  "id": "1-使用-gradle-运行-codegen",
  "level": 3
}, {
  "value": "2. 编写 <code>ReactWebView</code>",
  "id": "2-编写-reactwebview",
  "level": 3
}, {
  "value": "3. Write the <code>WebViewManager</code>",
  "id": "3-write-the-webviewmanager",
  "level": 3
}, {
  "value": "4. Write the <code>ReactWebViewPackage</code>",
  "id": "4-write-the-reactwebviewpackage",
  "level": 3
}, {
  "value": "5. Register the <code>ReactWebViewPackage</code> in the application",
  "id": "5-register-the-reactwebviewpackage-in-the-application",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，是时候编写一些 Android 平台代码，以便能够渲染 web 视图。以下是需要的步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "运行 Codegen"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebView"
        }), " 的代码"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewManager"
        }), " 的代码"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewPackage"
        }), " 的代码"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在应用中注册 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewPackage"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-使用-gradle-运行-codegen",
      children: "1. 使用 Gradle 运行 Codegen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "运行一次以生成你的 IDE 可以使用的样板代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title=\"Demo/\"",
        children: "cd android\n./gradlew generateCodegenArtifactsFromSchema\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Codegen 将生成你需要实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " 接口和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " 委托的 web 视图。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "2-编写-reactwebview",
      children: ["2. 编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " 是包装 Android 原生视图的组件，React Native 将在使用自定义组件时渲染它。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/src/main/java/com/webview"
      }), " 文件夹中创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView.java"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView.kt"
      }), " 文件，并使用以下代码："]
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
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebView.java\"",
            children: "package com.webview;\n\nimport android.content.Context;\nimport android.util.AttributeSet;\nimport android.webkit.WebView;\nimport android.webkit.WebViewClient;\n\nimport com.facebook.react.bridge.Arguments;\nimport com.facebook.react.bridge.WritableMap;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.uimanager.UIManagerHelper;\nimport com.facebook.react.uimanager.events.Event;\n\npublic class ReactWebView extends WebView {\n  public ReactWebView(Context context) {\n    super(context);\n    configureComponent();\n  }\n\n  public ReactWebView(Context context, AttributeSet attrs) {\n    super(context, attrs);\n    configureComponent();\n  }\n\n  public ReactWebView(Context context, AttributeSet attrs, int defStyleAttr) {\n    super(context, attrs, defStyleAttr);\n    configureComponent();\n  }\n\n  private void configureComponent() {\n    this.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));\n    this.setWebViewClient(new WebViewClient() {\n      @Override\n      public void onPageFinished(WebView view, String url) {\n        emitOnScriptLoaded(OnScriptLoadedEventResult.success);\n      }\n    });\n  }\n\n  public void emitOnScriptLoaded(OnScriptLoadedEventResult result) {\n    ReactContext reactContext = (ReactContext) context;\n    int surfaceId = UIManagerHelper.getSurfaceId(reactContext);\n    EventDispatcher eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());\n    WritableMap payload = Arguments.createMap();\n    payload.putString(\"result\", result.name());\n\n    OnScriptLoadedEvent event = new OnScriptLoadedEvent(surfaceId, getId(), payload);\n    if (eventDispatcher != null) {\n      eventDispatcher.dispatchEvent(event);\n    }\n  }\n\n  public enum OnScriptLoadedEventResult {\n    success,\n    error\n  }\n\n  private class OnScriptLoadedEvent extends Event<OnScriptLoadedEvent> {\n    private final WritableMap payload;\n\n    OnScriptLoadedEvent(int surfaceId, int viewId, WritableMap payload) {\n      super(surfaceId, viewId);\n      this.payload = payload;\n    }\n\n    @Override\n    public String getEventName() {\n      return \"onScriptLoaded\";\n    }\n\n    @Override\n    public WritableMap getEventData() {\n      return payload;\n    }\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebView.kt\"",
            children: "package com.webview\n\nimport android.content.Context\nimport android.util.AttributeSet\nimport android.webkit.WebView\nimport android.webkit.WebViewClient\nimport com.facebook.react.bridge.Arguments\nimport com.facebook.react.bridge.WritableMap\nimport com.facebook.react.bridge.ReactContext\nimport com.facebook.react.uimanager.UIManagerHelper\nimport com.facebook.react.uimanager.events.Event\n\nclass ReactWebView: WebView {\n  constructor(context: Context) : super(context) {\n    configureComponent()\n  }\n\n  constructor(context: Context, attrs: AttributeSet?) : super(context, attrs) {\n    configureComponent()\n  }\n\n  constructor(context: Context, attrs: AttributeSet?, defStyleAttr: Int) : super(context, attrs, defStyleAttr) {\n    configureComponent()\n  }\n\n  private fun configureComponent() {\n    this.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)\n    this.webViewClient = object : WebViewClient() {\n      override fun onPageFinished(view: WebView, url: String) {\n        emitOnScriptLoaded(OnScriptLoadedEventResult.success)\n      }\n    }\n  }\n\n  fun emitOnScriptLoaded(result: OnScriptLoadedEventResult) {\n    val reactContext = context as ReactContext\n    val surfaceId = UIManagerHelper.getSurfaceId(reactContext)\n    val eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(reactContext, id)\n    val payload =\n        Arguments.createMap().apply {\n          putString(\"result\", result.name)\n        }\n    val event = OnScriptLoadedEvent(surfaceId, id, payload)\n\n    eventDispatcher?.dispatchEvent(event)\n  }\n\n  enum class OnScriptLoadedEventResult() {\n    success(),\n    error()\n  }\n\n  inner class OnScriptLoadedEvent(\n      surfaceId: Int,\n      viewId: Int,\n      private val payload: WritableMap\n  ) : Event<OnScriptLoadedEvent>(surfaceId, viewId) {\n    override fun getEventName() = \"onScriptLoaded\"\n\n    override fun getEventData() = payload\n  }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " 扩展了 Android ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), "，因此你可以轻松地重用平台已经定义的所有属性。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该类定义了三个 Android 构造函数，但将它们的实际实现推迟到私有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureComponent"
      }), " 函数。此函数负责初始化所有组件的特定属性：在这种情况下，你正在设置 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), " 的布局，并定义你用于自定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), " 行为的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebClient"
      }), "。在此代码中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " 在页面加载完成后通过实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebClient"
      }), " 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPageFinished"
      }), " 方法来发出事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后，代码定义了一个实际发出事件的帮助函数。要发出事件，你必须："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["获取 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactContext"
        }), " 的引用；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["retrieve the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "surfaceId"
        }), " of the view that you are presenting;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["grab a reference to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventDispatcher"
        }), " associated with the view;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["build the payload for the event using a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WritableMap"
        }), " object;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "create the event object that you need to send to JavaScript;"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["call the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventDispatcher.dispatchEvent"
        }), " to send the event."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The last part of the file contains the definition of the data types you need to send the event:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "OnScriptLoadedEventResult"
        }), ", with the possible outcomes of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "OnScriptLoaded"
        }), " event."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The actual ``OnScriptLoadedEvent", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "that needs to extend the React Native's"
        }), "Event` class."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "3-write-the-webviewmanager",
      children: ["3. Write the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebViewManager"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebViewManager"
      }), " is the class that connects the React Native runtime with the native view."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When React receives the instruction from the app to render a specific component, React uses the registered view manager to create the view and to pass all the required properties."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is the code of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewManager"
      }), "."]
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
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebViewManager.java\"",
            children: "package com.webview;\n\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.annotations.ReactModule;\nimport com.facebook.react.uimanager.SimpleViewManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\nimport com.facebook.react.uimanager.ViewManagerDelegate;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.viewmanagers.CustomWebViewManagerInterface;\nimport com.facebook.react.viewmanagers.CustomWebViewManagerDelegate;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@ReactModule(name = ReactWebViewManager.REACT_CLASS)\nclass ReactWebViewManager extends SimpleViewManager<ReactWebView> implements CustomWebViewManagerInterface<ReactWebView> {\n  private final CustomWebViewManagerDelegate<ReactWebView, ReactWebViewManager> delegate =\n          new CustomWebViewManagerDelegate<>(this);\n\n  @Override\n  public ViewManagerDelegate<ReactWebView> getDelegate() {\n    return delegate;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @Override\n  public ReactWebView createViewInstance(ThemedReactContext context) {\n    return new ReactWebView(context);\n  }\n\n  @ReactProp(name = \"sourceUrl\")\n  @Override\n  public void setSourceURL(ReactWebView view, String sourceURL) {\n    if (sourceURL == null) {\n      view.emitOnScriptLoaded(ReactWebView.OnScriptLoadedEventResult.error);\n      return;\n    }\n    view.loadUrl(sourceURL, new HashMap<>());\n  }\n\n  public static final String REACT_CLASS = \"CustomWebView\";\n\n  @Override\n  public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {\n    Map<String, Object> map = new HashMap<>();\n    Map<String, Object> bubblingMap = new HashMap<>();\n    bubblingMap.put(\"phasedRegistrationNames\", new HashMap<String, String>() {{\n      put(\"bubbled\", \"onScriptLoaded\");\n      put(\"captured\", \"onScriptLoadedCapture\");\n    }});\n    map.put(\"onScriptLoaded\", bubblingMap);\n    return map;\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebViewManager.kt\"",
            children: "package com.webview\n\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.annotations.ReactModule;\nimport com.facebook.react.uimanager.SimpleViewManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\nimport com.facebook.react.uimanager.ViewManagerDelegate;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.viewmanagers.CustomWebViewManagerInterface;\nimport com.facebook.react.viewmanagers.CustomWebViewManagerDelegate;\n\n@ReactModule(name = ReactWebViewManager.REACT_CLASS)\nclass ReactWebViewManager(context: ReactApplicationContext) : SimpleViewManager<ReactWebView>(), CustomWebViewManagerInterface<ReactWebView> {\n  private val delegate: CustomWebViewManagerDelegate<ReactWebView, ReactWebViewManager> =\n    CustomWebViewManagerDelegate(this)\n\n  override fun getDelegate(): ViewManagerDelegate<ReactWebView> = delegate\n\n  override fun getName(): String = REACT_CLASS\n\n  override fun createViewInstance(context: ThemedReactContext): ReactWebView = ReactWebView(context)\n\n  @ReactProp(name = \"sourceUrl\")\n  override fun setSourceURL(view: ReactWebView, sourceURL: String?) {\n    if (sourceURL == null) {\n      view.emitOnScriptLoaded(ReactWebView.OnScriptLoadedEventResult.error)\n      return;\n    }\n    view.loadUrl(sourceURL, emptyMap())\n  }\n\n  companion object {\n    const val REACT_CLASS = \"CustomWebView\"\n  }\n\n  override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> =\n      mapOf(\n          \"onScriptLoaded\" to\n              mapOf(\n                  \"phasedRegistrationNames\" to\n                      mapOf(\n                          \"bubbled\" to \"onScriptLoaded\",\n                          \"captured\" to \"onScriptLoadedCapture\"\n                      )))\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewManager"
      }), " extends the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SimpleViewManager"
      }), " class from React and implements the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomWebViewManagerInterface"
      }), ", generated by Codegen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It holds a reference of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomWebViewManagerDelegate"
      }), ", another element generated by Codegen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It then overrides the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getName"
      }), " function, which must return the same name used in the spec's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "codegenNativeComponent"
      }), " function call."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createViewInstance"
      }), " function is responsible to instantiate a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Then, the ViewManager needs to define how all the React's compnoents props will update the native view. In the example, you need to decide how to handle the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sourceURL"
      }), " property that React will set on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, if the component can emit an event, you need to map the event name by overriding the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getExportedCustomBubblingEventTypeConstants"
      }), " for bubbling events, or the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getExportedCustomDirectEventTypeConstants"
      }), " for direct events."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "4-write-the-reactwebviewpackage",
      children: ["4. Write the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As you do with Native Modules, Native Components also need to implement the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " class. This is an object that you can use to register the component in the React Native runtime."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      }), ":"]
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
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebViewPackage.java\"",
            children: "package com.webview;\n\nimport com.facebook.react.TurboReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.model.ReactModuleInfo;\nimport com.facebook.react.module.model.ReactModuleInfoProvider;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\npublic class ReactWebViewPackage extends TurboReactPackage {\n  @Override\n  public List<ViewManager<?, ?>> createViewManagers(ReactApplicationContext reactContext) {\n    return Collections.singletonList(new ReactWebViewManager(reactContext));\n  }\n\n  @Override\n  public NativeModule getModule(String s, ReactApplicationContext reactApplicationContext) {\n    if (ReactWebViewManager.REACT_CLASS.equals(s)) {\n      return new ReactWebViewManager(reactApplicationContext);\n    }\n    return null;\n  }\n\n  @Override\n  public ReactModuleInfoProvider getReactModuleInfoProvider() {\n    return new ReactModuleInfoProvider() {\n      @Override\n      public Map<String, ReactModuleInfo> get() {\n        Map<String, ReactModuleInfo> map = new HashMap<>();\n        map.put(ReactWebViewManager.REACT_CLASS, new ReactModuleInfo(\n                ReactWebViewManager.REACT_CLASS, // name\n                ReactWebViewManager.REACT_CLASS, // className\n                false,                           // canOverrideExistingModule\n                false,                           // needsEagerInit\n                false,                           // isCxxModule\n                true                             // isTurboModule\n        ));\n        return map;\n      }\n    };\n  }\n}\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "kotlin",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-kotlin",
            metastring: "title=\"Demo/android/src/main/java/com/webview/ReactWebView.kt\"",
            children: "package com.webview\n\nimport com.facebook.react.TurboReactPackage\nimport com.facebook.react.bridge.NativeModule\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.react.module.model.ReactModuleInfo\nimport com.facebook.react.module.model.ReactModuleInfoProvider\nimport com.facebook.react.uimanager.ViewManager\n\nclass ReactWebViewPackage : TurboReactPackage() {\n  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {\n    return listOf(ReactWebViewManager(reactContext))\n  }\n\n  override fun getModule(s: String, reactApplicationContext: ReactApplicationContext): NativeModule? {\n    when (s) {\n      ReactWebViewManager.REACT_CLASS -> ReactWebViewManager(reactApplicationContext)\n    }\n    return null\n  }\n\n  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider {\n    mapOf(ReactWebViewManager.REACT_CLASS to ReactModuleInfo(\n      _name = ReactWebViewManager.REACT_CLASS,\n      _className = ReactWebViewManager.REACT_CLASS,\n      _canOverrideExistingModule = false,\n      _needsEagerInit = false,\n      isCxxModule = false,\n      isTurboModule = true,\n    )\n    )\n  }\n}\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      }), " extends the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboReactPackage"
      }), " and implements all the methods required to properly register our component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "createViewManagers"
        }), " method is the factory method that creates the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ViewManager"
        }), " that manage the custom views."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getModule"
        }), " method returns the proper ViewManager depending on the View that React Native needs to render."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getReactModuleInfoProvider"
        }), " provides all the information required when registering the module in the runtime,"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "5-register-the-reactwebviewpackage-in-the-application",
      children: ["5. Register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      }), " in the application"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, you need to register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      }), " in the application. We do that by modifying the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MainApplication"
      }), " file by adding the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebViewPackage"
      }), " to the list of packages returned by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getPackages"
      }), " function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-kotlin",
        metastring: "title=\"Demo/app/src/main/java/com/demo/MainApplication.kt\"",
        children: "package com.demo\n\nimport android.app.Application\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactHost\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load\nimport com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost\nimport com.facebook.react.defaults.DefaultReactNativeHost\nimport com.facebook.react.soloader.OpenSourceMergedSoMapping\nimport com.facebook.soloader.SoLoader\n// highlight-next-line\nimport com.webview.ReactWebViewPackage\n\nclass MainApplication : Application(), ReactApplication {\n\n  override val reactNativeHost: ReactNativeHost =\n      object : DefaultReactNativeHost(this) {\n        override fun getPackages(): List<ReactPackage> =\n            PackageList(this).packages.apply {\n              // highlight-next-line\n              add(ReactWebViewPackage())\n            }\n\n        override fun getJSMainModuleName(): String = \"index\"\n\n        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG\n\n        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED\n        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED\n      }\n\n  override val reactHost: ReactHost\n    get() = getDefaultReactHost(applicationContext, reactNativeHost)\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, OpenSourceMergedSoMapping)\n    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {\n      load()\n    }\n  }\n}\n\n"
      })
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

/***/ 4608:
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
	id: 'fabric-native-components-ios',
	title: 'Fabric 原生组件：iOS'
};
const contentTitle = undefined;
const metadata = {
  "id": "fabric-native-components-ios",
  "title": "Fabric 原生组件：iOS",
  "description": "现在，是时候编写一些 iOS 平台代码，以便能够渲染 web 视图。以下是需要的步骤：",
  "source": "@site/versioned_docs/version-0.76/fabric-native-components-ios.md",
  "sourceDirName": ".",
  "slug": "/fabric-native-components-ios",
  "permalink": "/docs/fabric-native-components-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fabric-native-components-ios.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {
    "id": "fabric-native-components-ios",
    "title": "Fabric 原生组件：iOS"
  }
};
const assets = {

};






const toc = [{
  "value": "1. 运行 Codegen",
  "id": "1-运行-codegen",
  "level": 3
}, {
  "value": "3. 编写 <code>RCTWebView</code>",
  "id": "3-编写-rctwebview",
  "level": 3
}, {
  "value": "AppDelegate.mm",
  "id": "appdelegatemm",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h3: "h3",
    h4: "h4",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，是时候编写一些 iOS 平台代码，以便能够渲染 web 视图。以下是需要的步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "运行 Codegen。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        }), " 的代码"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在应用中注册 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-运行-codegen",
      children: "1. 运行 Codegen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "the-new-architecture/codegen-cli",
        children: "手动运行"
      }), " Codegen，当然直接使用你将要演示组件的应用来完成此操作会更简单。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "cd ios\nbundle install\nbundle exec pod install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "重要的是你会看到 Codegen 的日志输出，我们将在 Xcode 中使用它来构建 WebView 原生组件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "warning",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["注意不要将生成的代码提交到你的仓库中。生成的代码与 React Native 的版本相关。使用 npm ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://nodejs.org/en/blog/npm/peer-dependencies",
          children: "peerDependencies"
        }), " 来约束与 React Native 版本的兼容性。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "3-编写-rctwebview",
      children: ["3. 编写 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们需要使用 Xcode 完成以下 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "5 步"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "打开 CocoPods 生成的 Xcode workspace 文件："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "cd ios\nopen Demo.xcworkspace\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Open Xcode Workspace",
      src: "/docs/assets/fabric-native-components/1.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["右键点击应用，选择 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New Group"
        }), "，将新组命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebView"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Right click on app and select New Group",
      src: "/docs/assets/fabric-native-components/2.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebView"
        }), " 组中，创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New"
        }), "→", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "File from Template"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create a new file using the Cocoa Touch Classs template",
      src: "/docs/assets/fabric-native-components/3.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "Objective-C File"
        }), " 模板，并命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create an Objective-C RCTWebView class",
      src: "/docs/assets/fabric-native-components/4.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView.m"
        }), " 重命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView.mm"
        }), "，使其成为 Objective-C++ 文件。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-text",
        metastring: "title=\"Demo/ios\"",
        children: "Podfile\n...\nDemo\n├── AppDelegate.h\n├── AppDelegate.mm\n...\n// highlight-start\n├── RCTWebView.h\n├── RCTWebView.mm\n// highlight-end\n└── main.m\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "创建头文件和实现文件后，可以开始实现它们。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以下是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView.h"
      }), " 文件的代码，声明了组件接口。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/RCTWebView/RTNWebView.h\"",
        children: "#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RCTWebView : RCTViewComponentView\n\n// 你可以在视图中声明你想要访问的原生方法\n\n@end\n\nNS_ASSUME_NONNULL_END\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个类定义了一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      }), "，它扩展了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTViewComponentView"
      }), " 类。这是所有原生组件的基础类，由 React Native 提供。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以下是实现文件 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView.mm"
      }), ") 的代码："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/RCTWebView/RCTWebView.mm\"",
        children: "#import \"RCTWebView.h\"\n\n#import <react/renderer/components/AppSpecs/ComponentDescriptors.h>\n#import <react/renderer/components/AppSpecs/EventEmitters.h>\n#import <react/renderer/components/AppSpecs/Props.h>\n#import <react/renderer/components/AppSpecs/RCTComponentViewHelpers.h>\n// highlight-next-line\n#import <WebKit/WebKit.h>\n\nusing namespace facebook::react;\n\n@interface RCTWebView () <RCTCustomWebViewViewProtocol, WKNavigationDelegate>\n@end\n\n@implementation RCTWebView {\n  NSURL * _sourceURL;\n  WKWebView * _webView;\n}\n\n-(instancetype)init\n{\n  if(self = [super init]) {\n    // highlight-start\n    _webView = [WKWebView new];\n    _webView.navigationDelegate = self;\n    [self addSubview:_webView];\n    // highlight-end\n  }\n  return self;\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  const auto &oldViewProps = *std::static_pointer_cast<CustomWebViewProps const>(_props);\n  const auto &newViewProps = *std::static_pointer_cast<CustomWebViewProps const>(props);\n\n  // Handle your props here\n  if (oldViewProps.sourceURL != newViewProps.sourceURL) {\n    NSString *urlString = [NSString stringWithCString:newViewProps.sourceURL.c_str() encoding:NSUTF8StringEncoding];\n    _sourceURL = [NSURL URLWithString:urlString];\n    // highlight-start\n    if ([self urlIsValid:newViewProps.sourceURL]) {\n      [_webView loadRequest:[NSURLRequest requestWithURL:_sourceURL]];\n    }\n    // highlight-end\n  }\n\n  [super updateProps:props oldProps:oldProps];\n}\n\n-(void)layoutSubviews\n{\n  [super layoutSubviews];\n  _webView.frame = self.bounds;\n\n}\n\n#pragma mark - WKNavigationDelegate\n\n// highlight-start\n-(void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation\n{\n  CustomWebViewEventEmitter::OnScriptLoaded result = CustomWebViewEventEmitter::OnScriptLoaded{CustomWebViewEventEmitter::OnScriptLoadedResult::Success};\n  self.eventEmitter.onScriptLoaded(result);\n}\n\n- (BOOL)urlIsValid:(std::string)propString\n{\n  if (propString.length() > 0 && !_sourceURL) {\n    CustomWebViewEventEmitter::OnScriptLoaded result = CustomWebViewEventEmitter::OnScriptLoaded{CustomWebViewEventEmitter::OnScriptLoadedResult::Error};\n\n    self.eventEmitter.onScriptLoaded(result);\n    return NO;\n  }\n  return YES;\n}\n\n// Event emitter convenience method\n- (const CustomWebViewEventEmitter &)eventEmitter\n{\n  return static_cast<const CustomWebViewEventEmitter &>(*_eventEmitter);\n}\n// highlight-end\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n  return concreteComponentDescriptorProvider<CustomWebViewComponentDescriptor>();\n}\n\nClass<RCTComponentViewProtocol> WebViewCls(void)\n{\n  return RCTWebView.class;\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这段代码是用 Objective-C++ 编写的，包含以下细节："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@interface"
        }), " 实现了两个协议：", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "RCTCustomWebViewViewProtocol"
            }), ", generated by Codegen;"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "WKNavigationDelegate"
            }), ", 由 WebKit 框架提供，用于处理 web 视图导航事件；"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "init"
        }), " 方法实例化 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WKWebView"
        }), "，将其添加到子视图，并设置 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "navigationDelegate"
        }), "；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "updateProps"
        }), " 方法，由 React Native 在组件的属性变化时调用；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "layoutSubviews"
        }), " 方法，描述了自定义视图需要如何布局；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "webView:didFinishNavigation:"
        }), " 方法，用于处理 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WKWebView"
        }), " 完成加载页面时需要执行的操作；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "urlIsValid:(std::string)propString"
        }), " 方法检查接收到的 URL 属性是否有效；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventEmitter"
        }), " 方法，用于检索强类型的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventEmitter"
        }), " 实例；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "componentDescriptorProvider"
        }), " 方法，返回由 Codegen 生成的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ComponentDescriptor"
        }), "；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebViewCls"
        }), " 方法，用于在应用中注册 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "appdelegatemm",
      children: "AppDelegate.mm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，可以在应用中注册组件。更新 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AppDelegate.mm"
      }), " 文件，使应用意识到自定义的 WebView 组件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/ios/Demo/AppDelegate.mm\"",
        children: "#import \"AppDelegate.h\"\n\n#import <React/RCTBundleURLProvider.h>\n// highlight-start\n#import <React/RCTBridge+Private.h>\n#import \"RCTWebView.h\"\n// highlight-end\n@implementation AppDelegate\n// ...\n// highlight-start\n- (NSDictionary<NSString *,Class<RCTComponentViewProtocol>> *)thirdPartyFabricComponents\n{\n  NSMutableDictionary * dictionary = [super thirdPartyFabricComponents].mutableCopy;\n  dictionary[@\"CustomWebView\"] = [RCTWebView class];\n  return dictionary;\n}\n// highlight-end\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这段代码通过获取来自其他来源（如第三方库）的第三方组件字典的可变副本，重写了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "thirdPartyFabricComponents"
      }), " 方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后，向字典中添加一个条目，条目名称与 Codegen 规范文件中使用的名称相同。这样，当 React 需要加载名称 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomWebView"
      }), " 的组件时，React Native 将实例化 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "最后，返回新的字典。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "我们意识到 iOS 存在一些问题，当使用自定义 iOS 组件构建应用时会出现问题。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["组件需要访问 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "yoga/style/Style.h"
          }), " 头文件，但当前应用无法访问。为此，将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "$(PODS_ROOT)/Headers/Private/Yoga"
          }), " 路径添加到应用的头文件搜索路径构建设置中。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["Codegen 在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider"
          }), " 中生成了一行不需要生成的代码。删除 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider.h"
          }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider.mm"
          }), " 文件中带有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "WebViewCls"
          }), " 符号的行。"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "我们已经修复了这些问题，它们将在 React Native 0.76.1 中发布。"
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

/***/ 92656:
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
/* harmony import */ var _fabric_native_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28743);
/* harmony import */ var _fabric_native_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fabric_native_components__WEBPACK_IMPORTED_MODULE_4__);


const frontMatter = {
	id: 'fabric-native-components-introduction',
	title: 'Fabric 原生 UI 组件'
};
const contentTitle = '原生组件';
const metadata = {
  "id": "fabric-native-components-introduction",
  "title": "Fabric 原生 UI 组件",
  "description": "如果你想构建一个 新架构 的 React Native 组件，该组件可以包装一个 Host Component，例如 Android 上的 CheckBox，或者 iOS 上的 UIButton，你应该使用 Fabric 原生组件。",
  "source": "@site/versioned_docs/version-0.76/fabric-native-components.md",
  "sourceDirName": ".",
  "slug": "/fabric-native-components-introduction",
  "permalink": "/docs/fabric-native-components-introduction",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fabric-native-components.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {
    "id": "fabric-native-components-introduction",
    "title": "Fabric 原生 UI 组件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "高级：自定义 C++ 类型",
    "permalink": "/docs/the-new-architecture/custom-cxx-types"
  },
  "next": {
    "title": "附录",
    "permalink": "/docs/appendix"
  }
};
const assets = {

};







const toc = [{
  "value": "创建一个 WebView 组件",
  "id": "创建一个-webview-组件",
  "level": 2
}, {
  "value": "1. 定义 Codegen 规范",
  "id": "1-定义-codegen-规范",
  "level": 2
}, {
  "value": "2. 配置 Codegen 运行",
  "id": "2-配置-codegen-运行",
  "level": 2
}, {
  "value": "2. 构建原生代码",
  "id": "2-构建原生代码",
  "level": 2
}, {
  "value": "3. 使用你的原生组件",
  "id": "3-使用你的原生组件",
  "level": 2
}, {
  "value": "5. 运行应用使用 WebView 组件",
  "id": "5-运行应用使用-webview-组件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "原生组件",
        children: "原生组件"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你想构建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "新架构"
      }), " 的 React Native 组件，该组件可以包装一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://reactnative.dev/architecture/glossary#host-view-tree-and-host-view",
        children: "Host Component"
      }), "，例如 Android 上的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/reference/androidx/appcompat/widget/AppCompatCheckBox",
        children: "CheckBox"
      }), "，或者 iOS 上的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/documentation/uikit/uibutton?language=objc",
        children: "UIButton"
      }), "，你应该使用 Fabric 原生组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "本指南将以实现一个 web 视图组件为例，展示如何构建 Fabric 原生组件。步骤如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "使用 Flow 或 TypeScript 定义一个 JavaScript 规范。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "配置依赖管理系统的代码生成功能，并自动链接。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "实现原生代码。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在应用中使用该组件。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你需要一个普通的模板生成应用来使用该组件："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npx @react-native-community/cli init Demo --install-pods false\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "创建一个-webview-组件",
      children: "创建一个 WebView 组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本指南将展示如何创建一个 Web View 组件。我们将使用 Android 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.android.com/reference/android/webkit/WebView",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebView"
        })
      }), " 组件和 iOS 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/documentation/webkit/wkwebview?language=objc",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WKWebView"
        })
      }), " 组件来创建该组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "首先，创建一个文件夹结构来存放组件的代码："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir -p Demo/{specs,android/app/src/main/java/com/webview}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这将创建以下布局，你将在其中工作："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Demo\n├── android/app/src/main/java/com/webview\n└── ios\n└── spec\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "android/app/src/main/java/com/webview"
        }), " 文件夹是存放 Android 代码的文件夹。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ios"
        }), " 文件夹是存放 iOS 代码的文件夹。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "spec"
        }), " 文件夹是存放 Codegen 规范文件的文件夹。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-定义-codegen-规范",
      children: "1. 定义 Codegen 规范"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你的规范必须使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        children: "TypeScript"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://flow.org/",
        children: "Flow"
      }), " 定义（更多详情请参阅 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "the-new-architecture/what-is-codegen",
        children: "Codegen"
      }), " 文档）。这是由 Codegen 生成 C++、Objective-C++ 和 Java 代码，以连接你的平台代码到 React 运行的 JavaScript 运行时。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["规范文件必须命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<MODULE_NAME>NativeComponent.{ts|js}"
      }), " 才能被 Codegen 识别。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeComponent"
      }), " 后缀不仅是一个约定，实际上是由 Codegen 用于检测规范文件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "使用以下规范文件来创建 WebView 组件："
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
            metastring: "title=\"Demo/specs/WebViewNativeComponent.ts\"",
            children: "import type {HostComponent, ViewProps} from 'react-native';\nimport type {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\ntype WebViewScriptLoadedEvent = {\n  result: 'success' | 'error';\n};\n\nexport interface NativeProps extends ViewProps {\n  sourceURL?: string;\n  onScriptLoaded?: BubblingEventHandler<WebViewScriptLoadedEvent> | null;\n}\n\nexport default codegenNativeComponent<NativeProps>(\n  'CustomWebView',\n) as HostComponent<NativeProps>;\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ts",
            metastring: "title=\"Demo/RCTWebView/js/RCTWebViewNativeComponent.js\":",
            children: "// @flow strict-local\n\nimport type {HostComponent, ViewProps} from 'react-native';\nimport type {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\ntype WebViewScriptLoadedEvent = $ReadOnly<{|\n  result: \"success\" | \"error\",\n|}>;\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps,\n  sourceURL?: string;\n  onScriptLoaded?: BubblingEventHandler<WebViewScriptLoadedEvent>?;\n|}>;\n\nexport default (codegenNativeComponent<NativeProps>(\n  'CustomWebView',\n): HostComponent<NativeProps>);\n\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该规范文件由三部分组成，不包括导入："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebViewScriptLoadedEvent"
        }), " 是一个支持的数据类型，用于将数据从原生代码传递到 JavaScript。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeProps"
        }), " 是定义可以在组件上设置的属性。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "codegenNativeComponent"
        }), " 语句允许我们为自定义组件生成代码，并定义用于匹配原生实现的名称。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["与原生模块一样，你可以在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "specs/"
      }), " 目录中拥有多个规范文件。更多信息请参阅 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/appendix#codegen-typings",
        children: "附录"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-配置-codegen-运行",
      children: "2. 配置 Codegen 运行"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该规范文件用于 React Native 的 Codegen 工具生成平台特定的接口和样板代码。为此，Codegen 需要知道在哪里找到我们的规范文件以及如何处理它。更新你的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 文件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        metastring: "package.json",
        children: "     \"start\": \"react-native start\",\n     \"test\": \"jest\"\n   },\n   // highlight-start\n   \"codegenConfig\": {\n     \"name\": \"AppSpec\",\n     \"type\": \"components\",\n     \"jsSrcsDir\": \"specs\",\n     \"android\": {\n       \"javaPackageName\": \"com.webview\"\n     }\n   },\n   // highlight-end\n   \"dependencies\": {\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "配置好 Codegen 后，我们需要准备原生代码以连接到生成的代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-构建原生代码",
      children: "2. 构建原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，是时候编写原生平台代码，以便当 React 需要渲染视图时，平台可以创建正确的原生视图并在屏幕上渲染它。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你应该分别在 Android 和 iOS 平台上工作。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["本指南展示了如何创建一个仅适用于新架构的原生组件。如果你需要同时支持新架构和旧架构，请参阅我们的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/reactwg/react-native-new-architecture/blob/main/docs/backwards-compat.md",
          children: "向后兼容指南"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "platforms",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPlatform),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "android",
        label: "Android",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fabric_native_components__WEBPACK_IMPORTED_MODULE_4__.FabricNativeComponentsAndroid, {})
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "ios",
        label: "iOS",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fabric_native_components__WEBPACK_IMPORTED_MODULE_4__.FabricNativeComponentsIOS, {})
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-使用你的原生组件",
      children: "3. 使用你的原生组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，你可以在应用中使用该组件。更新你的生成 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " 文件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        metastring: "title=\"Demo/App.tsx\"",
        children: "import React from 'react';\nimport {Alert, StyleSheet, View} from 'react-native';\nimport WebView from './specs/WebViewNativeComponent';\n\nfunction App(): React.JSX.Element {\n  return (\n    <View style={styles.container}>\n      <WebView\n        sourceURL=\"https://react.dev/\"\n        style={styles.webview}\n        onScriptLoaded={() => {\n          Alert.alert('Page Loaded');\n        }}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    alignContent: 'center',\n  },\n  webview: {\n    width: '100%',\n    height: '100%',\n  },\n});\n\nexport default App;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该代码创建了一个使用我们创建的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), " 组件来加载 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react.dev"
      }), " 网站的应用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该应用还显示了一个当网页加载完成时弹出的警告。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-运行应用使用-webview-组件",
      children: "5. 运行应用使用 WebView 组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "platforms",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPlatform),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "android",
        label: "Android",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn run android\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "ios",
        label: "iOS",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn run ios\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Android"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "iOS"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
              style: {
                "max-height": "600px"
              },
              src: "/docs/assets/webview-android.webp"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
              style: {
                "max-height": "600px"
              },
              src: "/docs/assets/webview-ios.webp"
            })
          })]
        })
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

/***/ 28743:
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
var fabric_native_components_exports = {};
__export(fabric_native_components_exports, {
  FabricNativeComponentsAndroid: () => FabricNativeComponentsAndroid,
  FabricNativeComponentsIOS: () => FabricNativeComponentsIOS
});
module.exports = __toCommonJS(fabric_native_components_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_fabric_native_components_ios = __toESM(__webpack_require__(4608));
var import_fabric_native_components_android = __toESM(__webpack_require__(82030));
function FabricNativeComponentsIOS() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_fabric_native_components_ios.default, {});
}
function FabricNativeComponentsAndroid() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_fabric_native_components_android.default, {});
}


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