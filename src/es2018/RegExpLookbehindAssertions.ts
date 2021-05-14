const
  reLookahead = /\D(?=\d+)/,
  match = reLookahead.exec('$123.89');

console.log(match?.[0]); // $


const
  reLookbehind = /(?<=\D)\d+/,
  match2 = reLookbehind.exec('$123.89');

console.log(match2?.[0]); // 123.89

const
  reLookbehindNeg = /(?<!\D)\d+/,
  match3 = reLookbehindNeg.exec('$123.89');

console.log(match3?.[0]); // null

export { }