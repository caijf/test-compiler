// @ts-nocheck
class A {
  _hidden = 0;
  m() {
    return this._hidden;
  }
}

class B {
  #hidden = 0;

  m() {
    return this.#hidden;
  }
}

class C {
  private a = 0;
  public b = 1;
  c = 3;
  #d = 4;

  m() {
    return this.a + this.b + this.#d;
  }
  private n() {
    return this.a + this.b + this.#d;
  }
  #s() {
    return this.a + this.b + this.#d;
  }
  t() {
    return this.#s();
  }
}

class ColorFinder {
  static #red = "#ff0000";
  static #green = "#00ff00";
  static #blue = "#0000ff";

  static colorName(name: string) {
    switch (name) {
      case "red": return ColorFinder.#red;
      case "blue": return ColorFinder.#blue;
      case "green": return ColorFinder.#green;
      default: throw new RangeError("unknown color");
    }
  }

  // Somehow use colorName
}

class MyClass {
  instancePublicField = 1;
  static staticPublicField = 2;

  #instancePrivateField = 3;
  static #staticPrivateField = 4;

  #nonStaticPrivateMethod() { }
  get #nonStaticPrivateAccessor() { }
  set #nonStaticPrivateAccessor(value) { }

  static #staticPrivateMethod() { }
  static get #staticPrivateAccessor() { }
  static set #staticPrivateAccessor(value) { }

  static {
    // 静态初始化代码块
  }
}

export { }