"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reGreekSymbol = /\p{Script=Greek}/u;
console.log(reGreekSymbol.test('π')); // true
