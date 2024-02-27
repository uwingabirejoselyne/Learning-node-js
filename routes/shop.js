const express = require("express");
const shopRouter = express.Router();
const path = require('path')
const rootDir = require('../util/path')
const adminData = require('./admin')
shopRouter.get("/",(req,res,next)=>{
  console.log('shop.js',adminData.products);
  res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = shopRouter;
