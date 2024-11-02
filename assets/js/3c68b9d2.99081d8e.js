"use strict";
exports.id = 74722;
exports.ids = [74722];
exports.modules = {

/***/ 75291:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43023);
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68472);


const frontMatter = {
	id: 'direct-manipulation',
	title: '直接操作'
};
const contentTitle = undefined;
const metadata = {
  "id": "direct-manipulation",
  "title": "直接操作",
  "description": "有时候我们需要直接改动组件并触发局部的刷新，但不使用 state 或是 props。譬如在浏览器中使用 React 库，有时候会需要直接修改一个 DOM 节点，而在手机 App 中操作 View 时也会碰到同样的情况。在 React Native 中，setNativeProps就是等价于直接操作 DOM 节点的方法。",
  "source": "@site/versioned_docs/version-0.70/direct-manipulation.md",
  "sourceDirName": ".",
  "slug": "/direct-manipulation",
  "permalink": "/docs/0.70/direct-manipulation",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/direct-manipulation.md",
  "tags": [],
  "version": "0.70",
  "frontMatter": {
    "id": "direct-manipulation",
    "title": "直接操作"
  },
  "sidebar": "docs",
  "previous": {
    "title": "iOS 原生UI组件",
    "permalink": "/docs/0.70/native-components-ios"
  },
  "next": {
    "title": "Introduction",
    "permalink": "/docs/0.70/the-new-architecture/landing-page"
  }
};
const assets = {

};




const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "setNativeProps 与 TouchableOpacity",
  "id": "setnativeprops-与-touchableopacity",
  "level": 2
}, {
  "value": "复合组件与 setNativeProps",
  "id": "复合组件与-setnativeprops",
  "level": 2
}, {
  "value": "将 setNativeProps 传递给子组件",
  "id": "将-setnativeprops-传递给子组件",
  "level": 4
}, {
  "value": "setNativeProps to clear TextInput value",
  "id": "setnativeprops-to-clear-textinput-value",
  "level": 2
}, {
  "value": "setNativeProps 与 shouldComponentUpdate",
  "id": "setnativeprops-与-shouldcomponentupdate",
  "level": 2
}, {
  "value": "其他原生方法",
  "id": "其他原生方法",
  "level": 2
}, {
  "value": "measure(callback)",
  "id": "measurecallback",
  "level": 3
}, {
  "value": "measureInWindow(callback)",
  "id": "measureinwindowcallback",
  "level": 3
}, {
  "value": "measureLayout(relativeToNativeComponentRef, onSuccess, onFail)",
  "id": "measurelayoutrelativetonativecomponentref-onsuccess-onfail",
  "level": 3
}, {
  "value": "focus()",
  "id": "focus",
  "level": 3
}, {
  "value": "blur()",
  "id": "blur",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["有时候我们需要直接改动组件并触发局部的刷新，但不使用 state 或是 props。譬如在浏览器中使用 React 库，有时候会需要直接修改一个 DOM 节点，而在手机 App 中操作 View 时也会碰到同样的情况。在 React Native 中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "就是等价于直接操作 DOM 节点的方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "什么时候使用 setNativeProps 呢？在（不得不）频繁刷新而又遇到了性能瓶颈的时候。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["直接操作组件并不是应该经常使用的工具。一般来说只是用来创建连续的动画，同时避免渲染组件结构和同步太多视图变化所带来的大量开销。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setNativeProps"
        }), "是一个“简单粗暴”的方法，它直接在底层（DOM、UIView 等）而不是 React 组件中记录 state，这样会使代码逻辑难以理清。所以在使用这个方法之前，请尽量先尝试用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setState"
        }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://facebook.github.io/react/docs/advanced-performance.html#shouldcomponentupdate-in-action",
          children: "shouldComponentUpdate"
        }), "方法来解决问题。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setnativeprops-与-touchableopacity",
      children: "setNativeProps 与 TouchableOpacity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js",
        children: "TouchableOpacity"
      }), "这个组件就在内部使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "方法来更新其子组件的透明度："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "setOpacityTo(value) {\n  // Redacted: animation related code\n  this.refs[CHILD_REF].setNativeProps({\n    opacity: value\n  });\n},\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "由此我们可以写出下面这样的代码：子组件可以响应点击事件，更改自己的透明度。而子组件自身并不需要处理这件事情，也不需要在实现中做任何修改。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<TouchableOpacity onPress={this._handlePress}>\n  <View style={styles.button}>\n    <Text>Press me!</Text>\n  </View>\n</TouchableOpacity>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果不使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "来实现这一需求，那么一种可能的办法是把透明值保存到 state 中，然后在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onPress"
      }), "事件触发时更新这个值："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "constructor(props) {\n  super(props);\n  this.state = { myButtonOpacity: 1, };\n}\n\nrender() {\n  return (\n    <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}\n                      onPressOut={() => this.setState({myButtonOpacity: 1})}>\n      <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>\n        <Text>Press me!</Text>\n      </View>\n    </TouchableOpacity>\n  )\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "比起之前的例子，这一做法会消耗大量的计算 —— 每一次透明值变更的时候 React 都要重新渲染组件结构，即便视图的其他属性和子组件并没有变化。一般来说这一开销也不足为虑，但当执行连续的动画以及响应用户手势的时候，只有正确地优化组件才能提高动画的流畅度。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你看过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/Libraries/Renderer/oss/ReactNativeRenderer-prod.js",
        children: "NativeMethodsMixin"
      }), "中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "方法的实现，你就会发现它实际是对", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTUIManager.updateView"
      }), "的封装 —— 而这正是重渲染所触发的函数调用，具体可以参看", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react/blob/master/src/renderers/native/ReactNativeBaseComponent.js",
        children: "ReactNativeBaseComponent.js 中的 receiveComponent"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "复合组件与-setnativeprops",
      children: "复合组件与 setNativeProps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["复合组件并不是单纯的由一个原生视图构成，所以你不能对其直接使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "。比如下面这个例子："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "setNativeProps with Composite Components",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%5C%22Press%20me!%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20)%5Cn%7D%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["跑这个例子会马上看到一行报错： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Touchable child must either be native or forward setNativeProps to a native component"
      }), "。这是因为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyButton"
      }), "并非直接由原生视图构成，而我们只能给原生视图设置透明值。你可以尝试这样去理解：如果你通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "React.createClass"
      }), "方法自定义了一个组件，直接给它设置样式 prop 是不会生效的，你得把样式 props 层层向下传递给子组件，直到子组件是一个能够直接定义样式的原生组件。同理，我们也需要把", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "传递给由原生组件封装的子组件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "将-setnativeprops-传递给子组件",
      children: "将 setNativeProps 传递给子组件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["具体要做的就是在我们的自定义组件中再封装一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "方法，其内容为对合适的子组件调用真正的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "方法，并传递要设置的参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Forwarding setNativeProps",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20setNativeProps%20%3D%20(nativeProps)%20%3D%3E%20%7B%5Cn%20%20%20%20_root.setNativeProps(nativeProps)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%20ref%3D%7Bcomponent%20%3D%3E%20_root%20%3D%20component%7D%20%7B...props%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%5C%22Press%20me!%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20)%5Cn%7D%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在你可以用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyButton"
      }), "来代替", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableOpacity"
      }), "了！有一点需要特别说明：这里我们使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://doc.react-china.org/docs/refs-and-the-dom.html",
        children: "ref 回调"
      }), "语法，而不是传统的字符串型 ref 引用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可能还会注意到我们在向下传递 props 时使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{...this.props}"
      }), "语法（这一用法的说明请参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://es6.ruanyifeng.com/#docs/object",
        children: "对象的扩展运算符"
      }), "）。这是因为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableOpacity"
      }), "本身其实也是个复合组件， 它除了要求在子组件上执行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), " 以外，还要求子组件对触摸事件进行处理。因此，它会传递多个 props，其中包含了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "view#onmoveshouldsetresponder",
        children: "onmoveshouldsetresponder"
      }), " 函数，这个函数需要回调给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableOpacity"
      }), "组件，以完成触摸事件的处理。与之相对的是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TouchableHighlight"
      }), "组件，它本身是由原生视图构成，因而只需要我们实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setnativeprops-to-clear-textinput-value",
      children: "setNativeProps to clear TextInput value"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Another very common use case of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), " is to clear the value of a TextInput. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "controlled"
      }), " prop of TextInput can sometimes drop characters when the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "bufferDelay"
      }), " is low and the user types very quickly. Some developers prefer to skip this prop entirely and instead use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), " to directly manipulate the TextInput value when necessary. For example, the following code demonstrates clearing the input when you tap a button:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Clear text",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20TextInput%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20clearText%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20_textInput.setNativeProps(%7Btext%3A%20''%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20ref%3D%7Bcomponent%20%3D%3E%20_textInput%20%3D%20component%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2050%2C%20width%3A%20200%2C%20marginHorizontal%3A%2020%2C%20borderWidth%3A%201%2C%20borderColor%3A%20'%23ccc'%7D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BclearText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EClear%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%7D%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "避免和-render-方法的冲突",
      children: "避免和 render 方法的冲突"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果要更新一个由 render 方法来维护的属性，则可能会碰到一些出人意料的 bug。因为每一次组件重新渲染都可能引起属性变化，这样一来，之前通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "所设定的值就被完全忽略和覆盖掉了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setnativeprops-与-shouldcomponentupdate",
      children: "setNativeProps 与 shouldComponentUpdate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom",
        children: ["巧妙运用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "shouldComponentUpdate"
        }), "方法"]
      }), "，可以避免重新渲染那些实际没有变化的子组件所带来的额外开销，此时使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setState"
      }), "的性能已经可以与", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "相媲美了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "其他原生方法",
      children: "其他原生方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The methods described here are available on most of the default components provided by React Native. Note, however, that they are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "not"
      }), " available on composite components that aren't directly backed by a native view. This will generally include most components that you define in your own app."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "measurecallback",
      children: "measure(callback)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Determines the location on screen, width, and height in the viewport of the given view and returns the values via an async callback. If successful, the callback will be called with the following arguments:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "x"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "y"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "width"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "height"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "pageX"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "pageY"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible and you don't need ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pageX"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pageY"
      }), ", consider using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.70/view#onlayout",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "onLayout"
        })
      }), " property instead."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Also the width and height returned by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "measure()"
      }), " are the width and height of the component in the viewport. If you need the actual size of the component, consider using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.70/view#onlayout",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "onLayout"
        })
      }), " property instead."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "measureinwindowcallback",
      children: "measureInWindow(callback)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Determines the location of the given view in the window and returns the values via an async callback. If the React root view is embedded in another native view, this will give you the absolute coordinates. If successful, the callback will be called with the following arguments:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "x"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "y"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "width"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "height"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "measurelayoutrelativetonativecomponentref-onsuccess-onfail",
      children: "measureLayout(relativeToNativeComponentRef, onSuccess, onFail)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "measure()"
      }), ", but measures the view relative to an ancestor, specified with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "relativeToNativeComponentRef"
      }), " reference. This means that the returned coordinates are relative to the origin ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "x"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "y"
      }), " of the ancestor view."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: This method can also be called with a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "relativeToNativeNode"
        }), " handler (instead of reference), but this variant is deprecated."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "measureLayout example",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%2C%20useRef%2C%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20textContainerRef%20%3D%20useRef(null)%3B%5Cn%20%20const%20textRef%20%3D%20useRef(null)%3B%5Cn%20%20const%20%5Bmeasure%2C%20setMeasure%5D%20%3D%20useState(null)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(textRef.current%20%26%26%20textContainerRef.current)%20%7B%5Cn%20%20%20%20%20%20textRef.current.measureLayout(%5Cn%20%20%20%20%20%20%20%20textContainerRef.current%2C%5Cn%20%20%20%20%20%20%20%20(left%2C%20top%2C%20width%2C%20height)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setMeasure(%7B%20left%2C%20top%2C%20width%2C%20height%20%7D)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%2C%20%5Bmeasure%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20ref%3D%7BtextContainerRef%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.textContainer%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20ref%3D%7BtextRef%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Where%20am%20I%3F%20(relative%20to%20the%20text%20container)%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.measure%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BJSON.stringify(measure)%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20textContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2012%2C%5Cn%20%20%7D%2C%5Cn%20%20measure%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2012%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "android,ios",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "focus",
      children: "focus()"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Requests focus for the given input or view. The exact behavior triggered will depend on the platform and type of view."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "blur",
      children: "blur()"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Removes focus from an input or view. This is the opposite of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "focus()"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 68472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "info",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-turbomodules",
        children: "TurboModule"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-fabric-components",
        children: "Fabric Components"
      }), " to achieve similar results."]
    })
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