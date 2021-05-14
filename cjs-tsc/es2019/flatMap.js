"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3, 4];
console.log(arr1.map(function (x) { return [x * 2]; }));
// [[2], [4], [6], [8]]
console.log(arr1.flatMap(function (x) { return [x * 2]; }));
// [2, 4, 6, 8]
// only one level is flattened
console.log(arr1.flatMap(function (x) { return [[x * 2]]; }));
// [[2], [4], [6], [8]]
var arr2 = ["it's Sunny in", "", "California"];
console.log(arr2.map(function (x) { return x.split(" "); }));
// [["it's","Sunny","in"],[""],["California"]]
console.log(arr2.flatMap(function (x) { return x.split(" "); }));
