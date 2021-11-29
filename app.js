const express = require('express');
const app = express();
const sequelize = require('./database/db');

// Setting
const PORT = process.env.PORT || 3000;

// Endpoints
app.get('/', function (req, res) {
  res.send('Hello World')
});

// Server running
app.listen(3000, function() {
  console.log(`App runining on http://localhost:${PORT}`);

  // DB connection
  sequelize.authenticate().then(() => {
    console.log('Successful database connection');
  }).catch((error) => {
    console.log('Failed database connection', error); // verify that you'va created the database;
  })
});