// @ts-nocheck

// all following calls return true
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // The operation threw a TypeError, so this returns true
}

// all following calls return false
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError('Error');
Error.isError(true);
Error.isError(false);
// This is not an error, because the object does not have the private field
// initialized by the Error constructor
Error.isError({ __proto__: Error.prototype });

// instanceof vs. Error.isError()
// 检查 Error 实例时，建议使用 Error.isError() 而不是 instanceof ，因为它可以跨领域工作。
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// Correctly checking for Error
Error.isError(error); // true
// The prototype of error is xError.prototype, which is a
// different object from Error.prototype
error instanceof Error; // false

// 规范化捕获的错误
try {
  throw 'Oops; this is not an Error object';
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}

export {};
