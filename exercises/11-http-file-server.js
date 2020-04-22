const http = require("http");
const fs = require("fs");

const port = Number.parseInt(process.argv[2]); // Port where the server has to listen from

http
  // Create the new server
  .createServer((request, response) => {
    // Create the reading stream listening to the URL provided by process.argv[3]
    fs.createReadStream(process.argv[3])
      // Send the result as a response
      .pipe(response);
  })
  // Specify on which port the server has to listen
  .listen(port);
