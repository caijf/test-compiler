"use strict";

var arr = ['a', 'b', 'c'];
arr.at(0); // a
arr.at(-1); // c

var str = 'abc';
str.at(0); // a
str.at(-1); // c

var int8 = new Int8Array([0, 10, -10, 20, -30, 40, -50]);
var index = 1;
console.log("Using an index of ".concat(index, " the item returned is ").concat(int8.at(index)));
// expected output: "Using an index of 1 the item returned is 10"

index = -2;
console.log("Using an index of ".concat(index, " the item returned is ").concat(int8.at(index)));
// expected output: "Using an index of -2 the item returned is 40"