const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');


var app = express();
var port = 3004;

app.use(express.static('public'));
//TODO

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
});