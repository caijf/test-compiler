var greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimStart());
// expected output: "Hello world!   ";
var str = "   foo  ";
console.log(str.length); // 8
str = str.trimStart(); // 等同于 str = str.trimLeft();
console.log(str.length); // 5
console.log(str); // "foo  "
export {};
