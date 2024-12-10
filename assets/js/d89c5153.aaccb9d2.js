exports.id = 74285;
exports.ids = [74285];
exports.modules = {

/***/ 22569:
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
    blockquote: "blockquote",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你之前全局安装过旧的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react-native-cli"
      }), "命令行工具，请使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npm uninstall -g react-native-cli"
      }), "卸载掉它以避免一些冲突："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "npm uninstall -g react-native-cli @react-native-community/cli\n"
      })
    }), "\n"]
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

/***/ 89925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ getting_started_contentTitle),
  "default": () => (/* binding */ getting_started_MDXContent),
  frontMatter: () => (/* binding */ getting_started_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ getting_started_toc)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(34103);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(52553);
var TabItem_default = /*#__PURE__*/__webpack_require__.n(TabItem);
// EXTERNAL MODULE: ./core/TabsConstants.js
var TabsConstants = __webpack_require__(64034);
var TabsConstants_default = /*#__PURE__*/__webpack_require__.n(TabsConstants);
// EXTERNAL MODULE: ./versioned_docs/version-0.75/_remove-global-cli.md
var _remove_global_cli = __webpack_require__(22569);
;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_getting-started-linux-android.md


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));






const toc = [{
  "value": "安装依赖",
  "id": "安装依赖",
  "level": 2
}, {
  "value": "Node",
  "id": "node",
  "level": 3
}, {
  "value": "Yarn",
  "id": "yarn",
  "level": 3
}, {
  "value": "Watchman",
  "id": "watchman",
  "level": 3
}, {
  "value": "Java Development Kit",
  "id": "java-development-kit",
  "level": 3
}, {
  "value": "Android 开发环境",
  "id": "android-开发环境",
  "level": 3
}, {
  "value": "创建新项目",
  "id": "创建新项目",
  "level": 2
}, ..._remove_global_cli/* toc */.RM, {
  "value": "[可选参数] 指定版本或项目模板",
  "id": "可选参数-指定版本或项目模板",
  "level": 3
}, {
  "value": "准备 Android 设备",
  "id": "准备-android-设备",
  "level": 2
}, {
  "value": "使用 Android 真机",
  "id": "使用-android-真机",
  "level": 3
}, {
  "value": "使用 Android 模拟器",
  "id": "使用-android-模拟器",
  "level": 3
}, {
  "value": "编译并运行 React Native 应用",
  "id": "编译并运行-react-native-应用",
  "level": 2
}, {
  "value": "修改项目",
  "id": "修改项目",
  "level": 3
}, {
  "value": "完成了！",
  "id": "完成了",
  "level": 3
}, {
  "value": "接下来？",
  "id": "接下来",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "安装依赖",
      children: "安装依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须安装的依赖有：Node、JDK 和 Android Studio。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "任何编辑器"
      }), "来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node",
      children: "Node"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参照 Node 官方的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nodejs.org/en/download/package-manager/",
        children: "Linux 安装指南"
      }), "来安装 Node 18 以上的版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：强烈建议始终选择 Node 当前的 LTS （长期维护）版本，一般是偶数版本，不要选择偏实验性质的奇数版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，react native 不能正常识别！"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用nrm工具切换淘宝源\nnpx nrm use taobao\n\n# 如果之后需要切换回官方源可使用\nnpx nrm use npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yarn",
      children: "Yarn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://yarnpkg.com",
        children: "Yarn"
      }), "是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install -g yarn\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), "命令，用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn add 某第三方库名"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install 某第三方库名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watchman",
      children: "Watchman"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://facebook.github.io/watchman/docs/install.html#buildinstall",
        children: "Watchman 的安装说明"
      }), "来从源码来编译和安装 Watchman。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://facebook.github.io/watchman/docs/install.html",
          children: "Watchman"
        }), "是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（metro 可以快速捕捉文件的变化从而实现实时刷新）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-development-kit",
      children: "Java Development Kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 当前需要 Java Development Kit [JDK] 17。你可以在命令行中输入\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "javac -version"
      }), "（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。如果版本不合要求，则可以去", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot",
        children: "Temurin"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.oracle.com/java/technologies/downloads/#java17",
        children: "Oracle JDK"
      }), "上下载(后者下载需注册登录)。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "低于 0.73 版本的 React Native 需要 JDK 11 版本，而低于 0.67 的需要 JDK 8 版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-开发环境",
      children: "Android 开发环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请", (0,jsx_runtime.jsx)(_components.code, {
        children: "万分仔细"
      }), "地阅读下面的说明，严格对照文档进行配置操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：请注意！！！国内用户", (0,jsx_runtime.jsx)(_components.code, {
          children: "必须必须必须"
        }), "有稳定的代理软件，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些代理软件可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那就是因为链接源仓库的网络链接被阻断了，这一阻断现象可能因时间、地区、运营商而不同。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["也可以尝试参考这里的做法", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/scwang90/SmartRefreshLayout/issues/1376#issuecomment-938422964",
          children: "设置阿里云的 maven 镜像源"
        }), "，但这个做法可能随 gradle 或者 rn 版本的不同而失效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("h4", {
      id: "android-studio",
      children: "1. 安装 Android Studio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.google.cn/studio/",
        children: "首先下载和安装 Android Studio"
      }), "，国内用户可能无法打开官方链接，可自行使用搜索引擎搜索可用的下载链接。安装界面中选择\"Custom\"选项，确保选中了以下几项："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android Virtual Device"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后点击\"Next\"来安装选中的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装完成后，看到欢迎界面时，就可以进行下面的操作了。"
    }), "\n", (0,jsx_runtime.jsx)("h4", {
      id: "android-sdk",
      children: "2. 安装 Android SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android 6 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击\"Configure\"，然后就能看到\"SDK Manager\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SDK Manager 还可以在 Android Studio 的\"Preferences\"菜单中找到。具体路径是", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance & Behavior"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 SDK Manager 中选择\"SDK Platforms\"选项卡，然后在右下角勾选\"Show Package Details\"。展开", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "选项，确保勾选了下面这些组件（如果看不到这个界面，则需要使用稳定的代理软件）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform 34"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Intel x86 Atom_64 System Image"
        }), "（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["然后点击\"SDK Tools\"选项卡，同样勾中右下角的\"Show Package Details\"。展开\"Android SDK Build-Tools\"选项，确保选中了 React Native 所必须的", (0,jsx_runtime.jsx)(_components.code, {
        children: "34.0.0"
      }), "版本。你可以同时安装多个其他版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后点击\"Apply\"来下载和安装这些组件。"
    }), "\n", (0,jsx_runtime.jsx)("h4", {
      children: "3. 配置 ANDROID_HOME 环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的做法是把下面的命令加入到 shell 的配置文件中。如果你的 shell 是 zsh，则配置文件为", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.zshrc"
      }), "，如果是 bash 则为", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.bash_profile"
      }), "（可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo $0"
      }), "命令查看你所使用的 shell）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。\nexport ANDROID_HOME=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\nexport PATH=$PATH:$ANDROID_HOME/emulator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "source $HOME/.zshrc"
      }), "命令来使环境变量设置立即生效（否则重启后才生效）。可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo $ANDROID_HOME"
      }), "检查此变量是否已正确设置"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["请确保你正确指定了 Android SDK 路径。你可以在 Android Studio 的\"Preferences\"菜单中查看 SDK 的真实路径，具体是", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance & Behavior"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建新项目",
      children: "创建新项目"
    }), "\n", (0,jsx_runtime.jsx)(_remove_global_cli/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用 React Native 内建的命令行工具来创建一个名为\"AwesomeProject\"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx"
      }), "命令来使用："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选参数-指定版本或项目模板",
      children: "[可选参数] 指定版本或项目模板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--version"
      }), "参数（注意是", (0,jsx_runtime.jsx)(_components.code, {
        children: "两"
      }), "个杠）创建指定版本的项目。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject --version X.XX.X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["还可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--template"
      }), "来使用一些社区提供的模板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备-android-设备",
      children: "准备 Android 设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。后面我们所有的文档除非特别说明，并不区分真机或者模拟器。Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.genymotion.com/download",
        children: "Genymotion"
      }), "、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-真机",
      children: "使用 Android 真机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你也可以使用 Android 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/running-on-device",
        children: "在设备上运行"
      }), "这篇文档的说明操作即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-模拟器",
      children: "使用 Android 模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以使用 Android Studio 打开项目下的\"android\"目录，然后可以使用\"AVD Manager\"来查看可用的虚拟设备，它的图标看起来像下面这样："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android Studio AVD Manager",
        src: (__webpack_require__(34639)/* ["default"] */ .A) + "",
        width: "29",
        height: "25"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你刚刚才安装 Android Studio，那么可能需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.com/studio/run/managing-avds.html",
        children: "创建一个虚拟设备"
      }), "。点击\"Create Virtual Device...\"，然后选择所需的设备类型并点击\"Next\"，然后选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiramisu"
      }), " API Level 33 image."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "译注：请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["建议先开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux",
          children: "虚拟加速技术"
        }), "以提高模拟器性能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后点击\"Next\"和\"Finish\"来完成虚拟设备的创建。现在你应该可以点击虚拟设备旁的绿色三角按钮来启动它了。然后我们可以尝试运行应用了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译并运行-react-native-应用",
      children: "编译并运行 React Native 应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn android"
      }), "或者", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn react-native run-android"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd AwesomeProject\nyarn android\n# 或者\nyarn react-native run-android\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此命令会对项目的原生部分进行编译，同时在另外一个命令行中启动", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务对 js 代码进行实时打包处理（类似 webpack）。", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务也可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn start"
      }), "命令单独启动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行。注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟。此过程", (0,jsx_runtime.jsx)(_components.code, {
        children: "严重依赖稳定的代理软件"
      }), "，否则将频繁遭遇链接超时和断开，导致无法运行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "npx react-native run-android"
      }), "只是运行应用的方式之一。你也可以在 Android Studio 中直接运行应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：建议在", (0,jsx_runtime.jsx)(_components.code, {
          children: "run-android"
        }), "成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头", (0,jsx_runtime.jsx)(_components.code, {
          children: "仔细对照文档检查"
        }), "，然后可以看看", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/reactnativecn/react-native-website/issues",
          children: "问题讨论区"
        }), "。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "千万不要"
          })
        }), "执行 bundle 命令，那样会导致代码完全无法刷新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改项目",
      children: "修改项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在你已经成功运行了项目，我们可以开始尝试动手改一改了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用你喜欢的文本编辑器打开", (0,jsx_runtime.jsx)(_components.code, {
          children: "App.tsx"
        }), "并随便改上几行"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按两下 ", (0,jsx_runtime.jsx)("kbd", {
          children: "R"
        }), " 键，或是在开发者菜单中选择 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Reload"
        }), "，就可以看到你的最新修改。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完成了",
      children: "完成了！"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恭喜！你已经成功运行并修改了你的第一个 React Native 应用"
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png",
        width: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接下来",
      children: "接下来？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想把 React Native 集成到现有的原生项目中，则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想从头开始学习 React Native 开发，可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/environment-setup",
        children: "简介"
      }), "文档开始。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_getting-started-macos-android.md


const _getting_started_macos_android_frontMatter = {};
const _getting_started_macos_android_contentTitle = (/* unused pure expression or super */ null && (undefined));






const _getting_started_macos_android_toc = [{
  "value": "安装依赖",
  "id": "安装依赖",
  "level": 2
}, {
  "value": "Node &amp; Watchman",
  "id": "node--watchman",
  "level": 3
}, {
  "value": "Yarn",
  "id": "yarn",
  "level": 3
}, {
  "value": "Java Development Kit",
  "id": "java-development-kit",
  "level": 3
}, {
  "value": "Android 开发环境",
  "id": "android-开发环境",
  "level": 3
}, {
  "value": "3. 配置 ANDROID_HOME 环境变量",
  "id": "3-配置-android_home-环境变量",
  "level": 4
}, ..._remove_global_cli/* toc */.RM, {
  "value": "准备 Android 设备",
  "id": "准备-android-设备",
  "level": 2
}, {
  "value": "使用 Android 真机",
  "id": "使用-android-真机",
  "level": 3
}, {
  "value": "使用 Android 模拟器",
  "id": "使用-android-模拟器",
  "level": 3
}, {
  "value": "编译并运行 React Native 应用",
  "id": "编译并运行-react-native-应用",
  "level": 2
}, {
  "value": "修改项目",
  "id": "修改项目",
  "level": 3
}, {
  "value": "完成了！",
  "id": "完成了",
  "level": 3
}, {
  "value": "接下来？",
  "id": "接下来",
  "level": 2
}];
function _getting_started_macos_android_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "安装依赖",
      children: "安装依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须安装的依赖有：Node、JDK 和 Android Studio。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "任何编辑器"
      }), "来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node--watchman",
      children: "Node & Watchman"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://brew.sh/",
        children: "Homebrew"
      }), "来安装 Node 和 Watchman。在命令行中执行下列命令安装（如安装较慢可以尝试阿里云的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.aliyun.com/mirror/homebrew",
        children: "镜像源"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "brew install node@18\nbrew install watchman\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你已经安装了 Node，请检查其版本是否在 18 以上。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：强烈建议始终选择 Node 当前的 LTS （长期维护）版本，一般是偶数版本，不要选择偏实验性质的奇数版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# 使用nrm工具切换淘宝源\nnpx nrm use taobao\n\n# 如果之后需要切换回官方源可使用\nnpx nrm use npm\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://facebook.github.io/watchman",
        children: "Watchman"
      }), "则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yarn",
      children: "Yarn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://yarnpkg.com",
        children: "Yarn"
      }), "是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install -g yarn\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), "命令，用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn add 某第三方库名"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install 某第三方库名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-development-kit",
      children: "Java Development Kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://brew.sh/",
        children: "Homebrew"
      }), "来安装由 Azul 提供的 名为 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zulu"
      }), " 的 OpenJDK 发行版。此发行版", (0,jsx_runtime.jsx)(_components.strong, {
        children: "同时为 Intel 和 M1 芯片提供支持"
      }), "。在 M1 芯片架构的 Mac 上相比其他 JDK 在编译时有明显的性能优势。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "brew install --cask zulu@17\n\n# Get path to where cask was installed to double-click installer\nbrew info --cask zulu@17\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装 JDK 后，请更新 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JAVA_HOME"
      }), " 环境变量。如果你是按照上述步骤操作，JDK 很可能位于 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 当前需要 Java Development Kit [JDK] 17，不建议使用更高版本或更低版本，可能会碰到问题。你可以在命令行中输入\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "javac -version"
      }), "（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "低于 0.73 版本的 React Native 需要 JDK 11 版本，而低于 0.67 的需要 JDK 8 版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-开发环境",
      children: "Android 开发环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请", (0,jsx_runtime.jsx)(_components.code, {
        children: "万分仔细"
      }), "地阅读下面的说明，严格对照文档进行配置操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：请注意！！！国内用户", (0,jsx_runtime.jsx)(_components.code, {
          children: "必须必须必须"
        }), "有稳定的代理软件，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些代理软件可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那就是因为链接源仓库的网络链接被阻断了，这一阻断现象可能因时间、地区、运营商而不同。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["也可以尝试参考这里的做法", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/scwang90/SmartRefreshLayout/issues/1376#issuecomment-938422964",
          children: "设置阿里云的 maven 镜像源"
        }), "，但这个做法可能随 gradle 或者 rn 版本的不同而失效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("h4", {
      id: "android-studio",
      children: "1. 安装 Android Studio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.google.cn/studio/",
        children: "首先下载和安装 Android Studio"
      }), "，国内用户可能无法打开官方链接，请自行使用搜索引擎搜索可用的下载链接。安装界面中选择\"Custom\"选项，确保选中了以下几项："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android Virtual Device"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后点击\"Next\"来安装选中的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装完成后，看到欢迎界面时，就可以进行下面的操作了。"
    }), "\n", (0,jsx_runtime.jsx)("h4", {
      id: "android-sdk",
      children: "2. 安装 Android SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android 6 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击\"Configure\"，然后就能看到\"SDK Manager\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android Studio Welcome",
        src: (__webpack_require__(59490)/* ["default"] */ .A) + "",
        width: "704",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SDK Manager 还可以在 Android Studio 的\"Preferences\"菜单中找到。具体路径是", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance & Behavior"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 SDK Manager 中选择\"SDK Platforms\"选项卡，然后在右下角勾选\"Show Package Details\"。展开", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "选项，确保勾选了下面这些组件（如果看不到这个界面，则需要使用稳定的代理软件）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform 34"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Intel x86 Atom_64 System Image"
        }), "（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）或是", (0,jsx_runtime.jsx)(_components.code, {
          children: "Google APIs ARM 64 v8a System Image"
        }), "（针对 Apple Silicon 系列机型）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["然后点击\"SDK Tools\"选项卡，同样勾中右下角的\"Show Package Details\"。展开\"Android SDK Build-Tools\"选项，确保选中了 React Native 所必须的", (0,jsx_runtime.jsx)(_components.code, {
        children: "34.0.0"
      }), "版本。你可以同时安装多个其他版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击\"Apply\"来下载和安装选中的这些组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-配置-android_home-环境变量",
      children: "3. 配置 ANDROID_HOME 环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的做法是把下面的命令加入到 shell 的配置文件中。如果你的 shell 是 zsh，则配置文件为", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.zshrc"
      }), "，如果是 bash 则为", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.bash_profile"
      }), "（可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo $0"
      }), "命令查看你所使用的 shell。）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚\nexport ANDROID_HOME=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/emulator\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：~表示用户目录，即", (0,jsx_runtime.jsx)(_components.code, {
          children: "/Users/你的用户名/"
        }), "，而小数点开头的文件在 Finder 中是隐藏的，并且这个文件有可能并不存在。可在终端下使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "vi ~/.zshrc"
        }), "命令创建或编辑。如不熟悉 vi 操作，请点击", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.eepw.com.cn/article/48018.htm",
          children: "这里"
        }), "学习。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "source $HOME/.zshrc"
      }), "命令来使环境变量设置立即生效（否则重启后才生效）。可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo $ANDROID_HOME"
      }), "检查此变量是否已正确设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["请确保你正确指定了 Android SDK 路径。你可以在 Android Studio 的\"Preferences\"菜单中查看 SDK 的真实路径，具体是", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance & Behavior"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("h2", {
      children: "创建新项目"
    }), "\n", (0,jsx_runtime.jsx)(_remove_global_cli/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用 React Native 内建的命令行工具来创建一个名为\"AwesomeProject\"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx"
      }), "命令来使用："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "必须要看的注意事项"
        }), "：请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "使用与核心模块同名的项目名（如 react, react-native 等）。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "在目录、文件名中使用中文、空格等特殊符号。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)("h3", {
      children: "[可选参数] 指定版本或项目模板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--version"
      }), "参数（注意是", (0,jsx_runtime.jsx)(_components.code, {
        children: "两"
      }), "个杠）创建指定版本的项目。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject --version X.XX.X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["还可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--template"
      }), "参数来使用一些社区提供的模板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备-android-设备",
      children: "准备 Android 设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。后面我们所有的文档除非特别说明，并不区分真机或者模拟器。Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.genymotion.com/download",
        children: "Genymotion"
      }), "、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-真机",
      children: "使用 Android 真机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你也可以使用 Android 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/running-on-device",
        children: "在设备上运行"
      }), "这篇文档的说明操作即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-模拟器",
      children: "使用 Android 模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以使用 Android Studio 打开项目下的\"android\"目录，然后可以使用\"AVD Manager\"来查看可用的虚拟设备，它的图标看起来像下面这样："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android Studio AVD Manager",
        src: (__webpack_require__(6754)/* ["default"] */ .A) + "",
        width: "29",
        height: "25"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你刚刚才安装 Android Studio，那么可能需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.com/studio/run/managing-avds.html",
        children: "创建一个虚拟设备"
      }), "。点击\"Create Virtual Device...\"，然后选择所需的设备类型并点击\"Next\"，然后选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiramisu"
      }), " API Level 33 image."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "译注：请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译并运行-react-native-应用",
      children: "编译并运行 React Native 应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn android"
      }), "或者", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn react-native run-android"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd AwesomeProject\nyarn android\n# 或者\nyarn react-native run-android\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此命令会对项目的原生部分进行编译，同时在另外一个命令行中启动", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务对 js 代码进行实时打包处理（类似 webpack）。", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务也可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn start"
      }), "命令单独启动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行。注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟。此过程", (0,jsx_runtime.jsx)(_components.code, {
        children: "严重依赖稳定的代理软件"
      }), "，否则将频繁遭遇链接超时和断开，导致无法运行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "npx react-native run-android"
      }), "只是运行应用的方式之一。你也可以在 Android Studio 中直接运行应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：建议在", (0,jsx_runtime.jsx)(_components.code, {
          children: "run-android"
        }), "成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头", (0,jsx_runtime.jsx)(_components.code, {
          children: "仔细对照文档检查"
        }), "，然后可以看看", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/reactnativecn/react-native-website/issues",
          children: "问题讨论区"
        }), "。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "千万不要"
          })
        }), "执行 bundle 命令，那样会导致代码完全无法刷新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改项目",
      children: "修改项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在你已经成功运行了项目，我们可以开始尝试动手改一改了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用你喜欢的文本编辑器打开", (0,jsx_runtime.jsx)(_components.code, {
          children: "App.js"
        }), "并随便改上几行"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按两下 R 键，或是在开发者菜单中选择 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Reload"
        }), "，就可以看到你的最新修改。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完成了",
      children: "完成了！"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恭喜！你已经成功运行并修改了你的第一个 React Native 应用"
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png",
        width: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接下来",
      children: "接下来？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想把 React Native 集成到现有的原生项目中，则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想从头开始学习 React Native 开发，可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/environment-setup",
        children: "简介"
      }), "文档开始。"]
    })]
  });
}
function _getting_started_macos_android_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_getting_started_macos_android_createMdxContent, {
      ...props
    })
  }) : _getting_started_macos_android_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_getting-started-windows-android.md


const _getting_started_windows_android_frontMatter = {};
const _getting_started_windows_android_contentTitle = (/* unused pure expression or super */ null && (undefined));






const _getting_started_windows_android_toc = [{
  "value": "安装依赖",
  "id": "安装依赖",
  "level": 2
}, {
  "value": "Node, JDK",
  "id": "node-jdk",
  "level": 3
}, {
  "value": "Yarn",
  "id": "yarn",
  "level": 3
}, {
  "value": "Android 开发环境",
  "id": "android-开发环境",
  "level": 3
}, {
  "value": "1. 安装 Android Studio",
  "id": "1-安装-android-studio",
  "level": 4
}, {
  "value": "2. 安装 Android SDK",
  "id": "2-安装-android-sdk",
  "level": 4
}, {
  "value": "3. 配置 ANDROID_HOME 环境变量",
  "id": "3-配置-android_home-环境变量",
  "level": 4
}, {
  "value": "4. 把工具目录添加到环境变量 Path",
  "id": "4-把工具目录添加到环境变量-path",
  "level": 4
}, {
  "value": "创建新项目",
  "id": "创建新项目",
  "level": 2
}, ..._remove_global_cli/* toc */.RM, {
  "value": "[可选参数] 指定版本或项目模板",
  "id": "可选参数-指定版本或项目模板",
  "level": 3
}, {
  "value": "准备 Android 设备",
  "id": "准备-android-设备",
  "level": 2
}, {
  "value": "使用 Android 真机",
  "id": "使用-android-真机",
  "level": 3
}, {
  "value": "使用 Android 模拟器",
  "id": "使用-android-模拟器",
  "level": 3
}, {
  "value": "编译并运行 React Native 应用",
  "id": "编译并运行-react-native-应用",
  "level": 2
}, {
  "value": "修改项目",
  "id": "修改项目",
  "level": 3
}, {
  "value": "完成了！",
  "id": "完成了",
  "level": 3
}, {
  "value": "接下来？",
  "id": "接下来",
  "level": 2
}];
function _getting_started_windows_android_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "安装依赖",
      children: "安装依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须安装的依赖有：Node、JDK 和 Android Studio。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "任何编辑器"
      }), "来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node-jdk",
      children: "Node, JDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议直接使用搜索引擎搜索下载 Node 和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.oracle.com/java/technologies/downloads/#java17",
        children: "Java SE Development Kit (JDK)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意 Node 的版本应大于等于 18，安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：强烈建议始终选择 Node 当前的 LTS （长期维护）版本，一般是偶数版本，不要选择偏实验性质的奇数版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 需要 Java Development Kit [JDK] 17。你可以在命令行中输入\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "javac -version"
      }), "（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。如果版本不合要求，则可以去", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot",
        children: "Temurin"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.oracle.com/java/technologies/downloads/#java17",
        children: "Oracle JDK"
      }), "上下载(后者下载需注册登录)。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "低于 0.73 版本的 React Native 需要 JDK 11 版本，而低于 0.67 的需要 JDK 8 版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用nrm工具切换淘宝源\nnpx nrm use taobao\n\n# 如果之后需要切换回官方源可使用\nnpx nrm use npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yarn",
      children: "Yarn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://yarnpkg.com",
        children: "Yarn"
      }), "是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install -g yarn\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), "命令，用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn add 某第三方库名"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install 某第三方库名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-开发环境",
      children: "Android 开发环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请", (0,jsx_runtime.jsx)(_components.code, {
        children: "万分仔细"
      }), "地阅读下面的说明，严格对照文档进行配置操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：请注意！！！国内用户", (0,jsx_runtime.jsx)(_components.code, {
          children: "必须必须必须"
        }), "有稳定的代理软件，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些代理软件可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那就是因为链接源仓库的网络链接被阻断了，这一阻断现象可能因时间、地区、运营商而不同。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["也可以尝试参考这里的做法", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/scwang90/SmartRefreshLayout/issues/1376#issuecomment-938422964",
          children: "设置阿里云的 maven 镜像源"
        }), "，但这个做法可能随 gradle 或者 rn 版本的不同而失效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-安装-android-studio",
      children: "1. 安装 Android Studio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.google.cn/studio/",
        children: "首先下载和安装 Android Studio"
      }), "，国内用户可能无法打开官方链接，请自行使用搜索引擎搜索可用的下载链接。安装界面中选择\"Custom\"选项，确保选中了以下几项："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android Virtual Device"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后点击\"Next\"来安装选中的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装完成后，看到欢迎界面时，就可以进行下面的操作了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-安装-android-sdk",
      children: "2. 安装 Android SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android 6 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击\"Configure\"，然后就能看到\"SDK Manager\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android Studio Welcome",
        src: (__webpack_require__(22322)/* ["default"] */ .A) + "",
        width: "786",
        height: "593"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SDK Manager 还可以在 Android Studio 的\"Preferences\"菜单中找到。具体路径是", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Appearance & Behavior"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 SDK Manager 中选择\"SDK Platforms\"选项卡，然后在右下角勾选\"Show Package Details\"。展开", (0,jsx_runtime.jsx)(_components.code, {
        children: "Android 14 (UpsideDownCake)"
      }), "选项，确保勾选了下面这些组件（如果你看不到这个界面，则需要使用稳定的代理软件）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Android SDK Platform 34"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Intel x86 Atom_64 System Image"
        }), "（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["然后点击\"SDK Tools\"选项卡，同样勾中右下角的\"Show Package Details\"。展开\"Android SDK Build-Tools\"选项，确保选中了 React Native 所必须的", (0,jsx_runtime.jsx)(_components.code, {
        children: "34.0.0"
      }), "版本。你可以同时安装多个其他版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后点击\"Apply\"来下载和安装这些组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-配置-android_home-环境变量",
      children: "3. 配置 ANDROID_HOME 环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打开", (0,jsx_runtime.jsx)(_components.code, {
        children: "控制面板"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "系统和安全"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "系统"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "高级系统设置"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "高级"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "环境变量"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "新建"
      }), "，创建一个名为", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANDROID_HOME"
      }), "的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录（具体的路径可能和下图不一致，请自行确认）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "ANDROID_HOME Environment Variable",
        src: (__webpack_require__(44413)/* ["default"] */ .A) + "",
        width: "653",
        height: "165"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDK 默认是安装在下面的目录："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "C:\\Users\\你的用户名\\AppData\\Local\\Android\\Sdk\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以在 Android Studio 的\"Preferences\"菜单中查看 SDK 的真实路径，具体是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Appearance & Behavior"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Settings"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Android SDK"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-把工具目录添加到环境变量-path",
      children: "4. 把工具目录添加到环境变量 Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打开", (0,jsx_runtime.jsx)(_components.code, {
        children: "控制面板"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "系统和安全"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "系统"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "高级系统设置"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "高级"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "环境变量"
      }), "，选中", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Path"
      }), "变量，然后点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: "编辑"
      }), "。点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: "新建"
      }), "然后把以下工具目录路径添加进去：platform-tools"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "%ANDROID_HOME%\\platform-tools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建新项目",
      children: "创建新项目"
    }), "\n", (0,jsx_runtime.jsx)(_remove_global_cli/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用 React Native 内建的命令行工具来创建一个名为\"AwesomeProject\"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx"
      }), "命令来使用："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "必须要看的注意事项一"
        }), "：请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "在目录、文件名中使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "中文、空格"
        }), "等特殊符号。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "使用与核心模块同名的项目名（如 react, react-native 等）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "必须要看的注意事项二"
        }), "：请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "在某些权限敏感的目录例如 System32 目录中 init 项目！会有各种权限限制导致不能运行！"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "必须要看的注意事项三"
        }), "：请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "使用一些移植的终端环境，例如", (0,jsx_runtime.jsx)(_components.code, {
          children: "git bash"
        }), "或", (0,jsx_runtime.jsx)(_components.code, {
          children: "mingw"
        }), "等等，这些在 windows 下可能导致找不到环境变量。请使用系统自带的命令行（CMD 或 powershell）运行。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选参数-指定版本或项目模板",
      children: "[可选参数] 指定版本或项目模板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--version"
      }), "参数（注意是", (0,jsx_runtime.jsx)(_components.code, {
        children: "两"
      }), "个杠）创建指定版本的项目。注意版本号必须精确到两个小数点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject --version X.XX.X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["还可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--template"
      }), "来使用一些社区提供的模板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备-android-设备",
      children: "准备 Android 设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。后面我们所有的文档除非特别说明，并不区分真机或者模拟器。Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.genymotion.com/download",
        children: "Genymotion"
      }), "、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-真机",
      children: "使用 Android 真机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你也可以使用 Android 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/running-on-device",
        children: "在设备上运行"
      }), "这篇文档的说明操作即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-android-模拟器",
      children: "使用 Android 模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以使用 Android Studio 打开项目下的\"android\"目录，然后可以使用\"AVD Manager\"来查看可用的虚拟设备，它的图标看起来像下面这样："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android Studio AVD Manager",
        src: (__webpack_require__(6754)/* ["default"] */ .A) + "",
        width: "29",
        height: "25"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你刚刚才安装 Android Studio，那么可能需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.com/studio/run/managing-avds.html",
        children: "创建一个虚拟设备"
      }), "。点击\"Create Virtual Device...\"，然后选择所需的设备类型并点击\"Next\"，然后选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiramisu"
      }), " API Level 33 image."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "译注：请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译并运行-react-native-应用",
      children: "编译并运行 React Native 应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn android"
      }), "或者", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn react-native run-android"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd AwesomeProject\nyarn android\n# 或者\nyarn react-native run-android\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此命令会对项目的原生部分进行编译，同时在另外一个命令行中启动", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务对 js 代码进行实时打包处理（类似 webpack）。", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务也可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn start"
      }), "命令单独启动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行。注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟。此过程", (0,jsx_runtime.jsx)(_components.code, {
        children: "严重依赖稳定的代理软件"
      }), "，否则将频繁遭遇链接超时和断开，导致无法运行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "npx react-native run-android"
      }), "只是运行应用的方式之一。你也可以在 Android Studio 中直接运行应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：建议在", (0,jsx_runtime.jsx)(_components.code, {
          children: "run-android"
        }), "成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头", (0,jsx_runtime.jsx)(_components.code, {
          children: "仔细对照文档检查"
        }), "，然后可以看看", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/reactnativecn/react-native-website/issues",
          children: "问题讨论区"
        }), "。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "千万不要"
          })
        }), "执行 bundle 命令，那样会导致代码完全无法刷新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改项目",
      children: "修改项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在你已经成功运行了项目，我们可以开始尝试动手改一改了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用你喜欢的文本编辑器打开", (0,jsx_runtime.jsx)(_components.code, {
          children: "App.js"
        }), "并随便改上几行"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按两下 R 键，或是在开发者菜单中选择 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Reload"
        }), "，就可以看到你的最新修改。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完成了",
      children: "完成了！"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恭喜！你已经成功运行并修改了你的第一个 React Native 应用"
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png",
        width: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接下来",
      children: "接下来？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想把 React Native 集成到现有的原生项目中，则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想从头开始学习 React Native 开发，可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/environment-setup",
        children: "简介"
      }), "文档开始。"]
    })]
  });
}
function _getting_started_windows_android_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_getting_started_windows_android_createMdxContent, {
      ...props
    })
  }) : _getting_started_windows_android_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_getting-started-macos-ios.md


const _getting_started_macos_ios_frontMatter = {};
const _getting_started_macos_ios_contentTitle = (/* unused pure expression or super */ null && (undefined));






const _getting_started_macos_ios_toc = [{
  "value": "安装依赖",
  "id": "安装依赖",
  "level": 2
}, {
  "value": "Node &amp; Watchman",
  "id": "node--watchman",
  "level": 3
}, {
  "value": "Yarn",
  "id": "yarn",
  "level": 3
}, {
  "value": "Xcode",
  "id": "xcode",
  "level": 3
}, {
  "value": "Xcode 的命令行工具",
  "id": "xcode-的命令行工具",
  "level": 4
}, {
  "value": "在 Xcode 中安装 iOS 模拟器",
  "id": "在-xcode-中安装-ios-模拟器",
  "level": 4
}, {
  "value": "CocoaPods",
  "id": "cocoapods",
  "level": 4
}, {
  "value": "创建新项目",
  "id": "创建新项目",
  "level": 2
}, ..._remove_global_cli/* toc */.RM, {
  "value": "[可选参数] 指定版本或项目模板",
  "id": "可选参数-指定版本或项目模板",
  "level": 3
}, {
  "value": "[可选文件] Xcode 的环境配置文件",
  "id": "可选文件-xcode-的环境配置文件",
  "level": 3
}, {
  "value": "编译并运行 React Native 应用",
  "id": "编译并运行-react-native-应用",
  "level": 2
}, {
  "value": "在真机上运行",
  "id": "在真机上运行",
  "level": 3
}, {
  "value": "修改项目",
  "id": "修改项目",
  "level": 3
}, {
  "value": "完成了！",
  "id": "完成了",
  "level": 3
}, {
  "value": "接下来？",
  "id": "接下来",
  "level": 2
}];
function _getting_started_macos_ios_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "安装依赖",
      children: "安装依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须安装的依赖有：Node、Watchman、Xcode 和 CocoaPods。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "任何编辑器"
      }), "来开发应用（编写 js 代码），但你仍然必须安装 Xcode 来获得编译 iOS 应用所需的工具和环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node--watchman",
      children: "Node & Watchman"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://brew.sh/",
        children: "Homebrew"
      }), "来安装 Node 和 Watchman。在命令行中执行下列命令安装（如安装较慢可以尝试阿里云的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.aliyun.com/mirror/homebrew",
        children: "镜像源"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "brew install node@18\nbrew install watchman\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你已经安装了 Node，请检查其版本是否在 18 以上。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：强烈建议始终选择 Node 当前的 LTS （长期维护）版本，一般是偶数版本，不要选择偏实验性质的奇数版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用nrm工具切换淘宝源\nnpx nrm use taobao\n\n# 如果之后需要切换回官方源可使用\nnpx nrm use npm\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://facebook.github.io/watchman",
        children: "Watchman"
      }), "则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yarn",
      children: "Yarn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://classic.yarnpkg.com",
        children: "Yarn"
      }), "是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install -g yarn\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), "命令，用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn add 某第三方库名"
      }), "代替", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install 某第三方库名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xcode",
      children: "Xcode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 目前需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.apple.com/xcode/downloads/",
        children: "Xcode"
      }), " 14.1 或更高版本。你可以通过 App Store 或是到", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.apple.com/xcode/downloads/",
        children: "Apple 开发者官网"
      }), "上下载。这一步骤会同时安装 Xcode IDE、Xcode 的命令行工具和 iOS 模拟器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xcode-的命令行工具",
      children: "Xcode 的命令行工具"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动 Xcode，并在", (0,jsx_runtime.jsx)(_components.code, {
        children: "Xcode | Preferences | Locations"
      }), "菜单中检查一下是否装有某个版本的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Command Line Tools"
      }), "。Xcode 的命令行工具中包含一些必须的工具，比如", (0,jsx_runtime.jsx)(_components.code, {
        children: "git"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Xcode Command Line Tools",
        src: (__webpack_require__(79247)/* ["default"] */ .A) + "",
        width: "1884",
        height: "1324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "在-xcode-中安装-ios-模拟器",
      children: "在 Xcode 中安装 iOS 模拟器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装模拟器只需打开 ", (0,jsx_runtime.jsx)("strong", {
        children: "Xcode > Preferences..."
      }), " 菜单，然后选择 ", (0,jsx_runtime.jsx)("strong", {
        children: "Components"
      }), " 选项，即可看到各种可供安装的不同的 iOS 版本的模拟器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cocoapods",
      children: "CocoaPods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://cocoapods.org/",
        children: "CocoaPods"
      }), "是用 Ruby 编写的包管理器（可以理解为针对 iOS 的 npm）。从 0.60 版本开始 react native 的 iOS 版本需要使用 CocoaPods 来管理依赖。你可以使用下面的命令来安装 CocoaPods。CocoaPods 的版本需要 1.10 以上。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "当然安装可能也不顺利，请使用代理软件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "sudo gem install cocoapods\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "或者可以使用 brew 来安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "brew install cocoapods\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要了解更多信息，可以访问", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://guides.cocoapods.org/using/getting-started.html",
        children: "CocoaPods 的官网"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建新项目",
      children: "创建新项目"
    }), "\n", (0,jsx_runtime.jsx)(_remove_global_cli/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用 React Native 内建的命令行工具来创建一个名为\"AwesomeProject\"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx"
      }), "命令来使用（注意 init 命令默认会创建最新的版本）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "注意一"
        }), "：请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "在目录、文件名中使用中文、空格等特殊符号。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。请", (0,jsx_runtime.jsx)(_components.code, {
          children: "不要"
        }), "使用与核心模块同名的项目名（如 react, react-native 等）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "注意二"
        }), "：0.60 及以上版本的原生依赖是通过 CocoaPods 集成安装的。CocoaPods 的源必须使用代理访问（镜像源也无效）。如果在 CocoaPods 的依赖安装步骤卡住（命令行停在 Installing CocoaPods dependencies 很久，或各种网络超时重置报错，或在 ios 目录中无法生成.xcworkspace 文件），请务必检查确定你的代理配置是否对命令行有效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选参数-指定版本或项目模板",
      children: "[可选参数] 指定版本或项目模板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--version"
      }), "参数（注意是", (0,jsx_runtime.jsx)(_components.code, {
        children: "两"
      }), "个杠）创建指定版本的项目。注意版本号必须精确到两个小数点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "npx @react-native-community/cli init AwesomeProject --version X.XX.X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["还可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "--template"
      }), "来使用一些社区提供的模板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选文件-xcode-的环境配置文件",
      children: "[可选文件] Xcode 的环境配置文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从 React Native 版本 0.69 开始，可以使用模板提供的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".xcode.env"
      }), " 文件来配置 Xcode 环境。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: ".xcode.env"
      }), " 文件中包含一个环境变量示例，用于在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NODE_BINARY"
      }), " 变量中导出 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node"
      }), " 执行文件的路径。这是将构建基础结构与", (0,jsx_runtime.jsx)(_components.code, {
        children: "node"
      }), "系统版本解耦的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "推荐做法"
      }), "。如果与默认值不同，则应使用您自己的路径或您自己的", (0,jsx_runtime.jsx)(_components.code, {
        children: "node"
      }), "版本管理器来自定义此变量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此外，您还可以在构建脚本阶段中添加任何其他环境变量并导入 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".xcode.env"
      }), " 文件。如果您需要运行需要特定环境的脚本，这也是将构建阶段与特定环境解耦的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "推荐做法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译并运行-react-native-应用",
      children: "编译并运行 React Native 应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在你的项目目录中运行", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn ios"
      }), "或者", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn react-native run-ios"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "cd AwesomeProject\nyarn ios\n# 或者\nyarn react-native run-ios\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此命令会对项目的原生部分进行编译，同时在另外一个命令行中启动", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务对 js 代码进行实时打包处理（类似 webpack）。", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "服务也可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn start"
      }), "命令单独启动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["提示：如果此命令无法正常运行，请使用 Xcode 运行来查看具体错误（run-ios 的报错没有任何具体信息）。注意 0.60 版本之后的主项目文件是", (0,jsx_runtime.jsx)(_components.code, {
          children: ".xcworkspace"
        }), "，不是", (0,jsx_runtime.jsx)(_components.code, {
          children: ".xcodeproj"
        }), "！"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "很快就应该能看到 iOS 模拟器自动启动并运行你的项目。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在正常编译完成后，开发期间请保持", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metro"
      }), "命令行窗口运行而不要关闭。以后需要再次运行项目时，如果没有修改过 ios 目录中的任何文件，则只需单独启动", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn start"
      }), "命令。如果对 ios 目录中任何文件有修改，则需要再次运行", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn ios"
      }), "命令完成原生部分的编译。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AwesomeProject on iOS",
        src: (__webpack_require__(65192)/* ["default"] */ .A) + "",
        width: "249",
        height: "493"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "yarn ios"
      }), "只是运行应用的方式之一。你也可以在 Xcode 中直接运行应用。注意 0.60 版本之后的主项目文件是", (0,jsx_runtime.jsx)(_components.code, {
        children: ".xcworkspace"
      }), "，不是", (0,jsx_runtime.jsx)(_components.code, {
        children: ".xcodeproj"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你无法正常运行，先回头", (0,jsx_runtime.jsx)(_components.code, {
          children: "仔细对照文档检查"
        }), "，然后可以看看", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/reactnativecn/react-native-website/issues",
          children: "讨论区"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在真机上运行",
      children: "在真机上运行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上面的命令会自动在 iOS 模拟器上运行应用，如果你想在真机上运行，则请阅读", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/running-on-device",
        children: "在设备上运行"
      }), "这篇文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改项目",
      children: "修改项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在你已经成功运行了项目，我们可以开始尝试动手改一改了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用你喜欢的编辑器打开", (0,jsx_runtime.jsx)(_components.code, {
          children: "App.js"
        }), "并随便改上几行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在 iOS 模拟器中按下", (0,jsx_runtime.jsx)(_components.code, {
          children: "⌘-R"
        }), "就可以刷新 APP 并看到你的最新修改！（如果没有反应，请检查模拟器的 Hardware 菜单中，connect hardware keyboard 选项是否选中开启）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完成了",
      children: "完成了！"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恭喜！你已经成功运行并修改了你的第一个 React Native 应用。"
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png",
        width: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接下来",
      children: "接下来？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想把 React Native 集成到现有的原生项目中，则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/integration-with-existing-apps",
        children: "集成到现有原生应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你想从头开始学习 React Native 开发，可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/0.75/environment-setup",
        children: "简介"
      }), "文档开始。"]
    })]
  });
}
function _getting_started_macos_ios_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_getting_started_macos_ios_createMdxContent, {
      ...props
    })
  }) : _getting_started_macos_ios_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/getting-started.md


const getting_started_frontMatter = {
	id: 'environment-setup',
	title: '搭建开发环境',
	hide_table_of_contents: true
};
const getting_started_contentTitle = undefined;
const metadata = {
  "id": "environment-setup",
  "title": "搭建开发环境",
  "description": "欢迎使用 React Native！这篇文档会帮助你搭建基本的 React Native 开发环境。",
  "source": "@site/versioned_docs/version-0.75/getting-started.md",
  "sourceDirName": ".",
  "slug": "/environment-setup",
  "permalink": "/docs/0.75/environment-setup",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/getting-started.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "environment-setup",
    "title": "搭建开发环境",
    "hide_table_of_contents": true
  },
  "sidebar": "docs",
  "previous": {
    "title": "其他参考资源",
    "permalink": "/docs/0.75/more-resources"
  },
  "next": {
    "title": "集成到现有原生应用",
    "permalink": "/docs/0.75/integration-with-existing-apps"
  }
};
const assets = {

};










const getting_started_toc = [{
  "value": "开发平台",
  "id": "开发平台",
  "level": 4
}, {
  "value": "目标平台",
  "id": "目标平台",
  "level": 4
}, ..._getting_started_macos_android_toc, ..._getting_started_macos_ios_toc, {
  "value": "目标平台",
  "id": "目标平台-1",
  "level": 4
}, ..._getting_started_windows_android_toc, {
  "value": "暂不支持",
  "id": "暂不支持",
  "level": 2
}, {
  "value": "目标平台",
  "id": "目标平台-2",
  "level": 4
}, ...toc, {
  "value": "暂不支持",
  "id": "暂不支持-1",
  "level": 2
}];
function getting_started_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "欢迎使用 React Native！这篇文档会帮助你搭建基本的 React Native 开发环境。"
    }), "\n", (0,jsx_runtime.jsxs)((Tabs_default()), {
      groupId: "guide",
      defaultValue: (TabsConstants_default()).defaultGuide,
      values: (TabsConstants_default()).guides,
      children: [(0,jsx_runtime.jsxs)((TabItem_default()), {
        value: "quickstart",
        children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "译注：沙盒环境大量依赖于国外网络环境，也不能直接安装第三方原生组件。不建议国内用户使用"
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Assuming that you have ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://nodejs.org/en/download/",
            children: "Node 12 LTS"
          }), " or greater installed, you can use npm to install the Expo CLI command line utility:"]
        }), (0,jsx_runtime.jsxs)((Tabs_default()), {
          groupId: "package-manager",
          defaultValue: (TabsConstants_default()).defaultPackageManager,
          values: (TabsConstants_default()).packageManagers,
          children: [(0,jsx_runtime.jsx)((TabItem_default()), {
            value: "npm",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell",
                children: "npm install -g expo-cli\n"
              })
            })
          }), (0,jsx_runtime.jsx)((TabItem_default()), {
            value: "yarn",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell",
                children: "yarn global add expo-cli\n"
              })
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Then run the following commands to create a new React Native project called \"AwesomeProject\":"
        }), (0,jsx_runtime.jsxs)((Tabs_default()), {
          groupId: "package-manager",
          defaultValue: (TabsConstants_default()).defaultPackageManager,
          values: (TabsConstants_default()).packageManagers,
          children: [(0,jsx_runtime.jsx)((TabItem_default()), {
            value: "npm",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell",
                children: "expo init AwesomeProject\n\ncd AwesomeProject\nnpm start # you can also use: expo start\n"
              })
            })
          }), (0,jsx_runtime.jsx)((TabItem_default()), {
            value: "yarn",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell",
                children: "expo init AwesomeProject\n\ncd AwesomeProject\nyarn start # you can also use: expo start\n"
              })
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "This will start a development server for you."
        }), (0,jsx_runtime.jsx)("h2", {
          children: "Running your React Native application"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Install the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://expo.io",
            children: "Expo"
          }), " client app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the Camera app."]
        }), (0,jsx_runtime.jsx)("h3", {
          children: "Modifying your app"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Now that you have successfully run the app, let's modify it. Open ", (0,jsx_runtime.jsx)(_components.code, {
            children: "App.js"
          }), " in your text editor of choice and edit some lines. The application should reload automatically once you save your changes."]
        }), (0,jsx_runtime.jsx)("h3", {
          children: "That's it!"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Congratulations! You've successfully run and modified your first React Native app."
        }), (0,jsx_runtime.jsx)("center", {
          children: (0,jsx_runtime.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png",
            width: "150"
          })
        }), (0,jsx_runtime.jsx)("h2", {
          children: "Now what?"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Expo also has ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.expo.io",
            children: "docs"
          }), " you can reference if you have questions specific to the tool. You can also ask for help at ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://forums.expo.io",
            children: "Expo forums"
          }), "."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["These tools help you get started quickly, but before committing to building your app with Expo CLI, ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.expo.io/versions/latest/introduction/why-not-expo/",
            children: "read about the limitations"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If you have a problem with Expo, before creating a new issue, please see if there's an existing issue about it:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["in the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/expo/expo-cli/issues",
              children: "Expo CLI issues"
            }), " (for issues related to Expo CLI), or"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["in the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/expo/expo/issues",
              children: "Expo issues"
            }), " (for issues about the Expo client or SDK)."]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you're curious to learn more about React Native, check out the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "getting-started",
            children: "Introduction to React Native"
          }), "."]
        }), (0,jsx_runtime.jsx)("h3", {
          children: "Running your app on a simulator or virtual device"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Expo CLI allows you to run your React Native app on a physical device without setting up a development environment. If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions for \"React Native CLI Quickstart\" to learn how to install Xcode or set up your Android development environment."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you've set these up, you can launch your app on an Android Virtual Device by running ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run android"
          }), ", or on the iOS Simulator by running ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run ios"
          }), " (macOS only)."]
        }), (0,jsx_runtime.jsx)("h3", {
          children: "Caveats"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Because you don't build any native code when using Expo to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you know that you'll eventually need to include your own native code, Expo is still a good way to get started. In that case you'll need to \"", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.expo.io/versions/latest/workflow/customizing/",
            children: "eject"
          }), "\" eventually to create your own native builds. If you do eject, the \"React Native CLI Quickstart\" instructions will be required to continue working on your project."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Expo CLI configures your project to use the most recent React Native version that is supported by the Expo client app. The Expo client app usually gains support for a given React Native version about a week after the React Native version is released as stable. You can check ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.expo.io/versions/latest/sdk/overview/#sdk-version",
            children: "this document"
          }), " to find out what versions are supported."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If you're integrating React Native into an existing project, you'll want to skip Expo CLI and go directly to setting up the native build environment. Select \"React Native CLI Quickstart\" above for instructions on configuring a native build environment for React Native."
        })]
      }), (0,jsx_runtime.jsxs)((TabItem_default()), {
        value: "native",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "根据你所使用的操作系统、针对的目标平台不同，具体步骤有所不同。如果想同时开发 iOS 和 Android 也没问题，你只需要先选一个平台开始，另一个平台的环境搭建只是稍有不同。"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果", (0,jsx_runtime.jsx)(_components.code, {
            children: "阅读完本文档"
          }), "后还碰到很多环境搭建的问题，我们建议你还可以再看看", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/reactnativecn/react-native-website/issues",
            children: "求助讨论区"
          }), "。注意！视频教程或者其他网络上的博客和文章可能和本文档有所出入，请以最新版本的本文档所述为准！"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "开发平台",
          children: "开发平台"
        }), (0,jsx_runtime.jsxs)((Tabs_default()), {
          groupId: "os",
          defaultValue: (TabsConstants_default()).defaultOs,
          values: (TabsConstants_default()).oses,
          className: "pill-tabs",
          children: [(0,jsx_runtime.jsxs)((TabItem_default()), {
            value: "macos",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "目标平台",
              children: "目标平台"
            }), (0,jsx_runtime.jsxs)((Tabs_default()), {
              groupId: "platform",
              defaultValue: (TabsConstants_default()).defaultPlatform,
              values: (TabsConstants_default()).platforms,
              className: "pill-tabs",
              children: [(0,jsx_runtime.jsx)((TabItem_default()), {
                value: "android",
                children: (0,jsx_runtime.jsx)(_getting_started_macos_android_MDXContent, {})
              }), (0,jsx_runtime.jsx)((TabItem_default()), {
                value: "ios",
                children: (0,jsx_runtime.jsx)(_getting_started_macos_ios_MDXContent, {})
              })]
            })]
          }), (0,jsx_runtime.jsxs)((TabItem_default()), {
            value: "windows",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "目标平台-1",
              children: "目标平台"
            }), (0,jsx_runtime.jsxs)((Tabs_default()), {
              groupId: "platform",
              defaultValue: (TabsConstants_default()).defaultPlatform,
              values: (TabsConstants_default()).platforms,
              className: "pill-tabs",
              children: [(0,jsx_runtime.jsx)((TabItem_default()), {
                value: "android",
                children: (0,jsx_runtime.jsx)(_getting_started_windows_android_MDXContent, {})
              }), (0,jsx_runtime.jsxs)((TabItem_default()), {
                value: "ios",
                children: [(0,jsx_runtime.jsx)(_components.h2, {
                  id: "暂不支持",
                  children: "暂不支持"
                }), (0,jsx_runtime.jsxs)(_components.blockquote, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["苹果公司目前只允许在 Mac 电脑上开发 iOS 应用。如果你没有 Mac 电脑，那么只能考虑使用", (0,jsx_runtime.jsx)(_components.code, {
                      children: "沙盒环境"
                    }), "，或者先开发 Android 应用了。"]
                  }), "\n"]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsxs)((TabItem_default()), {
            value: "linux",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "目标平台-2",
              children: "目标平台"
            }), (0,jsx_runtime.jsxs)((Tabs_default()), {
              groupId: "platform",
              defaultValue: (TabsConstants_default()).defaultPlatform,
              values: (TabsConstants_default()).platforms,
              className: "pill-tabs",
              children: [(0,jsx_runtime.jsx)((TabItem_default()), {
                value: "android",
                children: (0,jsx_runtime.jsx)(MDXContent, {})
              }), (0,jsx_runtime.jsxs)((TabItem_default()), {
                value: "ios",
                children: [(0,jsx_runtime.jsx)(_components.h2, {
                  id: "暂不支持-1",
                  children: "暂不支持"
                }), (0,jsx_runtime.jsxs)(_components.blockquote, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["苹果公司目前只允许在 Mac 电脑上开发 iOS 应用。如果你没有 Mac 电脑，那么只能考虑使用", (0,jsx_runtime.jsx)(_components.code, {
                      children: "沙盒环境"
                    }), "，或者先开发 Android 应用了。"]
                  }), "\n"]
                })]
              })]
            })]
          })]
        })]
      })]
    })]
  });
}
function getting_started_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(getting_started_createMdxContent, {
      ...props
    })
  }) : getting_started_createMdxContent(props);
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

/***/ 44413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo0AAAClCAMAAAAOEzcNAAABwlBMVEVfosv///8AAADMzMz//7ZmAABmtv9mADqQ2///25A6ADq2ZgA6kNv/tmYAZrYFBwg6AGa2//9mAGY6AAA6kJCQ27b//9uQOgAAAGZmZjq2/7aQtpDbkDoAADoAOpDb//86OpDb/9uQOjoAOmZmOjrw8PB6enqrYAA2h87wq2AAYKvwzoc2ADaHzvDw8KtgADZgq/A6OmY6OgA6Ojo2AGCr8PBgAGAAZmbw8M6HNgBgYDYAAGCr8KuHq4c2AACHh2DOhzYANofO8PBgAADb/7Y2NofO8M6HNjYAADZmtrYANmBgNjaQOmYAeNczmf/MZgCg7v//7v9amf/B//9/mf+gq/9/3v//3v/hzv8zq//h//8zvP/BvP+gvP/h7v/B7v/h3v9azv/B3v+gzv9gNoc2NmBgNmClZgAAYGCtra3h4eHh4aBaAABaoOEzf8HhwX8zADN/weFaADPhoFrh4cF/MwAAWqAAM3/B4eEzAFqg4eEAADOgWgAzAAB/oOHBfzNaWjMAAFozWqBaoKAzMwB/MzN/f1ozMzMzM3+gWjN/oH/B4cFaAFpaM39/waB/M1qgwX9aWlozM1paMzMAM1q/v7+vTvonAAAKLUlEQVR4Aeyd17arNhBAo3EBAnZyesO39957r+n5/7/JDBouxrfiNLO89wNiNOPztJdG4jzouxUCIACsBtgI2AiAjYCNANgI/bYRABsBsBGwEUAGcRzIJ20cjkRkXL0lafZ9qi8e+GORvNDHZBpq/Dde7QPAJxn8MPDh0zYmLQHt+SUbXcR8HFpgYwfQ0R7/jI3ZjxthuLmBjcuCjibjF23MtmQ7SYfJzkhkOmfj7p7I2LL7G8PkYF8l3N0b2/qYW51NHWqlB0dbUtiPYn34JICOLuOn941m2mgcylmqJi2sjZNazUkxHBXBKIvYqK14FO3z4Nhx3UTqW6wP3QBsdJmyE8ft7WMbs62iWjhFpp7R2pOn1DaRyl4ragL1VIdYH7oCdOpP27irwlVbxFDKWEevjKmjE8d1SkvcxibQNh7jALDsKabdqY382PGQT4NSeo/2jPlZhEndlW3ag1Fh/noDB1jiC89IxOwS2Y4q5rHH2vFFhZzYrtJatXdqQ82z9OkztY11cCAy9lNMl04NfP0G4D+DAGtgI2AjADYCNgJgI2AjADYCNgJgI2DjWYDVABsBGwGwEbARABsBGwGwEbARABsBGwGwEbARABsBGwGwEQAbARsBsBGwEQAbARsB/jkbAbDxHKwpK2ljgLUEG/8+gI2AjdgI2AjYeP6CPi5e+hBfvnI1vly7ftWHf9PGeGfXcOQXbPp9Ss097hOPNzc8tXCDsVf4n1DKWeo/hr7Z6CKev9Gu+e9szG6eSU2rW+Noo/plXtk42d8Ik5ld3VWYjZ5asLGpSG5XUyO/grOPYOPlO3fPXrt39/+ysSzKwrTSyzRrG/3CQgvtPuwYq42eamxsVyQHha2l95P+2oiNDx7esPXxvMglNe/R4ydqnwdPn8mFysbLz+Tx3crM56JTc/kbL2wiFlx8+aqrjXbdaxY9zIvaRr/M1S7XjPJpkdtoqbaNTUWys7mhLzt9tREbjRcXYqNW7a69jvZ58PKVbiLtTacuXrDZ15fOXjQv6/xFuWATsWAZG1VFNck9nLdxJDKt0iHGizaOxJilTYUKPdYfvImbT+3yPQQbL799915lEvnJtDPPmkA91UFXPhHbXrbzHswXdLbR2nTp28RpbaP66atea2301GfXRjMzH/sf6SfY+OD907evdPf44H0tWBNoG49xLP0o30wstW/0JW5/I162/nNr32imdto3ptVV7v21ERuNF9ZurSvXgnmgbVs18wZe0co3NnpB905tW0Nvs2ba1szP1GPzrD5Xa+xn6phqbGxX2LvY2GcbsVHN0kVQfvm1FqwOHonc8FNMq1O3ipuCJWzMC3uW1qObT4Wz1G0r443tMg5mo6cWbfxQYcvrbxtzHy2hA/wvpucANg5HwokZG1kb1xpsBGzERsBGwEZsBGxcT2AlbQTARsBGAGwEbATARsBGgH/PRgBsBGwEwMbf1xRYSRvDWgLYCN8ANv6xjvwZ+gM2YiM2YiM2YuNf7JzNrtsgEIXF81Tqri/QVVcWdhyDAze37v/7P0HnZBgfW02EarE0qgLM+RhS+YiJ7wLvXD9Ifxk7fF7140kjUG0Ko03hiSYbx//MD+FVzv2a+YYZ+SS7jYaBPN3Y/m5bxBu4cb5leYBveMa54kYClUa4m+/ve95SXAJn9fwqvMgJ6TU/30b8/+jG042t7rZt70af1zPla8WNBCqNcLfEJT51I0zCWT0/hBc5Ib3mUz8wouTpxiZ327Z3o5kCz8xf6UbU7yyWQZG7fHMjpgV4u6HMIjg5FzSQF4cgeHE3Yfmc70NZxA6Szx3Wo2wHHfELWCZNpSqEfc7vtmcUCd9HFwEsQU0oEDH5F043NrnbFihuIoOMOKRVlvgBN96H1Y0p0o0pdDpJEY9Tpwr0Q3IjgkpoQBAEYeDrBpb0sAQYEawzN/K40hG/QMnUeUTI7XMG23NxokZbBFCDynceFjXs6vN5Nra52xauJavxVT7mRiuYaO/D6sb5Vo46FxDClIB5KImMkQUfyaa8gVFSlwANwraDobheR/wClgkd9/k356Uck1BtEYPKI1tesXs8K3Wju21R0T/++Gyy4pSP/27ka4S333SLMzPgsWKqAN0I2T9x4xZ2aCN07MQOi7leR8y/dyO5fc66GzFDWwLdGE43NrrbFueonKSrTPzwW0xyj3dqqdT6GjHJQP+CsqBGmxsxVYBuTFZ3GcywBGFkVf9FCKVTOnN9GTF/Z5lQqcntc3JPLcG2iEHlpfOR2BRPN7a42xbtw89fn8g+fnJ+KfKhSq3luB/KM8aTw1T/SAdNK7VOAdCNQPv3nRvBb+Ep6smEdwy43joHzNZPLuhI80OMJdMDzdxnm9P2TM5eT3QRg0wYug3m+9+nG5vcbSuYdGSlZP8x+aAbty1FjtnqQBXmm8pf9u3YBmAYBIDghBnETvavMwAFTRDEuqtdIPEdclQ3QHzvFuMyGGvsokY1qjGnxhxqVCNqRI1qRI3t8GcQ8hpBjagR1AhqRI2gRtQIakSNoEbUCGpEjaBG1Li6TRrlX64SxetIaty91qxR1Fi7jnNrVOP+nBrVGKlRjdOpUY1qVKMa1Xg/L3vmoSM5CINhicdlAtks9RLmtvdeHviMibcXVuftSJP2U2Lxf+M4ihBCVUyLHbWU/crwMTS+MTKIa7E6NBpNsSmvhXWeiUbrhAjxeQdWByYaYaL+z1jhOXRcdL4iGAYa3xoZnTQazZQp1LgWSTPlxn6pYPf3Y2iErdJzoONDaayOrNFISUxJtAnWYs2zPKlpUik/hkbj4bC+MfbL/GhMCsV+07p8CeLGWDpiXHCkzqDnPludEF6WwdA0bUPsJkQOGqsjwz38SPydNFK6sDuwFrshMtF4k4NSNhpmxlrgjgl8NHYCpoODhk3lqhAIMHtarmnjiQn9gMZOz7p11FQGY1MelxRL3VgRGRWYhUYSfy2N+1EWmzpAhYvG/Ruu0X2wYWO8td5oztyIFFGRlhTc++Bw/2hn6JdaYsoT/obGHbK86DhE3hmMYB6Pi5PIUzfWRka58UZsufFwZeDOjUaICQ2BLYtkAiuNJeOR53bn9OTo7Dz/H9aEQvFu3Ug0ov4kjXJNr2meurE+MqKRRNnqRkhgvHUjTGt3HtCIe/bcSA9bmH0tPw0vkKc1vehmsKjHTGPRb9I1DS7MXl5hwOX3PzRWR0Y0FvHm3r/wnRoQpEpqLUQWGqUR+E5tQpwNgQ2tnzFgrRsnnB7TLpxmBHAzWLeBKPxtR6Kx6KgqmcpbDM0jk5cMNNZGdpfGIv5iGvPaCDUvSgqRg8ZidojWiesronG2ntb7C3+LSap9i2nfYr4Ijf1+bDQ2Gr8EjdZNQ/tO/a+dO7YBAISBGMj+/e/LEki4uJvBShqCGr2aUKMa1ahGNapRjWp8x5XWby5YXbCCvyZAjagR1EjfpkbUCDY1UZvZiBpJs6kxGM1G1Ag2NXkHOi61IHl9uT0p7gAAAABJRU5ErkJggg==");

/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=");

/***/ }),

/***/ 59490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GettingStartedAndroidStudioWelcomeMacOS-64c618ea062865fedece6dd5f7b78fa4.png");

/***/ }),

/***/ 22322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GettingStartedAndroidStudioWelcomeWindows-ce20d1230828a1a26e143e3a4145f1df.png");

/***/ }),

/***/ 79247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GettingStartedXcodeCommandLineTools-7ddc121ba824227ca88a078b9ad9105e.png");

/***/ }),

/***/ 65192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GettingStartediOSSuccess-e6dd7fc2baa303d1f30373d996a6e51d.png");

/***/ }),

/***/ 34639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=");

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