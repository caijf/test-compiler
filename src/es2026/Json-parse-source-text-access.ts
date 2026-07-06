// @ts-nocheck

const digitsToBigInt = (key, val, { source }) => (/^[0-9]+$/.test(source) ? BigInt(source) : val);

const bigIntToRawJSON = (key, val) => (typeof val === 'bigint' ? JSON.rawJSON(String(val)) : val);

const tooBigForNumber = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
JSON.parse(String(tooBigForNumber), digitsToBigInt) === tooBigForNumber;
// → true

const wayTooBig = BigInt('1' + '0'.repeat(1000));
JSON.parse(String(wayTooBig), digitsToBigInt) === wayTooBig;
// → true

const embedded = JSON.stringify({ tooBigForNumber }, bigIntToRawJSON);
embedded === '{"tooBigForNumber":9007199254740993}';
// → true
