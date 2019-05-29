const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/views', {useNewUrlParser: true});



var viewSchema = mongoose.Schema({
  reviewerPicture: String,
  reviewerName: String,
  reviewDate: Date,
  uploadPics: String,
  stars: String,
  content: String,
  productPicture: String,
  productURL: String,
});

var View = mongoose.model('View', viewSchema);
module.exports = View;
