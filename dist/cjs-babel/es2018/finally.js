"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomNumber = Math.random();
var prom = new Promise(function (resolve, reject) {
  if (randomNumber > 0.5) {
    console.log('resolve before');
    resolve();
    console.log('resolve after');
  } else {
    console.log('reject before');
    reject();
    console.log('reject after');
  }
})["finally"](function () {
  console.log('finally inner');
});
prom.then(function () {
  console.log('then');
})["catch"](function () {
  console.log('catch');
})["finally"](function () {
  console.log('finally outer');
}); // expected output: 
// resolve before
// resolve after
// finally inner
// then/catch
// finally outer