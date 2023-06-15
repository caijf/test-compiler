"use strict";
var array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
array.findLast(function (item) { return item.value % 2 === 1; }); // { value: 3 }
array.findLastIndex(function (item) { return item.value % 2 === 1; }); // 2
array.findLast(function (item) { return item.value === 42; }); // undefined
array.findLastIndex(function (item) { return item.value === 42; }); // -1
