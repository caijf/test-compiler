"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);
var obj = Object.fromEntries(entries);
console.log(obj);
