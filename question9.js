// First promise: Step 1
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000); // 1 second delay
  });
}

// Second promise: Step 2
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 completed");
    }, 1000); // 1 second delay
  });
}

// Async function to run sequentially
async function runSteps() {
  const result1 = await step1(); // wait for step1
  console.log(result1);

  const result2 = await step2(); // then wait for step2
  console.log(result2);
}

// Call the async function
runSteps();