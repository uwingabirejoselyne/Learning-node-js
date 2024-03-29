const express = require("express");
const path = require("path")
const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use('/admin',adminData.routes);

app.use('/',shopRoutes);
app.use(express.static(path.join(__dirname,'public')))
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(5000);
