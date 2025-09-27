function checkEligibility(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("ELIGIBLE");
    } else {
      reject("NOT ELIGIBLE");
    }
  });
}

// Example usage:
checkEligibility(20)
  .then((msg) => console.log(msg))   
  .catch((err) => console.log(err));