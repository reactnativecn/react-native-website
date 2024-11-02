exports.id = 56543;
exports.ids = [56543];
exports.modules = {

/***/ 21990:
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
	id: 'animations',
	title: '动画'
};
const contentTitle = undefined;
const metadata = {
  "id": "animations",
  "title": "动画",
  "description": "流畅、有意义的动画对于移动应用用户体验来说是非常重要的。现实生活中的物体在开始移动和停下来的时候都具有一定的惯性，我们在界面中也可以使用动画来实现契合物理规律的交互。",
  "source": "@site/versioned_docs/version-0.75/animations.md",
  "sourceDirName": ".",
  "slug": "/animations",
  "permalink": "/docs/animations",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/animations.md",
  "tags": [],
  "version": "0.75",
  "frontMatter": {
    "id": "animations",
    "title": "动画"
  },
  "sidebar": "docs",
  "previous": {
    "title": "使用导航器跳转页面",
    "permalink": "/docs/navigation"
  },
  "next": {
    "title": "手势响应系统",
    "permalink": "/docs/gesture-responder-system"
  }
};
const assets = {

};






const toc = [{
  "value": "<code>Animated</code>",
  "id": "animated",
  "level": 2
}, {
  "value": "配置动画",
  "id": "配置动画",
  "level": 3
}, {
  "value": "组合动画",
  "id": "组合动画",
  "level": 3
}, {
  "value": "合成动画值",
  "id": "合成动画值",
  "level": 3
}, {
  "value": "插值",
  "id": "插值",
  "level": 3
}, {
  "value": "跟踪动态值",
  "id": "跟踪动态值",
  "level": 3
}, {
  "value": "跟踪手势",
  "id": "跟踪手势",
  "level": 3
}, {
  "value": "在<code>ScrollView</code>中使用动画事件的示例",
  "id": "在scrollview中使用动画事件的示例",
  "level": 4
}, {
  "value": "在<code>PanResponder</code>中使用动画事件的示例",
  "id": "在panresponder中使用动画事件的示例",
  "level": 4
}, {
  "value": "响应当前的动画值",
  "id": "响应当前的动画值",
  "level": 3
}, {
  "value": "启用原生动画驱动",
  "id": "启用原生动画驱动",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 4
}, {
  "value": "牢记",
  "id": "牢记",
  "level": 3
}, {
  "value": "其他例子",
  "id": "其他例子",
  "level": 3
}, {
  "value": "<code>LayoutAnimation</code> API",
  "id": "layoutanimation-api",
  "level": 2
}, {
  "value": "其他要注意的地方",
  "id": "其他要注意的地方",
  "level": 2
}, {
  "value": "<code>requestAnimationFrame</code>",
  "id": "requestanimationframe",
  "level": 3
}, {
  "value": "<code>setNativeProps</code>",
  "id": "setnativeprops",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "流畅、有意义的动画对于移动应用用户体验来说是非常重要的。现实生活中的物体在开始移动和停下来的时候都具有一定的惯性，我们在界面中也可以使用动画来实现契合物理规律的交互。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 提供了两个互补的动画系统：用于创建精细的交互控制的动画", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animations#animated-api",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Animated"
        })
      }), "和用于全局的布局动画", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animations#layoutanimation-api",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "LayoutAnimation"
        })
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "animated",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Animated"
        })
      }), "使得开发者可以简洁地实现各种各样的动画和交互方式，并且具备极高的性能。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "旨在以声明的形式来定义动画的输入与输出，在其中建立一个可配置的变化函数，然后使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start/stop"
      }), "方法来控制动画按顺序执行。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "仅封装了 6 个可以动画化的组件：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "View"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Text"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Image"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SectionList"
      }), "，不过你也可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.createAnimatedComponent()"
      }), "来封装你自己的组件。下面是一个在加载时带有淡入动画效果的视图："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "Example",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%2C%20useEffect%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Animated%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FadeInView%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20const%20fadeAnim%20%3D%20useRef(new%20Animated.Value(0)).current%20%20%2F%2F%20%E9%80%8F%E6%98%8E%E5%BA%A6%E5%88%9D%E5%A7%8B%E5%80%BC%E8%AE%BE%E4%B8%BA0%5Cn%5Cn%20%20React.useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Animated.timing(%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%9A%8F%E6%97%B6%E9%97%B4%E5%8F%98%E5%8C%96%E8%80%8C%E6%89%A7%E8%A1%8C%E5%8A%A8%E7%94%BB%5Cn%20%20%20%20%20%20fadeAnim%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%8A%A8%E7%94%BB%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F%E5%80%BC%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20toValue%3A%201%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%80%8F%E6%98%8E%E5%BA%A6%E6%9C%80%E7%BB%88%E5%8F%98%E4%B8%BA1%EF%BC%8C%E5%8D%B3%E5%AE%8C%E5%85%A8%E4%B8%8D%E9%80%8F%E6%98%8E%5Cn%20%20%20%20%20%20%20%20duration%3A%2010000%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E8%AE%A9%E5%8A%A8%E7%94%BB%E6%8C%81%E7%BB%AD%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20).start()%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%BC%80%E5%A7%8B%E6%89%A7%E8%A1%8C%E5%8A%A8%E7%94%BB%5Cn%20%20%7D%2C%20%5BfadeAnim%5D)%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CAnimated.View%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%BD%BF%E7%94%A8%E4%B8%93%E9%97%A8%E7%9A%84%E5%8F%AF%E5%8A%A8%E7%94%BB%E5%8C%96%E7%9A%84View%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20...props.style%2C%5Cn%20%20%20%20%20%20%20%20opacity%3A%20fadeAnim%2C%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%B0%86%E9%80%8F%E6%98%8E%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%88%B0%E5%8A%A8%E7%94%BB%E5%8F%98%E9%87%8F%E5%80%BC%5Cn%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%7Bprops.children%7D%5Cn%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cn%2F%2F%20%E7%84%B6%E5%90%8E%E4%BD%A0%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E5%83%8F%E4%BD%BF%E7%94%A8%60View%60%E9%82%A3%E6%A0%B7%E5%8E%BB%E4%BD%BF%E7%94%A8%60FadeInView%60%E4%BA%86%5Cnexport%20default%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%5Cn%20%20%20%20%20%20%3CFadeInView%20style%3D%7B%7Bwidth%3A%20250%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A%2028%2C%20textAlign%3A%20'center'%2C%20margin%3A%2010%7D%7D%3EFading%20in%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FFadeInView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%5Cn%7D%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android,web",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们来分解一下这个过程。在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FadeInView"
      }), "的构造函数里，我们创建了一个名为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fadeAnim"
      }), "的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.Value"
      }), "，并放在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "state"
      }), "中。而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "View"
      }), "的透明度是和这个值绑定的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["组件加载时，透明度首先设为 0。然后一个 easing 动画开始改变", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fadeAnim"
      }), "值，同时会导致所有与其相关联的值（本例中是透明度）也逐帧更新，最终和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fadeAnim"
      }), "一样变为 1。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这一过程经过特别优化，执行效率会远高于反复调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setState"
      }), "和多次重渲染。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "因为这一过程是纯声明式的，因此还有进一步优化的空间，比如我们可以把这些声明的配置序列化后发送到一个高优先级的线程上运行。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "配置动画",
      children: "配置动画"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "动画拥有非常灵活的配置项。自定义的或预定义的 easing 函数、延迟、持续时间、衰减系数、弹性常数等都可以在对应类型的动画中进行配置。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "提供了多种动画类型，其中最常用的要属", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#timing",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Animated.timing()"
        })
      }), "。它可以使用一些预设的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "easing"
      }), "曲线函数来控制动画值的变化速度，也支持自定义的曲线函数。动画中通常使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "easing"
      }), "曲线函数来控制物体的加速或减速变化。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "timing"
      }), "使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "easeInOut"
      }), "曲线，它使动画体逐渐加速到最大然后逐渐减速到停止。你可以通过传递", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "easing"
      }), "参数来指定不同的变化速度，还支持自定义", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "duration"
      }), "持续时间，甚至是动画开始前的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "delay"
      }), "延迟。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "下面这个例子创建了一个 2 秒长的动画，在移动目标到最终位置前会稍微往后退一点："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "Animated.timing(this.state.xPosition, {\n  toValue: 100,\n  easing: Easing.back(),\n  duration: 2000,\n}).start();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果想了解更多配置参数，请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "文档的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#%E9%85%8D%E7%BD%AE%E5%8A%A8%E7%94%BB",
        children: "配置动画"
      }), "章节。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "组合动画",
      children: "组合动画"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["多个动画可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "parallel"
      }), "（同时执行）、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sequence"
      }), "（顺序执行）、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "stagger"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "delay"
      }), "来组合使用。它们中的每一个都接受一个要执行的动画数组，并且自动在适当的时候调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "start/stop"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "例如，以下的动画滑行停止，然后在平行旋转的同时弹回:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "Animated.sequence([\n  // decay, then spring to start and twirl\n  Animated.decay(position, {\n    // coast to a stop\n    velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release\n    deceleration: 0.997,\n  }),\n  Animated.parallel([\n    // after decay, in parallel:\n    Animated.spring(position, {\n      toValue: {x: 0, y: 0}, // return to start\n    }),\n    Animated.timing(twirl, {\n      // and twirl\n      toValue: 360,\n    }),\n  ]),\n]).start(); // start the sequence group\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下，如果任何一个动画被停止或中断了，组内所有其它的动画也会被停止。Parallel 有一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "stopTogether"
      }), "属性，如果设置为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "false"
      }), "，可以禁用自动停止。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "文档的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#composing-animations",
        children: "组合动画"
      }), "一节中列出了所有的组合方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "合成动画值",
      children: "合成动画值"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以使用加减乘除以及取余等运算来", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#combining-animated-values",
        children: "把两个动画值合成为一个新的动画值"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有些时候，一些动画值需要依赖另一些值来做计算。比如下面的例子，以一个动画值为分母，增大其值以实现合成值的缩小（1x --> 0.5x）"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const a = new Animated.Value(1);\nconst b = Animated.divide(1, a);\n\nAnimated.spring(a, {\n  toValue: 2,\n}).start();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "插值",
      children: "插值"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "所有动画值都可以执行插值（interpolation）操作。插值是指将一定范围的输入值映射到另一组不同的输出值，一般我们使用线性的映射，但是也可以使用 easing 函数。默认情况下，它会将曲线外推到给定范围之外，但您也可以让它限制为输出值。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个简单的将范围 0-1 转换为范围 0-100 的映射操作是："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "value.interpolate({\n  inputRange: [0, 1],\n  outputRange: [0, 100],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["例如，你可能想通过使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.Value"
      }), " 的值从 0 变化到 1 来让 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "position"
      }), " 从 150px 变化到 0px，同时 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "opacity"
      }), " 从 0 变为 1。这一点可以通过将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style"
      }), " 从 example 修改为下面的样子来实现："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  style={{\n    opacity: this.state.fadeAnim, // Binds directly\n    transform: [{\n      translateY: this.state.fadeAnim.interpolate({\n        inputRange: [0, 1],\n        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0\n      }),\n    }],\n  }}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#interpolate",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "interpolate()"
        })
      }), "还支持定义多个区间段落，常用来定义静止区间等。举个例子，要让输入在接近 -300 时取相反值，然后在输入接近 -100 时到达 0，然后在输入接近 0 时又回到 1，接着一直到输入到 100 的过程中逐步回到 0，最后形成一个始终为 0 的静止区间，对于任何大于 100 的输入都返回 0。具体写法如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "value.interpolate({\n  inputRange: [-300, -100, 0, 100, 101],\n  outputRange: [300, 0, 1, 0, 0],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "它的最终映射结果如下："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "| 输入 | 输出 |\n| ---- | ---- |\n| -400 | 450  |\n| -300 | 300  |\n| -200 | 150  |\n| -100 | 0    |\n| -50  | 0.5  |\n| 0    | 1    |\n| 50   | 0.5  |\n| 100  | 0    |\n| 101  | 0    |\n| 200  | 0    |\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "interpolate()"
      }), "还支持到字符串的映射，从而可以实现颜色以及带有单位的值的动画变换。例如你可以像下面这样实现一个旋转动画："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "value.interpolate({\n  inputRange: [0, 360],\n  outputRange: ['0deg', '360deg'],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "interpolate()"
      }), "还支持任意的渐变函数，其中有很多已经在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "easing",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Easing"
        })
      }), "类中定义了，包括二次、指数、贝塞尔等曲线以及 step、bounce 等方法。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "interpolation"
      }), "还支持限制输出区间", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "outputRange"
      }), "。你可以通过设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extrapolate"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extrapolateLeft"
      }), "或", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extrapolateRight"
      }), "属性来限制输出区间。默认值是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extend"
      }), "（允许超出），不过你可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "clamp"
      }), "选项来阻止输出值超过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "outputRange"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "跟踪动态值",
      children: "跟踪动态值"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["动画中所设的值还可以通过跟踪别的值得到。你只要把 toValue 设置成另一个动态值而不是一个普通数字就行了。比如我们可以用弹跳动画来实现聊天头像的闪动，又比如通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "timing"
      }), "设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "duration:0"
      }), "来实现快速的跟随。他们还可以使用插值来进行组合："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "Animated.spring(follower, {toValue: leader}).start();\nAnimated.timing(opacity, {\n  toValue: pan.x.interpolate({\n    inputRange: [0, 300],\n    outputRange: [1, 0],\n  }),\n}).start();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["变量 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "leader"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "follower"
      }), " 通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.ValueXY()"
      }), " 来定义。这是一个方便的处理 2D 交互的办法，譬如旋转或拖拽。它是一个简单的包含了两个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.Value"
      }), "实例的包装，然后提供了一系列辅助函数，使得", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ValueXY"
      }), "在许多时候可以替代", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Value"
      }), "来使用。比如在上面的代码片段中，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "leader"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "follower"
      }), "可以同时为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "valueXY"
      }), "类型，这样 x 和 y 的值都会被跟踪。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "跟踪手势",
      children: "跟踪手势"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "animated#event",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Animated.event"
        })
      }), "是 Animated 中与输入有关的部分，允许手势或其它事件直接绑定到动态值上。它通过一个结构化的映射语法来完成，使得复杂事件对象中的值可以被正确的解开。第一层是一个数组，允许同时映射多个值，然后数组的每一个元素是一个嵌套的对象。在下面的例子里，你可以发现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "scrollX"
      }), "被映射到了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "event.nativeEvent.contentOffset.x"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "event"
      }), "通常是回调函数的第一个参数)，并且", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pan.x"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pan.y"
      }), "分别映射到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState.dx"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState.dy"
      }), "（", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState"
      }), "是传递给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PanResponder"
      }), "回调函数的第二个参数）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["例如，在使用水平的滚动手势时，可以像下面这样将 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "event.nativeEvent.contentOffset.x"
      }), " 映射到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "scrollX"
      }), " (一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.Value"
      }), ")："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: " onScroll={Animated.event(\n   // scrollX = e.nativeEvent.contentOffset.x\n   [{ nativeEvent: {\n        contentOffset: {\n          x: scrollX\n        }\n      }\n    }]\n )}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["下面的例子实现一个水平滚动轮播，其中滚动位置指示器使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), " 中用到的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.event"
      }), " 进行动画处理"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "在scrollview中使用动画事件的示例",
      children: ["在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "中使用动画事件的示例"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "syntax",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultSyntax),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().syntax),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "functional",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Animated",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20SafeAreaView%2C%5Cn%20%20ScrollView%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20View%2C%5Cn%20%20ImageBackground%2C%5Cn%20%20Animated%2C%5Cn%20%20useWindowDimensions%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20images%20%3D%20new%20Array(6).fill('https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556740749-887f6717d7e4')%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20scrollX%20%3D%20useRef(new%20Animated.Value(0)).current%3B%5Cn%5Cn%20%20const%20%7B%20width%3A%20windowWidth%20%7D%20%3D%20useWindowDimensions()%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.scrollContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20%20%20%20%20horizontal%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20%20%20pagingEnabled%5Cn%20%20%20%20%20%20%20%20%20%20showsHorizontalScrollIndicator%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20onScroll%3D%7BAnimated.event(%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20nativeEvent%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentOffset%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20x%3A%20scrollX%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%5D)%7D%5Cn%20%20%20%20%20%20%20%20%20%20scrollEventThrottle%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bimages.map((image%2C%20imageIndex)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20windowWidth%2C%20height%3A%20250%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BimageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImageBackground%20source%3D%7B%7B%20uri%3A%20image%20%7D%7D%20style%3D%7Bstyles.card%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.textContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.infoText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5C%22Image%20-%20%5C%22%20%2B%20imageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FImageBackground%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.indicatorContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bimages.map((image%2C%20imageIndex)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20const%20width%20%3D%20scrollX.interpolate(%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20inputRange%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20(imageIndex%20-%201)%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20imageIndex%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20(imageIndex%20%2B%201)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20outputRange%3A%20%5B8%2C%2016%2C%208%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20extrapolate%3A%20%5C%22clamp%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BimageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.normalDot%2C%20%7B%20width%20%7D%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20scrollContainer%3A%20%7B%5Cn%20%20%20%20height%3A%20300%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20card%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginVertical%3A%204%2C%5Cn%20%20%20%20marginHorizontal%3A%2016%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20textContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22rgba(0%2C0%2C0%2C%200.7)%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2024%2C%5Cn%20%20%20%20paddingVertical%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%2C%5Cn%20%20infoText%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20normalDot%3A%20%7B%5Cn%20%20%20%20height%3A%208%2C%5Cn%20%20%20%20width%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22silver%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%204%5Cn%20%20%7D%2C%5Cn%20%20indicatorContainer%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "classical",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Animated",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20SafeAreaView%2C%5Cn%20%20ScrollView%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20View%2C%5Cn%20%20ImageBackground%2C%5Cn%20%20Animated%2C%5Cn%20%20Dimensions%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20images%20%3D%20new%20Array(6).fill('https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556740749-887f6717d7e4')%3B%5Cn%5Cnconst%20window%20%3D%20Dimensions.get(%5C%22window%5C%22)%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20scrollX%20%3D%20new%20Animated.Value(0)%3B%5Cn%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20dimensions%3A%20%7B%5Cn%20%20%20%20%20%20window%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20onDimensionsChange%20%3D%20(%7B%20window%20%7D)%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%20%7D%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20Dimensions.addEventListener(%5C%22change%5C%22%2C%20this.onDimensionsChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20Dimensions.removeEventListener(%5C%22change%5C%22%2C%20this.onDimensionsChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20windowWidth%20%3D%20this.state.dimensions.window.width%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.scrollContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20%20%20%20%20%20%20horizontal%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20pagingEnabled%5Cn%20%20%20%20%20%20%20%20%20%20%20%20showsHorizontalScrollIndicator%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onScroll%3D%7BAnimated.event(%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20nativeEvent%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentOffset%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20x%3A%20this.scrollX%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20scrollEventThrottle%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bimages.map((image%2C%20imageIndex)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20windowWidth%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20250%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BimageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImageBackground%20source%3D%7B%7B%20uri%3A%20image%20%7D%7D%20style%3D%7Bstyles.card%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.textContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.infoText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5C%22Image%20-%20%5C%22%20%2B%20imageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FImageBackground%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.indicatorContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bimages.map((image%2C%20imageIndex)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20width%20%3D%20this.scrollX.interpolate(%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inputRange%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20(imageIndex%20-%201)%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20imageIndex%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20windowWidth%20*%20(imageIndex%20%2B%201)%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20outputRange%3A%20%5B8%2C%2016%2C%208%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20extrapolate%3A%20%5C%22clamp%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BimageIndex%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.normalDot%2C%20%7B%20width%20%7D%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20scrollContainer%3A%20%7B%5Cn%20%20%20%20height%3A%20300%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20card%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginVertical%3A%204%2C%5Cn%20%20%20%20marginHorizontal%3A%2016%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20textContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22rgba(0%2C0%2C0%2C%200.7)%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2024%2C%5Cn%20%20%20%20paddingVertical%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%2C%5Cn%20%20infoText%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20normalDot%3A%20%7B%5Cn%20%20%20%20height%3A%208%2C%5Cn%20%20%20%20width%3A%208%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22silver%5C%22%2C%5Cn%20%20%20%20marginHorizontal%3A%204%5Cn%20%20%7D%2C%5Cn%20%20indicatorContainer%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PanResponder"
      }), " 时， 可以用下面的代码来从 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState.dx"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState.dy"
      }), "中获取 x 和 y 。我们在数组的第一个元素使用一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "null"
      }), " ，因为我们只对传递给 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PanResponder"
      }), " 处理程序的第二个参数感兴趣，也就是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gestureState"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "onPanResponderMove={Animated.event(\n  [null, // ignore the native event\n  // extract dx and dy from gestureState\n  // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'\n  {dx: pan.x, dy: pan.y}\n])}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "在panresponder中使用动画事件的示例",
      children: ["在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PanResponder"
      }), "中使用动画事件的示例"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_theme_Tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
      groupId: "syntax",
      defaultValue: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().defaultSyntax),
      values: (_site_core_TabsConstants__WEBPACK_IMPORTED_MODULE_3___default().syntax),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "functional",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Animated",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%5Cn%20%20const%20panResponder%20%3D%20useRef(%5Cn%20%20%20%20PanResponder.create(%7B%5Cn%20%20%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%5Cn%20%20%20%20%20%20%20%20null%2C%5Cn%20%20%20%20%20%20%20%20%7B%20dx%3A%20pan.x%2C%20dy%3A%20pan.y%20%7D%5Cn%20%20%20%20%20%20%5D)%2C%5Cn%20%20%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20Animated.spring(pan%2C%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D).start()%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20).current%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20%26%20Release%20this%20box!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20pan.x%20%7D%2C%20%7B%20translateY%3A%20pan.y%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20titleText%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20lineHeight%3A%2024%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android,web",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_theme_TabItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        value: "classical",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          class: "snack-player",
          "data-snack-name": "Animated",
          "data-snack-description": "Example usage",
          "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20pan%20%3D%20new%20Animated.ValueXY()%3B%5Cn%20%20panResponder%20%3D%20PanResponder.create(%7B%5Cn%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%5Cn%20%20%20%20%20%20null%2C%5Cn%20%20%20%20%20%20%7B%20dx%3A%20this.pan.x%2C%20dy%3A%20this.pan.y%20%7D%5Cn%20%20%20%20%5D)%2C%5Cn%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Animated.spring(this.pan%2C%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D).start()%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20%26%20Release%20this%20box!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20this.pan.x%20%7D%2C%20%7B%20translateY%3A%20this.pan.y%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7B...this.panResponder.panHandlers%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20titleText%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20lineHeight%3A%2024%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%5Cn%7D)%3B%22%7D%7D",
          "data-snack-dependencies": "react-native-safe-area-context",
          "data-snack-platform": "web",
          "data-snack-supported-platforms": "ios,android,web",
          "data-snack-theme": "light",
          "data-snack-preview": "true",
          "data-snack-loading": "lazy",
          "data-snack-device-frame": "false"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "响应当前的动画值",
      children: "响应当前的动画值"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你可能会注意到这里没有一个明显的方法来在动画的过程中读取当前的值——这是出于优化的角度考虑，有些值只有在原生代码运行阶段中才知道。如果你需要在 JavaScript 中响应当前的值，有两种可能的办法："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "spring.stopAnimation(callback)"
        }), "会停止动画并且把最终的值作为参数传递给回调函数", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "callback"
        }), "——这在处理手势动画的时候非常有用。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "spring.addListener(callback)"
        }), "会在动画的执行过程中持续异步调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "callback"
        }), "回调函数，提供一个最近的值作为参数。这在用于触发状态切换的时候非常有用，譬如当用户拖拽一个东西靠近的时候弹出一个新的气泡选项。不过这个状态切换可能并不会十分灵敏，因为它不像许多连续手势操作（如旋转）那样在 60fps 下运行。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), " 被设计为完全可序列化的，因此动画可以以高性能的方式运行，独立于正常的 JavaScript 事件循环。这确实会影响 API 的一些设计，因此与完全同步的系统相比，做某些需求可能看起来会有些棘手。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.Value.addListener"
      }), " 可能可以用来解决一些场景问题，但要谨慎使用它，因为它可能带来一些性能上的影响。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["注：社区有另一个设计思路不太一样的高性能动画库 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/software-mansion/react-native-reanimated",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "react-native-reanimated"
          })
        }), "，对性能有更高要求的开发者可以参考一下。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "启用原生动画驱动",
      children: "启用原生动画驱动"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "的 API 是可序列化的（即可转化为字符串表达以便通信或存储）。通过启用原生驱动，我们在启动动画前就把其所有配置信息都发送到原生端，利用原生代码在 UI 线程执行动画，而不用每一帧都在两端间来回沟通。如此一来，动画一开始就完全脱离了 JS 线程，因此此时即便 JS 线程被卡住，也不会影响到动画了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在动画中启用原生驱动非常简单。只需在开始动画之前，在动画配置中加入一行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useNativeDriver: true"
      }), "，如下所示："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true, // <-- 加上这一行\n}).start();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生驱动还可以在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.event"
      }), "中使用，其对于滚动操作相关的动画优势更突出。在滚动事件中如果不使用原生驱动，由于数值需要通过 js 桥异步传输，动画将始终比用户的操作落后一帧。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Animated.ScrollView // <-- 使用可动画化的ScrollView组件\n  scrollEventThrottle={1} // <-- 设为1以确保滚动事件的触发频率足够密集\n  onScroll={Animated.event(\n    [\n      {\n        nativeEvent: {\n          contentOffset: {y: this.state.animatedValue},\n        },\n      },\n    ],\n    {useNativeDriver: true}, // <-- 加上这一行\n  )}>\n  {content}\n</Animated.ScrollView>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["您也可以通过运行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/packages/rn-tester/",
        children: "RNTester app"
      }), " 查看原生驱动程序的运行情况，然后再载入原生动画示例。您也可以查看 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js",
        children: "source code"
      }), " 来了解这些例子是如何产生的。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生驱动程序目前并不足以支持您使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), " 执行所有操作。主要限制是您只能为非布局属性设置动画：像 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "transform"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "opacity"
      }), " 这样的东西可以工作，但 flexbox 和 position 属性不能。使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated.event"
      }), " 时，它只适用于直接事件，而不适用于冒泡事件。这意味着它不能与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PanResponder"
      }), " 一起使用，但可以与 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView#onScroll"
      }), " 之类的东西一起使用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["动画运行时，可以防止 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "VirtualizedList"
      }), " 组件渲染更多行。如果您需要在用户滚动列表时运行长动画或循环动画，您可以在动画配置中使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "isInteraction: false"
      }), " 来防止此问题。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "牢记",
      children: "牢记"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rotateY"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rotateX"
      }), " 等变换样式时，请确保使用了变换样式 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "perspective"
      }), "。此时，如果没有它，某些动画可能无法在 Android 上呈现。下面是一个例子。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Animated.View\n  style={{\n    transform: [\n      {scale: this.state.scale},\n      {rotateY: this.state.rotateY},\n      {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS\n    ],\n  }}\n/>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "其他例子",
      children: "其他例子"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "RNTester 应用程序有各种使用中的“动画”示例："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/tree/master/packages/rn-tester/js/examples/Animated/AnimatedGratuitousApp",
          children: "AnimatedGratuitousApp"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js",
          children: "NativeAnimationsExample"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "layoutanimation-api",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation"
      }), " API"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation"
      }), "允许你在全局范围内", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "创建"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "更新"
      }), "动画，这些动画会在下一次渲染或布局周期运行。它常用来更新 flexbox 布局，因为它可以无需测量或者计算特定属性就能直接产生动画。尤其是当布局变化可能影响到父节点（譬如“查看更多”展开动画既增加父节点的尺寸又会将位于本行之下的所有行向下推动）时，如果不使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation"
      }), "，可能就需要显式声明组件的坐标，才能使得所有受影响的组件能够同步运行动画。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["注意尽管", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation"
      }), "非常强大且有用，但它对动画本身的控制没有", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Animated"
      }), "或者其它动画库那样方便，所以如果你使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LayoutAnimation"
      }), "无法实现一个效果，那可能还是要考虑其他的方案。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["另外，如果要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Android"
      }), "上使用 LayoutAnimation，那么目前还需要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIManager"
      }), "中启用：:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// 在执行任何动画代码之前，比如在入口文件App.js中执行\nUIManager.setLayoutAnimationEnabledExperimental &&\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "LayoutAnimations",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20NativeModules%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20%7B%20UIManager%20%7D%20%3D%20NativeModules%3B%5Cn%5CnUIManager.setLayoutAnimationEnabledExperimental%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20React.Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20w%3A%20100%2C%5Cn%20%20%20%20h%3A%20100%2C%5Cn%20%20%7D%3B%5Cn%5Cn%20%20_onPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animate%20the%20update%5Cn%20%20%20%20LayoutAnimation.spring()%3B%5Cn%20%20%20%20this.setState(%7Bw%3A%20this.state.w%20%2B%2015%2C%20h%3A%20this.state.h%20%2B%2015%7D)%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7Bwidth%3A%20this.state.w%2C%20height%3A%20this.state.h%7D%5D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3EPress%20me!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20backgroundColor%3A%20'red'%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'black'%2C%5Cn%20%20%20%20paddingHorizontal%3A%2020%2C%5Cn%20%20%20%20paddingVertical%3A%2015%2C%5Cn%20%20%20%20marginTop%3A%2015%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonText%3A%20%7B%5Cn%20%20%20%20color%3A%20'%23fff'%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本示例使用预设值，您可以根据需要自定义动画，更多信息参见 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js",
        children: "LayoutAnimation.js"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "其他要注意的地方",
      children: "其他要注意的地方"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "requestanimationframe",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "requestAnimationFrame"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "requestAnimationFrame"
      }), "是一个对浏览器标准 API 的兼容实现，你可能已经熟悉它了。它接受一个函数作为唯一的参数，并且在下一次重绘之前调用此函数。一些基于 JavaScript 的动画库高度依赖于这一 API。通常你不必直接调用它——那些动画库会替你管理好帧的更新。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setnativeprops",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["正如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "direct-manipulation",
        children: "直接操作"
      }), "文档所说，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "方法可以使我们直接修改基于原生视图的组件的属性，而不需要使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setState"
      }), "来重新渲染整个组件树。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果我们要更新的组件有一个非常深的内嵌结构，并且没有使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "shouldComponentUpdate"
      }), "来优化，那么使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "就将大有裨益。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你发现你的动画丢帧（低于 60 帧每秒），可以尝试使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setNativeProps"
      }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "shouldComponentUpdate"
      }), "来优化它们。或者可以在 UI 线程上运行动画，而不是在 JavaScript 线程上使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useNativeDriver"
      }), " 选项。你还可以考虑将部分计算工作放在动画完成之后进行，这时可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "interactionmanager",
        children: "InteractionManager"
      }), "。你还可以使用应用内的开发者菜单中的“FPS Monitor”工具来监控应用的帧率。"]
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