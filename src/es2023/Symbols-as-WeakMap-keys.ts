const weak = new WeakMap();

const key = Symbol('my ref');

const someObject = {};

// @ts-ignore
weak.set(key, someObject);
