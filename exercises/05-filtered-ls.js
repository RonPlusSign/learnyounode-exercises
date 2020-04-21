const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, fileList) => {
  if (err) throw err;

  fileList
    .filter((elem) => path.extname(elem) === "." + process.argv[3])
    .forEach((element) => {
      console.log(element);
    });
});
