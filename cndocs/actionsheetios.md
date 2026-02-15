---
id: actionsheetios
title: ActionSheetIOS
---

显示 iOS 原生 [操作表](https://developer.apple.com/design/ human-interface-guidelines/action-sheets) 组件。

＃＃ 例子

```SnackPlayer name=ActionSheetIOS%20Example&supportedPlatforms=ios
import React, {useState} from 'react';
import {ActionSheetIOS, Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [result, setResult] = useState('🔮');

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(String(Math.floor(Math.random() * 100) + 1));
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      },
    );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.result}>{result}</Text>
        <Button onPress={onPress} title="Show Action Sheet" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
});

export default App;
```

＃ 参考

＃＃ 方法

### `showActionSheetWithOptions()`

```tsx
static showActionSheetWithOptions: (
  options: ActionSheetIOSOptions,
  callback: (buttonIndex: number) => void,
);
```

显示 iOS 操作表。 `options` 对象必须包含以下一项或多项：

- `options` （字符串数组） - 按钮标题列表（必需）
- `cancelButtonIndex` (int) - `options` 中取消按钮的索引
- `cancelButtonTintColor` (字符串) - 用于更改取消按钮文本颜色的 [颜色](颜色)
- `structuralButtonIndex` (int 或 int 数组) - `options` 中破坏性按钮的索引
- `title` (字符串) - 显示在操作表上方的标题
- `message` (字符串) - 显示在标题下方的消息
- `anchor`（数字）- 操作表应锚定的节点（用于 iPad）
- `tintColor` (字符串) - 用于非破坏性按钮标题的 [颜色](颜色)
- `disabledButtonIndices` （数字数组） - 应禁用的按钮索引列表
- `userInterfaceStyle` (string) - 用于操作表的界面样式，可以设置为 `light` 或 `dark`，否则将使用默认的系统样式

“回调”函数采用一个参数，即所选项目的从零开始的索引。

最小的例子：

```tsx
ActionSheetIOS.showActionSheetWithOptions(
  {
    options: ['Cancel', 'Remove'],
    destructiveButtonIndex: 1,
    cancelButtonIndex: 0,
  },
  buttonIndex => {
    if (buttonIndex === 1) {
      /* destructive action */
    }
  },
);
```

---

### `dismissActionSheet()`

```tsx
static dismissActionSheet();
```

取消显示的最上面的 iOS 操作表，如果不存在操作表，则会显示警告。

---

### `showShareActionSheetWithOptions()`

```tsx
static showShareActionSheetWithOptions: (
  options: ShareActionSheetIOSOptions,
  failureCallback: (error: Error) => void,
  successCallback: (success: boolean, method: string) => void,
);
```

显示 iOS 共享表。 “options”对象应包含“message”和“url”之一或两者，并且还可以具有“subject”或“excludedActivityTypes”：

- `url` (字符串) - 要共享的 URL
- `message` (字符串) - 一条要分享的消息
- `subject` (字符串) - 消息的主题
- `excludedActivityTypes`（数组）- 要从 ActionSheet 中排除的活动

:::注意
如果“url”指向本地文件，或者是base64编码的uri，则它指向的文件将被直接加载和共享。通过这种方式，您可以共享图像、视频、PDF 文件等。如果 `url` 指向远程文件或地址，则它必须符合 [RFC 2396](https://www.ietf.org/rfc/rfc2396.txt) 中描述的 URL 格式。例如，没有适当协议 (HTTP/HTTPS) 的 Web URL 将不会被共享。
:::

“failureCallback”函数采用一个参数，即一个错误对象。该对象上定义的唯一属性是“string”类型的可选“stack”属性。

“successCallback”函数有两个参数：

- 表示成功或失败的布尔值
- 成功时表示共享方法的字符串
