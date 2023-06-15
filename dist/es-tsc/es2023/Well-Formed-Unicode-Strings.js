"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
// 自定义实现 1
function isWellFormed(str) {
    return !/\p{Surrogate}/u.test(str);
}
// 自定义实现 2
// function isWellFormed(str: string) {
//   for (let i = 0; i < str.length; i++) {
//     const isSurrogate = (str.charCodeAt(i) & 0xF800) === 0xD800;
//     if (!isSurrogate) {
//       continue;
//     }
//     const isLeadingSurrogate = str.charCodeAt(i) < 0xDC00;
//     if (!isLeadingSurrogate) {
//       return false;
//     }
//     const isFollowedByTrailingSurrogate = i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) == 0xDC00;
//     if (!isFollowedByTrailingSurrogate) {
//       return false;
//     }
//     ++i;
//   }
//   return true;
// }
var strings = [
    // 单独的高位代理
    "ab\uD800",
    "ab\uD800c",
    // 单独的低位代理
    "\uDFFFab",
    "c\uDFFFab",
    // 格式正确
    "abc",
    "ab\uD83D\uDE04c"
];
try {
    for (var strings_1 = __values(strings), strings_1_1 = strings_1.next(); !strings_1_1.done; strings_1_1 = strings_1.next()) {
        var str_1 = strings_1_1.value;
        // 自定义实现
        isWellFormed(str_1);
        // 原生自带方法 
        // Node.js 20.0.0 开始支持
        // @ts-ignore
        // str.isWellFormed();
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (strings_1_1 && !strings_1_1.done && (_a = strings_1.return)) _a.call(strings_1);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    // false
    // false
    // false
    // false
    // true
    // true
    for (var strings_2 = __values(strings), strings_2_1 = strings_2.next(); !strings_2_1.done; strings_2_1 = strings_2.next()) {
        var str_2 = strings_2_1.value;
        // 原生自带方法 
        // Node.js 20.0.0 开始支持
        // @ts-ignore
        // str.toWellFormed();
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (strings_2_1 && !strings_2_1.done && (_b = strings_2.return)) _b.call(strings_2);
    }
    finally { if (e_2) throw e_2.error; }
}
// ab�
// ab�c
// �ab
// c�ab
// abc
// ab😄c
