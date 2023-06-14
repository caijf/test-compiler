"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
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
      return (0, _classPrivateFieldGet2["default"])(obj, _x);
    },
    setX: function setX(obj, value) {
      (0, _classPrivateFieldSet2["default"])(obj, _x, value);
    }
  }, /*#__PURE__*/(0, _createClass2["default"])(function A() {
    (0, _classCallCheck2["default"])(this, A);
    _classPrivateFieldInitSpec(this, _x, {
      writable: true,
      value: void 0
    });
  })));
  B = /*#__PURE__*/(0, _createClass2["default"])(function B(a) {
    (0, _classCallCheck2["default"])(this, B);
    var x = friendA.getX(a); // ok
    friendA.setX(a, x); // ok
  });
}