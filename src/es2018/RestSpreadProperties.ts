let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
a; // 10
b; // 20
console.log(rest); // { c: 30, d: 40 }

export { }