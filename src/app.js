const express = require('express');
const app = express();
const sequelize = require('./database/db');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware for fill the req.body
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Endpoints
app.get('/', function (req, res) {
  res.json('Home Page');
});

app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

// Server running
app.listen(3000, function() {
  console.log(`App runining on http://localhost:${PORT}`);

  // DB connection
  // Force: true -> DROP TABLES
  sequelize.sync({ force: false }).then(() => { // Creates a new table if does not exists and doesn't drop any already existed
    console.log('Database connection successful');
  }).catch((error) => {
    console.log('Database connection failed', error); // verify that you'va created the database;
  })
});