"use strict";
exports.id = 88863;
exports.ids = [88863];
exports.modules = {

/***/ 9928:
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
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63238);


const frontMatter = {
	id: 'native-components-ios',
	title: 'iOS 原生UI组件'
};
const contentTitle = undefined;
const metadata = {
  "id": "legacy/native-components-ios",
  "title": "iOS 原生UI组件",
  "description": "在如今的 App 中，已经有成千上万的原生 UI 部件了——其中的一些是平台的一部分，另一些可能来自于一些第三方库，而且可能你自己还收藏了很多。React Native 已经封装了大部分最常见的组件，譬如ScrollView和TextInput，但不可能封装全部组件。而且，说不定你曾经为自己以前的 App 还封装过一些组件，React Native 肯定没法包含它们。幸运的是，在 React Naitve 应用程序中封装和植入已有的组件非常简单。",
  "source": "@site/../cndocs/legacy/native-components-ios.md",
  "sourceDirName": "legacy",
  "slug": "/legacy/native-components-ios",
  "permalink": "/docs/next/legacy/native-components-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/legacy/native-components-ios.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "native-components-ios",
    "title": "iOS 原生UI组件"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Android 原生UI组件",
    "permalink": "/docs/next/legacy/native-components-android"
  },
  "next": {
    "title": "直接操作",
    "permalink": "/docs/next/legacy/direct-manipulation"
  }
};
const assets = {

};




const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "iOS MapView 示例",
  "id": "ios-mapview-示例",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "Handling multiple native views",
  "id": "handling-multiple-native-views",
  "level": 2
}, {
  "value": "样式",
  "id": "样式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在如今的 App 中，已经有成千上万的原生 UI 部件了——其中的一些是平台的一部分，另一些可能来自于一些第三方库，而且可能你自己还收藏了很多。React Native 已经封装了大部分最常见的组件，譬如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ScrollView"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TextInput"
      }), "，但不可能封装全部组件。而且，说不定你曾经为自己以前的 App 还封装过一些组件，React Native 肯定没法包含它们。幸运的是，在 React Naitve 应用程序中封装和植入已有的组件非常简单。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["和原生模块向导一样，本向导也是一个相对高级的向导，我们假设你已经对 iOS 编程颇有经验。本向导会引导你如何构建一个原生 UI 组件，带领你了解 React Native 核心库中", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MapView"
      }), "组件的具体实现。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ios-mapview-示例",
      children: "iOS MapView 示例"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["假设我们要把地图组件植入到我们的 App 中——我们用到的是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MKMapView"
        })
      }), "，而现在只需要让它可以在 Javascript 端使用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生视图都需要被一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTViewManager"
      }), "的子类来创建和管理。这些管理器在功能上有些类似“视图控制器”，但它们实际都是单例 - React Native 只会为每个管理器创建一个实例。它们创建原生的视图并提供给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTUIManager"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTUIManager"
      }), "则会反过来委托它们在需要的时候去设置和更新视图的属性。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTViewManager"
      }), "还会代理视图的所有委托，并给 JavaScript 发回对应的事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "提供原生视图很简单："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["首先创建一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTViewManager"
        }), "的子类。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["添加", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_EXPORT_MODULE()"
        }), "宏标记。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "-(UIView *)view"
        }), "方法。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RNTMapManager.m\n#import <MapKit/MapKit.h>\n\n#import <React/RCTViewManager.h>\n\n@interface RNTMapManager : RCTViewManager\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE(RNTMap)\n\n- (UIView *)view\n{\n  return [[MKMapView alloc] init];\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "注意："
      }), " 请不要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-view"
      }), "中给", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "实例设置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "frame"
      }), "或是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), "属性。为了和 JavaScript 端的布局属性一致，React Native 会覆盖你所设置的值。 如果您需要这种粒度的操作的话，比较好的方法是用另一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "来封装你想操作的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "实例，并返回外层的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "。请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/issues/2948",
        children: "Issue 2948"
      }), "获取更多信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["在上例中，我们的类名使用了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RNT"
        }), "前缀以避免与其它框架产生命名冲突。苹果自有框架使用了两个字符的前缀，而 React Native 则使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT"
        }), "作为前缀。为避免命名冲突，我们建议您在自己的类中使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RNT"
        }), "以外的其它三字符前缀。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["完成上面这些代码后，请一定记得要重新编译！（运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yarn ios"
      }), "命令）"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来你需要一些 Javascript 代码来让这个视图变成一个可用的 React 组件："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MapView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n// requireNativeComponent 自动把'RNTMap'解析为'RNTMapManager'\nexport default requireNativeComponent('RNTMap');\n\n// MyApp.js\n\nimport MapView from './MapView.js';\n\n...\n\nrender() {\n  return <MapView style={{ flex: 1 }} />;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请确认此处使用了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RNTMap"
      }), " 。我们在此对 manager 使用了 require 操作，以暴露 manager 的视图，并于 Javascript 中使用。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "注意："
      }), " 在渲染时，不要忘记布局视图，否则您只能面对一个空荡荡的屏幕。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  render() {\n    return <MapView style={{flex: 1}} />;\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在我们就已经实现了一个完整功能的地图组件了，诸如捏放和其它的手势都已经完整支持。但是现在我们还不能真正的从 Javascript 端控制它。(╯﹏╰)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们能让这个组件变得更强大的第一件事情就是要能够封装一些原生属性供 Javascript 使用。举例来说，我们希望能够禁用手指捏放操作，然后指定一个初始的地图可见区域。禁用捏放操作只需要一个布尔值类型的属性就行了，所以我们添加这么一行："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RNTMapManager.m\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["注意我们现在把类型声明为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BOOL"
      }), "类型——React Native 用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTConvert"
      }), "来在 JavaScript 和原生代码之间完成类型转换。如果转换无法完成，会产生一个“红屏”的报错提示，这样你就能立即知道代码中出现了问题。如果一切进展顺利，上面这个宏就已经包含了导出属性的全部实现。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在要想禁用捏放操作，我们只需要在 JS 里设置对应的属性："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MyApp.js\n<MapView zoomEnabled={false} style={{ flex: 1 }} />\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["但这样并不能很好的说明这个组件的用法——用户要想知道我们的组件有哪些属性可以用，以及可以取什么样的值，他不得不一路翻到 Objective-C 的代码。要解决这个问题，我们可以创建一个封装组件，并且通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropTypes"
      }), "来说明这个组件的接口。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MapView.js\nimport PropTypes from 'prop-types';\nimport React from 'react';\nimport { requireNativeComponent } from 'react-native';\n\nclass MapView extends React.Component {\n  render() {\n    return <RNTMap {...this.props} />;\n  }\n}\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool\n};\n\nconst RNTMap = requireNativeComponent('RNTMap', MapView);\n\nexport default MapView;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在我们有了一个封装好的组件，还有了一些注释文档，用户使用起来也更方便了。注意我们现在把", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "requireNativeComponent"
      }), "的第二个参数从 null 变成了用于封装的组件", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MapView"
      }), "。这使得 React Native 的底层框架可以检查原生属性和包装类的属性是否一致，来减少出现问题的可能。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在，让我们添加一个更复杂些的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "region"
      }), "属性。我们首先添加原生代码："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RNTMapManager.m\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这段代码比刚才的一个简单的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BOOL"
      }), "要复杂的多了。现在我们多了一个需要做类型转换的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MKCoordinateRegion"
      }), "类型，还添加了一部分自定义的代码，这样当我们在 JS 里改变地图的可视区域的时候，视角会平滑地移动过去。在我们提供的函数体内，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "json"
      }), "代表了 JS 中传递的尚未解析的原始值。函数里还有一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "view"
      }), "变量，使得我们可以访问到对应的视图实例。最后，还有一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "defaultView"
      }), "对象，这样当 JS 给我们发送 null 的时候，可以把视图的这个属性重置回默认值。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你可以为视图编写任何你所需要的转换函数——下面就是用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTConvert"
      }), " 实现的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MKCoordinateRegion"
      }), "。它使用了 ReactNative 中已经存在的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTConvert+CoreLocation"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RNTMapManager.m\n\n#import \"RCTConvert+Mapkit.h\"\n\n// RCTConvert+Mapkit.h\n\n#import <MapKit/MapKit.h>\n#import <React/RCTConvert.h>\n#import <CoreLocation/CoreLocation.h>\n#import <React/RCTConvert+CoreLocation.h>\n\n@interface RCTConvert (Mapkit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;\n\n@end\n\n@implementation RCTConvert(MapKit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json\n{\n  json = [self NSDictionary:json];\n  return (MKCoordinateSpan){\n    [self CLLocationDegrees:json[@\"latitudeDelta\"]],\n    [self CLLocationDegrees:json[@\"longitudeDelta\"]]\n  };\n}\n\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json\n{\n  return (MKCoordinateRegion){\n    [self CLLocationCoordinate2D:json],\n    [self MKCoordinateSpan:json]\n  };\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这些转换函数被设计为可以安全的处理任何 JS 扔过来的 JSON：当有任何缺少的键或者其它问题发生的时候，显示一个“红屏”的错误提示。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了完成", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "region"
      }), "属性的支持，我们还需要在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "propTypes"
      }), "里添加相应的说明（否则我们会立刻收到一个错误提示），然后就可以像使用其他属性一样使用了："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MapView.js\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n\n  /**\n   * 地图要显示的区域。\n   *\n   * 区域由中心点坐标和区域范围坐标来定义。\n   *\n   */\n  region: PropTypes.shape({\n    /**\n     * 地图中心点的坐标。\n     */\n    latitude: PropTypes.number.isRequired,\n    longitude: PropTypes.number.isRequired,\n\n    /**\n     * 最小/最大经、纬度间的距离。\n     *\n     */\n    latitudeDelta: PropTypes.number.isRequired,\n    longitudeDelta: PropTypes.number.isRequired,\n  }),\n};\n\n// MyApp.js\n\nrender() {\n  const region = {\n    latitude: 37.48,\n    longitude: -122.16,\n    latitudeDelta: 0.1,\n    longitudeDelta: 0.1,\n  };\n  return (\n    <MapView\n      region={region}\n      zoomEnabled={false}\n      style={{ flex: 1 }}\n    />\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在你可以看到 region 属性的整个结构已经加上了文档说明——将来可能我们会自动生成一些类似的代码，但目前还没有实现。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["有时候你的原生组件有一些特殊的属性希望导出，但并不希望它成为公开的接口。举个例子，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Switch"
      }), "组件可能会有一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onChange"
      }), "属性用来传递原始的原生事件，然后导出一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onValueChange"
      }), "属性，这个属性在调用的时候会带上", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Switch"
      }), "的状态作为参数之一。这样的话你可能不希望原生专用的属性出现在 API 之中，也就不希望把它放到", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "propTypes"
      }), "里。可是如果你不放的话，又会出现一个报错。解决方案就是带上额外的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "nativeOnly"
      }), "参数，像这样："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {\n  nativeOnly: { onChange: true }\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在我们已经有了一个原生地图组件，并且从 JS 可以很容易的控制它了。不过我们怎么才能处理来自用户的事件，譬如缩放操作或者拖动来改变可视区域？"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["截至目前，我们从 manager 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-(UIView *)view"
      }), " 方法返回了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MKMapView"
      }), " 实例。我们没法直接为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MKMapView"
      }), " 添加新的属性，所以我们只能创建一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MKMapView"
      }), " 的子类用于我们自己的视图中。我们可以在这个子类中添加 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onRegionChange"
      }), " 回调方法："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RNTMapView.h\n\n#import <MapKit/MapKit.h>\n\n#import <React/RCTComponent.h>\n\n@interface RNTMapView: MKMapView\n\n@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;\n\n@end\n\n// RNTMapView.m\n\n#import \"RNTMapView.h\"\n\n@implementation RNTMapView\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["需要注意的是，所有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBubblingEventBlock"
      }), " 必须以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "on"
      }), " 开头。然后在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RNTMapManager"
      }), "上声明一个事件处理函数属性，将其作为所暴露出来的所有视图的委托，并调用本地视图的事件处理将事件转发至 JS。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec{9,17,31-48}",
        children: "// RNTMapManager.m\n\n#import <MapKit/MapKit.h>\n#import <React/RCTViewManager.h>\n\n#import \"RNTMapView.h\"\n#import \"RCTConvert+Mapkit.h\"\n\n@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE()\n\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\nRCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)\n\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n\t[view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n\n- (UIView *)view\n{\n  RNTMapView *map = [RNTMapView new];\n  map.delegate = self;\n  return map;\n}\n\n#pragma mark MKMapViewDelegate\n\n- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated\n{\n  if (!mapView.onRegionChange) {\n    return;\n  }\n\n  MKCoordinateRegion region = mapView.region;\n  mapView.onRegionChange(@{\n    @\"region\": @{\n      @\"latitude\": @(region.center.latitude),\n      @\"longitude\": @(region.center.longitude),\n      @\"latitudeDelta\": @(region.span.latitudeDelta),\n      @\"longitudeDelta\": @(region.span.longitudeDelta),\n    }\n  });\n}\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在委托方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-mapView:regionDidChangeAnimated:"
      }), "中，根据对应的视图调用事件处理函数并传递区域数据。调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onRegionChange"
      }), "事件会触发 JavaScript 端的同名回调函数。这个回调会传递原生事件对象，然后我们通常都会在封装组件里来处理这个对象，以使 API 更简明："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// MapView.js\n\nclass MapView extends React.Component {\n  _onRegionChange = (event) => {\n    if (!this.props.onRegionChange) {\n      return;\n    }\n\n    // process raw event...\n    this.props.onRegionChange(event.nativeEvent);\n  }\n  render() {\n    return (\n      <RNTMap\n        {...this.props}\n        onRegionChange={this._onRegionChange}\n      />\n    );\n  }\n}\nMapView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onRegionChange: PropTypes.func,\n  ...\n};\n\n// MyApp.js\n\nclass MyApp extends React.Component {\n  onRegionChange(event) {\n    // Do stuff with event.region.latitude, etc.\n  }\n\n  render() {\n    const region = {\n      latitude: 37.48,\n      longitude: -122.16,\n      latitudeDelta: 0.1,\n      longitudeDelta: 0.1,\n    };\n    return (\n      <MapView\n        region={region}\n        zoomEnabled={false}\n        onRegionChange={this.onRegionChange}\n      />\n    );\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "handling-multiple-native-views",
      children: "Handling multiple native views"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A React Native view can have more than one child view in the view tree eg."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<View>\n  <MyNativeView />\n  <MyNativeView />\n  <Button />\n</View>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this example, the class ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " is a wrapper for a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeComponent"
      }), " and exposes methods, which will be called on the iOS platform. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " is defined in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView.ios.js"
      }), " and contains proxy methods of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeComponent"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When the user interacts with the component, like clicking the button, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), " of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " changes. In this case ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIManager"
      }), " would not know which ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " should be handled and which one should change ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), ". Below you will find a solution to this problem:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<View>\n<MyNativeView ref={this.myNativeReference}>/>\n<MyNativeView ref={this.myNativeReference2}>/>\n<Button onPress={() => { this.myNativeReference.callNativeMethod() }}/>\n</View>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now the above component has a reference to a particular ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " which allows us to use a specific instance of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), ". Now the button can control which ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), " should change its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), ". In this example let's assume that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "callNativeMethod"
      }), " changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView.ios.js"
      }), " contains code as follow:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "class MyNativeView extends React.Component<> {\n  callNativeMethod = () => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      UIManager.getViewManagerConfig('RNCMyNativeView').Commands\n        .callNativeMethod,\n      []\n    );\n  };\n  render() {\n    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "callNativeMethod"
      }), " is our custom iOS method which for example changes the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "backgroundColor"
      }), " which is exposed through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MyNativeView"
      }), ". This method uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIManager.dispatchViewManagerCommand"
      }), " which needs 3 parameters:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(nonnull NSNumber \\*)reactTag"
        }), "  -  id of react view."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "commandID:(NSInteger)commandID"
        }), "  -  Id of the native method that should be called"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "commandArgs:(NSArray<id> \\*)commandArgs"
        }), "  -  Args of the native method that we can pass from JS to native."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RNCMyNativeViewManager.m"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "#import <React/RCTViewManager.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTLog.h>\nRCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {\n  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {\n      NativeView *view = viewRegistry[reactTag];\n      if (!view || ![view isKindOfClass:[NativeView class]]) {\n          RCTLogError(@\"Cannot find NativeView with tag #%@\", reactTag);\n          return;\n      }\n      [view callNativeMethod];\n  }];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "callNativeMethod"
      }), " is defined in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RNCMyNativeViewManager.m"
      }), " file and contains only one parameter which is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "(nonnull NSNumber*) reactTag"
      }), ". This exported function will find a particular view using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "addUIBlock"
      }), " which contains the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "viewRegistry"
      }), " parameter and returns the component based on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "reactTag"
      }), " allowing it to call the method on the correct component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "样式",
      children: "样式"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["因为我们所有的视图都是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIView"
      }), "的子类，大部分的样式属性应该直接就可以生效。但有一部分组件会希望使用自己定义的默认样式，例如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "UIDatePicker"
      }), "希望自己的大小是固定的。这个默认属性对于布局算法的正常工作来说很重要，但我们也希望在使用这个组件的时候可以覆盖这些默认的样式。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "DatePickerIOS"
      }), "实现这个功能的办法是通过封装一个拥有弹性样式的额外视图，然后在内层的视图上应用一个固定样式（通过原生传递来的常数生成）："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// DatePickerIOS.ios.js\n\nimport { UIManager } from 'react-native';\nconst RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;\n...\n  render: function() {\n    return (\n      <View style={this.props.style}>\n        <RCTDatePickerIOS\n          ref={DATEPICKER}\n          style={styles.rkDatePickerIOS}\n          ...\n        />\n      </View>\n    );\n  }\n});\n\nconst styles = StyleSheet.create({\n  rkDatePickerIOS: {\n    height: RCTDatePickerIOSConsts.ComponentHeight,\n    width: RCTDatePickerIOSConsts.ComponentWidth,\n  },\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["常量", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTDatePickerIOSConsts"
      }), "在原生代码中导出，从一个组件的实际布局上获取到："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// RCTDatePickerManager.m\n\n- (NSDictionary *)constantsToExport\n{\n  UIDatePicker *dp = [[UIDatePicker alloc] init];\n  [dp layoutIfNeeded];\n\n  return @{\n    @\"ComponentHeight\": @(CGRectGetHeight(dp.frame)),\n    @\"ComponentWidth\": @(CGRectGetWidth(dp.frame)),\n    @\"DatePickerModes\": @{\n      @\"time\": @(UIDatePickerModeTime),\n      @\"date\": @(UIDatePickerModeDate),\n      @\"datetime\": @(UIDatePickerModeDateAndTime),\n    }\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本向导覆盖了包装原生组件所需了解的许多方面，不过你可能还有很多知识需要了解，譬如特殊的方式来插入和布局子视图。如果你想更深入了解，可以尝试阅读一些", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React/Views",
        children: "源代码"
      }), "。"]
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

/***/ 63238:
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
    title: "提示",
    type: "info",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块和原生组件是我们传统架构中使用的稳定技术。\n当新架构稳定后，它们将被弃用。新架构使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-turbomodules",
        children: "TurboModule"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./the-new-architecture/pillars-fabric-components",
        children: "Fabric 组件"
      }), "来实现类似的功能。"]
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