const http = require("http"); // HTTP Node module
const map = require("through2-map"); // Through 2 Map module (to iterate on streams like as Array.map() does)

const port = Number.parseInt(process.argv[2]); // Port where the server has to listen from

http
  // Create the new server
  .createServer((request, response) => {
    // Check if the request method is POST
    if (request.method === "POST") {
      request
        // Get the content from the request using pipe, and apply the function inside map() to each chunk of data received
        .pipe(
          map(
            // Just uppercase the received text and return it
            (chunk) => chunk.toString().toUpperCase()
          )
        )
        // Specify where to put the result
        .pipe(response);
    }
  })
  // Specify on which port the server has to listen
  .listen(port);
