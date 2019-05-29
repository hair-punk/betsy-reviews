const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./database/index.js');


var app = express();
var port = 3004;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('public'));
//TODO
app.get('/reviews', (req, res) => {
  db.fetch((err, results) => {
    res.status(200).send(JSON.stringify(results)).end();
  });
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
//
var server = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}: `);
});

// module.exports = server;