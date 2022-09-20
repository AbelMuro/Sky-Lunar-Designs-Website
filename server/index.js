const http = require('http');
const formidable = require('formidable');
const url = require('url');
const fs = require('fs');
const {createProxyMiddleware} = require('http-proxy-middleware');

http.createServer(function(req, res){

    if(req.url == "/login"){
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true
        });
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("userName " + fields.username);
            res.write("password" + fields.password)
            res.end();
        })   
    }
    else{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("it works");
        res.end()  
    }

}).listen(5000);