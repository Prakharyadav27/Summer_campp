const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()} : ${req.method}/ ${req.url} New request recived\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const qp = myUrl.query.name;
        res.end(`Hii, ${qp}`);
        break;
      default:
        res.end("Chill up bero!!!!");
    }
  });
});

server.listen(8000, () => {
  console.log("Server Started");
});
