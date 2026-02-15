---
id: activityindicator
title: ActivityIndicator
---

显示圆形加载指示器。

＃＃ 例子

```SnackPlayer name=ActivityIndicator%20Example
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
```

＃ 参考

## 道具

### [查看道具](view#props)

继承[视图道具](view#props)。

---

### `动画`

是否显示指示器（“true”）或隐藏指示器（“false”）。

|类型 |默认|
| ---- | -------- |
|布尔 | `真实` |

---

### `颜色`

微调器的前景色。

|类型 |默认|
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [颜色]（颜色）| `null`（系统重音默认颜色）<div className="label android">Android</div><hr/><ins style={{background: '#999'}} className="color-box" />`'#999999'` <div className="label ios">iOS</div> |

---

### `hidesWhenStopped` <div className="label ios">iOS</div>

指示器在不设置动画时是否应隐藏。

|类型 |默认|
| ---- | -------- |
|布尔 | `真实` |

---

### `参考`

一个引用设置器，在安装时将被分配一个[元素节点]（元素节点）。

---

### `尺寸`

指标的大小。

|类型 |默认|
| -------------------------------------------------------------------------------------------------- | ---------|
| enum(`'small'`, ''large'`)<hr/>number <div className="label android">Android</div> | ``小'` |
