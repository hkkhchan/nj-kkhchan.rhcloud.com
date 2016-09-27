var mongoose = require('mongoose');
var options={
    user: 'admin',
    pass: 'riUmlZLgMSRC'
}
mongoose.connect('mongodb://127.8.6.130/mydb',options);

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

module.exports = {
  users: mongoose.model('UserInfo', UserSchema),
}