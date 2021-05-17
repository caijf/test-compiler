function resolveAfter2Seconds(x: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// var AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;
// var a = new AsyncFunction('a',
//   'b',
//   'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
// a(10, 20).then((v: any) => {
//   console.log(v); // 4 秒后打印 30
// });
// 上面代码报错：SyntaxError: await is only valid in async function

async function run(a: number, b: number) {
  const afterA = await resolveAfter2Seconds(a);
  const afterB = await resolveAfter2Seconds(b);
  return afterA + afterB;
}

run(10, 20).then((v: number) => {
  console.log(v);
})

export { }