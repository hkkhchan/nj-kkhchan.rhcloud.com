var mongoose = require('mongoose');
var url='mongodb://';
//url+=process.env.OPENSHIFT_MONGODB_DB_USERNAME+':';
//url+=process.env.OPENSHIFT_MONGODB_DB_PASSWORD+'@';
//url+=process.env.OPENSHIFT_MONGODB_DB_HOST + ':';
//url+=process.env.OPENSHIFT_MONGODB_DB_PORT + '/mydb';
url='127.0.0.1:27017/mydb';
mongoose.connect(url);

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

module.exports = {
  users: mongoose.model('UserInfo', UserSchema),
}