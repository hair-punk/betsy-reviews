const fs = require('fs');
const faker = require('faker');

const file = fs.createWriteStream(__dirname +`/data10.csv`, {flags: 'w'});


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

var today = new Date().toUTCString()

  
    var review = {
      userProfile: faker.internet.avatar(),
      username: faker.internet.userName(),
      reviewDate: "2013-03-03 15:05:17",
      stars: rateByStar(),
      content: faker.random.words(10),
      uploadPics: upload(),
      imageUrl: faker.image.food(),
      productURL: faker.commerce.productName()
    };



var seedFunction = function(){ 
  var counter = 9000001;
  var outPutString = "id,userProfile,userName,reviewDate,stars,content,uploadPics,imageUrl,productUrl\n"
  for(let i = 1; i <= 1e6; i++){
    outPutString += `${counter},${faker.internet.avatar()},"${faker.internet.userName()}","2013-03-03 15:05:17",${rateByStar()},"${faker.random.words(10)}",${upload()},${faker.image.food()},"${faker.commerce.productName()}"\n`
    file.write(outPutString)
    outPutString = ""
    counter++
  } 
    file.end();
    console.log('seeded', counter)
}

seedFunction()

// stock images into s3 bucket batch rename them numbers
// create a function that has a string url + a random number.

//make a smaller csv like 1M run 10 times. try different ones.
//

