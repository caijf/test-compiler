"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function resolveAfter2Seconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('resolved');
    }, 2000);
  });
}
function asyncCall() {
  return _asyncCall.apply(this, arguments);
}
function _asyncCall() {
  _asyncCall = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('calling');
          _context.next = 3;
          return resolveAfter2Seconds();
        case 3:
          result = _context.sent;
          console.log(result);
          // expected output: "resolved"
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _asyncCall.apply(this, arguments);
}
function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var i;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          i = 0;
        case 1:
          if (!(i < 2)) {
            _context2.next = 8;
            break;
          }
          _context2.next = 4;
          return asyncCall();
        case 4:
          console.log(i);
        case 5:
          i += 1;
          _context2.next = 1;
          break;
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _run.apply(this, arguments);
}
run();