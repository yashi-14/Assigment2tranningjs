// Async sinc function returning a promise
async function sinc(x, weight = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (x === 0) {
        resolve(weight * 1); // sinc(0) = 1
      } else {
        resolve(weight * Math.sin(x) / x);
      }
    }, 500); // simulate async delay
  });
}

// Async function to call it
async function runSinc() {
  const normalValue = 10;
  const weight = 2;
  const result = await sinc(normalValue, weight);
  console.log("Sinc output:", result);
}

// Call the async function
runSinc();
