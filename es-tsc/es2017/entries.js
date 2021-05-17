var e_1, _a, e_2, _b;
import { __read, __values } from "tslib";
var obj1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]
// array like object
var obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
// array like object with random key ordering
var obj3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(obj3)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
try {
    for (var _c = __values(Object.entries(obj3)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
        console.log([key, value]);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
// getFoo is property which isn't enumerable
var obj4 = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
obj4.foo = 'bar';
console.log(Object.entries(obj4)); // [ ['foo', 'bar'] ]
// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
// iterate through key-value gracefully
var obj5 = { a: 5, b: 7, c: 9 };
try {
    for (var _f = __values(Object.entries(obj5)), _g = _f.next(); !_g.done; _g = _f.next()) {
        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
        console.log(key + " " + value); // "a 5", "b 7", "c 9"
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
    }
    finally { if (e_2) throw e_2.error; }
}
// Or, using array extras
Object.entries(obj5).forEach(function (_a) {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    console.log(key + " " + value); // "a 5", "b 7", "c 9"
});
