function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

async function run() {
  for (let i = 0; i < 2; i += 1) {
    await asyncCall();
    console.log(i);
  }
}

run();

export { }
