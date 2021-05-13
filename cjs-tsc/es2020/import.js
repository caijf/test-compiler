"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var count = 1;
var timer = setInterval(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var module_1;
    return tslib_1.__generator(this, function (_a) {
        if (count >= 3) {
            module_1 = Promise.resolve().then(function () { return tslib_1.__importStar(require("./matchAll")); });
            console.log(module_1);
            clearInterval(timer);
        }
        else {
            count++;
        }
        return [2 /*return*/];
    });
}); }, 1000);
