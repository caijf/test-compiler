"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(/hello.world/.test('hello\nworld')); // false
console.log(/hello.world/s.test('hello\nworld')); // true
console.log(/hello.world/s.test('helloAworld')); // true
