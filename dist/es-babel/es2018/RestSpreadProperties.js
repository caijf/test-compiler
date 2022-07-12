import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _a$b$c$d = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
},
    a = _a$b$c$d.a,
    b = _a$b$c$d.b,
    rest = _objectWithoutProperties(_a$b$c$d, ["a", "b"]);

a; // 10

b; // 20

console.log(rest); // { c: 30, d: 40 }

export {};