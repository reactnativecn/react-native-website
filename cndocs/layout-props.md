---
id: layout-props
title: 布局属性
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

:::info
更多关于这些属性的详细示例可以在[Flexbox 布局](flexbox)页面上找到。
:::

### 示例

以下示例展示了不同属性如何影响或塑造 React Native 布局。你可以尝试添加或删除 UI 中的方块，同时更改属性`flexWrap`的值来体验效果。

<Tabs groupId="language" queryString defaultValue={constants.defaultSnackLanguage} values={constants.snackLanguages}>
<TabItem value="javascript">

```SnackPlayer name=LayoutProps%20Example&ext=js
import {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };

  const changeSetting = (value, options, setterFunction) => {
    if (value === options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.playingSpace, hookedStyles]}>
          {squares.map(elem => elem)}
        </View>
        <ScrollView style={styles.layoutContainer}>
          <View style={styles.controlSpace}>
            <View style={styles.buttonView}>
              <Button
                title="Change Flex Direction"
                onPress={() =>
                  changeSetting(flexDirection, flexDirections, setFlexDirection)
                }
              />
              <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Justify Content"
                onPress={() =>
                  changeSetting(
                    justifyContent,
                    justifyContents,
                    setJustifyContent,
                  )
                }
              />
              <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Align Items"
                onPress={() =>
                  changeSetting(alignItems, alignItemsArr, setAlignItems)
                }
              />
              <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Direction"
                onPress={() =>
                  changeSetting(direction, directions, setDirection)
                }
              />
              <Text style={styles.text}>{directions[direction]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Flex Wrap"
                onPress={() => changeSetting(wrap, wraps, setWrap)}
              />
              <Text style={styles.text}>{wraps[wrap]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Add Square"
                onPress={() => setSquares([...squares, <Square />])}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Delete Square"
                onPress={() =>
                  setSquares(squares.filter((v, i) => i !== squares.length - 1))
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
const justifyContents = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignItemsArr = [
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
];
const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
const directions = ['inherit', 'ltr', 'rtl'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutContainer: {
    flex: 0.5,
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
    overflow: 'hidden',
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: {
    textAlign: 'center',
  },
});

const Square = () => (
  <View
    style={{
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    }}
  />
);

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 14).toString(16);
  });
};

export default App;
```

</TabItem>
<TabItem value="typescript">

```SnackPlayer name=LayoutProps%20Example&ext=tsx
import {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };

  const changeSetting = (
    value: number,
    options: any[],
    setterFunction: (index: number) => void,
  ) => {
    if (value === options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.playingSpace, hookedStyles]}>
          {squares.map(elem => elem)}
        </View>
        <ScrollView style={styles.layoutContainer}>
          <View style={styles.controlSpace}>
            <View style={styles.buttonView}>
              <Button
                title="Change Flex Direction"
                onPress={() =>
                  changeSetting(flexDirection, flexDirections, setFlexDirection)
                }
              />
              <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Justify Content"
                onPress={() =>
                  changeSetting(
                    justifyContent,
                    justifyContents,
                    setJustifyContent,
                  )
                }
              />
              <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Align Items"
                onPress={() =>
                  changeSetting(alignItems, alignItemsArr, setAlignItems)
                }
              />
              <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Direction"
                onPress={() =>
                  changeSetting(direction, directions, setDirection)
                }
              />
              <Text style={styles.text}>{directions[direction]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Flex Wrap"
                onPress={() => changeSetting(wrap, wraps, setWrap)}
              />
              <Text style={styles.text}>{wraps[wrap]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Add Square"
                onPress={() => setSquares([...squares, <Square />])}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Delete Square"
                onPress={() =>
                  setSquares(squares.filter((v, i) => i !== squares.length - 1))
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const flexDirections: ViewStyle['flexDirection'][] = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
];
const justifyContents: ViewStyle['justifyContent'][] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignItemsArr: ViewStyle['alignItems'][] = [
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
];
const wraps: ViewStyle['flexWrap'][] = ['nowrap', 'wrap', 'wrap-reverse'];
const directions: ViewStyle['direction'][] = ['inherit', 'ltr', 'rtl'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutContainer: {
    flex: 0.5,
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
    overflow: 'hidden',
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: {
    textAlign: 'center',
  },
});

const Square = () => (
  <View
    style={{
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    }}
  />
);

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 14).toString(16);
  });
};

export default App;
```

</TabItem>
</Tabs>

---

# 参考文档

## Props

### `alignContent`

`alignContent` 控制各行在交叉轴方向上的对齐方式，会覆盖父级的 `alignContent`。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)。

| Type                                                                                                 | Required |
| ---------------------------------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly') | No       |

---

### `alignItems`

`alignItems` 控制子元素在交叉轴方向上的对齐。例如，如果子元素沿垂直方向排列，`alignItems` 控制它们在水平方向上的对齐方式。其用法与 CSS 中的 `align-items` 相同（默认值：stretch）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)。

| Type                                                            | Required |
| --------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### `alignSelf`

`alignSelf` 控制单个子元素在交叉轴方向上的对齐方式，会覆盖父级的 `alignItems`。其用法与 CSS 中的 `align-self` 相同（默认值：auto）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)。

| Type                                                                    | Required |
| ----------------------------------------------------------------------- | -------- |
| enum('auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### `aspectRatio`

宽高比（aspect ratio）用于控制节点未指定尺寸的维度大小。

- 在设置了宽/高的节点上，宽高比控制未设置维度的大小
- 在设置了弹性基准值（flex basis）的节点上，如果交叉轴尺寸未设置，宽高比控制节点在交叉轴方向上的尺寸
- 在带有测量函数（measure function）的节点上，宽高比的作用相当于测量函数测量的是弹性基准值（flex basis）
- 在设置了弹性伸缩（flex grow/shrink）的节点上，如果交叉轴尺寸未设置，宽高比控制节点在交叉轴方向上的尺寸
- 宽高比会将最小/最大尺寸纳入考量

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `borderBottomWidth`

`borderBottomWidth` 其用法与 CSS 中的 `border-bottom-width` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderEndWidth`

当 direction 为 `ltr` 时，`borderEndWidth` 等同于 `borderRightWidth`。当 direction 为 `rtl` 时，`borderEndWidth` 等同于 `borderLeftWidth`。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderLeftWidth`

`borderLeftWidth` 其用法与 CSS 中的 `border-left-width` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderRightWidth`

`borderRightWidth` 其用法与 CSS 中的 `border-right-width` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderStartWidth`

当 direction 为 `ltr` 时，`borderStartWidth` 等同于 `borderLeftWidth`。当 direction 为 `rtl` 时，`borderStartWidth` 等同于 `borderRightWidth`。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderTopWidth`

`borderTopWidth` 其用法与 CSS 中的 `border-top-width` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `borderWidth`

`borderWidth` 其用法与 CSS 中的 `border-width` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `bottom`

`bottom` 表示该组件底部边缘偏移的逻辑像素数。

其用法与 CSS 中的 `bottom` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

有关 `bottom` 如何影响布局的更多详情，请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `boxSizing`

`boxSizing` 定义元素的各种尺寸属性（`width`、`height`、`minWidth`、`minHeight` 等）的计算方式。如果 `boxSizing` 为 `border-box`，这些尺寸应用于元素的边框盒（border box）；如果为 `content-box`，则应用于元素的内容盒（content box）。默认值为 `border-box`。如果你想进一步了解该属性的工作原理，[web 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) 是一个很好的信息来源。

| Type                              | Required |
| --------------------------------- | -------- |
| enum('border-box', 'content-box') | No       |

---

### `columnGap`

`columnGap` 其用法与 CSS 中的 `column-gap` 相同。它接受数字（单位为点）或百分比字符串（例如 `'10%'`）。百分比值在[新架构](/architecture/landing-page)上受支持。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `direction`

`direction` 指定用户界面的方向流。默认值为 `inherit`，根节点除外，根节点的值基于当前语言区域（locale）。

更多详情请参阅 [MDN CSS 参考](https://www.yogalayout.dev/docs/styling/layout-direction)。

| Type                          | Required |
| ----------------------------- | -------- |
| enum('inherit', 'ltr', 'rtl') | No       |

---

### `display`

`display` 设置该组件的显示类型。

其用法与 CSS 中的 `display` 类似，但仅支持 'flex'、'none' 和 'contents' 这几个值。默认值为 `flex`。

| Type                             | Required |
| -------------------------------- | -------- |
| enum('none', 'flex', 'contents') | No       |

---

### `end`

当 direction 为 `ltr` 时，`end` 等同于 `right`。当 direction 为 `rtl` 时，`end` 等同于 `left`。

该样式优先于 `left` 和 `right` 样式。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `flex`

在 React Native 中，`flex` 的工作方式与 CSS 中不同。`flex` 是一个数字而非字符串，它按照 [Yoga](https://github.com/facebook/yoga) 布局引擎的规则工作。

当 `flex` 为正数时，组件会变为可伸缩的，并按其 flex 值成比例确定尺寸。因此，`flex` 设为 `2` 的组件所占空间是 `flex` 设为 1 的组件的两倍。`flex: <positive number>` 等同于 `flexGrow: <positive number>, flexShrink: 1, flexBasis: 0`。

当 `flex` 为 `0` 时，组件根据 `width` 和 `height` 确定尺寸，不可伸缩。

当 `flex` 为 `-1` 时，组件通常根据 `width` 和 `height` 确定尺寸。但是，如果空间不足，组件会收缩至其 `minWidth` 和 `minHeight`。

`flexGrow`、`flexShrink` 和 `flexBasis` 的用法与 CSS 中相同。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `flexBasis`

`flexBasis` 是一种与轴无关的方式，用于指定主轴方向上项目的默认尺寸。如果父容器设置了 `flexDirection: row`，设置子元素的 `flexBasis` 类似于设置该子元素的 `width`；如果父容器设置了 `flexDirection: column`，则类似于设置该子元素的 `height`。项目的 `flexBasis` 即该项目的默认尺寸，也就是在进行任何 `flexGrow` 和 `flexShrink` 计算之前该项目的尺寸。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `flexDirection`

`flexDirection` 控制容器子元素的排列方向。`row` 表示从左到右，`column` 表示从上到下，另外两个的作用想必你也能猜到。其用法与 CSS 中的 `flex-direction` 相同，只是默认值为 `column`。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)。

| Type                                                   | Required |
| ------------------------------------------------------ | -------- |
| enum('row', 'row-reverse', 'column', 'column-reverse') | No       |

---

### `flexGrow`

`flexGrow` 描述容器内的剩余空间应如何沿主轴分配给其子元素。在完成子元素布局后，容器会按照子元素指定的 flex grow 值分配剩余空间。

`flexGrow` 接受任何大于等于 0 的浮点数，默认值为 0。容器会按照子元素 `flexGrow` 值的权重，在子元素之间分配剩余空间。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `flexShrink`

[`flexShrink`](layout-props#flexshrink) 描述当子元素在主轴方向上的总尺寸超出容器在主轴方向上的尺寸时，如何沿主轴收缩子元素。`flexShrink` 与 `flexGrow` 非常相似，如果把溢出的尺寸看作负的剩余空间，就可以按同样的方式理解它。这两个属性配合使用，可以让子元素按需伸缩。

`flexShrink` 接受任何大于等于 0 的浮点数，默认值为 0。容器会按照子元素 `flexShrink` 值的权重收缩子元素。

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `flexWrap`

`flexWrap` 控制子元素在到达 flex 容器末尾后是否换行。其用法与 CSS 中的 `flex-wrap` 相同（默认值：nowrap）。

注意，它与 `alignItems: stretch`（默认值）搭配不再起作用，因此你可能需要改用例如 `alignItems: flex-start`（破坏性变更详情：https://github.com/react/react-native/releases/tag/v0.28.0）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)。

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('wrap', 'nowrap', 'wrap-reverse') | No       |

---

### `gap`

`gap`其用法与 CSS 中的 `gap` 相同。它是 `rowGap` 和 `columnGap` 的简写形式，接受数字（以点为单位）或百分比字符串（例如 `'10%'`）。百分比值在[新架构](/architecture/landing-page)上受支持。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `height`

`height` 用于设置该组件的高度。

它的用法与 CSS 中的 `height` 类似，但在 React Native 中你必须使用点或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/height)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `inset`

:::note
`inset` 仅在[新架构](/architecture/landing-page)上可用
:::

设置 `inset` 与分别设置 `top`、`bottom`、`right` 和 `left` 属性的效果相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/inset)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetBlock`

:::note
`insetBlock` 仅在[新架构](/architecture/landing-page)上可用
:::

等同于 [`top`](layout-props#top) 和 [`bottom`](layout-props#bottom)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetBlockEnd`

:::note
`insetBlockEnd` 仅在[新架构](/architecture/landing-page)上可用
:::

等同于 [`bottom`](layout-props#bottom)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetBlockStart`

:::note
`insetBlockStart` 仅在[新架构](/architecture/landing-page)上可用
:::

等同于 [`top`](layout-props#top)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetInline`

:::note
`insetInline` 仅在[新架构](/architecture/landing-page)上可用
:::

等同于 [`right`](layout-props#right) 和 [`left`](layout-props#left)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetInlineEnd`

:::note
`insetInlineEnd` 仅在[新架构](/architecture/landing-page)上可用
:::

当 direction 为 `ltr` 时，`insetInlineEnd` 等同于 [`right`](layout-props#right)。当 direction 为 `rtl` 时，`insetInlineEnd` 等同于 [`left`](layout-props#left)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `insetInlineStart`

:::note
`insetInlineStart` 仅在[新架构](/architecture/landing-page)上可用
:::

当 direction 为 `ltr` 时，`insetInlineStart` 等同于 [`left`](layout-props#left)。当 direction 为 `rtl` 时，`insetInlineStart` 等同于 [`right`](layout-props#right)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `isolation`

:::note
`isolation` 仅在[新架构](/architecture/landing-page)上可用
:::

`isolation` 用于创建[层叠上下文](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context)。

有两个可选值：

- `auto`（默认值）：不起任何作用。
- `isolate`：创建层叠上下文。

| Type                    | Required |
| ----------------------- | -------- |
| enum('auto', 'isolate') | No       |

---

### `justifyContent`

`justifyContent` 用于在主轴方向上对齐子元素。例如，如果子元素沿垂直方向排列，`justifyContent` 控制它们在垂直方向上的对齐方式。其用法与 CSS 中的 `justify-content` 相同（默认值：flex-start）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)。

| Type                                                                                      | Required |
| ----------------------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly') | No       |

---

### `left`

`left` 表示该组件左边缘偏移的逻辑像素数。

它的用法与 CSS 中的 `left` 类似，但在 React Native 中你必须使用点或百分比。不支持 em 及其他单位。

有关 `left` 如何影响布局的更多详情，请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/left)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `margin`

设置 `margin` 与分别设置 `marginTop`、`marginLeft`、`marginBottom` 和 `marginRight` 的效果相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginBottom`

`marginBottom`其用法与 CSS 中的 `margin-bottom` 相同。更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginBlock`

等同于 [`marginVertical`](layout-props#marginvertical)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginBlockEnd`

等同于 [`marginBottom`](layout-props#marginbottom)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginBlockStart`

等同于 [`marginTop`](layout-props#margintop)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginEnd`

当 direction 为 `ltr` 时，`marginEnd` 等同于 `marginRight`。当 direction 为 `rtl` 时，`marginEnd` 等同于 `marginLeft`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginHorizontal`

设置 `marginHorizontal` 与同时设置 `marginLeft` 和 `marginRight` 的效果相同。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginInline`

等同于 [`marginHorizontal`](layout-props#marginhorizontal)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginInlineEnd`

当 direction 为 `ltr` 时，`marginInlineEnd` 等同于 [`marginEnd`](layout-props#marginend)（即 `marginRight`）。当 direction 为 `rtl` 时，`marginInlineEnd` 等同于 [`marginEnd`](layout-props#marginend)（即 `marginLeft`）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginInlineStart`

当 direction 为 `ltr` 时，`marginInlineStart` 等同于 [`marginStart`](layout-props#marginstart)（即 `marginLeft`）。当 direction 为 `rtl` 时，`marginInlineStart` 等同于 [`marginStart`](layout-props#marginstart)（即 `marginRight`）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginLeft`

`marginLeft`其用法与 CSS 中的 `margin-left` 相同。更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginRight`

`marginRight`其用法与 CSS 中的 `margin-right` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginStart`

当 direction 为 `ltr` 时，`marginStart` 等同于 `marginLeft`。当 direction 为 `rtl` 时，`marginStart` 等同于 `marginRight`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginTop`

`marginTop` 其用法与 CSS 中的 `margin-top` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `marginVertical`

设置 `marginVertical` 的效果与同时设置 `marginTop` 和 `marginBottom` 相同。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `maxHeight`

`maxHeight` 表示该组件的最大高度，单位为逻辑像素。

其用法与 CSS 中的 `max-height` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `maxWidth`

`maxWidth` 表示该组件的最大宽度，单位为逻辑像素。

其用法与 CSS 中的 `max-width` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `minHeight`

`minHeight` 表示该组件的最小高度，单位为逻辑像素。

其用法与 CSS 中的 `min-height` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `minWidth`

`minWidth` 表示该组件的最小宽度，单位为逻辑像素。

其用法与 CSS 中的 `min-width` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `overflow`

`overflow` 控制子元素的测量与显示方式。`overflow: hidden` 会裁剪视图，而 `overflow: scroll` 会使视图独立于父级的主轴进行测量。其用法与 CSS 中的 `overflow` 相同（默认值：visible）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)。

| Type                                | Required |
| ----------------------------------- | -------- |
| enum('visible', 'hidden', 'scroll') | No       |

---

### `padding`

设置 `padding` 的效果与分别设置 `paddingTop`、`paddingBottom`、`paddingLeft` 和 `paddingRight` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingBottom`

`paddingBottom` 其用法与 CSS 中的 `padding-bottom` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingBlock`

等同于 [`paddingVertical`](layout-props#paddingvertical)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingBlockEnd`

等同于 [`paddingBottom`](layout-props#paddingbottom)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingBlockStart`

等同于 [`paddingTop`](layout-props#paddingtop)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingEnd`

当 direction 为 `ltr` 时，`paddingEnd` 等同于 `paddingRight`。当 direction 为 `rtl` 时，`paddingEnd` 等同于 `paddingLeft`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingHorizontal`

设置 `paddingHorizontal` 相当于同时设置 `paddingLeft` 和 `paddingRight`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingInline`

等同于 [`paddingHorizontal`](layout-props#paddinghorizontal)。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingInlineEnd`

当 direction 为 `ltr` 时，`paddingInlineEnd` 等同于 [`paddingEnd`](layout-props#paddingend)（即 `paddingRight`）。当 direction 为 `rtl` 时，`paddingInlineEnd` 等同于 [`paddingEnd`](layout-props#paddingend)（即 `paddingLeft`）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline-end)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingInlineStart`

当 direction 为 `ltr` 时，`paddingInlineStart` 等同于 [`paddingStart`](layout-props#paddingstart)（即 `paddingLeft`）。当 direction 为 `rtl` 时，`paddingInlineStart` 等同于 [`paddingStart`](layout-props#paddingstart)（即 `paddingRight`）。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline-start)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingLeft`

`paddingLeft` 其用法与 CSS 中的 `padding-left` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingRight`

`paddingRight` 其用法与 CSS 中的 `padding-right` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingStart`

当 direction 为 `ltr` 时，`paddingStart` 等同于 `paddingLeft`。当 direction 为 `rtl` 时，`paddingStart` 等同于 `paddingRight`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingTop`

`paddingTop` 其用法与 CSS 中的 `padding-top` 相同。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `paddingVertical`

设置 `paddingVertical` 相当于同时设置 `paddingTop` 和 `paddingBottom`。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `position`

React Native 中的 `position` 与[常规 CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/position)类似，但默认所有元素都被设为 `relative`。

`relative` 表示按照布局的正常流定位元素。偏移属性（`top`、`bottom`、`left`、`right`）将相对于该布局产生偏移。

`absolute` 会将元素移出布局的正常流。偏移将相对于其[包含块](./flexbox.md#the-containing-block)产生。

`static` 表示按照布局的正常流定位元素。偏移属性将不起作用。
`static` 元素不会为绝对定位的后代元素形成包含块。

更多信息请参阅 [Flexbox 布局文档](./flexbox.md#position)。此外，[Yoga 文档](https://www.yogalayout.dev/docs/styling/position)中有关于 `position` 在 React Native 与 CSS 之间差异的更多详情。

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('absolute', 'relative', 'static') | No       |

---

### `right`

`right` 表示该组件右侧边缘偏移的逻辑像素数。

其用法与 CSS 中的 `right` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

有关 `right` 如何影响布局的更多详情，请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/right)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `rowGap`

`rowGap` 其用法与 CSS 中的 `row-gap` 相同。它接受数字（单位为点）或百分比字符串（例如 `'10%'`）。百分比值在[新架构](/architecture/landing-page)上受支持。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `start`

当 direction 为 `ltr` 时，`start` 等同于 `left`。当 direction 为 `rtl` 时，`start` 等同于 `right`。

该样式优先于 `left`、`right` 和 `end` 样式。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `top`

`top` 表示该组件顶部边缘偏移的逻辑像素数。

其用法与 CSS 中的 `top` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

有关 `top` 如何影响布局的更多详情，请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/top)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `width`

`width` 设置该组件的宽度。

其用法与 CSS 中的 `width` 类似，但在 React Native 中必须使用点（points）或百分比。不支持 em 及其他单位。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/width)。

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### `zIndex`

`zIndex` 控制哪些组件显示在其他组件之上。通常你不需要使用 `zIndex`。组件按照它们在文档树中的顺序渲染，因此排在后面的组件会绘制在前面的组件之上。如果你的动画或自定义模态界面不希望出现这种行为，`zIndex` 可能会有用。

其用法与 CSS 的 `z-index` 属性相同——`zIndex` 更大的组件会渲染在上层。可以把 z 轴方向想象成从手机屏幕指向你的眼睛。

在 iOS 上，要使 `zIndex` 按预期工作，可能需要各 `View` 互为兄弟节点。

更多详情请参阅 [MDN CSS 参考](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)。

| Type   | Required |
| ------ | -------- |
| number | No       |
