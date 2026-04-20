---
id: text-nodes
title: 文本节点
---

文本节点表示树中的原始文本内容（类似于 Web 上的 [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) 节点）。它们不能直接通过 `refs` 访问，但可以通过元素 ref 上的 [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) 等方法访问。

```SnackPlayer ext=js&name=Text%20instances%20example
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const TextWithRefs = () => {
  const ref = React.useRef(null);
  const [viewInfo, setViewInfo] = React.useState('');

  React.useEffect(() => {
    // `textElement` is an object implementing the interface described here.
    const textElement = ref.current;
    const textNode = textElement.childNodes[0];
    setViewInfo(
      `Text content is: ${textNode.nodeValue}`,
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text ref={ref}>
        Hello world!
      </Text>
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

export default TextWithRefs;
```

---

## Reference

### Web-compatible API

来自 [`CharacterData`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData)：

- Properties
  - [`data`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/data)
  - [`length`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/length)
  - [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/nextElementSibling)
  - [`previousElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/previousElementSibling)
- Methods
  - [`substringData()`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/substringData)

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
