"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// create a SharedArrayBuffer with a size in bytes
var buffer = new SharedArrayBuffer(8);
console.log(buffer.byteLength);
// expected output: 8

// create a SharedArrayBuffer with a size in bytes
var buffer2 = new SharedArrayBuffer(16);
var uint8 = new Uint8Array(buffer2);
uint8[0] = 7;

// 7 + 2 = 9
console.log(Atomics.add(uint8, 0, 2));
// expected output: 7

console.log(Atomics.load(uint8, 0));
// expected output: 9