const http = require("http");
const URL = require("url");

const port = process.argv[2]; // Port where the server has to listen from

function parsetime(time) {
  // Function that takes a date as a string and returns an object representing its hour
  let date = new Date(time);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixtime(time) {
  // Function that takes a date as a string and returns an object with the Epoch time
  let date = new Date(time);
  return { unixtime: date.getTime() };
}

http
  // Create a new server
  .createServer((request, response) => {
    // Check if the requested method is a GET
    if (request.method === "GET") {
      // Create the new URL object (URL of the request)
      let urlObject = URL.parse(request.url, true),
        // Get the path (without domain or query string)
        pathname = urlObject.pathname,
        // Get the "iso" attribute from the query string
        time = urlObject.query.iso;

      // Check which function to call (parsetime / unixtime)
      if (pathname === "/api/parsetime") {
        // Set the header of the response
        response.writeHead(200, { "Content-Type": "application/json" });

        // Send the result to the response and close the connection
        response.end(JSON.stringify(parsetime(time)));
      } else if (pathname === "/api/unixtime") {
        // Set the header of the response
        response.writeHead(200, { "Content-Type": "application/json" });

        // Send the result to the response and close the connection
        response.end(JSON.stringify(unixtime(time)));
      }
    }
  })
  // Specify on which port the server has to listen
  .listen(port);
