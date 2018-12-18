const express = require("express");
const http = require("http");
const app = express();

app.use(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World");
});

// app.get("/", (req, res) => res.send("Hello world"));

app.listen(3000, () => console.log("listen 3000"));