"use strict";
exports.id = 89838;
exports.ids = [89838];
exports.modules = {

/***/ 82189:
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
/* harmony import */ var _the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23454);


const frontMatter = {
	id: 'native-modules-ios',
	title: 'iOS 原生模块'
};
const contentTitle = undefined;
const metadata = {
  "id": "native-modules-ios",
  "title": "iOS 原生模块",
  "description": "有时候 App 需要访问平台 API，但 React Native 可能还没有相应的模块封装；或者你需要复用 Objective-C、Swift 或 C++代码，而不是用 JavaScript 重新实现一遍；又或者你需要实现某些高性能、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。",
  "source": "@site/versioned_docs/version-0.72/native-modules-ios.md",
  "sourceDirName": ".",
  "slug": "/native-modules-ios",
  "permalink": "/docs/0.72/native-modules-ios",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-ios.md",
  "tags": [],
  "version": "0.72",
  "frontMatter": {
    "id": "native-modules-ios",
    "title": "iOS 原生模块"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Android 原生模块",
    "permalink": "/docs/0.72/native-modules-android"
  },
  "next": {
    "title": "原生模块配置",
    "permalink": "/docs/0.72/native-modules-setup"
  }
};
const assets = {

};




const toc = [..._the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "Native Module Setup",
  "id": "native-module-setup",
  "level": 2
}, {
  "value": "iOS 日历模块演示",
  "id": "ios-日历模块演示",
  "level": 2
}, {
  "value": "参数类型",
  "id": "参数类型",
  "level": 2
}, {
  "value": "回调函数",
  "id": "回调函数",
  "level": 2
}, {
  "value": "Promises",
  "id": "promises",
  "level": 2
}, {
  "value": "多线程",
  "id": "多线程",
  "level": 2
}, {
  "value": "依赖注入",
  "id": "依赖注入",
  "level": 2
}, {
  "value": "导出常量",
  "id": "导出常量",
  "level": 2
}, {
  "value": "实现 <code>+ requiresMainQueueSetup</code>",
  "id": "实现--requiresmainqueuesetup",
  "level": 3
}, {
  "value": "给 JavaScript 端发送事件",
  "id": "给-javascript-端发送事件",
  "level": 2
}, {
  "value": "优化无监听处理的事件",
  "id": "优化无监听处理的事件",
  "level": 3
}, {
  "value": "从 Swift 导出",
  "id": "从-swift-导出",
  "level": 2
}, {
  "value": "Reserved Method Names",
  "id": "reserved-method-names",
  "level": 2
}, {
  "value": "invalidate()",
  "id": "invalidate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_the_new_architecture_markdown_native_deprecation_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "有时候 App 需要访问平台 API，但 React Native 可能还没有相应的模块封装；或者你需要复用 Objective-C、Swift 或 C++代码，而不是用 JavaScript 重新实现一遍；又或者你需要实现某些高性能、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们把 React Native 设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果 React Native 还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "本文是关于如何封装原生模块的高级向导，我们假设您已经具备 Objective-C 或者 Swift，以及 iOS 核心库（Foundation、UIKit）的相关知识。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "native-module-setup",
      children: "Native Module Setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Native modules are usually distributed as npm packages, except that for them to be native modules they will contain an Xcode library project. To get the basic scaffolding make sure to read ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "native-modules-setup",
        children: "Native Modules Setup"
      }), " guide first."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ios-日历模块演示",
      children: "iOS 日历模块演示"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本向导将会用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/library/mac/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html",
        children: "iOS 日历 API"
      }), "作为示例。我们的目标就是在 Javascript 中可以访问到 iOS 的日历功能。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 React Native 中，一个“原生模块”就是一个实现了“RCTBridgeModule”协议的 Objective-C 类，其中 RCT 是 ReaCT 的缩写。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManager.h\n#import <React/RCTBridgeModule.h>\n\n@interface CalendarManager : NSObject <RCTBridgeModule>\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridgeModule"
      }), "协议，你的类需要包含", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_MODULE()"
      }), "宏。这个宏也可以添加一个参数用来指定在 JavaScript 中访问这个模块的名字。如果你不指定，默认就会使用这个 Objective-C 类的名字。如果类名以 RCT 开头，则 JavaScript 端引入的模块名会自动移除这个前缀。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManager.m\n#import \"CalendarManager.h\"\n\n@implementation CalendarManager\n\n// To export a module named CalendarManager\nRCT_EXPORT_MODULE();\n\n// This would name the module AwesomeCalendarManager instead\n// RCT_EXPORT_MODULE(AwesomeCalendarManager);\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你必须明确的声明要给 JavaScript 导出的方法，否则 React Native 不会导出任何方法。声明通过", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_METHOD()"
      }), "宏来实现："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "#import \"CalendarManager.h\"\n#import <React/RCTLog.h>\n\n@implementation CalendarManager\n\nRCT_EXPORT_MODULE();\n\nRCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)\n{\n  RCTLogInfo(@\"Pretending to create an event %@ at %@\", name, location);\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "现在从 Javascript 里可以这样调用这个方法："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { NativeModules } from 'react-native';\nconst CalendarManager = NativeModules.CalendarManager;\nCalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey'\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "注意"
        }), ": JavaScript 方法名"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["导出到 JavaScript 的方法名是 Objective-C 的方法名的第一个部分。React Native 还定义了一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCT_REMAP_METHOD()"
        }), "宏，它可以指定 JavaScript 方法名。因为 JavaScript 端不能有同名不同参的方法存在，所以当原生端存在重载方法时，可以使用这个宏来避免在 JavaScript 端的名字冲突。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The CalendarManager module is instantiated on the Objective-C side using a [CalendarManager new] call. 桥接到 JavaScript 的方法返回值类型必须是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "void"
      }), "。React Native 的桥接操作是异步的，所以要返回结果给 JavaScript，你必须通过回调或者触发事件来进行。（参见本文档后面的部分）"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "参数类型",
      children: "参数类型"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXPORT_METHOD"
      }), " 支持所有标准 JSON 类型，包括："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["string (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSString"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["number (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSInteger"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "float"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "double"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CGFloat"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSNumber"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["boolean (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "BOOL"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSNumber"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["array (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSArray"
        }), ") 可包含本列表中任意类型"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["object (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSDictionary"
        }), ") 可包含 string 类型的键和本列表中任意类型的值"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["function (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTResponseSenderBlock"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["除此以外，任何", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTConvert"
      }), "类支持的的类型也都可以使用(参见", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React/Base/RCTConvert.h",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTConvert"
        })
      }), "了解更多信息)。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTConvert"
      }), "还提供了一系列辅助函数，用来接收一个 JSON 值并转换到原生 Objective-C 类型或类。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在我们的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarManager"
      }), "例子里，我们需要把事件的时间交给原生方法。我们不能在桥接通道里传递 Date 对象，所以需要把日期转化成字符串或数字来传递。我们可以这么实现原生函数："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)\n{\n  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "或者这样："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)\n{\n  NSDate *date = [RCTConvert NSDate:ISO8601DateString];\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "不过我们可以依靠自动类型转换的特性，跳过手动的类型转换，而直接这么写："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)\n{\n  // Date is ready to use!\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "对应 JavaScript 端既可以这样："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "CalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey',\n  date.getTime()\n); // 把日期以unix时间戳形式传递\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "也可以这样："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "CalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey',\n  date.toISOString()\n); // 把日期以ISO-8601的字符串形式传递\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["两个值都会被转换为正确的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NSDate"
      }), "类型。但如果提供一个不合法的值，譬如一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Array"
      }), "，则会产生一个“红屏”报错信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["随着", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarManager.addEvent"
      }), "方法变得越来越复杂，参数的个数越来越多，其中有一些可能是可选的参数。在这种情况下我们应该考虑修改我们的 API，用一个 dictionary 来存放所有的事件参数，像这样："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "#import <React/RCTConvert.h>\n\nRCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)\n{\n  NSString *location = [RCTConvert NSString:details[@\"location\"]];\n  NSDate *time = [RCTConvert NSDate:details[@\"time\"]];\n  ...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后在 JS 里这样调用："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "CalendarManager.addEvent('Birthday Party', {\n  location: '4 Privet Drive, Surrey',\n  time: date.getTime(),\n  description: '...'\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "注意"
        }), ": 关于数组和映射"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Objective-C 并没有提供确保这些结构体内部值的类型的方式。你的原生模块可能希望收到一个字符串数组，但如果 JavaScript 在调用的时候提供了一个混合 number 和 string 的数组，你会收到一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSArray"
        }), "，里面既有", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSNumber"
        }), "也有", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSString"
        }), "。对于数组来说，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTConvert"
        }), "提供了一些类型化的集合，譬如", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NSStringArray"
        }), "或者", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "UIColorArray"
        }), "，你可以用在你的函数声明中。对于映射而言，开发者有责任自己调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTConvert"
        }), "的辅助方法来检测和转换值的类型。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "回调函数",
      children: "回调函数"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "警告"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "本章节内容目前还处在实验阶段，因为我们还并没有太多的实践经验来处理回调函数。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块还支持一种特殊的参数——回调函数。它提供了一个函数来把返回值传回给 JavaScript。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)\n{\n  NSArray *events = ...\n  callback(@[[NSNull null], events]);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTResponseSenderBlock"
      }), "只接受一个参数——传递给 JavaScript 回调函数的参数数组。在上面这个例子里我们用 Node.js 的常用习惯：第一个参数是一个错误对象（没有发生错误的时候为 null），而剩下的部分是函数的返回值。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "CalendarManager.findEvents((error, events) => {\n  if (error) {\n    console.error(error);\n  } else {\n    this.setState({ events: events });\n  }\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块通常只应调用回调函数一次。但是，它可以保存 callback 并在将来调用。这在封装那些通过“委托函数”来获得返回值的 iOS API 时最为常见。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React/Modules/RCTAlertManager.m",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTAlertManager"
        })
      }), "中就属于这种情况。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你想传递一个更接近", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Error"
      }), "类型的对象给 JavaScript，可以用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React/Base/RCTUtils.h",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTUtils.h"
        })
      }), "提供的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTMakeError"
      }), "函数。现在它仅仅是发送了一个和 Error 结构一样的 dictionary 给 JavaScript，但我们考虑在将来版本里让它产生一个真正的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Error"
      }), "对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "promises",
      children: "Promises"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "译注"
      }), "：这一部分涉及到较新的 js 语法和特性，不熟悉的读者建议先阅读 ES6 的相关书籍和文档。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块还可以使用 promise 来简化代码，搭配 ES2016(ES7)标准的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "async/await"
      }), "语法则效果更佳。如果桥接原生方法的最后两个参数是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTPromiseResolveBlock"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTPromiseRejectBlock"
      }), "，则对应的 JS 方法就会返回一个 Promise 对象。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们把上面的代码用 promise 来代替回调进行重构："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_REMAP_METHOD(findEvents,\n                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve\n                 rejecter:(RCTPromiseRejectBlock)reject)\n{\n  NSArray *events = ...\n  if (events) {\n    resolve(events);\n  } else {\n    NSError *error = ...\n    reject(@\"no_events\", @\"There were no events\", error);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["现在 JavaScript 端的方法会返回一个 Promise。这样你就可以在一个声明了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "async"
      }), "的异步函数内使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "await"
      }), "关键字来调用，并等待其结果返回。（虽然这样写着看起来像同步操作，但实际仍然是异步的，并不会阻塞执行来等待）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "async function updateEvents() {\n  try {\n    const events = await CalendarManager.findEvents();\n\n    this.setState({ events });\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nupdateEvents();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "多线程",
      children: "多线程"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["原生模块不应对自己被调用时所处的线程做任何假设。React Native 在一个独立的串行 GCD 队列中调用原生模块的方法，但这属于实现的细节，并且可能会在将来的版本中改变。通过实现方法", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "- (dispatch_queue_t)methodQueue"
      }), "，原生模块可以指定自己想在哪个队列中被执行。具体来说，如果模块需要调用一些必须在主线程才能使用的 API，那应当这样指定："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "- (dispatch_queue_t)methodQueue\n{\n  return dispatch_get_main_queue();\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["类似的，如果一个操作需要花费很长时间，原生模块不应该阻塞住，而是应当声明一个用于执行操作的独立队列。举个例子，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTAsyncLocalStorage"
      }), "模块创建了自己的一个 queue，这样它在做一些较慢的磁盘操作的时候就不会阻塞住 React 本身的消息队列："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "- (dispatch_queue_t)methodQueue\n{\n  return dispatch_queue_create(\"com.facebook.React.AsyncLocalStorageQueue\", DISPATCH_QUEUE_SERIAL);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["指定的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "methodQueue"
      }), "会被你模块里的所有方法共享。如果你的方法中“只有一个”是耗时较长的（或者是由于某种原因必须在不同的队列中运行的），你可以在函数体内用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "dispatch_async"
      }), "方法来在另一个队列执行，而不影响其他方法："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)\n{\n  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{\n    // 在这里执行长时间的操作\n    ...\n    // 你可以在任何线程/队列中执行回调函数\n    callback(@[...]);\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "注意"
        }), ": 在模块之间共享分发队列"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "methodQueue"
        }), "方法会在模块被初始化的时候被执行一次，然后会被 React Native 的桥接机制保存下来，所以你不需要自己保存队列的引用，除非你希望在模块的其它地方使用它。但是，如果你希望在若干个模块中共享同一个队列，则需要自己保存并返回相同的队列实例；仅仅是返回相同名字的队列是不行的。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "依赖注入",
      children: "依赖注入"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["bridge 会自动注册实现了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridgeModule"
      }), "协议的模块，但是你可能也希望能够自己去初始化自定义的模块实例（这样可以注入依赖）。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["要实现这个功能，你需要实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridgeDelegate"
      }), "协议，初始化", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridge"
      }), "，并且在初始化方法里指定代理。然后用初始化好的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridge"
      }), "实例初始化一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTRootView"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "id<RCTBridgeDelegate> moduleInitialiser = [[classThatImplementsRCTBridgeDelegate alloc] init];\n\nRCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:moduleInitialiser launchOptions:nil];\n\nRCTRootView *rootView = [[RCTRootView alloc]\n                        initWithBridge:bridge\n                            moduleName:kModuleName\n                     initialProperties:nil];\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "导出常量",
      children: "导出常量"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "原生模块可以导出一些常量，这些常量在 JavaScript 端随时都可以访问。用这种方法来传递一些静态数据，可以避免通过 bridge 进行一次来回交互。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "- (NSDictionary *)constantsToExport\n{\n  return @{ @\"firstDayOfTheWeek\": @\"Monday\" };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "JavaScript 端可以随时同步地访问这个数据："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "console.log(CalendarManager.firstDayOfTheWeek);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["但是注意这个常量仅仅在初始化的时候导出了一次，所以即使你在运行期间改变", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "constantToExport"
      }), "返回的值，也不会影响到 JavaScript 环境下所得到的结果。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "实现--requiresmainqueuesetup",
      children: ["实现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "+ requiresMainQueueSetup"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you override ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "- constantsToExport"
      }), " then you should also implement ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "+ requiresMainQueueSetup"
      }), " to let React Native know if your module needs to be initialized on the main thread. Otherwise you will see a warning that in the future your module may be initialized on a background thread unless you explicitly opt out with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "+ requiresMainQueueSetup"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "+ (BOOL)requiresMainQueueSetup\n{\n  return YES;  // only do this if your module initialization relies on calling UIKit!\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-Swift",
        children: "// Swift\n// CalendarManager.swift\n@objc(CalendarManager)\nclass CalendarManager: NSObject, RCTBridgeModule {\nstatic func moduleName() -> String! {\n      return \"CalendarManager\";\n}\nstatic func requiresMainQueueSetup() -> Bool {\n    return true\n}\n\nIf your module does not require access to UIKit, then you should respond to `+ requiresMainQueueSetup` with `NO`.\n\n### 枚举常量\n\n用`NS_ENUM`定义的枚举类型必须要先扩展对应的 RCTConvert 方法才可以作为函数参数传递。\n\n假设我们要导出如下的`NS_ENUM`定义：\n\n```objectivec\ntypedef NS_ENUM(NSInteger, UIStatusBarAnimation) {\n    UIStatusBarAnimationNone,\n    UIStatusBarAnimationFade,\n    UIStatusBarAnimationSlide,\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "你需要这样来扩展 RCTConvert 类："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "@implementation RCTConvert (StatusBarAnimation)\n  RCT_ENUM_CONVERTER(UIStatusBarAnimation, (@{ @\"statusBarAnimationNone\" : @(UIStatusBarAnimationNone),\n                                               @\"statusBarAnimationFade\" : @(UIStatusBarAnimationFade),\n                                               @\"statusBarAnimationSlide\" : @(UIStatusBarAnimationSlide)}),\n                      UIStatusBarAnimationNone, integerValue)\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接着你可以这样定义方法并且导出 enum 值作为常量："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "- (NSDictionary *)constantsToExport\n{\n  return @{ @\"statusBarAnimationNone\" : @(UIStatusBarAnimationNone),\n            @\"statusBarAnimationFade\" : @(UIStatusBarAnimationFade),\n            @\"statusBarAnimationSlide\" : @(UIStatusBarAnimationSlide) };\n};\n\nRCT_EXPORT_METHOD(updateStatusBarAnimation:(UIStatusBarAnimation)animation\n                                completion:(RCTResponseSenderBlock)callback)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["你的枚举现在会用上面提供的选择器进行转换（上面的例子中是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "integerValue"
      }), "），然后再传递给你导出的函数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "给-javascript-端发送事件",
      children: "给 JavaScript 端发送事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["即使没有被 JavaScript 调用，原生模块也可以给 JavaScript 发送事件通知。最好的方法是继承", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTEventEmitter"
      }), "，实现", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "suppportEvents"
      }), "方法并调用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "self sendEventWithName:"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManager.h\n#import <React/RCTBridgeModule.h>\n#import <React/RCTEventEmitter.h>\n\n@interface CalendarManager : RCTEventEmitter <RCTBridgeModule>\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManager.m\n#import \"CalendarManager.h\"\n\n@implementation CalendarManager\n\nRCT_EXPORT_MODULE();\n\n- (NSArray<NSString *> *)supportedEvents\n{\n  return @[@\"EventReminder\"];\n}\n\n- (void)calendarEventReminderReceived:(NSNotification *)notification\n{\n  NSString *eventName = notification.userInfo[@\"name\"];\n  [self sendEventWithName:@\"EventReminder\" body:@{@\"name\": eventName}];\n}\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["JavaScript 端的代码可以创建一个包含你的模块的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NativeEventEmitter"
      }), "实例来订阅这些事件。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { NativeEventEmitter, NativeModules } from 'react-native';\nconst { CalendarManager } = NativeModules;\n\nconst calendarManagerEmitter = new NativeEventEmitter(CalendarManager);\n\nconst subscription = calendarManagerEmitter.addListener(\n  'EventReminder',\n  (reminder) => console.log(reminder.name)\n);\n...\n// 别忘了取消订阅，通常在componentWillUnmount生命周期方法中实现。\nsubscription.remove();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "优化无监听处理的事件",
      children: "优化无监听处理的事件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["如果你发送了一个事件却没有任何监听处理，则会因此收到一个资源警告。要优化因此带来的额外开销，你可以在你的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTEventEmitter"
      }), "子类中覆盖", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "startObserving"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "stopObserving"
      }), "方法。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "@implementation CalendarManager\n{\n  bool hasListeners;\n}\n\n// 在添加第一个监听函数时触发\n-(void)startObserving {\n    hasListeners = YES;\n    // Set up any upstream listeners or background tasks as necessary\n}\n\n// Will be called when this module's last listener is removed, or on dealloc.\n-(void)stopObserving {\n    hasListeners = NO;\n    // Remove upstream listeners, stop unnecessary background tasks\n}\n\n- (void)calendarEventReminderReceived:(NSNotification *)notification\n{\n  NSString *eventName = notification.userInfo[@\"name\"];\n  if (hasListeners) { // Only send events if anyone is listening\n    [self sendEventWithName:@\"EventReminder\" body:@{@\"name\": eventName}];\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "从-swift-导出",
      children: "从 Swift 导出"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Swift 不支持宏，所以从 Swift 向 React Native 导出类和函数需要多做一些设置，但是大致与 Objective-C 是相同的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["假设我们已经有了一个一样的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CalendarManager"
      }), "，不过是用 Swift 实现的类:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-swift",
        children: "// CalendarManager.swift\n\n@objc(CalendarManager)\nclass CalendarManager: NSObject {\n\n  @objc(addEvent:location:date:)\n  func addEvent(name: String, location: String, date: NSNumber) -> Void {\n    // Date is ready to use!\n  }\n\n  @objc\n  func constantsToExport() -> [String: Any]! {\n    return [\"someKey\": \"someValue\"]\n  }\n\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "注意"
        }), ": 你必须使用@objc 标记来确保类和函数对 Objective-C 公开。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接着，创建一个私有的实现文件，并将必要的信息注册到 React Native 中。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManagerBridge.m\n#import <React/RCTBridgeModule.h>\n\n@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)\n\nRCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)\n\n@end\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["请注意，一旦你", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html",
        children: "在 IOS 中混用 2 种语言"
      }), ", 那就还需要一个额外的桥接头文件，称作“bridging header”，用来导出 Objective-C 文件给 Swift。如果你是通过 Xcode 菜单中的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "File>New File"
      }), "来创建的 Swift 文件，Xcode 会自动为你创建这个头文件。在这个头文件中，你需要引入", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCTBridgeModule.h"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// CalendarManager-Bridging-Header.h\n#import <React/RCTBridgeModule.h>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["同样的，你也可以使用", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXTERN_REMAP_MODULE"
      }), "和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RCT_EXTERN_REMAP_METHOD"
      }), "来改变导出模块和方法的 JavaScript 调用名称。了解更多信息，请参阅", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/master/React/Base/RCTBridgeModule.h",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RCTBridgeModule"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Important when making third party modules"
        }), ": Static libraries with Swift are only supported in Xcode 9 and later. In order for the Xcode project to build when you use Swift in the iOS static library you include in the module, your main app project must contain Swift code and a bridging header itself. If your app project does not contain any Swift code, a workaround can be a single empty .swift file and an empty bridging header."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "reserved-method-names",
      children: "Reserved Method Names"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "invalidate",
      children: "invalidate()"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Native modules can conform to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/aa0ef15335fe27c0c193e3e968789886d82e82ed/React/Base/RCTInvalidating.h",
        children: "RCTInvalidating"
      }), " protocol on iOS by implementing the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "invalidate"
      }), " method. This method ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/facebook/react-native/blob/18e3303cd46a72668caae46e28c7c6ae69fbf8f8/ReactCommon/turbomodule/core/platform/ios/RCTTurboModuleManager.mm#L456",
        children: "can be invoked"
      }), " when the native bridge is invalidated (ie: on devmode reload). You should avoid implementing this method in general, as this mechanism exists for backwards compatibility and may be removed in the future."]
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

/***/ 23454:
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