"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
function run(a, b) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var afterA, afterB;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, resolveAfter2Seconds(a)];
                case 1:
                    afterA = _a.sent();
                    return [4 /*yield*/, resolveAfter2Seconds(b)];
                case 2:
                    afterB = _a.sent();
                    return [2 /*return*/, afterA + afterB];
            }
        });
    });
}
run(10, 20).then(function (v) {
    console.log(v);
});
