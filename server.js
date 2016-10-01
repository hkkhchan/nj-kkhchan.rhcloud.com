#!/bin/env node
var path = require('path');
var http = require('http');
var express = require('express');
var fs      = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.use('/css',express.static(path.join(__dirname + '/css')));
app.use('/js',express.static(path.join(__dirname + '/js')));

var User = require('./models/db').users;

app.get('/',function(req,res){
    res.render('default',{
        title: 'New Title',
        users: ['Ken', 'Chan']
    });
});

app.get('/who/:name?', function(req,res) {
    var name= req.params.name;
    User.findOne({'name':name},'_id password email',function(err,who){
        if (err){
            res.send('user not found');
        }
        else{
            res.send(name + '\'s email is ' + who.email );
        }
    });
});

app.get('/403',function(req,res){
    res.location('http://php-kkhchan.rhcloud.com');
    res.status(403).send('403 test');
});
app.get('/php',function(req,res){
    res.redirect('http://php-kkhchan.rhcloud.com');
});

app.get('/api',function(req,res){
    res.json({message: 'hooray! welcome to my api!'});
});


app.get('*',function(req,res) {
    res.send('nothing here');
});

var server = http.createServer(app);
server.listen(8080, process.env.OPENSHIFT_NODEJS_IP);
