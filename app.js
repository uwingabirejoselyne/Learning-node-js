const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
    if(url ==='/'){
        res.write('<html>')
        res.write('<head><title>Routing request</title></head>')
        res.write('<body><form method="Post"><input type="text" name="message"><button type="submit">send</button></form></button></body>')
        res.write('</html>')
        return res.end()
    }
    if(url ==='/message' && method ==='POST'){
        fs.writeFileSync('message.txt', 'Hello, world!', 'utf-8')
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }
})
server.listen(5000)