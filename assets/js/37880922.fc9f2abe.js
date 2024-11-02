exports.id = 97104;
exports.ids = [97104];
exports.modules = {

/***/ 84581:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43023);
/* harmony import */ var _site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17181);
/* harmony import */ var _site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1__);


const frontMatter = {
	id: 'javascript-environment',
	title: 'JavaScript 环境'
};
const contentTitle = undefined;
const metadata = {
  "id": "javascript-environment",
  "title": "JavaScript 环境",
  "description": "JavaScript 运行时环境",
  "source": "@site/versioned_docs/version-0.72/javascript-environment.md",
  "sourceDirName": ".",
  "slug": "/javascript-environment",
  "permalink": "/docs/0.72/javascript-environment",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/javascript-environment.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "javascript-environment",
    "title": "JavaScript 环境"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Profiling with Hermes",
    "permalink": "/docs/0.72/profile-hermes"
  },
  "next": {
    "title": "定时器",
    "permalink": "/docs/0.72/timers"
  }
};
const assets = {

};




const toc = [{
  "value": "JavaScript 运行时环境",
  "id": "javascript-运行时环境",
  "level": 2
}, {
  "value": "JavaScript 语法转换器",
  "id": "javascript-语法转换器",
  "level": 2
}, {
  "value": "接口兼容（Polyfills）",
  "id": "接口兼容polyfills",
  "level": 2
}, {
  "value": "浏览器",
  "id": "浏览器",
  "level": 4
}, {
  "value": "ECMAScript 2015 (ES6)",
  "id": "ecmascript-2015-es6",
  "level": 4
}, {
  "value": "ECMAScript 2016 (ES7)",
  "id": "ecmascript-2016-es7",
  "level": 4
}, {
  "value": "ECMAScript 2017 (ES8)",
  "id": "ecmascript-2017-es8",
  "level": 4
}, {
  "value": "专有特性",
  "id": "专有特性",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "javascript-运行时环境",
      children: "JavaScript 运行时环境"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在使用 React Native 时，你的 JavaScript 代码可能会运行在三个不同的环境上："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["从 React Native 0.70 版本开始，React Native 会默认使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "hermes",
          children: "Hermes"
        }), "引擎，它是专门为 React Native 而优化的一个新式开源 JavaScript 引擎。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果 Hermes 被禁用或是较早的 React Native 版本，则会使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://trac.webkit.org/wiki/JavaScriptCore",
          children: "JavaScriptCore"
        }), "，也就是 Safari 所使用的 JavaScript 引擎。但是在 iOS 上 JavaScriptCore 并没有使用即时编译技术（JIT），因为在 iOS 中应用无权拥有可写可执行的内存页（因此无法动态生成代码）。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在使用 Chrome 调试时，所有的 JavaScript 代码都运行在 Chrome 中，并且通过 WebSocket 与原生代码通信。此时的运行环境是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://v8.dev",
          children: "V8 引擎"
        }), "。（社区也有提供可以在生产环境中使用的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/Kudo/react-native-v8",
          children: "react-native-v8"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "虽然这些环境非常类似，但开发者还是可能碰到一些不一致的地方。未来我们很可能会尝试一些其他的 JS 引擎，所以请尽量避免使用依赖于特定运行环境的代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "常见的不一致比如有：iOS 上有部分日期构造函数未实现；Android 上重复定义的 props 可能会导致报错。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "javascript-语法转换器",
      children: "JavaScript 语法转换器"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "语法转换器可以使编写代码的过程更加享受，因为开发者可以借助转换器直接使用新的 JavaScript 语法标准，而无需等待 JS 解释器的支持。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 内置了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://babeljs.io",
        children: "Babel 转换器"
      }), "。你可以查看", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://babeljs.io/docs/plugins/#transform-plugins",
        children: "Babel 的文档"
      }), "来了解有关它可以转换的语法的详情。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset",
        children: "metro-react-native-babel-preset"
      }), "中可以看到目前 React Native 默认开启的语法转换特性。注：若想学习相关语法，译者推荐阮一峰老师的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://es6.ruanyifeng.com/",
        children: "《ECMAScript 6 入门》"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            children: "Transformation"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            children: "Code"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 5"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Reserved Words",
          code: "promise.catch(function() {...});"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2015 (ES6)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Arrow functions",
          code: "<C onPress={() => this.setState({pressed: true})} />",
          url: "http://babeljs.io/docs/learn-es2015/#arrows"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Block scoping",
          code: "let greeting = 'hi';",
          url: "https://babeljs.io/docs/learn-es2015/#let-const"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Call spread",
          code: "Math.max(...array);",
          url: "http://babeljs.io/docs/learn-es2015/#default-rest-spread"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Classes",
          code: "class C extends React.Component {render() { return <View />; }}",
          url: "http://babeljs.io/docs/learn-es2015/#classes"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Computed Properties",
          code: "const key = 'abc'; const obj = {[key]: 10};",
          url: "http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Constants",
          code: "const answer = 42;",
          url: "https://babeljs.io/docs/learn-es2015/#let-const"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Destructuring",
          code: "const {isActive, style} = this.props;",
          url: "http://babeljs.io/docs/learn-es2015/#destructuring"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "for…of",
          code: "for (var num of [1, 2, 3]) {...};",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Function Name",
          code: "let number = x => x;",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-function-name"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Literals",
          code: "const b = 0b11; const o = 0o7; const u = 'Hello\\u{000A}\\u{0009}!';",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-literals"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Modules",
          code: "import React, {Component} from 'react';",
          url: "http://babeljs.io/docs/learn-es2015/#modules"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Object Concise Method",
          code: "const obj = {method() { return 10; }};",
          url: "http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Object Short Notation",
          code: "const name = 'vjeux'; const obj = {name};",
          url: "http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Parameters",
          code: "function test(x = 'hello', {a, b}, ...args) {}",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-parameters"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Rest Params",
          code: "function(type, ...args) {};",
          url: "https://github.com/sebmarkbage/ecmascript-rest-spread"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Shorthand Properties",
          code: "const o = {a, b, c};",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Sticky Regex",
          code: "const a = /o+/y;",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Template Literals",
          code: "const who = 'world'; const str = `Hello ${who}`;",
          url: "https://babeljs.io/docs/learn-es2015/#template-strings"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Unicode Regex",
          code: "const string = 'foo💩bar'; const match = string.match(/foo(.)bar/u);",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2016 (ES7)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Exponentiation Operator",
          code: "let x = 10 ** 2;",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2017 (ES8)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Async Functions",
          code: "async function doStuffAsync() {const foo = await doOtherStuffAsync();};",
          url: "https://github.com/tc39/ecmascript-asyncawait"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Function Trailing Comma",
          code: "function f(a, b, c,) {};",
          url: "https://github.com/jeffmo/es-trailing-function-commas"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2018 (ES9)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Object Spread",
          code: "const extended = {...obj, a: 10};",
          url: "https://github.com/tc39/proposal-object-rest-spread"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2019 (ES10)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Optional Catch Binding",
          code: "try {throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown();}",
          url: "https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2020 (ES11)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Dynamic Imports",
          code: "const package = await import('package'); package.function()",
          url: "https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Nullish Coalescing Operator",
          code: "const foo = object.foo ?? 'default';",
          url: "https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Optional Chaining",
          code: "const name = obj.user?.name;",
          url: "https://github.com/tc39/proposal-optional-chaining"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "ECMAScript 2022 (ES13)"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Class Fields",
          code: "class Bork {static a = 'foo'; static b; x = 'bar'; y;}",
          url: "https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "Stage 1 Proposal"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Export Default From",
          code: "export v from 'mod';",
          url: "https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            className: "table-heading",
            colSpan: "2",
            children: "Miscellaneous"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Babel Template",
          code: "template(`const %%importName%% = require(%%source%%);`);",
          url: "https://babeljs.io/docs/en/babel-template"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Flow",
          code: "function foo(x: ?number): string {};",
          url: "https://flowtype.org/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "ESM to CJS",
          code: "export default 42;",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "JSX",
          code: "<View style={{color: 'red'}} />",
          url: "https://reactjs.org/docs/jsx-in-depth"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "Object Assign",
          code: "Object.assign(a, b);",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-object-assign"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "React Display Name",
          code: "const bar = createReactClass({});",
          url: "https://babeljs.io/docs/en/babel-plugin-transform-react-display-name"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_site_core_TableRowWithCodeBlock__WEBPACK_IMPORTED_MODULE_1___default()), {
          name: "TypeScript",
          code: "function foo(x: {hello: true, target: 'react native!'}): string {};",
          url: "https://www.typescriptlang.org/"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "接口兼容polyfills",
      children: "接口兼容（Polyfills）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "许多标准功能也都在支持的 JavaScript 运行环境上做了兼容支持。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "浏览器",
      children: "浏览器"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
          href: "https://nodejs.org/docs/latest/api/modules.html",
          children: ["CommonJS ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "require"
          })]
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "md [console.{log, warn, error, info, trace, table, group, groupEnd}](https://developer.chrome.com/devtools/docs/console-api)"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
          href: "/docs/0.72/network#content",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "XMLHttpRequest"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "fetch"
          })]
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/0.72/timers#content",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"
          })
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "ecmascript-2015-es6",
      children: "ECMAScript 2015 (ES6)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Array.from"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "md Array.prototype.{[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)}"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Object.assign"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "md String.prototype.{[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)}"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "ecmascript-2016-es7",
      children: "ECMAScript 2016 (ES7)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "md Array.prototype.[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "ecmascript-2017-es8",
      children: "ECMAScript 2017 (ES8)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "md Object.{[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)}"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "专有特性",
      children: "专有特性"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "__DEV__"
        }), " 用于判断当前是否开发环境的全局变量"]
      }), "\n"]
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

/***/ 26180:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_mQmQ`
};


/***/ }),

/***/ 32266:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_D5yF`,
	"codeBlockTitle": `codeBlockTitle_x_ju`,
	"codeBlock": `codeBlock_RMoD`,
	"codeBlockStandalone": `codeBlockStandalone_wQog`,
	"codeBlockLines": `codeBlockLines_AclH`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_O625`,
	"buttonGroup": `buttonGroup_aaMX`
};


/***/ }),

/***/ 82176:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_TYdd`,
	"copyButtonIcons": `copyButtonIcons_z5j7`,
	"copyButtonIcon": `copyButtonIcon_FoOz`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_L0B6`
};


/***/ }),

/***/ 54005:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": `codeLine_FAqz`,
	"codeLineNumber": `codeLineNumber_BE9Z`,
	"codeLineContent": `codeLineContent_EF2y`
};


/***/ }),

/***/ 42467:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_HV9T`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_XzR1`
};


/***/ }),

/***/ 17181:
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
var TableRowWithCodeBlock_exports = {};
__export(TableRowWithCodeBlock_exports, {
  default: () => TableRowWithCodeBlock_default
});
module.exports = __toCommonJS(TableRowWithCodeBlock_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_CodeBlock = __toESM(__webpack_require__(76715));
const TableRowWithCodeBlock = ({ name, url, code }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: url, target: "_blank", rel: "noopener noreferrer", children: name }) : name }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CodeBlock.default, { children: code }) })
] });
var TableRowWithCodeBlock_default = TableRowWithCodeBlock;


/***/ }),

/***/ 60979:
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
var Container_exports = {};
__export(Container_exports, {
  default: () => CodeBlockContainer
});
module.exports = __toCommonJS(Container_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
var import_styles_module = __toESM(__webpack_require__(26180));
function CodeBlockContainer({ as: As, ...props }) {
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const prismCssVariables = (0, import_internal.getPrismCssVariables)(prismTheme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    As,
    {
      ...props,
      style: prismCssVariables,
      className: (0, import_clsx.default)(
        props.className,
        import_styles_module.default.codeBlockContainer,
        import_theme_common.ThemeClassNames.common.codeBlock
      )
    }
  );
}


/***/ }),

/***/ 33169:
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
var Element_exports = {};
__export(Element_exports, {
  default: () => CodeBlockJSX
});
module.exports = __toCommonJS(Element_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Container = __toESM(__webpack_require__(60979));
var import_styles_module = __toESM(__webpack_require__(32266));
function CodeBlockJSX({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Container.default,
    {
      as: "pre",
      tabIndex: 0,
      className: (0, import_clsx.default)(import_styles_module.default.codeBlockStandalone, "thin-scrollbar", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { className: import_styles_module.default.codeBlockLines, children })
    }
  );
}


/***/ }),

/***/ 71108:
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
var String_exports = {};
__export(String_exports, {
  default: () => CodeBlockString
});
module.exports = __toCommonJS(String_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_theme_common = __webpack_require__(73);
var import_internal = __webpack_require__(64012);
var import_prism_react_renderer = __webpack_require__(74003);
var import_Line = __toESM(__webpack_require__(97350));
var import_CopyButton = __toESM(__webpack_require__(49817));
var import_WordWrapButton = __toESM(__webpack_require__(41000));
var import_Container = __toESM(__webpack_require__(60979));
var import_styles_module = __toESM(__webpack_require__(32266));
function normalizeLanguage(language) {
  return language == null ? void 0 : language.toLowerCase();
}
function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp
}) {
  const {
    prism: { defaultLanguage, magicComments }
  } = (0, import_theme_common.useThemeConfig)();
  const language = normalizeLanguage(
    languageProp ?? (0, import_internal.parseLanguage)(blockClassName) ?? defaultLanguage
  );
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const wordWrap = (0, import_internal.useCodeWordWrap)();
  const title = (0, import_internal.parseCodeBlockTitle)(metastring) || titleProp;
  const { lineClassNames, code } = (0, import_internal.parseLines)(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp ?? (0, import_internal.containsLineNumbers)(metastring);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_Container.default,
    {
      as: "div",
      className: (0, import_clsx.default)(
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`
      ),
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_styles_module.default.codeBlockTitle, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_styles_module.default.codeBlockContent, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_prism_react_renderer.Highlight, { theme: prismTheme, code, language: language ?? "text", children: ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "pre",
            {
              tabIndex: 0,
              ref: wordWrap.codeBlockRef,
              className: (0, import_clsx.default)(className, import_styles_module.default.codeBlock, "thin-scrollbar"),
              style,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "code",
                {
                  className: (0, import_clsx.default)(
                    import_styles_module.default.codeBlockLines,
                    showLineNumbers && import_styles_module.default.codeBlockLinesWithNumbering
                  ),
                  children: tokens.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_Line.default,
                    {
                      line,
                      getLineProps,
                      getTokenProps,
                      classNames: lineClassNames[i],
                      showLineNumbers
                    },
                    i
                  ))
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_styles_module.default.buttonGroup, children: [
            (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_WordWrapButton.default,
              {
                className: import_styles_module.default.codeButton,
                onClick: () => wordWrap.toggle(),
                isEnabled: wordWrap.isEnabled
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CopyButton.default, { className: import_styles_module.default.codeButton, code })
          ] })
        ] })
      ]
    }
  );
}


/***/ }),

/***/ 49817:
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
var CopyButton_exports = {};
__export(CopyButton_exports, {
  default: () => CopyButton
});
module.exports = __toCommonJS(CopyButton_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __webpack_require__(63696);
var import_clsx = __toESM(__webpack_require__(78784));
var import_copy_text_to_clipboard = __toESM(__webpack_require__(88406));
var import_Translate = __webpack_require__(37353);
var import_Copy = __toESM(__webpack_require__(70314));
var import_Success = __toESM(__webpack_require__(63718));
var import_styles_module = __toESM(__webpack_require__(82176));
function CopyButton({ code, className }) {
  const [isCopied, setIsCopied] = (0, import_react.useState)(false);
  const copyTimeout = (0, import_react.useRef)(void 0);
  const handleCopyCode = (0, import_react.useCallback)(() => {
    (0, import_copy_text_to_clipboard.default)(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  (0, import_react.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      "aria-label": isCopied ? (0, import_Translate.translate)({
        id: "theme.CodeBlock.copied",
        message: "Copied",
        description: "The copied button label on code blocks"
      }) : (0, import_Translate.translate)({
        id: "theme.CodeBlock.copyButtonAriaLabel",
        message: "Copy code to clipboard",
        description: "The ARIA label for copy code blocks button"
      }),
      title: (0, import_Translate.translate)({
        id: "theme.CodeBlock.copy",
        message: "Copy",
        description: "The copy button label on code blocks"
      }),
      className: (0, import_clsx.default)(
        "clean-btn",
        className,
        import_styles_module.default.copyButton,
        isCopied && import_styles_module.default.copyButtonCopied
      ),
      onClick: handleCopyCode,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: import_styles_module.default.copyButtonIcons, "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Copy.default, { className: import_styles_module.default.copyButtonIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Success.default, { className: import_styles_module.default.copyButtonSuccessIcon })
      ] })
    }
  );
}


/***/ }),

/***/ 97350:
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
var Line_exports = {};
__export(Line_exports, {
  default: () => CodeBlockLine
});
module.exports = __toCommonJS(Line_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_styles_module = __toESM(__webpack_require__(54005));
function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: (0, import_clsx.default)(classNames, showLineNumbers && import_styles_module.default.codeLine)
  });
  const lineTokens = line.map((token, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ...getTokenProps({ token }) }, key));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { ...lineProps, children: [
    showLineNumbers ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_styles_module.default.codeLineNumber }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_styles_module.default.codeLineContent, children: lineTokens })
    ] }) : lineTokens,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
  ] });
}


/***/ }),

/***/ 41000:
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
var WordWrapButton_exports = {};
__export(WordWrapButton_exports, {
  default: () => WordWrapButton
});
module.exports = __toCommonJS(WordWrapButton_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_clsx = __toESM(__webpack_require__(78784));
var import_Translate = __webpack_require__(37353);
var import_WordWrap = __toESM(__webpack_require__(50831));
var import_styles_module = __toESM(__webpack_require__(42467));
function WordWrapButton({ className, onClick, isEnabled }) {
  const title = (0, import_Translate.translate)({
    id: "theme.CodeBlock.wordWrapToggle",
    message: "Toggle word wrap",
    description: "The title attribute for toggle word wrapping button of code block lines"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      onClick,
      className: (0, import_clsx.default)(
        "clean-btn",
        className,
        isEnabled && import_styles_module.default.wordWrapButtonEnabled
      ),
      "aria-label": title,
      title,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_WordWrap.default, { className: import_styles_module.default.wordWrapButtonIcon, "aria-hidden": "true" })
    }
  );
}


/***/ }),

/***/ 76715:
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
var CodeBlock_exports = {};
__export(CodeBlock_exports, {
  default: () => CodeBlock
});
module.exports = __toCommonJS(CodeBlock_exports);
var import_jsx_runtime = __webpack_require__(62540);
var import_react = __toESM(__webpack_require__(63696));
var import_useIsBrowser = __toESM(__webpack_require__(64062));
var import_Element = __toESM(__webpack_require__(33169));
var import_String = __toESM(__webpack_require__(71108));
function maybeStringifyChildren(children) {
  if (import_react.default.Children.toArray(children).some((el) => (0, import_react.isValidElement)(el))) {
    return children;
  }
  return Array.isArray(children) ? children.join("") : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
  const isBrowser = (0, import_useIsBrowser.default)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === "string" ? import_String.default : import_Element.default;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlockComp, { ...props, children }, String(isBrowser));
}


/***/ }),

/***/ 70314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Copy_exports = {};
__export(Copy_exports, {
  default: () => IconCopy
});
module.exports = __toCommonJS(Copy_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconCopy(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
    }
  ) });
}


/***/ }),

/***/ 63718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Success_exports = {};
__export(Success_exports, {
  default: () => IconSuccess
});
module.exports = __toCommonJS(Success_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconSuccess(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    }
  ) });
}


/***/ }),

/***/ 50831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var WordWrap_exports = {};
__export(WordWrap_exports, {
  default: () => IconWordWrap
});
module.exports = __toCommonJS(WordWrap_exports);
var import_jsx_runtime = __webpack_require__(62540);
function IconWordWrap(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    }
  ) });
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


/***/ }),

/***/ 88406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var copy_text_to_clipboard_exports = {};
__export(copy_text_to_clipboard_exports, {
  default: () => copyTextToClipboard
});
module.exports = __toCommonJS(copy_text_to_clipboard_exports);
function copyTextToClipboard(text, { target = document.body } = {}) {
  if (typeof text !== "string") {
    throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
  }
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = text;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = text.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {
  }
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}


/***/ })

};
;