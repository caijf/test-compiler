// @ts-nocheck

// Currently
// let prefs = getUserPrefsMap();
// if (!prefs.has('useDarkmode')) {
//   prefs.set('useDarkmode', true); // default to true
// }

// Using getOrInsert
let prefs = getUserPrefsMap();
prefs.getOrInsert('useDarkmode', true); // default to true

// 应用默认值
const options = readConfig();
options.getOrInsert('theme', 'light');
options.getOrInsert('fontSize', 14);

// Later in your code, you can safely assume these options exist
document.body.dataset.theme = options.get('theme');

// 避免不必要的默认计算
// 使用 Map.prototype.getOrInsert() 时，每次都会计算默认值，即使不需要也是如此。而使用 getOrInsertComputed() 时，默认值仅在必要时计算。
const map = new Map([['bar', 'foo']]);
const defaultCreator = (key) => {
  console.log(`Creating default for ${key}`);
  return `default for ${key}`;
};

map.getOrInsert('bar', defaultCreator('bar')); // Logs "Creating default for bar"
map.getOrInsertComputed('bar', defaultCreator); // No log

export {};
