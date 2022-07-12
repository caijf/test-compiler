"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ref, _, _A, _B;

var foo = (_ref = null) !== null && _ref !== void 0 ? _ref : 'default string';
console.log(foo); // expected output: "default string"

var baz = (_ = 0) !== null && _ !== void 0 ? _ : 42;
console.log(baz); // expected output: 0

var nullValue = null;
var emptyText = ""; // 空字符串，是一个假值，Boolean("") === false

var someNumber = 42;
var valA = nullValue !== null && nullValue !== void 0 ? nullValue : "valA 的默认值";
var valB = emptyText !== null && emptyText !== void 0 ? emptyText : "valB 的默认值";
var valC = someNumber !== null && someNumber !== void 0 ? someNumber : 0;
console.log(valA); // "valA 的默认值"

console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）

console.log(valC); // 42

function A() {
  console.log('函数 A 被调用了');
  return undefined;
}

function B() {
  console.log('函数 B 被调用了');
  return false;
}

function C() {
  console.log('函数 C 被调用了');
  return "foo";
}

console.log((_A = A()) !== null && _A !== void 0 ? _A : C()); // 依次打印 "函数 A 被调用了"、"函数 C 被调用了"、"foo"
// A() 返回了 undefined，所以操作符两边的表达式都被执行了

console.log((_B = B()) !== null && _B !== void 0 ? _B : C()); // 依次打印 "函数 B 被调用了"、"false"
// B() 返回了 false（既不是 null 也不是 undefined）
// 所以右侧表达式没有被执行