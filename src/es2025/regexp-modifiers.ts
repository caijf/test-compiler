// （?imsx-imsx: subexpression） — 设置或取消设置（使用 -）子表达式的指定 RegExp 标志。
// 注意：某些标志不能在表达式中修改。这些目前包括 g（全局）、y（粘滞）、u（unicode）和 d （hasIndices）。

const re1 = /^[a-z](?-i:[a-z])$/i;
re1.test('ab'); // true
re1.test('Ab'); // true
re1.test('aB'); // false

const re2 = /^(?i:[a-z])[a-z]$/;
re2.test('ab'); // true
re2.test('Ab'); // true
re2.test('aB'); // false
