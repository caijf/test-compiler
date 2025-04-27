let rab = new ArrayBuffer(1024, { maxByteLength: 1024 * 2 });

// 0 offset, auto length
let U32a = new Uint32Array(rab);
console.log(U32a.length === 256); // (1024 - 0 ) / 4
rab.resize(1024 * 2);
console.log(U32a.length === 512); // (1024 - 0 ) / 4

// Non-0 offset, auto length
let U32b = new Uint32Array(rab, 256);
console.log(U32b.length === 448); // (2048 - 256) / 4
rab.resize(1024);
console.log(U32b.length === 192); // (1024 - 256) / 4

// Non-0 offset, fixed length
let U32c = new Uint32Array(rab, 128, 4);
console.log(U32c.length === 4);
rab.resize(1024 * 2);
console.log(U32c.length === 4);

// 如果调整大小使 TA 的任何可访问部分脱离 OOB，则 TA 的行为就像已分离一样。
rab.resize(256);
try {
  console.log(U32b[0]);
} catch {}
console.log(U32b.length === 0);
rab.resize(132);
// can address rab[128] to rab[144]. Being partially OOB still makes
// it act like it's been detached.
try {
  console.log(U32c[0]);
} catch {}
console.log(U32c.length === 0);
// Resizing the underlying buffer can bring a TA back into bounds.
// New memory is zeroed.
rab.resize(1024);
console.log(U32b[0] === 0);
console.log(U32b.length === 192);

export {};
