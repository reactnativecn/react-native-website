"use strict";
exports.id = 90996;
exports.ids = [90996];
exports.modules = {

/***/ 6563:
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
	id: 'bundled-hermes',
	title: '捆绑 Hermes 引擎'
};
const contentTitle = undefined;
const metadata = {
  "id": "bundled-hermes",
  "title": "捆绑 Hermes 引擎",
  "description": "本页面综述了 Hermes 与 React Native 是如何被构造的。",
  "source": "@site/architecture/bundled-hermes.md",
  "sourceDirName": ".",
  "slug": "/bundled-hermes",
  "permalink": "/architecture/bundled-hermes",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/architecture/bundled-hermes.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "bundled-hermes",
    "title": "捆绑 Hermes 引擎"
  },
  "sidebar": "architecture",
  "previous": {
    "title": "线程模型",
    "permalink": "/architecture/threading-model"
  },
  "next": {
    "title": "术语表",
    "permalink": "/architecture/glossary"
  }
};
const assets = {

};



const toc = [{
  "value": "什么是“捆绑 Hermes 引擎”（Bundled Hermes）",
  "id": "什么是捆绑-hermes-引擎bundled-hermes",
  "level": 2
}, {
  "value": "为什么我们要迁移到 &#39;Bundled Hermes&#39;",
  "id": "为什么我们要迁移到-bundled-hermes",
  "level": 2
}, {
  "value": "这将会如何影响应用开发者",
  "id": "这将会如何影响应用开发者",
  "level": 2
}, {
  "value": "iOS 用户",
  "id": "ios-用户",
  "level": 3
}, {
  "value": "Android 用户",
  "id": "android-用户",
  "level": 3
}, {
  "value": "新架构下的 Android 用户",
  "id": "新架构下的-android-用户",
  "level": 4
}, {
  "value": "使用 windows 构建新架构的 Android 用户",
  "id": "使用-windows-构建新架构的-android-用户",
  "level": 4
}, {
  "value": "用户还可以使用其他引擎么?",
  "id": "用户还可以使用其他引擎么",
  "level": 3
}, {
  "value": "这个改动如何影响贡献者和第三方库开发者",
  "id": "这个改动如何影响贡献者和第三方库开发者",
  "level": 2
}, {
  "value": "Bundled Hermes 底层是如何工作的?",
  "id": "bundled-hermes-底层是如何工作的",
  "level": 3
}, {
  "value": "Android 实现细节",
  "id": "android-实现细节",
  "level": 4
}, {
  "value": "iOS 实现细节",
  "id": "ios-实现细节",
  "level": 4
}, {
  "value": "我担心这个改动会影响我",
  "id": "我担心这个改动会影响我",
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本页面综述了 Hermes 与 React Native 是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "如何被构造"
      }), "的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你要找的是如何在你的应用中使用 Hermes，可以阅读", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/hermes",
        children: "使用新的 Hermes 引擎"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "请注意这篇文章将会深入这一技术细节，因此目标读者为基于 Hermes 或 React Native 构建第三方库的用户。React Native 的一般用户并不需要了解 React Native 与 Hermes 如何交互的深入细节。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "什么是捆绑-hermes-引擎bundled-hermes",
      children: "什么是“捆绑 Hermes 引擎”（Bundled Hermes）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 React Native 0.69.0 版本后，React Native 的每个版本都会", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "内置"
      }), "一个捆绑的 Hermes 版本。我们把这种发布模型称作 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Bundled Hermes"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "因此在 0.69 版本之后，对每个可以公开使用的 React Native 版本，你都可以获得一个跟随该版本进行构建与测试的 JS 引擎。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "为什么我们要迁移到-bundled-hermes",
      children: "为什么我们要迁移到 'Bundled Hermes'"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["历史版本中，React Native 和 Hermes 使用的是两套", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "不同的发布流程"
      }), "，各自有不同的版本。这一做法对开源社区带来了困扰，你很难知晓某个特定的 Hermes 版本是否与 React Native 版本兼容(例如 Hermes 0.11.0 只能和 React Native 0.68.0 版本兼容)。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Hermes 和 React Natives 共享了一份 JSI 代码(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/hermes/tree/main/API/jsi/jsi",
        children: "Hermes 中"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/tree/main/ReactCommon/jsi/jsi",
        children: "React Native 中"
      }), ")。如果两个 JSI 拷贝没有同步，Hermes 的构建将不能与 React Native 的构建兼容。更多详情可以了解", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/react-native-community/discussions-and-proposals/issues/257",
        children: "ABI 兼容性问题的讨论"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了解决该问题，我们改进了 React Native 的发布流程，以保证下载和构建 Hermes 时和当前的 React Native 使用了相同的 JSI 拷贝。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["基于此流程，我们会在发布 React Native 版本时，同时发布一个与它绑定的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "完全兼容"
      }), "的 Hermes 版本。基于我们开发的 React Native 版本来迁移升级 Hermes 版本，因此叫做“捆绑 Hermes 引擎” ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Bundled Hermes"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "这将会如何影响应用开发者",
      children: "这将会如何影响应用开发者"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如同之前所介绍的，如果你是一个应用开发者，这个改动", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "将不会直接影响"
      }), "你。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了保证透明性，接下来的文件将解释我们在底层到底做了什么，并解释一些这样做的理由。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ios-用户",
      children: "iOS 用户"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 iOS 中，我们移动了之前使用的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-engine"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 React Native 0.69 以前，用户需要下载一个 pod(你可以在这里找到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/CocoaPods/Specs/blob/master/Specs/5/d/0/hermes-engine/0.11.0/hermes-engine.podspec.json",
        children: "podspec"
      }), ")。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 React Native 0.69 中，用户不再需要额外使用 podspec，它被定义在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react-native"
      }), " NPM 包中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sdks/hermes-engine/hermes-engine.podspec"
      }), " 文件替换了。\n这个 podspec 依赖于一个预编译的 Hermes 压缩包(tarball)，该压缩包是作为 React Native 发布流程的一部分被上传到 GitHub Releases。(如，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/releases/tag/v0.69.0-rc.6",
        children: "0.69.0-rc.6 版本发布中的资源文件"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "android-用户",
      children: "Android 用户"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Android 中，我们将以如下方式更新 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/template/android/app/build.gradle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "android/app/build.gradle"
        })
      }), " 文件的默认模板。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-diff",
        children: "dependencies {\n    // ...\n\n    if (enableHermes) {\n+       implementation(\"com.facebook.react:hermes-engine:+\") {\n+           exclude group:'com.facebook.fbjni'\n+       }\n-       def hermesPath = \"../../node_modules/hermes-engine/android/\";\n-       debugImplementation files(hermesPath + \"hermes-debug.aar\")\n-       releaseImplementation files(hermesPath + \"hermes-release.aar\")\n    } else {\n        implementation jscFlavor\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 0.69 之前，用户将会使用来自 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-engine"
      }), " NPM package 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-debug.aar"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-release.aar"
      }), "。\n请注意，我们将会在 React Native 未来的某一个版本，完全", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/c418bf4c8fe8bf97273e3a64211eaa38d836e0a0/package.json#L105",
        children: "去除"
      }), "对 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-engine"
      }), "的依赖。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "新架构下的-android-用户",
      children: "新架构下的 Android 用户"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["由于我们原始代码初始化构建的原理(如，我们怎样使用 NDK)，使用新架构的用户将会", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "从源码构建 Hermes"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这为新架构上的用户调整了 React Native 和 Hermes 的构建机制(他们将从源代码构建这两个框架)。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这意味着此类 Android 用户在首次构建时可能会在构建时遇到性能下降。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/next/build-speed",
        children: "加速你的构建阶段"
      }), "中找到优化构建时间和减少对你构建影响的帮助。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "使用-windows-构建新架构的-android-用户",
      children: "使用 windows 构建新架构的 Android 用户"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 Windows 机器上构建新架构下的 React Native 应用需要执行以下额外步骤来使得构建可以正确工作。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["确保", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://reactnative.dev/docs/environment-setup",
          children: "正确的配置环境"
        }), "，包括 Android SDK 和 node。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["安装带有 Chocolatey 的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://community.chocolatey.org/packages/cmake",
          children: "cmake"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["安装下面中的一个：", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",
              children: "Build Tools for Visual Studio 2022"
            }), "。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://visualstudio.microsoft.com/vs/community/",
              children: "Visual Studio 22 Community Edition"
            }), " - 只选择 C++ desktop development (C++ 桌面开发) 就足够了。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["确保 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022",
          children: "Visual Studio Command Prompt"
        }), " 正确配置。在这些命令行环境中配置了正确的 C++ 编译器环境变量。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["在 Visual Studio Command Prompt 中通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "npx react-native run-android"
        }), " 运行应用。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "用户还可以使用其他引擎么",
      children: "用户还可以使用其他引擎么?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["可以，用户可以自由的使用/禁用 Hermes (在 Android 中 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "enableHermes"
      }), " 变量控制，在 iOS 中是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes_enabled"
      }), ")。\n'Bundled Hermes' 改动对你来说只影响了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Hermes 如何被构建和打包"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请注意，在写作这篇文章时，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "enableHermes"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes_enabled"
      }), " 的默认值为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "false"
      }), "。 我们会在不久的将来寻找一个升级模板的机会， 来将默认值升级为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "true"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "这个改动如何影响贡献者和第三方库开发者",
      children: "这个改动如何影响贡献者和第三方库开发者"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果您是 React Native 的贡献者，或者您正在 React Native 或 Hermes 之上构建第三方库，请进一步阅读我们解释 Bundled Hermes 的工作原理。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "bundled-hermes-底层是如何工作的",
      children: "Bundled Hermes 底层是如何工作的?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这种机制依赖于在 facebook/react-native 代码库中，到 facebook/hermes 存储库中", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "下载源码压缩包"
      }), "的机制。我们为其他原生依赖项（Folly、Glog 等）制定了类似的机制，并且我们让 Hermes 遵循相同的设置。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "main"
      }), " 构建 React Native 时，我们将获取 facebook/hermes 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "main"
      }), " 分支压缩包，并将其构建为 React Native 构建过程的一部分。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当从发布分支（比如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "0.69-stable"
      }), "）构建 React Native 时，我们将在 Hermes 仓库上使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "标签"
      }), "来在两个仓库之间", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "同步代码"
      }), "。然后，使用的特定标签名称将存储在 React Native 的发布分支中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sdks/.hermesversion"
      }), " 文件中（例如在 0.69 发布分支上", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/0.69-stable/sdks/.hermesversion",
        children: "文件"
      }), "）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["从某种意义上说，您可以将此方法视为类似于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "git submodule"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你在 Hermes 之上构建，你可以依靠这些标签来了解在构建 React Native 时使用了哪个版本的 Hermes，因为标签名称中指定了 React Native 的版本（如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-2022-05- 20-RNv0.69.0-ee8941b8874132b8f83e4486b63ed5c19fc3f111"
      }), "）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "android-实现细节",
      children: "Android 实现细节"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了在 Android 上实现，我们在 React Native 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "/ReactAndroid/hermes-engine"
      }), " 中添加了一个新的构建，它将负责构建 Hermes 和打包以供使用（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/pull/33396",
        children: "更多上下文请参见此处"
      }), "）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您现在可以在 React Native ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "main"
      }), " 分支下，通过调用以下命令来触发 Hermes 引擎的构建："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "// Build a debug version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleDebug\n// Build a release version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleRelease\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您不需要在您的机器上安装额外的工具（例如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cmake"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ninja"
      }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "python3"
      }), "），因为我们将构建配置为使用这些工具的 NDK 版本。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Gradle 使用者方面，我们也进行了一些小改进：我们从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "releaseImplementation"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "debugImplementation"
      }), "转移到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "implementation"
      }), "。 这是可性的，因为较新的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-engine"
      }), " Android 工件是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "variant aware"
      }), " 的，并且将正确匹配引擎的调试版本与您的应用程序的调试版本。您在这里不需要任何自定义配置（即使您使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "staging"
      }), " 或其他构建类型/风格）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "但是，这需要在模板中添加这一行："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "exclude group:'com.facebook.fbjni'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["需要这一行是因为 React Native 以非预制方法（即解压缩 .aar 和提取 .so 文件）使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fbjni"
      }), "。 Hermes-engine 和其他库正在使用 prefab 代替使用 fbjni。 我们正在研究将来 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/pull/33397",
        children: "解决此问题"
      }), "，从而只需要一行代码就可以导入 Hermes。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "ios-实现细节",
      children: "iOS 实现细节"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "iOS 实现依赖于位于以下位置的一系列脚本："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/tree/main/scripts/hermes",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "/scripts/hermes"
          })
        }), "。 这些脚本包含下载 hermes 压缩包、解压缩和配置 iOS 构建的逻辑。如果您将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hermes_enabled"
        }), " 字段设置为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "，它们将在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pod install"
        }), " 时被调用。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/tree/main/sdks/hermes-engine",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "/sdks/hermes-engine"
          })
        }), "。 这些脚本包含有效构建 Hermes 的构建逻辑。它们是从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "facebook/hermes"
        }), " 存储库复制的，并加以改造以便在 React Native 中正常工作。具体来说，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "utils"
        }), " 文件夹中的脚本负责为所有 Mac 平台构建 Hermes。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要为 iOS 分发预构建，我们依赖 CircleCI 上的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "build_hermes_macos"
      }), " 任务。该作业将生成一个压缩包产物，该压缩包将由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hermes-engine"
      }), " podspec 下载（即 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.circleci.com/pipelines/github/facebook/react-native/13679/workflows/5172f8e4-6b02-4ccb-ab97-7cb954911fae/jobs/258701/artifacts",
        children: "React Native 0.69 执行所需的资源"
      }), "）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "我担心这个改动会影响我",
      children: "我担心这个改动会影响我"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们想强调的是，这本质上是对 Hermes 在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "哪里"
      }), " 进行构建以及代码是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "如何"
      }), " 在两个存储库之间进行同步的组织更改。 更改应该对我们的用户完全透明。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["从历史上看，我们曾经为特定版本的 React Native 做过 Hermes 的发布（例如 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/hermes/releases/tag/v0.11.0",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "v0.11.0 for RN0.68.x"
        })
      }), ")。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "使用 'Bundled Hermes'，您可以改为依赖一个代表你所使用的特定版本的 React Native 的标签。"
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