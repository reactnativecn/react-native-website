---
id: signed-apk-android
title: 发布到 Google Play Store
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

Android 要求所有应用在安装前都必须使用证书进行数字签名。要通过 [Google Play 商店](https://play.google.com/store)分发你的 Android 应用，它必须使用一个 release key 进行签名，并且未来的所有更新都需要继续使用这个 key。自 2017 年起，借助 [App Signing by Google Play](https://developer.android.com/studio/publish/app-signing#app-signing-google-play) 功能，Google Play 可以自动管理发布签名。不过，在将应用二进制文件上传到 Google Play 之前，它仍然需要先使用 upload key 进行签名。Android Developers 文档中的 [Signing Your Applications](https://developer.android.com/tools/publishing/app-signing.html) 页面对这个主题有更详细的说明。本指南会简要介绍这一流程，并列出打包 JavaScript bundle 所需的步骤。

:::info
如果你使用的是 Expo，请阅读 Expo 关于[发布到应用商店](https://docs.expo.dev/distribution/app-stores/)的指南，以构建并提交应用到 Google Play Store。该指南适用于任何 React Native 应用，也可以帮助自动化部署流程。
:::

## 生成 upload key

你可以使用 `keytool` 来生成私有签名密钥。

### Windows

在 Windows 上，必须以管理员身份在 `C:\Program Files\Java\jdkx.x.x_x\bin` 目录中运行 `keytool`。

```shell
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

这个命令会提示你输入 keystore 和 key 的密码，以及 key 的 Distinguished Name 字段。随后它会生成一个名为 `my-upload-key.keystore` 的 keystore 文件。

该 keystore 中包含一个有效期为 10000 天的密钥。别名（alias）是之后给应用签名时会用到的名称，请务必记下。

### macOS

在 macOS 上，如果你不确定 JDK 的 bin 文件夹在哪里，可以先执行以下命令查找：

```shell
/usr/libexec/java_home
```

它会输出 JDK 的目录，类似下面这样：

```shell
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
```

使用 `cd /your/jdk/path` 进入该目录，然后像下面这样使用 sudo 权限运行 keytool 命令。

```shell
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

:::caution
请记得妥善保管 keystore 文件。如果你丢失了 upload key，或者它已经泄露，请[按照这些说明操作](https://support.google.com/googleplay/android-developer/answer/7384423#reset)。
:::

## 设置 Gradle 变量

1. 将 `my-upload-key.keystore` 文件放到项目目录中的 `android/app` 下。
2. 编辑 `~/.gradle/gradle.properties` 或 `android/gradle.properties`，并添加以下内容（将 `*****` 替换为正确的 keystore 密码、别名和 key 密码）：

```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=***
MYAPP_UPLOAD_KEY_PASSWORD=***
```

这些会成为全局的 Gradle 变量，之后我们可以在 Gradle 配置中用它们为应用签名。

:::note Note about using git
将这些 Gradle 变量保存在 `~/.gradle/gradle.properties` 而不是 `android/gradle.properties` 中，可以避免它们被提交到 git。你可能需要先在用户主目录中创建 `~/.gradle/gradle.properties` 文件，之后才能添加这些变量。
:::

:::note Note about security
如果你不希望以明文形式存储密码，并且你使用的是 macOS，也可以将凭据[保存在 Keychain Access 应用中](https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/)。这样你就可以省略 `~/.gradle/gradle.properties` 中最后两行。
:::

## 在应用的 Gradle 配置中添加签名配置

最后一个需要完成的配置步骤，是让 release 构建使用 upload key 进行签名。编辑项目目录中的 `android/app/build.gradle` 文件，并添加如下 signing config：

```groovy
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

## 生成 release AAB

在终端中运行以下命令：

```shell
npx react-native build-android --mode=release
```

这个命令底层会调用 Gradle 的 `bundleRelease`，把运行应用所需的全部 JavaScript 打包进 AAB（[Android App Bundle](https://developer.android.com/guide/app-bundle)）中。如果你需要修改 JavaScript bundle 和/或 drawable 资源的打包方式（例如你更改了默认的文件/目录名称，或项目的整体结构），可以查看 `android/app/build.gradle`，了解如何更新配置以反映这些变更。

:::note
请确保 `gradle.properties` 中不包含 `org.gradle.configureondemand=true`，否则 release 构建会跳过将 JS 和资源打包进应用二进制文件。
:::

生成的 AAB 位于 `android/app/build/outputs/bundle/release/app-release.aab`，可以直接上传到 Google Play。

Google Play 要接受 AAB 格式，你的应用必须先在 Google Play Console 中启用 App Signing by Google Play。如果你正在更新一个尚未使用 App Signing by Google Play 的现有应用，请查看我们的[迁移章节](#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play)，了解如何完成这项配置变更。

## 测试应用的 release 构建

在将 release 构建上传到 Play Store 之前，请务必充分测试。首先卸载设备上已经安装的旧版本应用。然后在项目根目录使用下面的命令安装它：

<Tabs groupId="package-manager" queryString defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="npm">

```shell
npm run android -- --mode="release"
```

</TabItem>
<TabItem value="yarn">

```shell
yarn android --mode release
```

</TabItem>
</Tabs>

请注意，只有在按照上文完成签名配置之后，`--mode release` 才可用。

你可以终止所有正在运行的 bundler 实例，因为框架代码和 JavaScript 代码都已经被打包进 APK 的 assets 中。

## 发布到其他商店

默认情况下，生成的 APK 同时包含 `x86`、`x86_64`、`ARMv7a` 和 `ARM64-v8a` 这些 CPU 架构的原生代码。这使得你更容易分发几乎可以在所有 Android 设备上运行的 APK。但缺点是，对于每台设备来说，总会有一部分原生代码是未使用的，从而导致 APK 体积变大。

你可以通过在 `android/app/build.gradle` 中添加下面这段配置，为每种 CPU 单独生成 APK：

```diff
android {

    splits {
        abi {
            reset()
            enable true
            universalApk false
            include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
        }
    }

}
```

将这些文件上传到支持设备定向分发的应用市场，例如 [Amazon AppStore](https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html) 或 [F-Droid](https://f-droid.org/en/)，用户就会自动获得适合其设备的 APK。如果你要上传到其他不支持单个应用对应多个 APK 的市场，例如 [APKFiles](https://www.apkfiles.com/)，请将 `universalApk false` 改为 `true`，以生成默认的通用 APK，其中包含两种 CPU 的二进制文件。

请注意，你还必须像 Android 官方文档[此页面](https://developer.android.com/studio/build/configure-apk-splits#configure-APK-versions)中建议的那样，为不同 APK 配置不同的 version code。

## 启用 Proguard 以减小 APK 体积（可选）

Proguard 是一个可以略微减小 APK 体积的工具。它通过移除应用未使用的 React Native Java 字节码（以及其依赖）来实现这一点。

:::caution Important
如果你启用了 Proguard，请务必充分测试应用。Proguard 往往需要针对你所使用的每个原生库做特定配置。请参阅 `app/proguard-rules.pro`。
:::

要启用 Proguard，请编辑 `android/app/build.gradle`：

```groovy
/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = true
```

## 将旧版 Android React Native 应用迁移到 App Signing by Google Play

如果你是从较早版本的 React Native 迁移而来，那么你的应用很可能尚未启用 App Signing by Google Play。我们建议你启用它，以便利用自动按设备拆分应用等能力。要从旧的签名方式迁移，首先需要[生成一个新的 upload key](#generating-an-upload-key)，然后将 `android/app/build.gradle` 中的 release signing config 改为使用 upload key，而不是 release key（参见上文关于[在 Gradle 中添加签名配置](#adding-signing-config-to-your-apps-gradle-config)的章节）。完成后，你还需要按照 [Google Play Help 网站上的说明](https://support.google.com/googleplay/android-developer/answer/7384423)，将你原先的 release key 发送给 Google Play。

## 默认权限

默认情况下，`INTERNET` 权限会被添加到 Android 应用中，因为几乎所有应用都会使用它。`SYSTEM_ALERT_WINDOW` 权限会在 debug 模式下被加入 Android APK 中，但在生产环境中会被移除。
