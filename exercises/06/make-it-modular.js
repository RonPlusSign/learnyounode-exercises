const filterFunction = require("./filter-function"); // Import the module with the filter function

let directoryName = process.argv[2]; // The directory that contains the files to read
let extensionName = process.argv[3]; // The extension to filter with

filterFunction(
  // Call the imported function
  directoryName,
  extensionName,
  (err, list) => {
    // Callback function
    if (err) throw err;

    list.forEach((element) => console.log(element));
  }
);
