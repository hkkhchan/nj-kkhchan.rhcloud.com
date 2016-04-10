#!/bin/env node

var express = require('express');

var app = express();


app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

// define routes
app.get('/', function(req, res){
    res.send('hello! express！ this is a index');
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, function () {
    console.log('ready on port 8080');
})