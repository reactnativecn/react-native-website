"use strict";
exports.id = 32999;
exports.ids = [32999];
exports.modules = {

/***/ 67989:
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
	id: 'sample-application-movies',
	title: '示例教程：电影列表'
};
const contentTitle = undefined;
const metadata = {
  "id": "sample-application-movies",
  "title": "示例教程：电影列表",
  "description": "简介",
  "source": "@site/versioned_docs/version-0.72/sample-application-movies.md",
  "sourceDirName": ".",
  "slug": "/sample-application-movies",
  "permalink": "/docs/0.72/sample-application-movies",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/sample-application-movies.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "sample-application-movies",
    "title": "示例教程：电影列表"
  }
};
const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "准备工作",
  "id": "准备工作",
  "level": 2
}, {
  "value": "开发",
  "id": "开发",
  "level": 2
}, {
  "value": "Hello World",
  "id": "hello-world",
  "level": 3
}, {
  "value": "模拟数据",
  "id": "模拟数据",
  "level": 3
}, {
  "value": "展现一个电影",
  "id": "展现一个电影",
  "level": 3
}, {
  "value": "添加样式",
  "id": "添加样式",
  "level": 3
}, {
  "value": "拉取真正的数据",
  "id": "拉取真正的数据",
  "level": 3
}, {
  "value": "FlatList",
  "id": "flatlist",
  "level": 2
}, {
  "value": "最终的代码(App.js)",
  "id": "最终的代码appjs",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在本示例教程中，我们将编写一个简单的应用，可以从电影数据库中取得最近正在上映的 25 部电影，并在一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "中展示出来。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "注意：此文档编写时间较早，组件采用class形式，可能与本网站其他函数式组件代码风格不一致，请留意写法上的区别。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "准备工作",
      children: "准备工作"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["React Native 需要一些基础的配置工作，你可以参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/0.72/environment-setup",
        children: "开始使用 React Native"
      }), "来进行。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在所有依赖的软件都已经安装完毕后，请创建一个 React Native 工程和我们一起开始这次示例："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx react-native init SampleAppMovies\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这个命令会初始化一个工程、下载 React Native 的所有源代码和依赖包，最后在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SampleAppMovies/iOS/SampleAppMovies.xcodeproj"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SampleAppMovies/android/app"
      }), "下分别创建一个新的 XCode 工程(iOS)和一个 gradle 工程(Android)。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "开发",
      children: "开发"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["想开发 iOS 版本，你现在可以在 XCode 中打开刚刚创建的工程(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SampleAppMovies/iOS/SampleAppMovies.xcodeproj"
      }), ")，然后只要按下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "就可以构建并运行。这个操作会同时打开一个用于实现动态代码加载的 Node 服务（React Packager）。所以每当你修改代码，你只需要在模拟器中按下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "，而无需重新在 XCode 中编译。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["想开发 Android 版本，先连接你的设备或启动模拟器，然后在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "SampleAppMovies"
      }), "目录下运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "react-native run-android"
      }), "，就会构建工程（注意在第一次构建中会联网下载很多依赖，耗时较长。在国内的话务必使用稳定的 XX 工具，否则会一直失败）并自动安装到你的模拟器或者设备，同时启动用于实现动态代码加载的 Node 服务。当你修改代码之后，你需要打开摇一摇菜单(摇一下设备，或者按下设备的 Menu 键，或者在模拟器上按下 F2 或 Page Up，Genymotion 按下 ⌘+M)，然后在菜单中点击“Reload JS”。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "hello-world",
      children: "Hello World"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx react-native init"
      }), "命令会创建一个指定名字的应用，我们刚才输入的命令就创建了一个名为 SampleAppMovies 的应用。这是一个简单的 Hello World 应用。你可以编辑", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.js"
      }), "来做一些改动，然后在模拟器中按 ⌘+R 来看到修改的结果。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "模拟数据",
      children: "模拟数据"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在我们真正从 Rotten Tomatoes(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "译注：一个国外的电影社区"
      }), ")抓取数据之前，我们先制造一些模拟数据来练一练手。在 Facebook 我们通常在 JS 文件的开头，紧跟着 import 语句之后声明一个常量，不过这不重要，你可以把它放在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "App.js"
      }), "的任意位置："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const MOCKED_MOVIES_DATA = [\n  {\n    title: \"标题\",\n    year: \"2015\",\n    posters: { thumbnail: \"http://i.imgur.com/UePbdph.jpg\" }\n  }\n];\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["译注：在 iOS 上使用 http 链接的图片地址可能不会显示，参见", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://segmentfault.com/a/1190000002933776",
          children: "这篇说明修改"
        }), "。\n从 Android9 开始，也会默认阻止 http 请求，请参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://blog.csdn.net/qq_40347548/article/details/86766932",
          children: "相关配置"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "展现一个电影",
      children: "展现一个电影"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们接下来要展现一个电影，绘制它的标题、年份、以及缩略图(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "译注：这个过程我们通常会叫做“渲染/render”，后面我们都会用“渲染”这个词"
      }), ")。渲染缩略图需要用到 Image 组件，所以把 Image 添加到对 React 的 import 列表中。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React, { Component } from \"react\";\nimport { Image, StyleSheet, Text, View } from \"react-native\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后修改一下 render 函数，这样我们可以把上面创建的模拟数据渲染出来。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  render() {\n    const movie = MOCKED_MOVIES_DATA[0];\n    return (\n      <View style={styles.container}>\n        <Text>{movie.title}</Text>\n        <Text>{movie.year}</Text>\n        <Image source={{uri: movie.posters.thumbnail}} />\n      </View>\n    );\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["按下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Reload JS"
      }), "，现在你应该能看到文字\"Title\"和\"2015\"，但现在 Image 组件没渲染任何东西，这是因为我们还没有为图片指定我们想要渲染的宽和高。这通过样式来实现。当我们修改样式的时候，我们也应该清理掉我们不再使用的样式。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    backgroundColor: \"#F5FCFF\"\n  },\n  thumbnail: {\n    width: 53,\n    height: 81\n  }\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后把它应用到 Image 组件上："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["按下", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Reload JS"
      }), "，现在图片应该可以被渲染出来了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {})]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(23809)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(18215)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "添加样式",
      children: "添加样式"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在我们已经成功的把我们的数据渲染出来了，下面让我们把它弄的更好看一些。我想把文字放在图片的右边，然后把标题弄的大一些，并且水平居中："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "+---------------------------------+\n|+-------++----------------------+|\n||       ||        标题          ||\n|| 图片  ||                      ||\n||       ||        年份          ||\n|+-------++----------------------+|\n+---------------------------------+\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "所以我们需要增加一个 container 来实现一个水平布局内嵌套一个垂直布局。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "return (\n  <View style={styles.container}>\n    <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />\n    <View style={styles.rightContainer}>\n      <Text style={styles.title}>{movie.title}</Text>\n      <Text style={styles.year}>{movie.year}</Text>\n    </View>\n  </View>\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "和之前相比并没有太多变化，我们增加了一个 container 来包装文字，然后把它移到了 Image 的后面（因为他们最终在图片的右边）。然后我们来看看样式要怎么改："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  container: {\n    flex: 1,\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n  },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们用 Flexbox 来布局。如果你想了解更多，可以读读", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        children: "这篇文章"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在上面的代码片段中，我们用了一句", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flexDirection: 'row'"
      }), "来让我们的主容器的成员从左到右横向布局，而非默认的从上到下纵向布局。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们往", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "style"
      }), "对象里增加另一个样式："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  rightContainer: {\n    flex: 1,\n  },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这句话的作用是让", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rightContainer"
      }), "在父容器中占据 Image 之外剩下的全部空间。如果你还不是很理解的话，你可以往", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rightContainer"
      }), "里增加一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), "看一看，然后再去掉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "flex:1"
      }), "对比一下。你会发现去掉这一句后，容器会变成能容纳它孩子的最小大小。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "给文字添加样式就简单的多了："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  title: {\n    fontSize: 20,\n    marginBottom: 8,\n    textAlign: 'center',\n  },\n  year: {\n    textAlign: 'center',\n  },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["再按一次", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Reload JS"
      }), "来看看最新的结果。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {})]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(63172)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(27852)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "拉取真正的数据",
      children: "拉取真正的数据"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从 Rotten Tomatoes 的 API 拉取数据和学习 React Native 并没有什么直接关系，所以你也可以直接跳过本节。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "把下面的常量放到文件的最开头（通常在 import 下面）来创建我们请求数据所需的地址常量 REQUEST_URL"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "/**\n * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API\n * 请求，这个样例数据放在React Native的Github库中。\n * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。\n */\nconst REQUEST_URL =\n  \"https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先在应用中创建一个初始的 null 状态，这样可以通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.state.movies == null"
      }), "来判断我们的数据是不是已经被抓取到了。我们在服务器响应返回的时候执行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.setState({movies: moviesData})"
      }), "来改变这个状态。把下面这段代码放到我们的 React 类的 render 函数之前（下面注释中的“绑定操作”你可以看看这个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://v.youku.com/v_show/id_XMTgyNzM0NjQzMg==.html",
        children: "短视频教程"
      }), "）："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  constructor(props) {\n    super(props);   //这一句不能省略，照抄即可\n    this.state = {\n      movies: null,  //这里放你自己定义的state变量及初始值\n    };\n    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对\n    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）\n    this.fetchData = this.fetchData.bind(this);\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["组件加载完毕之后，就可以向服务器请求数据。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "componentDidMount"
      }), "是 React 组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用。React 中的各种生命周期方法请", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://facebook.github.io/react/docs/component-specs.html",
        children: "参阅此文档"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  componentDidMount() {\n    this.fetchData();\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们来为组件添加", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fetchData"
      }), "函数。你所需要做的就是在 Promise 调用链结束后执行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.setState({movies:data})"
      }), "。在 React 的工作机制下，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "setState"
      }), "实际上会触发一次", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "重新渲染"
      }), "的流程，此时 render 函数被触发，发现 this.state.movies 不再是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "null"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  fetchData() {\n    fetch(REQUEST_URL)\n      .then((response) => response.json())\n      .then((responseData) => {\n        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作\n        this.setState({\n          movies: responseData.movies,\n        });\n      });\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在我们来修改 render 函数。在电影数据加载完毕之前，先渲染一个“加载中”的视图；而如果电影数据已经加载完毕了，则渲染第一个电影数据。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  render() {\n    if (!this.state.movies) {\n      return this.renderLoadingView();\n    }\n\n    const movie = this.state.movies[0];\n    return this.renderMovie(movie);\n  }\n\n  renderLoadingView() {\n    return (\n      <View style={styles.container}>\n        <Text>\n          正在加载电影数据……\n        </Text>\n      </View>\n    );\n  }\n\n  renderMovie(movie) {\n    return (\n      <View style={styles.container}>\n        <Image\n          source={{uri: movie.posters.thumbnail}}\n          style={styles.thumbnail}\n        />\n        <View style={styles.rightContainer}>\n          <Text style={styles.title}>{movie.title}</Text>\n          <Text style={styles.year}>{movie.year}</Text>\n        </View>\n      </View>\n    );\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在再按一次", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "⌘+R"
      }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Reload JS"
      }), "，你会首先看到“正在加载电影数据……”，然后在响应数据到达之后，看到第一个电影的信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {})]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(62268)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(12116)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "flatlist",
      children: "FlatList"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在我们来让我们的应用能够渲染所有的数据而不是仅仅第一部电影。我们要用到的就是 FlatList 组件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为什么建议把内容放到 FlatList 里？比起直接渲染出所有的元素，或是放到一个 ScrollView 里有什么优势？这是因为尽管 React 很高效，渲染一个可能很大的元素列表还是会很慢。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "会安排视图的渲染，只显示当前在屏幕上的那些元素。而那些已经渲染好了但移动到了屏幕之外的元素，则会从原生视图结构中移除（以提高性能）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["首先要做的事情：在文件最开头引入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React, { Component } from \"react\";\nimport { Image, FlatList, StyleSheet, Text, View } from \"react-native\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在来修改 render 函数。当我们已经有了数据之后，渲染一个包含多个电影信息的 FlatList，而不仅仅是单个的电影。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  render() {\n    if (!this.state.loaded) {\n      return this.renderLoadingView();\n    }\n\n    return (\n      <FlatList\n        data={this.state.data}\n        renderItem={this.renderMovie}\n        style={styles.list}\n        keyExtractor={item => item.id}\n      />\n    );\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "keyExtractor\n此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你会注意到我们现在用到了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.state"
      }), "中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "。下一步就是在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "constructor"
      }), "生成的初始状态中添加一个空白的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "。另外，我们现在要把数据存储在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), "中了，所以不再另外用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.state.movies"
      }), "来保存数据。我们可以在 state 里用一个布尔型的属性(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this.state.loaded"
      }), ")来判断数据加载是否已经完成了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  constructor(props) {\n    super(props);\n    this.state = {\n      data: [],\n      loaded: false,\n    };\n    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对\n    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）\n    this.fetchData = this.fetchData.bind(this);\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["同时我们也要修改", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "fetchData"
      }), "方法来把数据添加到 data 里（注意这里使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！）："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  fetchData() {\n    fetch(REQUEST_URL)\n      .then((response) => response.json())\n      .then((responseData) => {\n        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作\n        this.setState({\n          data: this.state.data.concat(responseData.movies),\n          loaded: true,\n        });\n      });\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "renderMovie"
      }), "方法的构型也有变化（注意如果你要在这个方法中使用 this 关键字的话，需要怎么改？）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  renderMovie({ item }) {\n    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档\n    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档\n    return (\n      <View style={styles.container}>\n        <Image\n          source={{uri: item.posters.thumbnail}}\n          style={styles.thumbnail}\n        />\n        <View style={styles.rightContainer}>\n          <Text style={styles.title}>{item.title}</Text>\n          <Text style={styles.year}>{item.year}</Text>\n        </View>\n      </View>\n    );\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后，我们再在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "styles"
      }), "对象里给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FlatList"
      }), "添加一些样式。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  list: {\n    paddingTop: 20,\n    backgroundColor: '#F5FCFF',\n  },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在可以体现最终的结果了："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {})]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(71683)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(85721)/* ["default"] */ .A) + "",
              width: "200",
              height: "356"
            })
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "为了实现一个完整功能的应用，接下来其实还有一些工作要做，譬如：添加导航器，搜索，加载更多，等等等等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "最终的代码appjs",
      children: "最终的代码(App.js)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "\nimport React, { Component } from \"react\";\n\nimport { Image, FlatList, StyleSheet, Text, View } from \"react-native\";\n\nconst REQUEST_URL =\n  \"https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json\";\n\nexport default class SampleAppMovies extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: [],\n      loaded: false\n    };\n    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空\n    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）\n    this.fetchData = this.fetchData.bind(this);\n  }\n\n  componentDidMount() {\n    this.fetchData();\n  }\n\n  fetchData() {\n    fetch(REQUEST_URL)\n      .then(response => response.json())\n      .then(responseData => {\n        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作\n        this.setState({\n          data: this.state.data.concat(responseData.movies),\n          loaded: true\n        });\n      });\n  }\n\n  render() {\n    if (!this.state.loaded) {\n      return this.renderLoadingView();\n    }\n\n    return (\n      <FlatList\n        data={this.state.data}\n        renderItem={this.renderMovie}\n        style={styles.list}\n        keyExtractor={item => item.id}\n      />\n    );\n  }\n\n  renderLoadingView() {\n    return (\n      <View style={styles.container}>\n        <Text>Loading movies...</Text>\n      </View>\n    );\n  }\n\n  renderMovie({ item }) {\n    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档\n    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档\n    return (\n      <View style={styles.container}>\n        <Image\n          source={{ uri: item.posters.thumbnail }}\n          style={styles.thumbnail}\n        />\n        <View style={styles.rightContainer}>\n          <Text style={styles.title}>{item.title}</Text>\n          <Text style={styles.year}>{item.year}</Text>\n        </View>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: \"row\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    backgroundColor: \"#F5FCFF\"\n  },\n  rightContainer: {\n    flex: 1\n  },\n  title: {\n    fontSize: 20,\n    marginBottom: 8,\n    textAlign: \"center\"\n  },\n  year: {\n    textAlign: \"center\"\n  },\n  thumbnail: {\n    width: 53,\n    height: 81\n  },\n  list: {\n    paddingTop: 20,\n    backgroundColor: \"#F5FCFF\"\n  }\n});\n"
      })
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

/***/ 71683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TutorialFinal-5b382df63c6cb69d49f109d0cfea1b6c.png");

/***/ }),

/***/ 85721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TutorialFinal2-0e8e6839371c1d11e9c5764793aa35ba.png");

/***/ }),

/***/ 23809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TutorialMock-d2278ad89b293a15b6d471bf753a8d30.png");

/***/ }),

/***/ 18215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 62268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TutorialSingleFetched-4915dbc1ca7455c66154fb88bac1abde.png");

/***/ }),

/***/ 12116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 63172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/TutorialStyledMock-a4755411c252308863c6474eb78e8fc6.png");

/***/ }),

/***/ 27852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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