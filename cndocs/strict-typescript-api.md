---
id: strict-typescript-api
title: 严格 TypeScript API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RNRepoLink from '@site/core/RNRepoLink';

:::info[0.87 新增]

**严格 API 现已默认启用**（此前从 0.80 版本起可选择加入）。这是一项**破坏性变更**，下文指南会详细说明。

:::

严格 TypeScript API 是 React Native 的现代 TypeScript API，取代早期版本中手动维护的 TypeScript 类型定义。

## 主要变更（破坏性）

1. **不再支持深度导入。** API 仅限于 `react-native` 的索引文件。这是一份范围更明确、更严格的公共 API 契约，也能确保 React Native 源代码内部文件路径的变更不会成为破坏性变更。
2. **直接从源代码生成。** React Native 过去使用单独手动维护的类型；现在从源代码生成类型，可以提高覆盖率、正确性和兼容性保证。

### 选择退出 <div className="label primary">自 0.87 起</div>

严格 API 是一项**破坏性变更**，并非所有应用和库都能立即完成迁移。

我们仍会继续提供以前手动维护的类型，你可以通过 `tsconfig.json` 配置恢复使用它们。请注意，我们会在未来版本中移除这一退出选项。

```diff title="tsconfig.json"
  {
    "extends": "@react-native/typescript-config",
    "compilerOptions": {
      ...
+     "customConditions": ["react-native", "react-native-legacy-deep-imports"]
    }
  }
```

:::info[遇到问题或想提供反馈？]

从 0.87 开始默认启用严格 API 是一项影响整个生态系统的变更；为了将来能为 React Native 提供稳定的 API 保证，我们必须完成这一步。

从最初的 0.80 预览版开始，我们一直与社区和合作伙伴共同讨论根入口应导出哪些 API，并有意调整类型名称和结构。

我们相信主要问题都已解决，但仍可能存在边缘情况。如果你在 0.87 或更高版本中选择退出严格 API，我们很希望了解原因，请前往[**讨论帖**](https://github.com/react-native-community/discussions-and-proposals/discussions/1015)反馈。

:::

---

## 迁移指南

:::tip

可以使用 [**/migrate-to-strict-api**](https://www.skills.sh/react-native-community/skills/migrate-to-strict-api) 技能，让智能体帮助迁移代码库。

```sh
npx skills add react-native-community/skills --skill migrate-to-strict-api
```

:::

### 开始之前

无论是升级到 0.87，还是在更早的版本中选择加入，启用严格 API 都只会影响你自己项目的 TypeScript 分析，作用范围由项目的 `tsconfig.json` 决定。

大多数情况下，各个代码库可以独立迁移：应用开发者不需要等待某个依赖先选择加入，库作者也不需要等待用户先迁移。

#### 保持启用 `skipLibCheck`

上述行为依赖 `skipLibCheck`，而 `@react-native/typescript-config` 默认会启用它。这样，第三方 `.d.ts` 文件内部产生的错误不会出现在检查结果中。如果你的项目覆盖了该配置，请在开始迁移前重新启用，否则你会看到来自依赖项且无法自行修复的错误。

#### 更新依赖项

有些依赖项在严格 API 下可能仍有兼容性问题。当类型错误涉及某个库时，请先检查并升级到已修复的版本。

一种具体情况是：某些库会发布供项目直接导入的原始 TypeScript 源码，例如 Jest 设置文件。这些文件会作为项目的一部分接受类型检查。一些常用库已经重新打包了这些入口：

- `@expensify/react-native-live-markdown` — 已在 [0.1.335](https://github.com/Expensify/react-native-live-markdown/pull/771) 中修复
- `react-native-safe-area-context` — 已在 [5.8.1](https://github.com/AppAndFlow/react-native-safe-area-context/pull/745) 中修复

<details>
<summary>**进阶：排除不兼容的库**</summary>

如果某个不兼容的库在 `node_modules` 下产生错误（通常为 `TS2307: Cannot find module 'react-native/Libraries/...'`），可以将导入的子路径重定向到一个无类型声明的桩文件，在本地将其排除在 TypeScript 分析之外：

```json title="tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "some-library/jest/mock": ["./untyped-module.d.ts"]
    }
  }
}
```

```ts title="untyped-module.d.ts"
declare const anyExport: unknown;
export default anyExport;
```

同时也请向该库报告兼容性问题；上面链接的修复可以作为很好的参考模板。

</details>

### 新的 `CodegenTypes` 命名空间

用于 Codegen 的 `Int32`、`Double`、`WithDefault` 等类型现在统一放在 `CodegenTypes` 命名空间下。同样，`codegenNativeComponent` 和 `codegenNativeCommands` 现在可以直接从 `react-native` 包导入，不再需要使用深度导入。

即使未启用严格 API，`CodegenTypes` 命名空间以及 `codegenNativeCommands`、`codegenNativeComponent` 也可以从 `react-native` 包导入，以便第三方库更轻松地采用新写法。

#### 迁移

<Tabs defaultValue="after">
<TabItem value="before" label="之前">

```ts title=""
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Int32,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

interface NativeProps extends ViewProps {
  enabled?: WithDefault<boolean, true>;
  size?: Int32;
}

export default codegenNativeComponent<NativeProps>(
  'RNCustomComponent',
);
```

</TabItem>
<TabItem value="after" label="之后">

```ts title=""
import {CodegenTypes, codegenNativeComponent} from 'react-native';

interface NativeProps extends ViewProps {
  enabled?: CodegenTypes.WithDefault<boolean, true>;
  size?: CodegenTypes.Int32;
}

export default codegenNativeComponent<NativeProps>(
  'RNCustomComponent',
);
```

</TabItem>
</Tabs>

### Ref 现在使用 `*Instance` 类型 <div className="label primary">自 0.87 起</div>

每个内置组件现在都有专门用于 ref 的 `*Instance` 类型，例如 `ViewInstance`、`TextInputInstance`、`ScrollViewInstance`。在严格 TypeScript API 下，**推荐使用这些类型为 ref 标注类型**。

此前 `useRef<View>` 能正常工作，是因为 `View` 和其他组件被定义为类。严格 API 将内置组件定义为函数，因此 `View` 指向函数本身，**组件类型名称不再能用作 ref 类型**。

<Tabs defaultValue="after">
<TabItem value="before" label="之前">

```tsx title=""
import {useRef} from 'react';
import {View, TextInput} from 'react-native';

function MyComponent() {
  const viewRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);

  return (
    <>
      <View ref={viewRef} />
      <TextInput ref={inputRef} />
    </>
  );
}
```

</TabItem>
<TabItem value="after" label="之后">

```tsx title=""
import {useRef} from 'react';
import type {
  TextInput,
  TextInputInstance,
  View,
  ViewInstance,
} from 'react-native';

function MyComponent() {
  const viewRef = useRef<ViewInstance>(null);
  const inputRef = useRef<TextInputInstance>(null);

  return (
    <>
      <View ref={viewRef} />
      <TextInput ref={inputRef} />
    </>
  );
}
```

</TabItem>
</Tabs>

`*Instance` 类型也可以直接用于 `Animated` 变体，无需单独的类型：

```tsx title=""
const viewRef = useRef<ViewInstance>(null);

<View ref={viewRef} />
<Animated.View ref={viewRef} />
```

这也取代了已移除的 `Animated.LegacyRef` 类型。原来使用 `ref={ref as React.Ref<Animated.LegacyRef<View>>}` 的代码，在 ref 使用 `ViewInstance` 类型后可以直接简化为 `ref={ref}`。

<details>
<summary>**可用的实例类型**</summary>

| 组件                      | 实例类型                          |
| ------------------------- | --------------------------------- |
| `ActivityIndicator`       | `ActivityIndicatorInstance`       |
| `Button`                  | `ButtonInstance`                  |
| `DrawerLayoutAndroid`     | `DrawerLayoutAndroidInstance`     |
| `FlatList`                | `FlatListInstance`                |
| `Image`                   | `ImageInstance`                   |
| `ImageBackground`         | `ImageBackgroundInstance`         |
| `KeyboardAvoidingView`    | `KeyboardAvoidingViewInstance`    |
| `Modal`                   | `ModalInstance`                   |
| `Pressable`               | `PressableInstance`               |
| `ProgressBarAndroid`      | `ProgressBarAndroidInstance`      |
| `RefreshControl`          | `RefreshControlInstance`          |
| `SafeAreaView`            | `SafeAreaViewInstance`            |
| `ScrollView`              | `ScrollViewInstance`              |
| `SectionList`             | `SectionListInstance`             |
| `StatusBar`               | `StatusBarInstance`               |
| `Switch`                  | `SwitchInstance`                  |
| `Text`                    | `TextInstance`                    |
| `TextInput`               | `TextInputInstance`               |
| `TouchableHighlight`      | `TouchableHighlightInstance`      |
| `TouchableNativeFeedback` | `TouchableNativeFeedbackInstance` |
| `TouchableOpacity`        | `TouchableOpacityInstance`        |
| `View`                    | `ViewInstance`                    |
| `VirtualizedList`         | `VirtualizedListInstance`         |
| `VirtualizedSectionList`  | `VirtualizedSectionListInstance`  |

不支持 ref 的组件（`InputAccessoryView`、`TouchableWithoutFeedback`、`experimental_LayoutConformance`）没有对应的实例类型。

</details>

**迁移方式**

| 之前                                            | 之后                         |
| ----------------------------------------------- | ---------------------------- |
| `useRef<View>(null)`                            | `useRef<ViewInstance>(null)` |
| `useRef<React.ComponentRef<typeof View>>(null)` | `useRef<ViewInstance>(null)` |
| `useRef<HostInstance>(null)`（用于特定组件）    | `useRef<ViewInstance>(null)` |
| `Ref<Animated.LegacyRef<View>>`                 | `Ref<ViewInstance>`          |

:::note

`React.ComponentRef<typeof View>` 仍然有效，生成的类型与 `ViewInstance` 相同。`*Instance` 类型只是便于使用的别名，两种方式都可以正常工作。

:::

### 移除 `*Static` 类型

#### 迁移

<Tabs defaultValue="after">
<TabItem value="before" label="之前">

```tsx title=""
import {Linking, LinkingStatic} from 'react-native';

function foo(linking: LinkingStatic) {}
foo(Linking);
```

</TabItem>
<TabItem value="after" label="之后">

```tsx title=""
import {Linking} from 'react-native';

function foo(linking: Linking) {}
foo(Linking);
```

</TabItem>
</Tabs>

以下 API 过去使用 `*Static` 类型名称，并声明一个该类型的变量。大多数情况下还存在一个别名，使值和类型能以同一个标识符导出，但也有部分 API 缺少该别名。

<details>
<summary>**受影响的 API**</summary>

- `AlertStatic`
- `ActionSheetIOSStatic`
- `ToastAndroidStatic`
- `InteractionManagerStatic`（没有对应的 `InteractionManager` 类型别名）
- `UIManagerStatic`
- `PlatformStatic`
- `SectionListStatic`
- `PixelRatioStatic`（没有对应的 `PixelRatio` 类型别名）
- `AppStateStatic`
- `AccessibilityInfoStatic`
- `ImageResizeModeStatic`
- `BackHandlerStatic`
- `DevMenuStatic`（没有对应的 `DevMenu` 类型别名）
- `ClipboardStatic`
- `PermissionsAndroidStatic`
- `ShareStatic`
- `DeviceEventEmitterStatic`
- `LayoutAnimationStatic`
- `KeyboardStatic`（没有对应的 `Keyboard` 类型别名）
- `DevSettingsStatic`（没有对应的 `DevSettings` 类型别名）
- `I18nManagerStatic`
- `EasingStatic`
- `PanResponderStatic`
- `NativeModulesStatic`（没有对应的 `NativeModules` 类型别名）
- `LogBoxStatic`
- `PushNotificationIOSStatic`
- `SettingsStatic`
- `VibrationStatic`

</details>

### 更新测试 mock

大多数项目不需要改动。现有针对 `react-native/*` 路径的 `jest.mock()` 调用仍然有效：严格 API 不会改变 Jest 或 Metro 解析模块路径的方式，而 `jest.mock()` 中的路径字符串也不会接受类型检查。

如果测试文件将深层路径作为模块导入（例如用 `jest.requireActual()` 包装真实实现），TypeScript 会将该导入报告为无类型。当根入口没有可替代的导出时，可以保留该导入并抑制错误：

```ts
// @ts-expect-error - React Native 内部模块，在严格 API 下没有类型
import NativeAppState from 'react-native/Libraries/AppState/NativeAppState';
```

另外，如果 Jest 设置文件导入了 `react-native/Libraries/Core/InitializeCore`，请按 [`InitializeCore` 现已改为 `react-native/setup-env`](#initializecore-现已改为-react-nativesetup-env-自-087-起) 一节进行更新。

## 其他破坏性变更

### `InitializeCore` 现已改为 `react-native/setup-env` <div className="label primary">自 0.87 起</div>

与其他深度导入不同，该模块是一个具有副作用的入口点，在 `react-native` 根入口中没有对应导出。自 0.87 起，`InitializeCore` 已被弃用。

```diff title=""
- import 'react-native/Libraries/Core/InitializeCore';
+ import 'react-native/setup-env';
```

大多数应用从未直接导入它；它通常出现在 Jest 设置文件和自定义入口点中。

### Animated 类型的变化

Animated 节点过去是基于插值输出的泛型类型。现在它们是非泛型类型，但 `interpolate` 方法本身是泛型方法。

`Animated.LegacyRef` 已不再可用，请改用适当的 `*Instance` 类型（例如为 `Animated.View` 使用 `ViewInstance`）。

### 可选属性的统一类型

在新类型中，每个可选属性都将被标注为 `type | undefined`。

### 移除部分已弃用的类型

长期弃用的 `*Properties` 别名在严格 API 下无法访问。它们源自早期将属性类型重命名为现代 `*Props` 名称的变更，每个别名都有直接替代项：`ViewProperties` 对应 `ViewProps`，`TextInputProperties` 对应 `TextInputProps`，其他类型依此类推；`ImagePropertiesSourceOptions` 则对应 `ImageSourcePropType`。

完整别名列表请参阅 <RNRepoLink href="/packages/react-native/types/public/DeprecatedPropertiesAlias.d.ts">`DeprecatedPropertiesAlias.d.ts`</RNRepoLink>。

### 移除遗留的组件属性

部分仅存在于类型定义中、但组件并未使用或缺少实际定义的属性已被移除（例如 `Text` 上的 `lineBreakMode`、`ScrollView` 上的 `scrollWithoutAnimationTo`，以及定义在 transform 数组之外的 transform 样式）。

### 移除仅供内部使用的辅助类型

由于旧类型定义的配置方式，所有定义过的类型都可以从 `react-native` 包访问，其中包括未显式导出的类型，以及本应仅供内部使用的辅助类型。

典型示例包括与 StyleSheet 相关的类型（如 `RecursiveArray`、`RegisteredStyle`、`Falsy`）和与 Animated 相关的类型（如 `WithAnimatedArray`、`WithAnimatedObject`）。

## 常见问题

<details>
<summary>**这会改变运行时行为吗？**</summary>

不会。严格 API 只会改变 TypeScript 解析的类型定义；两种模式解析的是同一份 JavaScript，应用产物不会受到影响。

请注意，0.87 还会另外从包导出中移除 `react-native/src/private/*`，这确实会影响运行时，但该变更与严格 API 无关。

</details>

<details>
<summary>**我维护一个库。是否必须先迁移，用户才能升级？**</summary>

不需要，库和应用应该可以独立迁移。严格 API 通过各个项目自己的 `tsconfig.json` 按项目启用：应用采用严格 API 不会影响库，库采用严格 API 也不会影响用户。使用者只会看到库发布的类型定义。

但有两点需要注意：如果你发布了供使用者直接导入的原始 TypeScript 源码（例如 Jest mock 入口），这些源码会在使用者的项目中接受类型检查，因此不能依赖深度导入；请改为发布编译后的产物及 `.d.ts` 文件（参阅[更新依赖项](#更新依赖项)）。同时仍应计划迁移自己的源代码，因为旧类型的退出选项只是临时措施。

</details>

<details>
<summary>**我使用的 API 没有从 `react-native` 导出，这是 bug 吗？**</summary>

大多数情况下这是有意设计，并非疏漏。我们的 [RFC](https://github.com/react-native-community/discussions-and-proposals/pull/894) 将公共 API 限定为 `react-native` 索引文件导出的内容，因此一些过去可以访问的内部实现现在属于私有 API。

如果你依赖的内容在根入口没有等价导出，请在[讨论帖](https://github.com/react-native-community/discussions-and-proposals/discussions/1015)中告诉我们。理由充分时，我们可能会将相应 API 提升为索引导出。

</details>

<details>
<summary>**为什么要替换 React Native 手动维护的类型？**</summary>

React Native 使用 [Flow](https://flow.org/) 而不是 TypeScript 编写。它的 TypeScript 类型过去由社区贡献并手动维护（最初来自 DefinitelyTyped 上的 `@types/react-native`），因此存在准确性缺口。直接从源代码生成类型可以确保类型始终与实现一致。

完整背景请参阅[迈向稳定的 JavaScript API](/blog/2025/06/12/moving-towards-a-stable-javascript-api)。

</details>

:::note[了解更多]

<div style={{display: 'flex', alignItems: 'center', gap: 40}}>
  <div style={{flex: 1, gap: 8}}>
    <strong style={{display: 'block', marginBottom: 8}}>
      观看演讲！
    </strong>
    <span>
      我们在 <strong>App.js 2025</strong> 上深入分享了严格 TypeScript
      API 背后的动机与工作。
    </span>
    <a
      href="https://www.youtube.com/live/UTaJlqhTk2g?si=SDRmj80kss7hXuGG&t=6520"
      target="_blank">
      <strong>前往 YouTube 观看</strong>
    </a>
  </div>
  <img
    src="/blog/assets/0.80-js-stable-api-appjs.jpg"
    style={{
      flexShrink: 0,
      maxWidth: '200px',
      aspectRatio: '16/9',
      borderRadius: 10,
    }}
    alt="App.js 2025 演讲"
  />
</div>

:::
