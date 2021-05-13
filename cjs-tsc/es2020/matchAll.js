"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';
var array = tslib_1.__spreadArray([], tslib_1.__read(str.matchAll(regexp)));
console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[1]);
