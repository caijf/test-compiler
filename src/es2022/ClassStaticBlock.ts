// @ts-nocheck

// "friend" access (same module)
let A, B;
{
  let friendA;

  A = class A {
    #x;

    static {
      friendA = {
        getX(obj) { return obj.#x },
        setX(obj, value) { obj.#x = value }
      };
    }
  };

  B = class B {
    constructor(a) {
      const x = friendA.getX(a); // ok
      friendA.setX(a, x); // ok
    }
  };
}

export { };