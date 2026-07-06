// @ts-nocheck

let arr = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
console.log(arr.toBase64());
// 'SGVsbG8gV29ybGQ='
console.log(arr.toHex());
// '48656c6c6f20576f726c64'

let string = 'SGVsbG8gV29ybGQ=';
console.log(Uint8Array.fromBase64(string));
// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])

string = '48656c6c6f20576f726c64';
console.log(Uint8Array.fromHex(string));
// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])

export {};
