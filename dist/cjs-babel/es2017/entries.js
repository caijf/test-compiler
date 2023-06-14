"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var obj1 = {
  foo: 'bar',
  baz: 42
};
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
var obj2 = {
  0: 'a',
  1: 'b',
  2: 'c'
};
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
var obj3 = {
  100: 'a',
  2: 'b',
  7: 'c'
};
console.log(Object.entries(obj3)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// for (const [key, value] of Object.entries(obj3)) {
//   console.log([key, value]);
// }

// getFoo is property which isn't enumerable
var obj4 = Object.create({}, {
  getFoo: {
    value: function value() {
      return this.foo;
    }
  }
});
obj4.foo = 'bar';
console.log(Object.entries(obj4)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
var obj5 = {
  a: 5,
  b: 7,
  c: 9
};
for (var _i = 0, _Object$entries = Object.entries(obj5); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
    key = _Object$entries$_i[0],
    value = _Object$entries$_i[1];
  console.log("".concat(key, " ").concat(value)); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj5).forEach(function (_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  console.log("".concat(key, " ").concat(value)); // "a 5", "b 7", "c 9"
});