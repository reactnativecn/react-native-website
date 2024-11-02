exports.id = 20523;
exports.ids = [20523];
exports.modules = {

/***/ 69473:
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


const frontMatter = {
	id: 'running-on-device',
	title: '在设备上运行',
	hide_table_of_contents: true
};
const contentTitle = undefined;
const metadata = {
  "id": "running-on-device",
  "title": "在设备上运行",
  "description": "在真机上仔细测试 app 后再发布给用户总是不会错的。本文档将指导你通过必须的步骤在设备上运行 React Native app，为生产做准备。",
  "source": "@site/versioned_docs/version-0.75/running-on-device.md",
  "sourceDirName": ".",
  "slug": "/running-on-device",
  "permalink": "/docs/running-on-device",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/running-on-device.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "running-on-device",
    "title": "在设备上运行",
    "hide_table_of_contents": true
  },
  "sidebar": "docs",
  "previous": {
    "title": "多平台支持",
    "permalink": "/docs/out-of-tree-platforms"
  },
  "next": {
    "title": "快速刷新",
    "permalink": "/docs/fast-refresh"
  }
};
const assets = {

};






const toc = [{
  "value": "在 Android 设备上运行应用",
  "id": "在-android-设备上运行应用",
  "level": 2
}, {
  "value": "开发平台",
  "id": "开发平台",
  "level": 4
}, {
  "value": "1. 开启 USB 调试",
  "id": "1-开启-usb-调试",
  "level": 3
}, {
  "value": "2. 通过 USB 数据线连接设备",
  "id": "2-通过-usb-数据线连接设备",
  "level": 3
}, {
  "value": "3. 运行应用",
  "id": "3-运行应用",
  "level": 3
}, {
  "value": "(Android 5.0 及以上)使用 adb reverse 命令",
  "id": "android-50-及以上使用-adb-reverse-命令",
  "level": 3
}, {
  "value": "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器",
  "id": "android-50-以下通过-wi-fi-连接你的本地开发服务器",
  "level": 3
}, {
  "value": "为生产编译 app",
  "id": "为生产编译-app",
  "level": 2
}, {
  "value": "1. 开启 USB 调试",
  "id": "1-开启-usb-调试-1",
  "level": 3
}, {
  "value": "2. 通过 USB 数据线连接设备",
  "id": "2-通过-usb-数据线连接设备-1",
  "level": 3
}, {
  "value": "3. 运行应用",
  "id": "3-运行应用-1",
  "level": 3
}, {
  "value": "(Android 5.0 及以上)使用 adb reverse 命令",
  "id": "android-50-及以上使用-adb-reverse-命令-1",
  "level": 3
}, {
  "value": "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器",
  "id": "android-50-以下通过-wi-fi-连接你的本地开发服务器-1",
  "level": 3
}, {
  "value": "为生产编译 app",
  "id": "为生产编译-app-1",
  "level": 2
}, {
  "value": "1. 开启 USB 调试",
  "id": "1-开启-usb-调试-2",
  "level": 3
}, {
  "value": "2. 通过 USB 数据线连接设备",
  "id": "2-通过-usb-数据线连接设备-2",
  "level": 3
}, {
  "value": "3. 运行应用",
  "id": "3-运行应用-2",
  "level": 3
}, {
  "value": "(Android 5.0 及以上)使用 adb reverse 命令",
  "id": "android-50-及以上使用-adb-reverse-命令-2",
  "level": 3
}, {
  "value": "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器",
  "id": "android-50-以下通过-wi-fi-连接你的本地开发服务器-2",
  "level": 3
}, {
  "value": "为生产编译 app",
  "id": "为生产编译-app-2",
  "level": 2
}, {
  "value": "在 iOS 设备上运行应用",
  "id": "在-ios-设备上运行应用",
  "level": 2
}, {
  "value": "开发平台",
  "id": "开发平台-1",
  "level": 4
}, {
  "value": "1. 通过 USB 数据线连接设备",
  "id": "1-通过-usb-数据线连接设备",
  "level": 3
}, {
  "value": "2. 配置代码签名",
  "id": "2-配置代码签名",
  "level": 3
}, {
  "value": "3. 编译并运行应用",
  "id": "3-编译并运行应用",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 3
}, {
  "value": "1. Wi-Fi 网络",
  "id": "1-wi-fi-网络",
  "level": 4
}, {
  "value": "2. IP 地址",
  "id": "2-ip-地址",
  "level": 4
}, {
  "value": "为生产编译 app",
  "id": "为生产编译-app-3",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在真机上仔细测试 app 后再发布给用户总是不会错的。本文档将指导你通过必须的步骤在设备上运行 React Native app，为生产做准备。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果使用 Expo 沙盒环境来建立工程，可以通过 Expo App 扫描 QR 代码在设备上预览 app。为了在设备上编译和运行 app，需要“弹出”(eject)并参照", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/environment-setup",
        children: "搭建开发环境"
      }), "文档搭建原生环境。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "platform",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultPlatform),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().platforms),
      className: "pill-tabs",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "android",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "在-android-设备上运行应用",
          children: "在 Android 设备上运行应用"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "下文所指的设备包括 Android 手机和模拟器。"
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "开发平台",
          children: "开发平台"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
          groupId: "os",
          defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultOs),
          values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().oses),
          className: "pill-tabs",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "macos",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "1-开启-usb-调试",
              children: "1. 开启 USB 调试"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在默认情况下 Android 设备只能从应用市场来安装应用。你需要开启 USB 调试才能自由安装开发版本的 APP。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["首先，确定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://www.baidu.com/s?wd=%E6%89%93%E5%BC%80usb%E8%B0%83%E8%AF%95",
                children: "你已经打开设备的 USB 调试开关"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "2-通过-usb-数据线连接设备",
              children: "2. 通过 USB 数据线连接设备"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在我们设置一个 Android 设备来运行我们的 React Native 项目，通过 USB 将你的设备插入开发机器以继续。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["下面检查你的设备是否能正确连接到 ADB（Android Debug Bridge），使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "adb devices"
              }), "命令："]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-sh",
                children: "$ adb devices\nList of devices attached\nemulator-5554 offline   # Google emulator\n14ed2fcc device         # Physical device\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["在右边那列看到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "device"
              }), "说明你的设备已经被正确连接了。注意，你每次只应当", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "连接一个设备"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "译注：如果你连接了多个设备（包含模拟器在内），后续的一些操作可能会失败。拔掉不需要的设备，或者关掉模拟器，确保 adb devices 的输出只有一个是连接状态。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "3-运行应用",
              children: "3. 运行应用"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在你可以运行下面的命令来在设备上安装并启动应用了。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-shell",
                children: "$ npx react-native run-android\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["如果你收到\"bridge configuration isn't available\"错误，请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "/docs/running-on-device#android-50-%E5%8F%8A%E4%BB%A5%E4%B8%8A%E4%BD%BF%E7%94%A8-adb-reverse-%E5%91%BD%E4%BB%A4-1",
                  children: "使用adb reverse"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["提示：你还可以运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "npx react-native run-android --variant=release"
                }), "来安装 release 版的应用。当然你需要", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "signed-apk-android",
                  children: "先配置好签名"
                }), "，且此时无法再开启开发者菜单。注意在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              children: "从设备上访问开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在启用开发服务器（官方名称 metro，但我们更常称之为 Packager）的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果。按照下面描述的任意一种方法来使你的设备可以访问到运行在电脑上的开发服务器。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["译注：默认情况下模拟器可以自动探测宿主机 ip 并连接，只有 Android 5.0 以下版本的手机需要按下文说明来手动操作。但某些情形下可能也无法正常连接，请注意去", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "https://github.com/reactnativecn/react-native-website/issues",
                  children: "讨论区"
                }), "查看是否有人遭遇同类型的问题（不同时期不同版本可能是不同的问题）。有些文章会提到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "react-native bundle"
                }), "命令，这个命令会把 js 文件打包内置到应用中，从而不需要连接 metro，但这", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "并没有解决问题"
                }), "。我们在开发中必须使用到 metro，否则无法刷新代码。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-及以上使用-adb-reverse-命令",
              children: "(Android 5.0 及以上)使用 adb reverse 命令"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "注意，这个选项只能在 5.0 以上版本(API 21+)的安卓设备上使用。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "首先把你的设备通过 USB 数据线连接到电脑上，并开启 USB 调试（关于如何开启 USB 调试，参见上面的章节）。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb reverse tcp:8081 tcp:8081"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["不需要更多配置，你就可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "和其它的开发选项了。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-以下通过-wi-fi-连接你的本地开发服务器",
              children: "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "你还可以通过 Wi-Fi 连接到开发服务器。你首先需要使用 USB 在你的设备上安装该应用程序，完成之后便可以按照这些说明进行无线调试。在继续之前，你需要知道开发机器的当前 IP 地址。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "System Preferences"
              }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network"
              }), "中找到 IP 地址。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["首先确保你的电脑和手机设备在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "同一个 Wi-Fi 环境"
                }), "下。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "在设备上运行你的 React Native 应用。和打开其它 App 一样操作。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["摇晃设备，或者运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb shell input keyevent 82"
                }), "，可以打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["点击", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Dev Settings"
                }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Debug server host for device"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["输入你电脑的 IP 地址和端口号（譬如 10.0.1.1:8081）。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Mac 上"
                }), "，你可以在系统设置/网络里找查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Windows 上"
                }), "，打开命令提示符并输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ipconfig"
                }), "来查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Linux 上"
                }), "你可以在终端中输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ifconfig"
                }), "来查询你的 IP 地址。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["回到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "然后选择", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你现在可以从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/debugging#accessing-the-in-app-developer-menu",
                children: "开发者菜单"
              }), "启用实时重新加载。只要你的 JavaScript 代码发生更改，应用就会重新加载。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
              id: "为生产编译-app",
              children: "为生产编译 app"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你已经使用 React Native 构建了一个很棒的应用程序，现在你渴望在 Play Store 中发布它。该过程与任何其他原生 Android 应用程序相同，但需要考虑一些其他注意事项。按照", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/signed-apk-android",
                children: "生成签名 APK"
              }), "的指南了解更多信息。"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "windows",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "1-开启-usb-调试-1",
              children: "1. 开启 USB 调试"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在默认情况下 Android 设备只能从应用市场来安装应用。你需要开启 USB 调试才能自由安装开发版本的 APP。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["首先，确定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://www.baidu.com/s?wd=%E6%89%93%E5%BC%80usb%E8%B0%83%E8%AF%95",
                children: "你已经打开设备的 USB 调试开关"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "2-通过-usb-数据线连接设备-1",
              children: "2. 通过 USB 数据线连接设备"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在我们设置一个 Android 设备来运行我们的 React Native 项目，通过 USB 将你的设备插入开发机器以继续。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["下面检查你的设备是否能正确连接到 ADB（Android Debug Bridge），使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "adb devices"
              }), "命令："]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-sh",
                children: "$ adb devices\nList of devices attached\nemulator-5554 offline   # Google emulator\n14ed2fcc device         # Physical device\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["在右边那列看到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "device"
              }), "说明你的设备已经被正确连接了。注意，你每次只应当", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "连接一个设备"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "译注：如果你连接了多个设备（包含模拟器在内），后续的一些操作可能会失败。拔掉不需要的设备，或者关掉模拟器，确保 adb devices 的输出只有一个是连接状态。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "3-运行应用-1",
              children: "3. 运行应用"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在你可以运行下面的命令来在设备上安装并启动应用了。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-shell",
                children: "$ npx react-native run-android\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["如果你收到\"bridge configuration isn't available\"错误，请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "/docs/running-on-device#android-50-%E5%8F%8A%E4%BB%A5%E4%B8%8A%E4%BD%BF%E7%94%A8-adb-reverse-%E5%91%BD%E4%BB%A4-1",
                  children: "使用adb reverse"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["提示：你还可以运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "npx react-native run-android --variant=release"
                }), "来安装 release 版的应用。当然你需要", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "signed-apk-android",
                  children: "先配置好签名"
                }), "，且此时无法再开启开发者菜单。注意在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              children: "从设备上访问开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在启用开发服务器（官方名称 metro，但我们更常称之为 Packager）的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果。按照下面描述的任意一种方法来使你的设备可以访问到运行在电脑上的开发服务器。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["译注：默认情况下模拟器可以自动探测宿主机 ip 并连接，只有 Android 5.0 以下版本的手机需要按下文说明来手动操作。但某些情形下可能也无法正常连接，请注意去", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "https://github.com/reactnativecn/react-native-website/issues",
                  children: "讨论区"
                }), "查看是否有人遭遇同类型的问题（不同时期不同版本可能是不同的问题）。有些文章会提到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "react-native bundle"
                }), "命令，这个命令会把 js 文件打包内置到应用中，从而不需要连接 metro，但这", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "并没有解决问题"
                }), "。我们在开发中必须使用到 metro，否则无法刷新代码。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-及以上使用-adb-reverse-命令-1",
              children: "(Android 5.0 及以上)使用 adb reverse 命令"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "注意，这个选项只能在 5.0 以上版本(API 21+)的安卓设备上使用。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "首先把你的设备通过 USB 数据线连接到电脑上，并开启 USB 调试（关于如何开启 USB 调试，参见上面的章节）。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb reverse tcp:8081 tcp:8081"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["不需要更多配置，你就可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "和其它的开发选项了。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-以下通过-wi-fi-连接你的本地开发服务器-1",
              children: "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "你还可以通过 Wi-Fi 连接到开发服务器。你首先需要使用 USB 在你的设备上安装该应用程序，完成之后便可以按照这些说明进行无线调试。在继续之前，你需要知道开发机器的当前 IP 地址。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "System Preferences"
              }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network"
              }), "中找到 IP 地址。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["首先确保你的电脑和手机设备在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "同一个 Wi-Fi 环境"
                }), "下。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "在设备上运行你的 React Native 应用。和打开其它 App 一样操作。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["摇晃设备，或者运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb shell input keyevent 82"
                }), "，可以打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["点击", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Dev Settings"
                }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Debug server host for device"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["输入你电脑的 IP 地址和端口号（譬如 10.0.1.1:8081）。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Mac 上"
                }), "，你可以在系统设置/网络里找查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Windows 上"
                }), "，打开命令提示符并输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ipconfig"
                }), "来查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Linux 上"
                }), "你可以在终端中输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ifconfig"
                }), "来查询你的 IP 地址。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["回到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "然后选择", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你现在可以从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/debugging#accessing-the-in-app-developer-menu",
                children: "开发者菜单"
              }), "启用实时重新加载。只要你的 JavaScript 代码发生更改，应用就会重新加载。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
              id: "为生产编译-app-1",
              children: "为生产编译 app"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你已经使用 React Native 构建了一个很棒的应用程序，现在你渴望在 Play Store 中发布它。该过程与任何其他原生 Android 应用程序相同，但需要考虑一些其他注意事项。按照", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/signed-apk-android",
                children: "生成签名 APK"
              }), "的指南了解更多信息。"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "linux",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "1-开启-usb-调试-2",
              children: "1. 开启 USB 调试"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在默认情况下 Android 设备只能从应用市场来安装应用。你需要开启 USB 调试才能自由安装开发版本的 APP。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["首先，确定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://www.baidu.com/s?wd=%E6%89%93%E5%BC%80usb%E8%B0%83%E8%AF%95",
                children: "你已经打开设备的 USB 调试开关"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "2-通过-usb-数据线连接设备-2",
              children: "2. 通过 USB 数据线连接设备"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在我们设置一个 Android 设备来运行我们的 React Native 项目，通过 USB 将你的设备插入开发机器以继续。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["下面检查你的设备是否能正确连接到 ADB（Android Debug Bridge），使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "adb devices"
              }), "命令："]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-sh",
                children: "$ adb devices\nList of devices attached\nemulator-5554 offline   # Google emulator\n14ed2fcc device         # Physical device\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["在右边那列看到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "device"
              }), "说明你的设备已经被正确连接了。注意，你每次只应当", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "连接一个设备"
              }), "。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "译注：如果你连接了多个设备（包含模拟器在内），后续的一些操作可能会失败。拔掉不需要的设备，或者关掉模拟器，确保 adb devices 的输出只有一个是连接状态。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "3-运行应用-2",
              children: "3. 运行应用"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "现在你可以运行下面的命令来在设备上安装并启动应用了。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-shell",
                children: "$ npx react-native run-android\n"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["如果你收到\"bridge configuration isn't available\"错误，请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "/docs/running-on-device#android-50-%E5%8F%8A%E4%BB%A5%E4%B8%8A%E4%BD%BF%E7%94%A8-adb-reverse-%E5%91%BD%E4%BB%A4-1",
                  children: "使用adb reverse"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["提示：你还可以运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "npx react-native run-android --variant=release"
                }), "来安装 release 版的应用。当然你需要", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "signed-apk-android",
                  children: "先配置好签名"
                }), "，且此时无法再开启开发者菜单。注意在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              children: "从设备上访问开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在启用开发服务器（官方名称 metro，但我们更常称之为 Packager）的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果。按照下面描述的任意一种方法来使你的设备可以访问到运行在电脑上的开发服务器。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["译注：默认情况下模拟器可以自动探测宿主机 ip 并连接，只有 Android 5.0 以下版本的手机需要按下文说明来手动操作。但某些情形下可能也无法正常连接，请注意去", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "https://github.com/reactnativecn/react-native-website/issues",
                  children: "讨论区"
                }), "查看是否有人遭遇同类型的问题（不同时期不同版本可能是不同的问题）。有些文章会提到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "react-native bundle"
                }), "命令，这个命令会把 js 文件打包内置到应用中，从而不需要连接 metro，但这", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "并没有解决问题"
                }), "。我们在开发中必须使用到 metro，否则无法刷新代码。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-及以上使用-adb-reverse-命令-2",
              children: "(Android 5.0 及以上)使用 adb reverse 命令"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "注意，这个选项只能在 5.0 以上版本(API 21+)的安卓设备上使用。"
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "首先把你的设备通过 USB 数据线连接到电脑上，并开启 USB 调试（关于如何开启 USB 调试，参见上面的章节）。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb reverse tcp:8081 tcp:8081"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["不需要更多配置，你就可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "和其它的开发选项了。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "android-50-以下通过-wi-fi-连接你的本地开发服务器-2",
              children: "(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "你还可以通过 Wi-Fi 连接到开发服务器。你首先需要使用 USB 在你的设备上安装该应用程序，完成之后便可以按照这些说明进行无线调试。在继续之前，你需要知道开发机器的当前 IP 地址。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "System Preferences"
              }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network"
              }), "中找到 IP 地址。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["首先确保你的电脑和手机设备在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "同一个 Wi-Fi 环境"
                }), "下。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "在设备上运行你的 React Native 应用。和打开其它 App 一样操作。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
                children: "你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["摇晃设备，或者运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "adb shell input keyevent 82"
                }), "，可以打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["点击", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Dev Settings"
                }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Debug server host for device"
                }), "。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["输入你电脑的 IP 地址和端口号（譬如 10.0.1.1:8081）。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Mac 上"
                }), "，你可以在系统设置/网络里找查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Windows 上"
                }), "，打开命令提示符并输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ipconfig"
                }), "来查询你的 IP 地址。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "在 Linux 上"
                }), "你可以在终端中输入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ifconfig"
                }), "来查询你的 IP 地址。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["回到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "开发者菜单"
                }), "然后选择", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Reload JS"
                }), "。"]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你现在可以从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/debugging#accessing-the-in-app-developer-menu",
                children: "开发者菜单"
              }), "启用实时重新加载。只要你的 JavaScript 代码发生更改，应用就会重新加载。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
              id: "为生产编译-app-2",
              children: "为生产编译 app"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["你已经使用 React Native 构建了一个很棒的应用程序，现在你渴望在 Play Store 中发布它。该过程与任何其他原生 Android 应用程序相同，但需要考虑一些其他注意事项。按照", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/signed-apk-android",
                children: "生成签名 APK"
              }), "的指南了解更多信息。"]
            })]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "ios",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "在-ios-设备上运行应用",
          children: "在 iOS 设备上运行应用"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "开发平台-1",
          children: "开发平台"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
          groupId: "os",
          defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultOs),
          values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().oses),
          className: "pill-tabs",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "macos",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "1-通过-usb-数据线连接设备",
              children: "1. 通过 USB 数据线连接设备"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["使用 USB 闪电数据线连接 iOS 设备到 Mac。导航到工程的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "ios"
              }), "文件夹，然后用 Xcode 打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: ".xcworkspace"
              }), "文件，如果是 0.60 以前的版本则打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: ".xcodeproj"
              }), "文件。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["如果这是第一次在 iOS 设备上运行 app，需要注册开发设备。从 Xcode 菜单栏打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Product"
              }), "菜单，然后前往", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Destination"
              }), "。从列表中查找并选择设备。Xcode 将注册为开发设备。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "2-配置代码签名",
              children: "2. 配置代码签名"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["如果没有", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://developer.apple.com/",
                children: "Apple developer account"
              }), "，先注册。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "在 Xcode Project 导航中选择 project，然后选择 main target（它应该和 project 共享同样的名字）。查找\"General\"标签。前往\"Signing\"并确保在\"Team\"下拉下选择了开发者账号或团队。tests target（以 Tests 结尾，在 main target 下面）也需要重复同样的操作。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                src: (__webpack_require__(42014)/* ["default"] */ .A) + "",
                width: "809",
                height: "446"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "3-编译并运行应用",
              children: "3. 编译并运行应用"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["如果一切设置正确，设备会在 Xcode toolbar 中被列为 build target，也会出现在设备面板里(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "⇧⌘2"
              }), ")。现在可以按下 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Build and run"
              }), " 按钮(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "⌘R"
              }), ")或从", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Product"
              }), "菜单中选择", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Run"
              }), "。app 会立刻启动在设备上。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                src: (__webpack_require__(11923)/* ["default"] */ .A) + "",
                width: "641",
                height: "29"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["If you run into any issues, please take a look at Apple's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html#//apple_ref/doc/uid/TP40012582-CH27-SW4",
                  children: "Launching Your App on a Device"
                }), " docs."]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              children: "从设备上访问开发服务器"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["在启用开发服务器的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果。只需要在和电脑同样的 Wi-Fi 网络。摇晃设备打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/debugging#accessing-the-in-app-developer-menu",
                children: "Developer menu"
              }), "，然后 enable Live Reload。当 JavaScript 代码改变时 app 会重载。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                src: (__webpack_require__(45607)/* ["default"] */ .A) + "",
                width: "300",
                height: "416"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
              id: "常见问题",
              children: "常见问题"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "If you have any issues, ensure that your Mac and device are on the same network and can reach each other. Many open wireless networks with captive portals are configured to prevent devices from reaching other devices on the network. You may use your device's Personal Hotspot feature in this case."
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["当尝试连接到开发服务器时，可能得到一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/debugging#in-app-errors-and-warnings",
                children: "红屏报错"
              }), "说："]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["Connection to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "http://localhost:8081/debugger-proxy?role=client"
                }), " timed out. Are you running node proxy? If you are running on the device, check if you have the right IP address in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "RCTWebSocketExecutor.m"
                }), "."]
              }), "\n"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "解决这个问题检查以下几点。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
              id: "1-wi-fi-网络",
              children: "1. Wi-Fi 网络"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["确保笔记本电脑和电话在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "同一个"
              }), "Wi-Fi 网络。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
              id: "2-ip-地址",
              children: "2. IP 地址"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "确保编译脚本正确检测到机器的 IP 地址(e.g. 10.0.1.123)。"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                src: (__webpack_require__(95048)/* ["default"] */ .A) + "",
                width: "1400",
                height: "936"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["打开", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Report navigator"
              }), "标签，选择最近的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Build"
              }), "然后搜索", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "IP="
              }), "。搜索到的 IP 地址字符串应该和你电脑的 IP 地址一致。"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
              id: "为生产编译-app-3",
              children: "为生产编译 app"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["已经用 React Native 编译了一个伟大的 app，现在渴望在 App Store 发布。Follow the guide for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "/docs/publishing-to-app-store",
                children: "publishing to the Apple App Store"
              }), " to learn more."]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "windows",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["A Mac is required in order to build your app for iOS devices. Alternatively, you can refer to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "environment-setup",
                  children: "environment setup guide"
                }), " to learn how to build your app using Expo CLI, which will allow you to run your app using the Expo client app."]
              }), "\n"]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
            value: "linux",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["A Mac is required in order to build your app for iOS devices. Alternatively, you can refer to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "environment-setup",
                  children: "environment setup guide"
                }), " to learn how to build your app using Expo CLI, which will allow you to run your app using the Expo client app."]
              }), "\n"]
            })
          })]
        })]
      })]
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

/***/ 45607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png");

/***/ }),

/***/ 42014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/RunningOnDeviceCodeSigning-daffe4c45a59c3f5031b35f6b24def1d.png");

/***/ }),

/***/ 11923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 95048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/XcodeBuildIP-dfc8243436f5436466109acb8f9e0502.png");

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