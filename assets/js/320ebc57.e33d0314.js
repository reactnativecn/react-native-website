"use strict";
exports.id = 62972;
exports.ids = [62972];
exports.modules = {

/***/ 40126:
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

/***/ 90014:
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
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40126);


const frontMatter = {
	id: 'new-architecture-app-modules-ios',
	title: '在 iOS 上启用 TurboModule'
};
const contentTitle = undefined;
const metadata = {
  "id": "new-architecture-app-modules-ios",
  "title": "在 iOS 上启用 TurboModule",
  "description": "Make sure your application meets all the prerequisites.",
  "source": "@site/../cndocs/new-architecture-app-modules-ios.md",
  "sourceDirName": ".",
  "slug": "/new-architecture-app-modules-ios",
  "permalink": "/docs/next/new-architecture-app-modules-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-modules-ios.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "new-architecture-app-modules-ios",
    "title": "在 iOS 上启用 TurboModule"
  }
};
const assets = {

};




const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "1. Provide a TurboModuleManager Delegate",
  "id": "1-provide-a-turbomodulemanager-delegate",
  "level": 2
}, {
  "value": "TurboModuleManagerDelegate Example",
  "id": "turbomodulemanagerdelegate-example",
  "level": 4
}, {
  "value": "2. Install TurboModuleManager JavaScript Bindings",
  "id": "2-install-turbomodulemanager-javascript-bindings",
  "level": 2
}, {
  "value": "3. Enable TurboModule System",
  "id": "3-enable-turbomodule-system",
  "level": 2
}, {
  "value": "Example",
  "id": "example",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Make sure your application meets all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "new-architecture-app-intro",
        children: "prerequisites"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-provide-a-turbomodulemanager-delegate",
      children: "1. Provide a TurboModuleManager Delegate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Add the following imports at the top of your bridge delegate (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AppDelegate.mm"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        children: "#import <ReactCommon/RCTTurboModuleManager.h>\n#import <React/CoreModulesPlugins.h>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You will also need to declare that your AppDelegate conforms to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTTurboModuleManagerDelegate"
      }), " protocol, as well as create an instance variable for our Turbo Module manager:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        children: "@interface AppDelegate () <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {\n  // ...\n  RCTTurboModuleManager *_turboModuleManager;\n}\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To conform to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTTurboModuleManagerDelegate"
      }), " protocol, you will implement these three methods:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getModuleClassFromName:"
        }), " - This method should return the Class for a native module. You may use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTCoreModulesClassProvider()"
        }), " method to handle the default, core modules."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getTurboModule:jsInvoker:"
        }), " - This should return ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "nullptr"
        }), ". This method may be used later to support C++ TurboModules."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getModuleInstanceFromClass:moduleClass:"
        }), " - This method allows you to perform any side-effects when your TurboModules are initialized. This is the TurboModule analogue to your bridge delegate’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "extraModulesForBridge"
        }), " method. At this time, you’ll need to initialize the default RCTNetworking and RCTImageLoader modules as indicated below."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "turbomodulemanagerdelegate-example",
      children: "TurboModuleManagerDelegate Example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Take note of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getModuleInstanceFromClass:"
      }), " in the following example, as it includes some necessary instantiation of several core modules that you will need to include in your application. Eventually, this may not be required."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title='AppDelegate.mm'",
        children: "// ...\n\n#import <React/RCTDataRequestHandler.h>\n#import <React/RCTHTTPRequestHandler.h>\n#import <React/RCTFileRequestHandler.h>\n#import <React/RCTNetworking.h>\n#import <React/RCTImageLoader.h>\n#import <React/RCTGIFImageDecoder.h>\n#import <React/RCTLocalAssetImageLoader.h>\n\n#import <React/CoreModulesPlugins.h>\n\n#import <ReactCommon/RCTTurboModuleManager.h>\n\n// ...\n\n#pragma mark RCTTurboModuleManagerDelegate\n\n- (Class)getModuleClassFromName:(const char *)name\n{\n  return RCTCoreModulesClassProvider(name);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)\n    getTurboModule:(const std::string &)name\n         jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker {\n  return nullptr;\n}\n\n- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass\n{\n  // Set up the default RCTImageLoader and RCTNetworking modules.\n  if (moduleClass == RCTImageLoader.class) {\n    return [[moduleClass alloc] initWithRedirectDelegate:nil\n        loadersProvider:^NSArray<id<RCTImageURLLoader>> *(RCTModuleRegistry * moduleRegistry) {\n          return @ [[RCTLocalAssetImageLoader new]];\n        }\n        decodersProvider:^NSArray<id<RCTImageDataDecoder>> *(RCTModuleRegistry * moduleRegistry) {\n          return @ [[RCTGIFImageDecoder new]];\n        }];\n  } else if (moduleClass == RCTNetworking.class) {\n     return [[moduleClass alloc]\n        initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *(\n            RCTModuleRegistry *moduleRegistry) {\n          return @[\n            [RCTHTTPRequestHandler new],\n            [RCTDataRequestHandler new],\n            [RCTFileRequestHandler new],\n          ];\n        }];\n  }\n  // No custom initializer here.\n  return [moduleClass new];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-install-turbomodulemanager-javascript-bindings",
      children: "2. Install TurboModuleManager JavaScript Bindings"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Next, you will create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTTurboModuleManager"
      }), " in your bridge delegate’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "jsExecutorFactoryForBridge:"
      }), " method, and install the JavaScript bindings:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        children: "#pragma mark - RCTCxxBridgeDelegate\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  // Add these lines to create a TurboModuleManager\n  if (RCTTurboModuleEnabled()) {\n    _turboModuleManager =\n        [[RCTTurboModuleManager alloc] initWithBridge:bridge\n                                             delegate:self\n                                            jsInvoker:bridge.jsCallInvoker];\n\n    // Necessary to allow NativeModules to lookup TurboModules\n    [bridge setRCTTurboModuleRegistry:_turboModuleManager];\n\n    if (!RCTTurboModuleEagerInitEnabled()) {\n      /**\n       * Instantiating DevMenu has the side-effect of registering\n       * shortcuts for CMD + d, CMD + i,  and CMD + n via RCTDevMenu.\n       * Therefore, when TurboModules are enabled, we must manually create this\n       * NativeModule.\n       */\n       [_turboModuleManager moduleForName:\"DevMenu\"];\n    }\n  }\n\n  // Add this line...\n  __weak __typeof(self) weakSelf = self;\n\n  // If you want to use the `JSCExecutorFactory`, remember to add the `#import <React/JSCExecutorFactory.h>`\n  // import statement on top.\n  return std::make_unique<facebook::react::HermesExecutorFactory>(\n    facebook::react::RCTJSIExecutorRuntimeInstaller([weakSelf, bridge](facebook::jsi::Runtime &runtime) {\n      if (!bridge) {\n        return;\n      }\n\n      // And add these lines to install the bindings...\n      __typeof(self) strongSelf = weakSelf;\n      if (strongSelf) {\n        facebook::react::RuntimeExecutor syncRuntimeExecutor =\n            [&](std::function<void(facebook::jsi::Runtime & runtime_)> &&callback) { callback(runtime); };\n        [strongSelf->_turboModuleManager installJSBindingWithRuntimeExecutor:syncRuntimeExecutor];\n      }\n    }));\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-enable-turbomodule-system",
      children: "3. Enable TurboModule System"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Finally, enable TurboModules in your app by executing the following statement before React Native is initialized in your app delegate (e.g. within ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "didFinishLaunchingWithOptions:"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        children: "RCTEnableTurboModule(YES);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example",
      children: "Example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        children: "@implementation AppDelegate\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  RCTEnableTurboModule(YES);\n\n  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self\n                                            launchOptions:launchOptions];\n\n  // ...\n\n  return YES;\n}\n"
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