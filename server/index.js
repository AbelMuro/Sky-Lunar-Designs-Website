const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    if(req.url == "/login"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("it works")       
    }

}).listen(1234);