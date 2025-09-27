Promise.resolve(10)
  .then((num) => {
    // Multiply by 2
    return num * 2;
  })
  .then((num) => {
    // Add 5
    return num + 5;
  })
  .then((result) => {
    // Print final result
    console.log("Final Result:", result);
  });
