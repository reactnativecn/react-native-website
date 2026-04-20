---
id: fast-refresh
title: Fast Refresh
---

Fast Refresh 是 React Native 的一项特性，可以让你在修改 React 组件时几乎立即获得反馈。Fast Refresh 默认启用，你也可以在 [React Native 开发者菜单](/docs/debugging#accessing-the-in-app-developer-menu) 中切换 “Enable Fast Refresh”。启用 Fast Refresh 后，大多数编辑都会在一两秒内反映出来。

## 工作原理

- 如果你编辑的是一个**只导出 React 组件**的模块，Fast Refresh 只会更新该模块的代码，并重新渲染你的组件。你可以编辑该文件中的任何内容，包括样式、渲染逻辑、事件处理函数或 effects。
- 如果你编辑的是一个导出内容**不只是 React 组件**的模块，Fast Refresh 会重新运行该模块，以及所有导入它的其他模块。因此，如果 `Button.js` 和 `Modal.js` 都导入了 `Theme.js`，那么编辑 `Theme.js` 会更新这两个组件。
- 最后，如果你**编辑的文件**被 **React 树之外的模块**导入，Fast Refresh **会退回到执行完整重载**。例如，某个文件既渲染了一个 React 组件，又导出了一个被**非 React 组件**导入的值。举例来说，你的组件文件可能还导出了一个常量，而某个非 React 的工具模块导入了它。在这种情况下，可以考虑把这个常量迁移到单独的文件中，再在两个文件里分别导入它。这样就能重新启用 Fast Refresh。其他类似情况通常也可以用同样的方式解决。

## 错误恢复能力

如果你在 Fast Refresh 会话期间写出了**语法错误**，可以修复后再次保存文件。红框会消失。包含语法错误的模块不会运行，因此你不需要重新加载应用。

如果你遇到了**模块初始化期间的运行时错误**（例如把 `StyleSheet.create` 错写成 `Style.create`），那么在你修复错误后，Fast Refresh 会话会继续。红框会消失，模块也会更新。

如果你因为失误导致了**组件内部的运行时错误**，那么在修复错误之后，Fast Refresh 会话**同样**会继续。在这种情况下，React 会使用更新后的代码重新挂载你的应用。

如果你的应用中有 [error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)（为了在生产环境中优雅地处理失败，这是个好主意），那么它们会在红框出现后的下一次编辑时重试渲染。从这个意义上说，使用错误边界可以避免你总是被踢回根应用界面。不过请记住，错误边界不应划分得**过于细碎**。它们在生产环境中也会被 React 使用，因此应当始终经过有意识的设计。

## 局限性

Fast Refresh 会尽量保留你正在编辑的组件中的本地 React state，但前提是这样做是安全的。下面是一些你可能会看到文件每次编辑后本地 state 都被重置的原因：

- 类组件的本地 state 不会被保留（只有函数组件和 Hooks 的 state 会被保留）。
- 你正在编辑的模块除了 React 组件之外，可能还导出了*其他*内容。
- 有时，一个模块会导出调用高阶组件后的结果，例如 `createNavigationContainer(MyScreen)`。如果返回的组件是类组件，state 就会被重置。

从长期来看，随着你的代码库更多地迁移到函数组件和 Hooks，在更多场景下都可以期待 state 被保留下来。

## 提示

- Fast Refresh 默认会保留函数组件（以及 Hooks）中的 React 本地 state。
- 有时你可能想要*强制*重置 state，并让组件重新挂载。例如，当你在微调只会在挂载时发生的动画时，这会很方便。要实现这一点，你可以在正在编辑的文件中的任意位置添加 `// @refresh reset`。这个指令只作用于当前文件，它会告诉 Fast Refresh 在每次编辑时重新挂载该文件中定义的组件。

## Fast Refresh 与 Hooks

在可能的情况下，Fast Refresh 会尝试在两次编辑之间保留组件的 state。特别是，只要你不改变 `useState` 和 `useRef` 的参数，或不改变 Hook 调用的顺序，它们就会保留之前的值。

带有依赖项的 Hooks——例如 `useEffect`、`useMemo` 和 `useCallback`——在 Fast Refresh 期间**总是**会更新。发生 Fast Refresh 时，它们的依赖项列表会被忽略。

例如，当你把 `useMemo(() => x * 2, [x])` 改成 `useMemo(() => x * 10, [x])` 时，即使依赖项 `x` 没有变化，它仍然会重新运行。如果 React 不这样做，你的修改就不会反映到屏幕上！

有时这可能会带来意料之外的结果。例如，即使某个 `useEffect` 的依赖项数组为空，它在 Fast Refresh 期间仍然会重新运行一次。不过，即使没有 Fast Refresh，编写能够适应 `useEffect` 偶尔重新运行的代码也是一种良好实践。这样你以后在为它引入新的依赖项时也会更轻松。
