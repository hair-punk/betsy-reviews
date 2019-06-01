const faker = require('faker');
const db = require('./index.js');

var rateByStar = function () {
  var arr = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5];
  var starsStr = '★★★★★☆☆☆☆☆';
  var rate;
  var result;
  rate = arr[Math.floor(Math.random() * arr.length)];
  result = starsStr.slice(5 - rate, 10 - rate);
  return result;
}

var upload = function () {
  var pic = faker.image.food();
  var arr = [null, null, pic, null];

  var result = arr[Math.floor(Math.random() * arr.length)];
  return result;
}

db.Review.deleteMany((err) => {
  for (var i = 0; i <= 100; i++) {
    var review = new db.Review({
      userProfile: faker.internet.avatar(),
      username: faker.internet.userName(),
      reviewDate: faker.date.past(),
      stars: rateByStar(),
      content: faker.random.words(10),
      uploadPics: upload(),
      imageUrl: faker.image.food(),
      productURL: faker.commerce.productName()
    });

    review.save();
  }
});