---
id: environment-setup
title: React Native 入门指南
hide_table_of_contents: true
---

import PlatformSupport from '@site/src/theme/PlatformSupport';
import BoxLink from '@site/src/theme/BoxLink';

**React Native 允许了解 React 的开发者创建原生应用。** 同时，原生开发者可以使用 React Native 通过一次编写通用功能来实现跨原生平台的一致性。

我们相信，体验 React Native 的最佳方式是通过**框架（Framework）**——一个包含所有必要 API 的工具箱，让你构建生产就绪的应用。

你也可以不使用框架直接使用 React Native，但我们发现大多数开发者受益于使用像 [Expo](https://expo.dev) 这样的 React Native 框架。Expo 提供了基于文件的路由、高质量的通用库，以及无需管理原生文件即可编写修改原生代码的插件等功能。

<details>
<summary>我可以不使用框架直接使用 React Native 吗？</summary>

可以。你可以不使用框架直接使用 React Native。**但是，如果你正在用 React Native 构建新应用，我们建议使用框架。**

简而言之，你将能够把时间花在编写应用上，而不是在编写应用的同时还要自己编写整个框架。

React Native 社区花费了多年时间来完善导航、访问原生 API、处理原生依赖等方面的方法。大多数应用都需要这些核心功能。React Native 框架从应用一开始就提供了这些功能。

如果没有框架，你要么需要自己编写解决方案来实现核心功能，要么需要将一系列现有库组合在一起创建框架的骨架。这需要大量实际工作，无论是在启动应用时还是后来维护它时都是如此。

如果你的应用有不适用于框架的特殊约束，或者你更喜欢自己解决这些问题，你可以使用 Android Studio、Xcode 在没有框架的情况下创建 React Native 应用。如果你对这条路径感兴趣，请学习如何[设置你的环境](set-up-your-environment)以及如何[在没有框架的情况下入门](getting-started-without-a-framework)。

</details>

## 使用 Expo 开始一个新的 React Native 项目

<PlatformSupport platforms={['android', 'ios', 'tv', 'web']} />

Expo 是一个生产级的 React Native 框架。Expo 提供了使开发应用更容易的开发工具，例如基于文件的路由、原生模块标准库等等。

Expo 的框架是免费且开源的，在 [GitHub](https://github.com/expo) 和 [Discord](https://chat.expo.dev) 上拥有活跃的社区。Expo 团队与 Meta 的 React Native 团队密切合作，将最新的 React Native 功能引入 Expo SDK。

Expo 团队还提供 Expo Application Services (EAS)，这是一组可选的服务，在开发过程的每一步都补充了 Expo 框架。

要创建一个新的 Expo 项目，请在终端中运行以下命令：

```shell
npx create-expo-app@latest
```

创建应用后，请查看 Expo 入门指南的其余部分，开始开发你的应用。

<BoxLink href="https://docs.expo.dev/get-started/set-up-your-environment">继续使用 Expo</BoxLink>
