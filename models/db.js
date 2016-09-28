var mongoose = require('mongoose');
var url='mongodb://';
//url+=process.env.OPENSHIFT_MONGODB_DB_USERNAME+':';
//url+=process.env.OPENSHIFT_MONGODB_DB_PASSWORD+'@';
url+=process.env.OPENSHIFT_MONGODB_DB_HOST + ':';
url+=process.env.OPENSHIFT_MONGODB_DB_PORT + '/nj';
mongoose.connect(url);

var UsersSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

module.exports = {
  users: mongoose.model('Users', UsersSchema),
}