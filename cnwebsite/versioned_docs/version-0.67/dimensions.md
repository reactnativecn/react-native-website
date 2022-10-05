---
id: dimensions
title: Dimensions
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

本模块用于获取设备屏幕的宽高。

> 对于 React 函数组件，我们更推荐使用[`useWindowDimensions`](usewindowdimensions)这个 Hook API。和 `Dimensions` 不同，它会在屏幕尺寸变化时自动更新。

```jsx
import { Dimensions } from 'react-native';
```

你可以用下面的方法来获取设备的宽高：

```jsx
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
```

> 注意：尽管尺寸信息立即就可用，但它可能会在将来被修改（譬如设备的方向改变），所以基于这些常量的渲染逻辑和样式应当每次 render 之后都调用此函数，而不是将对应的值保存下来。（举例来说，你可能需要使用内联的样式而不是在`StyleSheet`中保存相应的尺寸）。

如果你要考虑可折叠的设备，或者其他屏幕尺寸可变的设备，可以参考下面例子中所使用的事件监听函数或是[`useWindowDimensions`](usewindowdimensions)：

## 示例

<Tabs groupId="syntax" defaultValue={constants.defaultSyntax} values={constants.syntax}>
<TabItem value="functional">

```SnackPlayer name=Dimensions
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const App = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>
      <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
      <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
```

</TabItem>
<TabItem value="classical">

```SnackPlayer name=Dimensions
import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class App extends Component {
  state = {
    dimensions: {
      window,
      screen
    }
  };

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onChange);
  }

  render() {
    const { dimensions } = this.state;

    return (
      <View style={styles.container}>
        <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
        <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
```

</TabItem>
</Tabs>

---

# 文档

## 方法

### `addEventListener()`

```jsx
static addEventListener(type, handler)
```

添加一个事件监听函数。目前支持的事件有：

- `change`: Fires when a property within the `Dimensions` object changes. The argument to the event handler is an object with `window` and `screen` properties whose values are the same as the return values of `Dimensions.get('window')` and `Dimensions.get('screen')`, respectively.
  - `window` - Size of the visible Application window
  - `screen` - Size of the device's screen

---

### `get()`

```jsx
static get(dim)
```

初始的尺寸信息应该在`runApplication`之后被执行，这样才可以在任何其他的 require 被执行之前使用。不过在稍后可能还会更新。

示例： `const {height, width} = Dimensions.get('window');`

**参数：**

| 名称                                                               | 类型   | 说明                                                                       |
| ------------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------- |
| dim <div className="label basic required two-lines">Required</div> | string | Name of dimension as defined when calling `set`. Returns value for the dimension. |

> For Android the `window` dimension will exclude the size used by the `status bar` (if not translucent) and `bottom navigation bar`

---

### `removeEventListener()`

```jsx
static removeEventListener(type, handler)
```

> **Deprecated.** Use the `remove()` method on the event subscription returned by [`addEventListener()`](#addeventlistener).

---

### `set()`

```jsx
static set(dims)
```

This should only be called from native code by sending the `didUpdateDimensions` event.

**参数：**

| 名称                                                      | 类型   | 说明                               |
| --------------------------------------------------------- | ------ | ----------------------------------------- |
| dims <div className="label basic required">Required</div> | object | String-keyed object of dimensions to set. |

---

## Type Definitions

### DimensionsValue

**Properties:**

| Name   | Type                                        | Description                             |
| ------ | ------------------------------------------- | --------------------------------------- |
| window | [DisplayMetrics](dimensions#displaymetrics) | Size of the visible Application window. |
| screen | [DisplayMetrics](dimensions#displaymetrics) | Size of the device's screen.            |

### DisplayMetrics

| Type   |
| ------ |
| object |

**Properties:**

| Name      | Type   |
| --------- | ------ |
| width     | number |
| height    | number |
| scale     | number |
| fontScale | number |
