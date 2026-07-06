// @ts-nocheck

console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
console.log(Math.sumPrecise([])); // -0

export {};
