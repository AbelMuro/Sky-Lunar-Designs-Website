const express = require('express');
const app = express();
const formidable = require('formidable');




app.use('/login', (req, res) => {
    var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){ 
           res.send(fields.username);
    })   
})

app.listen(5000);


