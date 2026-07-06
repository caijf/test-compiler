// 基本用法
async function* idMarker() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
}

let idMarkers: number[];
Array.fromAsync(idMarker()).then((res) => {
  idMarkers = res;
  console.log(idMarkers);
});

// 因为 cjs 不支持 async/await，所以这里使用 then() 方法来处理异步操作
// const idMarkers = await Array.fromAsync(idMarker());
// console.log(idMarkers);

// 映射函数
// 每当输入是一个产生 Promise 项的异步可迭代对象时， Array.fromAsync(input) 不会解析这些 promise 项，但 Array.fromAsync(input, x => x) 会解析它们，因为 x => x 映射函数的结果会被等待。

// function createAsyncIter() {
//   let i = 0;
//   return {
//     [Symbol.asyncIterator]() {
//       return {
//         async next() {
//           if (i > 2) return { done: true };
//           i++;
//           return { value: Promise.resolve(i), done: false };
//         }
//       };
//     }
//   };
// }

// // This prints `[Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]`:
// console.log(await Array.fromAsync(createAsyncIter()));

// // This prints `[1, 2, 3]`:
// console.log(await Array.fromAsync(createAsyncIter(), (x) => x));

// 与 Promise.all() 的比较
// Array.fromAsync() 会依次等待对象中产生的每个值兑现。Promise.all() 会并行等待所有值兑现。
function* makeAsyncIterable() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time('Array.fromAsync() time');
  await Array.fromAsync(makeAsyncIterable());
  console.timeEnd('Array.fromAsync() time');
  // Array.fromAsync() time: 503.610ms

  console.time('Promise.all() time');
  await Promise.all(makeAsyncIterable());
  console.timeEnd('Promise.all() time');
  // Promise.all() time: 101.728ms
})();

export {};
