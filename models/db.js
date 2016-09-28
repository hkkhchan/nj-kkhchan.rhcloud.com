var mongoose = require('mongoose');
var conn='mongodb://';
conn+=process.env.OPENSHIFT_MONGODB_DB_USERNAME+':';
conn+=process.env.OPENSHIFT_MONGODB_DB_PASSWORD+'@';
conn+=process.env.OPENSHIFT_MONGODB_DB_HOST + ':';
conn+=process.env.OPENSHIFT_MONGODB_DB_PORT + '/mydb';
mongoose.connect(conn,{config:{autoIndex: false}});

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

module.exports = {
  users: mongoose.model('UserInfo', UserSchema),
}