exports.id = 69412;
exports.ids = [69412];
exports.modules = {

/***/ 20912:
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

/***/ 20487:
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
/* harmony import */ var _markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20912);


const frontMatter = {
	id: 'pillars-turbomodules',
	title: 'TurboModules'
};
const contentTitle = undefined;
const metadata = {
  "id": "the-new-architecture/pillars-turbomodules",
  "title": "TurboModules",
  "description": "如果您使用过 React Native，您可能了解过 Native Modules 这个概念。它可以通过 React Native 的「Bridge」帮助 JavaScript 和原生代码进行交互，并使用跨平台的数据格式 JSON 进行通讯。",
  "source": "@site/versioned_docs/version-0.74/the-new-architecture/pillars-turbomodule.md",
  "sourceDirName": "the-new-architecture",
  "slug": "/the-new-architecture/pillars-turbomodules",
  "permalink": "/docs/0.74/the-new-architecture/pillars-turbomodules",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars-turbomodule.md",
  "tags": [],
  "version": "0.74",
  "frontMatter": {
    "id": "pillars-turbomodules",
    "title": "TurboModules"
  },
  "sidebar": "docs",
  "previous": {
    "title": "新架构的两大支柱",
    "permalink": "/docs/0.74/the-new-architecture/pillars"
  },
  "next": {
    "title": "Fabric 组件",
    "permalink": "/docs/0.74/the-new-architecture/pillars-fabric-components"
  }
};
const assets = {

};







const toc = [..._markdown_new_architecture_warning_mdx__WEBPACK_IMPORTED_MODULE_4__/* .toc */ .RM, {
  "value": "如何创建 TurboModule",
  "id": "如何创建-turbomodule",
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
  "value": "3. 模块配置",
  "id": "3-模块配置",
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
  "value": "<code>ReactPackage</code> 类",
  "id": "reactpackage-类",
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
  "value": "RTNCalculator.h",
  "id": "rtncalculatorh",
  "level": 5
}, {
  "value": "RTNCalculator.mm",
  "id": "rtncalculatormm",
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
  "value": "编写 Android 原生代码",
  "id": "编写-android-原生代码",
  "level": 4
}, {
  "value": "创建 <code>CalculatorModule.java</code>",
  "id": "创建-calculatormodulejava",
  "level": 5
}, {
  "value": "修改 <code>CalculatorPackage.java</code>",
  "id": "修改-calculatorpackagejava",
  "level": 5
}, {
  "value": "5. 将 Turbo Native Module 添加到 App",
  "id": "5-将-turbo-native-module-添加到-app",
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
      children: ["如果您使用过 React Native，您可能了解过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.74/native-modules-intro",
        children: "Native Modules"
      }), " 这个概念。它可以通过 React Native 的「Bridge」帮助 JavaScript 和原生代码进行交互，并使用跨平台的数据格式 JSON 进行通讯。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Turbo Native Modules 与 Native Modules 相比，存在以下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./why",
        children: "优势"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "各个平台的强类型接口声明是一致的；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "您可以使用 C++ 编写模块或迁移其它平台的原生代码，以此避免在跨平台重复实现模块；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "模块支持懒加载，可以加快 App 启动速度；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "通过替换 Bridge 为 JSI（使用原生代码编写的 JavaScript 接口），提升 JavaScript 与原生代码的通讯效率。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "本文档将指导您如何创建一个兼容 React Native 0.70.0 的基础 Turbo Native Module 。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["使用 Turbo Native Module 前必须", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "开启新架构"
        }), "。若要了解如何将代码迁移到新架构，您可参考此", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../new-architecture-intro",
          children: "迁移指南"
        }), "。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "如何创建-turbomodule",
      children: "如何创建 TurboModule"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "创建一个 Turbo Native Module 分为以下步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "声明 JavaScript 接口类型；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "配置模块以支持 Codegen 自动生成脚手架代码；"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "编写原生代码完成模块实现。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-目录配置",
      children: "1. 目录配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了使模块与 App 保持解耦，有个不错的方案是将模块从 App 抽离出来，并添加为 App 的一个依赖。如果您打算开发一个开源的 Turbo Native Module，您同样也需要这么做。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["打开您的 App，创建一个名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 的目录。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "RTN"
      }), " 的意思是「", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "R"
      }), "eac", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "t"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "N"
      }), "ative」，同时它也是推荐的 React Native 模块前缀命名。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 目录中，创建三个子目录：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "js"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ios"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "android"
      }), "。创建后的目录结构是这样的："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "TurboModulesGuide\n├── MyApp\n└── RTNCalculator\n    ├── android\n    ├── ios\n    └── js\n"
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
          children: "Native<MODULE_NAME>"
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
          children: "TurboModuleRegistrySpec"
        }), " 对象"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "turbomodule-specs",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultJavaScriptSpecLanguages),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().javaScriptSpecLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            metastring: "title=\"NativeCalculator.js\"",
            children: "// @flow\nimport type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';\nimport { TurboModuleRegistry } from 'react-native';\n\nexport interface Spec extends TurboModule {\n  add(a: number, b: number): Promise<number>;\n}\nexport default (TurboModuleRegistry.get<Spec>(\n  'RTNCalculator'\n): ?Spec);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            metastring: "title=\"NativeCalculator.ts\"",
            children: "import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';\nimport {TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  add(a: number, b: number): Promise<number>;\n}\n\nexport default TurboModuleRegistry.get<Spec>(\n  'RTNCalculator',\n) as Spec | null;\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在代码顶部需导入以下两个声明文件："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["类型 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TurboModule"
        }), " ：定义 Turbo Native Module 的基础接口"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["JS 模块 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TurboModuleRegistry"
        }), "：包含了用于加载 Turbo Native Module 的函数"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["代码的第二个部分就是针对 Turbo Native Module 的接口声明。在本例中，接口声明了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "add"
      }), " 函数，它将用于接受两个数字并返回一个包装数字的 Promise。为声明 Turbo Native Module，此接口", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "必须"
      }), "命名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Spec"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboModuleRegistry.get"
      }), " 并传入模块名，它将在 Turbo Native Module 可用的时候进行加载。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "注意",
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "当我们在编写 JavaScript 代码时，如果没有配置好对应的模块或依赖安装，就从第三方库导入类型，可能会使的您的 IDE 不能正确载入导入声明，从而显示错误或警告。这种情况是正常的，它不会在您添加模块到 App 的时候出现问题。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-模块配置",
      children: "3. 模块配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接下来，您需要为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.74/the-new-architecture/pillars-codegen",
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
      }), " 文件中的一个配置项，它将在 yarn 安装您的模块时被调用。请在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 的根目录创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 文件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"package.json\"",
        children: "{\n  \"name\": \"rtn-calculator\",\n  \"version\": \"0.0.1\",\n  \"description\": \"Add numbers with TurboModules\",\n  \"react-native\": \"js/index\",\n  \"source\": \"js/index\",\n  \"files\": [\n    \"js\",\n    \"android\",\n    \"ios\",\n    \"rtn-calculator.podspec\",\n    \"!android/build\",\n    \"!ios/build\",\n    \"!**/__tests__\",\n    \"!**/__fixtures__\",\n    \"!**/__mocks__\"\n  ],\n  \"keywords\": [\"react-native\", \"ios\", \"android\"],\n  \"repository\": \"https://github.com/<your_github_handle>/rtn-calculator\",\n  \"author\": \"<Your Name> <your_email@your_provider.com> (https://github.com/<your_github_handle>)\",\n  \"license\": \"MIT\",\n  \"bugs\": {\n    \"url\": \"https://github.com/<your_github_handle>/rtn-calculator/issues\"\n  },\n  \"homepage\": \"https://github.com/<your_github_handle>/rtn-calculator#readme\",\n  \"devDependencies\": {},\n  \"peerDependencies\": {\n    \"react\": \"*\",\n    \"react-native\": \"*\"\n  },\n  \"codegenConfig\": {\n    \"name\": \"RTNCalculatorSpec\",\n    \"type\": \"modules\",\n    \"jsSrcsDir\": \"js\",\n    \"android\": {\n      \"javaPackageName\": \"com.rtncalculator\"\n    }\n  }\n}\n"
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
        }), "：在这个 npm 包里的模块类型。在本例中，我们开发的是 Turbo Native Module，所以值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "modules"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jsSrcsDir"
        }), "：用于找到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "js"
        }), " 接口声明文件的相对路径，它将被 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 解析"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "android.javaPackageName"
        }), "：由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 生成的 Java 包名 (需与 AndroidManifest.xml 中包名一致)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "ios创建-podspec-文件",
      children: ["iOS：创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "podspec"
      }), " 文件"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["针对 iOS 平台，您需要创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rtn-calculator.podspec"
      }), " 文件，它将您的模块定义为 App 里的一个依赖。文件要放在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 根目录，与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ios"
      }), " 目录处于同一个位置。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "文件内容如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ruby",
        metastring: "title=\"rtn-calculator.podspec\"",
        children: "require \"json\"\n\npackage = JSON.parse(File.read(File.join(__dir__, \"package.json\")))\n\nPod::Spec.new do |s|\n  s.name            = \"rtn-calculator\"\n  s.version         = package[\"version\"]\n  s.summary         = package[\"description\"]\n  s.description     = package[\"description\"]\n  s.homepage        = package[\"homepage\"]\n  s.license         = package[\"license\"]\n  s.platforms       = { :ios => \"11.0\" }\n  s.author          = package[\"author\"]\n  s.source          = { :git => package[\"repository\"], :tag => \"#{s.version}\" }\n\n  s.source_files    = \"ios/**/*.{h,m,mm,swift}\"\n\n  install_modules_dependencies(s)\nend\n"
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
        children: "rtn-calculator"
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
        children: "android\n├── build.gradle\n└── src\n    └── main\n        ├── AndroidManifest.xml\n        └── java\n            └── com\n                └── rtncalculator\n                    └── CalculatorPackage.java\n"
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
        children: "buildscript {\n  ext.safeExtGet = {prop, fallback ->\n    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback\n  }\n  repositories {\n    google()\n    gradlePluginPortal()\n  }\n  dependencies {\n    classpath(\"com.android.tools.build:gradle:7.1.1\")\n  }\n}\n\napply plugin: 'com.android.library'\napply plugin: 'com.facebook.react'\n\nandroid {\n  compileSdkVersion safeExtGet('compileSdkVersion', 31)\n}\n\nrepositories {\n  maven {\n    // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm\n    url \"$projectDir/../node_modules/react-native/android\"\n  }\n  mavenCentral()\n  google()\n}\n\ndependencies {\n  implementation 'com.facebook.react:react-native:+'\n}\n"
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
        children: "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n          package=\"com.rtncalculator\">\n</manifest>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这个 manifest 文件的用途是声明您开发的模块的 Java 包。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "reactpackage-类",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ReactPackage"
      }), " 类"]
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
        children: "android/src/main/java/com/rtncalculator"
      }), " 目录，在这个目录内创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalculatorPackage.java"
      }), " 文件"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title=\"CalculatorPackage.java\"",
        children: "package com.rtncalculator;\n\nimport androidx.annotation.Nullable;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.model.ReactModuleInfoProvider;\nimport com.facebook.react.TurboReactPackage;\n\nimport java.util.Collections;\nimport java.util.List;\n\npublic class CalculatorPackage extends TurboReactPackage {\n\n  @Nullable\n  @Override\n  public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n          return null;\n  }\n\n  @Override\n  public ReactModuleInfoProvider getReactModuleInfoProvider() {\n      return null;\n  }\n}\n"
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
      children: "最后一步是让您的 Turbo Native Module 准备运行，您需要编写一些让 JavaScript 与原生平台交互的代码。这包含两个主要步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 并查看其生成的代码；"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写原生代码，实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Codegen"
        }), " 生成的接口。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在开发一个使用 Turbo Native Module 的 React Native App 时，将由 App 负责使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成代码。但在开发 TurboModule 第三方库时，我们需要引用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 的生成代码，因此查看生成的代码是很有帮助的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先，为生成 iOS 和 Android 平台的代码，本指导将向您展示如何手动执行由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Codegen"
      }), " 生成的脚本，以及生成所需要的平台代码。您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.74/the-new-architecture/pillars-codegen",
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
        metastring: "title=\"Running Codegen for iOS\"",
        children: "cd MyApp\nyarn add ../RTNCalculator\ncd ..\nnode MyApp/node_modules/react-native/scripts/generate-codegen-artifacts .js \\\n  --path MyApp/ \\\n  --outputPath RTNCalculator/generated/\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这脚本首先使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yarn add"
      }), " 将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 模块添加到 App。然后通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "generate-codegen-artifacts.js"
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
        children: "generated\n└── build\n    └── generated\n        └── ios\n            ├── FBReactNativeSpec\n            │   ├── FBReactNativeSpec-generated.mm\n            │   └── FBReactNativeSpec.h\n            ├── RCTThirdPartyFabricComponentsProvider.h\n            ├── RCTThirdPartyFabricComponentsProvider.mm\n            ├── RTNCalculatorSpec\n            │   ├── RTNCalculatorSpec-generated.mm\n            │   └── RTNCalculatorSpec.h\n            └── react\n                └── renderer\n                    └── components\n                        └── rncore\n                            ├── ComponentDescriptors.h\n                            ├── EventEmitters.cpp\n                            ├── EventEmitters.h\n                            ├── Props.cpp\n                            ├── Props.h\n                            ├── RCTComponentViewHelpers.h\n                            ├── ShadowNodes.cpp\n                            └── ShadowNodes.h\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Turbo Native Module 接口的路径为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "generated/build/generated/ios/RTNCalculatorSpec"
      }), "。"]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在可以开始为您的 Turbo Native Module 编写原生代码了。在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator/ios"
      }), " 目录创建两个文件："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCalculator.h"
        }), "：模块的头文件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RTNCalculator.mm"
        }), "：实现模块的代码"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncalculatorh",
      children: "RTNCalculator.h"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"RTNCalculator.h\"",
        children: "#import <React/RCTBridgeModule.h>\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RTNCalculator : NSObject <RCTBridgeModule>\n\n@end\n\nNS_ASSUME_NONNULL_END\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此文件定义了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
      }), " 接口，我们可以在这里添加可被视图触发的方法。在本指引中，我们什么都不用做，所以这个接口是空的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "rtncalculatormm",
      children: "RTNCalculator.mm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objc",
        metastring: "title=\"RTNCalculator.mm\"",
        children: "#import \"RTNCalculatorSpec.h\"\n#import \"RTNCalculator.h\"\n\n@implementation RTNCalculator\n\nRCT_EXPORT_MODULE(RTNCalculator)\n\nRCT_REMAP_METHOD(add, addA:(NSInteger)a\n                      andB:(NSInteger)b\n                withResolver:(RCTPromiseResolveBlock) resolve\n                withRejecter:(RCTPromiseRejectBlock) reject)\n{\n    NSNumber *result = [[NSNumber alloc] initWithInteger:a+b];\n    resolve(result);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:\n    (const facebook::react::ObjCTurboModule::InitParams &)params\n{\n    return std::make_shared<facebook::react::NativeCalculatorSpecJSI>(params);\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_MODULE"
      }), " 是至关重要的，它将导出模块让 React Native 能够加载此 Turbo Native Module。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后使用宏定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_REMAP_METHOD"
      }), " 暴露 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "add"
      }), " 方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getTurboModule"
      }), " 方法将获取 Turbo Native Module 实例，以此使 JavaScript 能够执行模块的方法。这个方法在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculatorSpec.h"
      }), " 中声明，并且是之前由 Codegen 生成的代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "提示",
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["您可以查看 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/main/React/Base/RCTBridgeModule.h",
          children: "RCTBridgeModule.h"
        }), " 代码，了解更多用于导出模块及其方法的宏定义。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "android",
      children: "Android"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Android 的操作与 iOS 类似，我们需要先生成针对 Android 平台的代码，然后再编写 TurboModule 的原生代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "android-的代码生成",
      children: "Android 的代码生成"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们需要手动调用 Codegen 来生成 Android 平台代码。这和我们在 iOS 平台的操作相似：首先向 App 添加 Java 包，然后调用脚本生成代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        metastring: "title=\"Running Codegen for Android\"",
        children: "cd MyApp\nyarn add ../RTNCalculator\ncd android\n./gradlew generateCodegenArtifactsFromSchema\n"
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
        children: "MyApp/node_modules/rtn-calculator/android/build/generated/source/codegen"
      }), " 目录，并呈以下结构："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-title=\"Android",
        metastring: "生成代码\"",
        children: "codegen\n├── java\n│   └── com\n│       └── RTNCalculator\n│           └── NativeCalculatorSpec.java\n├── jni\n│   ├── Android.mk\n│   ├── RTNCalculator-generated.cpp\n│   ├── RTNCalculator.h\n│   └── react\n│       └── renderer\n│           └── components\n│               └── RTNCalculator\n│                   ├── ComponentDescriptors.h\n│                   ├── EventEmitters.cpp\n│                   ├── EventEmitters.h\n│                   ├── Props.cpp\n│                   ├── Props.h\n│                   ├── ShadowNodes.cpp\n│                   └── ShadowNodes.h\n└── schema.json\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "编写-android-原生代码",
      children: "编写 Android 原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Android 平台上 Turbo Native Module 的原生代码需执行如下步骤："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["创建用于实现模块的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CalculatorModule.java"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["修改之前生成的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CalculatorPackage.java"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "您的 Android 第三方库目录文件结构应为如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-title=\"Android",
        metastring: "目录结构\"",
        children: "android\n├── build.gradle\n└── src\n    └── main\n        ├── AndroidManifest.xml\n        └── java\n            └── com\n                └── rtncalculator\n                    ├── CalculatorModule.java\n                    └── CalculatorPackage.java\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h5, {
      id: "创建-calculatormodulejava",
      children: ["创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalculatorModule.java"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        metastring: "title=\"CalculatorModule.java\"",
        children: "package com.rtncalculator;\n\nimport androidx.annotation.NonNull;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class CalculatorModule extends NativeCalculatorSpec {\n\n    public static String NAME = \"RTNCalculator\";\n\n    CalculatorModule(ReactApplicationContext context) {\n        super(context);\n    }\n\n    @Override\n    @NonNull\n    public String getName() {\n        return NAME;\n    }\n\n    @Override\n    public void add(double a, double b, Promise promise) {\n        promise.resolve(a + b);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个类实现了模块的功能，它继承了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeCalculatorSpec"
      }), " 类，而这个类是之前从 JavaScript 接口声明文件 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeCalculator"
      }), " 自动生成的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h5, {
      id: "修改-calculatorpackagejava",
      children: ["修改 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalculatorPackage.java"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"CalculatorPackage.java\"",
        children: "package com.rtncalculator;\n\nimport androidx.annotation.Nullable;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\n+ import com.facebook.react.module.model.ReactModuleInfo;\nimport com.facebook.react.module.model.ReactModuleInfoProvider;\nimport com.facebook.react.TurboReactPackage;\n\nimport java.util.Collections;\nimport java.util.List;\n+ import java.util.HashMap;\n+ import java.util.Map;\n\npublic class CalculatorPackage extends TurboReactPackage {\n\n  @Nullable\n  @Override\n  public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n+      if (name.equals(CalculatorModule.NAME)) {\n+          return new CalculatorModule(reactContext);\n+      } else {\n          return null;\n+      }\n  }\n\n\n  @Override\n  public ReactModuleInfoProvider getReactModuleInfoProvider() {\n-      return null;\n+      return () -> {\n+          final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();\n+          moduleInfos.put(\n+                  CalculatorModule.NAME,\n+                  new ReactModuleInfo(\n+                          CalculatorModule.NAME,\n+                          CalculatorModule.NAME,\n+                          false, // canOverrideExistingModule\n+                          false, // needsEagerInit\n+                          true, // hasConstants\n+                          false, // isCxxModule\n+                          true // isTurboModule\n+          ));\n+          return moduleInfos;\n+      };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这就是 Android 平台原生代码的最后一部分，它定义了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TurboReactPackage"
      }), " 对象，这个对象将用于 App 的模块加载。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-将-turbo-native-module-添加到-app",
      children: "5. 将 Turbo Native Module 添加到 App"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在您可以将 Turbo Native Module 添加到您的 App 中了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "shared-1",
      children: "Shared"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "首先，您需要将包含模块的 NPM 包添加到您的 App。您可以使用以下命令执行此操作："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "cd MyApp\nyarn add ../RTNCalculator\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["此命令会将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RTNCalculator"
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
      children: "现在您可以在您的 App 中使用 Turbo Native Module 了！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以下是一个在 App.js 中调用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "add"
      }), " 方法的例子："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"App.js\"",
        children: "/**\n * Sample React Native App\n * https://github.com/facebook/react-native\n *\n * @format\n * @flow strict-local\n */\nimport React from 'react';\nimport {useState} from 'react';\nimport type {Node} from 'react';\nimport {\n  SafeAreaView,\n  StatusBar,\n  Text,\n  Button,\n} from 'react-native';\nimport RTNCalculator from 'rtn-calculator/js/NativeCalculator.js';\n\nconst App: () => Node = () => {\n  const [result, setResult] = useState<number | null>(null);\n  return (\n    <SafeAreaView>\n      <StatusBar barStyle={'dark-content'} />\n      <Text style={{marginLeft: 20, marginTop: 20}}>\n        3+7={result ?? '??'}\n      </Text>\n      <Button\n        title=\"Compute\"\n        onPress={async () => {\n          const value = await RTNCalculator.add(3, 7);\n          setResult(value);\n        }}\n      />\n    </SafeAreaView>\n  );\n};\nexport default App;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "快去尝试一下，看看 Turbo Native Module 的运行效果吧！"
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