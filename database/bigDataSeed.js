const fs = require('fs');
const file = fs.createWriteStream(__dirname +`/generatedData.csv`, {flags: 'w'});

var seedFunction = function(){ 

  for(let i = 0; i <= 1e6; i++){
      file.write("hi,\n")
  } 
    file.end();
}

seedFunction()





// make something happen,
// make it write csv file,
//scale up

// const makeafaker = function{
  // var myArray = "userProfile, username, reviewDate, stars, content, uploadPics, imageUrl, productURL,"
  //make a for loop to create fake data
  //start with a small amount adding to the string /n
  // username.faker
  
  //create a writeStream that has a relative path to a blank csv file.

// userProfile: String,
//   username: String,
//   reviewDate: Date,
//   stars: String,
//   content: String,
//   uploadPics: String,
//   imageUrl: String,
//   productURL: String