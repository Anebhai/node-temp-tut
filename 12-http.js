const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("you are at the home page");
  } else if (req.url === "/about") {
    res.end("you are at the about page");
  } else {
    res.end(`
    <h1>OOPS</h1>
    <p>You have come to the wrong page</p>
    <a href="/">Go back to the homepage</a>
    `);
  }
});

server.listen("5000");
