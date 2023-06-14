"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reLookahead = /\D(?=\d+)/,
  match = reLookahead.exec('$123.89');
console.log(match === null || match === void 0 ? void 0 : match[0]); // $

var reLookbehind = /(?<=\D)\d+/,
  match2 = reLookbehind.exec('$123.89');
console.log(match2 === null || match2 === void 0 ? void 0 : match2[0]); // 123.89

var reLookbehindNeg = /(?<!\D)\d+/,
  match3 = reLookbehindNeg.exec('$123.89');
console.log(match3 === null || match3 === void 0 ? void 0 : match3[0]); // null