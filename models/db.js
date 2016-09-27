var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:riUmlZLgMSRC@127.8.6.130/mydb');

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

module.exports = {
  users: mongoose.model('UserInfo', UserSchema),
}