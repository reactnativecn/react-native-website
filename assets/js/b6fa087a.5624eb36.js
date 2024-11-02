exports.id = 86464;
exports.ids = [86464];
exports.modules = {

/***/ 78154:
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
	title: 'Fabric Native Modules: Android'
};
const contentTitle = undefined;
const metadata = {
  "id": "fabric-native-components-android",
  "title": "Fabric Native Modules: Android",
  "description": "Now it's time to write some Android platform code to be able to render the web view. The steps you need to follow are:",
  "source": "@site/../cndocs/fabric-native-components-android.md",
  "sourceDirName": ".",
  "slug": "/fabric-native-components-android",
  "permalink": "/docs/next/fabric-native-components-android",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fabric-native-components-android.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fabric-native-components-android",
    "title": "Fabric Native Modules: Android"
  }
};
const assets = {

};






const toc = [{
  "value": "1. Run Codegen through Gradle",
  "id": "1-run-codegen-through-gradle",
  "level": 3
}, {
  "value": "2. Write the <code>ReactWebView</code>",
  "id": "2-write-the-reactwebview",
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
      children: "Now it's time to write some Android platform code to be able to render the web view. The steps you need to follow are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Running Codegen"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Write the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebView"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Write the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewManager"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Write the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewPackage"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactWebViewPackage"
        }), " in the application"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-run-codegen-through-gradle",
      children: "1. Run Codegen through Gradle"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Run this once to generate boilerplate that your IDE of choice can use."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title=\"Demo/\"",
        children: "cd android\n./gradlew generateCodegenArtifactsFromSchema\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Codegen will generate the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " interface you need to implement and the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " delegate for the web view."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "2-write-the-reactwebview",
      children: ["2. Write the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " is the component that wraps the Android native view that React Native will render when using our custom Component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView.java"
      }), " or a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView.kt"
      }), " file in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/src/main/java/com/webview"
      }), " folder with this code:"]
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
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " extends the Android ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), " so you can reuse all the properties already defined by the platform with ease."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The class defines the three Android constructors but defers their actual implementation to the private ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureComponent"
      }), " function. This function takes care of initializing all the components specific properties: in this case you are setting the layout of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), " and you are defining the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebClient"
      }), " that you use to customize the behavior of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebView"
      }), ". In this code, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactWebView"
      }), " emits an event when the page finishes loading, by implementing the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WebClient"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPageFinished"
      }), " method."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The code then defines a helper function to actually emit an event. To emit an event, you have to:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["grab a reference to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactContext"
        }), ";"]
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