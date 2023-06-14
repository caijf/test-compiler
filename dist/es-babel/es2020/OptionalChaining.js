var _adventurer$dog, _adventurer$someNonEx, _customer$city;
var adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
var dogName = (_adventurer$dog = adventurer.dog) === null || _adventurer$dog === void 0 ? void 0 : _adventurer$dog.name;
console.log(dogName);
// expected output: undefined

console.log((_adventurer$someNonEx = adventurer.someNonExistentMethod) === null || _adventurer$someNonEx === void 0 ? void 0 : _adventurer$someNonEx.call(adventurer));
// expected output: undefined

var potentiallyNullObj = null;
var x = 0;
var prop = potentiallyNullObj === null || potentiallyNullObj === void 0 ? void 0 : potentiallyNullObj[x++];
console.log(x); // x 将不会被递增，依旧输出 0

var customer = {
  name: "Carl",
  details: {
    age: 82
  }
};
var customerCity = (_customer$city = customer === null || customer === void 0 ? void 0 : customer.city) !== null && _customer$city !== void 0 ? _customer$city : "暗之城";
console.log(customerCity); // “暗之城”

export {};