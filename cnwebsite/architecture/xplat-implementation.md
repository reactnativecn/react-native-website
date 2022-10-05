---
id: xplat-implementation
title: 跨平台的实现
---

import FabricWarning from './\_fabric-warning.mdx';

<FabricWarning />

#### React Native 渲染器使用了一个跨平台的核心渲染系统

在上一代 React Native 渲染器中，React 影子树、布局逻辑、视图拍平算法是在各个平台单独实现的。当前的渲染器的设计上采用的是跨平台的解决方案，共享了核心的 C++ 实现。

React Native 团队计划将动画系统加入到渲染系统中，并将 React Native 的渲染系统扩展到新的平台，例如 Windows、游戏机、电视等等。

使用 C++ 作为核心渲染系统有几个有点。首先，单一实现降低了开发和维护成本。其次，它提升了创建 React 影子树的性能，同时在 Android 上，也因为不再使用 JNI for Yoga，降低了 Yoga 渲染引擎的开销，布局计算的性能也有所提升。最后，每个 React 影子节点在 C++ 中占用的内存，比在 Kotlin 或 Swift 中占用的要小。

React Native 团队还使用了强制不可变的 C++ 特性，来确保并发访问时共享资源即便不加锁保护，也不会有问题。

但在 Android 端还有两种例外，渲染器依然会有 JNI 的开销：

- 复杂视图，比如 Text、TextInput 等，依然会使用 JNI 来传输属性 props。
- 在挂载阶段依然会使用 JNI 来发送变更操作。

React Native 团队在探索使用 `ByteBuffer` 序列化数据这种新的机制，来替换 `ReadableMap`，减少 JNI 的开销。目标是将 JNI 的开销减少 35~50%。

渲染器提供了 C++ 与两边通信的 API：

- **(i)** 与 React 通信
- **(ii)** 与宿主平台通信

关于 **(i)** React 与渲染器的通信，包括**渲染（render）** React 树和监听**事件（event）**，比如 `onLayout`、`onKeyPress`、touch 等。

关于 **(ii)** React Native 渲染器与宿主平台的通信，包括在屏幕上**挂载（mount）**宿主视图，包括 create、insert、update、delete 宿主视图，和监听用户在宿主平台产生的**事件**。

![Cross-platform implementation diagram](/docs/assets/Architecture/xplat-implementation/xplat-implementation-diagram.png)
