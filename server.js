#!/bin/env node
var path = require('path');
var http = require('http');
var express = require('express');
var fs      = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.use('/css',express.static(path.join(__dirname + '/css')));
app.use('/js',express.static(path.join(__dirname + '/js')));

app.get('/',function(req,res){
	res.render('default',{
		title: 'New Title',
		users: ['Ken', 'Chan']
	});
});

app.get('/who/:name?', function(req,res) {
	var name= req.params.name;
	res.send(name + 'is here.');
});

app.get('*',function(req,res) {
	res.send('nothing here');
});

app.get('/php',function(req,res){
	//res.location('http://php-kkhchan.rhcloud.com');
	res.links({
		next: 'http://php-kkhchan.rhcloud.com',
		last: 'http://wp-kkhchan.rhcloud.com'});
});
	
var server = http.createServer(app);    
server.listen(8080, process.env.OPENSHIFT_NODEJS_IP);
