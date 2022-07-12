try {
    // @ts-ignore
    doSomething();
}
catch (otherError) {
    throw new Error('Something went wrong', { cause: otherError });
}
export {};
