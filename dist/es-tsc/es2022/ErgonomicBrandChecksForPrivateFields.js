// @ts-nocheck
var _ClassWithPrivateSlot_privateSlot;
import { __classPrivateFieldIn } from "tslib";
var ClassWithPrivateSlot = /** @class */ (function () {
    function ClassWithPrivateSlot() {
        _ClassWithPrivateSlot_privateSlot.set(this, true);
    }
    ClassWithPrivateSlot.hasPrivateSlot = function (obj) {
        return __classPrivateFieldIn(_ClassWithPrivateSlot_privateSlot, obj);
    };
    return ClassWithPrivateSlot;
}());
_ClassWithPrivateSlot_privateSlot = new WeakMap();
var obj1 = new ClassWithPrivateSlot();
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj1)); // true
var obj2 = {};
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj2)); // false
