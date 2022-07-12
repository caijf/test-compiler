"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _a = { a: 10, b: 20, c: 30, d: 40 }, a = _a.a, b = _a.b, rest = tslib_1.__rest(_a, ["a", "b"]);
a; // 10
b; // 20
console.log(rest); // { c: 30, d: 40 }
