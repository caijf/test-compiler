var arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
var arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
export {};
