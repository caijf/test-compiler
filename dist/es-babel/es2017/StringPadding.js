var str1 = '5';
console.log(str1.padStart(2, '0')); // expected output: "05"

var fullNumber = '2034399002125581';
var last4Digits = fullNumber.slice(-4);
var maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber); // expected output: "************5581"

var str2 = 'Breaded Mushrooms';
console.log(str2.padEnd(25, '.')); // expected output: "Breaded Mushrooms........"

var str3 = '200';
console.log(str3.padEnd(5)); // expected output: "200  "

export {};