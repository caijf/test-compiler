import _classPrivateFieldGet from "@babel/runtime/helpers/classPrivateFieldGet";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

// @ts-nocheck
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);

    _defineProperty(this, "_hidden", 0);
  }

  _createClass(A, [{
    key: "m",
    value: function m() {
      return this._hidden;
    }
  }]);

  return A;
}();

var _hidden = /*#__PURE__*/new WeakMap();

var B = /*#__PURE__*/function () {
  function B() {
    _classCallCheck(this, B);

    _classPrivateFieldInitSpec(this, _hidden, {
      writable: true,
      value: 0
    });
  }

  _createClass(B, [{
    key: "m",
    value: function m() {
      return _classPrivateFieldGet(this, _hidden);
    }
  }]);

  return B;
}();

var _d = /*#__PURE__*/new WeakMap();

var _s = /*#__PURE__*/new WeakSet();

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);

    _classPrivateMethodInitSpec(this, _s);

    _defineProperty(this, "a", 0);

    _defineProperty(this, "b", 1);

    _defineProperty(this, "c", 3);

    _classPrivateFieldInitSpec(this, _d, {
      writable: true,
      value: 4
    });
  }

  _createClass(C, [{
    key: "m",
    value: function m() {
      return this.a + this.b + _classPrivateFieldGet(this, _d);
    }
  }, {
    key: "n",
    value: function n() {
      return this.a + this.b + _classPrivateFieldGet(this, _d);
    }
  }, {
    key: "t",
    value: function t() {
      return _classPrivateMethodGet(this, _s, _s2).call(this);
    }
  }]);

  return C;
}();

function _s2() {
  return this.a + this.b + _classPrivateFieldGet(this, _d);
}

var ColorFinder = /*#__PURE__*/function () {
  function ColorFinder() {
    _classCallCheck(this, ColorFinder);
  }

  _createClass(ColorFinder, null, [{
    key: "colorName",
    value: function colorName(name) {
      switch (name) {
        case "red":
          return _classStaticPrivateFieldSpecGet(ColorFinder, ColorFinder, _red);

        case "blue":
          return _classStaticPrivateFieldSpecGet(ColorFinder, ColorFinder, _blue);

        case "green":
          return _classStaticPrivateFieldSpecGet(ColorFinder, ColorFinder, _green);

        default:
          throw new RangeError("unknown color");
      }
    } // Somehow use colorName

  }]);

  return ColorFinder;
}();

var _red = {
  writable: true,
  value: "#ff0000"
};
var _green = {
  writable: true,
  value: "#00ff00"
};
var _blue = {
  writable: true,
  value: "#0000ff"
};

var _instancePrivateField = /*#__PURE__*/new WeakMap();

var _nonStaticPrivateMethod = /*#__PURE__*/new WeakSet();

var _nonStaticPrivateAccessor = /*#__PURE__*/new WeakMap();

var MyClass = /*#__PURE__*/_createClass(function MyClass() {
  _classCallCheck(this, MyClass);

  _classPrivateFieldInitSpec(this, _nonStaticPrivateAccessor, {
    get: _get_nonStaticPrivateAccessor,
    set: _set_nonStaticPrivateAccessor
  });

  _classPrivateMethodInitSpec(this, _nonStaticPrivateMethod);

  _defineProperty(this, "instancePublicField", 1);

  _classPrivateFieldInitSpec(this, _instancePrivateField, {
    writable: true,
    value: 3
  });
});

function _nonStaticPrivateMethod2() {}

function _get_nonStaticPrivateAccessor() {}

function _set_nonStaticPrivateAccessor(value) {}

function _staticPrivateMethod() {}

function _get_staticPrivateAccessor() {}

function _set_staticPrivateAccessor(value) {}

var _staticPrivateAccessor = {
  get: _get_staticPrivateAccessor,
  set: _set_staticPrivateAccessor
};

_defineProperty(MyClass, "staticPublicField", 2);

var _staticPrivateField = {
  writable: true,
  value: 4
};

(function () {})();

export {};