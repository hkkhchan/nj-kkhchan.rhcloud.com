var mongoose = require('mongoose')
var User = require('../models/db').users;
module.exports.controller = function(app) {
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
                res.send(err);
            }
            else if (who==null){
                res.send('User no found');
            }
            else {
                res.send(name + '\'s email is ' + who.email );
            }
        });
    });
    
    app.post('/signup', function(req,res){
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.email=req.body.email;
        user.save(function(err){
            if (err){
                res.send(err);
            }
        res.json({message: 'User created!'});
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

}