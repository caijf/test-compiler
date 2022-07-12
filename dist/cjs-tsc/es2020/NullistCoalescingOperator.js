"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var foo = null !== null && null !== void 0 ? null : 'default string';
console.log(foo);
// expected output: "default string"
var baz = 0 !== null && 0 !== void 0 ? 0 : 42;
console.log(baz);
// expected output: 0
var nullValue = null;
var emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
var someNumber = 42;
var valA = nullValue !== null && nullValue !== void 0 ? nullValue : "valA 的默认值";
var valB = emptyText !== null && emptyText !== void 0 ? emptyText : "valB 的默认值";
var valC = someNumber !== null && someNumber !== void 0 ? someNumber : 0;
console.log(valA); // "valA 的默认值"
console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）
console.log(valC); // 42
function A() { console.log('函数 A 被调用了'); return undefined; }
function B() { console.log('函数 B 被调用了'); return false; }
function C() { console.log('函数 C 被调用了'); return "foo"; }
console.log((_a = A()) !== null && _a !== void 0 ? _a : C());
// 依次打印 "函数 A 被调用了"、"函数 C 被调用了"、"foo"
// A() 返回了 undefined，所以操作符两边的表达式都被执行了
console.log((_b = B()) !== null && _b !== void 0 ? _b : C());
