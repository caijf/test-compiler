// 以前如果输入 Unicode 格式但是超出范围的字符，在原先JSON.stringify返回格式错误的Unicode字符串：
// JSON.stringify('\uD800');
// → '"�"'
// 现在为其输出转义序列，使其成为有效Unicode（并以UTF-8表示）：
console.log(JSON.stringify("\uD800")); // '"\\ud800"'

export {};