const net = require("net"); // Network Node module
const strftime = require("strftime"); // to format time easily

const port = process.argv[2]; // Port where the server has to listen from

net
  // Create the new server
  .createServer((socket) => {
    // Write the current date into the socket
    socket.write(strftime("%F %H:%M"));

    // Close the socket (we have to write "\n" to the socket because that's how it is required from the exercise)
    socket.end("\n");
  })
  // Specify on which port the server has to listen
  .listen(port);
