let count = 1;

const timer = setInterval(async () => {
  if (count >= 3) {
    // import("./matchAll").then(module => {
    //   console.log(module);
    // });

    const module = import("./matchAll")
    console.log(module);

    clearInterval(timer);
  } else {
    count++;
  }
}, 1000);

export { };