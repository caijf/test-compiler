// @ts-nocheck

class ClassWithPrivateSlot {
  #privateSlot = true;
  static hasPrivateSlot(obj) {
    return #privateSlot in obj;
  }
}

const obj1 = new ClassWithPrivateSlot();
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj1)); // true

const obj2 = {};
console.log(ClassWithPrivateSlot.hasPrivateSlot(obj2)); // false

export { };