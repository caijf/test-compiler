const randomNumber = Math.random();

const prom = new Promise<void>((resolve, reject) => {
  if (randomNumber > 0.5) {
    console.log('resolve before');
    resolve();
    console.log('resolve after');
  } else {
    console.log('reject before');
    reject();
    console.log('reject after');
  }
}).finally(() => {
  console.log('finally inner');
});

prom.then(() => {
  console.log('then');
}).catch(() => {
  console.log('catch');
}).finally(() => {
  console.log('finally outer');
});

// expected output: 
// resolve before
// resolve after
// finally inner
// then/catch
// finally outer

export { }