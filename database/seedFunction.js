const faker = require('faker');
const db = require('./index.js');

module.exports.start = function (cb) {
  db.View.deleteMany((err) => {
    if (err) {
      console.log('Error starting seeding process');
      cb(err);
      return;
    }
    console.log('Seeding process Started');
    var viewList = [];
    for (var i = 0; i < 100; i++) {
      var view = new db.View({
        reviewerPicture: faker.internet.avatar(),
        reviewerName: faker.internet.username(),
        reviewDate: faker.date.past(),
        //may need an array
        uploadPics: faker.image.food(),
        stars: String,
        content: String,
        productPicture: faker.image.food(),
        productURL: faker.internet.url(),
      });
      viewList.push(view);
    }
    db.View.insertMany(viewList, (err) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null);
    });
  });
}



// var starObj = {
//   '0': ["far fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"],
//   '.5': ["fas fa-star-half-alt", "far fa-star", "far fa-star", "far fa-star", "far fa-star"],
//   '1': ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"],
//   '1.5': ["fas fa-star", "fas fa-star-half-alt", "far fa-star", "far fa-star", "far fa-star"],
//   '2': ["fas fa-star", "fas fa-star", "far fa-star", "far fa-star", "far fa-star"],
//   '2.5': ["fas fa-star", "fas fa-star", "fas fa-star-half-alt", "far fa-star", "far fa-star"],
//   '3': ["fas fa-star", "fas fa-star", "fas fa-star", "far fa-star", "far fa-star"],
//   '3.5': ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt", "far fa-star"],
//   '4': ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
//   '4.5': ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
//   '5': ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star"],
// }

// export var Stars = function(props)  {


//     return  (
//     <div>
//     <i className={starObj[props.starAvg.toString()][0]}></i>
//     <i className={starObj[props.starAvg.toString()][1]}></i>
//     <i className={starObj[props.starAvg.toString()][2]}></i>
//     <i className={starObj[props.starAvg.toString()][3]}></i>
//     <i className={starObj[props.starAvg.toString()][4]}></i>
//     </div>
//   )
// }