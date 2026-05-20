---
id: usecolorscheme
title: useColorScheme
---

```tsx
import {useColorScheme} from 'react-native';
```

`useColorScheme` 这个 React Hook 提供并订阅来自 [`Appearance`](appearance) 模块的颜色方案更新。返回值表示当前生效的颜色方案。该值可以稍后通过直接用户动作（例如，设备设置中的主题选择，或通过 [`setColorScheme`](appearance#setcolorscheme) 在应用级别选择的用户界面样式）或根据时间表（例如，遵循白天/夜晚周期的亮色和暗色主题）来更新。

### 返回值

- `'light'`: 已应用亮色方案。
- `'dark'`: 已应用暗色方案。
- `null`: 如果原生 Appearance 模块不可用，则可能返回该值。

---

## 示例

```SnackPlayer
import React from 'react';
import {Text, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>useColorScheme(): {colorScheme}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

您可以在[`AppearanceExample.js`](https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/Appearance/AppearanceExample.js)中找到一个完整的示例，该示例演示了如何使用此钩子以及React上下文来为您的应用程序添加浅色和深色主题支持。
