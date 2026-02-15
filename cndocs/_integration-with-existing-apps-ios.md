从“@theme/Tabs”导入选项卡；
从“@theme/TabItem”导入 TabItem；
从“@site/core/TabsConstants”导入常量；
从“@theme/CodeBlock”导入CodeBlock；
从“@site/core/RNTemplateRepoLink”导入 RNTemplateRepoLink；
从 '@site/src/getTemplateBranchNameForCurrentVersion' 导入 {getTemplateBranchNameForCurrentVersion}；

## 关键概念

将 React Native 组件集成到 iOS 应用程序中的关键是：

1. 设置正确的目录结构。
2. 安装必要的 NPM 依赖项。
3. 将 React Native 添加到 Podfile 配置中。
4. 为您的第一个 React Native 屏幕编写 TypeScript 代码。
5. 使用“RCTRootView”将 React Native 与您的 iOS 代码集成。
6. 通过运行捆绑程序并查看应用程序的运行情况来测试您的集成。

## 使用社区模板

当您遵循本指南时，我们建议您使用 [React Native 社区模板](https://github.com/react-native-community/template/) 作为参考。该模板包含一个**最小的 iOS 应用程序**，并将帮助您了解如何将 React Native 集成到现有的 iOS 应用程序中。

## 先决条件

按照[设置您的开发环境](set-up-your-environment) 和使用[无框架的 React Native](getting-started-without-a-framework) 指南来配置您的开发环境，以构建适用于 iOS 的 React Native 应用程序。
本指南还假设您熟悉 iOS 开发的基础知识，例如创建“UIViewController”和编辑“Podfile”文件。

### 1.设置目录结构

为了确保流畅的体验，请为集成的 React Native 项目创建一个新文件夹，然后**将现有的 iOS 项目**移动到“/ios”子文件夹。

## 2.安装NPM依赖

进入根目录并运行以下命令：

<CodeBlock 语言=“bash”标题=“shell”>
{`curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/${getTemplateBranchNameForCurrentVersion()}/template/package.json`}
</代码块>

这会将“package.json”<RNTemplateRepoLink href="template/package.json">文件从社区模板</RNTemplateRepoLink>复制到您的项目。

接下来，通过运行以下命令安装 NPM 软件包：

<选项卡groupId =“package-manager”queryString defaultValue = {constants.defaultPackageManager}values = {constants.packageManagers}>
<TabItem值=“npm”>

```shell
npm install
```

</标签项>
<TabItem value="纱线">

```shell
yarn install
```

</标签项>
</标签>

安装过程创建了一个新的“node_modules”文件夹。此文件夹存储构建项目所需的所有 JavaScript 依赖项。

将 `node_modules/` 添加到您的 `.gitignore` 文件（此处为 <RNTemplateRepoLink href="template/_gitignore">社区默认文件</RNTemplateRepoLink>）。

### 3.安装开发工具

### Xcode 命令行工具

安装命令行工具。在 Xcode 菜单中选择 **设置...（或首选项...）**。转到“位置”面板并通过在“命令行工具”下拉列表中选择最新版本来安装工具。

![Xcode 命令行工具](/docs/assets/GettingStartedXcodeCommandLineTools.png)

### CocoaPods

[CocoaPods](https://cocoapods.org) 是一个用于 iOS 和 macOS 开发的包管理工具。我们使用它来将实际的 React Native 框架代码本地添加到您当前的项目中。

我们建议使用 [Homebrew](https://brew.sh/) 安装 CocoaPods：

```shell
brew install cocoapods
```

## 4. 将 React Native 添加到您的应用程序

### 配置 CocoaPods

要配置 CocoaPods，我们需要两个文件：

- **Gemfile** 定义我们需要哪些 Ruby 依赖项。
- **Podfile** 定义如何正确安装我们的依赖项。

对于 **Gemfile**，请转到项目的根目录并运行此命令

<CodeBlock 语言=“bash”标题=“shell”>
{`curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/${getTemplateBranchNameForCurrentVersion()}/template/Gemfile`}
</代码块>

这将从模板下载 Gemfile。

:::注意
如果您使用 Xcode 16 创建项目，则需要更新 Gemfile，如下所示：

```diff
-gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
+gem 'cocoapods', '1.16.2'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
-gem 'xcodeproj', '< 1.26.0'
+gem 'xcodeproj', '1.27.0'
```

Xcode 16 生成项目的方式与以前版本的 Xcode 略有不同，您需要最新的 CocoaPods 和 Xcodeproj gems 才能使其正常工作。
:::

同样，对于 **Podfile**，转到项目的“ios”文件夹并运行

<CodeBlock 语言=“bash”标题=“shell”>
{`curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/${getTemplateBranchNameForCurrentVersion()}/template/ios/Podfile`}
</代码块>

请使用社区模板作为 <RNTemplateRepoLink href="template/Gemfile">Gemfile</RNTemplateRepoLink> 和 <RNTemplateRepoLink href="template/ios/Podfile">Podfile</RNTemplateRepoLink> 的参考点。

:::注意
请记住更改<RNTemplateRepoLink href="template/ios/Podfile#L17">此行</RNTemplateRepoLink>。
:::

现在，我们需要运行一些额外的命令来安装 Ruby gems 和 Pod。
导航到“ios”文件夹并运行以下命令：

```sh
bundle install
bundle exec pod install
```

第一个命令将安装 Ruby 依赖项，第二个命令将实际将 React Native 代码集成到您的应用程序中，以便您的 iOS 文件可以导入 React Native 标头。

## 5. 编写 TypeScript 代码

现在我们将实际修改原生 iOS 应用程序以集成 React Native。

我们将编写的第一段代码是将新屏幕集成到我们的应用程序中的实际 React Native 代码。

### 创建一个 `index.js` 文件

首先，在 React Native 项目的根目录中创建一个空的“index.js”文件。

`index.js` 是 React Native 应用程序的起点，并且始终是必需的。它可以是一个小文件，用于“导入”React Native 组件或应用程序中的其他文件，也可以包含其所需的所有代码。

我们的“index.js”应如下所示（此处为<RNTemplateRepoLink href="template/index.js">社区模板文件作为参考</RNTemplateRepoLink>）：

```js
import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('HelloWorld', () => App);
```

### 创建一个 `App.tsx` 文件

让我们创建一个“App.tsx”文件。这是一个 [TypeScript](https://www.typescriptlang.org/) 文件，可以包含 [JSX](<https://en.wikipedia.org/wiki/JSX_(JavaScript)>) 表达式。它包含我们将集成到 iOS 应用程序中的根 React Native 组件（<RNTemplateRepoLink href="template/App.tsx">链接</RNTemplateRepoLink>）：

```tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode
              ? Colors.black
              : Colors.white,
            padding: 24,
          }}>
          <Text style={styles.title}>Step One</Text>
          <Text>
            Edit <Text style={styles.bold}>App.tsx</Text> to
            change this screen and see your edits.
          </Text>
          <Text style={styles.title}>See your changes</Text>
          <ReloadInstructions />
          <Text style={styles.title}>Debug</Text>
          <DebugInstructions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
});

export default App;
```

这是<RNTemplateRepoLink href="template/App.tsx">社区模板文件作为参考</RNTemplateRepoLink>。

## 5. 与您的 iOS 代码集成

我们现在需要添加一些本机代码以启动 React Native 运行时并告诉它渲染我们的 React 组件。

＃＃＃ 要求

React Native 初始化现在不再绑定到 iOS 应用程序的任何特定部分。

React Native 可以使用名为“RCTReactNativeFactory”的类进行初始化，该类负责为您处理 React Native 生命周期。

类初始化后，您可以启动一个提供“UIWindow”对象的 React Native 视图，也可以要求工厂生成一个“UIView”，您可以将其加载到任何“UIViewController”中。

在下面的示例中，我们将创建一个 ViewController，它可以加载 React Native 视图，因为它是“view”。

#### 创建 ReactViewController

从模板 (<kbd>⌘</kbd>+<kbd>N</kbd>) 创建一个新文件，然后选择 Cocoa Touch Class 模板。

确保选择“UIViewController”作为“子类”字段。

<选项卡groupId =“ios语言”queryString defaultValue = {constants.defaultAppleLanguage}值= {constants.appleLanguages}>
<TabItem值=“objc”>

现在打开“ReactViewController.m”文件并应用以下更改

```diff title="ReactViewController.m"
#import "ReactViewController.h"
+#import <React/RCTBundleURLProvider.h>
+#import <RCTReactNativeFactory.h>
+#import <RCTDefaultReactNativeFactoryDelegate.h>
+#import <RCTAppDependencyProvider.h>


@interface ReactViewController ()

@end

+@interface ReactNativeFactoryDelegate: RCTDefaultReactNativeFactoryDelegate
+@end

-@implementation ReactViewController
+@implementation ReactViewController {
+  RCTReactNativeFactory *_factory;
+  id<RCTReactNativeFactoryDelegate> _factoryDelegate;
+}

 - (void)viewDidLoad {
     [super viewDidLoad];
     // Do any additional setup after loading the view.
+    _factoryDelegate = [ReactNativeFactoryDelegate new];
+    _factoryDelegate.dependencyProvider = [RCTAppDependencyProvider new];
+    _factory = [[RCTReactNativeFactory alloc] initWithDelegate:_factoryDelegate];
+    self.view = [_factory.rootViewFactory viewWithModuleName:@"HelloWorld"];
 }

@end

+@implementation ReactNativeFactoryDelegate
+
+- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
+{
+  return [self bundleURL];
+}
+
+- (NSURL *)bundleURL
+{
+#if DEBUG
+  return [RCTBundleURLProvider.sharedSettings jsBundleURLForBundleRoot:@"index"];
+#else
+  return [NSBundle.mainBundle URLForResource:@"main" withExtension:@"jsbundle"];
+#endif
+}

@end

```

</标签项>
<TabItem值=“迅速”>

现在打开“ReactViewController.swift”文件并应用以下更改

```diff title="ReactViewController.swift"
import UIKit
+import React
+import React_RCTAppDelegate
+import ReactAppDependencyProvider

class ReactViewController: UIViewController {
+  var reactNativeFactory: RCTReactNativeFactory?
+  var reactNativeFactoryDelegate: RCTReactNativeFactoryDelegate?

  override func viewDidLoad() {
    super.viewDidLoad()
+    reactNativeFactoryDelegate = ReactNativeDelegate()
+    reactNativeFactoryDelegate!.dependencyProvider = RCTAppDependencyProvider()
+    reactNativeFactory = RCTReactNativeFactory(delegate: reactNativeFactoryDelegate!)
+    view = reactNativeFactory!.rootViewFactory.view(withModuleName: "HelloWorld")

  }
}

+class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
+    override func sourceURL(for bridge: RCTBridge) -> URL? {
+      self.bundleURL()
+    }
+
+    override func bundleURL() -> URL? {
+      #if DEBUG
+      RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
+      #else
+      Bundle.main.url(forResource: "main", withExtension: "jsbundle")
+      #endif
+    }
+
+}
```

</标签项>
</标签>

#### 在 rootViewController 中呈现 React Native 视图

最后，我们可以展示我们的 React Native 视图。为此，我们需要一个新的视图控制器来托管一个视图，我们可以在其中加载 JS 内容。
我们已经有了初始的“ViewController”，我们可以让它呈现“ReactViewController”。有多种方法可以实现此目的，具体取决于您的应用程序。对于此示例，我们假设您有一个以模式方式呈现 React Native 的按钮。

<选项卡groupId =“ios语言”queryString defaultValue = {constants.defaultAppleLanguage}值= {constants.appleLanguages}>
<TabItem值=“objc”>

```diff title="ViewController.m"
#import "ViewController.h"
+#import "ReactViewController.h"

@interface ViewController ()

@end

- @implementation ViewController
+@implementation ViewController {
+  ReactViewController *reactViewController;
+}

 - (void)viewDidLoad {
   [super viewDidLoad];
   // Do any additional setup after loading the view.
   self.view.backgroundColor = UIColor.systemBackgroundColor;
+  UIButton *button = [UIButton new];
+  [button setTitle:@"Open React Native" forState:UIControlStateNormal];
+  [button setTitleColor:UIColor.systemBlueColor forState:UIControlStateNormal];
+  [button setTitleColor:UIColor.blueColor forState:UIControlStateHighlighted];
+  [button addTarget:self action:@selector(presentReactNative) forControlEvents:UIControlEventTouchUpInside];
+  [self.view addSubview:button];

+  button.translatesAutoresizingMaskIntoConstraints = NO;
+  [NSLayoutConstraint activateConstraints:@[
+    [button.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor],
+    [button.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor],
+    [button.centerYAnchor constraintEqualToAnchor:self.view.centerYAnchor],
+    [button.centerXAnchor constraintEqualToAnchor:self.view.centerXAnchor],
+  ]];
 }

+- (void)presentReactNative
+{
+  if (reactViewController == NULL) {
+    reactViewController = [ReactViewController new];
+  }
+  [self presentViewController:reactViewController animated:YES];
+}

@end
```

</标签项>
<TabItem值=“迅速”>

```diff title="ViewController.swift"
import UIKit

class ViewController: UIViewController {

+  var reactViewController: ReactViewController?

  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view.
    self.view.backgroundColor = .systemBackground

+    let button = UIButton()
+    button.setTitle("Open React Native", for: .normal)
+    button.setTitleColor(.systemBlue, for: .normal)
+    button.setTitleColor(.blue, for: .highlighted)
+    button.addAction(UIAction { [weak self] _ in
+      guard let self else { return }
+      if reactViewController == nil {
+       reactViewController = ReactViewController()
+      }
+      present(reactViewController!, animated: true)
+    }, for: .touchUpInside)
+    self.view.addSubview(button)
+
+    button.translatesAutoresizingMaskIntoConstraints = false
+    NSLayoutConstraint.activate([
+      button.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
+      button.trailingAnchor.constraint(equalTo: self.view.trailingAnchor),
+      button.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
+      button.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
+    ])
  }
}
```

</标签项>
</标签>

确保禁用沙盒脚本。要实现此目的，请在 Xcode 中单击您的应用程序，然后单击构建设置。过滤脚本并将“用户脚本沙箱”设置为“否”。需要执行此步骤才能在我们随 React Native 附带的 [Hermes 引擎](https://github.com/facebook/hermes/blob/main/README.md) 的调试版本和发布版本之间正确切换。

![禁用沙盒](/docs/assets/disable-sandboxing.png)

最后，确保将“UIViewControllerBasedStatusBarAppearance”键添加到“Info.plist”文件中，值为“NO”。

![禁用 UIViewControllerBasedStatusBarAppearance](/docs/assets/disable-UIViewControllerBasedStatusBarAppearance.png)

## 6. 测试您的集成

您已完成将 React Native 与应用程序集成的所有基本步骤。现在我们将启动 [Metro 捆绑程序](https://metrobundler.dev/) 将 TypeScript 应用程序代码构建到捆绑包中。 Metro 的 HTTP 服务器将开发环境中的“localhost”包共享到模拟器或设备。这允许[热重载](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading)。

首先，您需要在项目的根目录中创建一个“metro.config.js”文件，如下所示：

```js
const {getDefaultConfig} = require('@react-native/metro-config');
module.exports = getDefaultConfig(__dirname);
```

您可以从社区模板文件中查看 <RNTemplateRepoLink href="template/metro.config.js">`metro.config.js` 文件</RNTemplateRepoLink> 作为参考。

然后，您需要在项目的根目录中创建一个“.watchmanconfig”文件。该文件必须包含一个空的 json 对象：

```sh
echo {} > .watchmanconfig
```

一旦配置文件到位，您就可以运行捆绑程序。在项目的根目录中运行以下命令：

<选项卡groupId =“package-manager”queryString defaultValue = {constants.defaultPackageManager}values = {constants.packageManagers}>
<TabItem值=“npm”>

```shell
npm start
```

</标签项>
<TabItem value="纱线">

```shell
yarn start
```

</标签项>
</标签>

现在正常构建并运行您的 iOS 应用程序。

一旦您到达应用程序内由 React 驱动的 Activity，它应该从开发服务器加载 JavaScript 代码并显示：

<center><img src="/docs/assets/EmbeddedAppIOS078.gif" width="300" /></center>

### 在 Xcode 中创建发布版本

您也可以使用 Xcode 创建您的发布版本！唯一的额外步骤是添加一个在构建应用程序时执行的脚本，以将 JS 和图像打包到 iOS 应用程序中。

1. 在 Xcode 中，选择您的应用程序
2. 单击“构建阶段”
3. 单击左上角的“+”，然后选择“新建运行脚本阶段”
4. 单击“Run Script”行并将脚本重命名为“Bundle React Native code and images”
5. 在文本框中粘贴以下脚本

```sh title="Build React Native code and image"
set -e

WITH_ENVIRONMENT="$REACT_NATIVE_PATH/scripts/xcode/with-environment.sh"
REACT_NATIVE_XCODE="$REACT_NATIVE_PATH/scripts/react-native-xcode.sh"

/bin/sh -c "$WITH_ENVIRONMENT $REACT_NATIVE_XCODE"
```

6. 将脚本拖放到名为“[CP] Embed Pods Frameworks”的脚本之前。

现在，如果您构建用于发布的应用程序，它将按预期工作。

## 7. 将初始 props 传递给 React Native 视图

在某些情况下，您希望将一些信息从本机应用程序传递到 JavaScript。例如，您可能希望将当前登录用户的用户 ID 以及可用于从数据库检索信息的令牌传递给 React Native。

这可以通过使用“RCTReactNativeFactory”类的“view(withModuleName:initialProperty)”重载的“initialProperties”参数来实现。以下步骤向您展示如何执行此操作。

### 更新 App.tsx 文件以读取初始属性。

打开“App.tsx”文件并添加以下代码：

```diff title="App.tsx"
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

-function App(): React.JSX.Element {
+function App(props): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
-       <View
-         style={{
-           backgroundColor: isDarkMode
-             ? Colors.black
-             : Colors.white,
-           padding: 24,
-         }}>
-         <Text style={styles.title}>Step One</Text>
-         <Text>
-           Edit <Text style={styles.bold}>App.tsx</Text> to
-           change this screen and see your edits.
-         </Text>
-         <Text style={styles.title}>See your changes</Text>
-         <ReloadInstructions />
-         <Text style={styles.title}>Debug</Text>
-         <DebugInstructions />
+         <Text style={styles.title}>UserID: {props.userID}</Text>
+         <Text style={styles.title}>Token: {props.token}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
+   marginLeft: 20,
  },
  bold: {
    fontWeight: '700',
  },
});

export default App;
```

这些更改将告诉 React Native 您的 App 组件现在正在接受某些属性。 “RCTreactNativeFactory”将在渲染时将它们传递给组件。

### 更新本机代码以将初始属性传递给 JavaScript。

<选项卡groupId =“ios语言”queryString defaultValue = {constants.defaultAppleLanguage}值= {constants.appleLanguages}>
<TabItem值=“objc”>

修改“ReactViewController.mm”以将初始属性传递给 JavaScript。

```diff title="ReactViewController.mm"
 - (void)viewDidLoad {
   [super viewDidLoad];
   // Do any additional setup after loading the view.

   _factoryDelegate = [ReactNativeFactoryDelegate new];
   _factoryDelegate.dependencyProvider = [RCTAppDependencyProvider new];
   _factory = [[RCTReactNativeFactory alloc] initWithDelegate:_factoryDelegate];
-  self.view = [_factory.rootViewFactory viewWithModuleName:@"HelloWorld"];
+  self.view = [_factory.rootViewFactory viewWithModuleName:@"HelloWorld" initialProperties:@{
+    @"userID": @"12345678",
+    @"token": @"secretToken"
+  }];
}
```

</标签项>
<TabItem值=“迅速”>

修改“ReactViewController.swift”以将初始属性传递给 React Native 视图。

```diff title="ReactViewController.swift"
  override func viewDidLoad() {
    super.viewDidLoad()
    reactNativeFactoryDelegate = ReactNativeDelegate()
    reactNativeFactoryDelegate!.dependencyProvider = RCTAppDependencyProvider()
    reactNativeFactory = RCTReactNativeFactory(delegate: reactNativeFactoryDelegate!)
-   view = reactNativeFactory!.rootViewFactory.view(withModuleName: "HelloWorld")
+   view = reactNativeFactory!.rootViewFactory.view(withModuleName: "HelloWorld" initialProperties: [
+     "userID": "12345678",
+     "token": "secretToken"
+])

  }
}
```

</标签项>
</标签>

3. 再次运行您的应用程序。呈现“ReactViewController”后，您应该会看到以下屏幕：

<中心>
  <img src="/docs/assets/brownfield-with-initial-props.png" width="30%" height="30%"/>
</中心>

## 现在怎么办？

此时，您可以像往常一样继续开发您的应用程序。请参阅我们的[调试]（调试）和[部署]（在设备上运行）文档，了解有关使用 React Native 的更多信息。
