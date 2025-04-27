// node v23.11.0 not support `RegExp.escape()`

// RegExp.escape('Buy it. use it. break it. fix it.');
// // "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
// RegExp.escape('foo.bar'); // "\\x66oo\\.bar"
// RegExp.escape('foo-bar'); // "\\x66oo\\x2dbar"
// RegExp.escape('foo\nbar'); // "\\x66oo\\nbar"
// RegExp.escape('foo\uD800bar'); // "\\x66oo\\ud800bar"
// RegExp.escape('foo\u2028bar'); // "\\x66oo\\u2028bar"
