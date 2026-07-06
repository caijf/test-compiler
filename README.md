# test-compiler

> 数据源自[TC39 提案](https://github.com/tc39/proposals)。
>
> 推荐使用 [typescript Playground](https://www.typescriptlang.org/zh/play)、[babel repl](https://babeljs.io/repl) 。
>
> 自 es2025 开始， tsconfig.json `target` 由 es5 改为 es2018 。
>
> 本地运行测试，需安装最新的 nodejs 。

测试 babel、tsc 将 es 新特性编译成 es5 和 cjs 。

## ES2026

### [Upsert](https://github.com/tc39/proposal-upsert)

- Map 实例的 [getOrInsert()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsert) 方法返回此 Map 中与指定键对应的值。如果该键不存在，它会插入一个具有该键和给定默认值的新条目，并返回插入的值。如果计算默认值成本很高，可以考虑改用 [Map.prototype.getOrInsertComputed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed)，它接受一个回调函数，仅在真正需要时才计算默认值。
- Map 实例的 [getOrInsertComputed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed) 方法返回此 Map 中与指定键对应的值。如果该键不存在，它会插入一个新条目，该条目具有指定的键和根据给定回调计算出的默认值，并返回插入的值。
- WeakMap 实例的 [getOrInsert()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert) 方法返回此 WeakMap 中与指定键对应的值。如果该键不存在，它会插入一个具有该键和给定默认值的新条目，并返回插入的值。如果计算默认值成本很高，可以考虑改用 [WeakMap.prototype.getOrInsertComputed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed)，它接受一个回调函数，仅在真正需要时才计算默认值。
- WeakMap 实例的 [getOrInsertComputed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed) 方法返回此 WeakMap 中与指定键对应的值。如果该键不存在，它会插入一个新条目，该条目具有指定的键和根据给定回调计算出的默认值，并返回插入的值。

### [JSON.parse source text access](https://github.com/tc39/proposal-json-parse-with-source)

更新 `JSON.parse`，为 `reviver` 函数提供更多参数，主要传达从中派生的源文本（包括标点符号，但不包括前导/尾随的无关空格）。

### [Iterator Sequencing](https://github.com/tc39/proposal-iterator-sequencing)

对现有迭代器进行排序来创建迭代器。

- [Iterator.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/concat) 静态方法会根据一个可迭代对象列表创建一个新的 Iterator 对象。新的迭代器会按顺序返回每个输入可迭代对象的值。
- Iterator 实例的 [flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/flatMap) 方法返回一个新的迭代器辅助对象，该对象接受原始迭代器中的每个元素，通过映射函数运行它，并生成映射函数返回的元素（这些元素包含在另一个迭代器或可迭代对象中）。

### [Uint8Array to/from Base64](https://github.com/tc39/proposal-arraybuffer-base64)

在十六进制字符串和 Uint8Array 之间进行转换的方法。

静态方法

- [Uint8Array.fromBase64()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64) 从 base64 编码的字符串创建一个新的 Uint8Array 对象。
- [Uint8Array.fromHex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex) 可以根据十六进制字符串创建一个新的 Uint8Array 对象。

实例方法

- [toBase64()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64) 方法返回基于此 Uint8Array 对象中的数据的 base64 编码字符串。
- [toHex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex) 方法返回基于此 Uint8Array 对象中的数据的十六进制编码字符串。

### [Math.sumPrecise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise)

Math.sumPrecise() 静态方法接受一个可迭代的数字对象，并返回这些数字的总和。它比在循环中求和更精确，因为它避免了中间结果中浮点精度的损失。

### [Error.isError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError)

Error.isError() 静态方法确定传递的值是否为 [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) 。

它比 [instanceof Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) 更稳健，因为它避免了误报和漏报：

- `Error.isError()` 会拒绝不是实际 Error 实例的值，即使它们的原型链中有 `Error.prototype` —— `instanceof Error` 会接受这些值，因为它会检查原型链。
- `Error.isError()` 接受在另一个领域构造的 Error 对象 `instanceof Error` 对这些对象返回 `false` 因为 `Error` 构造函数的标识在不同领域中不同。

对于 [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException) 实例， `Error.isError()` 返回 `true` 。这是因为，尽管 `DOMException` 并未被指定为 `Error` 的真正子类（ `Error` 构造函数并非 `DOMException` 构造函数的原型），但出于所有品牌特征检查的目的， `DOMException` 行为仍然与 `Error` 相同。

### [Array.fromAsync](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)

[Array.fromAsync()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync) 静态方法可以由一个[异步可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%BC%82%E6%AD%A5%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%92%8C%E5%BC%82%E6%AD%A5%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)、[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)或[类数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#%E4%BD%BF%E7%94%A8%E7%B1%BB%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1)创建一个新的、浅拷贝的 Array 实例。

## ES2025

### [RegExp.escape](https://github.com/tc39/proposal-regex-escaping)

[RegExp.escape()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) 静态方法对字符串中任何潜在的正则表达式语法字符进行转义，并返回一个可以安全地用作 RegExp() 构造函数的文本模式的新字符串。

### [Float16 on TypedArrays, DataView,](https://github.com/tc39/proposal-float16array) [`Math.f16round`](https://github.com/tc39/proposal-float16array)

向 JavaScript 添加 float16（又名半精度或 binary16）TypedArrays 。

- [Float16Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array)
- [DataView.prototype.getFloat16()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat16)
- [DataView.prototype.setFloat16()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat16)
- [Math.f16round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/f16round)

### [`Promise.try`](https://github.com/tc39/proposal-promise-try)

[`Promise.try()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/try) 静态方法接受一个任意类型的回调函数（无论其是同步或异步，返回结果或抛出异常），并将其结果封装成一个 Promise。

### [Sync Iterator helpers](https://github.com/tc39/proposal-iterator-helpers)

迭代器辅助函数。

- [drop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/drop)
- [every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/every)
- [filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/filter)
- [find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/find)
- [flatMap()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/flatMap)
- [forEach()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/forEach)
- [map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/map)
- [reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/reduce)
- [some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/some)
- [take()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/take)
- [toArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/toArray)
- [Iterator.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/from)

### [JSON Modules](https://github.com/tc39/proposal-json-modules)

以 [import attributes 提案](https://github.com/tc39/proposal-import-attributes)为基础，增加了跨 JavaScript 环境以通用方式导入 JSON 模块的功能。

```typescript
import json from './foo.json' with { type: 'json' };
import('foo.json', { with: { type: 'json' } });
```

### [Import Attributes](https://github.com/tc39/proposal-import-attributes)

为模块 import 语句添加了内联语法，以将更多信息与模块说明符一起传递。此类属性的初始应用是跨 JavaScript 环境以通用方式支持其他类型的模块，从 [JSON 模块](http://github.com/tc39/proposal-json-modules)开始。

```typescript
// import statements
import json from './foo.json' with { type: 'json' };

// re-export statements
export { val } from './foo.js' with { type: 'javascript' };

// dynamic import()
import('foo.json', { with: { type: 'json' } });
```

### [RegExp Modifiers](https://github.com/tc39/proposal-regexp-modifiers)

修饰符允许您更改子表达式中当前活动的 RegExp 标志。

```typescript
const re1 = /^[a-z](?-i:[a-z])$/i;
re1.test('ab'); // true
re1.test('Ab'); // true
re1.test('aB'); // false

const re2 = /^(?i:[a-z])[a-z]$/;
re2.test('ab'); // true
re2.test('Ab'); // true
re2.test('aB'); // false
```

### [New Set methods](https://github.com/tc39/proposal-set-methods)

内置 `Set` 类添加下列方法：

- [Set.prototype.intersection()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection)
- [Set.prototype.union()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union)
- [Set.prototype.difference()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference)
- [Set.prototype.symmetricDifference()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference)
- [Set.prototype.isSubsetOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf)
- [Set.prototype.isSupersetOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf)
- [Set.prototype.isDisjointFrom()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom)

### [Duplicate named capture groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups)

重复的命名捕获组。

```typescript
// 一个可能引用多个不同组的反向引用
const reg = /(?:(?<a>x)|(?<a>y))\k<a>/;
reg.test('xx'); // true
reg.test('yy'); // true
reg.test('xy'); // false
reg.test('yx'); // false
reg.test('xyx'); // false
reg.test('yxy'); // false
```

## ES2024

### [ArrayBuffer transfer](https://github.com/tc39/proposal-arraybuffer-transfer)

从可调整大小的缓冲区提案中分离出来的。

创建一个内容与该缓冲区相同的新 ArrayBuffer 实例，然后将当前缓冲区分离。

- [`transfer(newByteLength)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer#newbytelength)
- [`transferToFixedLength(newByteLength)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength)
- [`detached`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached)

### [Promise.withResolvers](https://github.com/tc39/proposal-promise-with-resolvers)

返回一个对象，其包含一个新的 `Promise` 对象和两个函数，用于解决或拒绝它，对应于传入给 `Promise()` 构造函数执行器的两个参数。

```typescript
const { promise, resolve, reject } = Promise.withResolvers();
```

完全等同于以下代码：

```typescript
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

只是它更简洁，并且不需要使用 `let`。

### [Array Grouping](https://github.com/tc39/proposal-array-grouping)

使数组（和迭代）中的项目分组更容易。

- [`Object.groupBy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [`Map.groupBy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)

### [Resizable and growable ArrayBuffers](https://github.com/tc39/proposal-resizablearraybuffer)

扩展了 `ArrayBuffer` 构造函数，以采用额外的最大长度，从而允许缓冲区的就地增长和收缩。

ArrayBuffer:

- [`resize(newByteLength)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize)
- [`byteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength)
- [`maxByteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength)
- [`resizable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)

SharedArrayBuffer:

- [`grow(newByteLength)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)
- [`byteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength)
- [`growable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)
- [`maxByteLength`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength)

### [RegExp v flag with set notation + properties of strings](https://github.com/tc39/proposal-regexp-v-flag)

RegExp 带有 `v` 符号的标志 + 字符串的属性。

支持差异（在 A 但不是在 B）、交集（在 A 和 B 中）、嵌套字符类。

```typescript
// 查找非 ASCII 数字以将其转换为 ASCII 数字的代码：
const reg1 = /[\p{Decimal_Number}--[0-9]]/v;
```

### [Atomics.waitAsync](https://github.com/tc39/proposal-atomics-wait-async)

- [Atomics.waitAsync()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync) 在共享内存位置异步等待并返回一个 `Promise`。

### [Well-Formed Unicode Strings](https://github.com/tc39/proposal-is-usv-string)

> [UTF-16 字符、Unicode 码位和字素簇（grapheme clusters）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_%E5%AD%97%E7%AC%A6%E3%80%81unicode_%E7%A0%81%E4%BD%8D%E5%92%8C%E5%AD%97%E7%B4%A0%E7%B0%87%EF%BC%88grapheme_clusters%EF%BC%89)

格式正确的 Unicode 字符串。

- [isWellFormed](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed) 返回一个表示该字符串是否包含单独的代理项的布尔值。如果字符串不包含单独的代理项，返回 `true`，否则返回 `false`。
- [toWellFormed](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed) 返回一个新字符串，原字符串中所有单独的代理项在新字符串中会被替换为 Unicode 替换字符 `U+FFFD`。

## ES2023

### [Change Array by Copy](https://github.com/tc39/proposal-change-array-by-copy)

在 `Array.prototype` 和 `TypedArray.prototype` 上提供额外的方法，通过返回数组的新副本和更改来启用数组的更改。

- [`toReversed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed) 是 [`reverse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 方法对应的复制版本。它返回一个元素顺序相反的新数组。
- [`toSorted(compareFn)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) 是 [`sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法的复制方法版本。它返回一个新数组，其元素按升序排列。
- [`toSpliced(start, deleteCount, ...items)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) 是 [`splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法的复制版本。它返回一个新数组，并在给定的索引处删除和/或替换了一些元素。
- [`with(index, value)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/with) 是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个新数组，其指定索引处的值会被新值替换。

### [Symbols as WeakMap keys](https://github.com/tc39/proposal-symbols-as-weakmap-keys)

扩展了 WeakMap API 以允许使用 Symbol 作为键。 目前，WeakMaps 被限制为只允许对象作为键。

### [Hashbang Grammar](https://github.com/tc39/proposal-hashbang)

> [Shebang](https://zh.wikipedia.org/wiki/Shebang)

`Hashbang`，也称为 `shebang`，是可执行脚本开头的字符序列，用于定义要运行的程序的解释器。当 Unix 内核的程序加载器执行 JavaScript 程序时，主机会剥离 hashbang 以生成有效源，然后再将其传递给引擎。Hashbang Grammar 提案标准化了它的完成方式。

```javascript
#!/usr/bin/env node

console.log('hi 👋');
```

### [Array find from last](https://github.com/tc39/proposal-array-find-from-last)

`findLast()` 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 `undefined`。

`findLastIndex()` 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

## ES2022

### [Error Cause](https://github.com/tc39/proposal-error-cause)

错误原因。

### [Class Static Block](https://github.com/tc39/proposal-class-static-block)

class 静态初始化代码块。

### [Accessible Object.prototype.hasOwnProperty](https://github.com/tc39/proposal-accessible-object-hasownproperty)

Object.hasOwn - 对象自身属性中是否具有指定的属性（非继承）。

### [at](https://github.com/tc39/proposal-relative-indexing-method)

可索引值方法。(Array, String, TypedArray)

### [Ergonomic brand checks for Private Fields](https://github.com/tc39/proposal-private-fields-in-in)

in 操作符检查 class 私有属性。

### [Top-level await](https://github.com/tc39/proposal-top-level-await)

顶层 await 。

### [RegExp Match Indices](https://github.com/tc39/proposal-regexp-match-indices)

> babel 暂无 plugin 转换。(20220712)

正则表达式匹配索引。

### [Class Fields](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

> [Private instance methods and accessors](https://github.com/tc39/proposal-private-methods/blob/main/OLD_README.md), [Class Public Instance Fields & Private Instance Fields](https://github.com/tc39/proposal-class-fields), [Static class fields and private static methods](https://github.com/tc39/proposal-static-class-features/blob/main/OLD_README.md), [Classes \[ES6\]](https://exploringjs.com/impatient-js/ch_classes.html)

新的 class 成员：

- 实例公有属性
- 实例私有属性
- 静态公有属性
- 静态私有属性
- 静态和非静态私有方法和访问器

## ES2021

### [Numeric Separators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)

数字分隔符\_(下划线)，提高数字的可读性。

### [Logical Assignment Operators](https://github.com/tc39/proposal-logical-assignment)

- [Logical AND assignment (&&=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Logical OR assignment (||=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Logical nullish assignment (??=)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

逻辑赋值运算符，目的是提供简洁的写法。

### [WeakRefs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)

WeakRef 对象允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被 GC(garbage collector)回收。**尽量不要使用。**

### [`Promise.any`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

当有任何一个 promise 状态变为成功(fulfilled)，就返回。当全部 promise 都 rejected，抛出一个 AggregateError 错误。

### [`String.prototype.replaceAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

所有符合匹配规则的字符都将被替换。

## ES2020

### [`import.meta`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta)

一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。

### [Nullish coalescing Operator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

### [Optional Chaining](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

### [`for-in`](https://github.com/tc39/proposal-for-in-order) [mechanics](https://github.com/tc39/proposal-for-in-order)

以前在不同的引擎下 `for-in` 循环出来的内容顺序是可能不一样的，现在标准化了。

### [globalThis](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象（global object）。

### [`Promise.allSettled`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

### [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

`BigInt` 是一种内置对象，它提供了一种方法来表示大于 2<sup>53 - 1</sup> 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。`BigInt` 可以表示任意大的整数。

### [`import()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%8A%A8%E6%80%81import)

标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。

### [`String.prototype.matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

## ES2019

### [`Array.prototype.{flat,flatMap}`](https://github.com/tc39/proposal-flatMap)

- [Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

- [Array.prototype.flatMap()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

### [`String.prototype.{trimStart,trimEnd}`](https://github.com/tc39/proposal-string-left-right-trim)

- [String.prototype.trimStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)

字符串的开头删除连续空白符，返回一个新字符串，并不会修改原字符串本身。

- [String.prototype.trimEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

字符串的末端删除连续空白符，返回一个新字符串，并不会修改原字符串本身。

### [Well-formed](https://github.com/tc39/proposal-well-formed-stringify) [`JSON.stringify`](https://github.com/tc39/proposal-well-formed-stringify)

更加友好的 JSON.stringify （修复了对于一些超出范围的 unicode 展示错误的问题。）

### [`Object.fromEntries`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

把键值对列表转换为一个对象。

### [`Function.prototype.toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) revision

返回当前函数源代码的字符串。

修订版。包含函数内的空格和注释，但在 Arrow Functions 上不起作用。

### [`Symbol.prototype.description`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)

只读属性，它会返回 `Symbol` 对象的可选描述的字符串。

### [JSON superset](https://github.com/tc39/proposal-json-superset)

行分隔符（U + 2028）和段分隔符（U + 2029）符号现在允许在字符串文字中，与 JSON 匹配。在 ES2019 之前，这些符号在字符串文字中被视为行终止符，它会产生错误 `SyntaxError: Invalid or unexpected token`

### [Optional catch binding](https://github.com/tc39/proposal-optional-catch-binding)

可选的 Catch 绑定。

## ES2018

### [Asynchronous Iteration](https://github.com/tc39/proposal-async-iteration)

异步迭代器。`await` 可以和循环一起使用，以串行的方式运行异步操作。

### [`Promise.prototype.finally`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

返回一个 `Promise`。在 `promise` 结束时，无论结果是 `fulfilled` 或者是 `rejected`，都会执行指定的回调函数。

### [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

正则表达式 Unicode 转义。 Unicode 属性转义——形式为 `\p{...}` 和 `\P{...}`，在正则表达式中使用标记 `u` (unicode) 设置，在 `\p` 块儿内，可以以键值对的方式设置需要匹配的属性而非具体内容。

### [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)

正则表达式反向断言 (`?<=` `?<!`)。

### [Rest/Spread Properties](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E4%B8%AD%E7%9A%84_rest)

对象解构提供了和数组一样的 Rest 参数（）和展开操作符

### [RegExp named capture groups](https://github.com/tc39/proposal-regexp-named-groups)

正则表达式命名捕获组 (`?<name>`)。

### [`s`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) [(`dotAll`) flag for regular expressions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)

正则表达式中点 `.` 匹配除回车外的任何单字符，标记 `s` 改变这种行为，允许行终止符的出现。

### [Lifting template literal restriction](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E7%89%88%E5%AD%97%E9%9D%A2%E9%87%8F%E5%8F%8A%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97)

移除对 ECMAScript 在带标签的模版字符串中转义序列的语法限制。

## ES2017

### [Shared memory and atomics](https://github.com/tc39/ecmascript_sharedmem)

用于从共享内存位置读取和写入。

- [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

`SharedArrayBuffer` 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 `ArrayBuffer` 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 `ArrayBuffer` 不同的是，`SharedArrayBuffer` 不能被分离。

- [Atomics](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics)

`Atomics` 对象提供了一组静态方法对 `SharedArrayBuffer` 和 `ArrayBuffer` 对象进行原子操作。

### [Async functions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

更清晰的 Promise 语法

### [Trailing commas in function parameter lists and calls](https://github.com/tc39/proposal-trailing-function-commas)

函数参数列表和调用中的末尾逗号。

### [`Object.getOwnPropertyDescriptors`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)

用来获取一个对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。

### [String padding](https://github.com/tc39/proposal-string-pad-start-end)

- [String.prototype.padStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

- [String.prototype.padEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

### [`Object.values`](https://github.com/tc39/proposal-object-values-entries) [/](https://github.com/tc39/proposal-object-values-entries) [`Object.entries`](https://github.com/tc39/proposal-object-values-entries)

- [Object.values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 `for...in` 循环的顺序相同 ( 区别在于 `for-in` 循环枚举原型链中的属性 )。

- [Object.entries()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in` 循环遍历该对象时返回的顺序一致（区别在于 `for-in` 循环还会枚举原型链中的属性）。

## ES2016

### [Exponentiation operator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)

求幂运算符（`**`）返回将第一个操作数加到第二个操作数的幂的结果。它等效于 `Math.pow`，不同之处在于它也接受 `BigInts` 作为操作数。

求幂运算符是是右结合的: `a ** b ** c` 等于 `a ** (b ** c)`。

### [`Array.prototype.includes`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

## 常见问题

### tsc 转译文件没有 tslib ？

> **注意**：含有 `export {}` 的模块文件，转译后才会引入 `tslib` 。

安装依赖

```bash
pnpm add tslib
```

同时启用 `importHelpers` 和 `downlevelIteration`，`moduleResolution` 设置为 `node` 。如：

```javascript
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
pnpm add @babel/runtime
```

或

```bash
# tsc
pnpm add tslib
```

## 参考

- [TC39 提案](https://github.com/tc39/proposals)
- [babel](https://babeljs.io/)
- [typescript](https://www.typescriptlang.org/)
- [tsconfig](https://www.staging-typescript.org/zh/tsconfig)
- [caniuse](http://caniuse.com/)
