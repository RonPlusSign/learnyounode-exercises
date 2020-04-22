const BufferList = require("bl"); // Buffer List module
const http = require("http"); // HTTP module

// Personal solution
const bl = new BufferList();

http.get(process.argv[2], (response) => {
  // HTTP GET request
  response.on("data", (data) => {
    // Handle new data
    bl.append(data); // Append the new data to the Buffer List
  });

  response.on("error", (error) => {
    // Handle the error
    console.error(error);
  });

  response.on("end", () => {
    // Handle the end of the GET request
    console.log(bl.toString().length); // Print the number of chars
    bl.toString()
      .split("\n")
      .forEach((elem) => {
        console.log(elem); // Print each paragraph contained in the buffer
      });
  });
});

/* Official Solution

http.get(process.argv[2], function (response) {
  response.pipe(
    BufferList(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});

*/
