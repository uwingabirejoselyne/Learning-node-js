const http = require("http");
const express = require("express")
const app = express()
const server = http.createServer(app);
server.listen(5000, () => {
  console.log("hello");
});
