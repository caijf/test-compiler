if (globalThis === self) {
  // worker.js
  console.log("globalThis === self");
} else if (globalThis === global) {
  // node.js
  console.log("globalThis === global");
} else if (globalThis === global) {
  // browser.js
  console.log("globalThis === window");
}

if (typeof globalThis.setTimeout !== 'function') {
  //  此环境中没有 setTimeout 方法！
  console.log("has setTimeout method");
}