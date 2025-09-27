function failPromise() {
  return new Promise((_, reject) => {
    reject("Something went wrong!");
  });
}

// Async function with try-catch
async function runTask() {
  try {
    const result = await failPromise(); // yeh reject karega
    console.log("Result:", result);
  } catch (error) {
    console.error("Caught Error:", error); // yeh catch hoga
  }
}

// Call the async function
runTask();