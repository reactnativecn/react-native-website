exports.id = 66425;
exports.ids = [66425];
exports.modules = {

/***/ 5423:
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
	id: 'layoutanimation',
	title: 'LayoutAnimation'
};
const contentTitle = undefined;
const metadata = {
  "id": "layoutanimation",
  "title": "LayoutAnimation",
  "description": "当布局变化时，自动将视图运动到它们新的位置上。",
  "source": "@site/versioned_docs/version-0.73/layoutanimation.md",
  "sourceDirName": ".",
  "slug": "/layoutanimation",
  "permalink": "/docs/0.73/layoutanimation",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/layoutanimation.md",
  "tags": [],
  "version": "0.73",
  "frontMatter": {
    "id": "layoutanimation",
    "title": "LayoutAnimation"
  },
  "sidebar": "api",
  "previous": {
    "title": "Keyboard",
    "permalink": "/docs/0.73/keyboard"
  },
  "next": {
    "title": "Linking",
    "permalink": "/docs/0.73/linking"
  }
};
const assets = {

};






const toc = [{
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "<code>configureNext()</code>",
  "id": "configurenext",
  "level": 3
}, {
  "value": "参数：",
  "id": "参数",
  "level": 4
}, {
  "value": "config",
  "id": "config",
  "level": 5
}, {
  "value": "<code>create()</code>",
  "id": "create",
  "level": 3
}, {
  "value": "Properties",
  "id": "properties",
  "level": 2
}, {
  "value": "Types",
  "id": "types",
  "level": 3
}, {
  "value": "Properties",
  "id": "properties-1",
  "level": 3
}, {
  "value": "Presets",
  "id": "presets",
  "level": 3
}, {
  "value": "easeInEaseOut",
  "id": "easeineaseout",
  "level": 3
}, {
  "value": "linear",
  "id": "linear",
  "level": 3
}, {
  "value": "spring",
  "id": "spring",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当布局变化时，自动将视图运动到它们新的位置上。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个常用的调用此 API 的办法是在状态更新前调用。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["注意如果要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Android"
      }), "上使用此动画，则需要在代码中启用："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "import { UIManager } from 'react-native';\n\nif (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "上面这段代码应该写在任何组件加载之前，比如可以写到 index.js 的开头。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "LayoutAnimation",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%5C%22collapse%5C%22%20%3A%20%5C%22expand%5C%22%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20tile%3A%20%7B%5Cn%20%20%20%20background%3A%20%5C%22lightGrey%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23d6d7da%5C%22%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "android,ios",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "文档",
      children: "文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "configurenext",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureNext()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "计划下一次布局要发生的动画。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "参数",
      children: "参数："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "名称"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "类型"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "必需"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "config"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "是"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "看下面的说明"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "onAnimationDidEnd"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "function"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "否"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "动画结束后的回调"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "onAnimationDidFail"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "function"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "否"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "动画失败后的回调"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "config",
      children: "config"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "duration"
        }), " 动画持续时间，单位是毫秒。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "create"
        }), "，配置创建新视图时的动画。（参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Anim"
        }), "类型）"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "update"
        }), "，配置被更新的视图的动画。（参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Anim"
        }), "类型）"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "create",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "create()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static create(duration, type, creationProp)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["用来创建", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureNext"
      }), "所需的 config 参数的辅助函数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "syntax",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultSyntax),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().syntax),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "functional",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "LayoutAnimation",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "android,ios",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "classical",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "LayoutAnimation",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20boxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "android,ios",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "types",
      children: "Types"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["An enumeration of animation types to be used in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/layoutanimation#create",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "create"
        })
      }), " method, or in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "create"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "update"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "delete"
      }), " configs for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/layoutanimation#configurenext",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "configureNext"
        })
      }), ". (example usage: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation.Types.easeIn"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Types"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "spring"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "linear"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "easeInEaseOut"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "easeIn"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "easeOut"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "keyboard"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "properties-1",
      children: "Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["An enumeration of layout properties to be animated to be used in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/layoutanimation#create",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "create"
        })
      }), " method, or in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "create"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "update"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "delete"
      }), " configs for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.73/layoutanimation#configurenext",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "configureNext"
        })
      }), ". (example usage: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation.Properties.opacity"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Properties"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "opacity"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "scaleX"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "scaleY"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "scaleXY"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "presets",
      children: "Presets"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A set of predefined animation config."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Presets"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "easeInEaseOut"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "create(300, 'easeInEaseOut', 'opacity')"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "linear"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "create(500, 'linear', 'opacity')"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "spring"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "easeineaseout",
      children: "easeInEaseOut"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Shortcut to bind ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureNext()"
      }), " methods with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Presets.easeInEaseOut"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "linear",
      children: "linear"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Shortcut to bind ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureNext()"
      }), " methods with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Presets.linear"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "spring",
      children: "spring"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Shortcut to bind ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configureNext()"
      }), " methods with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Presets.spring"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Example usage:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "syntax",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultSyntax),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().syntax),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "functional",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "LayoutAnimation",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "android,ios",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "classical",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "LayoutAnimation",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20firstBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20secondBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20thirdBoxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20firstBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20secondBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20thirdBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "android,ios",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
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