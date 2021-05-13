import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

var array = _toConsumableArray(str.matchAll(regexp));

console.log(array[0]); // expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]); // expected output: Array ["test2", "e", "st2", "2"]
// 仅为了触发 tslib

export {};