const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');

// Setting
const PORT = process.env.PORT || 3000;

// Endpoints
app.get('/', function (req, res) {
  User.create({
    firstName: 'Oscar',
    lastName: 'Vargas'
  }).then(user => {
    res.json(user);
  })
});

// Server running
app.listen(3000, function() {
  console.log(`App runining on http://localhost:${PORT}`);

  // DB connection
  sequelize.authenticate().then(() => {
    console.log('Database connection successful');
  }).catch((error) => {
    console.log('Database connection failed', error); // verify that you'va created the database;
  })
});