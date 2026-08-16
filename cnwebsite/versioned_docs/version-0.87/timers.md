---
id: timers
title: 定时器
---

定时器是一个应用中非常重要的部分。React Native 实现了和浏览器一致的[定时器 Timer](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)。

## 定时器

- setTimeout, clearTimeout
- setInterval, clearInterval
- setImmediate, clearImmediate
- requestAnimationFrame, cancelAnimationFrame

`requestAnimationFrame(fn)`和`setTimeout(fn, 0)`不同，前者会在每帧刷新之后执行一次，而后者则会尽可能快地执行（在 iPhone 5S 上有可能每秒 1000 次以上）。

`setImmediate`则会在当前 JavaScript 执行块结束的时候执行，就在将要发送批量响应数据到原生之前。注意如果你在`setImmediate`的回调函数中又执行了`setImmediate`，它会紧接着立刻执行，而不会在调用之前等待原生代码。

`Promise`的实现就使用了`setImmediate`来执行异步调用。

:::note
在 Android 上调试时，如果调试器和设备之间的时间出现偏差，动画、事件行为等可能无法正常工作，或者结果可能不准确。
请在调试器机器上运行 ``adb shell "date `date +%m%d%H%M%Y.%S%3N`"`` 来纠正此问题。在真实设备上使用需要 root 权限。
:::
