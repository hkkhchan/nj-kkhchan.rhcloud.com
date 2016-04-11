#!/bin/env node
var path = require('path');
var http = require('http');
var express = require('express');
var fs      = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.set('port',process.env.OPENSHIFT_NODEJS_PORT);
app.set('ip',process.env.OPENSHIFT_NODEJS_IP);
app.use('/css',express.static(path.join(__dirname + '/css')));

//var server = http.createServer(app);

app.get('/',function(req,res){
	res.render('default',{
		title: 'New Title',
		users: ['Ken', 'Chan']
	});

app.get('/who/:name?', function(req,res) {
	var name= req.params.name;
	res.send(name + 'is here.');
});

app.get('*',function(req,res) {
	res.send('nothing here');
});
	
    
//server.listen(8080, process.env.OPENSHIFT_NODEJS_IP);
