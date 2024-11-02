"use strict";
exports.id = 20953;
exports.ids = [20953];
exports.modules = {

/***/ 4249:
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
	id: 'handling-touches',
	title: '处理触摸事件'
};
const contentTitle = undefined;
const metadata = {
  "id": "handling-touches",
  "title": "处理触摸事件",
  "description": "移动应用上的用户交互基本靠“摸”。当然，“摸”也是有各种姿势的：在一个按钮上点击，在一个列表上滑动，或是在一个地图上缩放。React Native 提供了可以处理常见触摸手势（例如点击或滑动）的组件， 以及可用于识别更复杂的手势的完整的手势响应系统。",
  "source": "@site/versioned_docs/version-0.72/handling-touches.md",
  "sourceDirName": ".",
  "slug": "/handling-touches",
  "permalink": "/docs/0.72/handling-touches",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/handling-touches.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "handling-touches",
    "title": "处理触摸事件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "颜色",
    "permalink": "/docs/0.72/colors"
  },
  "next": {
    "title": "使用导航器跳转页面",
    "permalink": "/docs/0.72/navigation"
  }
};
const assets = {

};



const toc = [{
  "value": "显示一个简单的按钮",
  "id": "显示一个简单的按钮",
  "level": 2
}, {
  "value": "Touchable 系列组件",
  "id": "touchable-系列组件",
  "level": 2
}, {
  "value": "在列表中上下滑动、在视图上左右滑动以及双指缩放",
  "id": "在列表中上下滑动在视图上左右滑动以及双指缩放",
  "level": 2
}, {
  "value": "Known issues",
  "id": "known-issues",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    img: "img",
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
      children: ["移动应用上的用户交互基本靠“摸”。当然，“摸”也是有各种姿势的：在一个按钮上点击，在一个列表上滑动，或是在一个地图上缩放。React Native 提供了可以处理常见触摸手势（例如点击或滑动）的组件， 以及可用于识别更复杂的手势的完整的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.72/gesture-responder-system",
        children: "手势响应系统"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "显示一个简单的按钮",
      children: "显示一个简单的按钮"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.72/button",
        children: "Button"
      }), "是一个简单的跨平台的按钮组件。下面是一个最简示例："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Button\n  onPress={() => {\n    Alert.alert('你点击了按钮！');\n  }}\n  title=\"点我！\"\n/>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "上面这段代码会在 iOS 上渲染一个蓝色的标签状按钮，在 Android 上则会渲染一个蓝色圆角矩形带白字的按钮。点击这个按钮会调用\"onPress\"函数，具体作用就是显示一个 alert 弹出框。你还可以指定\"color\"属性来修改按钮的颜色。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: (__webpack_require__(23465)/* ["default"] */ .A) + "",
        width: "467",
        height: "97"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["再试试下面这个使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Button"
      }), "的例子吧。你可以点击\"Tap to Play\"来预览真实效果。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Button Basics",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Alert%2C%20Button%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20class%20ButtonBasics%20extends%20Component%20%7B%5Cn%20%20_onPressButton()%20%7B%5Cn%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Press%20Me%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Press%20Me%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23841584%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.alternativeLayoutButtonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22This%20looks%20great!%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22OK!%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23841584%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20flex%3A%201%2C%5Cn%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%5Cn%20%20%7D%2C%5Cn%20%20alternativeLayoutButtonContainer%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%5Cn%20%20%7D%5Cn%7D)%5Cn%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "touchable-系列组件",
      children: "Touchable 系列组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个组件的样式是固定的。所以如果它的外观并不怎么搭配你的设计，那就需要使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableOpacity"
      }), "或是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableNativeFeedback"
      }), "组件来定制自己所需要的按钮，视频教程", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://v.youku.com/v_show/id_XMTQ5OTE3MjkzNg==.html?f=26822355&from=y1.7-1.3",
        children: "如何制作一个按钮"
      }), "讲述了完整的过程。或者你也可以在 github.com 网站上搜索 'react native button' 来看看社区其他人的作品。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "具体使用哪种组件，取决于你希望给用户什么样的视觉反馈："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["一般来说，你可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/docs/0.72/touchablehighlight",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "TouchableHighlight"
            })
          }), "来制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["在 Android 上还可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/docs/0.72/touchablenativefeedback",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "TouchableNativeFeedback"
            })
          }), "，它会在用户手指按下时形成类似墨水涟漪的视觉效果。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/docs/0.72/touchableopacity",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "TouchableOpacity"
            })
          }), "会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/docs/0.72/touchablewithoutfeedback",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "TouchableWithoutFeedback"
            })
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["某些场景中你可能需要检测用户是否进行了长按操作。可以在上面列出的任意组件中使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onLongPress"
      }), "属性来实现。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们来看一下示例："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Touchables",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Alert%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20TouchableOpacity%2C%20TouchableNativeFeedback%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20class%20Touchables%20extends%20Component%20%7B%5Cn%20%20_onPressButton()%20%7B%5Cn%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%5Cn%20%20%7D%5Cn%5Cn%20%20_onLongPressButton()%20%7B%5Cn%20%20%20%20Alert.alert('You%20long-pressed%20the%20button!')%5Cn%20%20%7D%5Cn%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20underlayColor%3D%5C%22white%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableHighlight%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPressButton%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableOpacity%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableNativeFeedback%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20background%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20TouchableNativeFeedback.SelectableBackground()%20%3A%20''%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableNativeFeedback%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableWithoutFeedback%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20onLongPress%3D%7Bthis._onLongPressButton%7D%20underlayColor%3D%5C%22white%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchable%20with%20Long%20Press%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2060%2C%5Cn%20%20%20%20alignItems%3A%20'center'%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20marginBottom%3A%2030%2C%5Cn%20%20%20%20width%3A%20260%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%232196F3'%5Cn%20%20%7D%2C%5Cn%20%20buttonText%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20color%3A%20'white'%5Cn%20%20%7D%5Cn%7D)%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "android",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "在列表中上下滑动在视图上左右滑动以及双指缩放",
      children: "在列表中上下滑动、在视图上左右滑动以及双指缩放"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["另一个在移动应用中常见的手势就是滑动。用户会在列表中上下滑动，或是在视图上左右滑动。要处理这样的手势，你可以看一下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.72/using-a-scrollview",
        children: "如何使用滚动视图"
      }), "这篇文档。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "known-issues",
      children: "Known issues"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/issues/29308#issuecomment-792864162",
          children: "react-native#29308"
        }), ": The touch area never extends past the parent view bounds and on Android negative margin is not supported."]
      }), "\n"]
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

/***/ 23465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png");

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