# test-compiler

> 推荐使用 [typescript Playground](https://www.typescriptlang.org/zh/play)、[babel repl](https://babeljs.io/repl)

测试 babel、tsc 将 es 新特性编译成 es5 和 cjs

## ES2016

### `Array.prototype.includes`

### Exponentiation operator

## ES2017

### `Object.values`/`Object.entries`

### String padding

### `Object.getOwnPropertyDescriptors`

### Trailing commas in function parameter lists and calls

### Async functions

### Shared memory and atomics

## ES2018

### `s` (`dotAll`) flag for regular expressions

### RegExp named capture groups

### Rest/Spread Properties

### RegExp Lookbehind Assertions

### RegExp Unicode Property Escapes

### `Promise.prototype.finally`

### Asynchronous Iteration

## ES2019

### [Optional catch binding](https://github.com/tc39/proposal-optional-catch-binding)

可选的 Catch 绑定。

### [JSON superset](https://github.com/tc39/proposal-json-superset)

行分隔符（U + 2028）和段分隔符（U + 2029）符号现在允许在字符串文字中，与 JSON 匹配。在 ES2019 之前，这些符号在字符串文字中被视为行终止符，它会产生错误 `SyntaxError: Invalid or unexpected token`

### [`Symbol.prototype.description`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)

只读属性，它会返回 `Symbol` 对象的可选描述的字符串。

### [`Function.prototype.toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) revision

返回当前函数源代码的字符串。

修订版。包含函数内的空格和注释，但在 Arrow Functions 上不起作用。

### [`Object.fromEntries`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

把键值对列表转换为一个对象。

### [Well-formed `JSON.stringify`](https://github.com/tc39/proposal-well-formed-stringify)

更加友好的 JSON.stringify （修复了对于一些超出范围的 unicode 展示错误的问题。）

### `String.prototype.{trimStart,trimEnd}`

- [String.prototype.trimStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)

字符串的开头删除连续空白符，返回一个新字符串，并不会修改原字符串本身。

- [String.prototype.trimEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

字符串的末端删除连续空白符，返回一个新字符串，并不会修改原字符串本身。

### `Array.prototype.{flat,flatMap}`

- [Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

- [Array.prototype.flatMap()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

## ES2020

### [`String.prototype.matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

### [`import()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%8A%A8%E6%80%81import)

标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。

### [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

`BigInt` 是一种内置对象，它提供了一种方法来表示大于 2<sup>53 - 1</sup> 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。`BigInt` 可以表示任意大的整数。

### [`Promise.allSettled`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

### [globalThis](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象（global object）。

### [`for-in` mechanics](https://github.com/tc39/proposal-for-in-order)

以前在不同的引擎下 `for-in` 循环出来的内容顺序是可能不一样的，现在标准化了。

### [Optional Chaining](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

### [Nullish coalescing Operator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

### [`import.meta`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta)

一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。

## ES2021

### [`String.prototype.replaceAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

所有符合匹配规则的字符都将被替换。

### [`Promise.any`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

当有任何一个 promise 状态变为成功(fulfilled)，就返回。当全部 promise 都 rejected，抛出一个 AggregateError 错误。

### [WeakRefs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)

WeakRef 对象允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被 GC(garbage collector)回收。**尽量不要使用。**

### Logical Assignment Operators

- [Logical AND assignment (&&=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Logical OR assignment (||=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Logical nullish assignment (??=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

逻辑赋值运算符，目的是提供简洁的写法。

### [Numeric Separators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)

数字分隔符\_(下划线)，提高数字的可读性。

## 常见问题

### tsc 转译文件没有 tslib ？

> **注意**：含有 `export {}` 的模块文件，转译后才会引入 `tslib` 。

安装依赖

```
yarn add tslib
```

同时启用 `importHelpers` 和 `downlevelIteration` ，`moduleResolution` 设置为 `node` 。如：

```json
// other config
"importHelpers": true,
"downlevelIteration": true,
// other config
"moduleResolution": "node",
```

### 使用 `@babel/plugin-transform-runtime` 或 `tslib` 也项目中报错 `xxx undefined` ？

> [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

转译时使用 `@babel/plugin-transform-runtime` 或 `tslib`，可以大大减少包的体积。

但是要依赖对应的包（注意不是开发依赖）

```bash
# babel
yarn add @babel/runtime
```

或

```bash
# tsc
yarn add tslib
```

## 参考

- [TC39 提案](https://github.com/tc39/proposals)
- [babel](https://babeljs.io/)
- [typescript](https://www.typescriptlang.org/)
- [tsconfig](https://www.staging-typescript.org/zh/tsconfig)
- [caniuse](http://caniuse.com/)
- [ECMAScript 6 入门](https://es6.ruanyifeng.com/)
