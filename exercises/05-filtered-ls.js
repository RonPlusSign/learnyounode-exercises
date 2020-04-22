const fs = require("fs"); // File system module
const path = require("path"); // Path module

fs.readdir(process.argv[2], (err, fileList) => {  // Read the content of the directory (name of the directory is in process.argv[2])
  // Callback function
  if (err) throw err; // Check for errors

  fileList
    .filter((elem) => path.extname(elem) === "." + process.argv[3]) // Filter the list checking if the extension of each file is correct
    .forEach((element) => { // Print each file name
      console.log(element);
    });
});
