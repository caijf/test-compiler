import { __read, __spreadArray } from "tslib";
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';
var array = __spreadArray([], __read(str.matchAll(regexp)), false);
console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[1]);
