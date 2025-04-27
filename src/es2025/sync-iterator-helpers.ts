function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}
const isEven = (x: number) => x % 2 === 0;
const isPositive = (x: number) => x > 0;
const isNegative = (x: number) => x < 0;

// drop() 返回一个新的迭代器辅助方法，该迭代器辅助方法会跳过此迭代器的开头的给定数量的元素。
console.log('Iterator.prototype.drop()');
const seq_drop = fibonacci().drop(2);
console.log(seq_drop.next().value); // 2
console.log(seq_drop.next().value); // 3

// every() 方法与 Array.prototype.every() 类似：它测试迭代器的所有生成的元素是否都能通过由提供的函数实现的测试。它返回一个布尔值。
console.log('Iterator.prototype.every()');
console.log(fibonacci().every(isEven)); // false
console.log(fibonacci().take(10).every(isPositive)); // true
// console.log(fibonacci().every(isPositive)); // 永远不会完成

// filter() 方法返回一个新的迭代器辅助方法，该迭代器辅助方法只生成迭代器中能令提供的回调函数返回 true 的元素。
console.log('Iterator.prototype.filter()');
const seq_filter = fibonacci().filter((x) => x % 2 === 0);
console.log(seq_filter.next().value); // 2
console.log(seq_filter.next().value); // 8
console.log(seq_filter.next().value); // 34

// find() 方法与 Array.prototype.find() 类似：它返回迭代器生成的第一个满足提供的测试函数的元素。如果没有值满足测试函数，则返回 undefined。
console.log('Iterator.prototype.find()');
console.log(fibonacci().find(isEven)); // 2
console.log(fibonacci().take(10).find(isNegative)); // undefined
// console.log(fibonacci().find(isNegative)); // 永远不会完成

// flatMap() 方法返回一个新的迭代器辅助方法，该迭代器辅助方法将原始迭代器中的每个元素映射到一个函数中，并生成由映射函数返回的元素（这些元素包含在另一个迭代器或可迭代对象中）。
console.log('Iterator.prototype.flatMap()');
const map1 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);
const map2 = new Map([
  ['d', 4],
  ['e', 5],
  ['f', 6]
]);
const merged = new Map([map1, map2].values().flatMap((x) => x));
console.log(merged.get('a')); // 1
console.log(merged.get('e')); // 5

// forEach() 方法与 Array.prototype.forEach() 类似：它对迭代器生成的每个元素执行一次提供的函数。
console.log('Iterator.prototype.forEach()');
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// map() 方法返回一个新的迭代器辅助方法，该方法生成由映射函数转换后的迭代器的元素。
console.log('Iterator.prototype.map()');
const seq_map = fibonacci().map((x) => x ** 2);
console.log(seq_map.next().value); // 1
console.log(seq_map.next().value); // 1
console.log(seq_map.next().value); // 4

// reduce() 方法类似于 Array.prototype.reduce：它对迭代器生成的每个元素执行用户提供的“reducer”回调函数，并传入前一个元素的计算结果作为参数。对所有元素运行 reducer 回调函数的最终结果为单个值。
console.log('Iterator.prototype.reduce()');
console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b)
); // 143

// some() 方法与 Array.prototype.some() 类似：它测试迭代器中是否至少有一个生成的元素通过提供的函数实现的测试。它返回一个布尔值。
console.log('Iterator.prototype.some()');
console.log(fibonacci().some(isEven)); // true
console.log(fibonacci().take(10).some(isPositive)); // true
// console.log(fibonacci().some(isNegative)); // 永远不会结束

// take() 方法返回一个新的迭代器辅助方法，该迭代器辅助方法生成此迭代器中给定数量的元素，然后终止。
console.log('Iterator.prototype.take()');
const seq_take = fibonacci().take(3);
console.log(seq_take.next().value); // 1
console.log(seq_take.next().value); // 1
console.log(seq_take.next().value); // 2
console.log(seq_take.next().value); // undefined

// toArray() 方法创建一个新的 Array 实例，并将迭代器生成的元素填充到该实例中。
console.log('Iterator.prototype.toArray()');
const array = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();
console.log(array); // [2, 8, 34]

// Iterator.from() 静态方法从迭代器或可迭代对象创建一个新的 Iterator 对象。
console.log('Iterator.from()');
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  }
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
