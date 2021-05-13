"use strict";
var _a, _b, _c;
var adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};
var dogName = (_a = adventurer.dog) === null || _a === void 0 ? void 0 : _a.name;
console.log(dogName);
// expected output: undefined
console.log((_b = adventurer.someNonExistentMethod) === null || _b === void 0 ? void 0 : _b.call(adventurer));
// expected output: undefined
var potentiallyNullObj = null;
var x = 0;
var prop = potentiallyNullObj === null || potentiallyNullObj === void 0 ? void 0 : potentiallyNullObj[x++];
console.log(x); // x 将不会被递增，依旧输出 0
var customer = {
    name: "Carl",
    details: { age: 82 }
};
var customerCity = (_c = customer === null || customer === void 0 ? void 0 : customer.city) !== null && _c !== void 0 ? _c : "暗之城";
console.log(customerCity); // “暗之城”
