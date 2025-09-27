function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42); // number return after 1 second
    }, 1000);
  });
}


async function sing() {
  const num = await getNumber(); // wait for promise to resolve
  console.log("Result:", num);
}

sing();







