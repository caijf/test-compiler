var Counter = /** @class */ (function () {
    function Counter(element) {
        // Remember a weak reference to the DOM element
        this.ref = new WeakRef(element);
        this.start();
    }
    Counter.prototype.start = function () {
        var _this = this;
        if (this.timer) {
            return;
        }
        this.count = 0;
        var tick = function () {
            var _a;
            // Get the element from the weak reference, if it still exists
            var element = (_a = _this.ref) === null || _a === void 0 ? void 0 : _a.deref();
            if (element) {
                element.textContent = ++_this.count + '';
            }
            else {
                // The element doesn't exist anymore
                console.log("The element is gone.");
                _this.stop();
                _this.ref = null;
            }
        };
        tick();
        this.timer = setInterval(tick, 1000);
    };
    Counter.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    };
    return Counter;
}());
var counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(function () {
    var _a;
    (_a = document.getElementById("counter")) === null || _a === void 0 ? void 0 : _a.remove();
}, 5000);
export {};
