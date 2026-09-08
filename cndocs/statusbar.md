---
id: statusbar
title: StatusBar
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

用于控制应用状态栏的组件。状态栏是屏幕顶部的区域，通常显示当前时间、Wi-Fi 和蜂窝网络信息、电池电量和/或其他状态图标。

### 和导航器一起使用

可以同时挂载多个 `StatusBar` 组件。属性将按照 `StatusBar` 组件的挂载顺序进行合并。

<Tabs groupId="language" queryString defaultValue={constants.defaultSnackLanguage} values={constants.snackLanguages}>
<TabItem value="javascript">

```SnackPlayer name=StatusBar%20Component%20Example&supportedPlatforms=android,ios&ext=js
import {useState} from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const STYLES = ['default', 'auto', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <Text style={styles.textStyle}>
          StatusBar Visibility:{'\n'}
          {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style:{'\n'}
          {statusBarStyle}
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.textStyle}>
            StatusBar Transition:{'\n'}
            {statusBarTransition}
          </Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <Button
            title="Toggle StatusBar"
            onPress={changeStatusBarVisibility}
          />
          <Button
            title="Change StatusBar Style"
            onPress={changeStatusBarStyle}
          />
          {Platform.OS === 'ios' ? (
            <Button
              title="Change StatusBar Transition"
              onPress={changeStatusBarTransition}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default App;
```

</TabItem>
<TabItem value="typescript">

```SnackPlayer name=StatusBar%20Component%20Example&supportedPlatforms=android,ios&ext=tsx
import {useState} from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  StatusBarStyle,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const STYLES = ['default', 'auto', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <Text style={styles.textStyle}>
          StatusBar Visibility:{'\n'}
          {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style:{'\n'}
          {statusBarStyle}
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.textStyle}>
            StatusBar Transition:{'\n'}
            {statusBarTransition}
          </Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <Button
            title="Toggle StatusBar"
            onPress={changeStatusBarVisibility}
          />
          <Button
            title="Change StatusBar Style"
            onPress={changeStatusBarStyle}
          />
          {Platform.OS === 'ios' ? (
            <Button
              title="Change StatusBar Transition"
              onPress={changeStatusBarTransition}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default App;
```

</TabItem>
</Tabs>

### 命令式 API

对于不适合使用组件的场景，StatusBar 也提供了以组件静态方法形式暴露的命令式 API。不过不推荐同时使用静态 API 和组件来设置同一个属性，因为静态 API 设置的值会在下一次渲染时被组件设置的值覆盖。

---

# 参考

## 常量

### `currentHeight` <div className="label android">Android</div>

状态栏的高度，包括刘海高度（如果有的话）。

---

## Props

### `animated`

状态栏属性变化时是否使用动画过渡。支持 `barStyle` 和 `hidden` 属性。

| 类型    | 必需 | 默认值  |
| ------- | ---- | ------- |
| boolean | 否   | `false` |

---

### `barStyle`

设置状态栏文本的颜色。

在 Android 上，此属性仅对 API 23 及以上版本生效。

| 类型                                       | 必需 | 默认值      |
| ------------------------------------------ | ---- | ----------- |
| [StatusBarStyle](statusbar#statusbarstyle) | 否   | `'default'` |

---

### `hidden`

是否隐藏状态栏。

| 类型    | 必需 | 默认值  |
| ------- | ---- | ------- |
| boolean | 否   | `false` |

---

### `showHideTransition` <div className="label ios">iOS</div>

使用 `hidden` 属性显示和隐藏状态栏时的过渡效果。

| 类型                                               | 默认值   |
| -------------------------------------------------- | -------- |
| [StatusBarAnimation](statusbar#statusbaranimation) | `'fade'` |

---

## 方法

### `popStackEntry()`

```tsx
static popStackEntry(entry: StatusBarProps);
```

获取并移除栈中最后一个 StatusBar 条目。

**参数：**

| 名称                                                   | 类型 | 描述                          |
| ------------------------------------------------------ | ---- | ----------------------------- |
| entry <div className="label basic required">必需</div> | any  | `pushStackEntry` 返回的条目。 |

---

### `pushStackEntry()`

```tsx
static pushStackEntry(props: StatusBarProps): StatusBarProps;
```

将一个 StatusBar 条目压入栈中。返回值应在完成后传递给 `popStackEntry`。

**参数：**

| 名称                                                   | 类型 | 描述                                          |
| ------------------------------------------------------ | ---- | --------------------------------------------- |
| props <div className="label basic required">必需</div> | any  | 包含要在栈条目中使用的 StatusBar 属性的对象。 |

---

### `replaceStackEntry()`

```tsx
static replaceStackEntry(
  entry: StatusBarProps,
  props: StatusBarProps
): StatusBarProps;
```

用新的属性替换栈中已有的 StatusBar 条目。

**参数：**

| 名称                                                   | 类型 | 描述                                              |
| ------------------------------------------------------ | ---- | ------------------------------------------------- |
| entry <div className="label basic required">必需</div> | any  | 要替换的 `pushStackEntry` 返回的条目。            |
| props <div className="label basic required">必需</div> | any  | 包含要在替换栈条目中使用的 StatusBar 属性的对象。 |

---

### `setBarStyle()`

```tsx
static setBarStyle(style: StatusBarStyle, animated?: boolean);
```

设置状态栏的样式。

**参数：**

| 名称                                                   | 类型                                       | 描述                 |
| ------------------------------------------------------ | ------------------------------------------ | -------------------- |
| style <div className="label basic required">必需</div> | [StatusBarStyle](statusbar#statusbarstyle) | 要设置的状态栏样式。 |
| animated                                               | boolean                                    | 是否使用动画过渡。   |

---

### `setHidden()`

```tsx
static setHidden(hidden: boolean, animation?: StatusBarAnimation);
```

显示或隐藏状态栏。

**参数：**

| 名称                                                    | 类型                                               | 描述                             |
| ------------------------------------------------------- | -------------------------------------------------- | -------------------------------- |
| hidden <div className="label basic required">必需</div> | boolean                                            | 是否隐藏状态栏。                 |
| animation <div className="label ios">iOS</div>          | [StatusBarAnimation](statusbar#statusbaranimation) | 改变状态栏隐藏属性时的动画效果。 |

---

## 类型定义

### StatusBarAnimation

iOS 上状态栏的过渡动画类型。

| 类型 |
| ---- |
| enum |

**常量：**

| 值        | 类型   | 描述     |
| --------- | ------ | -------- |
| `'fade'`  | string | 渐变动画 |
| `'slide'` | string | 滑动动画 |
| `'none'`  | string | 无动画   |

---

### StatusBarStyle

状态栏样式类型。

| 类型 |
| ---- |
| enum |

**常量：**

| 值                | 类型   | 描述                                                                                   |
| ----------------- | ------ | -------------------------------------------------------------------------------------- |
| `'default'`       | string | 默认状态栏样式（Android 为浅色，iOS 为深色）                                           |
| `'auto'`          | string | 根据当前配色方案自动选择 `light-content` 或 `dark-content`，并会在配色方案变化时更新。 |
| `'light-content'` | string | 白色文字和图标                                                                         |
| `'dark-content'`  | string | 深色文字和图标（Android 上需要 API>=23）                                               |
