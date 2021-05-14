// @ts-nocheck

/* eslint-disable */
function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}

// latex`\unicode`
// { cooked: undefined, raw: "\unicode" }

// let bad = `bad escape sequence: \unicode`;
// 报错 Uncaught SyntaxError: Invalid Unicode escape sequence

export { }