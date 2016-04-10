#!/bin/env node

var express = require('express');

var app = express();

// define routes
app.get('/', function(req, res){
    res.send('hello! express！ this is a index');
});

app.listen(8080, function () {
    console.log('ready on port 8080');
})