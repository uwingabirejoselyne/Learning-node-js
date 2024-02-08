const express = require("express");
const shopRouter = express.Router();
const path = require('path')
// shopRouter.get("/", (req, res, next) => {
//   res.send("<h1>Hello from the middleware</h1>");
// });
shopRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','shop.html'))
})
module.exports = shopRouter;
