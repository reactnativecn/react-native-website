---
id: reactnativeversion
title: ReactNativeVersion
---

```tsx
import {ReactNativeVersion} from 'react-native';
```

`ReactNativeVersion` API 会在 JavaScript 端提供已解析的 `react-native` 包版本。应用和库可以用它检查兼容性，或启用特定版本的行为。

:::note

公开 API 中还提供了 [`Platform.constants.reactNativeVersion`](platform#constants)。**不过**，它是由各平台原生层报告的 React Native 版本。

:::

## 示例

```tsx
import {ReactNativeVersion} from 'react-native';

const version = ReactNativeVersion.getVersionString(); // 0.88.1
const {major, minor, patch, prerelease} = ReactNativeVersion;
major; // 0
minor; // 88
patch; // 1
prerelease; // null
```

---

# 文档

## 属性

### `major`

```tsx
static major: number;
```

已解析 `react-native` 包的主版本号。

---

### `minor`

```tsx
static minor: number;
```

已解析 `react-native` 包的次版本号。

---

### `patch`

```tsx
static patch: number;
```

已解析 `react-native` 包的修订版本号。

---

### `prerelease`

```tsx
static prerelease: string | null;
```

已解析 `react-native` 包的预发布标签；稳定版则为 `null`。

## 方法

### `getVersionString()`

```tsx
static getVersionString(): string;
```

返回完整版本字符串，格式为 `major.minor.patch` 或 `major.minor.patch-prerelease`。
