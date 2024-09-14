const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

router.get('/user', (req, res) => {
  const query = 'select * from users';

  db.query(query, [], (err, results) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

module.exports=router;
