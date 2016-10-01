var mongoose = require('mongoose');
var url='mongodb://';
url+=process.env.OPENSHIFT_MONGODB_DB_USERNAME+':';
url+=process.env.OPENSHIFT_MONGODB_DB_PASSWORD+'@';
url+=process.env.OPENSHIFT_MONGODB_DB_HOST + ':';
url+=process.env.OPENSHIFT_MONGODB_DB_PORT + '/nj';
mongoose.connect(url);

var QuotesSchema = mongoose.Schema({
    owner: String,
    content: String,
    modify_Dt: String
});

module.exports = {
  quotes: mongoose.model('Quotes', QuotesSchema),
}