const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/views', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

let viewsSchema = mongoose.Schema({
  stars: String,
  //how to setup date?
  date: null,
  productPicture: String,
  productURL: String,
  review: {
    reviewerName: String,
    reviewerPicture: String,
    reviewText: String,
  },
  //how to fix it?
  productPhotos: {
    reviewerPicture: String,
  }

});

let views = mongoose.model('Views', userSchema);