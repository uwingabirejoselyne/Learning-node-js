const path = require('path')
const express = require('express');
const router = express.Router()
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
  });
router.use(express.static(path.join(__dirname,'public')))
  
  // Route for /product
 router.post('/add-product',urlencodedParser ,(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module. exports = router