/* eslint-disable */
try {
    throw "myException";
}
catch (error) {
    console.error(error);
}
try {
    throw "myException";
}
catch (_a) {
    console.error('error');
    // expected output: error
}
export {};
