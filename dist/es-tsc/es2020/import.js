import { __awaiter, __generator } from "tslib";
var count = 1;
var timer = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    var module_1;
    return __generator(this, function (_a) {
        if (count >= 3) {
            module_1 = import("./matchAll");
            console.log(module_1);
            clearInterval(timer);
        }
        else {
            count++;
        }
        return [2 /*return*/];
    });
}); }, 1000);
