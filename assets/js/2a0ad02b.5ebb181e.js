exports.id = 58585;
exports.ids = [58585];
exports.modules = {

/***/ 88889:
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
	id: 'flexbox',
	title: '使用 Flexbox 布局'
};
const contentTitle = undefined;
const metadata = {
  "id": "flexbox",
  "title": "使用 Flexbox 布局",
  "description": "我们在 React Native 中使用 flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构。",
  "source": "@site/versioned_docs/version-0.75/flexbox.md",
  "sourceDirName": ".",
  "slug": "/flexbox",
  "permalink": "/docs/0.75/flexbox",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/flexbox.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "flexbox",
    "title": "使用 Flexbox 布局"
  },
  "sidebar": "docs",
  "previous": {
    "title": "高度与宽度",
    "permalink": "/docs/0.75/height-and-width"
  },
  "next": {
    "title": "图片",
    "permalink": "/docs/0.75/images"
  }
};
const assets = {

};






const toc = [{
  "value": "Flex",
  "id": "flex",
  "level": 3
}, {
  "value": "Flex Direction",
  "id": "flex-direction",
  "level": 3
}, {
  "value": "Layout Direction",
  "id": "layout-direction",
  "level": 2
}, {
  "value": "Justify Content",
  "id": "justify-content",
  "level": 2
}, {
  "value": "Align Items",
  "id": "align-items",
  "level": 3
}, {
  "value": "Align Self",
  "id": "align-self",
  "level": 2
}, {
  "value": "Align Content",
  "id": "align-content",
  "level": 2
}, {
  "value": "Flex Wrap",
  "id": "flex-wrap",
  "level": 2
}, {
  "value": "Flex Basis, Grow, 以及 Shrink",
  "id": "flex-basis-grow-以及-shrink",
  "level": 2
}, {
  "value": "Row Gap, Column Gap 以及 Gap",
  "id": "row-gap-column-gap-以及-gap",
  "level": 2
}, {
  "value": "宽度与高度",
  "id": "宽度与高度",
  "level": 2
}, {
  "value": "绝对与相对定位",
  "id": "绝对与相对定位",
  "level": 2
}, {
  "value": "深入学习",
  "id": "深入学习",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们在 React Native 中使用 flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一般来说，使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexDirection"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), "和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "justifyContent"
      }), "三个样式属性就已经能满足大多数布局需求。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["React Native 中的 Flexbox 的工作原理和 web 上的 CSS 基本一致，当然也存在少许差异。首先是默认值不同：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flexDirection"
        }), "的默认值为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "column"
        }), "（而不是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "row"
        }), "），", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "alignContent"
        }), "默认值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex-start"
        }), "（而不是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stretch"
        }), "）, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flexShrink"
        }), " 默认值为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0"
        }), " （而不是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "1"
        }), "）, 而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        }), "只能指定一个数字值。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "flex",
      children: "Flex"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "layout-props#flex",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        })
      }), " 属性决定元素在主轴上如何", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "填满"
      }), "可用区域。整个区域会根据每个元素设置的 flex 属性值被分割成多个部分。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在下面的例子中，在设置了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex: 1"
      }), "的容器 view 中，有红色，黄色和绿色三个子 view。红色 view 设置了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex: 1"
      }), "，黄色 view 设置了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex: 2"
      }), "，绿色 view 设置了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex: 3"
      }), "。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1+2+3 = 6"
      }), "，这意味着红色 view 占据整个区域的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1/6"
      }), "，黄色 view 占据整个区域的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "2/6"
      }), "，绿色 view 占据整个区域的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "3/6"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Example",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Flex%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7B%5Cn%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60flexDirection%60%20to%20%60%5C%22row%5C%22%60.%5Cn%20%20%20%20%20%20flexDirection%3A%20%5C%22column%5C%22%5Cn%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20backgroundColor%3A%20%5C%22red%5C%22%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%202%2C%20backgroundColor%3A%20%5C%22darkorange%5C%22%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%203%2C%20backgroundColor%3A%20%5C%22green%5C%22%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20Flex%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "flex-direction",
      children: "Flex Direction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在组件的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style"
      }), "中指定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexDirection"
      }), "可以决定布局的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "主轴"
      }), "。子元素是应该沿着**水平轴(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "row"
      }), ")", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "方向排列，还是沿着"
      }), "竖直轴(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "column"
      }), ")", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "方向排列呢？默认值是"
      }), "竖直轴(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "column"
      }), ")**方向。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "column"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "）：将子元素从上到下对齐。如果启用换行，则下一行将从容器顶部的第一个项目右侧开始。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "row"
          }), "：将子元素从左到右对齐。如果启用换行，则下一行将在容器左侧的第一个项目下方开始。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "column-reverse"
          }), "：将子元素从底部向上对齐。如果启用换行，则下一行将从容器底部的第一个项目右侧开始。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "row-reverse"
          }), "：将子元素从右到左对齐。如果启用换行，则下一行将在容器右侧的第一个项目下方开始。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex-direction",
        children: "这里"
      }), "了解更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Direction",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20FlexDirectionBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BflexDirection%2C%20setflexDirection%5D%20%3D%20useState(%5C%22column%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22flexDirection%5C%22%5Cn%20%20%20%20%20%20values%3D%7B%5B%5C%22column%5C%22%2C%20%5C%22row%5C%22%2C%20%5C%22row-reverse%5C%22%2C%20%5C%22column-reverse%5C%22%5D%7D%5Cn%20%20%20%20%20%20selectedValue%3D%7BflexDirection%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetflexDirection%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22powderblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22steelblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20FlexDirectionBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "layout-direction",
      children: "Layout Direction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["布局方向指定了层次结构中的子元素和文本应该被排列的方向。布局方向还会影响到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "end"
      }), "所指代的边缘。默认情况下，React Native 采用从左到右（LTR）的布局方向进行排列。在这种模式下，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start"
      }), "表示左侧，而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "end"
      }), "表示右侧。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "LTR（默认值）"
          }), ": 文本和子元素从左到右进行排列。对于一个元素来说，在其起始位置应用的外边距和内边距将被应用在左侧。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RTL"
          }), ": 文本和子元素从右到左进行排列。对于一个元素来说，在其起始位置应用的外边距和内边距将被应用在右侧。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Direction",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20TouchableOpacity%2C%20Text%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20DirectionLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bdirection%2C%20setDirection%5D%20%3D%20useState(%5C%22ltr%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22direction%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7Bdirection%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5C%22ltr%5C%22%2C%20%5C%22rtl%5C%22%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetDirection%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22powderblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22steelblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DirectionLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "justify-content",
      children: "Justify Content"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在组件的 style 中指定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "justifyContent"
      }), "可以决定其子元素沿着", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "主轴"
      }), "的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "排列方式"
      }), "。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？可用的选项有："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-start"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "）将容器中的子元素沿主轴起始位置对齐。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), " 将容器中的子元素沿主轴末尾位置对齐。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), " 将容器中的子元素在主轴上居中对齐。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), " 在容器的主轴上均匀分布子元素，将剩余空间平均分配给子元素之间。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " 在容器的主轴上均匀分布子元素，将剩余空间围绕在每个子元素周围。与", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), "相比，使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), "会导致空间被分配到第一个子元素和最后一个子元素之前和之后。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-evenly"
          }), " 在对齐容器内沿着主轴均匀分布子项。每一对相邻项、主开始边缘和第一项以及主结束边缘和最后一项之间的间距都完全相同。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/justify-content",
        children: "这里"
      }), "了解更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Justify Content",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20TouchableOpacity%2C%20Text%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20JustifyContentBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BjustifyContent%2C%20setJustifyContent%5D%20%3D%20useState(%5C%22flex-start%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22justifyContent%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7BjustifyContent%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22space-between%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22space-evenly%5C%22%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetJustifyContent%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22powderblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22steelblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20JustifyContentBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "align-items",
      children: "Align Items"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在组件的 style 中指定", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), "可以决定其子元素沿着", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "次轴"
      }), "（与主轴垂直的轴，比如若主轴方向为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "row"
      }), "，则次轴方向为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "column"
      }), "）的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "排列方式"
      }), "。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？可用的选项有："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stretch"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "）：将容器的子元素拉伸以匹配容器次轴的高度。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-start"
          }), "：将容器的子元素对齐到容器次轴的起始位置。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), "：将容器的子元素对齐到容器次轴的末尾位置。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), "：将容器的子元素居中对齐于容器次轴上。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "baseline"
          }), "：沿着公共基线对齐容器的子元素。可以为各个子元素设置参考基线，作为其父级基线。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      title: "提示",
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["要使", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stretch"
        }), "选项生效，子元素在次轴方向上不能有固定尺寸。例如下面这段代码: 只有当从子元素样式中移除了'width: 50'后, 'alignItems: 'stretch'' 才会生效."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/align-items",
        children: "此处"
      }), "了解更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Align Items",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20AlignItemsLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BalignItems%2C%20setAlignItems%5D%20%3D%20useState(%5C%22stretch%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22alignItems%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7BalignItems%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%5C%22stretch%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22baseline%5C%22%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetAlignItems%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22powderblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22steelblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20%5C%22auto%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20minWidth%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%5Cn%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20styles.container%2C%5Cn%20%20%20%20%20%20%20%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20minHeight%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AlignItemsLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "align-self",
      children: "Align Self"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignSelf"
      }), "（布局属性#alignself）与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), " 具有相同的选项和效果，但不是影响容器内的子元素，而是可以将此属性应用于单个子元素以更改其在父级中的对齐方式。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignSelf"
      }), " 会覆盖由父级设置的任何使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), " 的选项。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Align Self",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20TouchableOpacity%2C%20Text%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20AlignSelfLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BalignSelf%2C%20setAlignSelf%5D%20%3D%20useState(%5C%22stretch%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22alignSelf%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7BalignSelf%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5C%22stretch%5C%22%2C%20%5C%22flex-start%5C%22%2C%20%5C%22flex-end%5C%22%2C%20%5C%22center%5C%22%2C%20%5C%22baseline%5C%22%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetAlignSelf%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20alignSelf%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20%5C%22auto%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20minWidth%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22powderblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22steelblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20minHeight%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AlignSelfLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "align-content",
      children: "Align Content"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "layout-props#aligncontent",
        children: "alignContent"
      }), " 定义了沿次轴分布行的方式。只有在使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexWrap"
      }), " 将项目换行到多个行时才会生效。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-start"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "）：将换行后的行与容器的次轴起始位置对齐。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), "：将换行后的行与容器的次轴末尾位置对齐。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stretch"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "在 Web 上使用 Yoga 时的默认值"
          }), "）：拉伸换行后的行以匹配容器的次轴高度。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), "：将换行后的行居中对齐于容器的次轴。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), "：均匀地在容器的次轴上间隔排列换行后的各个线，使剩余空间平均分布在这些线之间。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), "：均匀地在容器的次轴上间隔排列换行后各个线，使剩余空间平均分布在这些线周围。相较于使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), "，使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " 会导致空白区域被分配到第一条线和最后一条线之前及之后两端。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/align-content",
        children: "点击此处"
      }), "了解更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Align Content",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20TouchableOpacity%2C%20Text%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20AlignContentLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BalignContent%2C%20setAlignContent%5D%20%3D%20useState(%5C%22flex-start%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22alignContent%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7BalignContent%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22stretch%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22space-between%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetAlignContent%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22orangered%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22orange%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumseagreen%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22deepskyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumturquoise%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumslateblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22purple%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%5Cn%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20styles.container%2C%5Cn%20%20%20%20%20%20%20%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20maxHeight%3A%20400%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2080%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AlignContentLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "flex-wrap",
      children: "Flex Wrap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexWrap"
      }), "属性用于设置容器的换行方式，它控制了当子元素超出容器在主轴上的尺寸时要如何处理。默认情况下，子元素被强制放置在一行中（这可能会使元素被挤压）。如果允许换行，则项目将根据需要沿主轴分为多行。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在换行时，可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignContent"
      }), "来设置这些行在容器中的排列方式。详细信息请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex-wrap",
        children: "此处"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Wrap",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20TouchableOpacity%2C%20Text%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20FlexWrapLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BflexWrap%2C%20setFlexWrap%5D%20%3D%20useState(%5C%22wrap%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22flexWrap%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7BflexWrap%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5C%22wrap%5C%22%2C%20%5C%22nowrap%5C%22%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetFlexWrap%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22orangered%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22orange%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumseagreen%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22deepskyblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumturquoise%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22mediumslateblue%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20%7B%20backgroundColor%3A%20%5C%22purple%5C%22%20%7D%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%5Cn%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20styles.container%2C%5Cn%20%20%20%20%20%20%20%20%7B%20%5Blabel%5D%3A%20selectedValue%20%7D%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%7Bchildren%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20maxHeight%3A%20400%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2080%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20FlexWrapLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "flex-basis-grow-以及-shrink",
      children: "Flex Basis, Grow, 以及 Shrink"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#flexbasis",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexBasis"
            })
          }), " 是一种独立于轴线的方式，用于提供项目沿主轴的默认大小。如果父容器具有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexDirection: row"
          }), "，则设置子项的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexBasis"
          }), " 类似于设置该子项的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "width"
          }), "；如果父容器具有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexDirection: column"
          }), "，则设置子项的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexBasis"
          }), " 类似于设置该子项的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "height"
          }), "。项目的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexBasis"
          }), " 是在执行任何 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " 计算之前该项目的默认大小。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#flexgrow",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexGrow"
            })
          }), " 描述了在主轴上如何分配容器中剩余空间给其子项。布局完其子项后，容器将根据其子项指定的 flex grow 值来分配任何剩余空间。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " 接受大于等于 0 的任意浮点数值，默认值为 0。容器将按照各个子项的 flex grow 值加权分配剩余空间给它们。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#fleshrink",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexShrink"
            })
          }), " 描述了当所有子项总尺寸超过主轴上容器尺寸时，在溢出情况下如何收缩各个子项。如果将溢出尺寸视为负剩余空间，则可以认为 flex shrink 和 flex grow 的工作方式非常相似。这两个属性也能很好地配合使用，允许子项根据需要进行伸缩。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " 接受大于等于 0 的任意浮点数值，默认值为 0（在 Web 上，默认值为 1）。容器将按照各个子项的 flex shrink 值加权收缩它们。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex",
        children: "这里"
      }), "了解更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flex Basis, Grow, and Shrink",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Text%2C%5Cn%20%20TextInput%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bpowderblue%2C%20setPowderblue%5D%20%3D%20useState(%7B%5Cn%20%20%20%20flexGrow%3A%200%2C%5Cn%20%20%20%20flexShrink%3A%201%2C%5Cn%20%20%20%20flexBasis%3A%20%5C%22auto%5C%22%2C%5Cn%20%20%7D)%3B%5Cn%20%20const%20%5Bskyblue%2C%20setSkyblue%5D%20%3D%20useState(%7B%5Cn%20%20%20%20flexGrow%3A%201%2C%5Cn%20%20%20%20flexShrink%3A%200%2C%5Cn%20%20%20%20flexBasis%3A%20100%2C%5Cn%20%20%7D)%3B%5Cn%20%20const%20%5Bsteelblue%2C%20setSteelblue%5D%20%3D%20useState(%7B%5Cn%20%20%20%20flexGrow%3A%200%2C%5Cn%20%20%20%20flexShrink%3A%201%2C%5Cn%20%20%20%20flexBasis%3A%20200%2C%5Cn%20%20%7D)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.container%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20alignContent%3A%20%5C%22space-between%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CBoxInfo%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22powderblue%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%7B...powderblue%7D%5Cn%20%20%20%20%20%20%20%20%20%20setStyle%3D%7BsetPowderblue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CBoxInfo%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22skyblue%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%7B...skyblue%7D%5Cn%20%20%20%20%20%20%20%20%20%20setStyle%3D%7BsetSkyblue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CBoxInfo%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22steelblue%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%7B...steelblue%7D%5Cn%20%20%20%20%20%20%20%20%20%20setStyle%3D%7BsetSteelblue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.previewContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexBasis%3A%20powderblue.flexBasis%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexGrow%3A%20powderblue.flexGrow%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexShrink%3A%20powderblue.flexShrink%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22powderblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexBasis%3A%20skyblue.flexBasis%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexGrow%3A%20skyblue.flexGrow%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexShrink%3A%20skyblue.flexShrink%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22skyblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexBasis%3A%20steelblue.flexBasis%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexGrow%3A%20steelblue.flexGrow%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexShrink%3A%20steelblue.flexShrink%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22steelblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20BoxInfo%20%3D%20(%7B%5Cn%20%20color%2C%5Cn%20%20flexBasis%2C%5Cn%20%20flexShrink%2C%5Cn%20%20setStyle%2C%5Cn%20%20flexGrow%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%5Bstyles.row%2C%20%7B%20flexDirection%3A%20%5C%22column%5C%22%20%7D%5D%7D%3E%5Cn%20%20%20%20%3CView%5Cn%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20styles.boxLabel%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20color%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20color%3A%20%5C%22%23fff%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20Box%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EflexBasis%3C%2FText%3E%5Cn%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20value%3D%7BflexBasis%7D%5Cn%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20onChangeText%3D%7B(fB)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setStyle((value)%20%3D%3E%20(%7B%5Cn%20%20%20%20%20%20%20%20%20%20...value%2C%5Cn%20%20%20%20%20%20%20%20%20%20flexBasis%3A%20isNaN(parseInt(fB))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%5C%22auto%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3A%20parseInt(fB)%2C%5Cn%20%20%20%20%20%20%20%20%7D))%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EflexShrink%3C%2FText%3E%5Cn%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20value%3D%7BflexShrink%7D%5Cn%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20onChangeText%3D%7B(fS)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setStyle((value)%20%3D%3E%20(%7B%5Cn%20%20%20%20%20%20%20%20%20%20...value%2C%5Cn%20%20%20%20%20%20%20%20%20%20flexShrink%3A%20isNaN(parseInt(fS))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%5C%22%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3A%20parseInt(fS)%2C%5Cn%20%20%20%20%20%20%20%20%7D))%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EflexGrow%3C%2FText%3E%5Cn%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20value%3D%7BflexGrow%7D%5Cn%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20onChangeText%3D%7B(fG)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20setStyle((value)%20%3D%3E%20(%7B%5Cn%20%20%20%20%20%20%20%20%20%20...value%2C%5Cn%20%20%20%20%20%20%20%20%20%20flexGrow%3A%20isNaN(parseInt(fG))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%5C%22%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3A%20parseInt(fG)%2C%5Cn%20%20%20%20%20%20%20%20%7D))%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20boxLabel%3A%20%7B%5Cn%20%20%20%20minWidth%3A%2080%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20marginTop%3A%206%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22100%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20previewContainer%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20borderBottomWidth%3A%201%2C%5Cn%20%20%20%20paddingVertical%3A%203%2C%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "row-gap-column-gap-以及-gap",
      children: "Row Gap, Column Gap 以及 Gap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#rowgap",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rowGap"
            })
          }), " 设置元素行之间的间隙（gutter）大小。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#columngap",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "columnGap"
            })
          }), " 设置元素列之间的间隙（gutter）大小。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#gap",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "gap"
            })
          }), " 设置行和列之间的间隙（gutter）大小。它是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "rowGap"
          }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "columnGap"
          }), " 的简写形式。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您可以使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexWrap"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignContent"
      }), " 以及 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gap"
      }), " 来为项目添加一致的间距。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "language",
      queryString: true,
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultSnackLanguage),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().snackLanguages),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "javascript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Row Gap and Column Gap",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Text%2C%20StyleSheet%2C%20TextInput%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20RowGapAndColumnGap%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BrowGap%2C%20setRowGap%5D%20%3D%20useState(10)%3B%5Cn%20%20const%20%5BcolumnGap%2C%20setColumnGap%5D%20%3D%20useState(10)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20columnGap%3D%7BcolumnGap%7D%5Cn%20%20%20%20%20%20handleColumnGapChange%3D%7BsetColumnGap%7D%5Cn%20%20%20%20%20%20rowGap%3D%7BrowGap%7D%5Cn%20%20%20%20%20%20handleRowGapChange%3D%7BsetRowGap%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box1%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box2%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box3%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box4%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box5%5D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20children%2C%5Cn%20%20handleColumnGapChange%2C%5Cn%20%20handleRowGapChange%2C%5Cn%20%20rowGap%2C%5Cn%20%20columnGap%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.previewContainer%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.inputContainer%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.itemsCenter%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ERow%20Gap%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BrowGap%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Bv%20%3D%3E%20handleRowGapChange(Number(v))%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.itemsCenter%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColumn%20Gap%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BcolumnGap%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Bv%20%3D%3E%20handleColumnGapChange(Number(v))%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7BrowGap%2C%20columnGap%7D%5D%7D%3E%7Bchildren%7D%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20itemsCenter%3A%20%7BalignItems%3A%20'center'%7D%2C%5Cn%20%20inputContainer%3A%20%7B%5Cn%20%20%20%20gap%3A%204%2C%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%7D%2C%5Cn%20%20previewContainer%3A%20%7Bpadding%3A%2010%2C%20flex%3A%201%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20borderBottomWidth%3A%201%2C%5Cn%20%20%20%20paddingVertical%3A%203%2C%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20'aliceblue'%2C%5Cn%20%20%20%20maxHeight%3A%20400%2C%5Cn%20%20%20%20flexWrap%3A%20'wrap'%2C%5Cn%20%20%20%20alignContent%3A%20'flex-start'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2080%2C%5Cn%20%20%7D%2C%5Cn%20%20box1%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'orangered'%2C%5Cn%20%20%7D%2C%5Cn%20%20box2%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'orange'%2C%5Cn%20%20%7D%2C%5Cn%20%20box3%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'mediumseagreen'%2C%5Cn%20%20%7D%2C%5Cn%20%20box4%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'deepskyblue'%2C%5Cn%20%20%7D%2C%5Cn%20%20box5%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'mediumturquoise'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20RowGapAndColumnGap%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android,web",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "typescript",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Row Gap and Column Gap",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Text%2C%20StyleSheet%2C%20TextInput%7D%20from%20'react-native'%3B%5Cnimport%20type%20%7BPropsWithChildren%7D%20from%20'react'%3B%5Cn%5Cnconst%20RowGapAndColumnGap%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BrowGap%2C%20setRowGap%5D%20%3D%20useState(10)%3B%5Cn%20%20const%20%5BcolumnGap%2C%20setColumnGap%5D%20%3D%20useState(10)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20columnGap%3D%7BcolumnGap%7D%5Cn%20%20%20%20%20%20handleColumnGapChange%3D%7BsetColumnGap%7D%5Cn%20%20%20%20%20%20rowGap%3D%7BrowGap%7D%5Cn%20%20%20%20%20%20handleRowGapChange%3D%7BsetRowGap%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box1%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box2%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box3%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box4%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20styles.box5%5D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cntype%20PreviewLayoutProps%20%3D%20PropsWithChildren%3C%7B%5Cn%20%20columnGap%3A%20number%3B%5Cn%20%20handleColumnGapChange%3A%20(gap%3A%20number)%20%3D%3E%20void%3B%5Cn%20%20rowGap%3A%20number%3B%5Cn%20%20handleRowGapChange%3A%20(gap%3A%20number)%20%3D%3E%20void%3B%5Cn%7D%3E%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20children%2C%5Cn%20%20handleColumnGapChange%2C%5Cn%20%20handleRowGapChange%2C%5Cn%20%20rowGap%2C%5Cn%20%20columnGap%2C%5Cn%7D%3A%20PreviewLayoutProps)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.previewContainer%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.inputContainer%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.itemsCenter%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ERow%20Gap%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BString(rowGap)%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Bv%20%3D%3E%20handleRowGapChange(Number(v))%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.itemsCenter%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColumn%20Gap%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BString(columnGap)%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Bv%20%3D%3E%20handleColumnGapChange(Number(v))%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20%7BrowGap%2C%20columnGap%7D%5D%7D%3E%7Bchildren%7D%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20itemsCenter%3A%20%7BalignItems%3A%20'center'%7D%2C%5Cn%20%20inputContainer%3A%20%7B%5Cn%20%20%20%20gap%3A%204%2C%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%7D%2C%5Cn%20%20previewContainer%3A%20%7Bpadding%3A%2010%2C%20flex%3A%201%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20borderBottomWidth%3A%201%2C%5Cn%20%20%20%20paddingVertical%3A%203%2C%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20'aliceblue'%2C%5Cn%20%20%20%20maxHeight%3A%20400%2C%5Cn%20%20%20%20flexWrap%3A%20'wrap'%2C%5Cn%20%20%20%20alignContent%3A%20'flex-start'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2080%2C%5Cn%20%20%7D%2C%5Cn%20%20box1%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'orangered'%2C%5Cn%20%20%7D%2C%5Cn%20%20box2%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'orange'%2C%5Cn%20%20%7D%2C%5Cn%20%20box3%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'mediumseagreen'%2C%5Cn%20%20%7D%2C%5Cn%20%20box4%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'deepskyblue'%2C%5Cn%20%20%7D%2C%5Cn%20%20box5%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'mediumturquoise'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20RowGapAndColumnGap%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android,web",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "宽度与高度",
      children: "宽度与高度"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "width"
      }), "属性指定元素内容区域的宽度。同样，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "height"
      }), "属性指定元素内容区域的高度。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "width"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "height"
      }), "都可以取以下值："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "auto"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "）React Native 根据元素的内容计算其宽度/高度，无论是其他子元素、文本还是图像。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "pixels"
          }), "以绝对像素定义宽度/高度。根据组件上设置的其他样式，这可能是节点最终尺寸也可能不是。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "percentage"
          }), "分别以父级宽度或高度的百分比定义宽度或高度。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Width and Height",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20WidthHeightBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BwidthType%2C%20setWidthType%5D%20%3D%20useState(%5C%22auto%5C%22)%3B%5Cn%20%20const%20%5BheightType%2C%20setHeightType%5D%20%3D%20useState(%5C%22auto%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20widthType%3D%7BwidthType%7D%5Cn%20%20%20%20%20%20heightType%3D%7BheightType%7D%5Cn%20%20%20%20%20%20widthValues%3D%7B%5B%5C%22auto%5C%22%2C%20300%2C%20%5C%2280%25%5C%22%5D%7D%5Cn%20%20%20%20%20%20heightValues%3D%7B%5B%5C%22auto%5C%22%2C%20200%2C%20%5C%2260%25%5C%22%5D%7D%5Cn%20%20%20%20%20%20setWidthType%3D%7BsetWidthType%7D%5Cn%20%20%20%20%20%20setHeightType%3D%7BsetHeightType%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20heightType%2C%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20widthType%2C%5Cn%20%20%20%20%20%20%20%20%20%20padding%3A%2015%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%20backgroundColor%3A%20%5C%22powderblue%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%20backgroundColor%3A%20%5C%22skyblue%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%20backgroundColor%3A%20%5C%22steelblue%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20children%2C%5Cn%20%20widthType%2C%5Cn%20%20heightType%2C%5Cn%20%20widthValues%2C%5Cn%20%20heightValues%2C%5Cn%20%20setWidthType%2C%5Cn%20%20setHeightType%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2010%20%7D%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3Ewidth%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BwidthValues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setWidthType(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20widthType%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20widthType%20%3D%3D%3D%20value%20%26%26%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3Eheight%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BheightValues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setHeightType(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20heightType%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20heightType%20%3D%3D%3D%20value%20%26%26%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%7Bchildren%7D%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginRight%3A%2010%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20shadowOpacity%3A%200%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20WidthHeightBasics%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "绝对与相对定位",
      children: "绝对与相对定位"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "position"
      }), " 类型定义了元素在其父元素中的定位方式。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "relative"
          }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), "） 默认情况下，一个元素是相对定位的。这意味着一个元素根据布局的正常流程进行定位，然后根据 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "top"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "right"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "bottom"
          }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "left"
          }), " 的值进行偏移。该偏移不会影响任何兄弟或父级元素的位置。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "absolute"
          }), " 绝对定位时，一个元素不参与正常布局流程。它独立于其兄弟元素进行布局。位置是基于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "top"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "right"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "bottom"
          }), ", 和 'left' 值来确定的。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Absolute & Relative Layout",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20PositionLayout%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bposition%2C%20setPosition%5D%20%3D%20useState(%5C%22relative%5C%22)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CPreviewLayout%5Cn%20%20%20%20%20%20label%3D%5C%22position%5C%22%5Cn%20%20%20%20%20%20selectedValue%3D%7Bposition%7D%5Cn%20%20%20%20%20%20values%3D%7B%5B%5C%22relative%5C%22%2C%20%5C%22absolute%5C%22%5D%7D%5Cn%20%20%20%20%20%20setSelectedValue%3D%7BsetPosition%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2025%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2025%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20position%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22powderblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20position%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22skyblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2075%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2075%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20position%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5C%22steelblue%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FPreviewLayout%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20PreviewLayout%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20children%2C%5Cn%20%20values%2C%5Cn%20%20selectedValue%2C%5Cn%20%20setSelectedValue%2C%5Cn%7D)%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%7B%20padding%3A%2010%2C%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.row%7D%3E%5Cn%20%20%20%20%20%20%7Bvalues.map((value)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20key%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setSelectedValue(value)%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.button%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%20styles.selected%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.buttonLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%20%3D%3D%3D%20value%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.selectedLabel%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%7Bchildren%7D%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22aliceblue%5C%22%2C%5Cn%20%20%20%20minHeight%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20flexWrap%3A%20%5C%22wrap%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%206%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22oldlace%5C%22%2C%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%20%5C%221%25%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%206%2C%5Cn%20%20%20%20minWidth%3A%20%5C%2248%25%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selected%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonLabel%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22500%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22coral%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20selectedLabel%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20PositionLayout%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "深入学习",
      children: "深入学习"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Check out the interactive ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/playground",
        children: "yoga playground"
      }), " that you can use to get a better understanding of flexbox."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以上我们已经介绍了一些基础知识，但要运用好布局，我们还需要很多其他的样式。对于布局有影响的完整样式列表记录在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.75/layout-props",
        children: "这篇文档中"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们已经差不多可以开始真正的开发工作了。哦，忘了还有个常用的知识点：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.75/handling-text-input",
        children: "如何使用 TextInput 组件来处理用户输入"
      }), "。"]
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