const path = require("path");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const rootDir = require('../util/path')
const products = []

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Route for /product
router.post("/add-product", urlencodedParser, (req, res, next) => {
  products.push({title:req.body.title})
  res.redirect("/");
});

exports.routes = router
exports.products = products
