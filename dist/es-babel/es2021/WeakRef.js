import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
var Counter = /*#__PURE__*/function () {
  function Counter(element) {
    _classCallCheck(this, Counter);
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }
  _createClass(Counter, [{
    key: "start",
    value: function start() {
      var _this = this;
      if (this.timer) {
        return;
      }
      this.count = 0;
      var tick = function tick() {
        var _this$ref;
        // Get the element from the weak reference, if it still exists
        var element = (_this$ref = _this.ref) === null || _this$ref === void 0 ? void 0 : _this$ref.deref();
        if (element) {
          element.textContent = ++_this.count + '';
        } else {
          // The element doesn't exist anymore
          console.log("The element is gone.");
          _this.stop();
          _this.ref = null;
        }
      };
      tick();
      this.timer = setInterval(tick, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = 0;
      }
    }
  }]);
  return Counter;
}(); // const counter = new Counter(document.getElementById("counter"));
// counter.start();
// setTimeout(() => {
//   document.getElementById("counter")?.remove();
// }, 5000);
export {};