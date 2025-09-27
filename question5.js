function toUpperCasePromise(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === "string") {
      resolve(str.toUpperCase());
    } else {
      reject("Input must be a string");
    }
  });
}

// Example usage:
toUpperCasePromise("hello world")
  .then((result) => console.log("Uppercase:", result))
  .catch((err) => console.error("Error:", err));