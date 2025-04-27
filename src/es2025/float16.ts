// node v23.11.0 not support Float16Array

// // From a length
// const float16 = new Float16Array(2);
// float16[0] = 42;
// console.log(float16[0]); // 42
// console.log(float16.length); // 2
// console.log(float16.BYTES_PER_ELEMENT); // 2

// // From an array
// const x = new Float16Array([21, 31]);
// console.log(x[1]); // 31

// // From another TypedArray
// const y = new Float16Array(x);
// console.log(y[0]); // 21

// // From an ArrayBuffer
// const buffer = new ArrayBuffer(32);
// const z = new Float16Array(buffer, 4, 4);
// console.log(z.byteOffset); // 4

// // From an iterable
// const iterable = (function* () {
//   yield* [1, 2, 3];
// })();
// const float16FromIterable = new Float16Array(iterable);
// console.log(float16FromIterable);
// // Float16Array [1, 2, 3]
