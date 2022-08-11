// Variables
var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
const cors = require("cors")
//Configure port
var port=8080;

app.use(cors());
//App directories
var PROJECT_DIR = path.normalize(__dirname);

app.use('/',express.static(path.join(PROJECT_DIR, '')));

http.listen(port, function(){
    console.log('Sample Application runnning at http://localhost:'+port+'/UI/index_widgets_chat.html');
});
