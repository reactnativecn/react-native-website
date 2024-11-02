"use strict";
exports.id = 88759;
exports.ids = [88759];
exports.modules = {

/***/ 571:
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
	id: 'interactionmanager',
	title: 'InteractionManager'
};
const contentTitle = undefined;
const metadata = {
  "id": "interactionmanager",
  "title": "InteractionManager",
  "description": "Interactionmanager 可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证 JavaScript 动画的流畅运行。",
  "source": "@site/versioned_docs/version-0.74/interactionmanager.md",
  "sourceDirName": ".",
  "slug": "/interactionmanager",
  "permalink": "/docs/0.74/interactionmanager",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/interactionmanager.md",
  "tags": [],
  "version": "0.74",
  "frontMatter": {
    "id": "interactionmanager",
    "title": "InteractionManager"
  },
  "sidebar": "api",
  "previous": {
    "title": "Easing",
    "permalink": "/docs/0.74/easing"
  },
  "next": {
    "title": "Keyboard",
    "permalink": "/docs/0.74/keyboard"
  }
};
const assets = {

};



const toc = [{
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "<code>runAfterInteractions()</code>",
  "id": "runafterinteractions",
  "level": 3
}, {
  "value": "<code>createInteractionHandle()</code>",
  "id": "createinteractionhandle",
  "level": 3
}, {
  "value": "<code>clearInteractionHandle()</code>",
  "id": "clearinteractionhandle",
  "level": 3
}, {
  "value": "<code>setDeadline()</code>",
  "id": "setdeadline",
  "level": 3
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
      children: "Interactionmanager 可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证 JavaScript 动画的流畅运行。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "应用这样可以安排一个任务在交互和动画完成之后执行："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "InteractionManager.runAfterInteractions(() => {\n  // ...耗时较长的同步执行的任务...\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "和其他的延迟计划函数对比："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "requestAnimationFrame()"
        }), " 用来执行在一段时间内控制视图动画的代码。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setImmediate/setTimeout()"
        }), " 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "runAfterInteractions()"
        }), " 在稍后执行代码，不会延迟当前进行的动画。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["触摸处理系统会把一个或多个进行中的触摸操作认定为'交互'，并且会将", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "runAfterInteractions()"
      }), "的回调函数延迟执行，直到所有的触摸操作都结束或取消了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "InteractionManager 还允许应用注册动画，在动画开始时创建一个交互“句柄”，然后在结束的时候清除它。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "const handle = InteractionManager.createInteractionHandle();\n// 执行动画... (`runAfterInteractions`中的任务现在开始排队等候)\n// 在动画完成之后开始清除句柄：\nInteractionManager.clearInteractionHandle(handle);\n// 在所有句柄都清除之后，现在开始依序执行队列中的任务\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "runAfterInteractions"
      }), "接受一个普通的回调函数，或是一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PromiseTask"
      }), "对象，该对象需要带有名为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "gen"
      }), "的方法，并返回一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Promise"
      }), "。如果提供的参数是一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PromiseTask"
      }), "， 那么即便它是异步的它也会阻塞任务队列，直到它（以及它所有的依赖任务，哪怕这些依赖任务也是异步的）执行完毕后，才会执行下一个任务。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下，排队的任务会在一次", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setImmediate"
      }), "方法中依序批量执行。如果你调用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setDeadLine"
      }), "方法并设定了一个正整数值，则任务只会在设定的时间到达后开始执行。在此之前，任务会通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setTimeout"
      }), "来挂起并阻塞其他任务执行，这样可以给诸如触摸交互一类的事件留出时间，使应用可以更快地响应用户。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "InteractionManager Function Component Basic Example",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cnconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%5Cn%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%5Cn%5Cn%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%5Cn%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20opacity%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onShown%20%7D)%20%3D%3E%20%7B%5Cn%20%20const%20opacity%20%3D%20useFadeIn()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onShown())%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7B%20opacity%20%7D%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Animation%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      class: "snack-player",
      "data-snack-name": "InteractionManager Function Component Advanced Example",
      "data-snack-description": "Example usage",
      "data-snack-files": "%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cn%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%5Cn%2F%2F%20support%20for%20InteractionManager%5Cnconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%5Cn%5Cn%20%20%20%20setTimeout(%5Cn%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%5Cn%20%20%20%20%20%20timeLocked%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%5Cn%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onInteractionIsDone%20%7D)%20%3D%3E%20%7B%5Cn%20%20useCustomInteraction()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Interaction%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D",
      "data-snack-dependencies": "react-native-safe-area-context",
      "data-snack-platform": "web",
      "data-snack-supported-platforms": "ios,android",
      "data-snack-theme": "light",
      "data-snack-preview": "true",
      "data-snack-loading": "lazy",
      "data-snack-device-frame": "false"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "注意"
        }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "InteractionManager.runAfterInteractions()"
        }), "在 web 上不能正常工作。它会立即触发而不是等待交互动画结束。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "文档",
      children: "文档"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "runafterinteractions",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "runAfterInteractions()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static runAfterInteractions(task)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "安排一个函数在所有的交互和动画完成之后运行。返回一个可取消的 promise。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "createinteractionhandle",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createInteractionHandle()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static createInteractionHandle()\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "通知管理器有某个交互开始了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "clearinteractionhandle",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "clearInteractionHandle()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static clearInteractionHandle(handle)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "通知管理器有某个交互已经结束了。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setdeadline",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setDeadline()"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "static setDeadline(deadline)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果设定了一个正整数值，则会使用 setTimeout 来挂起所有尚未执行的任务。在 eventLoopRunningTime 到达设定时间后，才开始使用一个 setImmediate 方法来批量执行所有任务。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {})]
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