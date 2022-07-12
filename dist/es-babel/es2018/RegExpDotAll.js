console.log(/hello.world/.test('hello\nworld')); // false

console.log(/hello[\s\S]world/.test('hello\nworld')); // true

console.log(/hello[\s\S]world/.test('helloAworld')); // true

export {};