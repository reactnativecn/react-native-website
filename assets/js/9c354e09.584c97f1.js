"use strict";
exports.id = 63047;
exports.ids = [63047];
exports.modules = {

/***/ 81487:
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
	id: 'typescript',
	title: '使用 TypeScript'
};
const contentTitle = undefined;
const metadata = {
  "id": "typescript",
  "title": "使用 TypeScript",
  "description": "TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",
  "source": "@site/versioned_docs/version-0.70/typescript.md",
  "sourceDirName": ".",
  "slug": "/typescript",
  "permalink": "/docs/0.70/typescript",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/typescript.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "typescript",
    "title": "使用 TypeScript"
  },
  "sidebar": "docs",
  "previous": {
    "title": "使用第三方库",
    "permalink": "/docs/0.70/libraries"
  },
  "next": {
    "title": "更新",
    "permalink": "/docs/0.70/upgrading"
  }
};
const assets = {

};



const toc = [{
  "value": "使用 TypeScript 开始新项目",
  "id": "使用-typescript-开始新项目",
  "level": 2
}, {
  "value": "在已有的项目中添加 TypeScript",
  "id": "在已有的项目中添加-typescript",
  "level": 2
}, {
  "value": "TypeScript 和 React Native 是如何工作的",
  "id": "typescript-和-react-native-是如何工作的",
  "level": 2
}, {
  "value": "用 TypeScript 写 React Native 的示例",
  "id": "用-typescript-写-react-native-的示例",
  "level": 2
}, {
  "value": "参考资料（英文）",
  "id": "参考资料英文",
  "level": 2
}, {
  "value": "在 TypeScript 中使用自定义路径别名",
  "id": "在-typescript-中使用自定义路径别名",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        children: "TypeScript"
      }), " is a language which extends JavaScript by adding type definitions, much like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://flow.org",
        children: "Flow"
      }), ". While React Native is built in Flow, it supports both TypeScript ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "and"
      }), " Flow by default."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "使用-typescript-开始新项目",
      children: "使用 TypeScript 开始新项目"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果您要开始一个新项目，则有几种不同的上手方法。 您可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/react-native-template-typescript",
        children: "TypeScript 模板"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npx react-native init MyApp --template react-native-template-typescript\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note"
        }), " 如果以上命令失败，则可能是您的 PC 上全局安装了旧版本的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "react-native"
        }), "或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "react-native-cli"
        }), "。 尝试卸载 cli 并使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "npx"
        }), "运行 cli."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以使用具有两个 TypeScript 模板的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://expo.io",
        children: "Expo"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npm install -g expo-cli\nexpo init MyTSProject\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["或者，您可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://infinite.red/ignite",
        children: "Ignite"
      }), "，它也具有 TypeScript 模板:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npm install -g ignite-cli\nignite new MyTSProject\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "在已有的项目中添加-typescript",
      children: "在已有的项目中添加 TypeScript"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "将 TypeScript 以及 React Native 和 Jest 的依赖添加到您的项目中。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n# or for npm\nnpm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["添加一个 TypeScript 配置文件。在项目的根目录中创建一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "tsconfig.json"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"compilerOptions\": {\n    \"allowJs\": true,\n    \"allowSyntheticDefaultImports\": true,\n    \"esModuleInterop\": true,\n    \"isolatedModules\": true,\n    \"jsx\": \"react-native\",\n    \"lib\": [\"es2017\"],\n    \"types\": [\"react-native\", \"jest\"],\n    \"moduleResolution\": \"node\",\n    \"noEmit\": true,\n    \"strict\": true,\n    \"target\": \"esnext\"\n  },\n  \"exclude\": [\n    \"node_modules\",\n    \"babel.config.js\",\n    \"metro.config.js\",\n    \"jest.config.js\"\n  ]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["创建一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jest.config.js"
        }), "文件来配置 Jest 以使用 TypeScript:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["将 JavaScript 文件重命名为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "* .tsx"
        }), ":"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["请保留", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "./index.js"
        }), "入口文件，否则将在打包生产版本时遇到问题。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "yarn tsc"
        }), " 对 TypeScript 文件进行类型检查。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "typescript-和-react-native-是如何工作的",
      children: "TypeScript 和 React Native 是如何工作的"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["无需额外配置，和非 TypeScript 的 React Native 项目一样都是直接通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "javascript-environment#javascript-syntax-transformers",
        children: "Babel 体系"
      }), " 将您的文件转换为 JavaScript。我们建议您只使用 TypeScript 编译器的类型检查功能（而不是编译）。如果您有已经存在的 TypeScript 代码需要迁移到 React Native，这里有一些关于使用 Babel 而不是 TypeScript 编译器的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://babeljs.io/docs/en/next/babel-plugin-transform-typescript",
        children: "注意事项"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "用-typescript-写-react-native-的示例",
      children: "用 TypeScript 写 React Native 的示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can provide an interface for a React Component's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "props",
        children: "Props"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "state",
        children: "State"
      }), " via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "React.Component<Props, State>"
      }), " which will provide type-checking and editor auto-completing when working with that component in JSX."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "// components/Hello.tsx\nimport React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport interface Props {\n  name: string;\n  enthusiasmLevel?: number;\n}\n\nconst Hello: React.FC<Props> = (props) => {\n  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(\n    props.enthusiasmLevel\n  );\n\n  const onIncrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) + 1);\n  const onDecrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) - 1);\n\n  const getExclamationMarks = (numChars: number) =>\n    Array(numChars + 1).join('!');\n  return (\n    <View style={styles.root}>\n      <Text style={styles.greeting}>\n        Hello{' '}\n        {props.name + getExclamationMarks(enthusiasmLevel || 0)}\n      </Text>\n\n      <View style={styles.buttons}>\n        <View style={styles.button}>\n          <Button\n            title=\"-\"\n            onPress={onDecrement}\n            accessibilityLabel=\"decrement\"\n            color=\"red\"\n          />\n        </View>\n\n        <View style={styles.button}>\n          <Button\n            title=\"+\"\n            onPress={onIncrement}\n            accessibilityLabel=\"increment\"\n            color=\"blue\"\n          />\n        </View>\n      </View>\n    </View>\n  );\n};\n\n// styles\nconst styles = StyleSheet.create({\n  root: {\n    alignItems: 'center',\n    alignSelf: 'center'\n  },\n  buttons: {\n    flexDirection: 'row',\n    minHeight: 70,\n    alignItems: 'stretch',\n    alignSelf: 'center',\n    borderWidth: 5\n  },\n  button: {\n    flex: 1,\n    paddingVertical: 0\n  },\n  greeting: {\n    color: '#999',\n    fontWeight: 'bold'\n  }\n});\n\nexport default Hello;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can explore the syntax more in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/play/?strictNullChecks=false&esModuleInterop=true&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteMA4wkUTOiRwACjjABnBio4YLhTECQALjg-GCgnAHMKShC4JGcxZj9gFD8QABkkKyEAfiiOZhAAI1ckzVtKNE4YuAAJJCEhCCjkQwA6ADEAYQAeHwh-AD44AF44AAowXz8AShmp+iCQxo5mgG00mAysnPzC9p4-KQBRdMzs3IKigF0ZxGIYXszRGDMkBaXegcjvdTkVlklNsFts1OABJDhoIjhZyvOaraZTS4wG6HO4nR7tOZzIF4h5nIRwAA+lLgAAZVgBqOAARnBkLg0PgnAAIkhEUhkfBZmi1tFrrdjmSikSSZLQe0qTT6XAjCy2ZR2Zy4PFrvI0EIUCAzMBOABZFBQADWAWF5RAgzEFr8ZQq1Sg6KmAEEoFAUAI5naHU64EzWb0AFYQJxzfAAQnw6pSRBgzCgHHm7JSw1UGmighE03oMWESD8vRwEBgmgmmZCwzkijzJcLxZEZfiRCkCWrtZSwTaHQg9HwBDqyT7E-oi3GZbCniZOuxeoNRvMZot1uJEpBBIp1LpyzHE+CwwA9A2YDWNeOJ9m1OomwWi-nS71Kqx2Dsezfjyecw-WyQFsXzLd82E4b9fyzFhwI4XsoPMGACwAIiMZD4N-TgfFLPxCx5PkkQOI8oIndA0Bw4BKmAIRgEEPIUGqIRpmQgATAiBQOdCfxIqEIE6KBmKIFiuJ4uBTyvUSz3-K8MLrf9HyA58S1Aj8IIknjhhgz9ZInRCUIZETRJCLCiD8XD6DhBFCOcYijLgMiKKomi6IY9pmKcflBUMuzGn45jKiEZgkG8qDxJ0uApPvdTb1PaT4MijRorgRMQjHMcqFPU8FL8KgtUAm0+BfcRJA+flfjmDYfwrGAokq38UBo+IOFhFwQGdAhyOcVx8C4eCGuAJreHaTAonwTqXCgHr2U0XqfzAz92rqidMBEeRuWAIgMBNDhRpwdQpu4kIQCcNoBrEGq4AAdlpWb6sa5rWva-AYmTNAxAOu6Bo4IahBGjqDm627j0qaA2KgAB1YAWMOKIAFYgeCGb2XmzhavglaFCiZkEb7MAUBYliEmUVxzDQBqohu6acY7EqEjRw7eP40aAGIAE52Y+49ME4GBwaQM6LvwEGhBYznEdmzRwSAA",
        children: "TypeScript playground"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "参考资料英文",
      children: "参考资料（英文）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://www.typescriptlang.org/docs/home.html",
          children: "TypeScript Handbook"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://zh-hans.reactjs.org/docs/static-type-checking.html#typescript",
          children: "React's documentation on TypeScript"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets",
          children: "React + TypeScript Cheatsheets"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "在-typescript-中使用自定义路径别名",
      children: "在 TypeScript 中使用自定义路径别名"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Edit your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "tsconfig.json"
        }), " to have your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",
          children: "custom path mappings"
        }), ". Set anything in the root of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "src"
        }), " to be available with no preceding path reference, and allow any test file to be accessed by using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "test/File.tsx"
        }), ":"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        children: "    \"target\": \"esnext\",\n+     \"baseUrl\": \".\",\n+     \"paths\": {\n+       \"*\": [\"src/*\"],\n+       \"tests\": [\"tests/*\"],\n+       \"@components/*\": [\"src/components/*\"],\n+     },\n    }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Configure the Babel side done by adding a new dependency, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/tleunen/babel-plugin-module-resolver",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "babel-plugin-module-resolver"
          })
        }), ":"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn add --dev babel-plugin-module-resolver\n# or\nnpm install --save-dev babel-plugin-module-resolver\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Finally, configure your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "babel.config.js"
        }), " (note that the syntax for your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "babel.config.js"
        }), " is different from your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "tsconfig.json"
        }), "):"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        children: "{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           \"tests\": [\"./tests/\"],\n+           \"@components\": \"./src/components\",\n+         }\n+       }\n+     ]\n  ]\n}\n"
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