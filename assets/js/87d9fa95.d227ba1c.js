exports.id = 90000;
exports.ids = [90000];
exports.modules = {

/***/ 37642:
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


const frontMatter = {};
const contentTitle = '高级：自定义 C++ 类型';
const metadata = {
  "id": "the-new-architecture/custom-cxx-types",
  "title": "高级：自定义 C++ 类型",
  "description": "本指南假设你熟悉 纯 C++ Turbo Native 模块 指南。它将在此基础上进行构建。",
  "source": "@site/versioned_docs/version-0.76/the-new-architecture/custom-cxx-types.md",
  "sourceDirName": "the-new-architecture",
  "slug": "/the-new-architecture/custom-cxx-types",
  "permalink": "/docs/the-new-architecture/custom-cxx-types",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/custom-cxx-types.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {},
  "sidebar": "docs",
  "previous": {
    "title": "纯 C++ Turbo 原生模块",
    "permalink": "/docs/the-new-architecture/pure-cxx-modules"
  },
  "next": {
    "title": "Fabric 原生 UI 组件",
    "permalink": "/docs/fabric-native-components-introduction"
  }
};
const assets = {

};






const toc = [{
  "value": "添加一个新的自定义类型：Int64",
  "id": "添加一个新的自定义类型int64",
  "level": 2
}, {
  "value": "1. 创建桥接头文件",
  "id": "1-创建桥接头文件",
  "level": 3
}, {
  "value": "2. 修改 JS 规范",
  "id": "2-修改-js-规范",
  "level": 3
}, {
  "value": "3. 实现原生代码。",
  "id": "3-实现原生代码",
  "level": 3
}, {
  "value": "4. 在应用中测试代码",
  "id": "4-在应用中测试代码",
  "level": 3
}, {
  "value": "添加一个新的结构化自定义类型：Address",
  "id": "添加一个新的结构化自定义类型address",
  "level": 2
}, {
  "value": "1. 在规范中定义类型",
  "id": "1-在规范中定义类型",
  "level": 3
}, {
  "value": "2. 定义桥接代码",
  "id": "2-定义桥接代码",
  "level": 3
}, {
  "value": "3. 实现原生代码",
  "id": "3-实现原生代码-1",
  "level": 3
}, {
  "value": "4. Testing the code in the app.",
  "id": "4-testing-the-code-in-the-app",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "高级自定义-c-类型",
        children: "高级：自定义 C++ 类型"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["本指南假设你熟悉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/the-new-architecture/pure-cxx-modules",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "纯 C++ Turbo Native 模块"
          })
        }), " 指南。它将在此基础上进行构建。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["C++ Turbo Native Modules 支持 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/react/bridging",
        children: "桥接功能"
      }), " 大多数 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "std::"
      }), " 标准类型。你可以在模块中使用大多数这些类型，而无需任何额外代码。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果你想在应用或库中添加对新和自定义类型的支持，你需要提供必要的桥接头文件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "添加一个新的自定义类型int64",
      children: "添加一个新的自定义类型：Int64"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["C++ Turbo Native Modules 目前不支持 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "int64_t"
      }), " 数字 - 因为 JavaScript 不支持大于 2^53 的数字。为了表示大于 2^53 的数字，我们可以在 JS 中使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "string"
      }), " 类型，并自动将其转换为 C++ 中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "int64_t"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-创建桥接头文件",
      children: "1. 创建桥接头文件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "支持新自定义类型的第一步是定义桥接头文件，以处理从 JS 表示转换为 C++ 表示，以及从 C++ 表示转换为 JS 表示。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "shared"
        }), " 文件夹中，添加一个名为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Int64.h"
        }), " 的新文件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在文件中添加以下代码："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-cpp",
        metastring: "title=\"Int64.h\"",
        children: "#pragma once\n\n#include <react/bridging/Bridging.h>\n\nnamespace facebook::react {\n\ntemplate <>\nstruct Bridging<int64_t> {\n  // Converts from the JS representation to the C++ representation\n  static int64_t fromJs(jsi::Runtime &rt, const jsi::String &value) {\n    try {\n      size_t pos;\n      auto str = value.utf8(rt);\n      auto num = std::stoll(str, &pos);\n      if (pos != str.size()) {\n        throw std::invalid_argument(\"Invalid number\"); // don't support alphanumeric strings\n      }\n      return num;\n    } catch (const std::logic_error &e) {\n      throw jsi::JSError(rt, e.what());\n    }\n  }\n\n  // Converts from the C++ representation to the JS representation\n  static jsi::String toJs(jsi::Runtime &rt, int64_t value) {\n    return bridging::toJs(rt, std::to_string(value));\n  }\n};\n\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "桥接头文件的关键组件是："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["对自定义类型的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Bridging"
        }), " 结构显式特化。在这种情况下，模板指定了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "int64_t"
        }), " 类型。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "fromJs"
        }), " 函数，用于将 JS 表示转换为 C++ 表示"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "toJs"
        }), " 函数，用于将 C++ 表示转换为 JS 表示"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["对于 iOS，记得将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Int64.h"
        }), " 文件添加到 Xcode 项目中。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-修改-js-规范",
      children: "2. 修改 JS 规范"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，我们可以修改 JS 规范，添加一个使用新类型的方法。像往常一样，我们可以使用 Flow 或 TypeScript 来编写规范。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "specs/NativeSampleTurbomodule"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改规范如下："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "custom-int64",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultJavaScriptSpecLanguages),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().javaScriptSpecLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-diff",
            metastring: "title=\"NativeSampleModule.ts\"",
            children: "import {TurboModule, TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  readonly reverseString: (input: string) => string;\n+  readonly cubicRoot: (input: string) => number;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeSampleModule',\n);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-diff",
            metastring: "title=\"NativeSampleModule.js\"",
            children: "// @flow\nimport type {TurboModule} from 'react-native';\nimport { TurboModuleRegistry } from \"react-native\";\n\nexport interface Spec extends TurboModule {\n  +reverseString: (input: string) => string;\n+  +cubicRoot: (input: string) => number;\n}\n\nexport default (TurboModuleRegistry.getEnforcing<Spec>(\n  \"NativeSampleModule\"\n): Spec);\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在这个文件中，我们定义了需要在 C++ 中实现的功能。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-实现原生代码",
      children: "3. 实现原生代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，我们需要实现我们在 JS 规范中声明的功能。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "specs/NativeSampleModule.h"
        }), " 文件并应用以下更改："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"NativeSampleModule.h\"",
        children: "#pragma once\n\n#include <AppSpecsJSI.h>\n#include <memory>\n#include <string>\n\n+ #include \"Int64.h\"\n\nnamespace facebook::react {\n\nclass NativeSampleModule : public NativeSampleModuleCxxSpec<NativeSampleModule> {\npublic:\n  NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker);\n\n  std::string reverseString(jsi::Runtime& rt, std::string input);\n+ int32_t cubicRoot(jsi::Runtime& rt, int64_t input);\n};\n\n} // namespace facebook::react\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "specs/NativeSampleModule.cpp"
        }), " 文件并实现新功能："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"NativeSampleModule.cpp\"",
        children: "#include \"NativeSampleModule.h\"\n+ #include <cmath>\n\nnamespace facebook::react {\n\nNativeSampleModule::NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker)\n    : NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}\n\nstd::string NativeSampleModule::reverseString(jsi::Runtime& rt, std::string input) {\n  return std::string(input.rbegin(), input.rend());\n}\n\n+int32_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64_t input) {\n+    return std::cbrt(input);\n+}\n\n} // namespace facebook::react\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["实现代码导入 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<cmath>"
      }), " C++ 库以执行数学运算，然后使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<cmath>"
      }), " 模块中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cbrt"
      }), " 原语实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cubicRoot"
      }), " 函数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-在应用中测试代码",
      children: "4. 在应用中测试代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在，我们可以在应用中测试代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先，我们需要更新 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " 文件以使用 TurboModule 中的新方法。然后，我们可以构建应用的 Android 和 iOS 版本。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App.tsx"
        }), " 文件并应用以下更改："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"App.tsx\"",
        children: "// ...\n+ const [cubicSource, setCubicSource] = React.useState('')\n+ const [cubicRoot, setCubicRoot] = React.useState(0)\n  return (\n    <SafeAreaView style={styles.container}>\n      <View>\n        <Text style={styles.title}>\n          Welcome to C++ Turbo Native Module Example\n        </Text>\n        <Text>Write down here the text you want to revert</Text>\n        <TextInput\n          style={styles.textInput}\n          placeholder=\"Write your text here\"\n          onChangeText={setValue}\n          value={value}\n        />\n        <Button title=\"Reverse\" onPress={onPress} />\n        <Text>Reversed text: {reversedValue}</Text>\n+        <Text>For which number do you want to compute the Cubic Root?</Text>\n+        <TextInput\n+          style={styles.textInput}\n+          placeholder=\"Write your text here\"\n+          onChangeText={setCubicSource}\n+          value={cubicSource}\n+        />\n+        <Button title=\"Get Cubic Root\" onPress={() => setCubicRoot(SampleTurboModule.cubicRoot(cubicSource))} />\n+        <Text>The cubic root is: {cubicRoot}</Text>\n      </View>\n    </SafeAreaView>\n  );\n}\n//...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["要在 Android 上测试应用，从项目的根文件夹运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "yarn android"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["要在 iOS 上测试应用，从项目的根文件夹运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "yarn ios"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "添加一个新的结构化自定义类型address",
      children: "添加一个新的结构化自定义类型：Address"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "上述方法可以推广到任何类型。对于结构化类型，React Native 提供了一些辅助函数，使其更容易从 JS 桥接到 C++ 和 viceversa。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["假设我们要桥接一个自定义的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 类型，具有以下属性："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ts",
        children: "interface Address {\n  street: string;\n  num: number;\n  isInUS: boolean;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-在规范中定义类型",
      children: "1. 在规范中定义类型"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "第一步，我们在 JS 规范中定义新的自定义类型，以便 Codegen 可以输出所有支持的代码。这样，我们就不需要手动编写代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Open the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "specs/NativeSampleModule"
        }), " file and add the following changes."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "custom-int64",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultJavaScriptSpecLanguages),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().javaScriptSpecLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-diff",
            metastring: "title=\"NativeSampleModule (Add Address type and validateAddress function)\"",
            children: "import {TurboModule, TurboModuleRegistry} from 'react-native';\n\n+export type Address = {\n+  street: string,\n+  num: number,\n+  isInUS: boolean,\n+};\n\nexport interface Spec extends TurboModule {\n  readonly reverseString: (input: string) => string;\n+ readonly validateAddress: (input: Address) => boolean;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeSampleModule',\n);\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "flow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-diff",
            metastring: "title=\"NativeSampleModule (Add Address type and validateAddress function)\"",
            children: "\n// @flow\nimport type {TurboModule} from 'react-native';\nimport { TurboModuleRegistry } from \"react-native\";\n\n+export type Address = {\n+  street: string,\n+  num: number,\n+  isInUS: boolean,\n+};\n\n\nexport interface Spec extends TurboModule {\n  +reverseString: (input: string) => string;\n+ +validateAddress: (input: Address) => boolean;\n}\n\nexport default (TurboModuleRegistry.getEnforcing<Spec>(\n  \"NativeSampleModule\"\n): Spec);\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这段代码定义了新的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 类型，并为 Turbo Native Module 定义了一个新的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "validateAddress"
      }), " 函数。注意，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "validateFunction"
      }), " 需要一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 对象作为参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "也可以有返回自定义类型的函数。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-定义桥接代码",
      children: "2. 定义桥接代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["从规范中定义的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 类型，Codegen 将生成两个辅助类型：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeSampleModuleAddress"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeSampleModuleAddressBridging"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["第一个类型是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 的定义。第二个类型包含所有基础设施，以桥接从 JS 到 C++ 和 viceversa 的自定义类型。我们唯一需要添加的额外步骤是定义扩展 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeSampleModuleAddressBridging"
      }), " 类型的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Bridging"
      }), " 结构。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "shared/NativeSampleModule.h"
        }), " 文件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "在文件中添加以下代码："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"NativeSampleModule.h (桥接 Address 类型)\"",
        children: "#include \"Int64.h\"\n#include <memory>\n#include <string>\n\nnamespace facebook::react {\n+  using Address = NativeSampleModuleAddress<std::string, int32_t, bool>;\n\n+  template <>\n+  struct Bridging<Address>\n+      : NativeSampleModuleAddressBridging<Address> {};\n  // ...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这段代码定义了一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 类型别名，用于通用的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeSampleModuleAddress"
      }), " 类型。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "模板参数的顺序很重要"
      }), "：第一个模板参数引用结构体中的第一个数据类型，第二个参数引用第二个，依此类推。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["然后，代码添加了新的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 类型的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Bridging"
      }), " 特化，通过扩展由 Codegen 生成的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeSampleModuleAddressBridging"
      }), " 类型。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "有一个约定用于生成这些类型："
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["名称的第一部分始终是模块的类型。在本例中为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "NativeSampleModule"
          }), "。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["名称的第二部分始终是规范中定义的 JS 类型的名称。在本例中为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Address"
          }), "。"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-实现原生代码-1",
      children: "3. 实现原生代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在，我们需要在 C++ 中实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "validateAddress"
      }), " 函数。首先，我们需要在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".h"
      }), " 文件中添加函数声明，然后在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".cpp"
      }), " 文件中实现它。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "shared/NativeSampleModule.h"
        }), " 文件并添加函数定义"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        metastring: "title=\"NativeSampleModule.h (validateAddress function prototype)\"",
        children: "  std::string reverseString(jsi::Runtime& rt, std::string input);\n\n+  bool validateAddress(jsi::Runtime &rt, jsi::Object input);\n};\n\n} // namespace facebook::react\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "shared/NativeSampleModule.cpp"
        }), " 文件并添加函数实现"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-c++",
        metastring: "title=\"NativeSampleModule.cpp (validateAddress 实现)\"",
        children: "bool NativeSampleModule::validateAddress(jsi::Runtime &rt, jsi::Object input) {\n  std::string street = input.getProperty(rt, \"street\").asString(rt).utf8(rt);\n  int32_t number = input.getProperty(rt, \"num\").asNumber();\n\n  return !street.empty() && number > 0;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在实现中，表示 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Address"
      }), " 的对象是一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "jsi::Object"
      }), "。要从这个对象中提取值，我们需要使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JSI"
      }), " 提供的访问器："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getProperty()"
        }), " 从对象中按名称检索属性。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "asString()"
        }), " 将属性转换为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jsi::String"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "utf8()"
        }), " 将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jsi::String"
        }), " 转换为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "std::string"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "asNumber()"
        }), " 将属性转换为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "double"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一旦我们手动解析了对象，我们就可以实现所需的逻辑。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["如果你想了解更多关于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JSI"
        }), " 及其工作原理，请查看这个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://youtu.be/oLmGInjKU2U?feature=shared",
          children: "精彩的演讲"
        }), " 来自 App.JS 2024。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-testing-the-code-in-the-app",
      children: "4. Testing the code in the app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要在应用中测试代码，我们需要修改 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.tsx"
      }), " 文件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App.tsx"
        }), " 文件。删除 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App()"
        }), " 函数的内容。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App()"
        }), " 函数的主体替换为以下代码："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"App.tsx (App 函数主体替换)\"",
        children: "const [street, setStreet] = React.useState('');\nconst [num, setNum] = React.useState('');\nconst [isValidAddress, setIsValidAddress] = React.useState<\n  boolean | null\n>(null);\n\nconst onPress = () => {\n  let houseNum = parseInt(num, 10);\n  if (isNaN(houseNum)) {\n    houseNum = -1;\n  }\n  const address = {\n    street,\n    num: houseNum,\n    isInUS: false,\n  };\n  const result = SampleTurboModule.validateAddress(address);\n  setIsValidAddress(result);\n};\n\nreturn (\n  <SafeAreaView style={styles.container}>\n    <View>\n      <Text style={styles.title}>\n        Welcome to C Turbo Native Module Example\n      </Text>\n      <Text>Address:</Text>\n      <TextInput\n        style={styles.textInput}\n        placeholder=\"Write your address here\"\n        onChangeText={setStreet}\n        value={street}\n      />\n      <Text>Number:</Text>\n      <TextInput\n        style={styles.textInput}\n        placeholder=\"Write your address here\"\n        onChangeText={setNum}\n        value={num}\n      />\n      <Button title=\"Validate\" onPress={onPress} />\n      {isValidAddress != null && (\n        <Text>\n          Your address is {isValidAddress ? 'valid' : 'not valid'}\n        </Text>\n      )}\n    </View>\n  </SafeAreaView>\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "恭喜！🎉"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你桥接了从 JS 到 C++ 的第一个类型。"
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