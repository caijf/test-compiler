"use strict";
// Logical OR assignment (||=)
// 等效于以下两种写法
// a || (a = b); a 为 falsy 时执行右边
// if(!a) a = b;
var _a, _b;
var a = { duration: 50, title: '' };
a.duration || (a.duration = 10);
console.log(a.duration);
// expected output: 50
a.title || (a.title = 'title is empty.');
console.log(a.title);
// expected output: "title is empty"
// Logical AND assignment (&&=)
// 等效于以下两种写法
// a && (a = b); a 为 truth 时执行右边
// if(a) a = b
var b = 1;
var c = 0;
b && (b = 2);
console.log(a);
// expected output: 2
c && (c = 2);
console.log(c);
// expected output: 0
// 逻辑空赋值 (??=)
// 等效于以下两种写法
// a ?? (a = b); a 为 undefined 或 null 时执行右边
// if(a === nudefined || a === null) a = b;
// ?? 运算符只有左边是 undefined 或 null 才返回右边。
var d = { duration: 50 };
(_a = d.duration) !== null && _a !== void 0 ? _a : (d.duration = 10);
console.log(d.duration);
// expected output: 50
(_b = d.speed) !== null && _b !== void 0 ? _b : (d.speed = 25);
console.log(d.speed);
// expected output: 25
