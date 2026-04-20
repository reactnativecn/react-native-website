---
id: metro
title: Metro
---

React Native 使用 [Metro](https://metrobundler.dev/) 来构建 JavaScript 代码和资源。

## 配置 Metro

Metro 的配置选项可以在项目的 `metro.config.js` 文件中自定义。它可以导出以下任一种形式：

- **一个对象（推荐）**，会与 Metro 的内部默认配置合并。
- [**一个函数**](#advanced-using-a-config-function)，调用时会传入 Metro 的内部默认配置，并且应返回最终的配置对象。

:::tip
有关全部可用配置项的文档，请参阅 Metro 官网的 [**Configuring Metro**](https://metrobundler.dev/docs/configuration)。
:::

在 React Native 中，你的 Metro 配置应当扩展 [`@react-native/metro-config`](https://www.npmjs.com/package/@react-native/metro-config) 或 [`@expo/metro-config`](https://www.npmjs.com/package/@expo/metro-config)。这些包包含了构建和运行 React Native 应用所必需的默认配置。

下面是 React Native 模板项目中的默认 `metro.config.js` 文件：

<!-- prettier-ignore -->
```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

你希望自定义的 Metro 选项，都可以在 `config` 对象中完成。

### Advanced: Using a config function

导出配置函数表示你选择自行管理最终配置——**Metro 不会再应用任何内部默认值**。当你需要读取 Metro 的基础默认配置对象，或需要动态设置选项时，这种模式会很有用。

:::info
**从 `@react-native/metro-config` 0.72.1 开始**，已经不再需要使用配置函数来访问完整的默认配置。请参见下方的 **Tip** 部分。
:::

<!-- prettier-ignore -->
```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = function (baseConfig) {
  const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
  const {resolver: {assetExts, sourceExts}} = defaultConfig;

  return mergeConfig(
    defaultConfig,
    {
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
      },
    },
  );
};
```

:::tip
使用配置函数适用于高级场景。更简单的做法是直接从 `@react-native/metro-config` 读取这些默认值，例如在自定义 `sourceExts` 时就是如此。

**Alternative**

<!-- prettier-ignore -->
```js
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
```

**不过！** 我们更推荐在覆盖这些配置值时直接复制并编辑，把配置文件本身作为唯一可信来源。

✅ **Recommended**

<!-- prettier-ignore -->
```js
const config = {
  resolver: {
    sourceExts: ['js', 'ts', 'tsx', 'svg'],
  },
};
```

:::

## 进一步了解 Metro

- [Metro 官网](https://metrobundler.dev/)
- [视频：App.js 2023 上的 “Metro & React Native DevX” 演讲](https://www.youtube.com/watch?v=c9D4pg0y9cI)
