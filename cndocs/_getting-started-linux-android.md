## 安装依赖项

您将需要 Node、React Native 命令行界面、JDK 和 Android Studio。

虽然您可以使用您选择的任何编辑器来开发应用程序，但您需要安装 Android Studio 才能设置必要的工具来构建适用于 Android 的 React Native 应用程序。

<h3>Node</h3>

按照 [Linux 发行版的安装说明](https://nodejs.org/en/download/package-manager/) 安装 Node 22.11.0 或更高版本。

<h3>Java Development Kit</h3>

React Native 目前推荐使用 Java SE 开发工具包 (JDK) 版本 17。使用更高版本的 JDK 可能会遇到问题。您可以从 [AdoptOpenJDK](https://adoptopenjdk.net/) 或您的系统打包程序下载并安装 [OpenJDK](https://openjdk.java.net)。

<h3>Android development environment</h3>

如果您是 Android 开发新手，那么设置开发环境可能会有些乏味。如果您已经熟悉 Android 开发，则可能需要配置一些内容。无论哪种情况，请务必仔细执行接下来的几个步骤。

<h4 id="android-studio">1. Install Android Studio</h4>

[下载并安装Android Studio](https://developer.android.com/studio)。在 Android Studio 安装向导中，确保选中以下所有项目旁边的框：

-`Android SDK`
- `Android SDK平台`
- `Android 虚拟设备`

然后，单击“下一步”安装所有这些组件。

:::注意
如果复选框呈灰色，您稍后将有机会安装这些组件。
:::

设置完成并且您将看到欢迎屏幕后，请继续执行下一步。

<h4 id="android-sdk">2. Install the Android SDK</h4>

Android Studio 默认安装最新的 Android SDK。然而，使用本机代码构建 React Native 应用程序特别需要“Android 15 (VanillaIceCream)” SDK。可以通过 Android Studio 中的 SDK 管理器安装其他 Android SDK。

为此，请打开 Android Studio，单击“配置”按钮并选择“SDK 管理器”。

:::提示
SDK 管理器还可以在 Android Studio“设置”对话框中的 **语言和框架** → **Android SDK** 下找到。
:::

从 SDK 管理器中选择“SDK 平台”选项卡，然后选中右下角“显示包详细信息”旁边的框。查找并展开“Android 15 (VanillaIceCream)”条目，然后确保选中以下项目：

- `Android SDK 平台 35`
-“Intel x86 Atom_64 系统映像”或“Google API Intel x86 Atom 系统映像”

接下来，选择“SDK 工具”选项卡，并选中“显示包详细信息”旁边的框。查找并展开“Android SDK Build-Tools”条目，然后确保选择“36.0.0”和“Android SDK Command-line Tools (latest)”。

最后点击“Apply”下载并安装Android SDK及相关构建工具。

<h4>3. Configure the ANDROID_HOME environment variable</h4>

React Native 工具需要设置一些环境变量才能使用本机代码构建应用程序。

将以下行添加到“$HOME/.bash_profile”或“$HOME/.bashrc”（如果您使用“zsh”，则使用“~/.zprofile”或“~/.zshrc”）配置文件：

```shell
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

:::注意
`.bash_profile` 特定于 `bash`。如果您使用其他 shell，则需要编辑相应的特定于 shell 的配置文件。
:::

输入 `bash` 的 `source $HOME/.bash_profile` 或 `source $HOME/.zprofile` 将配置加载到当前 shell 中。验证 ANDROID_HOME 是否已通过运行 `echo $ANDROID_HOME` 设置，并且适当的目录已通过运行 `echo $PATH` 添加到您的路径中。

:::注意
请确保您使用正确的 Android SDK 路径。您可以在 Android Studio“设置”对话框中的 **语言和框架** → **Android SDK** 下找到 SDK 的实际位置。
:::

<h3>Watchman</h3>

按照 [Watchman 安装指南](https://facebook.github.io/watchman/docs/install#buildinstall) 从源代码编译并安装 Watchman。

:::信息
[Watchman](https://facebook.github.io/watchman/docs/install) 是 Facebook 的一个工具，用于监视文件系统的变化。强烈建议您安装它，以获得更好的性能并提高某些边缘情况下的兼容性（翻译：您可能可以在不安装这个的情况下完成，但您的里程可能会有所不同；现在安装这个可能会让您免于以后的头痛）。
:::

<h2>Preparing the Android device</h2>

您将需要一台 Android 设备来运行 React Native Android 应用程序。这可以是物理 Android 设备，或更常见的是，您可以使用 Android 虚拟设备，它允许您在计算机上模拟 Android 设备。

无论哪种方式，您都需要准备设备来运行 Android 应用程序以进行开发。

<h3>Using a physical device</h3>

如果您有物理 Android 设备，则可以使用它来代替 AVD 进行开发，方法是使用 USB 电缆将其插入计算机并按照[此处](running-on-device.md) 的说明进行操作。

<h3>Using a virtual device</h3>

如果您使用 Android Studio 打开 `./AwesomeProject/android`，您可以通过从 Android Studio 中打开“AVD 管理器”来查看可用的 Android 虚拟设备 (AVD) 列表。寻找如下所示的图标：

<img src="/docs/assets/GettingStartedAndroidStudioAVD.svg" alt="Android Studio AVD Manager" width="100"/>

如果您最近安装了 Android Studio，您可能需要[创建一个新的 AVD](https://developer.android.com/studio/run/managing-avds.html)。选择“创建虚拟设备...”，然后从列表中选择任何手机并单击“下一步”，然后选择 **VanillaIceCream** API 级别 35 映像。

:::提示
我们建议在您的系统上配置 [VM 加速](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) 以提高性能。按照这些说明操作后，请返回 AVD 管理器。
:::

单击“下一步”，然后单击“完成”以创建 AVD。此时，您应该可以单击 AVD 旁边的绿色三角形按钮来启动它。

<h3>That's it!</h3>

恭喜！您已成功设置开发环境。

<center><img src="/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<h2>Now what?</h2>

- 如果您想将这个新的 React Native 代码添加到现有应用程序中，请查看[集成指南](integration-with-existing-apps.md)。
- 如果您想了解有关 React Native 的更多信息，请查看 [React Native 简介]（入门）。
