## 安装依赖项

您将需要 Node、Watchman、React Native 命令行界面、Xcode 和 CocoaPods。

虽然您可以使用您选择的任何编辑器来开发应用程序，但您需要安装 Xcode 才能设置必要的工具来构建适用于 iOS 的 React Native 应用程序。

### 节点和守望者

我们建议使用 [Homebrew](https://brew.sh/) 安装 Node 和 Watchman。安装 Homebrew 后在终端中运行以下命令：

```shell
brew install node
brew install watchman
```

如果您已在系统上安装 Node，请确保它是 Node 22.11.0 或更高版本。

[Watchman](https://facebook.github.io/watchman) 是 Facebook 的一个工具，用于监视文件系统的变化。强烈建议您安装它以获得更好的性能。

### Xcode

请使用**最新版本**的 Xcode。

安装 Xcode 最简单的方法是通过 [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)。安装 Xcode 还将安装 iOS 模拟器以及构建 iOS 应用程序所需的所有工具。

#### 命令行工具

您还需要安装 Xcode 命令行工具。打开 Xcode，然后从 Xcode 菜单中选择 **设置...（或首选项...）**。转到“位置”面板并通过在“命令行工具”下拉列表中选择最新版本来安装工具。

![Xcode 命令行工具](/docs/assets/GettingStartedXcodeCommandLineTools.png)

#### 在 Xcode 中安装 iOS 模拟器

要安装模拟器，请打开 **Xcode > 设置...（或首选项...）** 并选择 **平台（或组件）** 选项卡。选择与您要使用的 iOS 版本相对应的模拟器。

如果您使用 Xcode 14.0 或更高版本来安装模拟器，请打开 **Xcode > 设置 > 平台** 选项卡，然后单击“+”图标并选择 **iOS…** 选项。

#### 可可豆荚

[CocoaPods](https://cocoapods.org/) 是适用于 iOS 的依赖管理系统之一。 CocoaPods 是一个 Ruby [gem](https://en.wikipedia.org/wiki/RubyGems)。您可以使用最新版本 macOS 附带的 Ruby 版本来安装 CocoaPods。

欲了解更多信息，请访问[CocoaPods入门指南](https://guides.cocoapods.org/using/getting-started.html)。

### [可选]配置您的环境

从React Native版本0.69开始，可以使用模板提供的“.xcode.env”文件配置Xcode环境。

“.xcode.env”文件包含一个环境变量，用于导出“NODE_BINARY”变量中“node”可执行文件的路径。
这是**建议的方法**，用于将构建基础架构与“节点”的系统版本分离。如果它与默认值不同，您应该使用您自己的路径或您自己的“node”版本管理器自定义此变量。

除此之外，还可以添加任何其他环境变量并在构建脚本阶段获取 `.xcode.env` 文件。如果您需要运行需要某些特定环境的脚本，这是**建议的方法**：它允许将构建阶段与特定环境解耦。

:::信息
如果您已经在使用 [NVM](https://nvm.sh/)（帮助您安装并在 Node.js 版本之间切换的命令）和 [zsh](https://ohmyz.sh/)，您可能需要将初始化 NVM 的代码从 `~/.zshrc` 移动到 `~/.zshenv` 文件中，以帮助 Xcode 找到您的 Node 可执行文件：

```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

您可能还想确保 Xcode 项目的所有“shell 脚本构建阶段”都使用“/bin/zsh”作为其 shell。
:::

<h3>That's it!</h3>

恭喜！您已成功设置开发环境。

<center><img src="/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<h2>Now what?</h2>

- 如果您想将这个新的 React Native 代码添加到现有应用程序中，请查看[集成指南](integration-with-existing-apps.md)。
- 如果您想了解有关 React Native 的更多信息，请查看 [React Native 简介]（入门）。
