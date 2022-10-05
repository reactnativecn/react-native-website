---
id: architecture-overview
title: 架构概览
slug: /overview
---

:::info
Welcome to the Architecture Overview! If you're getting started with React Native, please refer to <a href="/docs/getting-started">Guides</a> section. Continue reading to learn how internals of React Native work!

本文档还在持续更新中。Please make sure to come back later to check for new information.
:::

Architecture Overview is intended to share conceptual overview of how React Native's internals work. 目标读者主要是生态库的开发者、核心贡献者和特别有好奇心的人。 If you are an app developer, it is not a requirement to be familiar with this material to be effective with React Native. You can still benefit from the overview as it will give you insights into how React Native works under the hood. Feel free to share your feedback on the <a href="https://github.com/reactwg/react-native-new-architecture/discussions/9">discussion inside the working group</a> for this section.

## 目录

- 渲染
  - [Fabric 渲染器](fabric-renderer)
  - [渲染流水线](render-pipeline)
  - [跨平台的实现](xplat-implementation)
  - [视图拍平](view-flattening)
  - [线程模型](threading-model)
- Build Tools
  - [Bundled Hermes](bundled-hermes)
- [术语表](glossary)
