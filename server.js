#!/bin/env node
var path = require('path');
var http = require('http');
var express = require('express');
var fs      = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.use('/css',express.static(path.join(__dirname + '/css')));
app.use('/js',express.static(path.join(__dirname + '/js')));

fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

var server = http.createServer(app);
server.listen(8080, process.env.OPENSHIFT_NODEJS_IP);
