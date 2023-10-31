const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "binary");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);
writeFileSync(
  "./content/writsync.txt",
  `This is the result: ${first} ${second} `,
  { flag: "a" }
);
