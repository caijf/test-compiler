const array = [1, 2, 3, 4, 5];

// `Object.groupBy` groups items by arbitrary key.
// In this case, we're grouping by even/odd keys
Object.groupBy(array, (num, index) => {
  return num % 2 === 0 ? 'even' : 'odd';
});
// => { odd: [1, 3, 5], even: [2, 4] }

// 同 ut2.groupBy(array, (num) => (num % 2 ? 'odd' : 'even'));

// `Map.groupBy` returns items in a Map, and is useful for grouping
// using an object key.
const odd = { odd: true };
const even = { even: true };
Map.groupBy(array, (num, index) => {
  return num % 2 === 0 ? even : odd;
});
// => Map { { odd: true }: [1, 3, 5], { even: true }: [2, 4] }

export {};
