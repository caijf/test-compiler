"use strict";
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var obj1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]
// array like object
var obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
// array like object with random key ordering
var obj3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(obj3)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
// for (const [key, value] of Object.entries(obj3)) {
//   console.log([key, value]);
// }
// getFoo is property which isn't enumerable
var obj4 = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
obj4.foo = 'bar';
console.log(Object.entries(obj4)); // [ ['foo', 'bar'] ]
// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
// iterate through key-value gracefully
var obj5 = { a: 5, b: 7, c: 9 };
try {
    for (var _b = tslib_1.__values(Object.entries(obj5)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = tslib_1.__read(_c.value, 2), key = _d[0], value = _d[1];
        console.log("".concat(key, " ").concat(value)); // "a 5", "b 7", "c 9"
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
// Or, using array extras
Object.entries(obj5).forEach(function (_a) {
    var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
    console.log("".concat(key, " ").concat(value)); // "a 5", "b 7", "c 9"
});
