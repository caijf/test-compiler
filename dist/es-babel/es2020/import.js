import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var count = 1;
var timer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
  var module;
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (count >= 3) {
            // import("./matchAll").then(module => {
            //   console.log(module);
            // });
            module = import("./matchAll");
            console.log(module);
            clearInterval(timer);
          } else {
            count++;
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), 1000);
export {};