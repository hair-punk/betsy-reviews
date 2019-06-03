const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

var app = express();
var port = process.env.PORT || 3005;

//header

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/items', (req, res) => {
  db.fetch((err, results) => {
    res.status(200).send(JSON.stringify(results)).end();
  });
});

var server = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}:`);
});
module.exports = server;