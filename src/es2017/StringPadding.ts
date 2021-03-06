const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

const str2 = 'Breaded Mushrooms';

console.log(str2.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str3 = '200';

console.log(str3.padEnd(5));
// expected output: "200  "

export { }