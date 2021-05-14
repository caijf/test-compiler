console.log(/hello.world/.test('hello\nworld'));  // false
console.log(/hello.world/s.test('hello\nworld')); // true
console.log(/hello.world/s.test('helloAworld')); // true

export { }