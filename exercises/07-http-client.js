const http = require("http");

http.get(process.argv[2], (response) => {   // Make the GET request to the URL specified in process.argv[2]
  response.setEncoding("utf8");

  response.on("error", console.error); // Handle the error
  response.on("data", console.log); // Handle the success
});
