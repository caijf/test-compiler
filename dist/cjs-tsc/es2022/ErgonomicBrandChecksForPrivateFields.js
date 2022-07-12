"use strict";
// @ts-nocheck
var _ClassWithPrivateSlot_privateSlot;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ClassWithPrivateSlot = /** @class */ (function () {
    function ClassWithPrivateSlot() {
        _ClassWithPrivateSlot_privateSlot.set(this, true);
    }
    ClassWithPrivateSlot.hasPrivateSlot = function (obj) {
        return tslib_1.__classPrivateFieldIn(_ClassWithPrivateSlot_privateSlot, obj);
    };
    return ClassWithPrivateSlot;
}());
_ClassWithPrivateSlot_privateSlot = new WeakMap();
var obj1 = new ClassWithPrivateSlot();
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj1)); // true
var obj2 = {};
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj2)); // false
