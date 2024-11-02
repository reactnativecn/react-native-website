"use strict";
exports.id = 89408;
exports.ids = [89408];
exports.modules = {

/***/ 46009:
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
	id: 'ram-bundles-inline-requires',
	title: 'RAM Bundles 和内联引用优化'
};
const contentTitle = undefined;
const metadata = {
  "id": "ram-bundles-inline-requires",
  "title": "RAM Bundles 和内联引用优化",
  "description": "如果你有一个较为庞大的应用程序，你可能要考虑使用RAM(Random Access Modules，随机存取模块）格式的 bundle 和内联引用。这对于具有大量页面的应用程序是非常有用的，这些页面在应用程序的典型使用过程中可能不会被打开。通常对于启动后一段时间内不需要大量代码的应用程序来说是非常有用的。例如应用程序包含复杂的配置文件屏幕或较少使用的功能，但大多数会话只涉及访问应用程序的主屏幕更新。我们可以通过使用RAM格式来优化bundle的加载，并且内联引用这些功能和页面（当它们被实际使用时）。",
  "source": "@site/versioned_docs/version-0.76/ram-bundles-inline-requires.md",
  "sourceDirName": ".",
  "slug": "/ram-bundles-inline-requires",
  "permalink": "/docs/ram-bundles-inline-requires",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/ram-bundles-inline-requires.md",
  "tags": [],
  "version": "0.76",
  "frontMatter": {
    "id": "ram-bundles-inline-requires",
    "title": "RAM Bundles 和内联引用优化"
  }
};
const assets = {

};



const toc = [{
  "value": "加载 JavaScript",
  "id": "加载-javascript",
  "level": 3
}, {
  "value": "内联引用",
  "id": "内联引用",
  "level": 3
}, {
  "value": "优化前",
  "id": "优化前",
  "level": 4
}, {
  "value": "优化后",
  "id": "优化后",
  "level": 4
}, {
  "value": "启用 RAM 格式",
  "id": "启用-ram-格式",
  "level": 3
}, {
  "value": "配置预加载及内联引用",
  "id": "配置预加载及内联引用",
  "level": 3
}, {
  "value": "调试预加载的模块",
  "id": "调试预加载的模块",
  "level": 3
}, {
  "value": "更新配置文件(metro.config.js)",
  "id": "更新配置文件metroconfigjs",
  "level": 3
}, {
  "value": "测试和衡量改进",
  "id": "测试和衡量改进",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你有一个较为庞大的应用程序，你可能要考虑使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RAM"
      }), "(Random Access Modules，随机存取模块）格式的 bundle 和内联引用。这对于具有大量页面的应用程序是非常有用的，这些页面在应用程序的典型使用过程中可能不会被打开。通常对于启动后一段时间内不需要大量代码的应用程序来说是非常有用的。例如应用程序包含复杂的配置文件屏幕或较少使用的功能，但大多数会话只涉及访问应用程序的主屏幕更新。我们可以通过使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RAM"
      }), "格式来优化", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "bundle"
      }), "的加载，并且内联引用这些功能和页面（当它们被实际使用时）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "加载-javascript",
      children: "加载 JavaScript"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 react-native 执行 JS 代码之前，必须将代码加载到内存中并进行解析。如果你加载了一个 50MB 的 bundle，那么所有的 50mb 都必须被加载和解析才能被执行。RAM 格式的 bundle 则对此进行了优化，即启动时只加载 50MB 中实际需要的部分，之后再逐渐按需加载更多的包。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "内联引用",
      children: "内联引用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "内联引用(require 代替 import)可以延迟模块或文件的加载，直到实际需要该文件。一个基本的例子看起来像这样："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "优化前",
      children: "优化前"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "import React, { Component } from 'react';\nimport { Text } from 'react-native';\n// ... import some very expensive modules\n\n// You may want to log at the file level to verify when this is happening\nconsole.log('VeryExpensive component loaded');\n\nexport default class VeryExpensive extends Component {\n  // lots and lots of code\n  render() {\n    return <Text>Very Expensive Component</Text>;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "优化后",
      children: "优化后"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "import React, { Component } from 'react';\nimport { TouchableOpacity, View, Text } from 'react-native';\n\nlet VeryExpensive = null;\n\nexport default class Optimized extends Component {\n  state = { needsExpensive: false };\n\n  didPress = () => {\n    if (VeryExpensive == null) {\n      VeryExpensive = require('./VeryExpensive').default;\n    }\n\n    this.setState(() => ({\n      needsExpensive: true,\n    }));\n  };\n\n  render() {\n    return (\n      <View style={{ marginTop: 20 }}>\n        <TouchableOpacity onPress={this.didPress}>\n          <Text>Load</Text>\n        </TouchableOpacity>\n        {this.state.needsExpensive ? <VeryExpensive /> : null}\n      </View>\n    );\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "即便不使用 RAM 格式，内联引用也会使启动时间减少，因为优化后的代码只有在第一次 require 时才会执行。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "启用-ram-格式",
      children: "启用 RAM 格式"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 iOS 上使用 RAM 格式将创建一个简单的索引文件，React Native 将根据此文件一次加载一个模块。在 Android 上，默认情况下它会为每个模块创建一组文件。你可以像 iOS 一样，强制 Android 只创建一个文件，但使用多个文件可以提高性能，并降低内存占用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Xcode 中启用 RAM 格式，需要编辑 build phase 里的\"Bundle React Native code and images\"。在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "../node_modules/react-native/scripts/react-native-xcode.sh"
      }), "中添加 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "export BUNDLE_COMMAND=\"ram-bundle\""
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "export BUNDLE_COMMAND=\"ram-bundle\"\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Android 上启用 RAM 格式，需要编辑 android/app/build.gradle 文件。在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "apply from: \"../../node_modules/react-native/react.gradle\""
      }), "之前修改或添加", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "project.ext.react"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "project.ext.react = [\n  bundleCommand: \"ram-bundle\",\n]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果在 Android 上，你想使用单个索引文件（如前所述），请在 Android 上使用以下行："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "project.ext.react = [\n  bundleCommand: \"ram-bundle\",\n  extraPackagerArgs: [\"--indexed-ram-bundle\"]\n]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Note"
          })
        }), ": If you are using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/hermes",
          children: "Hermes JS Engine"
        }), ", you do not need RAM bundles. When loading the bytecode, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "mmap"
        }), " ensures that the entire file is not loaded."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "配置预加载及内联引用",
      children: "配置预加载及内联引用"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们已经启用了RAM格式，然而调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "require"
      }), "会造成额外的开销。因为当遇到尚未加载的模块时，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "require"
      }), "需要通过bridge来发送消息。这主要会影响到启动速度，因为在应用程序加载初始模块时可能触发相当大量的请求调用。幸运的是，我们可以配置一部分模块进行预加载。为了做到这一点，你将需要实现某种形式的内联引用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "调试预加载的模块",
      children: "调试预加载的模块"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在您的根文件 (index.(ios|android).js) 中，您可以在初始导入(initial imports)之后添加以下内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "const modules = require.getModules();\nconst moduleIds = Object.keys(modules);\nconst loadedModuleNames = moduleIds\n  .filter(moduleId => modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\nconst waitingModuleNames = moduleIds\n  .filter(moduleId => !modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\n\n// make sure that the modules you expect to be waiting are actually waiting\nconsole.log(\n  'loaded:',\n  loadedModuleNames.length,\n  'waiting:',\n  waitingModuleNames.length\n);\n\n// grab this text blob, and put it in a file named packager/modulePaths.js\nconsole.log(`module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当你运行你的应用程序时，你可以查看 console 控制台，有多少模块已经加载，有多少模块在等待。你可能想查看 moduleNames，看看是否有任何意外。注意在首次 import 时调用的内联引用。你可能需要检查和重构，以确保只有你想要的模块在启动时加载。请注意，您可以根据需要修改 Systrace 对象，以帮助调试有问题的引用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "require.Systrace.beginEvent = (message) => {\n  if(message.includes(problematicModule)) {\n    throw new Error();\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "虽然每个 App 各有不同，但只加载第一个页面所需的模块是有普适意义的。当你满意时，把 loadedModuleNames 的输出放到 packager/modulePaths.js 文件中。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "更新配置文件metroconfigjs",
      children: "更新配置文件(metro.config.js)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们现在需要更新项目根目录中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "metro.config.js"
      }), "以使用新生成的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "modulePaths.js"
      }), "文件:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "const modulePaths = require('./packager/modulePaths');\nconst resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '..');\n\nconst config = {\n  transformer: {\n    getTransformOptions: () => {\n      const moduleMap = {};\n      modulePaths.forEach(path => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n      return {\n        preloadedModules: moduleMap,\n        transform: { inlineRequires: { blacklist: moduleMap } },\n      };\n    },\n  },\n  projectRoot: ROOT_FOLDER,\n};\n\nmodule.exports = config;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在启用RAM格式之后，配置文件中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "preloadedModules"
      }), "条目指示哪些模块需要预加载。当 bundle 被加载时，这些模块立即被加载，甚至在任何 requires 执行之前。blacklist 表明这些模块不应该被要求内联引用，因为它们是预加载的，所以使用内联没有性能优势。实际上每次解析内联引用 JavaScript 都会花费额外的时间。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "测试和衡量改进",
      children: "测试和衡量改进"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "您现在应该准备好使用RAM格式和内联引用来构建您的应用了。保存启动前后的时间，来测试下有多少改进吧！"
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