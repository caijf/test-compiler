// @ts-nocheck

let lows = Iterator.from([0, 1, 2, 3]);
let highs = Iterator.from([6, 7, 8, 9]);

// let lowsAndHighs = (function* () {
//   yield* lows;
//   yield* highs;
// })();

// Array.from(lowsAndHighs); // [0, 1, 2, 3, 6, 7, 8, 9]

let digits = (function* () {
  yield* lows;
  yield 4;
  yield 5;
  yield* highs;
})();

Array.from(digits); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 连接无限可迭代
function* it1() {
  yield 1;
  yield 2;
}

function* it2() {
  let i = 3;
  while (true) {
    yield i++;
  }
}

function* it3() {
  yield 'done';
}

const it4 = Iterator.concat(it1(), it2(), it3());
for (const value of it4.take(10)) {
  console.log(value); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// "done" is never reached

// 连接不同类型的可迭代对象
const array1 = [1, 2, 3];
const set1 = new Set([4, 5, 6]);
function* gen() {
  yield 7;
  yield 8;
  yield 9;
}

const it5 = Iterator.concat(array1, set1, gen());
console.log([...it5]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 每个可迭代对象的元素也可以是不同类型的，就像数组一样。
const array2 = [1, 'two', 3];
const set2 = new Set([true, {}]);

const it6 = Iterator.concat(array2, set2);
console.log([...it6]); // [1, "two", 3, true, {}]

// 连接不可迭代对象
const nonIterable = {
  next() {
    return { done: true };
  }
};

const it7 = Iterator.concat(nonIterable); // TypeError: object is not iterable

// flatMap
[1, 2, 3]
  .values()
  .flatMap((x) => {
    let itDone = false;
    const it = {
      next() {
        if (itDone) {
          return { value: undefined, done: true };
        }
        itDone = true;
        return { value: x, done: false };
      }
    };
    switch (x) {
      case 1:
        // An iterable that's not an iterator
        return { [Symbol.iterator]: () => it };
      case 2:
        // An iterator that's not an iterable
        return it;
      case 3:
        // An iterable iterator is treated as an iterable
        return {
          ...it,
          [Symbol.iterator]() {
            console.log('Symbol.iterator called');
            return it;
          }
        };
      default:
        return undefined;
    }
  })
  .toArray();
// Logs "Symbol.iterator called"
// Returns [1, 2, 3]

export {};
