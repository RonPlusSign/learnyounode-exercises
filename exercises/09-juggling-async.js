const BufferList = require("bl"); // Buffer List module
const http = require("http"); // HTTP module

let results = [];

for (let i = 0; i < 3; i++) {
  // Start the 3 GET requests
  http.get(process.argv[2 + i], (response) => {
    let buffer = new BufferList(); // Create a Buffer List for each request

    // Handle new data
    response.on("data", (data) => {
      buffer.append(data); // Append the new data to the Buffer List
    });

    // Handle the error
    response.on("error", (error) => {
      console.error(error);
    });

    // Handle the end of the GET request
    response.on("end", () => {
      // Save the buffer content into the results array
      results[i] = buffer.toString();

      // Check if all the positions of the results array are filled (there isn't any undefined element and the length is 3)
      if (results.filter((element) => element).length === 3) {
        results.forEach((elem) => console.log(elem)); // Print the results
      }
    });
  });
}
