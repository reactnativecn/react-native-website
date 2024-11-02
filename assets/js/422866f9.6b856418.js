"use strict";
exports.id = 7684;
exports.ids = [7684];
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

/***/ 23900:
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
	id: 'new-architecture-app-renderer-ios',
	title: '在 iOS 上启用 Fabric'
};
const contentTitle = undefined;
const metadata = {
  "id": "new-architecture-app-renderer-ios",
  "title": "在 iOS 上启用 Fabric",
  "description": "This section will go over how to enable the new renderer in your app. Make sure your application meets all the prerequisites.",
  "source": "@site/../cndocs/new-architecture-app-renderer-ios.md",
  "sourceDirName": ".",
  "slug": "/new-architecture-app-renderer-ios",
  "permalink": "/docs/next/new-architecture-app-renderer-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-ios.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "new-architecture-app-renderer-ios",
    "title": "在 iOS 上启用 Fabric"
  }
};
const assets = {

};




const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "1. Enable Fabric in Podfile",
  "id": "1-enable-fabric-in-podfile",
  "level": 2
}, {
  "value": "2. Update your root view",
  "id": "2-update-your-root-view",
  "level": 2
}, {
  "value": "3. Run pod install",
  "id": "3-run-pod-install",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This section will go over how to enable the new renderer in your app. Make sure your application meets all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "new-architecture-app-intro",
        children: "prerequisites"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-enable-fabric-in-podfile",
      children: "1. Enable Fabric in Podfile"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Add changes to your Podfile. You can see some examples in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/rn-tester/Podfile",
        children: "RNTester"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/fbt/blob/rn-demo-app/ios/Podfile",
        children: "rn-demo-app"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ruby",
        metastring: "title=\"Podfile\"",
        children: "# Add the following line at the top of Podfile.\n# Codegen produces files/classes that share names, and it will show the warning.\n# deterministic_uuids option surpresses the warning.\ninstall! 'cocoapods', :deterministic_uuids => false\ntarget 'Some App' do\n  pods()\nend\ndef pods()\n  # Get config\n  config = use_native_modules!\n  # Use env variables to turn it on/off.\n  fabric_enabled = ENV['USE_FABRIC']\n  use_react_native!(\n    ...\n    # Modify here if your app root path isn't the same as this one.\n    :app_path => \"#{Dir.pwd}/..\",\n    # Pass the flag to enable fabric to use_react_native!.\n    :fabric_enabled => fabric_enabled\n  )\nend\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-update-your-root-view",
      children: "2. Update your root view"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["How to render your app with Fabric depends on your setup. Here is an example of how you can enable Fabric in your app with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RN_FABRIC_ENABLED"
      }), " compiler flag to enable/disable. Refer ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/rn-tester/RNTester/AppDelegate.mm",
        children: "RN-Tester’s AppDelegate"
      }), " as an example."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"AppDelegate.mm\"",
        children: "#ifdef RN_FABRIC_ENABLED\n#import <React/RCTFabricSurfaceHostingProxyRootView.h>\n#import <React/RCTSurfacePresenter.h>\n#import <React/RCTSurfacePresenterBridgeAdapter.h>\n#import <react/config/ReactNativeConfig.h>\n#endif\n\n@interface AppDelegate () <RCTCxxBridgeDelegate,\n                           RCTTurboModuleManagerDelegate> {\n#ifdef RN_FABRIC_ENABLED\n  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;\n  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;\n  facebook::react::ContextContainer::Shared _contextContainer;\n#endif\n\n  // Find a line that define rootView and replace/edit with the following lines.\n\n#ifdef RN_FABRIC_ENABLED\n  _contextContainer = std::make_shared<facebook::react::ContextContainer const>();\n  _reactNativeConfig = std::make_shared<facebook::react::EmptyReactNativeConfig const>();\n\n  _contextContainer->insert(\"ReactNativeConfig\", _reactNativeConfig);\n\n  _bridgeAdapter = [[RCTSurfacePresenterBridgeAdapter alloc]\n        initWithBridge:bridge\n      contextContainer:_contextContainer];\n\n  bridge.surfacePresenter = _bridgeAdapter.surfacePresenter;\n\n  UIView *rootView =\n      [[RCTFabricSurfaceHostingProxyRootView alloc] initWithBridge:bridge\n                                                        moduleName:<#moduleName#>\n                                                 initialProperties:@{}];\n#else\n  // Current implementation to define rootview.\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:<#moduleName#>\n                                            initialProperties:@{}];\n#endif\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-run-pod-install",
      children: "3. Run pod install"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "// Run pod install with the flags\nUSE_FABRIC=1 RCT_NEW_ARCH_ENABLED=1 pod install\n"
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