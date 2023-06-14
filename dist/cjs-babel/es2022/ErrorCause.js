"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
try {
  // @ts-ignore
  doSomething();
} catch (otherError) {
  throw new Error('Something went wrong', {
    cause: otherError
  });
}