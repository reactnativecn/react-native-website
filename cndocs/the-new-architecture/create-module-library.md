# 为你的模块创建一个库

React Native 拥有丰富的库生态，可以帮助解决常见问题。我们会在 [reactnative.directory](https://reactnative.directory) 网站上收集 React Native 库，这对每一位 React Native 开发者来说都是非常值得收藏的资源。

有时，你可能正在开发一个模块，而它值得被提取成一个独立的库以便复用代码。它可以是一个你希望在所有应用中复用的库，也可以是一个你想作为开源组件发布到生态中的库，甚至可以是一个你打算销售的库。

在本指南中，你将学习：

- 如何将一个模块提取成库
- 如何使用 NPM 分发这个库

## 将模块提取成库

你可以使用 [`create-react-native-library`](https://callstack.github.io/react-native-builder-bob/create) 工具来创建一个新库。这个工具会为新库生成所需的全部样板代码：所有配置文件，以及各个平台所需的文件。它还带有一个友好的交互式菜单，引导你完成库的创建过程。

要将一个模块提取为独立库，你可以按以下步骤操作：

1. 创建新库
2. 将代码从 App 移到 Library
3. 更新代码以反映新的结构
4. 发布它。

### 1. 创建一个库

1. 先运行下面的命令开始创建流程：

```sh
npx create-react-native-library@latest <Name of Your Library>
```

2. 为你的模块填写名称。它必须是一个合法的 npm 名称，因此应该全部小写。你可以使用 `-` 来分隔单词。
3. 为包填写描述。
4. 继续填写表单，直到看到 _"What type of library do you want to develop?"_ 这个问题。
   ![What type of Library](/docs/assets/what-library.png)
5. 在本指南中，请选择 _Turbo module_ 选项。注意，你既可以创建适用于 New Architecture 的库，也可以创建适用于 Legacy Architecture 的库。
6. 接着，你可以选择是要一个可访问平台能力的库（Kotlin 和 Objective-C），还是一个共享的 C++ 库（Android 和 iOS 上都使用 C++）。
7. 最后，选择 `Test App` 作为最后一个选项。这个选项会在库目录中一并创建并配置一个单独的应用。

交互式提示完成后，这个工具会创建一个文件夹，在 Visual Studio Code 中它的结构大致如下：

<img className="half-size" alt="Folder structure after initializing a new library." src="/docs/assets/turbo-native-modules/c++visualstudiocode.webp" />

你可以随意浏览为你生成的代码。不过，最重要的部分包括：

- `android` 文件夹：这里存放 Android 代码
- `cpp` 文件夹：这里存放 C++ 代码
- `ios` 文件夹：这里存放 iOS 代码
- `src` 文件夹：这里存放 JS 代码。

`package.json` 已经根据你在 `create-react-native-library` 中提供的信息完成配置，包括包名和包描述。注意，`package.json` 也已经配置好用于运行 Codegen。

```json
  "codegenConfig": {
    "name": "RN<your module name>Spec",
    "type": "all",
    "jsSrcsDir": "src",
    "outputDir": {
      "ios": "ios/generated",
      "android": "android/generated"
    },
    "android": {
      "javaPackageName": "com.<name-of-the-module>"
    }
  },
```

最后，这个库已经自带了让它能与 iOS 和 Android 正确链接所需的全部基础设施。

### 2. 将代码从你的 App 复制过来

本指南的剩余部分假设你的应用中已经有一个本地 Turbo Native Module，并且它是按照站点中其他指南创建的：平台专属的 Turbo Native Module，或者[跨平台 Turbo Native Module](./pure-cxx-modules)。它同样适用于组件，以及 legacy architecture 的模块和组件。你只需要根据情况调整需要复制和更新的文件。

<!-- TODO: add links for Turbo Native Modules -->

1. **[对 legacy architecture 的模块和组件不是必需的]** 将你应用中 `specs` 文件夹里的代码移动到 `create-react-native-library` 创建出来的 `src` 文件夹中。
2. 更新 `index.ts` 文件，正确导出 Turbo Native Module 的 spec，以便可以从库中访问。例如：

```ts
import NativeSampleModule from './NativeSampleModule';

export default NativeSampleModule;
```

3. 复制原生模块代码：
   - 如果有 Android 原生模块，用你在应用中编写的代码替换 `android/src/main/java/com/<name-of-the-module>` 里的内容。
   - 如果有 iOS 原生模块，用你在应用中编写的代码替换 `ios` 文件夹中的内容。
   - 如果有 C++ 原生模块，用你在应用中编写的代码替换 `cpp` 文件夹中的内容。

4. **[对 legacy architecture 的模块和组件不是必需的]** 将所有旧 spec 名称的引用更新为新 spec 名称，也就是库的 `package.json` 中 `codegenConfig` 字段所定义的名称。例如，如果应用的 `package.json` 里把 `codegenConfig.name` 设置为 `AppSpecs`，而库中叫做 `RNNativeSampleModuleSpec`，那么你需要把所有 `AppSpecs` 都替换成 `RNNativeSampleModuleSpec`。

这样就完成了！你已经把所有必需的代码从应用中移出，并放进了一个独立的库中。

## 测试你的库

`create-react-native-library` 自带一个很实用的示例应用，并且已经预先配置好可以与这个库正常配合工作。这是测试它的绝佳方式！

如果你查看 `example` 文件夹，会发现它与通过 [`react-native-community/template`](https://github.com/react-native-community/template) 创建的新 React Native 应用具有相同的结构。

要测试你的库：

1. 进入 `example` 文件夹。
2. 运行 `yarn install` 安装全部依赖。
3. 仅对 iOS，需要安装 CocoaPods：`cd ios && pod install`。
4. 在 `example` 文件夹中运行 `yarn android` 来构建并运行 Android。
5. 在 `example` 文件夹中运行 `yarn ios` 来构建并运行 iOS。

## 将你的库作为本地模块使用

有些场景下，你可能希望把这个库作为应用的本地模块复用，而不发布到 NPM。

在这种情况下，通常会出现这样的目录结构：你的库与应用是同级目录。

```shell
Development
├── App
└── Library
```

在这种情况下，你同样可以使用通过 `create-react-native-library` 创建出来的库。

1. 进入 `App` 文件夹并运行 `yarn add ../Library`，把你的库添加到应用中。
2. 仅对 iOS，进入 `App/ios` 文件夹并运行 `bundle exec pod install` 来安装依赖。
3. 更新 `App.tsx` 中的代码，从你的库中导入对应代码。例如：

```tsx
import NativeSampleModule from '../Library/src/index';
```

如果你现在直接运行应用，Metro 将找不到它需要提供给应用的 JS 文件。这是因为 Metro 是从 `App` 文件夹启动的，它无法访问位于 `Library` 文件夹中的 JS 文件。为了解决这个问题，我们需要按如下方式更新 `metro.config.js` 文件：

```diff
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
+ const path = require('path');

- const config = {}
+ const config = {
+  // Make Metro able to resolve required external dependencies
+  watchFolders: [
+    path.resolve(__dirname, '../Library'),
+  ],
+  resolver: {
+    extraNodeModules: {
+      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
+    },
+  },
+};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

`watchFolders` 配置会让 Metro 额外监视一些路径中的文件和变更，这里就是 `../Library` 路径，其中包含你需要的 `src/index` 文件。
`resolver` 属性则是为了把应用所使用的 React Native 代码提供给库。库中可能会引用并导入 React Native 的代码：如果没有额外的 resolver，库中的这些导入就会失败。

到这里，你就可以像平常一样构建并运行应用：

- 在 `example` 文件夹中运行 `yarn android` 来构建并运行 Android。
- 在 `example` 文件夹中运行 `yarn ios` 来构建并运行 iOS。

## 在 NPM 上发布这个库

借助 `create-react-native-library`，发布到 NPM 所需的基础设置已经准备好了。

1. 在你的模块目录中运行 `yarn install` 安装依赖。
2. 运行 `yarn prepare` 来构建库。
3. 运行 `yarn release` 来发布。

过一段时间后，你就能在 NPM 上看到你的库。可以运行下面的命令来验证：

```bash
npm view <package.name>
```

其中 `package.name` 是你在初始化库时于 `package.json` 中设置的 `name`。

现在，你可以在应用中通过下面的命令安装这个库：

```bash
yarn add <package.name>
```

:::note
仅对 iOS 而言，每次你安装一个包含原生代码的新模块后，都需要重新安装 CocoaPods。推荐运行 `bundle exec pod install`；如果你没有使用 Ruby 的 Bundler，也可以运行 `pod install`（不推荐）。
:::

恭喜！你已经发布了你的第一个 React Native 库。
