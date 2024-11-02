"use strict";
exports.id = 21203;
exports.ids = [21203];
exports.modules = {

/***/ 26758:
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
	id: 'flexbox',
	title: '使用 Flexbox 布局'
};
const contentTitle = undefined;
const metadata = {
  "id": "flexbox",
  "title": "使用 Flexbox 布局",
  "description": "我们在 React Native 中使用 flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构。",
  "source": "@site/versioned_docs/version-0.70/flexbox.md",
  "sourceDirName": ".",
  "slug": "/flexbox",
  "permalink": "/docs/0.70/flexbox",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/flexbox.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "flexbox",
    "title": "使用 Flexbox 布局"
  },
  "sidebar": "docs",
  "previous": {
    "title": "高度与宽度",
    "permalink": "/docs/0.70/height-and-width"
  },
  "next": {
    "title": "图片",
    "permalink": "/docs/0.70/images"
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
  "value": "Flex Basis, Grow, and Shrink",
  "id": "flex-basis-grow-and-shrink",
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
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex-direction",
        children: "here"
      }), "."]
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
      children: ["Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "end"
      }), " refer to. By default React Native lays out with LTR layout direction. In this mode ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start"
      }), " refers to left and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "end"
      }), " refers to right."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "LTR"
          }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "default value"
          }), ") Text and children and laid out from left to right. Margin and padding applied the start of an element are applied on the left side."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RTL"
          }), " Text and children and laid out from right to left. Margin and padding applied the start of an element are applied on the right side."]
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
          }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), ") Align children of a container to the start of the container's main axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), " Align children of a container to the end of the container's main axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), " Align children of a container in the center of the container's main axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), " Evenly space off children across the container's main axis, distributing the remaining space between the children."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), ", using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " will result in space being distributed to the beginning of the first child and end of the last child."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-evenly"
          }), " Evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/justify-content",
        children: "here"
      }), "."]
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
          }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "默认值"
          }), ") Stretch children of a container to match the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "height"
          }), " of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-start"
          }), " Align children of a container to the start of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), " Align children of a container to the end of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), " Align children of a container in the center of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "baseline"
          }), " Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["注意：要使", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stretch"
        }), "选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "width: 50"
        }), "去掉之后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "alignItems: 'stretch'"
        }), "才能生效。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/align-items",
        children: "here"
      }), "."]
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
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "layout-props#alignself",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "alignSelf"
        })
      }), " has the same options and effect as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), " but instead of affecting the children within a container, you can apply this property to a single child to change its alignment within its parent. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignSelf"
      }), " overrides any option set by the parent with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignItems"
      }), "."]
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
      }), " defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexWrap"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-start"
          }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "default value"
          }), ") Align wrapped lines to the start of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flex-end"
          }), " Align wrapped lines to the end of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stretch"
          }), " Stretch wrapped lines to match the height of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "center"
          }), " Align wrapped lines in the center of the container's cross axis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), " Evenly space wrapped lines across the container's main axis, distributing the remaining space between the lines."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " Evenly space wrapped lines across the container's main axis, distributing the remaining space around the lines. Compared to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-between"
          }), ", using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "space-around"
          }), " will result in space being distributed to the beginning of the first line and the end of the last line."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/align-content",
        children: "here"
      }), "."]
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
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "layout-props#flexwrap",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flexWrap"
        })
      }), " property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When wrapping lines, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "alignContent"
      }), " can be used to specify how the lines are placed in the container. Learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex-wrap",
        children: "here"
      }), "."]
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
      id: "flex-basis-grow-and-shrink",
      children: "Flex Basis, Grow, and Shrink"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#flexgrow",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexGrow"
            })
          }), " describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " accepts any floating point value >= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " values."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#flexshrink",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexShrink"
            })
          }), " describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " is very similar to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). A container will shrink its children weighted by the children’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " values."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "layout-props#flexbasis",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "flexBasis"
            })
          }), " is an axis-independent way of providing the default size of an item along the main axis. Setting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexBasis"
          }), " of a child is similar to setting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "width"
          }), " of that child if its parent is a container with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexDirection: row"
          }), " or setting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "height"
          }), " of a child if its parent is a container with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexDirection: column"
          }), ". The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexBasis"
          }), " of an item is the default size of that item, the size of the item before any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexGrow"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "flexShrink"
          }), " calculations are performed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can learn more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://yogalayout.com/docs/flex",
        children: "here"
      }), "."]
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
      id: "宽度与高度",
      children: "宽度与高度"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "width"
      }), " property specifies the width of an element's content area. Similarly, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "height"
      }), " property specifies the height of an element's content area."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Both ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "width"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "height"
      }), " can take the following values:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "auto"
          }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "default value"
          }), ") React Native calculates the width/height for the element based on its content, whether that is other children, text, or an image."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "pixels"
          }), " Defines the width/height in absolute pixels. Depending on other styles set on the component, this may or may not be the final dimension of the node."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "percentage"
          }), " Defines the width or height in percentage of its parent's width or height, respectively."]
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
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "position"
      }), " type of an element defines how it is positioned within its parent."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "relative"
          }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "default value"
          }), ") By default, an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "top"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "right"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "bottom"
          }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "left"
          }), ". The offset does not affect the position of any sibling or parent elements."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "absolute"
          }), " When positioned absolutely, an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "top"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "right"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "bottom"
          }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "left"
          }), " values."]
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
        href: "/docs/0.70/layout-props",
        children: "这篇文档中"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们已经差不多可以开始真正的开发工作了。哦，忘了还有个常用的知识点：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.70/handling-text-input",
        children: "如何使用 TextInput 组件来处理用户输入"
      }), "。"]
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