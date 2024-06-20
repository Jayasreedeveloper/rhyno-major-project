let module1 = require('http');
module1.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Welcome to Node.js");
}).listen(1234);