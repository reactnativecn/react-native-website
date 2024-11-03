exports.id = 55378;
exports.ids = [55378];
exports.modules = {

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