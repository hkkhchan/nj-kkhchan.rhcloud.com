#!/bin/env node
var path = require('path');
var http = require('http');
var express = require('express');
var fs      = require('fs');
var app = express();
var server = http.createServer(app);
app.use('/css',express.static(path.join(__dirname + '/css')));

app.get('/',function(req,res){
	res.setHeader('Content-Type', 'text/html');
    if (req.query.a != null) {
		res.send('Hi, '+req.query.a)
	}
	else
	{
		res.send('Hi, Ken');
	}
});
server.listen(8080, process.env.OPENSHIFT_NODEJS_IP);
