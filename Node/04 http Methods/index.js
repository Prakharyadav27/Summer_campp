const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()} : ${req.url} New req rec\n`;
  fs.appendFile("log.txt", log, (err, result) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I m Prakhar yadav");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(4000, () => {
  console.log("Server Started");
});
