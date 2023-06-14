var obj1 = {
  foo: 'bar',
  baz: 42
};
console.log(Object.values(obj1)); // ['bar', 42]

// array like object
var obj2 = {
  0: 'a',
  1: 'b',
  2: 'c'
};
console.log(Object.values(obj2)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var obj3 = {
  100: 'a',
  2: 'b',
  7: 'c'
};
console.log(Object.values(obj3)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var obj4 = Object.create({}, {
  getFoo: {
    value: function value() {
      return this.foo;
    }
  }
});
obj4.foo = 'bar';
console.log(Object.values(obj4)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']

export {};