"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object1 = {
    property1: 42,
    property2: 13
};
var array1 = [];
console.log(Reflect.ownKeys(object1));
// expected output: Array ["property1", "property2"]
console.log(Reflect.ownKeys(array1));
