// 自定义实现 1
function isWellFormed(str: string) {
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

const strings = [
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

for (const str of strings) {
  // 自定义实现
  isWellFormed(str);

  // 原生自带方法 
  // Node.js 20.0.0 开始支持
  // @ts-ignore
  // str.isWellFormed();
}
// false
// false
// false
// false
// true
// true

for (const str of strings) {
  // 原生自带方法 
  // Node.js 20.0.0 开始支持
  // @ts-ignore
  // str.toWellFormed();
}
// ab�
// ab�c
// �ab
// c�ab
// abc
// ab😄c