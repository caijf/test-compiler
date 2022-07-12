console.log(Symbol('desc').description);
// expected output: "desc"
console.log(Symbol.iterator.description);
// expected output: "Symbol.iterator"
console.log(Symbol.for('foo').description);
// expected output: "foo"
console.log("".concat(Symbol('foo').description, "bar"));
// expected output: "foobar"
console.log(Symbol('desc').toString()); // "Symbol(desc)"
console.log(Symbol('desc').description); // "desc"
console.log(Symbol('').description); // ""
console.log(Symbol().description); // undefined
// well-known symbols
console.log(Symbol.iterator.toString()); // "Symbol(Symbol.iterator)"
console.log(Symbol.iterator.description); // "Symbol.iterator"
// global symbols
console.log(Symbol.for('foo').toString()); // "Symbol(foo)"
console.log(Symbol.for('foo').description); // "foo"
export {};
