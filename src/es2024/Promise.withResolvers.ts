// 将流转换为异步可迭代对象
// Promise.withResolvers() 的使用场景是，当你有一个 promise，需要通过无法包装在 promise 执行器内的某个事件监听器来解决或拒绝。以下示例将 Node.js 的可读流转换为异步可迭代对象。这里的每个 promise 代表一个可用的数据批次，每次读取当前批次时，就会为下一个批次创建一个新的 promise。请注意，事件监听器只附加了一次，但实际上每次都调用了不同版本的 resolve 和 reject 函数。

async function* readableToAsyncIterable(stream: any) {
  let { promise, resolve, reject } = Promise.withResolvers<void>();
  stream.on('error', (error: any) => reject(error));
  stream.on('end', () => resolve());
  stream.on('readable', () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers<void>());
  }
}

// 在非 Promise 构造函数上调用 withResolvers()
// Promise.withResolvers() 是一个通用方法。它可以在任何实现了与 Promise() 构造函数相同签名的构造函数上调用。例如，我们可以在一个将 console.log 作为 resolve 和 reject 函数传入给 executor 的构造函数上调用它：

class NotPromise {
  constructor(excutor: any) {
    // “resolve”和“reject”函数和原生的 promise 的行为完全不同
    // 但 Promise.withResolvers() 只是返回它们，就像是原生的 promise 一样
    excutor(
      (value: string) => console.log('以', value, '解决'),
      (reason: string) => console.log('以', reason, '拒绝')
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve('hello');

export {};
