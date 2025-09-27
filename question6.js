function getMessage() {
  return new Promise((resolve) => {
    resolve("hello async");
  });
}


async function printMessage() {
  const msg = await getMessage(); // wait for promise to resolve
  console.log(msg);
}


printMessage();