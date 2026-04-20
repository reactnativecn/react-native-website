---
id: profiling
title: 性能分析
---

性能分析是指分析应用的性能、资源使用情况和运行行为，以找出潜在瓶颈或低效点的过程。善用性能分析工具非常值得，它能帮助你确保应用在不同设备和环境下都能平稳运行。

对于 iOS，Instruments 是一个非常有价值的工具；而在 Android 上，你应该学会使用 [Android Studio Profiler](profiling.md#profiling-android-ui-performance-with-system-tracing)。

但首先，[**一定要确保已关闭开发模式！**](performance.md#running-in-development-mode-devtrue)

## 使用系统跟踪分析 Android UI 性能

Android 需要支持 1 万多种不同的手机，同时还要兼容软件渲染。框架架构以及面向众多硬件目标进行通用化的需求，意味着相较于 iOS，你能“免费”获得的优化会更少。不过，有些问题确实可以改进——而且很多时候，问题根本不在原生代码上！

调试这类卡顿的第一步，是回答一个根本问题：每一帧 16ms 的时间到底花在了哪里？为此，我们要使用 [Android Studio 内置的 System Tracing 分析器](https://developer.android.com/studio/profile)。

:::note
独立的 `systrace` 工具已从 Android platform-tools 中移除。请改用 Android Studio Profiler，它提供了相同的功能，并且界面更好用。
:::

### 1. 收集 trace

首先，用 USB 将出现卡顿问题、且你想调查的设备连接到电脑。在 Android Studio 中打开项目的 `android` 文件夹，在右上角面板中选择你的设备，然后[以可分析（profileable）模式运行项目](https://developer.android.com/studio/profile#build-and-run)。

当应用以可分析模式构建并在设备上运行后，把应用切换到你想分析的导航或动画发生前的那个状态，然后在 Android Studio Profiler 面板中启动 [“Capture System Activities” 任务](https://developer.android.com/studio/profile#start-profiling)。

开始收集 trace 后，执行你关心的动画或交互，然后点击“Stop recording”。现在你可以[直接在 Android Studio 中检查 trace](https://developer.android.com/studio/profile/jank-detection)。另外，你也可以在“Past Recordings”面板中选中它，点击“Export recording”，再用 [Perfetto](https://perfetto.dev/) 之类的工具打开。

### 2. 阅读 trace

在 Android Studio 或 Perfetto 中打开 trace 之后，你应该会看到类似下面的内容：

![示例](/docs/assets/SystraceExample.png)

:::note 提示
使用 WASD 键可以平移和缩放。
:::

具体界面可能会有所不同，但下面的说明无论你使用哪种工具都适用。

:::info 启用 VSync 高亮
勾选屏幕右上角的这个复选框，可以高亮显示 16ms 的帧边界：

![启用 VSync 高亮](/docs/assets/SystraceHighlightVSync.png)

你应该会看到和上图一样的斑马纹。如果没有，请尝试换一台设备进行分析：已知三星设备在显示 vsync 时偶尔会有问题，而 Nexus 系列通常比较可靠。
:::

### 3. 找到你的进程

滚动界面，直到看到你的包名（或包名的一部分）。例如，这里我分析的是 `com.facebook.adsmanager`，但由于内核里线程名长度的奇怪限制，它显示成了 `book.adsmanager`。

左侧会显示一组线程，它们与右侧时间线中的各行一一对应。对我们来说，需要重点关注几个线程：UI 线程（线程名通常是你的包名或 UI Thread）、`mqt_js` 和 `mqt_native_modules`。如果你运行在 Android 5+ 上，还要关注 Render Thread。

- **UI Thread（UI 线程）**。标准的 Android measure/layout/draw 都发生在这里。右侧线程名会是你的包名（在我的例子中是 `book.adsmanager`）或 UI Thread。你在这个线程里看到的事件通常会和 `Choreographer`、`traversals`、`DispatchUI` 有关，例如：

  ![UI 线程示例](/docs/assets/SystraceUIThreadExample.png)

- **JS Thread（JS 线程）**。JavaScript 在这里执行。线程名可能是 `mqt_js`，也可能是 `<...>`，这取决于设备内核配不配合。如果它没有名字，可以通过 `JSCall`、`Bridge.executeJSCall` 等标记识别：

  ![JS 线程示例](/docs/assets/SystraceJSThreadExample.png)

- **Native Modules Thread（原生模块线程）**。原生模块调用（例如 `UIManager`）会在这里执行。线程名可能是 `mqt_native_modules`，也可能是 `<...>`。如果是后者，可以查找 `NativeCall`、`callJavaModuleMethod`、`onBatchComplete` 等标记：

  ![原生模块线程示例](/docs/assets/SystraceNativeModulesThreadExample.png)

- **额外：Render Thread（渲染线程）**。如果你使用的是 Android L（5.0）及以上版本，应用里还会有一个渲染线程。这个线程负责生成实际用于绘制 UI 的 OpenGL 命令。线程名可能是 `RenderThread`，也可能是 `<...>`。如果没有名字，可以通过 `DrawFrame` 和 `queueBuffer` 等标记识别：

  ![渲染线程示例](/docs/assets/SystraceRenderThreadExample.png)

## 识别问题根源

流畅的动画通常看起来像这样：

![流畅动画](/docs/assets/SystraceWellBehaved.png)

每种颜色的变化都代表一帧。请记住：要想显示一帧，我们所有的 UI 工作都必须在这 16ms 周期结束前完成。注意图中没有任何线程的工作逼近帧边界。像这样渲染的应用，通常就是以 60 FPS 在运行。

但如果你观察到了掉帧或卡顿，可能会看到类似下面的情况：

![JS 导致的卡顿动画](/docs/assets/SystraceBadJS.png)

注意，JS 线程几乎一直在执行，而且跨越了帧边界！这说明应用没有以 60 FPS 渲染。在这种情况下，**问题出在 JS**。

你也可能会看到类似下面的情况：

![UI 导致的卡顿动画](/docs/assets/SystraceBadUI.png)

在这种情况下，跨越帧边界的是 UI 线程和渲染线程的工作。也就是说，每一帧要绘制的 UI 工作量太大了。在这种情况下，**问题出在被渲染的原生视图**。

到这里，你已经拿到了一些非常有帮助的信息，可以指导后续的排查方向。

## 解决 JavaScript 问题

如果你确认问题出在 JS，就去看具体执行的那段 JS 有没有线索。上面的例子里，我们看到 `RCTEventEmitter` 每帧被调用了多次。下面是上方 trace 中 JS 线程的放大图：

![JS 过多](/docs/assets/SystraceBadJS2.png)

这看起来不太对。为什么它会被调用这么频繁？这些真的是不同的事件吗？这些问题的答案往往取决于你的业务代码。很多时候，你会需要检查一下 [shouldComponentUpdate](https://react.dev/reference/react/Component#shouldcomponentupdate)。

## 解决原生 UI 问题

如果你确认问题出在原生 UI，一般有两种情况：

1. 每一帧要绘制的 UI 在 GPU 上的工作量过大；或者
2. 你在动画或交互进行期间创建了新的 UI（例如在滚动过程中加载新内容）。

### GPU 工作量过大

在第一种情况下，你会看到 trace 里的 UI 线程和/或 Render Thread 大致像这样：

![GPU 过载](/docs/assets/SystraceBadUI.png)

注意 `DrawFrame` 花费了很长时间，并且跨越了帧边界。这段时间其实是在等待 GPU 清空上一帧留下的命令缓冲区。

要缓解这个问题，你应该：

- 调查是否可以对正在执行动画或变换的复杂静态内容使用 `renderToHardwareTextureAndroid`（例如 `Navigator` 的滑动或 alpha 动画）；
- 确保你**没有**使用 `needsOffscreenAlphaCompositing`。这个属性默认是关闭的，因为在大多数情况下，它会显著增加 GPU 每帧的负担。

### 在 UI 线程上创建新视图

在第二种情况下，你看到的内容会更像这样：

![创建视图](/docs/assets/SystraceBadCreateUI.png)

注意：先是 JS 线程思考了一会儿，随后原生模块线程做了一些工作，最后 UI 线程执行了一次代价昂贵的 traversal。

这种情况通常没有什么快速修复方法，除非你能把新 UI 的创建推迟到交互结束之后，或者你能简化正在创建的 UI。React Native 团队正在推进一个基础设施层面的解决方案，让新 UI 可以在主线程之外创建和配置，从而让交互继续保持流畅。

### 查找原生 CPU 热点

如果问题看起来在原生侧，你可以使用 [CPU hotspot profiler](https://developer.android.com/studio/profile/record-java-kotlin-methods) 进一步了解发生了什么。打开 Android Studio Profiler 面板，选择“Find CPU Hotspots (Java/Kotlin Method Recording)”。

:::info 选择 Java/Kotlin 录制
请确保选择的是“Find CPU Hotspots **(Java/Kotlin Recording)**”，而不是“Find CPU Hotspots (Callstack Sample)”。它们图标相似，但功能完全不同。
:::

执行交互后点击“Stop recording”。录制过程本身比较耗资源，所以交互尽量保持简短。随后你可以直接在 Android Studio 中查看结果 trace，或者导出后用 [Firefox Profiler](https://profiler.firefox.com/) 这类在线工具打开。

和 System Trace 不同，CPU 热点分析本身比较慢，因此它无法给出非常精确的测量值。不过，它可以帮助你了解哪些原生方法被调用了，以及每一帧里的时间大致花在了哪些地方。
