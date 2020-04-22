const fs = require("fs"); // File system module
const path = require("path"); // Path module

module.exports = function (dirName, fileExt, callback) {  // Exported main function
  fs.readdir(dirName, (err, data) => {  // Read the content of the directory
    if (err) return callback(err);  // Check if there's an error

    return callback(  // If everything is ok, call the callback function
      null,
      data.filter((elem) => path.extname(elem) === "." + fileExt) // Filter the list
    );
  });
};
