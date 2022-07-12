"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _a$b$c$d = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
},
    a = _a$b$c$d.a,
    b = _a$b$c$d.b,
    rest = (0, _objectWithoutProperties2["default"])(_a$b$c$d, ["a", "b"]);
a; // 10

b; // 20

console.log(rest); // { c: 30, d: 40 }