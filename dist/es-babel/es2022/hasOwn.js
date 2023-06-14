var proto = {
  protoProp: 'protoProp'
};
var obj = {
  __proto__: proto,
  objProp: 'objProp'
};
console.log('protoProp' in obj); // true
console.log(Object.hasOwn(obj, 'protoProp')); // false
console.log(Object.hasOwn(proto, 'protoProp')); // true
export {};