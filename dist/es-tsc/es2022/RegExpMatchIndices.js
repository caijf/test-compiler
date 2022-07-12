import { __read, __spreadArray } from "tslib";
// @ts-nocheck
var re1 = /a+(?<Z>z)?/d;
// indices are relative to start of the input string:
var s1 = "xaaaz";
var m1 = re1.exec(s1);
m1.indices[0][0] === 1;
m1.indices[0][1] === 5;
s1.slice.apply(s1, __spreadArray([], __read(m1.indices[0]), false)) === "aaaz";
m1.indices[1][0] === 4;
m1.indices[1][1] === 5;
s1.slice.apply(s1, __spreadArray([], __read(m1.indices[1]), false)) === "z";
m1.indices.groups["Z"][0] === 4;
m1.indices.groups["Z"][1] === 5;
s1.slice.apply(s1, __spreadArray([], __read(m1.indices.groups["Z"]), false)) === "z";
// capture groups that are not matched return `undefined`:
var m2 = re1.exec("xaaay");
m2.indices[1] === undefined;
m2.indices.groups["Z"] === undefined;
