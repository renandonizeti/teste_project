"use strict";

var express = require('express');

var cors = require('cors');

require('dotenv').config();

var sequelize = require('./src/db/db.js');

var app = express();

var routes = require('./src/routes/routes.js');

app.use(cors());
app.use(express.json());
app.use('/sistema', routes);
var port = 3333;
sequelize.sync({
  force: false
}).then(function () {
  app.set("port", port);
});
app.listen(3333, function () {
  return console.log('Servidor rodando na porta 3333');
});