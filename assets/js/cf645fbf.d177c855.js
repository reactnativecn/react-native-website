"use strict";
exports.id = 24475;
exports.ids = [24475];
exports.modules = {

/***/ 17530:
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
	id: 'upgrading',
	title: '更新'
};
const contentTitle = undefined;
const metadata = {
  "id": "upgrading",
  "title": "更新",
  "description": "时刻将 React Native 更新到最新的版本，可以获得更多 API、视图、开发者工具以及其他一些好东西（译注：官方开发任务繁重，人手紧缺，几乎不会对旧版本提供维护支持，所以即便更新可能带来一些兼容上的变更，但建议开发者还是尽一切可能第一时间更新）。由于一个完整的 React Native 项目是由 Android 项目、iOS 项目和 JavaScript 项目组成的，且都打包在一个 npm 包中，所以升级可能会有一些麻烦。我们会尽量简化这一流程。你可以在项目目录下使用npx react-native info命令查看当前的版本。There's currently two ways for upgrading your React Native project: by using React Native CLI or manually with Upgrade Helper.",
  "source": "@site/versioned_docs/version-0.71/upgrading.md",
  "sourceDirName": ".",
  "slug": "/upgrading",
  "permalink": "/docs/0.71/upgrading",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/upgrading.md",
  "tags": [],
  "version": "0.71",
  "frontMatter": {
    "id": "upgrading",
    "title": "更新"
  },
  "sidebar": "docs",
  "previous": {
    "title": "使用 TypeScript",
    "permalink": "/docs/0.71/typescript"
  },
  "next": {
    "title": "访问网络",
    "permalink": "/docs/0.71/network"
  }
};
const assets = {

};



const toc = [{
  "value": "React Native CLI",
  "id": "react-native-cli",
  "level": 3
}, {
  "value": "1. Run the <code>upgrade</code> command",
  "id": "1-run-the-upgrade-command",
  "level": 4
}, {
  "value": "2. Resolve the conflicts",
  "id": "2-resolve-the-conflicts",
  "level": 4
}, {
  "value": "Upgrade Helper",
  "id": "upgrade-helper",
  "level": 3
}, {
  "value": "1. 选择版本",
  "id": "1-选择版本",
  "level": 4
}, {
  "value": "2. 更新依赖",
  "id": "2-更新依赖",
  "level": 4
}, {
  "value": "3. 更新项目文件",
  "id": "3-更新项目文件",
  "level": 4
}, {
  "value": "疑难解答",
  "id": "疑难解答",
  "level": 3
}, {
  "value": "I want to upgrade with React Native CLI but I don&#39;t use Git",
  "id": "i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git",
  "level": 4
}, {
  "value": "I have done all the changes but my app is still using an old version",
  "id": "i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version",
  "level": 4
}, {
  "value": "手动升级",
  "id": "手动升级",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["时刻将 React Native 更新到最新的版本，可以获得更多 API、视图、开发者工具以及其他一些好东西（译注：官方开发任务繁重，人手紧缺，几乎不会对旧版本提供维护支持，所以即便更新可能带来一些兼容上的变更，但建议开发者还是尽一切可能第一时间更新）。由于一个完整的 React Native 项目是由 Android 项目、iOS 项目和 JavaScript 项目组成的，且都打包在一个 npm 包中，所以升级可能会有一些麻烦。我们会尽量简化这一流程。你可以在项目目录下使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx react-native info"
      }), "命令查看当前的版本。There's currently two ways for upgrading your React Native project: by using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/cli",
        children: "React Native CLI"
      }), " or manually with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/upgrade-helper",
        children: "Upgrade Helper"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["译注：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/releases",
          children: "英文更新日志点这里查看"
        }), "。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "react-native-cli",
      children: "React Native CLI"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/cli",
        children: "React Native CLI"
      }), " comes with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "upgrade"
      }), " command that provides a one-step operation to upgrade the source files with a minimum of conflicts, it internally uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/rn-diff-purge",
        children: "rn-diff-purge"
      }), " project to find out which files need to be created, removed or modified."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "1-run-the-upgrade-command",
      children: ["1. Run the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "upgrade"
      }), " command"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "upgrade"
        }), " command works on top of Git by using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "git apply"
        }), " with 3-way merge, therefore it's required to use Git in order for this to work, if you don't use Git but still want to use this solution then you can check out how to do it in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "#i-want-to-upgrade-with-react-native-cli-but-i-don-t-use-git",
          children: "Troubleshooting"
        }), " section."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Run the following command to start the process of upgrading to the latest version:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npx react-native upgrade\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You may specify a React Native version by passing an argument, e.g. to upgrade to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "0.61.0-rc.0"
      }), " run:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npx react-native upgrade 0.61.0-rc.0\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The project is upgraded using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "git apply"
      }), " with 3-way merge, it may happen that you'll need to resolve a few conflicts after it's finished."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "2-resolve-the-conflicts",
      children: "2. Resolve the conflicts"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Conflicted files include delimiters which make very clear where the changes come from. For example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "13B07F951A680F5B00A75B9A /* Release */ = {\n  isa = XCBuildConfiguration;\n  buildSettings = {\n    ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n<<<<<<< ours\n    CODE_SIGN_IDENTITY = \"iPhone Developer\";\n    FRAMEWORK_SEARCH_PATHS = (\n      \"$(inherited)\",\n      \"$(PROJECT_DIR)/HockeySDK.embeddedframework\",\n      \"$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework\",\n    );\n=======\n    CURRENT_PROJECT_VERSION = 1;\n>>>>>>> theirs\n    HEADER_SEARCH_PATHS = (\n      \"$(inherited)\",\n      /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,\n      \"$(SRCROOT)/../node_modules/react-native/React/**\",\n      \"$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**\",\n    );\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can think of \"ours\" as \"your team\" and \"theirs\" as \"the React Native development team\"."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "upgrade-helper",
      children: "Upgrade Helper"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://react-native-community.github.io/upgrade-helper/",
        children: "Upgrade Helper"
      }), " is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "1-选择版本",
      children: "1. 选择版本"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You first need to select from and to which version you wish to upgrade, by default the latest major versions are selected. After selecting you can click the button \"Show me how to upgrade\"."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "💡 Major updates will show an \"useful content\" section on the top with links to help you out when upgrading."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "2-更新依赖",
      children: "2. 更新依赖"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The first file that is shown is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), ", it's good to update the dependencies that are showing in there. For example, if ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react-native"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react"
      }), " appears as changes then you can install it in your project by running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yarn add"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "# {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff\nyarn add react-native@{{VERSION}}\nyarn add react@{{REACT_VERSION}}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "3-更新项目文件",
      children: "3. 更新项目文件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The new release may contain updates to other files that are generated when you run ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx react-native init"
      }), ", those files are listed after the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " in the Upgrade Helper page. If there aren't other changes then you can just rebuild the project and continue developing."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In case there are changes then you can either update them manually by copying and pasting from the changes in the page or you can do it with the React Native CLI upgrade command by running:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "npx react-native upgrade\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This will check your files against the latest template and perform the following:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If there is a new file in the template, it is simply created."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If a file in the template is identical to your file, it is skipped."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If a file is different in your project than the template, you will be prompted; you have options to keep your file or overwrite it with the template version."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Some upgrades won't be done automatically with the React Native CLI and require manual work, e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0.28"
        }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0.29"
        }), ", or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0.56"
        }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0.57"
        }), ". Make sure to check the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/releases",
          children: "release notes"
        }), " when upgrading so that you can identify any manual changes your particular project may require."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "疑难解答",
      children: "疑难解答"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git",
      children: "I want to upgrade with React Native CLI but I don't use Git"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["While your project does not have to be handled by the Git versioning system -- you can use Mercurial, SVN, or nothing -- you will still need to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://git-scm.com/downloads",
        children: "install Git"
      }), " on your system in order to use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx react-native upgrade"
      }), ". Git will also need to be available in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PATH"
      }), ". If your project doesn't use Git, initialize it and commit:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "git init # Initialize a Git repository\ngit add . # Stage all the current files\ngit commit -m \"Upgrade react-native\" # Save the current files in a commit\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After you finish upgrading you may remove the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".git"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version",
      children: "I have done all the changes but my app is still using an old version"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These sort of errors are usually related to caching, it's recommended to install ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/pmadruga/react-native-clean-project",
        children: "react-native-clean-project"
      }), " to clear all your project's cache and then you can run it again."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "手动升级",
      children: "手动升级"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "升级过程往往会碰到很多问题，尤其涉及到众多第三方时，处理起来尤为费时费力。此时建议可以尝试直接 init 一个新的项目，然后把现有项目的 JS 代码进行手动迁移。"
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