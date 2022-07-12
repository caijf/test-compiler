try {
  // @ts-ignore
  doSomething();
} catch (otherError: any) {
  throw new Error('Something went wrong', { cause: otherError });
}

export { };
