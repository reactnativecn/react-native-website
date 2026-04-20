---
id: element-nodes
title: 元素节点
---

元素节点表示原生视图树中的原生组件（类似于 Web 上的 [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) 节点）。

所有原生组件以及许多内置组件，都会通过 ref 提供这类节点：

```SnackPlayer ext=js&name=Element%20instances%20example
import * as React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

const ViewWithRefs = () => {
  const ref = React.useRef(null);
  const [viewInfo, setViewInfo] = React.useState('');

  React.useEffect(() => {
    // `element` is an object implementing the interface described here.
    const element = ref.current;
    const rect = JSON.stringify(element.getBoundingClientRect());
    setViewInfo(
      `Bounding rect is: ${rect}.\nText content is: ${element.textContent}`,
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View ref={ref} style={styles.content}>
        <Text>Hello world!</Text>
      </View>
      <Text>{viewInfo}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    backgroundColor: 'gray',
  },
});

export default ViewWithRefs;
```

:::info
请注意，一些内置组件本身只是其他组件（包括原生组件）的容器。例如，`ScrollView` 内部会渲染一个原生滚动视图和一个原生视图；你可以通过它提供的 ref，使用 `getNativeScrollRef()` 和 `getInnerViewRef()` 等方法来访问这些视图。
:::

---

## Reference

### Web-compatible API

来自 [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)：

- Properties
  - [`offsetHeight`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight)
  - [`offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
  - [`offsetParent`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
  - [`offsetTop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
  - [`offsetWidth`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)
- Methods
  - [`blur()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur).
  - [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
    - ⚠️ 不支持 `options` 参数。

来自 [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)：

- Properties
  - [`childElementCount`](https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount)
  - [`children`](https://developer.mozilla.org/en-US/docs/Web/API/Element/children)
  - [`clientHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)
  - [`clientLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft)
  - [`clientTop`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop)
  - [`clientWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)
  - [`firstElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild)
  - [`id`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)
    - ℹ️ 返回 `id` 或 `nativeID` prop 的值。
  - [`lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild)
  - [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)
  - [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
  - [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  - [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)
  - [`previousElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling)
  - [`scrollHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)
  - [`scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)
    - ⚠️ 对于内置组件，只有 `ScrollView` 实例才可能返回非零值。
  - [`scrollTop`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)
    - ⚠️ 对于内置组件，只有 `ScrollView` 实例才可能返回非零值。
  - [`scrollWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth)
  - [`tagName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
    - ℹ️ 返回以 `RN:` 为前缀、规范化后的原生组件名，例如 `RN:View`。
  - [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- Methods
  - [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
  - [`hasPointerCapture()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)
  - [`setPointerCapture()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)
  - [`releasePointerCapture()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)

来自 [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)：

- Properties
  - [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
  - [`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
  - [`isConnected`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)
  - [`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
  - [`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
  - [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
  - [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  - [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)
  - [`ownerDocument`](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument)
    - ℹ️ 会返回渲染该组件的[文档实例](/docs/next/document-instances)。
  - [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
  - [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
  - [`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)
  - [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- Methods
  - [`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
  - [`contains()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
  - [`getRootNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    - ℹ️ 如果组件尚未挂载，会返回它自身的引用。
  - [`hasChildNodes()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes)

### Legacy API

- [`measure()`](/docs/next/legacy/direct-manipulation#measurecallback)
- [`measureInWindow()`](/docs/next/legacy/direct-manipulation#measureinwindowcallback)
- [`measureLayout()`](/docs/next/legacy/direct-manipulation#measurelayoutrelativetonativecomponentref-onsuccess-onfail)
- [`setNativeProps()`](/docs/next/legacy/direct-manipulation#setnativeprops-with-touchableopacity)
