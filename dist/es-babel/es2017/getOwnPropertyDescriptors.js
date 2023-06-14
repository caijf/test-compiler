var obj1 = {
  a: 1,
  b: 2,
  c: 3
};
var obj2 = {
  name: "cc",
  get age() {
    return 18;
  }
};
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.getOwnPropertyDescriptors(obj2));
export {};