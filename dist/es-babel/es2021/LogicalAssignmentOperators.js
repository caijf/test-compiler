var _d$duration, _d$speed;

// Logical OR assignment (||=)
// 等效于以下两种写法
// a || (a = b); a 为 falsy 时执行右边
// if(!a) a = b;
var a = {
  duration: 50,
  title: ''
};
a.duration || (a.duration = 10);
console.log(a.duration); // expected output: 50

a.title || (a.title = 'title is empty.');
console.log(a.title); // expected output: "title is empty"
// Logical AND assignment (&&=)
// 等效于以下两种写法
// a && (a = b); a 为 truth 时执行右边
// if(a) a = b

var b = 1;
var c = 0;
b && (b = 2);
console.log(a); // expected output: 2

c && (c = 2);
console.log(c); // expected output: 0
// 逻辑空赋值 (??=)
// 等效于以下两种写法
// a ?? (a = b); a 为 undefined 或 null 时执行右边
// if(a === nudefined || a === null) a = b;
// ?? 运算符只有左边是 undefined 或 null 才返回右边。

var d = {
  duration: 50
};
(_d$duration = d.duration) !== null && _d$duration !== void 0 ? _d$duration : d.duration = 10;
console.log(d.duration); // expected output: 50

(_d$speed = d.speed) !== null && _d$speed !== void 0 ? _d$speed : d.speed = 25;
console.log(d.speed); // expected output: 25

export {};