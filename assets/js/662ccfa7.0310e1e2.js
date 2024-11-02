exports.id = 18989;
exports.ids = [18989];
exports.modules = {

/***/ 30691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ integration_with_existing_apps_contentTitle),
  "default": () => (/* binding */ integration_with_existing_apps_MDXContent),
  frontMatter: () => (/* binding */ integration_with_existing_apps_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ integration_with_existing_apps_toc)
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
;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_integration-with-existing-apps-java.md


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "核心概念",
  "id": "核心概念",
  "level": 2
}, {
  "value": "开发环境准备",
  "id": "开发环境准备",
  "level": 2
}, {
  "value": "1. 配置项目目录结构",
  "id": "1-配置项目目录结构",
  "level": 3
}, {
  "value": "2. 安装 JavaScript 依赖包",
  "id": "2-安装-javascript-依赖包",
  "level": 3
}, {
  "value": "把 React Native 添加到你的应用中",
  "id": "把-react-native-添加到你的应用中",
  "level": 2
}, {
  "value": "配置 Gradle",
  "id": "配置-gradle",
  "level": 3
}, {
  "value": "启用原生模块的自动链接",
  "id": "启用原生模块的自动链接",
  "level": 3
}, {
  "value": "配置权限",
  "id": "配置权限",
  "level": 3
}, {
  "value": "允许明文传输（http 接口） (API level 28+)",
  "id": "允许明文传输http-接口-api-level-28",
  "level": 3
}, {
  "value": "1. 为 debug 版本启用 <code>usesCleartextTraffic</code>选项",
  "id": "1-为-debug-版本启用-usescleartexttraffic选项",
  "level": 4
}, {
  "value": "代码集成",
  "id": "代码集成",
  "level": 3
}, {
  "value": "React Native 组件",
  "id": "react-native-组件",
  "level": 4
}, {
  "value": "1. 创建一个<code>index.js</code>文件",
  "id": "1-创建一个indexjs文件",
  "level": 5
}, {
  "value": "2. 添加你自己的 React Native 代码",
  "id": "2-添加你自己的-react-native-代码",
  "level": 5
}, {
  "value": "3. 配置权限以便开发中的红屏错误能正确显示",
  "id": "3-配置权限以便开发中的红屏错误能正确显示",
  "level": 5
}, {
  "value": "核心组件：<code>ReactRootView</code>",
  "id": "核心组件reactrootview",
  "level": 4
}, {
  "value": "测试集成结果",
  "id": "测试集成结果",
  "level": 3
}, {
  "value": "1. 运行 Metro 服务",
  "id": "1-运行-metro-服务",
  "level": 5
}, {
  "value": "2. 运行你的应用",
  "id": "2-运行你的应用",
  "level": 5
}, {
  "value": "在 Android Studio 中打包",
  "id": "在-android-studio-中打包",
  "level": 3
}, {
  "value": "然后呢？",
  "id": "然后呢",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "核心概念",
      children: "核心概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "把 React Native 组件集成到 Android 应用中有如下几个主要步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置好 React Native 依赖和项目结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建 js 文件，编写 React Native 组件的 js 代码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用中添加一个", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactRootView"
        }), "。这个", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactRootView"
        }), "正是用来承载你的 React Native 组件的容器。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动 React Native 的 Metro 服务，运行应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证这部分组件是否正常工作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发环境准备",
      children: "开发环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "environment-setup",
        children: "开发环境搭建教程"
      }), "来安装 React Native 在 Android 平台上所需的一切依赖软件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-配置项目目录结构",
      children: "1. 配置项目目录结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先创建一个空目录用于存放 React Native 项目，然后在其中创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "/android"
      }), "子目录，把你现有的 Android 项目拷贝到", (0,jsx_runtime.jsx)(_components.code, {
        children: "/android"
      }), "子目录中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-安装-javascript-依赖包",
      children: "2. 安装 JavaScript 依赖包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目根目录下创建一个名为", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), "的空文本文件，然后填入以下内容："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"MyReactNativeApp\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"scripts\": {\n    \"start\": \"react-native start\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["示例中的", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), "字段没有太大意义（除非你要把你的项目发布到 npm 仓库）。", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts"
        }), "中是用于启动 Metro 服务的命令。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来我们使用 yarn 或 npm（两者都是 node 的包管理器）来安装 React 和 React Native 模块。请打开一个终端/命令提示行，进入到项目目录中（即包含有 package.json 文件的目录），然后运行下列命令来安装："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ yarn add react-native\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这样默认会安装最新版本的 React Native，同时会打印出类似下面的警告信息（你可能需要滚动屏幕才能注意到）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "warning \"react-native@0.52.2\" has unmet peer dependency \"react@16.2.0\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是正常现象，意味着我们还需要安装指定版本的 React："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ yarn add react@16.2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意必须严格匹配警告信息中所列出的版本，高了或者低了都不可以。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你使用多个第三方依赖，可能这些第三方各自要求的 react 版本有所冲突，此时应优先满足", (0,jsx_runtime.jsx)(_components.code, {
          children: "react-native"
        }), "所需要的", (0,jsx_runtime.jsx)(_components.code, {
          children: "react"
        }), "版本。其他第三方能用则用，不能用则只能考虑选择其他库。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有 JavaScript 依赖模块都会被安装到项目根目录下的", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录中（这个目录我们原则上不复制、不移动、不修改、不上传，随用随装）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["把", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录记录到", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), "文件中（即不上传到版本控制系统，只保留在本地）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "把-react-native-添加到你的应用中",
      children: "把 React Native 添加到你的应用中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置-gradle",
      children: "配置 Gradle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "React Native 使用 React Native Gradle Plugin 来配置您的依赖项和项目设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先，让我们通过添加以下行来编辑您的", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.gradle"
      }), "文件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "includeBuild('../node_modules/@react-native/gradle-plugin')\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["然后你需要打开顶层的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build.gradle"
      }), " 文件并添加这一行："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-diff",
        children: "buildscript {\n    repositories {\n        google()\n        mavenCentral()\n    }\n    dependencies {\n        classpath(\"com.android.tools.build:gradle:7.3.1\")\n+       classpath(\"com.facebook.react:react-native-gradle-plugin\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这将确保 React Native Gradle Plugin 在您的项目中可用。\n最后，在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/build.gradle"
      }), " 文件中添加以下行（注意它的路径不同于上面，是", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/build.gradle"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-diff",
        children: "apply plugin: \"com.android.application\"\n+apply plugin: \"com.facebook.react\"\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    // Other dependencies here\n+   implementation \"com.facebook.react:react-android\"\n+   implementation \"com.facebook.react:hermes-android\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这些依赖项可在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mavenCentral()"
      }), " 上获得，因此请确保您已在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repositories{}"
      }), " 块中定义它。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "提示",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["我们故意不为这些", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation"
        }), "依赖项指定版本，因为 React Native Gradle Plugin 会自动处理它。如果您不使用 React Native Gradle Plugin，则必须手动指定版本。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用原生模块的自动链接",
      children: "启用原生模块的自动链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",
        children: "自动链接"
      }), "的功能，我们必须将其应用于几个地方。首先，将以下内容添加到", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.gradle"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gradle",
        children: "apply from: file(\"../node_modules/@react-native-community/cli-platform-android/native_modules.gradle\"); applyNativeModulesSettingsGradle(settings)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接下来，在", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/build.gradle"
      }), "的最底部添加以下内容:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gradle",
        children: "apply from: file(\"../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle\"); applyNativeModulesAppBuildGradle(project)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置权限",
      children: "配置权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接着，在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      }), " 清单文件中声明网络权限:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<uses-permission android:name=\"android.permission.INTERNET\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要访问 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DevSettingsActivity"
      }), " 界面（即开发者菜单），则还需要在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      }), " 中声明:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<activity android:name=\"com.facebook.react.devsupport.DevSettingsActivity\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者菜单一般仅用于在开发时从 Packager 服务器刷新 JavaScript 代码，所以在正式发布时你可以去掉这一权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "允许明文传输http-接口-api-level-28",
      children: "允许明文传输（http 接口） (API level 28+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["从 Android 9 (API level 28)开始，默认情况下明文传输（http 接口）是禁用的，只能访问 https 接口。这将阻止应用程序连接到", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://facebook.github.io/metro",
          children: "Metro bundler"
        }), "。下面的更改允许调试版本中的明文通信。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1-为-debug-版本启用-usescleartexttraffic选项",
      children: ["1. 为 debug 版本启用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usesCleartextTraffic"
      }), "选项"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/debug/AndroidManifest.xml"
      }), "中添加", (0,jsx_runtime.jsx)(_components.code, {
        children: "usesCleartextTraffic"
      }), "选项："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- ... -->\n<application\n  android:usesCleartextTraffic=\"true\" tools:targetApi=\"28\" >\n  <!-- ... -->\n</application>\n<!-- ... -->\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果希望在正式打包后也能继续访问 http 接口，则需要在", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/AndroidManifest.xml"
      }), "中也添加这一选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要了解有关网络安全配置和明文通信策略的更多信息，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted",
        children: "此链接"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码集成",
      children: "代码集成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在我们将修改原生 Android 应用程序以集成 React Native。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "react-native-组件",
      children: "React Native 组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们首先要写的是\"High Score\"（得分排行榜）的 JavaScript 端的代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "1-创建一个indexjs文件",
      children: ["1. 创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "文件"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先在项目根目录中创建一个空的", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "文件。(注意一些老的教程可能提到，在 0.49 版本之前是 index.android.js 文件)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "是 React Native 应用在 Android 上的入口文件。而且它是不可或缺的！它可以是个很简单的文件，简单到可以只包含一行", (0,jsx_runtime.jsx)(_components.code, {
        children: "require/import"
      }), "导入语句。本教程中为了简单示范，把全部的代码都写到了", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "里（当然实际开发中我们并不推荐这样做）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-添加你自己的-react-native-代码",
      children: "2. 添加你自己的 React Native 代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "中添加你自己的组件。这里我们只是简单的添加一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), "组件，然后用一个带有样式的", (0,jsx_runtime.jsx)(_components.code, {
        children: "<View>"
      }), "组件把它包起来。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React from 'react';\nimport {AppRegistry, StyleSheet, Text, View} from 'react-native';\n\nconst HelloWorld = () => {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.hello}>Hello, World</Text>\n    </View>\n  );\n};\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  hello: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n  },\n});\n\nAppRegistry.registerComponent(\n  'MyReactNativeApp',\n  () => HelloWorld,\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-配置权限以便开发中的红屏错误能正确显示",
      children: "3. 配置权限以便开发中的红屏错误能正确显示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你的应用会运行在 Android 6.0（API level 23）或更高版本，请确保你在开发版本中有打开", (0,jsx_runtime.jsx)(_components.code, {
        children: "悬浮窗(overlay)"
      }), "权限。你可以在代码中使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "Settings.canDrawOverlays(this);"
      }), "来检查。之所以需要这一权限，是因为我们会把开发中的报错显示在悬浮窗中（仅在开发阶段需要）。在 Android 6.0（API level 23）中用户需要手动同意授权。具体请求授权的做法是在", (0,jsx_runtime.jsx)(_components.code, {
        children: "onCreate()"
      }), "中添加如下代码。其中", (0,jsx_runtime.jsx)(_components.code, {
        children: "OVERLAY_PERMISSION_REQ_CODE"
      }), "是用于回传授权结果的字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "private final int OVERLAY_PERMISSION_REQ_CODE = 1;  // 任写一个值\n\n...\n\nif (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n    if (!Settings.canDrawOverlays(this)) {\n        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,\n                                   Uri.parse(\"package:\" + getPackageName()));\n        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最后，必须重写", (0,jsx_runtime.jsx)(_components.code, {
        children: "onActivityResult()"
      }), "方法（如下面的代码所示）来处理权限接受或拒绝情况以实现一致的用户体验。此外，为了集成使用 startActivityForResult 的原生模块，我们需要将结果传递给 ReactInstanceManager 实例的 onActivityResult 方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\nprotected void onActivityResult(int requestCode, int resultCode, Intent data) {\n    if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {\n        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n            if (!Settings.canDrawOverlays(this)) {\n                // SYSTEM_ALERT_WINDOW permission not granted\n            }\n        }\n    }\n    mReactInstanceManager.onActivityResult( this, requestCode, resultCode, data );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "核心组件reactrootview",
      children: ["核心组件：", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReactRootView"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们还需要添加一些原生代码来启动 React Native 的运行时环境并让它开始渲染。首先需要在一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "Activity"
      }), "中创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReactRootView"
      }), "对象，然后在这个对象之中启动 React Native 应用，并将它设为界面的主视图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你要在安卓 5.0 以下的系统上运行，请用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "com.android.support:appcompat"
        }), " 包中的 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AppCompatActivity"
        }), " 代替 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Activity"
        }), " 。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {\n    private ReactRootView mReactRootView;\n    private ReactInstanceManager mReactInstanceManager;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        SoLoader.init(this, false);\n\n        mReactRootView = new ReactRootView(this);\n        List<ReactPackage> packages = new PackageList(getApplication()).getPackages();\n        // 有一些第三方可能不能自动链接，对于这些包我们可以用下面的方式手动添加进来：\n        // packages.add(new MyReactNativePackage());\n        // 同时需要手动把他们添加到`settings.gradle`和 `app/build.gradle`配置文件中。\n\n        mReactInstanceManager = ReactInstanceManager.builder()\n                .setApplication(getApplication())\n                .setCurrentActivity(this)\n                .setBundleAssetName(\"index.android.bundle\")\n                .setJSMainModulePath(\"index\")\n                .addPackages(packages)\n                .setUseDeveloperSupport(BuildConfig.DEBUG)\n                .setInitialLifecycleState(LifecycleState.RESUMED)\n                .build();\n         // 注意这里的MyReactNativeApp 必须对应\"index.js\"中的\n        // \"AppRegistry.registerComponent()\"的第一个参数\n        mReactRootView.startReactApplication(mReactInstanceManager, \"MyReactNativeApp\", null);\n\n        setContentView(mReactRootView);\n    }\n\n    @Override\n    public void invokeDefaultOnBackPressed() {\n        super.onBackPressed();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行\"Sync Project files with Gradle\"操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果你使用的是 Android Studio , 可以使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "Alt + Enter"
      }), "快捷键来自动为 MyReactActivity 类补上缺失的 import 语句。注意", (0,jsx_runtime.jsx)(_components.code, {
        children: "BuildConfig"
      }), "应该是在你自己的包中自动生成，无需额外引入。千万不要从", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.facebook..."
      }), "的包中引入！"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们需要把 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MyReactActivity"
      }), " 的主题设定为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Theme.AppCompat.Light.NoActionBar"
      }), " ，因为里面有许多组件都使用了这一主题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<activity\n  android:name=\".MyReactActivity\"\n  android:label=\"@string/app_name\"\n  android:theme=\"@style/Theme.AppCompat.Light.NoActionBar\">\n</activity>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["一个", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactInstanceManager"
        }), "可以在多个 activities 或 fragments 间共享。你将需要创建自己的", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactFragment"
        }), "或", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactActivity"
        }), "，并拥有一个保存", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactInstanceManager"
        }), "的单例持有者。当你需要", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactInstanceManager"
        }), "（例如，将", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactInstanceManager"
        }), "连接到这些 Activities 或 Fragments 的生命周期）时，请使用单例提供的那个。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下一步我们需要把一些 activity 的生命周期回调传递给", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReactInstanceManager"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\nprotected void onPause() {\n    super.onPause();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostPause(this);\n    }\n}\n\n@Override\nprotected void onResume() {\n    super.onResume();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostResume(this, this);\n    }\n}\n\n@Override\nprotected void onDestroy() {\n    super.onDestroy();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostDestroy(this);\n    }\n    if (mReactRootView != null) {\n        mReactRootView.unmountReactApplication();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们还需要把后退按钮事件传递给 React Native："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\n public void onBackPressed() {\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onBackPressed();\n    } else {\n        super.onBackPressed();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这允许 JavaScript 控制用户按下设备后退按钮时发生的情况（例如，执行导航时）。当 JavaScript 不处理后退按钮按下的情况时，将调用", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokeDefaultOnBackPressed"
      }), "方法。默认情况下，这将完成你的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Activity"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最后，我们需要连接开发菜单。默认情况下通过（狂）摇晃设备来激活，但这在模拟器中不是很有用，只有当你按下设备菜单按钮时才显示（如果你使用的是 Android Studio 模拟器，请使用", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ctrl + M"
      }), "）:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Override\npublic boolean onKeyUp(int keyCode, KeyEvent event) {\n    if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {\n        mReactInstanceManager.showDevOptionsDialog();\n        return true;\n    }\n    return super.onKeyUp(keyCode, event);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在 activity 已就绪，可以运行一些 JavaScript 代码了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试集成结果",
      children: "测试集成结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你已经完成了将 React Native 与当前应用程序集成的所有基本步骤。现在我们将启动", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://facebook.github.io/metro",
        children: "Metro bundler"
      }), "来构建", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "包，并通过本地主机提供服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-运行-metro-服务",
      children: "1. 运行 Metro 服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行应用首先需要启动开发服务器（Metro）。你只需在项目根目录中执行以下命令即可："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ yarn start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-运行你的应用",
      children: "2. 运行你的应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["保持 Metro 的窗口运行不要关闭，然后像往常一样编译运行你的 Android 应用(在命令行中执行", (0,jsx_runtime.jsx)(_components.code, {
        children: "./gradlew installDebug"
      }), "或是在 Android Studio 中编译运行)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译执行一切顺利进行之后，在进入到 MyReactActivity 时应该就能立刻从 Metro 中读取 JavaScript 代码并执行和显示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot",
        src: (__webpack_require__(96171)/* ["default"] */ .A) + "",
        width: "384",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-android-studio-中打包",
      children: "在 Android Studio 中打包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你也可以使用 Android Studio 来打 release 包！其步骤基本和原生应用一样，只是如果你", (0,jsx_runtime.jsx)(_components.strong, {
        children: "没有"
      }), "使用 React Native Gradle Plugin 的话，则在每次编译打包之前需要先执行 js 文件的打包(即生成离线的 jsbundle 文件)。具体的 js 打包命令如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# 注：如果你使用了 React Native Gradle Plugin，则其会自动执行以下命令，不需要手动执行\n$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest android/com/your-company-name/app-package-name/src/main/res/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "注意把上述命令中的路径替换为你实际项目的路径。如果 assets 目录不存在，则需要提前自己创建一个。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后在 Android Studio 中正常生成 release 版本即可！"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "然后呢",
      children: "然后呢？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后就可以开发啦~可是我完全不会 React Native 怎么办？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议你先通读本站的所有文档，看看博客，看看论坛。如果觉得知识太零散，不够系统，那么你也可以考虑下购买我们的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/about#%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E4%B8%8E%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C",
        children: "付费咨询服务"
      }), "。"]
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


// EXTERNAL MODULE: ./core/TabsConstants.js
var TabsConstants = __webpack_require__(64034);
;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_integration-with-existing-apps-objc.md


const _integration_with_existing_apps_objc_frontMatter = {};
const _integration_with_existing_apps_objc_contentTitle = (/* unused pure expression or super */ null && (undefined));








const _integration_with_existing_apps_objc_toc = [{
  "value": "核心概念",
  "id": "核心概念",
  "level": 2
}, {
  "value": "开发环境准备",
  "id": "开发环境准备",
  "level": 2
}, {
  "value": "1. 配置项目目录结构",
  "id": "1-配置项目目录结构",
  "level": 3
}, {
  "value": "2. 安装 JavaScript 依赖包",
  "id": "2-安装-javascript-依赖包",
  "level": 3
}, {
  "value": "3. 安装 CocoaPods",
  "id": "3-安装-cocoapods",
  "level": 3
}, {
  "value": "把 React Native 添加到你的应用中",
  "id": "把-react-native-添加到你的应用中",
  "level": 2
}, {
  "value": "Xcode 命令行工具",
  "id": "xcode-命令行工具",
  "level": 3
}, {
  "value": "配置 CocoaPods 的依赖",
  "id": "配置-cocoapods-的依赖",
  "level": 3
}, {
  "value": "代码集成",
  "id": "代码集成",
  "level": 3
}, {
  "value": "React Native 组件",
  "id": "react-native-组件",
  "level": 4
}, {
  "value": "1. 创建一个 <code>index.js</code> 文件",
  "id": "1-创建一个-indexjs-文件",
  "level": 5
}, {
  "value": "2. 添加你自己的 React Native 代码",
  "id": "2-添加你自己的-react-native-代码",
  "level": 5
}, {
  "value": "核心组件：<code>RCTRootView</code>",
  "id": "核心组件rctrootview",
  "level": 4
}, {
  "value": "1. 创建一个事件路径",
  "id": "1-创建一个事件路径",
  "level": 5
}, {
  "value": "2. 事件处理",
  "id": "2-事件处理",
  "level": 5
}, {
  "value": "3. 连接起来",
  "id": "3-连接起来",
  "level": 5
}, {
  "value": "测试集成结果",
  "id": "测试集成结果",
  "level": 3
}, {
  "value": "1. 添加 App Transport Security 例外",
  "id": "1-添加-app-transport-security-例外",
  "level": 5
}, {
  "value": "2. 运行 Metro",
  "id": "2-运行-metro",
  "level": 5
}, {
  "value": "3. 运行应用",
  "id": "3-运行应用",
  "level": 5
}, {
  "value": "然后呢？",
  "id": "然后呢",
  "level": 3
}];
function _integration_with_existing_apps_objc_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "核心概念",
      children: "核心概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "把 React Native 组件集成到 iOS 应用中有如下几个主要步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置好 React Native 依赖和项目结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "了解你要集成的 React Native 组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用 CocoaPods 把这些组件以依赖的形式加入到项目中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建 js 文件，编写 React Native 组件的 js 代码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用中添加一个", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView"
        }), "。这个", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView"
        }), "正是用来承载你的 React Native 组件的容器。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动 React Native 的 Packager 服务，运行应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证这部分组件是否正常工作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发环境准备",
      children: "开发环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "environment-setup",
        children: "开发环境搭建教程"
      }), "来安装 React Native 在 iOS 平台上所需的一切依赖软件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-配置项目目录结构",
      children: "1. 配置项目目录结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先创建一个空目录用于存放 React Native 项目，然后在其中创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录，把你现有的 iOS 项目拷贝到", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-安装-javascript-依赖包",
      children: "2. 安装 JavaScript 依赖包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目根目录下创建一个名为", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), "的空文本文件，然后填入以下内容："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"MyReactNativeApp\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"scripts\": {\n    \"start\": \"yarn react-native start\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["示例中的", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), "字段没有太大意义（除非你要把你的项目发布到 npm 仓库）。", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts"
        }), "中是用于启动 Metro 服务的命令。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来我们使用 yarn 或 npm（两者都是 node 的包管理器）来安装 React 和 React Native 模块。请打开一个终端/命令提示行，进入到项目目录中（即包含有 package.json 文件的目录），然后运行下列命令来安装："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ yarn add react-native\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这样默认会安装最新版本的 React Native，同时会打印出类似下面的警告信息（你可能需要滚动屏幕才能注意到）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "warning \"react-native@0.52.2\" has unmet peer dependency \"react@16.2.0\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是正常现象，意味着我们还需要安装指定版本的 React："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ yarn add react@16.2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意必须严格匹配警告信息中所列出的版本，高了或者低了都不可以。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你使用多个第三方依赖，可能这些第三方各自要求的 react 版本有所冲突，此时应优先满足", (0,jsx_runtime.jsx)(_components.code, {
          children: "react-native"
        }), "所需要的", (0,jsx_runtime.jsx)(_components.code, {
          children: "react"
        }), "版本。其他第三方能用则用，不能用则只能考虑选择其他库。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有 JavaScript 依赖模块都会被安装到项目根目录下的", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录中（这个目录我们原则上不复制、不移动、不修改、不上传，随用随装）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["把", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录记录到", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), "文件中（即不上传到版本控制系统，只保留在本地）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-安装-cocoapods",
      children: "3. 安装 CocoaPods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://cocoapods.org",
        children: "CocoaPods"
      }), "是针对 iOS 和 macOS 开发的包管理工具。我们用它来把 React Native 框架的代码下载下来并添加到你当前的项目中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://brew.sh/",
        children: "Homebrew"
      }), "来安装 CocoaPods。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ brew install cocoapods\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "把-react-native-添加到你的应用中",
      children: "把 React Native 添加到你的应用中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本教程中我们用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/austinzheng/iOS-2048",
        children: "示范的 app"
      }), "是一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://en.wikipedia.org/wiki/2048_%28video_game%29",
        children: "2048"
      }), "类型的游戏。下面是这个游戏还没有集成 React Native 时的主界面：\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Before RN Integration",
        src: (__webpack_require__(18343)/* ["default"] */ .A) + "",
        width: "250",
        height: "542"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xcode-命令行工具",
      children: "Xcode 命令行工具"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装 Xcode 命令行工具。在 Xcode 菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings... (或者是 Preferences...)"
      }), "，进入 Locations 面板并通过在 Command Line Tools 下拉菜单中选择最新版本来安装工具。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Xcode Command Line Tools",
        src: (__webpack_require__(79247)/* ["default"] */ .A) + "",
        width: "1884",
        height: "1324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置-cocoapods-的依赖",
      children: "配置 CocoaPods 的依赖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["提示，此部分说明可能落后于最新版本。建议使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx react-native init NewProject"
        }), "创建一个最新版本的纯 RN 项目，去参考其 Podfile 的配置。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 框架整体是作为 node 模块安装到项目中的。下一步我们需要在 CocoaPods 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "中指定我们所需要使用的\"subspecs\"。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可用的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "都列在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React.podspec",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules/react-native/React.podspec"
        })
      }), "中，基本都是按其功能命名的。一般来说你首先需要添加", (0,jsx_runtime.jsx)(_components.code, {
        children: "Core"
      }), "，这一", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "包含了必须的", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppRegistry"
      }), "、", (0,jsx_runtime.jsx)(_components.code, {
        children: "StyleSheet"
      }), "、", (0,jsx_runtime.jsx)(_components.code, {
        children: "View"
      }), "以及其他的一些 React Native 核心库。如果你想使用 React Native 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Text"
      }), "库（即", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), "组件），那就需要添加", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTText"
      }), "的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "。同理，", (0,jsx_runtime.jsx)(_components.code, {
        children: "Image"
      }), "需要加入", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTImage"
      }), "，等等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们需要在", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "文件中指定所需的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "。创建", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "的最简单的方式就是在", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录中使用 CocoaPods 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "init"
      }), "命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ pod init\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "会创建在执行命令的目录中。你需要调整其内容以满足你的集成需求。调整后的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "的内容看起来类似下面这个模板文件（也可以用", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx react-native init 项目名"
      }), "命令创建一个纯 RN 项目，然后去参考其 ios 目录中的 Podfile 文件）：\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/react-native/template/ios/Podfile",
        children: "Podfile 示范模板"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建好了", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "后，就可以开始安装 React Native 的 pod 包了。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ pod install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后你应该可以看到类似下面的输出(译注：同样由于众所周知的网络原因，pod install 的过程在国内非常不顺利，请自行配备稳定的代理软件。)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Analyzing dependencies\nFetching podspec for `React` from `../node_modules/react-native`\nDownloading dependencies\nInstalling React (0.62.0)\nGenerating Pods project\nIntegrating client project\nSending stats\nPod installation complete! There are 3 dependencies from the Podfile and 1 total pod installed.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果出现提到 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "xcrun"
        }), " 的错误，请确保在 Xcode 中的 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preferences > Locations"
        }), " 中分配了命令行工具。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码集成",
      children: "代码集成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在我们已经准备好了所有依赖，可以开始着手修改原生代码来把 React Native 真正集成到应用中了。在我们的 2048 示例中，首先尝试添加一个显示有\"High Score\"（得分排行榜）的 React Native 页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "react-native-组件",
      children: "React Native 组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们首先要写的是\"High Score\"（得分排行榜）的 JavaScript 端的代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "1-创建一个-indexjs-文件",
      children: ["1. 创建一个 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), " 文件"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先在项目根目录下创建一个空的", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "是 React Native 应用在 iOS 上的入口文件。而且它是不可或缺的！它可以是个很简单的文件，简单到可以只包含一行", (0,jsx_runtime.jsx)(_components.code, {
        children: "require/import"
      }), "导入语句。本教程中为了简单示范，把全部的代码都写到了", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "里（当然实际开发中我们并不推荐这样做）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-添加你自己的-react-native-代码",
      children: "2. 添加你自己的 React Native 代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "中添加你自己的组件。这里我们只是简单的添加一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), "组件，然后用一个带有样式的", (0,jsx_runtime.jsx)(_components.code, {
        children: "<View>"
      }), "组件把它包起来。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React from 'react';\nimport {AppRegistry, StyleSheet, Text, View} from 'react-native';\n\nconst RNHighScores = ({scores}) => {\n  const contents = scores.map(score => (\n    <Text key={score.name}>\n      {score.name}:{score.value}\n      {'\\n'}\n    </Text>\n  ));\n  return (\n    <View style={styles.container}>\n      <Text style={styles.highScoresTitle}>\n        2048 High Scores!\n      </Text>\n      <Text style={styles.scores}>{contents}</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#FFFFFF',\n  },\n  highScoresTitle: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n  },\n  scores: {\n    textAlign: 'center',\n    color: '#333333',\n    marginBottom: 5,\n  },\n});\n\n// 模块名称\nAppRegistry.registerComponent('RNHighScores', () => RNHighScores);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RNHighScores"
        }), "是整体 js 模块（即你所有的 js 代码）的名称。你在 iOS 原生代码中添加 React Native 视图时会用到这个名称。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "核心组件rctrootview",
      children: ["核心组件：", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["现在我们已经在", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "中创建了 React Native 组件，下一步就是把这个组件添加给一个新的或已有的", (0,jsx_runtime.jsx)(_components.code, {
        children: "ViewController"
      }), "。最简单的方法是可选地为您的组件创建一个事件路径，然后将该组件添加到现有的“ViewController”中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们将把 React Native 组件与名为“RCTRootView”的新原生视图绑定在一起，该视图实际上包含它。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-创建一个事件路径",
      children: "1. 创建一个事件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在主游戏菜单上添加一个新链接，以便前往 \"High Score\" 的 React Native 页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Event Path",
        src: (__webpack_require__(43330)/* ["default"] */ .A) + "",
        width: "464",
        height: "670"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-事件处理",
      children: "2. 事件处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["现在我们将从菜单链接中添加一个事件处理程序。一个方法将被添加到你的应用程序的主", (0,jsx_runtime.jsx)(_components.code, {
        children: "ViewController"
      }), "中。这就是", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "发挥作用的地方。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当你构建一个 React Native 应用时，需要使用 Metro（以前叫做 react packager）来创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "。", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "里面包含了我们的", (0,jsx_runtime.jsx)(_components.code, {
        children: "RNHighScore"
      }), "模块。因此，我们需要将", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "指向", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "资源的位置（通过", (0,jsx_runtime.jsx)(_components.code, {
        children: "NSURL"
      }), "），并将其与模块绑定。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了便于调试，我们将在事件处理程序被调用时输出日志。然后创建一个 URL 字符串，指向", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "的位置。最后，我们将创建主", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "。请注意我们需要把", (0,jsx_runtime.jsx)(_components.a, {
        href: "#the-react-native-component",
        children: "上面"
      }), "创建的", (0,jsx_runtime.jsx)(_components.code, {
        children: "moduleName"
      }), "填进去，也就是", (0,jsx_runtime.jsx)(_components.code, {
        children: "RNHighScores"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先导入", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "的头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "#import <React/RCTRootView.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["这里的", (0,jsx_runtime.jsx)(_components.code, {
          children: "initialProperties"
        }), "注入了一些演示用的数据。在 React Native 的根组件中，我们可以使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.props"
        }), "来获取到这些数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "- (IBAction)highScoreButtonPressed:(id)sender {\n    NSLog(@\"High Score Button Pressed\");\n    NSURL *jsCodeLocation = [NSURL URLWithString:@\"http://localhost:8081/index.bundle?platform=ios\"];\n\n    RCTRootView *rootView =\n      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation\n                                  moduleName: @\"RNHighScores\"\n                           initialProperties:\n                             @{\n                               @\"scores\" : @[\n                                 @{\n                                   @\"name\" : @\"Alex\",\n                                   @\"value\": @\"42\"\n                                  },\n                                 @{\n                                   @\"name\" : @\"Joel\",\n                                   @\"value\": @\"10\"\n                                 }\n                               ]\n                             }\n                               launchOptions: nil];\n    UIViewController *vc = [[UIViewController alloc] init];\n    vc.view = rootView;\n    [self presentViewController:vc animated:YES completion:nil];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["请注意，", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView initWithBundleURL"
        }), " 会启动一个新的 JSC VM。为了节省资源并简化原生应用程序中不同部分的 RN 视图之间的通信，您可以拥有多个由 React Native 提供支持且与单个 JS 运行时相关联的视图。要实现这一点，请使用 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/main/packages/react-native/React/Base/RCTBridge.h#L94",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RCTBridge initWithBundleURL"
          })
        }), " 创建桥接器，然后使用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView initWithBridge"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["在将应用程序移至生产环境时，", (0,jsx_runtime.jsx)(_components.code, {
          children: "NSURL"
        }), " 可以通过类似于 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[NSBundle mainBundle] URLForResource:@\"main\" withExtension:@\"jsbundle\"];"
        }), " 的方式指向磁盘上预打包文件。您可以在 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules/react-native/scripts/"
        }), " 中使用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "react-native-xcode.sh"
        }), " 脚本生成该预打包文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-连接起来",
      children: "3. 连接起来"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将主菜单中的新链接与新增的事件处理程序方法连接起来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Event Path",
        src: (__webpack_require__(15675)/* ["default"] */ .A) + "",
        width: "1120",
        height: "588"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "其中一种更简单的方法是在 Storyboard 中打开视图，右键单击新链接。选择诸如“Touch Up Inside”事件之类的内容，将其拖到 Storyboard 上，然后从提供的列表中选择所创建的方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试集成结果",
      children: "测试集成结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您现在已经完成了将 React Native 与当前应用程序集成的所有基本步骤。现在我们将启动[Metro bundler][metro]来构建", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "包，并运行服务器以在", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), "上提供服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-添加-app-transport-security-例外",
      children: "1. 添加 App Transport Security 例外"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apple 现在默认会阻止读取不安全的 HTTP 链接。所以我们需要把本地运行的 Metro 服务添加到", (0,jsx_runtime.jsx)(_components.code, {
        children: "Info.plist"
      }), "的例外中，以便能正常访问 Metro 服务："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<key>NSAppTransportSecurity</key>\n<dict>\n    <key>NSExceptionDomains</key>\n    <dict>\n        <key>localhost</key>\n        <dict>\n            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>\n            <true/>\n        </dict>\n    </dict>\n</dict>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "App Transport Security 对于用户来说是有利的。所以最好记得在发布之前重新启用这些安全限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-运行-metro",
      children: "2. 运行 Metro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要运行应用，首先需要启动开发服务器（即 Metro，它负责实时监测 js 文件的变动并实时打包，输出给客户端运行）。具体只需简单进入到项目根目录中，然后运行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "yarn start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-运行应用",
      children: "3. 运行应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你使用的是 Xcode，那么照常编译和运行应用即可。如果你没有使用 Xcode（但是你仍然必须安装 Xcode），则可以在命令行中使用以下命令来运行应用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "# 在项目的根目录中执行：\n$ npx react-native run-ios\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在我们的示例应用程序中，您应该会看到\"High Scores\"链接，然后当您单击它时，将会看到 React Native 组件的呈现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是应用", (0,jsx_runtime.jsx)(_components.em, {
        children: "原生"
      }), "部分的主页面："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Home Screen",
        src: (__webpack_require__(50019)/* ["default"] */ .A) + "",
        width: "250",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是应用", (0,jsx_runtime.jsx)(_components.em, {
        children: "React Native"
      }), "部分的 high score 页面:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "High Scores",
        src: (__webpack_require__(48777)/* ["default"] */ .A) + "",
        width: "250",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果在运行应用时遇到模块解析问题，请参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/4968",
          children: "此 GitHub 问题"
        }), "以获取信息和可能的解决方案。 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/4968#issuecomment-220941717",
          children: "这个评论"
        }), "似乎是最新的可能解决方案。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "然后呢",
      children: "然后呢？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后就可以开发啦~可是我完全不会 React Native 怎么办？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议你先通读本站的所有文档，看看博客，看看论坛。如果觉得知识太零散，不够系统，那么你也可以考虑下购买我们的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/about#%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E4%B8%8E%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C",
        children: "付费咨询服务"
      }), "。"]
    })]
  });
}
function _integration_with_existing_apps_objc_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_integration_with_existing_apps_objc_createMdxContent, {
      ...props
    })
  }) : _integration_with_existing_apps_objc_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_integration-with-existing-apps-swift.md


const _integration_with_existing_apps_swift_frontMatter = {};
const _integration_with_existing_apps_swift_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _integration_with_existing_apps_swift_toc = [{
  "value": "核心概念",
  "id": "核心概念",
  "level": 2
}, {
  "value": "开发环境准备",
  "id": "开发环境准备",
  "level": 2
}, {
  "value": "1. 配置项目目录结构",
  "id": "1-配置项目目录结构",
  "level": 3
}, {
  "value": "2. 安装 JavaScript 依赖包",
  "id": "2-安装-javascript-依赖包",
  "level": 3
}, {
  "value": "3. 安装 CocoaPods",
  "id": "3-安装-cocoapods",
  "level": 3
}, {
  "value": "把 React Native 添加到你的应用中",
  "id": "把-react-native-添加到你的应用中",
  "level": 2
}, {
  "value": "Xcode 命令行工具",
  "id": "xcode-命令行工具",
  "level": 3
}, {
  "value": "配置 CocoaPods 的依赖",
  "id": "配置-cocoapods-的依赖",
  "level": 3
}, {
  "value": "代码集成",
  "id": "代码集成",
  "level": 3
}, {
  "value": "React Native 组件",
  "id": "react-native-组件",
  "level": 4
}, {
  "value": "1. 创建一个<code>index.js</code>文件",
  "id": "1-创建一个indexjs文件",
  "level": 5
}, {
  "value": "2. 添加你自己的 React Native 代码",
  "id": "2-添加你自己的-react-native-代码",
  "level": 5
}, {
  "value": "核心组件：<code>RCTRootView</code>",
  "id": "核心组件rctrootview",
  "level": 4
}, {
  "value": "1. 创建一个事件路径",
  "id": "1-创建一个事件路径",
  "level": 5
}, {
  "value": "2. 事件处理",
  "id": "2-事件处理",
  "level": 5
}, {
  "value": "3. 连接起来",
  "id": "3-连接起来",
  "level": 5
}, {
  "value": "测试集成结果",
  "id": "测试集成结果",
  "level": 3
}, {
  "value": "1. 添加 App Transport Security 例外",
  "id": "1-添加-app-transport-security-例外",
  "level": 5
}, {
  "value": "2. 运行 Metro",
  "id": "2-运行-metro",
  "level": 5
}, {
  "value": "3. 运行应用",
  "id": "3-运行应用",
  "level": 5
}, {
  "value": "然后呢？",
  "id": "然后呢",
  "level": 3
}];
function _integration_with_existing_apps_swift_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "核心概念",
      children: "核心概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "把 React Native 组件集成到 iOS 应用中有如下几个主要步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置好 React Native 依赖和项目结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "了解你要集成的 React Native 组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用 CocoaPods 把这些组件以依赖的形式加入到项目中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建 js 文件，编写 React Native 组件的 js 代码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用中添加一个", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView"
        }), "。这个", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView"
        }), "正是用来承载你的 React Native 组件的容器。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动 React Native 的 Packager 服务，运行应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证这部分组件是否正常工作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发环境准备",
      children: "开发环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "environment-setup",
        children: "开发环境搭建教程"
      }), "来安装 React Native 在 iOS 平台上所需的一切依赖软件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-配置项目目录结构",
      children: "1. 配置项目目录结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先创建一个空目录用于存放 React Native 项目，然后在其中创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录，把你现有的 iOS 项目拷贝到", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-安装-javascript-依赖包",
      children: "2. 安装 JavaScript 依赖包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目根目录下创建一个名为", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), "的空文本文件，然后填入以下内容："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"MyReactNativeApp\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"scripts\": {\n    \"start\": \"yarn react-native start\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["示例中的", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), "字段没有太大意义（除非你要把你的项目发布到 npm 仓库）。", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts"
        }), "中是用于启动 Metro 服务的命令。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来我们使用 yarn 或 npm（两者都是 node 的包管理器）来安装 React 和 React Native 模块。请打开一个终端/命令提示行，进入到项目目录中（即包含有 package.json 文件的目录），然后运行下列命令来安装："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ yarn add react-native\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这样默认会安装最新版本的 React Native，同时会打印出类似下面的警告信息（你可能需要滚动屏幕才能注意到）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "warning \"react-native@0.52.2\" has unmet peer dependency \"react@16.2.0\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是正常现象，意味着我们还需要安装指定版本的 React："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ yarn add react@16.2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意必须严格匹配警告信息中所列出的版本，高了或者低了都不可以。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你使用多个第三方依赖，可能这些第三方各自要求的 react 版本有所冲突，此时应优先满足", (0,jsx_runtime.jsx)(_components.code, {
          children: "react-native"
        }), "所需要的", (0,jsx_runtime.jsx)(_components.code, {
          children: "react"
        }), "版本。其他第三方能用则用，不能用则只能考虑选择其他库。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有 JavaScript 依赖模块都会被安装到项目根目录下的", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录中（这个目录我们原则上不复制、不移动、不修改、不上传，随用随装）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["把", (0,jsx_runtime.jsx)(_components.code, {
        children: "node_modules/"
      }), "目录记录到", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), "文件中（即不上传到版本控制系统，只保留在本地）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-安装-cocoapods",
      children: "3. 安装 CocoaPods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://cocoapods.org",
        children: "CocoaPods"
      }), "是针对 iOS 和 Mac 开发的包管理工具。我们用它来把 React Native 框架的代码下载下来并添加到你当前的项目中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://brew.sh/",
        children: "Homebrew"
      }), "来安装 CocoaPods。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ brew install cocoapods\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "把-react-native-添加到你的应用中",
      children: "把 React Native 添加到你的应用中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本教程中我们用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/austinzheng/swift-2048",
        children: "示范的 app"
      }), "是一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://en.wikipedia.org/wiki/2048_%28video_game%29",
        children: "2048"
      }), "类型的游戏。下面是这个游戏还没有集成 React Native 时的主界面："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Before RN Integration",
        src: (__webpack_require__(18343)/* ["default"] */ .A) + "",
        width: "250",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xcode-命令行工具",
      children: "Xcode 命令行工具"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装 Xcode 命令行工具。在 Xcode 菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings... (或者是 Preferences...)"
      }), "，进入 Locations 面板并通过在 Command Line Tools 下拉菜单中选择最新版本来安装工具。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Xcode Command Line Tools",
        src: (__webpack_require__(79247)/* ["default"] */ .A) + "",
        width: "1884",
        height: "1324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置-cocoapods-的依赖",
      children: "配置 CocoaPods 的依赖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["提示，此部分说明可能落后于最新版本。建议使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx react-native init NewProject"
        }), "创建一个最新版本的纯 RN 项目，去参考其 Podfile 的配置。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native 框架整体是作为 node 模块安装到项目中的。下一步我们需要在 CocoaPods 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "中指定我们所需要使用的\"subspecs\"。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可用的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "都列在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React.podspec",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules/react-native/React.podspec"
        })
      }), "中，基本都是按其功能命名的。一般来说你首先需要添加", (0,jsx_runtime.jsx)(_components.code, {
        children: "Core"
      }), "，这一", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "包含了必须的", (0,jsx_runtime.jsx)(_components.code, {
        children: "AppRegistry"
      }), "、", (0,jsx_runtime.jsx)(_components.code, {
        children: "StyleSheet"
      }), "、", (0,jsx_runtime.jsx)(_components.code, {
        children: "View"
      }), "以及其他的一些 React Native 核心库。如果你想使用 React Native 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Text"
      }), "库（即", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), "组件），那就需要添加", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTText"
      }), "的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "。同理，", (0,jsx_runtime.jsx)(_components.code, {
        children: "Image"
      }), "需要加入", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTImage"
      }), "，等等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们需要在", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "文件中指定所需的", (0,jsx_runtime.jsx)(_components.code, {
        children: "subspec"
      }), "。创建", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "的最简单的方式就是在", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ios"
      }), "子目录中使用 CocoaPods 的", (0,jsx_runtime.jsx)(_components.code, {
        children: "init"
      }), "命令："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ pod init\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "会创建在执行命令的目录中。你需要调整其内容以满足你的集成需求。调整后的", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "的内容看起来类似下面这个模板文件（也可以用", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx react-native init 项目名"
      }), "命令创建一个纯 RN 项目，然后去参考其 ios 目录中的 Podfile 文件）：\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/main/packages/react-native/template/ios/Podfile",
        children: "Podfile 示范模板"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建好了", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), "后，就可以开始安装 React Native 的 pod 包了。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ pod install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后你应该可以看到类似下面的输出(译注：同样由于众所周知的网络原因，pod install 的过程在国内非常不顺利，请自行配备稳定的代理软件。)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Analyzing dependencies\nFetching podspec for `React` from `../node_modules/react-native`\nDownloading dependencies\nInstalling React (0.62.0)\nGenerating Pods project\nIntegrating client project\nSending stats\nPod installation complete! There are 3 dependencies from the Podfile and 1 total pod installed.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果出现提到 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "xcrun"
        }), " 的错误，请确保在 Xcode 中的 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preferences > Locations"
        }), " 中分配了命令行工具。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果你看到类似\"", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "swift-2048 [Debug]"
          }), " target overrides the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FRAMEWORK_SEARCH_PATHS"
          }), " build setting defined in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Pods/Target Support Files/Pods-swift-2048/Pods-swift-2048.debug.xcconfig"
          }), ". This can lead to problems with the CocoaPods installation"]
        }), "\"的警告，请查看 Xcode 的", (0,jsx_runtime.jsx)(_components.code, {
          children: "Build Settings"
        }), "中的", (0,jsx_runtime.jsx)(_components.code, {
          children: "Framework Search Paths"
        }), "选项，确保其中的", (0,jsx_runtime.jsx)(_components.code, {
          children: "Debug"
        }), "和", (0,jsx_runtime.jsx)(_components.code, {
          children: "Release"
        }), "都只包含", (0,jsx_runtime.jsx)(_components.code, {
          children: "$(inherited)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码集成",
      children: "代码集成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在我们已经准备好了所有依赖，可以开始着手修改原生代码来把 React Native 真正集成到应用中了。在我们的 2048 示例中，首先尝试添加一个显示有\"High Score\"（得分排行榜）的 React Native 页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "react-native-组件",
      children: "React Native 组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们首先要写的是\"High Score\"（得分排行榜）的 JavaScript 端的代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "1-创建一个indexjs文件",
      children: ["1. 创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "文件"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先在项目根目录下创建一个空的", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "是 React Native 应用在 iOS 上的入口文件。而且它是不可或缺的！它可以是个很简单的文件，简单到可以只包含一行", (0,jsx_runtime.jsx)(_components.code, {
        children: "require/import"
      }), "导入语句。本教程中为了简单示范，把全部的代码都写到了", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "里（当然实际开发中我们并不推荐这样做）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-添加你自己的-react-native-代码",
      children: "2. 添加你自己的 React Native 代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "中添加你自己的组件。这里我们只是简单的添加一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), "组件，然后用一个带有样式的", (0,jsx_runtime.jsx)(_components.code, {
        children: "<View>"
      }), "组件把它包起来。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React from 'react';\nimport {AppRegistry, StyleSheet, Text, View} from 'react-native';\n\nclass RNHighScores extends React.Component {\n  render() {\n    var contents = this.props['scores'].map(score => (\n      <Text key={score.name}>\n        {score.name}:{score.value}\n        {'\\n'}\n      </Text>\n    ));\n    return (\n      <View style={styles.container}>\n        <Text style={styles.highScoresTitle}>\n          2048 High Scores!\n        </Text>\n        <Text style={styles.scores}>{contents}</Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#FFFFFF',\n  },\n  highScoresTitle: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n  },\n  scores: {\n    textAlign: 'center',\n    color: '#333333',\n    marginBottom: 5,\n  },\n});\n\n// 整体js模块的名称\nAppRegistry.registerComponent('RNHighScores', () => RNHighScores);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RNHighScores"
        }), "是整体 js 模块（即你所有的 js 代码）的名称。你在 iOS 原生代码中添加 React Native 视图时会用到这个名称。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "核心组件rctrootview",
      children: ["核心组件：", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["现在我们已经在", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.js"
      }), "中创建了 React Native 组件，下一步就是把这个组件添加给一个新的或已有的", (0,jsx_runtime.jsx)(_components.code, {
        children: "ViewController"
      }), "。最简单的方法是可选地为您的组件创建一个事件路径，然后将该组件添加到现有的“ViewController”中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们将把 React Native 组件与名为“RCTRootView”的新原生视图绑定在一起，该视图实际上包含它。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-创建一个事件路径",
      children: "1. 创建一个事件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在主游戏菜单上添加一个新链接，以便前往 \"High Score\" 的 React Native 页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Event Path",
        src: (__webpack_require__(43330)/* ["default"] */ .A) + "",
        width: "464",
        height: "670"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-事件处理",
      children: "2. 事件处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["现在我们将从菜单链接中添加一个事件处理程序。一个方法将被添加到你的应用程序的主", (0,jsx_runtime.jsx)(_components.code, {
        children: "ViewController"
      }), "中。这就是", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "发挥作用的地方。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当你构建一个 React Native 应用时，需要使用 Metro（以前叫做 react packager）来创建一个", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "。", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "里面包含了我们的", (0,jsx_runtime.jsx)(_components.code, {
        children: "RNHighScore"
      }), "模块。因此，我们需要将", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "指向", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "资源的位置（通过", (0,jsx_runtime.jsx)(_components.code, {
        children: "NSURL"
      }), "），并将其与模块绑定。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了便于调试，我们将在事件处理程序被调用时输出日志。然后创建一个 URL 字符串，指向", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "的位置。最后，我们将创建主", (0,jsx_runtime.jsx)(_components.code, {
        children: "RCTRootView"
      }), "。请注意我们需要把", (0,jsx_runtime.jsx)(_components.a, {
        href: "#the-react-native-component",
        children: "上面"
      }), "创建的", (0,jsx_runtime.jsx)(_components.code, {
        children: "moduleName"
      }), "填进去，也就是", (0,jsx_runtime.jsx)(_components.code, {
        children: "RNHighScores"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先", (0,jsx_runtime.jsx)(_components.code, {
        children: "import"
      }), "导入", (0,jsx_runtime.jsx)(_components.code, {
        children: "React"
      }), "库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-swift",
        children: "import React\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["这里的", (0,jsx_runtime.jsx)(_components.code, {
          children: "initialProperties"
        }), "注入了一些演示用的数据。在 React Native 的根组件中，我们可以使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.props"
        }), "来获取到这些数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-swift",
        children: "@IBAction func highScoreButtonTapped(sender : UIButton) {\n  NSLog(\"Hello\")\n  let jsCodeLocation = URL(string: \"http://localhost:8081/index.bundle?platform=ios\")\n  let mockData:NSDictionary = [\"scores\":\n      [\n          [\"name\":\"Alex\", \"value\":\"42\"],\n          [\"name\":\"Joel\", \"value\":\"10\"]\n      ]\n  ]\n\n  let rootView = RCTRootView(\n      bundleURL: jsCodeLocation,\n      moduleName: \"RNHighScores\",\n      initialProperties: mockData as [NSObject : AnyObject],\n      launchOptions: nil\n  )\n  let vc = UIViewController()\n  vc.view = rootView\n  self.present(vc, animated: true, completion: nil)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["请注意，", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView bundleURL"
        }), "会启动一个新的 JSC VM。为了节省资源并简化原生应用程序中不同部分的 RN 视图之间的通信，您可以拥有由 React Native 驱动的多个视图与单个 JS 运行时相关联。要做到这一点，而不是使用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView bundleURL"
        }), "，请使用 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L89",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RCTBridge initWithBundleURL"
          })
        }), " 创建桥接器，然后使用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RCTRootView initWithBridge"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["将应用程序移至生产环境时，NSURL 可以通过类似于 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let mainBundle = NSBundle(URLForResource: \"main\" withExtension:\"jsbundle\")"
        }), " 的方式指向磁盘上预打包文件。 您可以在 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules/react-native/scripts/"
        }), " 中使用 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "react-native-xcode.sh"
        }), " 脚本生成该预打包文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-连接起来",
      children: "3. 连接起来"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将主菜单中的新链接与新增的事件处理程序方法连接起来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Event Path",
        src: (__webpack_require__(15675)/* ["default"] */ .A) + "",
        width: "1120",
        height: "588"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "其中一种更简单的方法是在 Storyboard 中打开视图，右键单击新链接。选择诸如“Touch Up Inside”事件之类的内容，将其拖到 Storyboard 上，然后从提供的列表中选择所创建的方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试集成结果",
      children: "测试集成结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您现在已经完成了将 React Native 与当前应用程序集成的所有基本步骤。现在我们将启动[Metro bundler][metro]来构建", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.bundle"
      }), "包，并运行服务器以在", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), "上提供服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-添加-app-transport-security-例外",
      children: "1. 添加 App Transport Security 例外"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apple 现在默认会阻止读取不安全的 HTTP 链接。所以我们需要把本地运行的 Packager 服务添加到", (0,jsx_runtime.jsx)(_components.code, {
        children: "Info.plist"
      }), "的例外中，以便能正常访问 Packager 服务："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<key>NSAppTransportSecurity</key>\n<dict>\n    <key>NSExceptionDomains</key>\n    <dict>\n        <key>localhost</key>\n        <dict>\n            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>\n            <true/>\n        </dict>\n    </dict>\n</dict>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "App Transport Security 对于用户来说是有利的。所以最好记得在发布之前重新启用这些安全限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-运行-metro",
      children: "2. 运行 Metro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要运行应用，首先需要启动开发服务器（即 Metro，它负责实时监测 js 文件的变动并实时打包，输出给客户端运行）。具体只需简单进入到项目根目录中，然后运行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "$ npm start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-运行应用",
      children: "3. 运行应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你使用的是 Xcode，那么照常编译和运行应用即可。如果你没有使用 Xcode（但是你仍然必须安装 Xcode），则可以在命令行中使用以下命令来运行应用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "# 在项目的根目录中执行：\n$ npx react-native run-ios\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在我们的示例应用程序中，您应该会看到\"High Scores\"链接，然后当您单击它时，将会看到 React Native 组件的呈现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是应用", (0,jsx_runtime.jsx)(_components.em, {
        children: "原生"
      }), "部分的主页面："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Home Screen",
        src: (__webpack_require__(50019)/* ["default"] */ .A) + "",
        width: "250",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是应用", (0,jsx_runtime.jsx)(_components.em, {
        children: "React Native"
      }), "部分的 high score 页面:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "High Scores",
        src: (__webpack_require__(48777)/* ["default"] */ .A) + "",
        width: "250",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如果在运行应用时遇到模块解析问题，请参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/4968",
          children: "此 GitHub 问题"
        }), "以获取信息和可能的解决方案。 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/4968#issuecomment-220941717",
          children: "这个评论"
        }), "似乎是最新的可能解决方案。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "然后呢",
      children: "然后呢？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后就可以开发啦~可是我完全不会 React Native 怎么办？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们建议你先通读本站的所有文档，看看博客，看看论坛。如果觉得知识太零散，不够系统，那么你也可以考虑下购买我们的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/about#%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E4%B8%8E%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C",
        children: "付费咨询服务"
      }), "。"]
    })]
  });
}
function _integration_with_existing_apps_swift_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_integration_with_existing_apps_swift_createMdxContent, {
      ...props
    })
  }) : _integration_with_existing_apps_swift_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/_integration-with-existing-apps-kotlin.md


const _integration_with_existing_apps_kotlin_frontMatter = {};
const _integration_with_existing_apps_kotlin_contentTitle = (/* unused pure expression or super */ null && (undefined));








const _integration_with_existing_apps_kotlin_toc = [{
  "value": "核心概念",
  "id": "核心概念",
  "level": 2
}, {
  "value": "开发环境准备",
  "id": "开发环境准备",
  "level": 2
}, {
  "value": "1. 配置项目目录结构",
  "id": "1-配置项目目录结构",
  "level": 3
}, {
  "value": "2. 安装 JavaScript 依赖包",
  "id": "2-安装-javascript-依赖包",
  "level": 3
}, {
  "value": "把 React Native 添加到你的应用中",
  "id": "把-react-native-添加到你的应用中",
  "level": 2
}, {
  "value": "配置 Gradle",
  "id": "配置-gradle",
  "level": 3
}, {
  "value": "启用原生模块的自动链接",
  "id": "启用原生模块的自动链接",
  "level": 3
}, {
  "value": "配置权限",
  "id": "配置权限",
  "level": 3
}, {
  "value": "允许明文传输（http 接口） (API level 28+)",
  "id": "允许明文传输http-接口-api-level-28",
  "level": 3
}, {
  "value": "1. 为 debug 版本启用 <code>usesCleartextTraffic</code>选项",
  "id": "1-为-debug-版本启用-usescleartexttraffic选项",
  "level": 4
}, {
  "value": "代码集成",
  "id": "代码集成",
  "level": 3
}, {
  "value": "React Native 组件",
  "id": "react-native-组件",
  "level": 4
}, {
  "value": "1. 创建一个<code>index.js</code>文件",
  "id": "1-创建一个indexjs文件",
  "level": 5
}, {
  "value": "2. 添加你自己的 React Native 代码",
  "id": "2-添加你自己的-react-native-代码",
  "level": 5
}, {
  "value": "3. 配置权限以便开发中的红屏错误能正确显示",
  "id": "3-配置权限以便开发中的红屏错误能正确显示",
  "level": 5
}, {
  "value": "核心组件：<code>ReactRootView</code>",
  "id": "核心组件reactrootview",
  "level": 4
}, {
  "value": "测试集成结果",
  "id": "测试集成结果",
  "level": 3
}, {
  "value": "1. 运行 Metro 服务",
  "id": "1-运行-metro-服务",
  "level": 5
}, {
  "value": "2. 运行你的应用",
  "id": "2-运行你的应用",
  "level": 5
}, {
  "value": "在 Android Studio 中打包",
  "id": "在-android-studio-中打包",
  "level": 3
}, {
  "value": "然后呢？",
  "id": "然后呢",
  "level": 3
}];
function _integration_with_existing_apps_kotlin_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "核心概念",
      children: "核心概念"
    }), "\n", _jsx(_components.p, {
      children: "把 React Native 组件集成到 Android 应用中有如下几个主要步骤："
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "配置好 React Native 依赖和项目结构。"
      }), "\n", _jsx(_components.li, {
        children: "创建 js 文件，编写 React Native 组件的 js 代码。"
      }), "\n", _jsxs(_components.li, {
        children: ["在应用中添加一个", _jsx(_components.code, {
          children: "ReactRootView"
        }), "。这个", _jsx(_components.code, {
          children: "ReactRootView"
        }), "正是用来承载你的 React Native 组件的容器。"]
      }), "\n", _jsx(_components.li, {
        children: "启动 React Native 的 Metro 服务，运行应用。"
      }), "\n", _jsx(_components.li, {
        children: "验证这部分组件是否正常工作。"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "开发环境准备",
      children: "开发环境准备"
    }), "\n", _jsxs(_components.p, {
      children: ["首先按照", _jsx(_components.a, {
        href: "environment-setup",
        children: "开发环境搭建教程"
      }), "来安装 React Native 在 Android 平台上所需的一切依赖软件。"]
    }), "\n", _jsx(_components.h3, {
      id: "1-配置项目目录结构",
      children: "1. 配置项目目录结构"
    }), "\n", _jsxs(_components.p, {
      children: ["首先创建一个空目录用于存放 React Native 项目，然后在其中创建一个", _jsx(_components.code, {
        children: "/android"
      }), "子目录，把你现有的 Android 项目拷贝到", _jsx(_components.code, {
        children: "/android"
      }), "子目录中。"]
    }), "\n", _jsx(_components.h3, {
      id: "2-安装-javascript-依赖包",
      children: "2. 安装 JavaScript 依赖包"
    }), "\n", _jsxs(_components.p, {
      children: ["在项目根目录下创建一个名为", _jsx(_components.code, {
        children: "package.json"
      }), "的空文本文件，然后填入以下内容："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "{\n  \"name\": \"MyReactNativeApp\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"scripts\": {\n    \"start\": \"react-native start\"\n  }\n}\n"
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["示例中的", _jsx(_components.code, {
          children: "version"
        }), "字段没有太大意义（除非你要把你的项目发布到 npm 仓库）。", _jsx(_components.code, {
          children: "scripts"
        }), "中是用于启动 Metro 服务的命令。"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "接下来我们使用 yarn 或 npm（两者都是 node 的包管理器）来安装 React 和 React Native 模块。请打开一个终端/命令提示行，进入到项目目录中（即包含有 package.json 文件的目录），然后运行下列命令来安装："
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-shell",
        children: "$ yarn add react-native\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "这样默认会安装最新版本的 React Native，同时会打印出类似下面的警告信息（你可能需要滚动屏幕才能注意到）："
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "warning \"react-native@0.52.2\" has unmet peer dependency \"react@16.2.0\"."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "这是正常现象，意味着我们还需要安装指定版本的 React："
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        children: "$ yarn add react@16.2.0\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "注意必须严格匹配警告信息中所列出的版本，高了或者低了都不可以。"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["如果你使用多个第三方依赖，可能这些第三方各自要求的 react 版本有所冲突，此时应优先满足", _jsx(_components.code, {
          children: "react-native"
        }), "所需要的", _jsx(_components.code, {
          children: "react"
        }), "版本。其他第三方能用则用，不能用则只能考虑选择其他库。"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["所有 JavaScript 依赖模块都会被安装到项目根目录下的", _jsx(_components.code, {
        children: "node_modules/"
      }), "目录中（这个目录我们原则上不复制、不移动、不修改、不上传，随用随装）。"]
    }), "\n", _jsxs(_components.p, {
      children: ["把", _jsx(_components.code, {
        children: "node_modules/"
      }), "目录记录到", _jsx(_components.code, {
        children: ".gitignore"
      }), "文件中（即不上传到版本控制系统，只保留在本地）。"]
    }), "\n", _jsx(_components.h2, {
      id: "把-react-native-添加到你的应用中",
      children: "把 React Native 添加到你的应用中"
    }), "\n", _jsx(_components.h3, {
      id: "配置-gradle",
      children: "配置 Gradle"
    }), "\n", _jsx(_components.p, {
      children: "React Native 使用 React Native Gradle Plugin 来配置您的依赖项和项目设置。"
    }), "\n", _jsxs(_components.p, {
      children: ["首先，让我们通过添加以下行来编辑您的", _jsx(_components.code, {
        children: "settings.gradle"
      }), "文件："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-groovy",
        children: "includeBuild('../node_modules/@react-native/gradle-plugin')\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["然后你需要打开顶层的 ", _jsx(_components.code, {
        children: "build.gradle"
      }), " 文件并添加这一行："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-diff",
        children: "buildscript {\n    repositories {\n        google()\n        mavenCentral()\n    }\n    dependencies {\n        classpath(\"com.android.tools.build:gradle:7.3.1\")\n+       classpath(\"com.facebook.react:react-native-gradle-plugin\")\n    }\n}\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["这将确保 React Native Gradle Plugin 在您的项目中可用。\n最后，在 ", _jsx(_components.code, {
        children: "app/build.gradle"
      }), " 文件中添加以下行（注意它的路径不同于上面，是", _jsx(_components.code, {
        children: "app/build.gradle"
      }), "）："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-diff",
        children: "apply plugin: \"com.android.application\"\n+apply plugin: \"com.facebook.react\"\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    // Other dependencies here\n+   implementation \"com.facebook.react:react-android\"\n+   implementation \"com.facebook.react:hermes-android\"\n}\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["这些依赖项可在 ", _jsx(_components.code, {
        children: "mavenCentral()"
      }), " 上获得，因此请确保您已在 ", _jsx(_components.code, {
        children: "repositories{}"
      }), " 块中定义它。"]
    }), "\n", _jsx(_components.admonition, {
      title: "提示",
      type: "info",
      children: _jsxs(_components.p, {
        children: ["我们故意不为这些", _jsx(_components.code, {
          children: "implementation"
        }), "依赖项指定版本，因为 React Native Gradle Plugin 会自动处理它。如果您不使用 React Native Gradle Plugin，则必须手动指定版本。"]
      })
    }), "\n", _jsx(_components.h3, {
      id: "启用原生模块的自动链接",
      children: "启用原生模块的自动链接"
    }), "\n", _jsxs(_components.p, {
      children: ["要使用", _jsx(_components.a, {
        href: "https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",
        children: "自动链接"
      }), "的功能，我们必须将其应用于几个地方。首先，将以下内容添加到", _jsx(_components.code, {
        children: "settings.gradle"
      }), ":"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-gradle",
        children: "apply from: file(\"../node_modules/@react-native-community/cli-platform-android/native_modules.gradle\"); applyNativeModulesSettingsGradle(settings)\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["接下来，在", _jsx(_components.code, {
        children: "app/build.gradle"
      }), "的最底部添加以下内容:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-gradle",
        children: "apply from: file(\"../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle\"); applyNativeModulesAppBuildGradle(project)\n"
      })
    }), "\n", _jsx(_components.h3, {
      id: "配置权限",
      children: "配置权限"
    }), "\n", _jsxs(_components.p, {
      children: ["接着，在 ", _jsx(_components.code, {
        children: "AndroidManifest.xml"
      }), " 清单文件中声明网络权限:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-xml",
        children: "<uses-permission android:name=\"android.permission.INTERNET\" />\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["如果需要访问 ", _jsx(_components.code, {
        children: "DevSettingsActivity"
      }), " 界面（即开发者菜单），则还需要在 ", _jsx(_components.code, {
        children: "AndroidManifest.xml"
      }), " 中声明:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-xml",
        children: "<activity android:name=\"com.facebook.react.devsupport.DevSettingsActivity\" />\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "开发者菜单一般仅用于在开发时从 Packager 服务器刷新 JavaScript 代码，所以在正式发布时你可以去掉这一权限。"
    }), "\n", _jsx(_components.h3, {
      id: "允许明文传输http-接口-api-level-28",
      children: "允许明文传输（http 接口） (API level 28+)"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["从 Android 9 (API level 28)开始，默认情况下明文传输（http 接口）是禁用的，只能访问 https 接口。这将阻止应用程序连接到", _jsx(_components.a, {
          href: "https://facebook.github.io/metro",
          children: "Metro bundler"
        }), "。下面的更改允许调试版本中的明文通信。"]
      }), "\n"]
    }), "\n", _jsxs(_components.h4, {
      id: "1-为-debug-版本启用-usescleartexttraffic选项",
      children: ["1. 为 debug 版本启用 ", _jsx(_components.code, {
        children: "usesCleartextTraffic"
      }), "选项"]
    }), "\n", _jsxs(_components.p, {
      children: ["在", _jsx(_components.code, {
        children: "src/debug/AndroidManifest.xml"
      }), "中添加", _jsx(_components.code, {
        children: "usesCleartextTraffic"
      }), "选项："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-xml",
        children: "<!-- ... -->\n<application\n  android:usesCleartextTraffic=\"true\" tools:targetApi=\"28\" >\n  <!-- ... -->\n</application>\n<!-- ... -->\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["如果希望在正式打包后也能继续访问 http 接口，则需要在", _jsx(_components.code, {
        children: "src/main/AndroidManifest.xml"
      }), "中也添加这一选项。"]
    }), "\n", _jsxs(_components.p, {
      children: ["要了解有关网络安全配置和明文通信策略的更多信息，请参阅", _jsx(_components.a, {
        href: "https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted",
        children: "此链接"
      }), "。"]
    }), "\n", _jsx(_components.h3, {
      id: "代码集成",
      children: "代码集成"
    }), "\n", _jsx(_components.p, {
      children: "现在我们将修改原生 Android 应用程序以集成 React Native。"
    }), "\n", _jsx(_components.h4, {
      id: "react-native-组件",
      children: "React Native 组件"
    }), "\n", _jsx(_components.p, {
      children: "我们首先要写的是\"High Score\"（得分排行榜）的 JavaScript 端的代码。"
    }), "\n", _jsxs(_components.h5, {
      id: "1-创建一个indexjs文件",
      children: ["1. 创建一个", _jsx(_components.code, {
        children: "index.js"
      }), "文件"]
    }), "\n", _jsxs(_components.p, {
      children: ["首先在项目根目录中创建一个空的", _jsx(_components.code, {
        children: "index.js"
      }), "文件。(注意一些老的教程可能提到，在 0.49 版本之前是 index.android.js 文件)"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "index.js"
      }), "是 React Native 应用在 Android 上的入口文件。而且它是不可或缺的！它可以是个很简单的文件，简单到可以只包含一行", _jsx(_components.code, {
        children: "require/import"
      }), "导入语句。本教程中为了简单示范，把全部的代码都写到了", _jsx(_components.code, {
        children: "index.js"
      }), "里（当然实际开发中我们并不推荐这样做）。"]
    }), "\n", _jsx(_components.h5, {
      id: "2-添加你自己的-react-native-代码",
      children: "2. 添加你自己的 React Native 代码"
    }), "\n", _jsxs(_components.p, {
      children: ["在", _jsx(_components.code, {
        children: "index.js"
      }), "中添加你自己的组件。这里我们只是简单的添加一个", _jsx(_components.code, {
        children: "<Text>"
      }), "组件，然后用一个带有样式的", _jsx(_components.code, {
        children: "<View>"
      }), "组件把它包起来。"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-jsx",
        children: "import React from 'react';\nimport {AppRegistry, StyleSheet, Text, View} from 'react-native';\n\nconst HelloWorld = () => {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.hello}>Hello, World</Text>\n    </View>\n  );\n};\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  hello: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n  },\n});\n\nAppRegistry.registerComponent(\n  'MyReactNativeApp',\n  () => HelloWorld,\n);\n"
      })
    }), "\n", _jsx(_components.h5, {
      id: "3-配置权限以便开发中的红屏错误能正确显示",
      children: "3. 配置权限以便开发中的红屏错误能正确显示"
    }), "\n", _jsxs(_components.p, {
      children: ["如果你的应用会运行在 Android 6.0（API level 23）或更高版本，请确保你在开发版本中有打开", _jsx(_components.code, {
        children: "悬浮窗(overlay)"
      }), "权限。你可以在代码中使用", _jsx(_components.code, {
        children: "Settings.canDrawOverlays(this);"
      }), "来检查。之所以需要这一权限，是因为我们会把开发中的报错显示在悬浮窗中（仅在开发阶段需要）。在 Android 6.0（API level 23）中用户需要手动同意授权。具体请求授权的做法是在", _jsx(_components.code, {
        children: "onCreate()"
      }), "中添加如下代码。其中", _jsx(_components.code, {
        children: "OVERLAY_PERMISSION_REQ_CODE"
      }), "是用于回传授权结果的字段。"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "companion object {\n    const val OVERLAY_PERMISSION_REQ_CODE = 1  // 任写一个值\n}\n\n...\n\nif (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n    if(!Settings.canDrawOverlays(this)) {\n        val intent = Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,\n                                    Uri.parse(\"package: $packageName\"))\n        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);\n    }\n}\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["最后，必须重写", _jsx(_components.code, {
        children: "onActivityResult()"
      }), "方法（如下面的代码所示）来处理权限接受或拒绝情况以实现一致的用户体验。此外，为了集成使用 startActivityForResult 的原生模块，我们需要将结果传递给 ReactInstanceManager 实例的 onActivityResult 方法。"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\n    if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {\n        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n            if (!Settings.canDrawOverlays(this)) {\n                // SYSTEM_ALERT_WINDOW permission not granted\n            }\n        }\n    }\n    reactInstanceManager?.onActivityResult(this, requestCode, resultCode, data)\n}\n"
      })
    }), "\n", _jsxs(_components.h4, {
      id: "核心组件reactrootview",
      children: ["核心组件：", _jsx(_components.code, {
        children: "ReactRootView"
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["我们还需要添加一些原生代码来启动 React Native 的运行时环境并让它开始渲染。首先需要在一个", _jsx(_components.code, {
        children: "Activity"
      }), "中创建一个", _jsx(_components.code, {
        children: "ReactRootView"
      }), "对象，然后在这个对象之中启动 React Native 应用，并将它设为界面的主视图。"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["如果你要在安卓 5.0 以下的系统上运行，请用 ", _jsx(_components.code, {
          children: "com.android.support:appcompat"
        }), " 包中的 ", _jsx(_components.code, {
          children: "AppCompatActivity"
        }), " 代替 ", _jsx(_components.code, {
          children: "Activity"
        }), " 。"]
      }), "\n"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "class MyReactActivity : Activity(), DefaultHardwareBackBtnHandler {\n    private lateinit var reactRootView: ReactRootView\n    private lateinit var reactInstanceManager: ReactInstanceManager\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        SoLoader.init(this, false)\n        reactRootView = ReactRootView(this)\n        val packages: List<ReactPackage> = PackageList(application).packages\n        // 有一些第三方可能不能自动链接，对于这些包我们可以用下面的方式手动添加进来：\n        // packages.add(MyReactNativePackage())\n        // 同时需要手动把他们添加到`settings.gradle`和 `app/build.gradle`配置文件中。\n        reactInstanceManager = ReactInstanceManager.builder()\n            .setApplication(application)\n            .setCurrentActivity(this)\n            .setBundleAssetName(\"index.android.bundle\")\n            .setJSMainModulePath(\"index\")\n            .addPackages(packages)\n            .setUseDeveloperSupport(BuildConfig.DEBUG)\n            .setInitialLifecycleState(LifecycleState.RESUMED)\n            .build()\n        // 注意这里的 MyReactNativeApp 必须对应\"index.js\"中的\n        // \"AppRegistry.registerComponent()\"的第一个参数\n        reactRootView?.startReactApplication(reactInstanceManager, \"MyReactNativeApp\", null)\n        setContentView(reactRootView)\n    }\n\n    override fun invokeDefaultOnBackPressed() {\n        super.onBackPressed()\n    }\n}\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "执行\"Sync Project files with Gradle\"操作。"
    }), "\n", _jsxs(_components.p, {
      children: ["如果你使用的是 Android Studio , 可以使用", _jsx(_components.code, {
        children: "Alt + Enter"
      }), "快捷键来自动为 MyReactActivity 类补上缺失的 import 语句。注意", _jsx(_components.code, {
        children: "BuildConfig"
      }), "应该是在你自己的包中自动生成，无需额外引入。千万不要从", _jsx(_components.code, {
        children: "com.facebook..."
      }), "的包中引入！"]
    }), "\n", _jsxs(_components.p, {
      children: ["我们需要把 ", _jsx(_components.code, {
        children: "MyReactActivity"
      }), " 的主题设定为 ", _jsx(_components.code, {
        children: "Theme.AppCompat.Light.NoActionBar"
      }), " ，因为里面有许多组件都使用了这一主题。"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-xml",
        children: "<activity\n  android:name=\".MyReactActivity\"\n  android:label=\"@string/app_name\"\n  android:theme=\"@style/Theme.AppCompat.Light.NoActionBar\">\n</activity>\n"
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["一个", _jsx(_components.code, {
          children: "ReactInstanceManager"
        }), "可以在多个 activities 或 fragments 间共享。你将需要创建自己的", _jsx(_components.code, {
          children: "ReactFragment"
        }), "或", _jsx(_components.code, {
          children: "ReactActivity"
        }), "，并拥有一个保存", _jsx(_components.code, {
          children: "ReactInstanceManager"
        }), "的单例持有者。当你需要", _jsx(_components.code, {
          children: "ReactInstanceManager"
        }), "（例如，将", _jsx(_components.code, {
          children: "ReactInstanceManager"
        }), "连接到这些 Activities 或 Fragments 的生命周期）时，请使用单例提供的那个。"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["下一步我们需要把一些 activity 的生命周期回调传递给", _jsx(_components.code, {
        children: "ReactInstanceManager"
      }), "："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "override fun onPause() {\n    super.onPause()\n    reactInstanceManager.onHostPause(this)\n}\n\noverride fun onResume() {\n    super.onResume()\n    reactInstanceManager.onHostResume(this, this)\n}\n\noverride fun onDestroy() {\n    super.onDestroy()\n    reactInstanceManager.onHostDestroy(this)\n    reactRootView.unmountReactApplication()\n}\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "我们还需要把后退按钮事件传递给 React Native："
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "override fun onBackPressed() {\n    reactInstanceManager.onBackPressed()\n    super.onBackPressed()\n}\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["这允许 JavaScript 控制用户按下设备后退按钮时发生的情况（例如，执行导航时）。当 JavaScript 不处理后退按钮按下的情况时，将调用", _jsx(_components.code, {
        children: "invokeDefaultOnBackPressed"
      }), "方法。默认情况下，这将完成你的", _jsx(_components.code, {
        children: "Activity"
      }), "。"]
    }), "\n", _jsxs(_components.p, {
      children: ["最后，我们需要连接开发菜单。默认情况下通过（狂）摇晃设备来激活，但这在模拟器中不是很有用，只有当你按下设备菜单按钮时才显示（如果你使用的是 Android Studio 模拟器，请使用", _jsx("kbd", {
        children: "Ctrl"
      }), " + ", _jsx("kbd", {
        children: "M"
      }), "）:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-kotlin",
        children: "override fun onKeyUp(keyCode: Int, event: KeyEvent?): Boolean {\n    if (keyCode == KeyEvent.KEYCODE_MENU && reactInstanceManager != null) {\n        reactInstanceManager.showDevOptionsDialog()\n        return true\n    }\n    return super.onKeyUp(keyCode, event)\n}\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "现在 activity 已就绪，可以运行一些 JavaScript 代码了。"
    }), "\n", _jsx(_components.h3, {
      id: "测试集成结果",
      children: "测试集成结果"
    }), "\n", _jsxs(_components.p, {
      children: ["你已经完成了将 React Native 与当前应用程序集成的所有基本步骤。现在我们将启动", _jsx(_components.a, {
        href: "https://facebook.github.io/metro",
        children: "Metro bundler"
      }), "来构建", _jsx(_components.code, {
        children: "index.bundle"
      }), "包，并通过本地主机提供服务。"]
    }), "\n", _jsx(_components.h5, {
      id: "1-运行-metro-服务",
      children: "1. 运行 Metro 服务"
    }), "\n", _jsx(_components.p, {
      children: "运行应用首先需要启动开发服务器（Metro）。你只需在项目根目录中执行以下命令即可："
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-shell",
        children: "$ yarn start\n"
      })
    }), "\n", _jsx(_components.h5, {
      id: "2-运行你的应用",
      children: "2. 运行你的应用"
    }), "\n", _jsxs(_components.p, {
      children: ["保持 Metro 的窗口运行不要关闭，然后像往常一样编译运行你的 Android 应用(在命令行中执行", _jsx(_components.code, {
        children: "./gradlew installDebug"
      }), "或是在 Android Studio 中编译运行)。"]
    }), "\n", _jsx(_components.p, {
      children: "编译执行一切顺利进行之后，在进入到 MyReactActivity 时应该就能立刻从 Metro 中读取 JavaScript 代码并执行和显示："
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        alt: "Screenshot",
        src: (__webpack_require__(96171)/* ["default"] */ .A) + "",
        width: "384",
        height: "640"
      })
    }), "\n", _jsx(_components.h3, {
      id: "在-android-studio-中打包",
      children: "在 Android Studio 中打包"
    }), "\n", _jsxs(_components.p, {
      children: ["你也可以使用 Android Studio 来打 release 包！其步骤基本和原生应用一样，只是如果你", _jsx(_components.strong, {
        children: "没有"
      }), "使用 React Native Gradle Plugin 的话，则在每次编译打包之前需要先执行 js 文件的打包(即生成离线的 jsbundle 文件)。具体的 js 打包命令如下："]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-shell",
        children: "# 注：如果你使用了 React Native Gradle Plugin，则其会自动执行以下命令，不需要手动执行\n$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest android/com/your-company-name/app-package-name/src/main/res/\n"
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "注意把上述命令中的路径替换为你实际项目的路径。如果 assets 目录不存在，则需要提前自己创建一个。"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "然后在 Android Studio 中正常生成 release 版本即可！"
    }), "\n", _jsx(_components.h3, {
      id: "然后呢",
      children: "然后呢？"
    }), "\n", _jsx(_components.p, {
      children: "然后就可以开发啦~可是我完全不会 React Native 怎么办？"
    }), "\n", _jsxs(_components.p, {
      children: ["我们建议你先通读本站的所有文档，看看博客，看看论坛。如果觉得知识太零散，不够系统，那么你也可以考虑下购买我们的", _jsx(_components.a, {
        href: "/about#%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E4%B8%8E%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C",
        children: "付费咨询服务"
      }), "。"]
    })]
  });
}
function _integration_with_existing_apps_kotlin_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ..._provideComponents(),
    ...props.components
  };
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_integration_with_existing_apps_kotlin_createMdxContent, {
      ...props
    })
  }) : _integration_with_existing_apps_kotlin_createMdxContent(props);
}


;// CONCATENATED MODULE: ./versioned_docs/version-0.75/integration-with-existing-apps.md


const integration_with_existing_apps_frontMatter = {
	id: 'integration-with-existing-apps',
	title: '集成到现有原生应用',
	hide_table_of_contents: true
};
const integration_with_existing_apps_contentTitle = undefined;
const metadata = {
  "id": "integration-with-existing-apps",
  "title": "集成到现有原生应用",
  "description": "如果你正准备从头开始制作一个新的应用，那么 React Native 会是个非常好的选择。但如果你只想给现有的原生应用中添加一两个视图或是业务流程，React Native 也同样不在话下。只需简单几步，你就可以给原有应用加上新的基于 React Native 的特性、画面和视图等。",
  "source": "@site/versioned_docs/version-0.75/integration-with-existing-apps.md",
  "sourceDirName": ".",
  "slug": "/integration-with-existing-apps",
  "permalink": "/docs/integration-with-existing-apps",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/integration-with-existing-apps.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "integration-with-existing-apps",
    "title": "集成到现有原生应用",
    "hide_table_of_contents": true
  },
  "sidebar": "docs",
  "previous": {
    "title": "搭建开发环境",
    "permalink": "/docs/environment-setup"
  },
  "next": {
    "title": "集成到 Android Fragment",
    "permalink": "/docs/integration-with-android-fragment"
  }
};
const assets = {

};









const integration_with_existing_apps_toc = [...toc, ..._integration_with_existing_apps_objc_toc, ..._integration_with_existing_apps_swift_toc];
function integration_with_existing_apps_createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "如果你正准备从头开始制作一个新的应用，那么 React Native 会是个非常好的选择。但如果你只想给现有的原生应用中添加一两个视图或是业务流程，React Native 也同样不在话下。只需简单几步，你就可以给原有应用加上新的基于 React Native 的特性、画面和视图等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体的步骤根据你所开发的目标平台不同而不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["译注：本文档可能更新不够及时，不能保证适用于最新版本，欢迎了解的朋友使用页面底部的编辑链接帮忙改进此文档。一个实用的建议是可以使用", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx react-native init NewProject"
        }), "创建一个最新版本的纯 RN 项目，去参考其 Podfile 或是 gradle 等的配置，以它们为准。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)((Tabs_default()), {
      groupId: "language",
      queryString: true,
      defaultValue: "java",
      values: [{
        label: 'Android (Java)',
        value: 'java'
      }, {
        label: 'iOS (Objective-C)',
        value: 'objc'
      }, {
        label: 'iOS (Swift)',
        value: 'swift'
      }],
      children: [(0,jsx_runtime.jsx)((TabItem_default()), {
        value: "java",
        children: (0,jsx_runtime.jsx)(MDXContent, {})
      }), (0,jsx_runtime.jsx)((TabItem_default()), {
        value: "objc",
        children: (0,jsx_runtime.jsx)(_integration_with_existing_apps_objc_MDXContent, {})
      }), (0,jsx_runtime.jsx)((TabItem_default()), {
        value: "swift",
        children: (0,jsx_runtime.jsx)(_integration_with_existing_apps_swift_MDXContent, {})
      })]
    })]
  });
}
function integration_with_existing_apps_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(integration_with_existing_apps_createMdxContent, {
      ...props
    })
  }) : integration_with_existing_apps_createMdxContent(props);
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

/***/ 96171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 79247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GettingStartedXcodeCommandLineTools-7ddc121ba824227ca88a078b9ad9105e.png");

/***/ }),

/***/ 48777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAG8CAAAAADS8eckAAAIUElEQVR4AezPMQEAAAjAIPuX1tsMgwbMAwAAAAAAAAAAm6VepH68zzMAVmEYgNH3t7Jt2zbXbGPJtmvJtm3btm3bNp7cvV+ui7Mv53njcutQjJ6N4k2X1L5AhgEYcqhCpVMAvKhZdj+87TgfoEWLVnOg/TBgawtMd2/ASFVDff2V7wbFftvaLHFnvHk+JobrOP/vusyeKLDpDcEuCx3cc3rrA0jdZuHLEfIAAcF0sxKI6oy+3mQLMI1+UWPvJ3mh/NRONmvLfibESniCbEXDA0xfxIryVXcwciv/74SAgJx9MQuiXJx1OmMDADnIHQ+h5Mu5GMmKeqzv68tuavXCfDKTtwlxPIa4sHbng4S8i0z8Z3zyPFz44oX9cTGklzhGwyfTogMZ6wPIvpftExJ6kIRco2ypD/Vr9VJ8MjBe9Nj4gJIf61vDxozpIj5fzHkHbMSIzY6bN9znAZjheKrVRTx3CBHrofO2PfUcWn1aVXhVhvy809XPF4WrWp1RIrsxpGNKSN0DOcnciG/Q6gcBQgyJ3MWeOmh1ssep7LyLp3oyXZ10uZM00NUp1g5jHru8Xgfc4Z7D6XL1/r6O3LeivrKrqPYqdZ6fB7iH4uVbTHbxCvab0Vu1/z27dSwAAAAAMMjfehB7Q+hLadDR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHRLz326wE6ji0OwPg/erZt+72JU9tun23bts3ato2t3SapFdvaZHZn7rd8tQ73dDrfweDwN7jYfu9tDxb5TtSzdzSd9f/dhx5yAvzXPOapGgI99ycAWx8y6N+BPUkee6W/Vj/pTcXRtvMhV8jooyXxz2slBarDzvyhsfQCgI4nSAWo6Mjnf7lInABwzr0ALBY3P95yKHq5nPnMk6dLJUfZGtFDRpf/gIanQnPR4S9xAWyU9T56lRQAF7Q7gA6Hoje+yAAjoiNHWbKYIaM3rwPGCsg4wBXxFeCSHwt99GIBaHjxAfR3zwTzi9Pkw0Lx0V+UkwYrALgkHiBlKtQ+GhH5sQLW3Sk3OiBN1kQ9hvoxPKJHLahxp0tSEWyUEA9zlzYAcQNc2wHodq7pp5undYPVkntQegsZnHL3FQJyzUubPpGxAPBI2I8EOvn0JavOuhCGywcbfpU/SZMTR6TQOHLBugvPMukjq3c9FwlbQ0z/KbKIbDEA7o6BDKnGT0e/SkSWEKRLMD+9SlKA0wXkXiD+agLdGybn/VoNb5zkgupzNpunPQX8Em6kyS6oFjcgkzmtO5if57MzLKT0RbIFKgL0OxIh7FMCdNfJZ2wuekjmBOnNlvnqGaCPFhMYJiBZwJ9CMNeORiKz0OIAoFwMQJdtaQL8d+pUb9d0YLq0KAPICCl9mowHEBfAVd35NdwM0pMuAvhRDvbBf3cqQLIEh7m/hT25L4riqgcAIF8AkCV++qMntvX1IMxtHCYPQMEdIaRnyFQA5HugRnrTSoIh9wGslNKD0NeIE3hlP7qeUAEwTmh8G0Cl2ym7gCwp9NNnC4BSAKRLPyB09HVhfQDgOSmBHmJSU+ltl2RX8nREHdBAOAidsHaQKvvR1Xk3mqDOuRGHrIa5Uop2lRsSz8BPR3qDETGZE98C46QhkB86ugQCdaE0OiN8FQDBD15dL5cnyImlB6WviRCJWrMfnYKT5eJL5bQyuF+iwuR7qD1fTpezaoP0ISIXSqwiPeLsRnIxDJPtIaM7AgHMe/OfQoLpDjdA8r8fz9cJtGQTAOUOxa7FQM36FTWrBBw6kOMgkLH4i5+XKYCMOY5CACN1bLILah0AlC+fsBWgatH4VAV1E9Wxt32RL6DytAbH485tuZxwRviZ+vFIhy2OSnu/fqzQbbpNt+k23abbdJtu0236tHXAdxkc0LK+CpLf/sG0Kl016A68vYP9cyZqJmntK8Y1MS1K3/lc2zo/3fz33XK2joHeFQA8st1Lf3kzNCm1KP2NtKl9/PT6M3YkZarWBdseZ3gsLH0RLx3QEwyL0hOUrvnomc9A5rdUNqvvxtQxvGA/XbVJxZr02fEdOkTv8NJnt3z77bd7woMfAfDLgOxsLR14dDIWpd9bAikfeunl9yoMNyuf7piJUtzfpk0brTXq5b+xKL0mGiDaS+ell76LSdMTVXUjY2Q8AJrJb3FvvvlmkeWXNCrLXs0dF3SbbtNt+mAneyq2Nj1RZ+8eLwcoaKnBxph/Ws2yOF2VFbmBmoKaIN1Zv1qDzlCnWZuuun/wa/0aHC2HN5vro7daaRouDTSgk2FpevobsOAdYtwYTX30ZTr46I2Ah7Zbmt5rEuTEKK1p06aa8tIhQNeA7lUWpTu3QYKx5ldIfoxoBbAXPQnMJCxKN+OqVmsYManlcfl89Ib6814fvUFygN63vfrxFavS2frul05w9vplJzDj81EwrpYhpWD8C4x9c5CyV3M23dP+HAwAAAAwEPK33ncOVwapq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urN6irq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urqz8AAAAAAAAAABjgt6y9t4ueCAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 50019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 43330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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fh9SKZfLzWazVqsJLsAD4/G42+1Wq9WQym63S3bo9XqCC/BAHMdJbYfD4Xq9Dp9Ur9cHg0Gyw2w2i6KoVCo5wwV44L22qVf1+/3wDQQX4HQ6CS4Aggs8kWKxKLgAH/r89cVVo9HIlALAPYVCYbvdJsMGIZVkbbJDq9UK9wkuQLvdnkwmcRyHVPL5fKfTCc/M84zAD/A8IwA+mgEILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIILgOACCC4AggsguACCC4DgAgguAIILILgAgguA4AIILgCCCyC4AIL75AAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABBdAcAEQXADBBRBcAAQXQHABEFwAwQUQXAAEF0BwARBcAMEFEFwABPd4PF6v1wAguJk6HA7L5XKxWGguILgZulwuq9Xqdrudz2fNBQQ3Q7lcLoqit9+aCwhutiqVSqPR0FxAcDUXIEVwNRdAcDUXEFzNBUgfXM0FEFzN5ZV9uwBvIs3jOP5m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");

/***/ }),

/***/ 15675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/react-native-add-react-native-integration-wire-up-37137857e0876d2aca7049db6d82fcb6.png");

/***/ }),

/***/ 18343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAIeCAMAAACleOKyAAAAS1BMVEX///82NjZnZ2dtbW1cXFzw8PCOjo4AAAD19vjNzc3h4eHC3fx/uvre7f1ap/qey/sgICC5ubmrq6tGRkabm5t9fX2GhoY8l/o2Z22nWEMcAAADrUlEQVR42u3Y63LaSBAGUAkkmBl0F4L3f9MdfIudH2QLK9mIPacoSjZQ5lO3esYqCgB4SKgfFDYdO01LNZcPmqtlSlsNvgzHbyovmww/lscVlOP2kk/DcRXDtLmar5Q8Z99Y3VN5XE25ret9Oa5o+e9y1OP7KvN2lKaxvl/0Yc3ow78oexrPU3z/UiHFH9I3mibO5ZyHTZ2KdFukYxHLcqjuZp+Oq/rlpIu7l3Ndnl+/VYzT+cMYH89+GVKo5nAo02FOqdwX1ZzG4XzvI/t1o+9/PVOr8zhdyuNLReq4fBmT8fFlqhzjvC/iuc69U5dLPRyKMFf3PjKvG33+xaY2VmO87PZTXJbbO1P8MmQvMT26Ka6rYRjezlzYlyndKl7d+zrhD0cvQt5FDMNxTm/X/ZfoSxwfbfklV72a6zqnD0teZV+j36v6H49ejLnu8bJ/vdRXq3ooc8rzkA550C63feWt2dNwufeZat3oP53mOtXhdu2lENLHUD+U8/s1Xcf9l+3g49f6YdgtQxXiFM7HoaoueY+6m+/vM5Z1o/+0sKeY6hjzCpY7Mf1YVOaP4xjPlw/fmfBh2u9eV43xclmW3O3Tbn//TI7rRv9pKxtyA9f116rnv5k+vSF+Xtj/7CaoXDN5WW9pI3teM/p5W7elVpzx1aaKnifNai1fxqL4f2bfXvK8BK2yuO82eXMujNU3/3cdqnGrt6RDmg7L/kHLYUrbvhcPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAX67tm1NRhE+/eT0Op6Zvnzp56Jq+60PzI+XbcdP1TffU2dtrW7Sn/trkKnenom+a/npLfLo99afQd03bNk3z8uqpuXXI02i6HOd0zSFPOe41B73e4vVNEdo2tH3OnV9t8qNru1PfhSfq+ByraXONc0mvOVy+BNrX6G1+IfS3U9PlJijaLvdGc32esrenl+buQk59+hT9dM3lzd3f3Zr8PXp+y+l5qt7exlwTuv6Ux9pL9CL/+DHm8gjsuvfoOXzfPFHD52u5D8Wpz42fS3oravuyqOVWz6M+9HkE5M7Ij5Cf+ydf7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Jml+FukDSTfV7/FLv710ePu96imvz56PR3Wdzkczhvo+CKEUIfVGaLAY/4BnvZcneOoJMcAAAAASUVORK5CYII=");

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