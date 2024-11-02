"use strict";
exports.id = 25979;
exports.ids = [25979];
exports.modules = {

/***/ 13004:
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
	id: 'stylesheet',
	title: 'StyleSheet'
};
const contentTitle = undefined;
const metadata = {
  "id": "stylesheet",
  "title": "StyleSheet",
  "description": "StyleSheet 提供了一种类似 CSS 样式表的抽象。",
  "source": "@site/versioned_docs/version-0.70/stylesheet.md",
  "sourceDirName": ".",
  "slug": "/stylesheet",
  "permalink": "/docs/0.70/stylesheet",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/stylesheet.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "stylesheet",
    "title": "StyleSheet"
  },
  "sidebar": "api",
  "previous": {
    "title": "Share",
    "permalink": "/docs/0.70/share"
  },
  "next": {
    "title": "Systrace",
    "permalink": "/docs/0.70/systrace"
  }
};
const assets = {

};



const toc = [{
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "<code>compose()</code>",
  "id": "compose",
  "level": 3
}, {
  "value": "<code>create()</code>",
  "id": "create",
  "level": 3
}, {
  "value": "<code>flatten()</code>",
  "id": "flatten",
  "level": 3
}, {
  "value": "<code>setStyleAttributePreprocessor()</code>",
  "id": "setstyleattributepreprocessor",
  "level": 3
}, {
  "value": "常量",
  "id": "常量",
  "level": 2
}, {
  "value": "<code>absoluteFill</code>",
  "id": "absolutefill",
  "level": 3
}, {
  "value": "<code>absoluteFillObject</code>",
  "id": "absolutefillobject",
  "level": 3
}, {
  "value": "<code>hairlineWidth</code>",
  "id": "hairlinewidth",
  "level": 3
}, {
  "value": "<code>absoluteFill</code> vs. <code>absoluteFillObject</code>",
  "id": "absolutefill-vs-absolutefillobject",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "StyleSheet 提供了一种类似 CSS 样式表的抽象。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "StyleSheet",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EReact%20Native%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2024%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23eaeaea%5C%22%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2016%2C%5Cn%20%20%20%20paddingVertical%3A%208%2C%5Cn%20%20%20%20borderWidth%3A%204%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%2320232a%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%206%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22%2320232a%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2030%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从代码质量角度："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "从渲染函数中移除具体的样式内容，可以使代码更清晰易读。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "给样式命名也可以对渲染函数中的组件增加语义化的描述。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "文档",
      children: "文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "compose",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "compose()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static compose(style1: object, style2: object): object | array<object>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Combines two styles such that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style2"
      }), " will override any styles in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style1"
      }), ". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Compose",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bcontainer%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Btext%7D%3EReact%20Native%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20page%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2024%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2030%2C%5Cn%20%20%20%20color%3A%20'%23000'%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnconst%20lists%20%3D%20StyleSheet.create(%7B%5Cn%20%20listContainer%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%5Cn%20%20%7D%2C%5Cn%20%20listItem%3A%20%7B%5Cn%20%20%20%20fontStyle%3A%20'italic'%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnconst%20container%20%3D%20StyleSheet.compose(page.container%2C%20lists.listContainer)%3B%5Cnconst%20text%20%3D%20StyleSheet.compose(page.text%2C%20lists.listItem)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "create",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "create()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static create(obj: object): object\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Creates a StyleSheet style reference from the given object."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "flatten",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flatten()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static flatten(style: array<object>): object\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "StyleSheet.register"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "NOTE:"
        }), " Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Referring to style objects directly will deprive you of these optimizations."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Flatten",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bpage.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7BflattenStyle%7D%3EReact%20Native%3C%2FText%3E%5Cn%20%20%20%20%3CText%3EFlatten%20Style%3C%2FText%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bpage.code%7D%3E%5Cn%20%20%20%20%20%20%7BJSON.stringify(flattenStyle%2C%20null%2C%202)%7D%5Cn%20%20%20%20%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20page%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2024%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20code%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2012%2C%5Cn%20%20%20%20padding%3A%2012%2C%5Cn%20%20%20%20borderRadius%3A%208%2C%5Cn%20%20%20%20color%3A%20%5C%22%23666%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23eaeaea%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnconst%20typography%20%3D%20StyleSheet.create(%7B%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2030%2C%5Cn%20%20%20%20marginBottom%3A%2036%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnconst%20flattenStyle%20%3D%20StyleSheet.flatten(%5B%5Cn%20%20page.text%2C%5Cn%20%20typography.header%5Cn%5D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This method internally uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "StyleSheetRegistry.getStyleByID(style)"
      }), " to resolve style objects represented by IDs. Thus, an array of style objects (instances of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "StyleSheet.create()"
      }), "), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setstyleattributepreprocessor",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setStyleAttributePreprocessor()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static setStyleAttributePreprocessor(property, process)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "常量",
      children: "常量"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "absolutefill",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFill"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A very common pattern is to create overlays with position absolute and zero positioning (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"
      }), "), so ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFill"
      }), " can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "absoluteFill",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20box1%3A%20%7B%5Cn%20%20%20%20position%3A%20'absolute'%2C%5Cn%20%20%20%20top%3A%2040%2C%5Cn%20%20%20%20left%3A%2040%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'red'%5Cn%20%20%7D%2C%5Cn%20%20box2%3A%20%7B%5Cn%20%20%20%20...StyleSheet.absoluteFill%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'blue'%5Cn%20%20%7D%2C%5Cn%20%20box3%3A%20%7B%5Cn%20%20%20%20position%3A%20'absolute'%2C%5Cn%20%20%20%20top%3A%20120%2C%5Cn%20%20%20%20left%3A%20120%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'green'%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20color%3A%20'%23FFF'%2C%5Cn%20%20%20%20fontSize%3A%2080%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "absolutefillobject",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFillObject"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Sometimes you may want ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFill"
      }), " but with a couple tweaks - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFillObject"
      }), " can be used to create a customized entry in a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "StyleSheet"
      }), ", e.g.:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "absoluteFillObject",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20box1%3A%20%7B%5Cn%20%20%20%20position%3A%20'absolute'%2C%5Cn%20%20%20%20top%3A%2040%2C%5Cn%20%20%20%20left%3A%2040%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'red'%5Cn%20%20%7D%2C%5Cn%20%20box2%3A%20%7B%5Cn%20%20%20%20...StyleSheet.absoluteFill%2C%5Cn%20%20%20%20top%3A%20120%2C%5Cn%20%20%20%20left%3A%2050%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'blue'%5Cn%20%20%7D%2C%5Cn%20%20box3%3A%20%7B%5Cn%20%20%20%20...StyleSheet.absoluteFillObject%2C%5Cn%20%20%20%20top%3A%20120%2C%5Cn%20%20%20%20left%3A%20120%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'green'%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20color%3A%20'%23FFF'%2C%5Cn%20%20%20%20fontSize%3A%2080%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "hairlinewidth",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "hairlineWidth"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "hairlineWidth",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3EReact%3C%2FText%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3ENative%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2024%5Cn%20%20%7D%2C%5Cn%20%20row%3A%20%7B%5Cn%20%20%20%20padding%3A%204%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22red%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这一常量始终是一个整数的像素值（线看起来会像头发丝一样细），并会尽量符合当前平台最细的线的标准。可以用作边框或是两个元素间的分隔线。然而，你不能把它“视为一个常量”，因为不同的平台和不同的屏幕像素密度会导致不同的结果。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果模拟器缩放过，可能会看不到这么细的线。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "absolutefill-vs-absolutefillobject",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFill"
      }), " vs. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFillObject"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Currently, there is no difference between using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFill"
      }), " vs. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "absoluteFillObject"
      }), "."]
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