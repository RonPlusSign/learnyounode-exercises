const fs = require("fs");

console.log(
  fs
    .readFileSync(process.argv[2]) // Read the file synchronously
    .toString() // Convert the Buffer object to String
    .split("\n").length - 1 // Divide it to count how many paragraphs there are, then return the number of spaces between them (= number of paragraphs -1)
);
