---
id: navigation
title: 多屏导航
---

手机 app 一般由多屏组成。管理多个屏幕的表示和之间的转换通常由导航器来处理。

这份指南介绍了在 React Native 里面多种类型的导航器组件。如果你开始使用导航器，你可能需要使用[React Navigation](navigation.md#react-navigation)。React Navigation 提供了一个简单直观的导航解决方案，能够在 Android 和 iOS 上显示通用的堆栈导航和选项卡导航模式。

如果你想要达到一个 Android 和 iOS 原生的体验，或者你正在一个使用原生导航管理的应用程序里面加入 React Native，下面这些库提供了两个平台原生的导航：[react-native-navigation](https://github.com/wix/react-native-navigation).

## React Navigation

导航的社区解决方案是一个独立的库，允许开发人员用几行代码建立管理应用程序的多屏。

### 安装和设置

首先，你需要在你的工程里面安装它们：

```sh
npm install @react-navigation/native @react-navigation/stack
```

接下来，安装需要的依赖。根据您的项目是 Expo 管理的项目还是 React Native 命令创建的项目，您需要运行不同的命令。

- 如果你是一个 Expo 管理的项目，使用 `expo` 安装依赖:

  ```sh
  expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```

- 如果是 React Native 命令创建的项目，使用 `npm` 安装依赖

  ```sh
  npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```

  对于 iOS 的 React Native 命令创建的项目，确保你已经安装了 [Cocoapods](https://cocoapods.org/)。然后安装 pods 完成安装。

  ```sh
  cd ios
  pod install
  cd ..
  ```

> 说明：在安装之后可能会出现一些依赖之间的警告。它们通常是由于一些包之前不同指定版本指定造成的。你可以安全的忽略大多数警告，知道应用程序构建完成。

为了确保 `react-native-gesture-handler` 安装完成，在入口文件，比如 `index.js` 或者 `App.js` 的 **顶部** 加入下面的代码（确保这行代码在顶部，在这行代码之前没有任何东西）。

```js
import 'react-native-gesture-handler';
```

现在，你需要打包整个应用程序在 `NavigationContainer`。通常你可以在入口文件，比如 `index.js` 或者 `App.js` 这样做：

```jsx
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
```

现在你可以开始准备在设备/模拟器上面构建运行你的应用程序了。

### 用法

现在你可以创建一个主屏幕和个人资料屏幕的应用程序：

```jsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

在这个例子里面，使用 `Stack.Screen`组件定义了 `Home` 和 `Profile` 两屏。类似地，你可以定义任意多的屏幕。

您可以在 `Stack.Screen` 的 `options` 属性中为每个屏幕设置选项，比如屏幕标题。

每一屏都有一个 `component`属性 ，它是一个 React 组件。这些组件接受一个 `navigation` 的属性，它有各种各样的方法来链接到其他屏幕。例如，你可以使用 `navigation.navigate` 导航到 `Profile` 屏。

```jsx
function HomeScreen({navigation}) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
}
```

堆栈导航器中的视图使用原生组件和 [' Animated '](Animated .md) 库来交付在本机线程上运行的 60fps 动画。此外，动画和手势可以定制。

React Navigation 也有针对不同类型导航器的包，比如选项卡和折叠项。您可以使用它们在应用程序中实现各种模式。


For a complete intro to React Navigation, follow the [React Navigation Getting Started Guide](https://reactnavigation.org/docs/getting-started.html).
