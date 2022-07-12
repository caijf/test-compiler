import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _classPrivateFieldSet from "@babel/runtime/helpers/classPrivateFieldSet";
import _classPrivateFieldGet from "@babel/runtime/helpers/classPrivateFieldGet";

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

// @ts-nocheck
// "friend" access (same module)
var A, B;
{
  var _x;

  var friendA;
  A = (_x = /*#__PURE__*/new WeakMap(), (friendA = {
    getX: function getX(obj) {
      return _classPrivateFieldGet(obj, _x);
    },
    setX: function setX(obj, value) {
      _classPrivateFieldSet(obj, _x, value);
    }
  }, /*#__PURE__*/_createClass(function A() {
    _classCallCheck(this, A);

    _classPrivateFieldInitSpec(this, _x, {
      writable: true,
      value: void 0
    });
  })));
  B = /*#__PURE__*/_createClass(function B(a) {
    _classCallCheck(this, B);

    var x = friendA.getX(a); // ok

    friendA.setX(a, x); // ok
  });
}
export {};