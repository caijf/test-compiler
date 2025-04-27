const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9, 16, 25]);

console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
console.log(odds.isDisjointFrom(squares)); // false
console.log(odds.isSubsetOf(squares)); // false
console.log(odds.isSupersetOf(squares)); // false
console.log(odds.symmetricDifference(squares)); // Set(6) { 3, 5, 7, 4, 16, 25 }
console.log(odds.union(squares)); // Set(8) { 1, 3, 5, 7, 9, 4, 16, 25 }
