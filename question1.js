const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000); // 2 seconds
});

// Handle the promise
myPromise.then((message) => {
  console.log(message); // Prints after 2 seconds
});