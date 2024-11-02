"use strict";
exports.id = 29516;
exports.ids = [29516];
exports.modules = {

/***/ 88237:
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
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: "Mac M1 的注意事项"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Cocoapods 目前在 Mac M1 架构上可能还有一些兼容问题（我们建议使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "brew install cocoapods"
      }), "来安装 Cocoapods）。如果你在安装 pods 依赖时出现问题，可以尝试运行下面的命令："]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sudo arch -x86_64 gem install ffi"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "arch -x86_64 pod install"
        })
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以上命令会安装", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ffi"
      }), "包，用于在安装和装载 pods 时调用合适的系统架构。"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 69292:
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    title: "注意",
    type: "caution",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本文档内容仍处于实验阶段，内容会随着版本的迭代进行修改。您可随时在我们的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/reactwg/react-native-new-architecture/discussions/8",
        children: "工作组的讨论区"
      }), "发送反馈。\n此外，本文档还包含了若干需手动配置的步骤，但这不代表新架构稳定版的最终开发体验。我们仍在开发相关的工具、模板和第三方库，帮助你更快地迁移到新架构上，而非从头开始配置环境。"]
    })
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

/***/ 14326:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43023);
/* harmony import */ var _markdown_m1_cocoapods_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88237);
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69292);


const frontMatter = {
	id: 'new-architecture-app-renderer-ios',
	title: '在 iOS 上启用 Fabric'
};
const contentTitle = undefined;
const metadata = {
  "id": "new-architecture-app-renderer-ios",
  "title": "在 iOS 上启用 Fabric",
  "description": "This section will go over how to enable the new renderer in your app. Make sure your application meets all the prerequisites.",
  "source": "@site/versioned_docs/version-0.70/new-architecture-app-renderer-ios.md",
  "sourceDirName": ".",
  "slug": "/new-architecture-app-renderer-ios",
  "permalink": "/docs/0.70/new-architecture-app-renderer-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-ios.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "new-architecture-app-renderer-ios",
    "title": "在 iOS 上启用 Fabric"
  },
  "sidebar": "docs",
  "previous": {
    "title": "在 Android 上启用 Fabric",
    "permalink": "/docs/0.70/new-architecture-app-renderer-android"
  },
  "next": {
    "title": "React 18 与 React Native",
    "permalink": "/docs/0.70/react-18-and-react-native"
  }
};
const assets = {

};





const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
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
}, ..._markdown_m1_cocoapods_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_m1_cocoapods_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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