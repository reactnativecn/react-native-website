# 什么是 Codegen？

**Codegen** 是一个用来避免编写大量重复代码的工具。使用 Codegen **不是强制要求**：你也可以手动编写所有生成出来的代码。不过，Codegen 会生成脚手架代码，这可以为你节省大量时间。

React Native 会在每次构建 iOS 或 Android 应用时自动调用 Codegen。有时，你可能希望手动运行 Codegen 脚本，以了解究竟生成了哪些类型和文件：这在开发 [Turbo Native Modules](/docs/turbo-native-modules-introduction) 和 Fabric Native Components 时是很常见的场景。

<!-- TODO: Add links to TM and FC -->

## Codegen 的工作原理

**Codegen** 是一个与 React Native 应用紧密耦合的流程。Codegen 脚本位于 `react-native` NPM 包中，应用会在构建时调用这些脚本。

Codegen 会遍历项目中的文件夹，从你在 `package.json` 中指定的目录开始，查找一些包含自定义模块和组件规范（spec 或 specs）的特定 JS 文件。规范文件是使用带类型的 JavaScript 方言编写的 JS 文件：React Native 目前支持 Flow 和 TypeScript。

每当 Codegen 找到一个规范文件时，它都会生成与之相关的样板代码。Codegen 会生成一些 C++ 粘合代码，然后再生成平台专属代码：Android 使用 Java，iOS 使用 Objective-C++。
