// @ts-nocheck
var _A_x, _a;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
// "friend" access (same module)
var A, B;
{
    var friendA_1;
    A = (_a = /** @class */ (function () {
            function A() {
                _A_x.set(this, void 0);
            }
            return A;
        }()),
        _A_x = new WeakMap(),
        (function () {
            friendA_1 = {
                getX: function (obj) { return __classPrivateFieldGet(obj, _A_x, "f"); },
                setX: function (obj, value) { __classPrivateFieldSet(obj, _A_x, value, "f"); }
            };
        })(),
        _a);
    B = /** @class */ (function () {
        function B(a) {
            var x = friendA_1.getX(a); // ok
            friendA_1.setX(a, x); // ok
        }
        return B;
    }());
}
