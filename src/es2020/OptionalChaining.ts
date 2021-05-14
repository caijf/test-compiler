const adventurer: Record<string, any> = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined


let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // x 将不会被递增，依旧输出 0


let customer: Record<string, any> = {
  name: "Carl",
  details: { age: 82 }
};
let customerCity = customer?.city ?? "暗之城";
console.log(customerCity); // “暗之城”

export { }