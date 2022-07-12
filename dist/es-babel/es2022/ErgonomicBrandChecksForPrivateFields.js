import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _privateSlot = /*#__PURE__*/new WeakMap();

// @ts-nocheck
var ClassWithPrivateSlot = /*#__PURE__*/function () {
  function ClassWithPrivateSlot() {
    _classCallCheck(this, ClassWithPrivateSlot);

    _classPrivateFieldInitSpec(this, _privateSlot, {
      writable: true,
      value: true
    });
  }

  _createClass(ClassWithPrivateSlot, null, [{
    key: "hasPrivateSlot",
    value: function hasPrivateSlot(obj) {
      return _privateSlot.has(obj);
    }
  }]);

  return ClassWithPrivateSlot;
}();

var obj1 = new ClassWithPrivateSlot();
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj1)); // true

var obj2 = {};
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj2)); // false

export {};