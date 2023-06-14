var promise1 = Promise.resolve(3);
var promise2 = new Promise(function (resolve, reject) {
  return setTimeout(reject, 100, 'foo');
});
var promises = [promise1, promise2];
Promise.allSettled(promises).then(function (results) {
  return results.forEach(function (result) {
    return console.log(result.status);
  });
});

// expected output:
// "fulfilled"
// "rejected"

export {};