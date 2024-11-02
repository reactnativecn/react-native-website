"use strict";
exports.id = 47506;
exports.ids = [47506];
exports.modules = {

/***/ 70822:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43023);


const frontMatter = {
	id: 'testing-overview',
	title: 'Testing',
	author: 'Vojtech Novak',
	authorURL: 'https://twitter.com/vonovak',
	description: 'This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.'
};
const contentTitle = undefined;
const metadata = {
  "id": "testing-overview",
  "title": "Testing",
  "description": "This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.",
  "source": "@site/../cndocs/testing-overview.md",
  "sourceDirName": ".",
  "slug": "/testing-overview",
  "permalink": "/docs/next/testing-overview",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/testing-overview.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "testing-overview",
    "title": "Testing",
    "author": "Vojtech Novak",
    "authorURL": "https://twitter.com/vonovak",
    "description": "This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."
  },
  "sidebar": "docs",
  "previous": {
    "title": "其他调试方法",
    "permalink": "/docs/next/other-debugging-methods"
  },
  "next": {
    "title": "性能综述",
    "permalink": "/docs/next/performance"
  }
};
const assets = {

};



const toc = [{
  "value": "为什么测试",
  "id": "为什么测试",
  "level": 2
}, {
  "value": "静态分析",
  "id": "静态分析",
  "level": 2
}, {
  "value": "编写可测试的代码",
  "id": "编写可测试的代码",
  "level": 2
}, {
  "value": "编写测试",
  "id": "编写测试",
  "level": 2
}, {
  "value": "结构化测试",
  "id": "结构化测试",
  "level": 3
}, {
  "value": "单元测试",
  "id": "单元测试",
  "level": 2
}, {
  "value": "模拟",
  "id": "模拟",
  "level": 3
}, {
  "value": "集成测试",
  "id": "集成测试",
  "level": 2
}, {
  "value": "组件测试",
  "id": "组件测试",
  "level": 2
}, {
  "value": "测试用户交互",
  "id": "测试用户交互",
  "level": 3
}, {
  "value": "测试渲染输出",
  "id": "测试渲染输出",
  "level": 3
}, {
  "value": "端到端测试",
  "id": "端到端测试",
  "level": 2
}, {
  "value": "总结",
  "id": "总结",
  "level": 2
}, {
  "value": "链接",
  "id": "链接",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "随着代码库的扩展，你意想不到的小错误和边缘情况可能会引发更大的失败。错误会导致糟糕的用户体验，最终导致业务损失。一种防止脆弱编程的方法是在发布到生产环境之前测试你的代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在本指南中，我们将介绍不同的自动化方法，从静态分析到端到端测试，以确保你的应用按预期工作。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/diagram_testing.svg",
      alt: "Testing is a cycle of fixing, testing, and either passing to release or failing back into testing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "为什么测试",
      children: "为什么测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们都是人类，人类会犯错误。测试很重要，因为它可以帮助你发现这些错误，并验证你的代码是否按预期工作。也许更重要的是，测试确保了你的代码在添加新功能、重构现有代码或升级项目的主要依赖项时继续按预期工作。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "测试比你想象的更有价值。修复代码中错误的一种最佳方法是编写一个失败的测试来暴露它。然后当你修复错误并重新运行测试时，如果测试通过，则意味着错误已修复，不会再次引入代码库。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "测试还可以作为新加入团队的人的文档。对于从未见过代码库的人来说，阅读测试可以帮助他们理解现有代码的工作原理。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后但并非最不重要的是，更多的自动化测试意味着更少的时间用于手动 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("abbr", {
        title: "Quality Assurance",
        children: "QA"
      }), "，节省了宝贵的时间。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "静态分析",
      children: "静态分析"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "提高代码质量的第一步是开始使用静态分析工具。静态分析在编写代码时检查代码错误，但不会运行任何代码。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Linters"
        }), " 分析代码以捕获常见的错误，如未使用的代码，并帮助避免使用 tabs 而不是 spaces 等风格指南的错误。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Type checking"
        }), " 确保传递给函数的构造与函数设计接受的构造匹配，例如传递一个字符串到期望一个数字的计数函数。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 自带两种这样的工具：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://eslint.org/",
        children: "ESLint"
      }), " 用于 linting，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "typescript",
        children: "TypeScript"
      }), " 用于类型检查。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "编写可测试的代码",
      children: "编写可测试的代码"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "要开始测试，你首先需要编写可测试的代码。考虑一个飞机制造过程——在任何模型首次起飞以展示其复杂系统是否正常工作之前，各个部件都经过测试，以确保它们安全且正常工作。例如，机翼在极端负载下被弯曲测试；发动机部件被测试其耐用性；挡风玻璃被测试以模拟鸟类撞击。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "软件开发也是如此。与将整个程序写在一个巨大的文件中，不如将代码写成多个小模块，这些模块可以更彻底地测试，而不是测试整个程序。这样，编写可测试的代码与编写干净、模块化的代码是相辅相成的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了使你的应用更易于测试，首先将你的应用的视图部分——你的 React 组件——与你的业务逻辑和应用状态分离（无论你使用的是 Redux、MobX 还是其他解决方案）。这样，你可以将业务逻辑的测试——不应依赖于你的 React 组件——与组件本身独立开来，组件的主要工作是渲染你的应用的 UI！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "理论上，你可以将所有逻辑和数据获取从你的组件中移出。这样你的组件将专门用于渲染。你的状态将完全独立于你的组件。你的应用的逻辑将完全不依赖于任何 React 组件！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "我们鼓励你进一步探索可测试代码的主题，在其他学习资源中。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "编写测试",
      children: "编写测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["编写可测试的代码后，就可以编写一些实际的测试了！React Native 的默认模板附带 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io",
        children: "Jest"
      }), " 测试框架。它包括一个针对此环境的预设，因此你可以在不进行配置调整的情况下快速上手——稍后将介绍", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#mocking",
        children: "模拟"
      }), "。你可以使用 Jest 编写本指南中提到的所有类型的测试。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "如果你进行测试驱动开发，你实际上是先编写测试！这样，代码的可测试性就得到了保证。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "结构化测试",
      children: "结构化测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你的测试应该简短且理想情况下只测试一件事。让我们从一个用 Jest 编写的示例单元测试开始："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "it('given a date in the past, colorForDueDate() returns red', () => {\n  expect(colorForDueDate('2000-10-20')).toBe('red');\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["测试由传递给 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/api#testname-fn-timeout",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "it"
        })
      }), " 函数的字符串描述。请仔细编写描述，以便清楚地说明正在测试的内容。尽你所能覆盖以下内容："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Given"
        }), " - 一些预条件"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "When"
        }), " - 由正在测试的函数执行的动作"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Then"
        }), " - 预期的结果"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这被称为 AAA（安排、行动、断言）。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Jest 提供了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/api#describename-fn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "describe"
        })
      }), " 函数来帮助结构化你的测试。使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "describe"
      }), " 将属于一个功能的所有测试组合在一起。如果需要，描述可以嵌套。你还会经常使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/api#beforeeachfn-timeout",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "beforeEach"
        })
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/api#beforeallfn-timeout",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "beforeAll"
        })
      }), " 来设置正在测试的对象。更多信息请参阅 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/api",
        children: "Jest api 参考"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果你的测试有很多步骤或很多期望，你可能需要将其拆分为多个更小的测试。同样，确保你的测试完全独立于其他测试。你的测试套件中的每个测试必须可以单独执行，而无需先运行其他测试。相反，如果你一起运行所有测试，第一个测试不能影响第二个测试的输出。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，作为开发人员，我们喜欢我们的代码工作良好且不崩溃。有了测试，这通常是相反的。将失败的测试视为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "好事情"
      }), "！当测试失败时，通常意味着某些事情不正确。这给你一个机会在影响用户之前修复问题。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "单元测试",
      children: "单元测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "单元测试覆盖代码的最小部分，如单个函数或类。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当正在测试的对象有任何依赖项时，你通常需要模拟它们，如下一节所述。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["单元测试的优点是它们写起来很快，运行也很快。因此，在你工作时，你可以快速获得测试是否通过的反馈。Jest 甚至有一个选项可以持续运行与正在编辑的代码相关的测试：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/cli#watch",
        children: "Watch mode"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/p_tests-unit.svg",
      alt: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "模拟",
      children: "模拟"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有时，当正在测试的对象有外部依赖项时，你可能需要“模拟”它们。“模拟”是指用你自己的实现替换代码的某些依赖项。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "通常，在测试中使用真实对象比使用模拟更好，但有时这是不可能的。例如：当你的 JS 单元测试依赖于用 Java 或 Objective-C 编写的原生模块时。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "想象你正在编写一个显示你所在城市当前天气的应用，并且你正在使用一个提供天气信息的外部服务或其他依赖项。如果服务告诉你正在下雨，你想要显示一张带有雨云的图片。你不想在测试中调用那个服务，因为："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "它会使测试变慢和不稳定（因为涉及网络请求）"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "服务每次运行测试时可能会返回不同的数据"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "第三方服务可以在你真正需要运行测试时离线！"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "因此，你可以提供一个服务的模拟实现，有效地替换数千行代码和一些连接互联网的温度计！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Jest 从函数到模块级别都支持", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://jestjs.io/docs/en/mock-functions#mocking-modules",
          children: "模拟"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "集成测试",
      children: "集成测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在编写较大的软件系统时，其中的各个部分需要相互交互。在单元测试中，如果你的单元依赖于另一个单元，你有时会模拟依赖项，用一个假的单元替换它。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在集成测试中，真正的单元被组合在一起（与你的应用相同），并一起测试以确保它们协作正常。这不是说模拟不会在这里发生：你仍然需要模拟（例如，模拟与天气服务的通信），但与单元测试相比，需要的模拟要少得多。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "请注意，关于集成测试的术语并不总是一致的。同样，单元测试和集成测试之间的界限并不总是清晰的。对于本指南，如果你的测试符合以下条件，则属于“集成测试”："
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "组合了你的应用的几个模块（如上所述）"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "使用外部系统"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "对其他应用（如天气服务 API）进行网络调用"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["进行任何类型的文件或数据库 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("abbr", {
            title: "Input/Output",
            children: "I/O"
          }), " 操作"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/p_tests-integration.svg",
      alt: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "组件测试",
      children: "组件测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "React 组件负责渲染你的应用，用户将直接与它们交互。即使你的应用的业务逻辑有很高的测试覆盖率并且是正确的，没有组件测试，你仍然可能向用户交付一个损坏的 UI。组件测试可以属于单元测试和集成测试，但由于它们是 React Native 的核心部分，我们将它们单独介绍。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "对于测试 React 组件，你可能会想要测试以下内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "交互：确保组件在用户交互时正确行为（例如，当用户按下按钮时）"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "渲染：确保组件的渲染输出正确（例如，按钮的外观和在 UI 中的位置）"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["例如，如果你有一个带有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPress"
      }), " 监听器的按钮，你想要测试按钮是否正确显示，并且点击按钮时组件能够正确处理。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有几个库可以帮助你进行这些测试："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["React 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://reactjs.org/docs/test-renderer.html",
          children: "Test Renderer"
        }), "，与核心一起开发，提供了一个 React 渲染器，可以用来将 React 组件渲染为纯 JavaScript 对象，而不依赖于 DOM 或原生移动环境。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://callstack.github.io/react-native-testing-library/",
          children: "React Native Testing Library"
        }), " 建立在 React 的测试渲染器之上，并添加了本段中描述的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "fireEvent"
        }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "query"
        }), " API。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "组件测试仅在 Node.js 环境中运行。它们不考虑任何 iOS、Android 或其他平台代码，这些代码支持 React Native 组件。因此，它们不能给你 100% 的信心确保一切正常工作。如果 iOS 或 Android 代码中存在错误，它们将无法找到。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/p_tests-component.svg",
      alt: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "测试用户交互",
      children: "测试用户交互"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["除了渲染一些 UI，你的组件处理诸如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextInput"
      }), " 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onChangeText"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Button"
      }), " 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPress"
      }), " 等事件。它们可能还包含其他函数和事件回调。考虑以下示例："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "function GroceryShoppingList() {\n  const [groceryItem, setGroceryItem] = useState('');\n  const [items, setItems] = useState<string[]>([]);\n\n  const addNewItemToShoppingList = useCallback(() => {\n    setItems([groceryItem, ...items]);\n    setGroceryItem('');\n  }, [groceryItem, items]);\n\n  return (\n    <>\n      <TextInput\n        value={groceryItem}\n        placeholder=\"Enter grocery item\"\n        onChangeText={text => setGroceryItem(text)}\n      />\n      <Button\n        title=\"Add the item to list\"\n        onPress={addNewItemToShoppingList}\n      />\n      {items.map(item => (\n        <Text key={item}>{item}</Text>\n      ))}\n    </>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当测试用户交互时，从用户的角度测试组件——页面上有什么？交互时有什么变化？"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "作为一个经验法则，优先使用用户可以看到或听到的内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["使用渲染的文本或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://reactnative.dev/docs/accessibility#accessibility-properties",
          children: "accessibility helpers"
        }), " 进行断言"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "相反，你应该避免："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "对组件的 props 或状态进行断言"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "基于 testID 的查询"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "避免测试实现细节，如 props 或状态——虽然这些测试有效，但它们不是面向用户如何与组件交互的，并且容易在重构时（例如，当你想要重命名某些内容或重写使用 Hooks 的类组件时）失效。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "类组件特别容易测试其实现细节，如内部状态、props 或事件处理程序。为了避免测试实现细节，优先使用带有 Hooks 的函数组件，这使得依赖组件内部变得困难。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["组件测试库，如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://callstack.github.io/react-native-testing-library/",
        children: "React Native Testing Library"
      }), "，通过仔细选择提供的 API 来促进编写用户中心的测试。以下示例使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fireEvent"
      }), " 方法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "changeText"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "press"
      }), " 来模拟用户与组件的交互，并使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getAllByText"
      }), " 查询函数来找到渲染输出中匹配的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Text"
      }), " 节点。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "test('given empty GroceryShoppingList, user can add an item to it', () => {\n  const {getByPlaceholderText, getByText, getAllByText} = render(\n    <GroceryShoppingList />,\n  );\n\n  fireEvent.changeText(\n    getByPlaceholderText('Enter grocery item'),\n    'banana',\n  );\n  fireEvent.press(getByText('Add the item to list'));\n\n  const bananaElements = getAllByText('banana');\n  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个示例不是测试当调用某个函数时某些状态的变化。它测试的是当用户在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextInput"
      }), " 中更改文本并按下 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Button"
      }), " 时会发生什么！"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "测试渲染输出",
      children: "测试渲染输出"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://jestjs.io/docs/en/snapshot-testing",
        children: "快照测试"
      }), " 是 Jest 启用的先进测试类型。它是一个非常强大且低级别的工具，因此在使用时需要额外注意。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个“组件快照”是一个由 Jest 内置的 React 序列化器创建的 JSX 字符串。这个序列化器让 Jest 能够将 React 组件树转换为人类可读的字符串。换句话说：组件快照是组件渲染输出的文本表示，在测试运行期间生成。它可能看起来像这样："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Text\n  style={\n    Object {\n      \"fontSize\": 20,\n      \"textAlign\": \"center\",\n    }\n  }>\n  Welcome to React Native!\n</Text>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["使用快照测试时，通常首先实现组件，然后运行快照测试。快照测试然后创建一个快照，并将其保存到你的仓库中的参考快照文件中。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "然后提交并检查该文件"
      }), "。任何对组件渲染输出的未来更改都会更改其快照，这将导致测试失败。然后你需要更新测试的存储参考快照以通过测试。该更改再次需要提交和审查。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "快照有几个弱点："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "对于你作为开发人员或审阅者来说，很难判断快照中的变化是否是有意为之，还是错误的证据。尤其是大型快照很快变得难以理解，其价值变得很低。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "当快照创建时，此时它被认为是正确的——即使渲染输出实际上是错误的。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["当快照失败时，使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "--updateSnapshot"
        }), " jest 选项更新它而不采取适当措施调查更改是否是预期的，这是诱人的。因此需要一定的开发纪律。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "快照本身并不能确保你的组件渲染逻辑是正确的，它们只是很好地守护着意外的变化，并检查测试的 React 树下的组件是否接收了预期的 props（样式等）。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们建议你只使用小的快照（见 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "no-large-snapshots"
        }), " 规则"]
      }), "）。如果你想要测试两个 React 组件状态之间的变化，使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/jest-community/snapshot-diff",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "snapshot-diff"
        })
      }), "。在不确定的情况下，优先使用前面段落中描述的显式期望。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/p_tests-snapshot.svg",
      alt: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "端到端测试",
      children: "端到端测试"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在端到端（E2E）测试中，尝试从用户的角度来验证应用在设备（或模拟器 / 模拟器）上的工作情况。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这是通过在发布配置中构建应用并运行测试来完成的。在 E2E 测试中，你不再考虑 React 组件、React Native API、Redux 存储或任何业务逻辑。这不是 E2E 测试的目的，这些在 E2E 测试期间甚至对你不可用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["相反，E2E 测试库允许你找到并控制应用屏幕上的元素：例如，你可以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "实际地"
      }), " 点击按钮或像真实用户一样在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextInputs"
      }), " 中插入文本。然后你可以做出关于某个元素是否存在于应用的屏幕上、是否可见、包含什么文本等的断言。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "E2E 测试给你最高的信心，部分应用正在工作。权衡包括："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "编写它们比其他类型的测试更耗时"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "它们运行得更慢"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "它们更容易出现“flaky”（一个“flaky”测试是随机通过和失败的测试，没有任何代码更改）"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "尝试用 E2E 测试覆盖应用的关键部分：认证流程、核心功能、支付等。对于应用的非关键部分，使用更快的 JS 测试。你添加的测试越多，你的信心就越高，但同时，你维护和运行它们的成本也越高。考虑权衡，并决定什么最适合你。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["有几种 E2E 测试工具可用：在 React Native 社区中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/wix/detox/",
        children: "Detox"
      }), " 是一个流行的框架，因为它专为 React Native 应用设计。另一个流行的库是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://appium.io/",
        children: "Appium"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://maestro.mobile.dev/",
        children: "Maestro"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "/docs/assets/p_tests-e2e.svg",
      alt: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们希望你享受阅读并从本指南中学习到一些东西。有很多方法可以测试你的应用。一开始可能很难决定使用什么。然而，我们相信一旦你开始为你的优秀 React Native 应用添加测试，一切都会变得有意义。所以，你还在等什么？提高你的覆盖率！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "链接",
      children: "链接"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://reactjs.org/docs/testing.html",
          children: "React 测试概述"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://callstack.github.io/react-native-testing-library/",
          children: "React Native Testing Library"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://jestjs.io/docs/en/tutorial-react-native",
          children: "Jest docs"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/wix/detox/",
          children: "Detox"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://appium.io/",
          children: "Appium"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://maestro.mobile.dev/",
          children: "Maestro"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["This guide originally authored and contributed in full by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://twitter.com/vonovak",
          children: "Vojtech Novak"
        }), "."]
      })
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