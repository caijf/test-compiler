"use strict";

var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
var result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise { <pending> } }

Atomics.notify(int32, 0);