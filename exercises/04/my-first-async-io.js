const fs = require("fs");

fs.readFile(process.argv[1], (err, data) => {
  // read the file asynchronously
  // Callback function
  if (err) throw err; // Check for errors

  console.log(
    data
      .toString() // Convert the buffer object to string
      .split("\n").length - 1 // Divide it to count how many paragraphs there are, then return the number of spaces between them (= number of paragraphs -1)
  );
});
