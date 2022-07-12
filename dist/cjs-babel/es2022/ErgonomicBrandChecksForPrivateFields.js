"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _privateSlot = /*#__PURE__*/new WeakMap();

// @ts-nocheck
var ClassWithPrivateSlot = /*#__PURE__*/function () {
  function ClassWithPrivateSlot() {
    (0, _classCallCheck2["default"])(this, ClassWithPrivateSlot);

    _classPrivateFieldInitSpec(this, _privateSlot, {
      writable: true,
      value: true
    });
  }

  (0, _createClass2["default"])(ClassWithPrivateSlot, null, [{
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