"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
// global flag required when calling replaceAll with regex
var regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
