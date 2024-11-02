exports.id = 84827;
exports.ids = [84827];
exports.modules = {

/***/ 31828:
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
	title: 'Fabric Native Components: iOS'
};
const contentTitle = undefined;
const metadata = {
  "id": "fabric-native-components-ios",
  "title": "Fabric Native Components: iOS",
  "description": "Now it's time to write some iOS platform code to be able to render the web view. The steps you need to follow are:",
  "source": "@site/../cndocs/fabric-native-components-ios.md",
  "sourceDirName": ".",
  "slug": "/fabric-native-components-ios",
  "permalink": "/docs/next/fabric-native-components-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fabric-native-components-ios.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fabric-native-components-ios",
    "title": "Fabric Native Components: iOS"
  }
};
const assets = {

};






const toc = [{
  "value": "1. Run Codegen",
  "id": "1-run-codegen",
  "level": 3
}, {
  "value": "3. Write the <code>RCTWebView</code>",
  "id": "3-write-the-rctwebview",
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
      children: "Now it's time to write some iOS platform code to be able to render the web view. The steps you need to follow are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Run Codegen."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Write the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        }), " in the application"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-run-codegen",
      children: "1. Run Codegen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "the-new-architecture/codegen-cli",
        children: "manually run"
      }), " the Codegen, however it's simpler to use the application you're going to demo the component in to do this for you."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "cd ios\nbundle install\nbundle exec pod install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Importantly you will see logging output from Codegen, which we're going to use in Xcode to build our WebView native component."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "warning",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You should be careful about committing generated code to your repository. Generated code is specific to each version of React Native. Use npm ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://nodejs.org/en/blog/npm/peer-dependencies",
          children: "peerDependencies"
        }), " to restrict compatibility with version of React Native."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "3-write-the-rctwebview",
      children: ["3. Write the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We need to prepare your iOS project using Xcode by completeing these ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "5 steps"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Open the CocoPods generated Xcode Workspace:"
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
        children: ["Right click on app and select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New Group"
        }), ", call the new group ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebView"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Right click on app and select New Group",
      src: "/docs/assets/fabric-native-components/2.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebView"
        }), " group, create ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "New"
        }), "→", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "File from Template"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create a new file using the Cocoa Touch Classs template",
      src: "/docs/assets/fabric-native-components/3.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "Objective-C File"
        }), " template, and name it ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "half-size",
      alt: "Create an Objective-C RCTWebView class",
      src: "/docs/assets/fabric-native-components/4.webp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Rename ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView.m"
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "RCTWebView.mm"
        }), " making it an Objective-C++ file"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-text",
        metastring: "title=\"Demo/ios\"",
        children: "Podfile\n...\nDemo\n├── AppDelegate.h\n├── AppDelegate.mm\n...\n// highlight-start\n├── RCTWebView.h\n├── RCTWebView.mm\n// highlight-end\n└── main.m\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After creating the header file and the implementation file, you can start implementing them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is the code for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView.h"
      }), " file, which declares the component interface."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/RCTWebView/RTNWebView.h\"",
        children: "#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RCTWebView : RCTViewComponentView\n\n// You would declare native methods you'd want to access from the view here\n\n@end\n\nNS_ASSUME_NONNULL_END\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This class defines an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      }), " which extends the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTViewComponentView"
      }), " class. This is the base class for all the native components and it is provided by React Native."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The code for the implementation file (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView.mm"
      }), ") is the following:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/RCTWebView/RCTWebView.mm\"",
        children: "#import \"RCTWebView.h\"\n\n#import <react/renderer/components/AppSpecs/ComponentDescriptors.h>\n#import <react/renderer/components/AppSpecs/EventEmitters.h>\n#import <react/renderer/components/AppSpecs/Props.h>\n#import <react/renderer/components/AppSpecs/RCTComponentViewHelpers.h>\n// highlight-next-line\n#import <WebKit/WebKit.h>\n\nusing namespace facebook::react;\n\n@interface RCTWebView () <RCTCustomWebViewViewProtocol, WKNavigationDelegate>\n@end\n\n@implementation RCTWebView {\n  NSURL * _sourceURL;\n  WKWebView * _webView;\n}\n\n-(instancetype)init\n{\n  if(self = [super init]) {\n    // highlight-start\n    _webView = [WKWebView new];\n    _webView.navigationDelegate = self;\n    [self addSubview:_webView];\n    // highlight-end\n  }\n  return self;\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  const auto &oldViewProps = *std::static_pointer_cast<CustomWebViewProps const>(_props);\n  const auto &newViewProps = *std::static_pointer_cast<CustomWebViewProps const>(props);\n\n  // Handle your props here\n  if (oldViewProps.sourceURL != newViewProps.sourceURL) {\n    NSString *urlString = [NSString stringWithCString:newViewProps.sourceURL.c_str() encoding:NSUTF8StringEncoding];\n    _sourceURL = [NSURL URLWithString:urlString];\n    // highlight-start\n    if ([self urlIsValid:newViewProps.sourceURL]) {\n      [_webView loadRequest:[NSURLRequest requestWithURL:_sourceURL]];\n    }\n    // highlight-end\n  }\n\n  [super updateProps:props oldProps:oldProps];\n}\n\n-(void)layoutSubviews\n{\n  [super layoutSubviews];\n  _webView.frame = self.bounds;\n\n}\n\n#pragma mark - WKNavigationDelegate\n\n// highlight-start\n-(void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation\n{\n  CustomWebViewEventEmitter::OnScriptLoaded result = CustomWebViewEventEmitter::OnScriptLoaded{CustomWebViewEventEmitter::OnScriptLoadedResult::Success};\n  self.eventEmitter.onScriptLoaded(result);\n}\n\n- (BOOL)urlIsValid:(std::string)propString\n{\n  if (propString.length() > 0 && !_sourceURL) {\n    CustomWebViewEventEmitter::OnScriptLoaded result = CustomWebViewEventEmitter::OnScriptLoaded{CustomWebViewEventEmitter::OnScriptLoadedResult::Error};\n\n    self.eventEmitter.onScriptLoaded(result);\n    return NO;\n  }\n  return YES;\n}\n\n// Event emitter convenience method\n- (const CustomWebViewEventEmitter &)eventEmitter\n{\n  return static_cast<const CustomWebViewEventEmitter &>(*_eventEmitter);\n}\n// highlight-end\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n  return concreteComponentDescriptorProvider<CustomWebViewComponentDescriptor>();\n}\n\nClass<RCTComponentViewProtocol> WebViewCls(void)\n{\n  return RCTWebView.class;\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This code is written in Objective-C++ and contains various details:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@interface"
        }), " implements two protocols:", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "RCTCustomWebViewViewProtocol"
            }), ", generated by Codegen;"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "WKNavigationDelegate"
            }), ", provided by the WebKit framework to handle the web view navigation events;"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "init"
        }), " method that instantiates the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WKWebView"
        }), ", adds it to the subviews and that sets the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "navigationDelegate"
        }), ";"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "updateProps"
        }), " method that is called by React Native when the component's props change;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "layoutSubviews"
        }), " method that describes how the custom view needs to be laid out;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "webView:didFinishNavigation:"
        }), " method that lets you handle what to do when the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WKWebView"
        }), " finishes loading the page;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "urlIsValid:(std::string)propString"
        }), " method that checks whether the URL received as prop is valid;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventEmitter"
        }), " method which is a utility to retrieve a strongly typed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "eventEmitter"
        }), " instance"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "componentDescriptorProvider"
        }), " which returns the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ComponentDescriptor"
        }), " generated by Codegen;"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WebViewCls"
        }), " which is an helper method to register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTWebView"
        }), " in the application."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "appdelegatemm",
      children: "AppDelegate.mm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, you can register the component in the app.\nUpdate the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AppDelegate.mm"
      }), " to make your application aware of our custom WebView component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"Demo/ios/Demo/AppDelegate.mm\"",
        children: "#import \"AppDelegate.h\"\n\n#import <React/RCTBundleURLProvider.h>\n// highlight-start\n#import <React/RCTBridge+Private.h>\n#import \"RCTWebView.h\"\n// highlight-end\n@implementation AppDelegate\n// ...\n// highlight-start\n- (NSDictionary<NSString *,Class<RCTComponentViewProtocol>> *)thirdPartyFabricComponents\n{\n  NSMutableDictionary * dictionary = [super thirdPartyFabricComponents].mutableCopy;\n  dictionary[@\"CustomWebView\"] = [RCTWebView class];\n  return dictionary;\n}\n// highlight-end\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This code overrides the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "thirdPartyFabricComponents"
      }), " method by obtaining a mutable copy of the dictionary of third party components coming from other sources, like third party libraries."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It then adds an entry to the dictionary with the name used in the Codegen specification file. In this way, when React is required to load a component with name ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CustomWebView"
      }), ", React Native will instantiate a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTWebView"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Finally, it returns the new dictionary."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "We are aware of a couple of issues with iOS that would create some problem when building the app with a custom iOS component."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["The component requires access to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "yoga/style/Style.h"
          }), " header which is not currently available for the application. To fix this, add the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "$(PODS_ROOT)/Headers/Private/Yoga"
          }), " path to the header search paths build settings of the app."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["Codegen is generating a line in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider"
          }), " that it should not generate. Remove the lines with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "WebViewCls"
          }), " symbol in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider.h"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RCTThirdPartyFabricComponentsProvider.mm"
          }), " files."]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "We have already fixed those issues and they will be released in React Native 0.76.1"
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