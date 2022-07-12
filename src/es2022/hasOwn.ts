import assert from 'assert';

const proto = {
  protoProp: 'protoProp',
};
const obj = {
  __proto__: proto,
  objProp: 'objProp',
}

console.log('protoProp' in obj); // true
console.log(Object.hasOwn(obj, 'protoProp')); // false
console.log(Object.hasOwn(proto, 'protoProp')); // true
