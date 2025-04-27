function doSomething(action: () => any) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log('完成'));
}

doSomething(() => '同步的结果');

doSomething(() => {
  throw new Error('同步的错误');
});

doSomething(async () => '异步的结果');

doSomething(async () => {
  throw new Error('异步的错误');
});
