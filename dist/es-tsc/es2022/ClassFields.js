var _B_hidden, _C_instances, _C_d, _C_s;
import { __classPrivateFieldGet } from "tslib";
// @ts-nocheck
var A = /** @class */ (function () {
    function A() {
        this._hidden = 0;
    }
    A.prototype.m = function () {
        return this._hidden;
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        _B_hidden.set(this, 0);
    }
    B.prototype.m = function () {
        return __classPrivateFieldGet(this, _B_hidden, "f");
    };
    return B;
}());
_B_hidden = new WeakMap();
var C = /** @class */ (function () {
    function C() {
        _C_instances.add(this);
        this.a = 0;
        this.b = 1;
        this.c = 3;
        _C_d.set(this, 4);
    }
    C.prototype.m = function () {
        return this.a + this.b + __classPrivateFieldGet(this, _C_d, "f");
    };
    C.prototype.n = function () {
        return this.a + this.b + __classPrivateFieldGet(this, _C_d, "f");
    };
    C.prototype.t = function () {
        return __classPrivateFieldGet(this, _C_instances, "m", _C_s).call(this);
    };
    return C;
}());
_C_d = new WeakMap(), _C_instances = new WeakSet(), _C_s = function _C_s() {
    return this.a + this.b + __classPrivateFieldGet(this, _C_d, "f");
};
var ColorFinder = /** @class */ (function () {
    function ColorFinder() {
    }
    ColorFinder.colorName = function (name) {
        switch (name) {
            case "red": return __classPrivateFieldGet(ColorFinder, _a, "f", _ColorFinder_red);
            case "blue": return __classPrivateFieldGet(ColorFinder, _a, "f", _ColorFinder_blue);
            case "green": return __classPrivateFieldGet(ColorFinder, _a, "f", _ColorFinder_green);
            default: throw new RangeError("unknown color");
        }
    };
    var _a, _ColorFinder_red, _ColorFinder_green, _ColorFinder_blue;
    _a = ColorFinder;
    _ColorFinder_red = { value: "#ff0000" };
    _ColorFinder_green = { value: "#00ff00" };
    _ColorFinder_blue = { value: "#0000ff" };
    return ColorFinder;
}());
var MyClass = /** @class */ (function () {
    function MyClass() {
        _MyClass_instances.add(this);
        this.instancePublicField = 1;
        _MyClass_instancePrivateField.set(this, 3);
    }
    var _MyClass_instances, _b, _MyClass_instancePrivateField, _MyClass_staticPrivateField, _MyClass_nonStaticPrivateMethod, _MyClass_nonStaticPrivateAccessor_get, _MyClass_nonStaticPrivateAccessor_set, _MyClass_staticPrivateMethod, _MyClass_staticPrivateAccessor_get, _MyClass_staticPrivateAccessor_set;
    _b = MyClass, _MyClass_instancePrivateField = new WeakMap(), _MyClass_instances = new WeakSet(), _MyClass_nonStaticPrivateMethod = function _MyClass_nonStaticPrivateMethod() { }, _MyClass_nonStaticPrivateAccessor_get = function _MyClass_nonStaticPrivateAccessor_get() { }, _MyClass_nonStaticPrivateAccessor_set = function _MyClass_nonStaticPrivateAccessor_set(value) { }, _MyClass_staticPrivateMethod = function _MyClass_staticPrivateMethod() { }, _MyClass_staticPrivateAccessor_get = function _MyClass_staticPrivateAccessor_get() { }, _MyClass_staticPrivateAccessor_set = function _MyClass_staticPrivateAccessor_set(value) { };
    MyClass.staticPublicField = 2;
    _MyClass_staticPrivateField = { value: 4 };
    (function () {
        // 静态初始化代码块
    })();
    return MyClass;
}());
