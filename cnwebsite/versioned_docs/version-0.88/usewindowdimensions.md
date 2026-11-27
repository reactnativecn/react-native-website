---
id: usewindowdimensions
title: useWindowDimensions
---

```tsx
import {useWindowDimensions} from 'react-native';
```

`useWindowDimensions` 会在屏幕尺寸或字体缩放比例变化时自动更新所有值。你可以像这样获取应用窗口的宽度和高度：

```tsx
const {height, width} = useWindowDimensions();
```

## 示例

```SnackPlayer name=useWindowDimensions&supportedPlatforms=ios,android
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Window Dimension Data</Text>
        <View>
          <Text>Height: {height}</Text>
          <Text>Width: {width}</Text>
          <Text>Font scale: {fontScale}</Text>
          <Text>Pixel ratio: {scale}</Text>
        </View>
        <View
          style={{
            width: 100 * fontScale,
            padding: 16 * fontScale,
            ...styles.box,
          }}>
          <Text style={{fontSize: 14 / fontScale}}>Dynamic Box</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  header: {
    fontSize: 20,
  },
  box: {
    minWidth: 100,
    backgroundColor: '#06bcee',
  },
});

export default App;
```

## 属性

### `fontScale`

```tsx
useWindowDimensions().fontScale;
```

The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect.

:::note
可以将字体大小百分比用于动态调整 UI 元素（如内边距、外边距和容器高度）的尺寸，以确保一致且无障碍的用户体验。利用 fontScale 属性，开发者可以让应用更好地适配用户对更大或更小文本的偏好，从而提高可读性和易用性。
:::

---

### `height`

```tsx
useWindowDimensions().height;
```

The height in pixels of the window or screen your app occupies.

---

### `scale`

```tsx
useWindowDimensions().scale;
```

The pixel ratio of the device your app is running on. The values can be:

- `1` which indicates that one point equals one pixel (usually PPI/DPI of 96, 76 on some platforms).
- `2` or `3` which indicates a Retina or high DPI display.

---

### `width`

```tsx
useWindowDimensions().width;
```

The width in pixels of the window or screen your app occupies.
