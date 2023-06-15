const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

array.findLast(item => item.value % 2 === 1); // { value: 3 }
array.findLastIndex(item => item.value % 2 === 1); // 2

array.findLast(item => item.value === 42); // undefined
array.findLastIndex(item => item.value === 42); // -1