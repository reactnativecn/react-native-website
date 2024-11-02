exports.id = 92839;
exports.ids = [92839];
exports.modules = {

/***/ 69292:
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

/***/ 2591:
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
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69292);


const frontMatter = {
	id: 'pillars-fabric-components',
	title: 'Fabric 组件'
};
const contentTitle = undefined;
const metadata = {
  "id": "the-new-architecture/pillars-fabric-components",
  "title": "Fabric 组件",
  "description": "Fabric 组件是一种使用 Fabric 渲染器渲染并展示在屏幕上的 UI 组件。在新架构中，使用 Fabric 组件替代原生组件具有以下优势：",
  "source": "@site/versioned_docs/version-0.70/the-new-architecture/pillars-fabric-components.md",
  "sourceDirName": "the-new-architecture",
  "slug": "/the-new-architecture/pillars-fabric-components",
  "permalink": "/docs/0.70/the-new-architecture/pillars-fabric-components",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars-fabric-components.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "pillars-fabric-components",
    "title": "Fabric 组件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TurboModules",
    "permalink": "/docs/0.70/the-new-architecture/pillars-turbomodules"
  },
  "next": {
    "title": "Codegen",
    "permalink": "/docs/0.70/the-new-architecture/pillars-codegen"
  }
};
const assets = {

};







const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_4__/* .toc */ .RM, {
  "value": "如何创建 Fabric 组件",
  "id": "如何创建-fabric-组件",
  "level": 2
}, {
  "value": "1. 目录配置",
  "id": "1-目录配置",
  "level": 2
}, {
  "value": "2. 声明 JavaScript 接口",
  "id": "2-声明-javascript-接口",
  "level": 2
}, {
  "value": "3. 组件配置",
  "id": "3-组件配置",
  "level": 2
}, {
  "value": "Shared",
  "id": "shared",
  "level": 3
}, {
  "value": "iOS：创建 <code>podspec</code> 文件",
  "id": "ios创建-podspec-文件",
  "level": 3
}, {
  "value": "Android: <code>build.gradle</code>, <code>AndroidManifest.xml</code>, <code>ReactPackage</code> 类",
  "id": "androidbuildgradleandroidmanifestxml-reactpackage-类",
  "level": 3
}, {
  "value": "<code>build.gradle</code>",
  "id": "buildgradle",
  "level": 4
}, {
  "value": "<code>AndroidManifest.xml</code>",
  "id": "androidmanifestxml",
  "level": 4
}, {
  "value": "<code>ReactPackage</code>",
  "id": "reactpackage",
  "level": 4
}, {
  "value": "4. 原生代码",
  "id": "4-原生代码",
  "level": 2
}, {
  "value": "iOS",
  "id": "ios",
  "level": 3
}, {
  "value": "iOS 的代码生成",
  "id": "ios-的代码生成",
  "level": 4
}, {
  "value": "编写 iOS 原生代码",
  "id": "编写-ios-原生代码",
  "level": 4
}, {
  "value": "RTNCenteredTextManager.mm",
  "id": "rtncenteredtextmanagermm",
  "level": 5
}, {
  "value": "RTNCenteredText.h",
  "id": "rtncenteredtexth",
  "level": 5
}, {
  "value": "RTNCenteredText.mm",
  "id": "rtncenteredtextmm",
  "level": 5
}, {
  "value": "Android",
  "id": "android",
  "level": 3
}, {
  "value": "Android 的代码生成",
  "id": "android-的代码生成",
  "level": 4
}, {
  "value": "编写原生代码",
  "id": "编写原生代码",
  "level": 4
}, {
  "value": "RTNCenteredText.java",
  "id": "rtncenteredtextjava",
  "level": 5
}, {
  "value": "RTNCenteredTextManager.java",
  "id": "rtncenteredtextmanagerjava",
  "level": 5
}, {
  "value": "RTNCenteredTextPackage.java",
  "id": "rtncenteredtextpackagejava",
  "level": 5
}, {
  "value": "5. 将 Fabric 组件添加到 App",
  "id": "5-将-fabric-组件添加到-app",
  "level": 2
}, {
  "value": "Shared",
  "id": "shared-1",
  "level": 3
}, {
  "value": "iOS",
  "id": "ios-1",
  "level": 3
}, {
  "value": "Android",
  "id": "android-1",
  "level": 3
}, {
  "value": "JavaScript",
  "id": "javascript",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Fabric 组件是一种使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://reactnative.dev/architecture/fabric-renderer",
        children: "Fabric 渲染器"
      }), "渲染并展示在屏幕上的 UI 组件。在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "新架构"
      }), "中，使用 Fabric 组件替代原生组件具有以下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./why",
        children: "优势"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "各个平台的强类型接口声明是一致的；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "您可以使用 C++ 编写组件或迁移其它平台的原生代码，以此避免在跨平台重复实现组件；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "通过替换 Bridge 为 JSI（使用原生代码编写的 JavaScript 接口），提升 JavaScript 与原生代码的通讯效率。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在开发 Fabric 组件前，您需要先创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "JavaScript 接口描述文件"
      }), "。之后 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./pillars-codegen",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        })
      }), " 会根据这个文件创建一些 C++ 脚手架代码，用于将部分组件逻辑（比如调用原生平台接口能力）与 React Native 结合起来。C++ 代码在各个平台都是一样的，只要组件能够与生成的 C++ 代码连接起来，就可以导入到 App 并运行。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来的内容将一步步指导您针对 React Native 0.70.0 创建一个 Fabric 组件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Fabric 组件仅适用于", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "新架构"
        }), "。若您想了解如何将 App 迁移到新架构，可前往", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../new-architecture-intro",
          children: "迁移指南"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "如何创建-fabric-组件",
      children: "如何创建 Fabric 组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "若要创建一个 Fabric 组件，您需要遵循以下步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "声明 JavaScript 接口；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["配置组件以用于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 生成统一代码，生成的代码可添加为 App 的依赖；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "编写所需的原生代码。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["完成这些步骤后，组件就可以在 App 里使用了。本指导将向您介绍如何将其添加到 App，并利用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "自动链接"
      }), "使其能在 JavaScript 代码引用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-目录配置",
      children: "1. 目录配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了使组件与 App 保持解耦，有个不错的方案是将组件从 App 抽离出来，并添加为 App 的一个依赖。如果您打算开发一个开源的 Fabric 组件，您同样也需要这么做。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在本指导中，您将开发一个用于在屏幕上将文本居中显示的 Fabric 组件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在与 App 平级的目录，创建名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 的目录。在这个目录中，创建三个子目录：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "js"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ios"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android"
      }), "。创建后的目录结构是这样的："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: ".\n├── MyApp\n└── RTNCenteredText\n    ├── android\n    ├── ios\n    └── js\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-声明-javascript-接口",
      children: "2. 声明 JavaScript 接口"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "新架构"
      }), "要求必须使用强类型风格语言声明 JavaScript 接口（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://flow.org/",
        children: "Flow"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        children: "TypeScript"
      }), " 皆可）。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Codegen"
      }), " 会根据这些接口声明来生成强类型的语言，其中包括 C++、Objective-C 和 Java。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "对于声明类型的代码文件必须满足以下两点要求："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["文件必须使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<MODULE_NAME>NativeComponent"
        }), " 命名，在使用 Flow 时，以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".js"
        }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".jsx"
        }), " 为后缀名；在使用 Typescript 时，以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".ts"
        }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".tsx"
        }), " 为后缀名。Codegen 只会找到匹配这些命名规则的文件；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["代码中必须要输出 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "HostComponent"
        }), " 对象。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以下是使用 Flow 和 TypeScript 声明的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 组件。在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "js"
      }), " 目录中，创建一个命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 并带有相应后缀名的文件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "fabric-component-specs",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultJavaScriptSpecLanguages),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().javaScriptSpecLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "// @flow strict-local\n\nimport type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';\nimport type {HostComponent} from 'react-native';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps,\n  text: ?string,\n  // add other props here\n|}>;\n\nexport default (codegenNativeComponent<NativeProps>(\n   'RTNCenteredText',\n): HostComponent<NativeProps>);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "import type { ViewProps } from 'ViewPropTypes';\nimport type { HostComponent } from 'react-native';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\nexport interface NativeProps extends ViewProps {\n  text?: string;\n  // 添加其它 props\n}\n\nexport default codegenNativeComponent<NativeProps>(\n  'RTNCenteredText'\n) as HostComponent<NativeProps>;\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在声明文件的顶部导入了一些内容。以下是开发 Fabric 组件必须要导入的内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "HostComponent"
        }), " 类型: 导出的组件需要与这个类型保持一致；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "codegenNativeComponent"
        }), " 函数：负责将组件注册到 JavaScript 运行时。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["声明文件的中间部分包含了组件的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "props"
      }), "。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://reactnative.dev/docs/next/intro-react#props",
        children: "Props"
      }), "（\"properties\" 的缩写）是用于自定义 React 组件的参数信息。在本例中，您将需要控制组件的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "text"
      }), " 属性。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在声明文件的最后部分，导出了泛型函数 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "codegenNativeComponent"
      }), " 的返回值，此函数需要传递组件的名称。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "当我们在编写 JavaScript 代码时，如果没有配置好对应的模块或依赖安装，就从第三方库导入类型，可能会使的您的 IDE 不能正确载入导入声明，从而显示错误或警告。这些问题会在 Fabric 添加为 App 的依赖后得到解决。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-组件配置",
      children: "3. 组件配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来，您需要为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.70/the-new-architecture/pillars-codegen",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        })
      }), " 和自动链接添加一些配置。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有一些配置文件在 iOS 和 Android 平台是通用的，而有的仅能在某一平台使用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "shared",
      children: "Shared"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["shared 是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 文件中的一个配置项，它将在 yarn 安装您的模块时被调用，请在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 的根目录创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 文件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"package.json\"",
        children: "{\n  \"name\": \"rtn-centered-text\",\n  \"version\": \"0.0.1\",\n  \"description\": \"Showcase a Fabric component with a centered text\",\n  \"react-native\": \"js/index\",\n  \"source\": \"js/index\",\n  \"files\": [\n    \"js\",\n    \"android\",\n    \"ios\",\n    \"rtn-centered-text.podspec\",\n    \"!android/build\",\n    \"!ios/build\",\n    \"!**/__tests__\",\n    \"!**/__fixtures__\",\n    \"!**/__mocks__\"\n  ],\n  \"keywords\": [\"react-native\", \"ios\", \"android\"],\n  \"repository\": \"https://github.com/<your_github_handle>/rtn-centered-text\",\n  \"author\": \"<Your Name> <your_email@your_provider.com> (https://github.com/<your_github_handle>)\",\n  \"license\": \"MIT\",\n  \"bugs\": {\n    \"url\": \"https://github.com/<your_github_handle>/rtn-centered-text/issues\"\n  },\n  \"homepage\": \"https://github.com/<your_github_handle>/rtn-centered-text#readme\",\n  \"devDependencies\": {},\n  \"peerDependencies\": {\n    \"react\": \"*\",\n    \"react-native\": \"*\"\n  },\n  \"codegenConfig\": {\n    \"name\": \"RTNCenteredTextSpecs\",\n    \"type\": \"components\",\n    \"jsSrcsDir\": \"js\"\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["文件上面的内容包含了一些描述性的信息，比如组件名、版本和代码文件。务必记得设置使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<>"
      }), " 包裹的占位符，如替换所有的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<your_github_handle>"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<Your Name>"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<your_email@your_provider.com>"
      }), " 等标记。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来是 npm 包的依赖。在本指导中，您会用到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react-native"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 的配置声明到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "codegenConfig"
      }), " 字段。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "codegenConfig"
      }), " 是一个用于存放要生成的第三方库的对象数组，每个对象又包含其它三个字段："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "name"
        }), "：第三方库的名称。按照惯例，名称应以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Spec"
        }), " 为结尾"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "type"
        }), "：在这个 npm 包里的模块类型。在本例中，我们开发的是 Fabric 组件，所以值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "components"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jsSrcsDir"
        }), "：用于找到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "js"
        }), " 接口声明文件的相对路径，它将被 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 解析"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "ios创建-podspec-文件",
      children: ["iOS：创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "podspec"
      }), " 文件"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["针对 iOS 平台，您需要创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rtn-centered-text.podspec"
      }), " 文件，它将您的模块定义为 App 里的一个依赖。文件要放在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 根目录，与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ios"
      }), " 目录处于同一个位置。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "文件内容如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ruby",
        metastring: "title=\"rtn-centered-text.podspec\"",
        children: "require \"json\"\n\npackage = JSON.parse(File.read(File.join(__dir__, \"package.json\")))\n\nfolly_version = '2021.07.22.00'\nfolly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'\n\nPod::Spec.new do |s|\n  s.name            = \"rtn-centered-text\"\n  s.version         = package[\"version\"]\n  s.summary         = package[\"description\"]\n  s.description     = package[\"description\"]\n  s.homepage        = package[\"homepage\"]\n  s.license         = package[\"license\"]\n  s.platforms       = { :ios => \"11.0\" }\n  s.author          = package[\"author\"]\n  s.source          = { :git => package[\"repository\"], :tag => \"#{s.version}\" }\n\n  s.source_files    = \"ios/**/*.{h,m,mm,swift}\"\n\n  s.dependency \"React-Core\"\n\n  s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n  s.pod_target_xcconfig    = {\n    \"HEADER_SEARCH_PATHS\" => \"\\\"$(PODS_ROOT)/boost\\\"\",\n    \"OTHER_CPLUSPLUSFLAGS\" => \"-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1\",\n    \"CLANG_CXX_LANGUAGE_STANDARD\" => \"c++17\"\n  }\n\n  s.dependency \"React-RCTFabric\"\n  s.dependency \"React-Codegen\"\n  s.dependency \"RCT-Folly\", folly_version\n  s.dependency \"RCTRequired\"\n  s.dependency \"RCTTypeSafety\"\n  s.dependency \"ReactCommon/turbomodule/core\"\nend\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".podspec"
      }), " 文件需要和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 处于同一个目录，并且它的命名应该取自我们在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "name"
      }), " 字段配置的值：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rtn-centered-text"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "文件首部分设置了一些在后续会使用到的变量。后面一部分内容是一些用来配置 pod 的信息，比如命名、版本和功能描述等。其余内容是一些在新架构中必须要配置的依赖。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "androidbuildgradleandroidmanifestxml-reactpackage-类",
      children: ["Android: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build.gradle"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 类"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["若要在 Android 平台运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), "，您需要创建三个文件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["带有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Codegen"
        }), " 配置信息的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "build.gradle"
        }), " 文件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "AndroidManifest.xml"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["一个实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ReactPackage"
        }), " 接口的 Java 类"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在文件创建完成后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android"
      }), " 目录文件结构应该是这样的："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-title=\"Android",
        metastring: "Folder Structure\"",
        children: "android\n├── build.gradle\n└── src\n    └── main\n        ├── AndroidManifest.xml\n        └── java\n            └── com\n                └── rtncenteredtext\n                    └── RTNCenteredTextPackage.java\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "buildgradle",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build.gradle"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先，在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android"
      }), " 目录创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build.gradle"
      }), " 文件，并配置以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-kotlin",
        metastring: "title=\"build.gradle\"",
        children: "buildscript {\n  ext.safeExtGet = {prop, fallback ->\n    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback\n  }\n  repositories {\n    google()\n    gradlePluginPortal()\n  }\n  dependencies {\n    classpath(\"com.android.tools.build:gradle:7.1.1\")\n  }\n}\n\napply plugin: 'com.android.library'\napply plugin: 'com.facebook.react'\n\nandroid {\n  compileSdkVersion safeExtGet('compileSdkVersion', 31)\n\n  defaultConfig {\n    minSdkVersion safeExtGet('minSdkVersion', 21)\n    targetSdkVersion safeExtGet('targetSdkVersion', 31)\n    buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", \"true\")\n  }\n}\n\nrepositories {\n  maven {\n    // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm\n    url \"$projectDir/../node_modules/react-native/android\"\n  }\n  mavenCentral()\n  google()\n}\n\ndependencies {\n  implementation 'com.facebook.react:react-native:+'\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "androidmanifestxml",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其次，创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/src/main"
      }), " 目录，然后在这个目录内创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      }), " 文件，并编写以下代码："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-xml",
        metastring: "title=\"AndroidManifest.xml\"",
        children: "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n          package=\"com.rtncenteredtext\">\n</manifest>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个 manifest 文件的用途是声明您开发的模块的 Java 包。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "reactpackage",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，您需要一个继承 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboReactPackage"
      }), " 接口的类。在运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 前，您不用完整实现这个类。对于 App 而言，一个没有实现接口的空类就已经能当做一个 React Native 依赖，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 会尝试生成其脚手架代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/src/main/java/com/rtncenteredtext"
      }), " 目录，在这个目录内创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextPackage.java"
      }), " 文件"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title=\"RTNCenteredTextPackage\"",
        children: "package com.rtncenteredtext;\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.Collections;\nimport java.util.List;\n\npublic class RTNCenteredTextPackage implements ReactPackage {\n\n    @Override\n    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n        return Collections.emptyList();\n    }\n\n    @Override\n    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {\n        return Collections.emptyList();\n    }\n\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 接口的用途是让 React Native 为使用 App 中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ViewManager"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Native Modules"
      }), "，识别出哪些原生类需要在第三方库里导出。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "4-原生代码",
      children: "4. 原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "最后一步需要您编写用于 JavaScript 端的组件与原生平台交互的原生代码，这包含两个主要步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 并查看其生成的代码；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "编写原生代码。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在开发一个使用 Fabric 组件 的 React Native App 时，将由 App 负责使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成代码。但在开发 Fabric 组件的第三方库时，我们需要引用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 的生成代码，因此查看生成的代码是很有帮助的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先，为生成 iOS 和 Android 平台的代码，本指导将向您展示如何手动执行由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成的脚本，以及生成所需要的平台代码。您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.70/the-new-architecture/pillars-codegen",
        children: "这里"
      }), "了解到更多关于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 的内容。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 生成的代码不该提交到版本管理系统，React Native 会在 App 构建的时候自动生成代码。这是为了确保在 App 内，所有第三方库都正确使用针对某一 React Native 版本的生成代码。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ios",
      children: "iOS"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "ios-的代码生成",
      children: "iOS 的代码生成"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为生成 iOS 平台的代码，您需要在 Terminal 执行以下命令："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "cd MyApp\nyarn add ../RTNCenteredText\ncd ..\nnode MyApp/node_modules/react-native/scripts/generate-artifacts.js \\\n  --path MyApp/ \\\n  --outputPath RTNCenteredText/generated/\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这脚本首先使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yarn add"
      }), " 将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 模块添加到 App。然后通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "generate-artifacts.js"
      }), " 脚本调用 Codegen。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--path"
      }), " 选项用于声明 App 的路径，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--outputPath"
      }), " 选项用于声明 Codegen 生成代码的存放路径。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "命令执行后将呈现以下目录文件结构："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "generated\n└── build\n    └── generated\n        └── ios\n            ├── FBReactNativeSpec\n            │   ├── FBReactNativeSpec-generated.mm\n            │   └── FBReactNativeSpec.h\n            ├── RCTThirdPartyFabricComponentsProvider.h\n            ├── RCTThirdPartyFabricComponentsProvider.mm\n            └── react\n                └── renderer\n                    └── components\n                        ├── RTNCenteredTextSpecs\n                        │   ├── ComponentDescriptors.h\n                        │   ├── EventEmitters.cpp\n                        │   ├── EventEmitters.h\n                        │   ├── Props.cpp\n                        │   ├── Props.h\n                        │   ├── RCTComponentViewHelpers.h\n                        │   ├── ShadowNodes.cpp\n                        │   └── ShadowNodes.h\n                        └── rncore\n                            ├── ComponentDescriptors.h\n                            ├── EventEmitters.cpp\n                            ├── EventEmitters.h\n                            ├── Props.cpp\n                            ├── Props.h\n                            ├── RCTComponentViewHelpers.h\n                            ├── ShadowNodes.cpp\n                            └── ShadowNodes.h\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["生成的组件的路径为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "generated/build/generated/ios/react/renderer/components/RTNCenteredTextSpecs"
      }), "，此目录包含了您在开发组件时必备的生成代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["查看 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./pillars-codegen",
        children: "Codegen"
      }), " 章节文档可获得更多文件生成相关细节。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      title: "备注",
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 生成脚手架代码时，iOS 平台中不会自动清空 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "build"
        }), " 目录。假如您需要修改接口声明文件的命名，并重新执行了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), "，旧的代码会保留下来。如果发生了这种情况，您需要在重新执行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 之前删除 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "build"
        }), " 目录。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "cd MyApp/ios\nrm -rf build\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "编写-ios-原生代码",
      children: "编写 iOS 原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在脚手架代码已生成完毕，是时候为您的 Fabric 组件编写原生代码了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您需要在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText/ios"
      }), " 目录创建三个文件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredTextManager.mm"
        }), "：声明组件导出内容的 Objective-C++ 文件上面的内容包含了一些描述性的信息"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredText.h"
        }), "：原生视图的头文件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredText.mm"
        }), "：实现原生视图的代码文件"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtextmanagermm",
      children: "RTNCenteredTextManager.mm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"RTNCenteredTextManager.mm\"",
        children: "#import <React/RCTLog.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTViewManager.h>\n\n@interface RTNCenteredTextManager : RCTViewManager\n@end\n\n@implementation RTNCenteredTextManager\n\nRCT_EXPORT_MODULE(RTNCenteredText)\n\nRCT_EXPORT_VIEW_PROPERTY(text, NSString)\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个文件是针对 Fabric 组件的 Manager。React Native 运行时使用 Manager 对象来注册模块、属性及方法，使其能在 JavaScript 调用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_MODULE"
      }), " 是至关重要的，它将导出模块让 Fabric 获取到并进行实例化。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来，你需要暴露 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "text"
      }), " 属性给 Fabric 组件，使用宏定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_VIEW_PROPERTY"
      }), " 来声明属性名及其类型。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["您可以查看 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/main/React/Base/RCTViewManager.h",
          children: "RCTViewManager.h"
        }), " 代码，了解更多用于导出属性、Emitter 及其它结构的宏定义。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtexth",
      children: "RTNCenteredText.h"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"RTNCenteredText.h\"",
        children: "#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RTNCenteredText : RCTViewComponentView\n\n@end\n\nNS_ASSUME_NONNULL_END\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此文件定义了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 的视图接口，我们可以在这里添加可被视图触发的方法。在本指引中，我们什么都不用做，所以这个接口是空的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtextmm",
      children: "RTNCenteredText.mm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        metastring: "title=\"RTNCenteredText.mm\"",
        children: "#import \"RTNCenteredText.h\"\n\n#import <react/renderer/components/RTNCenteredTextSpecs/ComponentDescriptors.h>\n#import <react/renderer/components/RTNCenteredTextSpecs/EventEmitters.h>\n#import <react/renderer/components/RTNCenteredTextSpecs/Props.h>\n#import <react/renderer/components/RTNCenteredTextSpecs/RCTComponentViewHelpers.h>\n\n#import \"RCTFabricComponentsPlugins.h\"\n\nusing namespace facebook::react;\n\n@interface RTNCenteredText () <RCTRTNCenteredTextViewProtocol>\n@end\n\n@implementation RTNCenteredText {\n  UIView *_view;\n  UILabel *_label;\n}\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n  return concreteComponentDescriptorProvider<RTNCenteredTextComponentDescriptor>();\n}\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  if (self = [super initWithFrame:frame]) {\n    static const auto defaultProps = std::make_shared<const RTNCenteredTextProps>();\n    _props = defaultProps;\n\n    _view = [[UIView alloc] init];\n    _view.backgroundColor = [UIColor redColor];\n\n    _label = [[UILabel alloc] init];\n    _label.text = @\"Initial value\";\n    [_view addSubview:_label];\n\n    _label.translatesAutoresizingMaskIntoConstraints = false;\n    [NSLayoutConstraint activateConstraints:@[\n      [_label.leadingAnchor constraintEqualToAnchor:_view.leadingAnchor],\n      [_label.topAnchor constraintEqualToAnchor:_view.topAnchor],\n      [_label.trailingAnchor constraintEqualToAnchor:_view.trailingAnchor],\n      [_label.bottomAnchor constraintEqualToAnchor:_view.bottomAnchor],\n    ]];\n\n    _label.textAlignment = NSTextAlignmentCenter;\n\n    self.contentView = _view;\n  }\n\n  return self;\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  const auto &oldViewProps = *std::static_pointer_cast<RTNCenteredTextProps const>(_props);\n  const auto &newViewProps = *std::static_pointer_cast<RTNCenteredTextProps const>(props);\n\n  if (oldViewProps.text != newViewProps.text) {\n    _label.text = [[NSString alloc] initWithCString:newViewProps.text.c_str() encoding:NSASCIIStringEncoding];\n  }\n\n  [super updateProps:props oldProps:oldProps];\n}\n\n@end\n\nClass<RCTComponentViewProtocol> RTNCenteredTextCls(void)\n{\n  return RTNCenteredText.class;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个文件包含了视图的实现代码。首先它导入了部分从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成代码。组件必须要遵循由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成的特定协议，在本例中为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRTNCenteredTextViewProtocol"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来定义了静态方法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "(ComponentDescriptorProvider)componentDescriptorProvider"
      }), "，Fabric 将使用此方法来获得组件的 Descriptor Provider，以此实例化组件对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["之后是视图的构造器 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "init"
      }), " 方法。在这个方法中，使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextProps"
      }), " 类型创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultProps"
      }), " 结构对象特别重要。你需要将其赋值给私有属性 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "_props"
      }), " 以正确初始化 Fabric 组件。方法的后续部分是标准的 Objective-C 代码，作用是使用 AutoLayout 布局创建的视图。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后还有两个方法，分别是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "updateProps"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextCls"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "updateProps"
      }), " 会在每次 JavaScript 修改 props 时被 Fabric 调用。通过函数参数传入的 props 会被转换为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextProps"
      }), " 类型，而且它们会在必要的时候更新原生代码。请注意，要在此方法的最后调用超类的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "[super updateProps]"
      }), " 方法，否则对象 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "props"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "oldProps"
      }), " 会一直保持相同的值，因此您将无法用它们进行操作或更新组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextCls"
      }), " 是个另一个静态方法，用于在运行时正确获取实例的类。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["与原生组件不同的是，Fabric 组件必须手动实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "updateProps"
        }), " 方法。单单使用宏定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_EXPORT_XXX"
        }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_REMAP_XXX"
        }), " 还不足以导出组件的属性。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "android",
      children: "Android"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Android 的操作与 iOS 类似，我们需要先生成代码，然后再编写组件的原生代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "android-的代码生成",
      children: "Android 的代码生成"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们需要手动调用 Codegen 来生成 Android 平台代码。这和我们在 iOS 平台的操作相似：首先向 App 添加 Java 包，然后调用脚本生成代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        metastring: "title=\"Android 的代码生成\"",
        children: "cd MyApp\nyarn add ../RTNCenteredText\ncd android\n./gradlew generateCodegenArtifactsFromSchema\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个脚本会向 App 添加 Java 包，然后打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android"
      }), " 目录，创建一个 Gradle 任务来生成代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "备注",
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["在运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 之前，您需要在 Android 中的 App 启动新架构。您可以通过修改 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gradle.properties"
        }), " 文件中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "newArchEnabled"
        }), " 属性，将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "false"
        }), " 改为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["生成后的代码保存在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyApp/node_modules/rtn-centered-text/android/build/generated/source/codegen"
      }), " 目录，并呈以下结构："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-title=\"Android",
        metastring: "生成代码\"",
        children: "codegen\n├── java\n│   └── com\n│       └── facebook\n│           └── react\n│               └── viewmanagers\n│                   ├── RTNCenteredTextManagerDelegate.java\n│                   └── RTNCenteredTextManagerInterface.java\n├── jni\n│   ├── Android.mk\n│   ├── CMakeLists.txt\n│   ├── RTNCenteredText-generated.cpp\n│   ├── RTNCenteredText.h\n│   └── react\n│       └── renderer\n│           └── components\n│               └── RTNCenteredText\n│                   ├── ComponentDescriptors.h\n│                   ├── EventEmitters.cpp\n│                   ├── EventEmitters.h\n│                   ├── Props.cpp\n│                   ├── Props.h\n│                   ├── ShadowNodes.cpp\n│                   └── ShadowNodes.h\n└── schema.json\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你会发现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "codegen/jni/react/renderer/components/RTNCenteredTextSpecs"
      }), " 的内容和 iOS 平台生成的代码差不多。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Android.mk"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CMakeList.txt"
      }), " 在 App 内用于 Fabric 组件配置，而 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManagerDelegate.java"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManagerInterface.java"
      }), " 会用在组件的 Manager。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["查看 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./pillars-codegen",
        children: "Codegen"
      }), " 章节文档可获得更多文件生成相关细节。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "编写原生代码",
      children: "编写原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Android 平台中 Fabric 组件的原生代码必须包含以下三个部分："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredText.java"
        }), " 用于渲染原生视图"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredTextManager.java"
        }), " 用于实例化原生视图"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["最后，您需要在之前创建的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCenteredTextPackage.java"
        }), " 实现具体的逻辑代码"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "您的 Android 第三方库目录文件结构应为如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-title=\"Android",
        metastring: "目录文件结构\"",
        children: "android\n├── build.gradle\n└── src\n    └── main\n        ├── AndroidManifest.xml\n        └── java\n            └── com\n                └── rtncenteredtext\n                    ├── RTNCenteredText.java\n                    ├── RTNCenteredTextManager.java\n                    └── RTNCenteredTextPackage.java\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtextjava",
      children: "RTNCenteredText.java"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title=\"RTNCenteredText\"",
        children: "package com.rtncenteredtext;\n\nimport androidx.annotation.Nullable;\nimport android.content.Context;\nimport android.util.AttributeSet;\nimport android.graphics.Color;\n\nimport android.widget.TextView;\nimport android.view.Gravity;\n\npublic class RTNCenteredText extends TextView {\n\n    public RTNCenteredText(Context context) {\n        super(context);\n        this.configureComponent();\n    }\n\n    public RTNCenteredText(Context context, @Nullable AttributeSet attrs) {\n        super(context, attrs);\n        this.configureComponent();\n    }\n\n    public RTNCenteredText(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {\n        super(context, attrs, defStyleAttr);\n        this.configureComponent();\n    }\n\n    private void configureComponent() {\n        this.setBackgroundColor(Color.RED);\n        this.setGravity(Gravity.CENTER_HORIZONTAL);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个类表示的是原生视图，将由 Android 渲染到屏幕上。它继承了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextView"
      }), " 并且调用私有方法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureComponent()"
      }), " 来配置自身的基本参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtextmanagerjava",
      children: "RTNCenteredTextManager.java"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title=\"RTNCenteredTextManager.java\"",
        children: "package com.rtncenteredtext;\n\nimport androidx.annotation.NonNull;\nimport androidx.annotation.Nullable;\n\nimport com.facebook.react.bridge.ReadableArray;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.annotations.ReactModule;\nimport com.facebook.react.uimanager.SimpleViewManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\nimport com.facebook.react.uimanager.ViewManagerDelegate;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.viewmanagers.RTNCenteredTextManagerInterface;\nimport com.facebook.react.viewmanagers.RTNCenteredTextManagerDelegate;\n\n\n@ReactModule(name = RTNCenteredTextManager.NAME)\npublic class RTNCenteredTextManager extends SimpleViewManager<RTNCenteredText>\n        implements RTNCenteredTextManagerInterface<RTNCenteredText> {\n\n    private final ViewManagerDelegate<RTNCenteredText> mDelegate;\n\n    static final String NAME = \"RTNCenteredText\";\n\n    public RTNCenteredTextManager(ReactApplicationContext context) {\n        mDelegate = new RTNCenteredTextManagerDelegate<>(this);\n    }\n\n    @Nullable\n    @Override\n    protected ViewManagerDelegate<RTNCenteredText> getDelegate() {\n        return mDelegate;\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        return RTNCenteredTextManager.NAME;\n    }\n\n    @NonNull\n    @Override\n    protected RTNCenteredText createViewInstance(@NonNull ThemedReactContext context) {\n        return new RTNCenteredText(context);\n    }\n\n    @Override\n    @ReactProp(name = \"text\")\n    public void setText(RTNCenteredText view, @Nullable String text) {\n        view.setText(text);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManager"
      }), " 类用于让 React Native 实例化原生组件，它实现了由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成的接口（见 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "implements"
      }), " 语句的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManagerInterface"
      }), " 接口）并使用了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManagerDelegate"
      }), " 类。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["它同时负责导出所有 React Native 所需的内容，例如使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactModule"
      }), " 注解的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManager"
      }), " 类，及使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@ReactProp"
      }), " 注解的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setText"
      }), " 方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncenteredtextpackagejava",
      children: "RTNCenteredTextPackage.java"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android/src/main/java/com/rtncenteredtext"
      }), " 目录的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextPackage.java"
      }), "，并进行以下修改："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"RTNCenteredTextPackage update\"",
        children: "package com.rtncenteredtext;\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.Collections;\nimport java.util.List;\n\npublic class RTNCenteredTextPackage implements ReactPackage {\n\n    @Override\n    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n+        return Collections.singletonList(new RTNCenteredTextManager(reactContext));;\n    }\n\n    @Override\n    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {\n        return Collections.emptyList();\n    }\n\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["新增的代码实例化了一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredTextManager"
      }), " 对象，用于让 React Natve 运行时渲染 Fabric 组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-将-fabric-组件添加到-app",
      children: "5. 将 Fabric 组件添加到 App"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "完成最后这一步，您便能将 Fabric 组件运行在 App 上。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "shared-1",
      children: "Shared"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "首先，您需要将包含组件的 NPM 包添加到您的 App。您可以使用以下命令执行此操作："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "cd MyApp\nyarn add ../RTNCenteredText\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此命令会将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCenteredText"
      }), " 模块添加到 App 内的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "node_modules"
      }), " 目录。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ios-1",
      children: "iOS"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来，您需要添加新的依赖到您的 iOS 工程，您也可以通过以下命令执行此操作："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "cd ios\nRCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此命令会查询 iOS 工程里的所有的依赖，并对它们进行安装。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_NEW_ARCH_ENABLED=1"
      }), " 的意思是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cocoapods"
      }), " 在执行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 前需要一些额外的操作。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "备注",
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["在使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_NEW_ARCH_ENABLED=1"
        }), " 之前，您可能需要先执行一遍 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "bundle install"
        }), "。后续除非修改了 Rudy 依赖，您不必再次运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "bundle install"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "android-1",
      children: "Android"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在配置 Android 之前，您需要先开启", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "新架构"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "android/gradle.properties"
        }), "；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["滑到文件底部，将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "newArchEnabled"
        }), " 的值从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "false"
        }), " 修改为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "javascript",
      children: "JavaScript"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "最后，操作以下步骤，您就可以在 JavaScript 调用组件了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["在 js 文件中导入组件。假设您要在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "App.js"
          }), " 进行导入，您需要添加这行代码："]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-js",
            metastring: "title=\"App.js\"",
            children: "import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "接下来，在 React Native 组件里进行调用。调用的语法和其它组件相同："
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-js",
            metastring: "title=\"App.js\"",
            children: "// ... other code\nconst App: () => Node = () => {\n  // ... other App code ...\n  return (\n    // ...other React Native elements...\n    <RTNCenteredText\n      text=\"Hello World!\"\n      style={{ width: '100%', height: 30 }}\n    />\n    // ...other React Native Elements\n  );\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，您可以运行 App 并查看在屏幕上显示的组件。"
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