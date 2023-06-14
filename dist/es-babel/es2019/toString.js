function sum(a, b) {
  return a + b;
}
console.log(sum.toString());
// expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// expected output: "function abs() { [native code] }"

function /* comment */foo /* another comment */() {}

// Before
console.log(foo.toString()); // function foo(){}

// Now ES2019
console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}

// Arrow Syntax
var bar /* comment */ = /* another comment */function bar /* comment */() {};
console.log(bar.toString()); // () => {}

export {};