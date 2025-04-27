// 示例：传输一个 ArrayBuffer

// 创建一个 ArrayBuffer 并写入一些字节
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[2] = 4;

// 将缓冲区复制到另一个相同大小的缓冲区
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[2]); // 4

// 将缓冲区复制到一个更小的缓冲区
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[2]); // 4
console.log(view3[7]); // undefined

// 将缓冲区复制到一个更大的缓冲区
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// 已经分离，抛出 TypeError
// buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer

// 示例：传输一个可调整大小的 ArrayBuffer
const buffer5 = new ArrayBuffer(8, { maxByteLength: 16 });
const view5 = new Uint8Array(buffer5);
view5[1] = 2;
view5[7] = 4;

// 将缓冲区复制到一个更小的缓冲区
const buffer6 = buffer5.transfer(4);
console.log(buffer6.byteLength); // 4
console.log(buffer6.maxByteLength); // 16
const view6 = new Uint8Array(buffer6);
console.log(view6[1]); // 2
console.log(view6[7]); // undefined
buffer6.resize(8);
console.log(view6[7]); // 0

// 将缓冲区复制到一个大小在 maxByteLength 内更大的缓冲区
const buffer7 = buffer6.transfer(12);
console.log(buffer7.byteLength); // 12

// 将缓冲区复制到一个大小超过 maxByteLength 的更大的缓冲区
// buffer7.transfer(20); // RangeError: Invalid array buffer length

export {};
