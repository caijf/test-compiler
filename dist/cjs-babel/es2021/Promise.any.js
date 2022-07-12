"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pErr = new Promise(function (resolve, reject) {
  reject("总是失败");
});
var pSlow = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "最终完成");
});
var pFast = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "很快完成");
});
Promise.any([pErr, pSlow, pFast]).then(function (value) {
  console.log(value); // pFast fulfils first
}); // 期望输出: "很快完成"

Promise.any([pErr])["catch"](function (err) {
  console.log(err);
}); // 期望输出: "AggregateError: No Promise in Promise.any was resolved"