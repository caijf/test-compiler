// @ts-nocheck
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n

console.log(typeof 1n === 'bigint'); // true
console.log(typeof BigInt('1') === 'bigint'); // true

console.log(typeof Object(1n) === 'object'); // true

// 当使用 BigInt 时，带小数的运算会被取整。
const expected = 4n / 2n;
// ↪ 2n

const rounded = 5n / 2n;
// ↪ 2n, not 2.5n

// BigInt 和 Number 不是严格相等的，但是宽松相等的。
0n === 0
// ↪ false

0n == 0
// ↪ true

1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true


