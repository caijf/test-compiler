const obj1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const obj3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(obj3)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// for (const [key, value] of Object.entries(obj3)) {
//   console.log([key, value]);
// }

// getFoo is property which isn't enumerable
const obj4 = Object.create({}, { getFoo: { value() { return this.foo; } } });
obj4.foo = 'bar';
console.log(Object.entries(obj4)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj5 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj5)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj5).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

export { }