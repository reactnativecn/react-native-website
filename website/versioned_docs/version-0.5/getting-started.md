---
id: version-0.5-getting-started
title: 入门引导
original_id: getting-started
---

本文档将帮助您安装并构建您的第一个<strong>React Native应用程序</strong>。 如果您已经安装了React Native，则可以跳过本章节进入[Tutorial](tutorial.md)。

<strong>如果您并不熟悉移动开发</strong>, 最简单的入门方法则是使用 Expo CLI。 Expo 是构建 React Native 的开发工具之一，尽管其[功能](https://expo.io/features)众多，但其简单易上手的特性能帮助您通过最新版本的 Node.js 与手机或手机模拟器在极短的时间内轻松编写 React Native 移动应用。如果您并不想先行安装任何依赖与开发工具，想直接试用 React Native，则可以尝试 [Snack](https://snack.expo.io/).

> 译者注：Expo CLI 或 Snack（沙盒环境）均大量依赖于国外网络环境，亦无法完整发布应用，只是用于学习、演示、试验等目的。并不建议国内用户使用。

<strong>如果您对移动开发有所了解</strong>，则可使用 React Native CLI。其依赖 Xcode 以及 Android Studio 进行开发。如果您已经安装了这些工具之一，则应该可以在数分钟准备就绪。如果尚未安装，则应该要花费大约一个小时来安装和配置它们。

<div class="toggler">
  <ul role="tablist" id="toggle-guide">
    <li id="quickstart" class="button-quickstart" aria-selected="false" role="tab" tabindex="0" aria-controls="quickstarttab" onclick="displayTab('guide', 'quickstart')">
      快速开始
    </li>
    <li id="native" class="button-native" aria-selected="false" role="tab" tabindex="0" aria-controls="nativetab" onclick="displayTab('guide', 'native')">
      构建本地开发环境
    </li>
  </ul>
</div>

<block class="quickstart mac windows linux ios android" />

假设您已安装 [Node 10 LTS](https://nodejs.org/en/download/) 或更高版本，则可以使用 npm 安装 Expo CLI 命令行程序：

```sh
npm install -g expo-cli
```

接下来运行下列命令来创建一个名为 “AwesomeProject” 的新 React Native 项目：

```sh
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

上述命令将为您启动开发服务器。

<h2>运行您的 React Native 应用</h2>

在您的 ios 或 android 手机上安装 [Expo](https://expo.io) 客户端，并使其与你的开发服务器处于同一局域网(能互相通信)内，在Android上，使用Expo应用程序从终端扫描命令行终端打印的二维码即可打开您的项目。而在iOS上，请按照命令行上的说明获取链接。


<h3>修改您的APP</h3>

现在您已经成功运行该应用程序，如果需要修改它。在您选择的文本编辑器中打开 `App.js` 进行一些修改。保存更改后，手机上的应用程序会自动重新加载。

<h3>恭喜您！</h3>

你已经成功运行并修改了您的第一个React Native APP。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<h2>接下来？</h3>

如果您任对工具有疑问，Expo还提供了一些 [文档](https://docs.expo.io) 供您参考。 您也可在 [Expo forums](https://forums.expo.io) 上寻求帮助。

这些工具可帮助您快速入门，但是在深入使用 Expo CLI 构建应用程序之前，[请阅读有关限制的信息](https://docs.expo.io/versions/latest/introduction/why-not-expo/)。

如果您在 Expo 的使用方面有所疑问，在发布一个新的 issue 之前，请先浏览检查已发布的 issue清单：

- 在 [Expo CLI issues](https://github.com/expo/expo-cli/issues) (有关 Expo CLI 相关的问题)。
- 在 [Expo issues](https://github.com/expo/expo/issues) (有关 Expo客户端 或 SDK 的问题).

如果您想了解有关React Native的更多信息，请继续学习本 [教程](tutorial.md).

<h3>在模拟器或是虚拟机上运行你的应用程序</h3>

`Create React Native App` 使您可以轻松地在物理设备上运行您的 React Native APP，而无需设置开发环境。如果您想在 iOS 模拟器或 Android 虚拟设备上运行应用程序，请参阅有关使用 native 代码构建项目的说明，以了解如何安装 Xcode 以及设置 Android开发环境。

一旦设置完毕，你就可以通过运行 `npm run android` 在Android虚拟设备上启动你的应用，或者通过运行 `npm run ios`（仅适用于macOS）在iOS模拟器上启动你的应用。

<h3>注意事项</h3>

由于使用 Expo 创建项目时不会生成任何原生代码，因此除了可以在Expo客户端应用程序中使用的React Native API和组件之外，但无法使用自定义的原生模块。

如果您必须嵌入原生开发代码，那么 Expo 仍然是入门的好方法。在这种情况下，你只需要使用"[eject](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#ejecting-from-create-react-native-app)"来构建本地项目。如果您使用`eject`，则需要 “React Native CLI Quickstart” 继续处理项目。

Expo CLI 将为您的项目配置并使用`EXPO客户端`所支持的最新 React-Native 版本。当React Native版本稳定发布后的一周左右，Expo客户端通常会获得最新的React Native版本的支持。您可以[查看此文档](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md)以了解哪些版本受支持。

如果您将React Native集成到现有项目中，则您需要跳过 Expo CLI 并学习如何设置本地开发环境。 有关为React Native配置本机开发环境的说明，请选择上面的 “构建本地开发环境”。

<block class="native mac windows linux ios android" />

<p>如果您需要在您的项目中构建原生代码，请按下列的说明操作。 例如，如果您要将 React Native 集成到现有的程序中，又不想使用<a href="getting-started.html" onclick="displayTab('guide', 'quickstart')"> Create React Native App </a>，请仔细阅读本教程</p>

根据你所使用的操作系统、针对的目标平台不同，具体步骤有所不同。如果想同时开发iOS和Android也没问题，你只需要先选一个平台开始，另一个平台的环境搭建只是稍有不同。

<div class="toggler">
  <span>开发系统 :</span>
  <span role="tablist" id="toggle-os">
    <button role="tab" class="button-mac" onclick="displayTab('os', 'mac')">macOS</button>
    <button role="tab" class="button-windows" onclick="displayTab('os', 'windows')">Windows</button>
    <button role="tab" class="button-linux" onclick="displayTab('os', 'linux')">Linux</button>
  </span>
</div>

<div class="toggler">
  <span>目标系统 :</span>
  <span role="tablist" id="toggle-platform">
    <button role="tab" class="button-ios" onclick="displayTab('platform', 'ios')">iOS</button>
    <button role="tab" class="button-android" onclick="displayTab('platform', 'android')">Android</button>
  </span>
</div>

<block class="native linux windows ios" />

<h2>暂不支持</h2>

<blockquote><p>需要 Mac 才能使用适用于 iOS 的原生代码构建项目。 你可以学习 <a href="getting-started" onclick="displayTab('guide', 'quickstart')">快速开始</a> 选项中的 Expo 来构建应用。</p></blockquote>

<block class="native mac ios" />

<h2>安装依赖</h2>

你需要安装 Node、Watchman、react-native命令行工具与 xcode。

虽然你可以使用任意编辑器（IDE）来开发你的App，但你必须要安装 xcode 才能完整构建适用于iOS的React Native应用程序。

<block class="native mac android" />

<h2>安装依赖</h2>

你需要安装 Node、Watchman、react-native命令行工具以及JDK和Android Studio。

<block class="native linux android" />

<h2>安装依赖</h2>

你需要安装 Node、react-native命令行工具以及JDK和Android Studio。

<block class="native windows android" />

<h2>安装依赖</h2>

你需要安装 Node、react-native命令行工具、python2以及JDK和Android Studio。

<block class="native mac windows linux android" />

虽然您可以使用任意编辑器来开发应用程序，但您依旧需要安装 Android Studio 才能完整的安装诸多依赖以构建适用于 Android 的 React Native 应用程序。

<block class="native mac ios android" />

<h3>Node, Watchman, JDK</h3>

我们推荐使用 [Homebrew](http://brew.sh/) 来安装 Node 和 Watchman 与 JDK,在安装好 Homebrew 之后你可以通过下列命令安装：


```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

如果你已经安装了 Node 环境，请确认其版本 >= 8.3。

[Watchman](https://facebook.github.io/watchman) 是一个由 Facebook 开发的实时监控开发文件变更的工具，我们强烈建议你安装此工具以获得更好的开发体验。

如果你已经安装了 JDK，请确认其版本 >= 8.0

<block class="native linux android" />

<h3>Node</h3>

请按照您的 [Linux发行版的安装说明](https://nodejs.org/en/download/package-manager/) 进行操作，以安装Node 8.3或更高版本。

<block class='native windows android' />

<h3>Node, Python2, JDK</h3>

我们推荐使用 [Chocolatey](https://chocolatey.org) 来安装 Node 和 Python2,这是一个倍受欢迎的windows包管理工具。

React Native 仍然需要安装新版本的[Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html),当然，你也可以通过 Chocolatey 进行安装。

请使用管理员权限运行 windows命令行 (右键点击CMD快捷方式选择“使用管理员权限运行”)，再运行以下命令：

```powershell
choco install -y nodejs.install python2 jdk8
```

如果你已经安装了 Node 环境，请确认其版本 >= 8.3，如果你已经安装了 JDK 环境，请确认其版本 >= 8.0

> 当然您也可以在 [Node下载页面](https://nodejs.org/en/download/) 上找到其他版本。

<block class="native mac ios android" />

<h3>React Native CLI</h3>

Node包含了NPM(包管理器),你可以使用此工具安装 `React Native CLI`

在命令行里运行下列命令进行安装：

```
npm install -g react-native-cli
```

> 如果遇到`Cannot find module 'npmlog'`的错误，请尝试直接安装 npm：`curl -0 -L https://npmjs.org/install.sh | sudo sh`。

<block class="native windows linux android" />

<h3>The React Native CLI</h3>

Node包含了NPM(包管理器),你可以使用此工具安装 `React Native CLI`

在命令行里运行下列命令进行安装：

```powershell
npm install -g react-native-cli
```

> 如果遇到`Cannot find module 'npmlog'`的错误，请尝试直接安装 npm：`curl -0 -L https://npmjs.org/install.sh | sudo sh`。

<block class="native mac ios" />

<h3>Xcode</h3>

安装 Xcode 的最简单方法是通过 [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)。 安装 Xcode 的同时还将安装 iOS Simulator 和其他依赖来帮助您迅速构建iOS应用。

如果您已经在系统上安装了Xcode，请确保版本>=9.4。

<h4>命令行工具 Command Line Tools</h4>

您还需要安装Xcode命令行工具。 打开Xcode，然后从Xcode菜单中选择 “Preferences（首选项）...” 。 转到 “Locations ” 选项卡并通过在“命令行工具”下拉列表中选择最新版本来安装工具。

![Xcode Command Line Tools](/react-native/docs/assets/GettingStartedXcodeCommandLineTools.png)

<block class="native linux android" />

<h3>Java开发工具包 Java Development Kit（jdk）</h3>

React Native需要最新版本的Java SE开发工具包（JDK）。 如果需要，请下载并安装[JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)或更新的版本。如需要，您也可以下载并安装 [Oracle JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。

<block class="native mac linux windows android" />

<h3>Android 开发环境</h3>

如果您不熟悉Android开发，那么请严格按照步骤进行设置。如果您已经熟悉Android开发，则只需要增加几项配置即可。但无论哪种情况，请仔细阅读下列几个步骤的操作。

<block class="native mac windows linux android" />

<h4>1. 安装 Android Studio</h4>

[下载并安装 Android Studio](https://developer.android.com/studio/index.html)。当安装程序提示您选择安装类型时，请选择“Custom”选项。 确保勾选下列选项：

<block class="native mac windows android" />

- `Android SDK`
- `Android SDK Platform`
- `Performance (Intel ® HAXM)` ([关于 AMD](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))
- `Android Virtual Device`

<block class="native linux android" />

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`

<block class="native mac windows linux android" />

接下来，点击 "Next" 以完成所有组件的安装。

> 如果组件勾选框为灰色（无法勾选），你也可以选择稍后安装这些组件。（译者注：勾选框为灰色一般是由于未完整下载安装配置安卓基础SDK，请确保网络连接，中国大陆用户可能需要使用科学上网）

安装完成后，您将看到“欢迎”屏幕，请继续下一步。

<h4>2. 安装 Android SDK</h4>

Android Studio 默认情况下会安装最新的 Android SDK。但是，使用原生代码构建 React Native 应用程序尤其需要 `Android 9（Pie）`SDK。其他的Android SDK请通过Android Studio 中的 SDK Manager 安装。

你可以通过 Android Studio 的启动欢迎屏幕访问 `SDK Manager`：点击 "Configure",选择 "SDK Manager"。

<block class="native mac android" />

![Android Studio Welcome](/react-native/docs/assets/GettingStartedAndroidStudioWelcomeMacOS.png)

<block class="native windows android" />

![Android Studio Welcome](/react-native/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)

<block class="native mac windows linux android" />

> SDK Manager 也可以通过 Android Studio 的 "Preferences" 选项卡中找到:**Appearance & Behavior** → **System Settings** → **Android SDK**.

从 SDK Manager 中选择 “SDK Platforms” 选项卡，然后选中右下角 “Show Package Details” 旁边的框。 查找并展开“ Android 9（Pie）”条目，然后确保勾选以下各项：

- `Android SDK Platform 28`
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

接下来，选择 “SDK Tools” 选项卡，并在此处选中 “Show Package Details” 旁边的框。 查找并展开 “Android SDK Build-Tools” 条目，确保选择 `28.0.3`。

最后，单击 “Apply” 以下载并安装 Android SDK 和相关的依赖工具。

<h4>3. 配置 ANDROID_HOME 环境变量</h4>

React Native 工具需要配置环境变量才能正常构建APP程序。

<block class="native mac linux android" />

将下列配置加入 `$HOME/.bash_profile` 或 `$HOME/.bashrc` 配置文件:

<block class="native mac android" />

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

<block class="native linux android" />

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

<block class="native mac linux android" />

> `.bash_profile` 仅仅是 `bash` 的特有配置文件，如果你使用的是其它的shell，请编辑其对应的配置文件。

使用命令 `source $HOME/.bash_profile` 以加载新的配置文件到shell之中，可以使用 `echo $PATH` 来验证 ANDROID_HOME 环境变量是否被成功配置

> 请确认你Android SDK的本地路径，你可以从Android Studio 的 “Preferences” 菜单项中找到并确认：  **Appearance & Behavior** → **System Settings** → **Android SDK**。

<block class="native windows android" />

在 Windows控制面板中的 **System and Security** 下，打开“系统”窗格，然后单击 **Change settings...**。打开 **Advanced** 选项卡，然后单击 **Environment Variables...**。单击 **New...** 以创建一个新的 `ANDROID_HOME` 用户变量， 指向您的Android SDK的路径：

![ANDROID_HOME Environment Variable](/react-native/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

若 Java SDK 已经以默认配置安装完成, 则其默认地址为:

```powershell
c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
```

您可以在Android Studio “Preferences” 对话框中找到SDK的实际位置：**Appearance & Behavior** → **System Settings** → **Android SDK**。

在进行下一步之前，请打开一个新的命令提示窗以确保其加载了新的环境变量。

<h4>4. 添加 platform-tools 至系统Path</h4>

在 Windows控制面板中的 **System and Security** 下，打开“系统”窗格，然后单击 **Change settings...**。打开 **Advanced** 选项卡，然后单击 **Environment Variables...**。选择 **Path** 变量, 再单击 **Edit**。选择 **New** 将 platform-tools 添加进去.

其默认地址为:

```powershell
c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools
```

<block class="native linux android" />

<h3>Watchman</h3>

请根据 [Watchman 安装指南](https://facebook.github.io/watchman/docs/install.html#buildinstall)从源码编译并安装。

> [Watchman](https://facebook.github.io/watchman/docs/install.html)是一个由Facebook开发为了监控文件系统是否发生改变的工具，我们强烈建议您安装它以获得更好的性能。(解释：您可能无需安装它也可正常编写应用程序，但是您的工作量可能会有所不同；现在安装它可能会让您以后免于头痛。).

<block class="native mac ios" />

<h2>构建一个新项目</h2>

使用 React Native 命令行工具搭建一个名为 "AwesomeProject" 的新项目：

> 译者注-1：0.45 及以上版本需要依赖 boost 等几个很难下载成功的第三方库编译（需要合理的外网访问环境）可前往此[github仓库](https://)下载

> 译者注-2：切勿单独使用常见的关键字作为项目名（如class, native, new, package等等）。切勿使用与核心模块同名的项目名（如react, react-native等）。**切勿在目录、文件名中使用中文、空格等特殊符号**。

```
react-native init AwesomeProject
```

如果要将React Native集成到现有应用程序中，从 Expo 中移植出（或创建 React Native App），或者要将 iOS 支持添加到现有 React Native 项目中，则不需要此操作（请参阅[Platform Specific Code](platform-specific-code.md)） 您还可以使用第三方 CLI 来启动您的 React Native 应用程序，例如 [Ignite CLI](https://github.com/infinitered/ignite)。

<h3>[可选] 使用指定版本的项目</h3>

您可以指定 React Native 版本创建一个新项目，使用： `--version` 参数(注：版本号必须精确到两个小数点)：

```
react-native init AwesomeProject --version X.XX.X
```

```
react-native init AwesomeProject --version react-native@next
```

<block class="native mac windows linux android" />

<h2>构建一个新项目</h2>

使用 React Native 命令行工具搭建一个名为 "AwesomeProject" 的新项目：

> 译者注-1：0.45 及以上版本需要依赖 boost 等几个很难下载成功的第三方库编译（需要合理的外网访问环境）可前往此[github仓库](https://)下载

> 译者注-2：切勿单独使用常见的关键字作为项目名（如class, native, new, package等等）。切勿使用与核心模块同名的项目名（如react, react-native等）。**切勿在目录、文件名中使用中文、空格等特殊符号**。

```
react-native init AwesomeProject
```

如果要将React Native集成到现有应用程序中，从 Expo 中移植出（或创建 React Native App），或者要将 iOS 支持添加到现有 React Native 项目中，则不需要此操作（请参阅[Platform Specific Code](platform-specific-code.md)） 您还可以使用第三方 CLI 来启动您的 React Native 应用程序，例如 [Ignite CLI](https://github.com/infinitered/ignite)。

<h3>[可选] 使用指定版本的项目</h3>

您可以指定 React Native 版本创建一个新项目，使用： `--version` 参数(注：版本号必须精确到两个小数点)：

```
react-native init AwesomeProject --version X.XX.X
```

```
react-native init AwesomeProject --version react-native@next
```

<block class="native mac windows linux android" />

<h2>为 Android 设备进行前期准备</h2>

你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。但无论您使用哪种方式，下列的准备步骤都是必须的。（译者注：Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如Genymotion、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告）。

<h3>使用 Android 物理设备</h3>

你也可以使用 Android 物理设备来代替模拟器（虚拟机）进行开发，只需用 usb 数据线连接到电脑，然后遵照此篇[文档](running-on-device.md)的说明操作即可。

<h3>使用 Android 模拟器</h3>

你可以使用 Android Studio 打开项目中的 `android` 目录，然后可以使用 "AVD Manager" 来查看可用的虚拟设备，它的图标看起来像下面这样：

![Android Studio AVD Manager](/react-native/docs/assets/GettingStartedAndroidStudioAVD.png)

如果你刚刚才安装 Android Studio，那么可能需要先 [创建一个虚拟设备](https://developer.android.com/studio/run/managing-avds.html)。点击 "Create Virtual Device..." ，然后选择所需的设备类型并点击 "Next"，然后选择**Pie** API Level 28 图像。

<block class="native linux android" />

> We recommend configuring [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) on your system to improve performance. Once you've followed those instructions, go back to the AVD Manager.

<block class="native windows android" />

> 如果你还没有安装 HAXM（Intel 虚拟硬件加速驱动），则先点击 "Install HAXM" 或是根据此篇[文档说明](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows)来进行安装。

<block class="native mac android" />

> 如果你还没有安装 HAXM（Intel 虚拟硬件加速驱动），则先根据此篇[文档说明](https://github.com/intel/haxm/wiki/Installation-Instructions-on-macOS)来进行安装。

<block class="native mac windows linux android" />

点击 "Next" 和 "Finish" 来完成虚拟设备的创建。现在你应该可以点击虚拟设备旁的绿色三角按钮来启动它了，启动完后我们可以尝试运行应用。

<block class="native mac ios" />

<h2>编译及运行 React Native 应用</h2>

Run `react-native run-ios` inside your React Native project folder:

```
cd AwesomeProject
react-native run-ios
```

您将很快就能看到 iOS 模拟器启动并自动运行您的新项目。

![AwesomeProject on iOS](/react-native/docs/assets/GettingStartediOSSuccess.png)

`react-native run-ios` 命令仅是运行应用的方式之一。 您亦可直接于 Xcode 中直接运行本项目。

> 如果您无法正常运行项目, 请前往 [故障修复](troubleshooting.md#content) 页面寻找解决方案。

<h3>在真机上运行</h3>

上面的命令默认情况下会自动在iOS模拟器上运行您的应用。 如果要在真正的iOS设备上运行该应用，请按照[此处](running-on-device.md)的说明进行操作。

<block class="native mac windows linux android" />

<h2>编译及运行 React Native 应用</h2>

在您的 React Native 项目文件夹中运行命令 `react-native run-android` :

```
cd AwesomeProject
react-native run-android
```

如果所有设置都已完成, 您将很快就能看到 Android 模拟器启动并自动运行您的新项目。

<block class="native mac android" />

![AwesomeProject on Android](/react-native/docs/assets/GettingStartedAndroidSuccessMacOS.png)

<block class="native windows android" />

![AwesomeProject on Android](/react-native/docs/assets/GettingStartedAndroidSuccessWindows.png)

<block class="native mac windows linux android" />

`react-native run-android` 命令仅是运行应用的方式之一。 您亦可直接于 Android Studio 中直接运行本项目。

> 如果您无法正常运行项目, 请前往 [故障修复](troubleshooting.md#content) 页面寻找解决方案。

<block class="native mac ios android" />

<h3>修改您的项目</h3>

现在你已经成功运行了项目，我们可以开始尝试动手进行一些改动：

<block class="native mac ios" />

- 使用你的编辑器打开 `App.js` 并进行一些修改。
- 在 iOS 模拟器中按下 `⌘R` 就可以刷新 APP 并看到你的修改。

<block class="native mac android" />

- 使用你的编辑器打开 `App.js` 并进行一些修改。
- 按两下 R 键，或是用 Menu 键（通常是 F2，在 Genymotion 模拟器中是⌘+M）打开开发者菜单，然后选择 Reload JS 就可以看到你的最新修改。

<block class="native windows linux android" />

<h3>Modifying your app</h3>

现在你已经成功运行了项目，我们可以开始尝试动手进行一些改动：

- 使用你的编辑器打开 `App.js` 并进行一些修改。
- 按两下 R 键，或是用 Menu 键（通常是 F2，在 Genymotion 模拟器中是⌘+M）打开开发者菜单，然后选择 Reload JS 就可以看到你的最新修改。

<block class="native mac ios android" />

<h3>已经完成了！</h3>

恭喜！你已经成功运行并修改了你的第一个 React Native 应用。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<block class="native windows linux android" />

<h3>已经完成了！</h3>

恭喜！你已经成功运行并修改了你的第一个 React Native 应用。

<center><img src="/react-native/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<block class="native mac ios" />

<h2>接下来？</h2>

- 在 `Developer Menu` 菜单中打开 [Live Reload](debugging.md#reloading-javascript)。现在，只要保存任意更改，您的应用程序将会自动重新加载！

- 如果你想把 React Native 集成到现有的原生项目中，则请参考 [集成到现有原生应用](integration-with-existing-apps.md)。

如果您想了解有关 React Native 的更多信息，请继续本[教程](tutorial.md).

<block class="native windows linux mac android" />

<h2>接下来？</h2>

- 在 `Developer Menu` 菜单中打开 [Live Reload](debugging.md#reloading-javascript)。现在，只要保存任意更改，您的应用程序将会自动重新加载！

- 如果你想把 React Native 集成到现有的原生项目中，则请参考 [集成到现有原生应用](integration-with-existing-apps.md)。

如果您想了解有关 React Native 的更多信息，请继续本[教程](tutorial.md).
