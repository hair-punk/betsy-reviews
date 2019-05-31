const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true
});

var reviewsSchema = new mongoose.Schema({
  userProfile: String,
  username: String,
  reviewDate: Date,
  stars: String,
  content: String,
  uploadPics: String,
  imageUrl: String,
  productURL: String
});

var Review = mongoose.model('Review', reviewsSchema);

module.exports.Review = Review;
module.exports.fetch = (cb) => {
  Review.find((err, results) => {
    if (err) {
      cb(err, null);
      return;
    }
    var imageObj = {};
    for (var i = 0; i < results.length; i++) {
      if (imageObj[results[i].imageUrl] === undefined) {
        imageObj[results[i].imageUrl] = 1;
      }
      imageObj[results[i].imageUrl] = imageObj[results[i].imageUrl] + 1;
    }
    console.log(imageObj);
    var limitedResults = [];
    for (var i = 1; i <= 30; i++) {
      limitedResults.push(results[Math.floor(Math.random() * 30)]);
    }
    cb(null, limitedResults);
  });
}
