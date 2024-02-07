const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Parse URL-encoded form data
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Route for /add-product
app.use("/add-product", (req, res, next) => {
  res.send("<form action ='/product' method='POST'> <input type='text' name='title'><button type='submit'>Send</button></form>");
});

// Route for /product
app.use('/product', urlencodedParser, (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

// Root path
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from the middleware</h1>");
});

app.listen(5000);
