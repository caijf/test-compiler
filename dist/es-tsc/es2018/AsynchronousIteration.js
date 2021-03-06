import { __awaiter, __generator } from "tslib";
function resolveAfter2Seconds() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('resolved');
        }, 2000);
    });
}
function asyncCall() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('calling');
                    return [4 /*yield*/, resolveAfter2Seconds()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, asyncCall()];
                case 2:
                    _a.sent();
                    console.log(i);
                    _a.label = 3;
                case 3:
                    i += 1;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
run();
