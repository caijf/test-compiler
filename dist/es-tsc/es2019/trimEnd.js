var greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimEnd());
// expected output: "   Hello world!";
var str = "   foo  ";
// alert(str.length); // 8
str = str.trimRight(); // 或写成str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
export {};
