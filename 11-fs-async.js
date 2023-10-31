const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   ^ This gives buffer
  console.log(result);
});

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  //   ^ This gives txt file
  console.log(result);
});

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/write-async.txt",
      `This is the result: ${first} ${second} of async`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
