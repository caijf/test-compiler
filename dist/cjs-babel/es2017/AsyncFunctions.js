"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function resolveAfter2Seconds(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x);
    }, 2000);
  });
}

// var AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;
// var a = new AsyncFunction('a',
//   'b',
//   'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
// a(10, 20).then((v: any) => {
//   console.log(v); // 4 秒后打印 30
// });
// 上面代码报错：SyntaxError: await is only valid in async function
function run(_x, _x2) {
  return _run.apply(this, arguments);
}
function _run() {
  _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(a, b) {
    var afterA, afterB;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return resolveAfter2Seconds(a);
        case 2:
          afterA = _context.sent;
          _context.next = 5;
          return resolveAfter2Seconds(b);
        case 5:
          afterB = _context.sent;
          return _context.abrupt("return", afterA + afterB);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}
run(10, 20).then(function (v) {
  console.log(v);
});