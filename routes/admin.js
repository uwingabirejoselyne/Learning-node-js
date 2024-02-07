const express = require('express');
const router = express.Router()
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/add-product", (req, res, next) => {
    res.send("<form action ='/product' method='POST'> <input type='text' name='title'><button type='submit'>Send</button></form>");
  });
  
  // Route for /product
 router.post('/product',urlencodedParser ,(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module. exports = router