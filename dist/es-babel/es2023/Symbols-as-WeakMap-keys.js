var weak = new WeakMap();
var key = Symbol('my ref');
var someObject = {};

// @ts-ignore
weak.set(key, someObject);