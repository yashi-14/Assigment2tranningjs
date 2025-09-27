function checkEligibility(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("ELIGIBLE");
    } else {
      reject("NOT ELIGIBLE");
    }
  });
}

// Example: age = 16 (rejected case)
checkEligibility(16)
  .then((msg) => {
    console.log(msg); // agar eligible hoga to ye chalega
  })
  .catch((err) => {
    console.error("Error:", err); // agar reject hoga to ye chalega
  });