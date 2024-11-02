"use strict";
exports.id = 18796;
exports.ids = [18796];
exports.modules = {

/***/ 8760:
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
	id: 'transforms',
	title: '变换（Transform）'
};
const contentTitle = undefined;
const metadata = {
  "id": "transforms",
  "title": "变换（Transform）",
  "description": "变换（Transform）是样式属性，可帮助您使用 2D 或 3D 变换修改组件的外观和位置。然而，即便使用了变换，使用变换的组件的布局并不会变化，因此可能会与附近的组件重叠。您可以对变换的组件、附近的组件应用边距，或对容器应用填充，以防止这种重叠。",
  "source": "@site/versioned_docs/version-0.75/transforms.md",
  "sourceDirName": ".",
  "slug": "/transforms",
  "permalink": "/docs/transforms",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/transforms.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "transforms",
    "title": "变换（Transform）"
  },
  "sidebar": "api",
  "previous": {
    "title": "Systrace",
    "permalink": "/docs/systrace"
  },
  "next": {
    "title": "Vibration",
    "permalink": "/docs/vibration"
  }
};
const assets = {

};



const toc = [{
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "Transform",
  "id": "transform",
  "level": 2
}, {
  "value": "<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",
  "id": "decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",
  "level": 3
}, {
  "value": "Transform Origin",
  "id": "transform-origin",
  "level": 2
}, {
  "value": "Values",
  "id": "values",
  "level": 3
}, {
  "value": "仅设置一个值：",
  "id": "仅设置一个值",
  "level": 4
}, {
  "value": "同时设置两个值：",
  "id": "同时设置两个值",
  "level": 4
}, {
  "value": "同时设置三个值：",
  "id": "同时设置三个值",
  "level": 4
}, {
  "value": "数组语法",
  "id": "数组语法",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "变换（Transform）是样式属性，可帮助您使用 2D 或 3D 变换修改组件的外观和位置。然而，即便使用了变换，使用变换的组件的布局并不会变化，因此可能会与附近的组件重叠。您可以对变换的组件、附近的组件应用边距，或对容器应用填充，以防止这种重叠。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Transforms",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BSafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Bscale%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BscaleX%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BscaleY%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Brotate%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BrotateX%3A%20'45deg'%7D%2C%20%7BrotateZ%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BrotateY%3A%20'45deg'%7D%2C%20%7BrotateZ%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewX%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewY%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewX%3A%20'30deg'%7D%2C%20%7BskewY%3A%20'30deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BtranslateX%3A%20-50%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BtranslateY%3A%2050%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%3C%2FSafeAreaView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20paddingBottom%3A%2060%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20'%23000'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "文档",
      children: "文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "transform",
      children: "Transform"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transform"
      }), "接受一组变换对象或以空格分隔的字符串值。每个对象都指定将作为键进行变换的属性，以及在变换中使用的值。不应组合对象。每个对象使用单个键/值对。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "旋转变换需要一个字符串，以便可以用度（deg）或弧度（rad）表示变换。例如："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transform: [{rotateX: '45deg'}, {rotateZ: '0.785398rad'}],\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "同样的效果也可以通过使用以空格分隔的字符串来实现："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transform: 'rotateX(45deg) rotateZ(0.785398rad)',\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "斜向变换需要一个字符串，以便可以用度数（度）表示变换。例如："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transform: [{skewX: '45deg'}],\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["array of objects: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{matrix: number[]}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{perspective: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{rotate: string}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{rotateX: string}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{rotateY: string}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{rotateZ: string}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{scale: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{scaleX: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{scaleY: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{translateX: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{translateY: number}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{skewX: string}"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{skewY: string}"
            }), " or string"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "No"
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "decomposedMatrix"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rotation"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "scaleX"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "scaleY"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transformMatrix"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "translateX"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "translateY"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Deprecated."
        }), " Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "transforms#transform",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "transform"
          })
        }), " prop instead."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "transform-origin",
      children: "Transform Origin"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transformOrigin"
      }), " 属性设置视图变换的原点。变换原点是应用变换的点。默认情况下，变换的原点是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "center"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "示例-1",
      children: "示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "TransformOrigin",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BAnimated%2C%20View%2C%20StyleSheet%2C%20SafeAreaView%2C%20Easing%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20rotateAnim%20%3D%20useRef(new%20Animated.Value(0)).current%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Animated.loop(%5Cn%20%20%20%20%20%20Animated.timing(rotateAnim%2C%20%7B%5Cn%20%20%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20%20%20duration%3A%205000%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.linear%2C%5Cn%20%20%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%20%20%7D)%2C%5Cn%20%20%20%20).start()%3B%5Cn%20%20%7D%2C%20%5BrotateAnim%5D)%3B%5Cn%5Cn%20%20const%20spin%20%3D%20rotateAnim.interpolate(%7B%5Cn%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%5Cn%20%20%20%20outputRange%3A%20%5B'0deg'%2C%20'360deg'%5D%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.transformOriginWrapper%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.transformOriginView%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Brotate%3A%20spin%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20transformOriginWrapper%3A%20%7B%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20borderColor%3A%20'rgba(0%2C%200%2C%200%2C%200.5)'%2C%5Cn%20%20%7D%2C%5Cn%20%20transformOriginView%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'pink'%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20transformOrigin%3A%20'top'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "values",
      children: "Values"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["变换原点支持 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "px"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "百分比"
      }), " 和关键词 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "top"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "left"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "right"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "bottom"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "center"
      }), " 的值。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transformOrigin"
      }), " 属性可以使用一个、两个或三个值进行指定，其中每个值表示一个偏移。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "仅设置一个值",
      children: "仅设置一个值："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["值必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "px"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "百分比"
        }), "或关键词", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "left"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "center"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "right"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "top"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "bottom"
        }), "之一。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transformOrigin: '20px',\n  transformOrigin: 'bottom',\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "同时设置两个值",
      children: "同时设置两个值："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["第一个值（x 偏移）必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "px"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "百分比"
        }), "或关键词", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "left"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "center"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "right"
        }), "之一。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["第二个值（y 偏移）必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "px"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "百分比"
        }), "或关键词", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "top"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "center"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "bottom"
        }), "之一。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transformOrigin: '10px 2px',\n  transformOrigin: 'left top',\n  transformOrigin: 'top right',\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "同时设置三个值",
      children: "同时设置三个值："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "第一和第二个值与两值语法相同。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["第三个值（z 偏移）必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "px"
        }), "。它始终表示 Z 偏移。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  transformOrigin: '2px 30% 10px',\n  transformOrigin: 'right bottom 20px',\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "数组语法",
      children: "数组语法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transformOrigin"
      }), " 还支持数组语法。这使得在使用动画 API 时更加方便。它还避免了字符串解析，因此应该更加高效。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  // 可以仅使用数值\n  transformOrigin: [10, 30, 40],\n  // 也可以混合使用数值和百分数\n  transformOrigin: [10, '20%', 0],\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以参考 MDN 的关于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
        children: "Transform origin"
      }), " 的指南获取额外信息。"]
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