<h2>Installing dependencies</h2>

您将需要 Node、React Native 命令行界面、JDK 和 Android Studio。

虽然您可以使用您选择的任何编辑器来开发应用程序，但您需要安装 Android Studio 才能设置必要的工具来构建适用于 Android 的 React Native 应用程序。

<h3 id="jdk">Node, JDK</h3>

我们建议通过 [Chocolatey](https://chocolatey.org/install) 安装 Node，这是一种流行的 Windows 包管理器。

建议使用 Node.js 的 LTS 版本。如果您希望能够在不同版本之间切换，您可能需要通过 [nvm-windows](https://github.com/coreybutler/nvm-windows)（Windows 的 Node 版本管理器）安装 Node。

React Native 还需要 [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/17/)，也可以使用 Chocolatey 安装。

打开管理员命令提示符（右键单击命令提示符并选择“以管理员身份运行”），然后运行以下命令：

```powershell
choco install -y nodejs-lts microsoft-openjdk17
```

如果您已在系统上安装 Node，请确保它是 Node 22.11.0 或更高版本。如果您的系统上已有 JDK，我们建议使用 JDK17。使用更高版本的 JDK 可能会遇到问题。

:::注意
您可以在 [Node 的下载页面](https://nodejs.org/en/download/) 上找到其他安装选项。
:::

:::信息
如果您使用的是最新版本的 Java Development Kit，则需要更改项目的 Gradle 版本，以便它可以识别 JDK。您可以通过转到“{项目根文件夹}\android\gradle\wrapper\gradle-wrapper.properties”并更改“distributionUrl”值来升级 Gradle 版本来完成此操作。您可以在[此处查看 Gradle 的最新版本](https://gradle.org/releases/)。
:::

<h3>Android development environment</h3>

如果您是 Android 开发新手，那么设置开发环境可能会有些乏味。如果您已经熟悉 Android 开发，则可能需要配置一些内容。无论哪种情况，请务必仔细执行接下来的几个步骤。

<h4 id="android-studio">1. Install Android Studio</h4>

[下载并安装Android Studio](https://developer.android.com/studio)。在 Android Studio 安装向导中，确保选中以下所有项目旁边的框：

-`Android SDK`
- `Android SDK平台`
- `Android 虚拟设备`
- 如果您尚未使用 Hyper-V：“性能（英特尔® HAXM）”（[请参阅此处了解 AMD 或 Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)）

然后，单击“下一步”安装所有这些组件。

:::注意
如果复选框呈灰色，您稍后将有机会安装这些组件。
:::

设置完成并且您将看到欢迎屏幕后，请继续执行下一步。

<h4 id="android-sdk">2. Install the Android SDK</h4>

Android Studio 默认安装最新的 Android SDK。然而，使用本机代码构建 React Native 应用程序特别需要“Android 15 (VanillaIceCream)” SDK。可以通过 Android Studio 中的 SDK 管理器安装其他 Android SDK。

为此，请打开 Android Studio，单击“更多操作”按钮并选择“SDK 管理器”。

![Android Studio 欢迎](/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)

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

1. 打开 **Windows 控制面板。**
2. 单击“**用户帐户**”，然后再次单击“**用户帐户**”
3. 单击“**更改我的环境变量**”
4. 单击 **New...** 创建一个新的“ANDROID_HOME”用户变量，该变量指向 Android SDK 的路径：

![ANDROID_HOME 环境变量](/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

默认情况下，SDK 安装在以下位置：

```powershell
%LOCALAPPDATA%\Android\Sdk
```

您可以在 Android Studio“设置”对话框中的 **语言和框架** → **Android SDK** 下找到 SDK 的实际位置。

打开新的命令提示符窗口以确保在继续下一步之前加载新的环境变量。

1.打开powershell
2. 将 **Get-ChildItem -Path Env:\\** 复制并粘贴到 powershell 中
3.验证“ANDROID_HOME”已添加

<h4>4. Add platform-tools to Path</h4>

1. 打开 **Windows 控制面板。**
2. 单击“**用户帐户**”，然后再次单击“**用户帐户**”
3. 单击“**更改我的环境变量**”
4. 选择 **路径** 变量。
5. 单击“**编辑”。**
6. 单击 **新建** 并将 platform-tools 的路径添加到列表中。

该文件夹的默认位置是：

```powershell
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

<h2>Preparing the Android device</h2>

您将需要一台 Android 设备来运行 React Native Android 应用程序。这可以是物理 Android 设备，或更常见的是，您可以使用 Android 虚拟设备，它允许您在计算机上模拟 Android 设备。

无论哪种方式，您都需要准备设备来运行 Android 应用程序以进行开发。

<h3>Using a physical device</h3>

如果您有物理 Android 设备，则可以使用它来代替 AVD 进行开发，方法是使用 USB 电缆将其插入计算机并按照[此处](running-on-device.md) 的说明进行操作。

<h3>Using a virtual device</h3>

如果您使用 Android Studio 打开 `./AwesomeProject/android`，您可以通过从 Android Studio 中打开“AVD 管理器”来查看可用的 Android 虚拟设备 (AVD) 列表。寻找如下所示的图标：

<img src="/docs/assets/GettingStartedAndroidStudioAVD.svg" alt="Android Studio AVD Manager" width="100"/>

如果您最近安装了 Android Studio，您可能需要[创建一个新的 AVD](https://developer.android.com/studio/run/managing-avds.html)。选择“创建虚拟设备...”，然后从列表中选择任何手机并单击“下一步”，然后选择 **VanillaIceCream** API 级别 35 映像。

:::注意
如果您尚未安装 HAXM，请单击“安装 HAXM”或按照[这些说明](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows) 进行设置，然后返回 AVD 管理器。
:::

单击“下一步”，然后单击“完成”以创建 AVD。此时，您应该可以单击 AVD 旁边的绿色三角形按钮来启动它。

<h3>That's it!</h3>

恭喜！您已成功设置开发环境。

<center><img src="/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

<h2>Now what?</h2>

- 如果您想将这个新的 React Native 代码添加到现有应用程序中，请查看[集成指南](integration-with-existing-apps.md)。
- 如果您想了解有关 React Native 的更多信息，请查看 [React Native 简介]（入门）。
