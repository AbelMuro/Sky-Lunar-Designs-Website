const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    if(req.url == "login"){
        alert("im here");        
    }

}).listen(8080);