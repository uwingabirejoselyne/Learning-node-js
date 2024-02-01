const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url ==='/'){
        res.write('<html>')
        res.write('<head><title>Routing request</title></head>')
        res.write('<body><form method="Post"><input type="text" name="message"></body>')
        res.write('</html>')
        return res.end()
    }
})
server.listen(5000)