const express = require("express");
const shopRouter = express.Router();
const path = require('path')
const rootDir = require('../util/path')
shopRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = shopRouter;
