var arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]


let arr2 = ["it's Sunny in", "", "California"];

console.log(arr2.map(x => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]

console.log(arr2.flatMap(x => x.split(" ")));
// ["it's","Sunny","in", "", "California"]

export { }