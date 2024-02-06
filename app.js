const http = require("http");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("this is the middleware");
});
const server = http.createServer(app);
server.listen(5000, () => {
  console.log("hello");
});
