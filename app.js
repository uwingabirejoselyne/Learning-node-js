const express = require("express");
const app = express();
app.use("/add-product", (req, res, next) => {
  console.log("this is the middleware");
  res.send("<h1> Add Product</h1>");
});
app.use("/", (req, res, next) => {
  console.log("this is the middleware");
  res.send("<h1> Hello from the middleware</h1>");
});

app.listen(5000);
