const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
require('dotenv').config();

const app = express();


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

router.get('/item', (req, res) => {
  db.query('SELECT * FROM item', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


router.post('/item', (req, res) => {
  const { id_user, date_created, id_product } = req.body;
  const today = new Date()
  const query = 'INSERT INTO into (id, id_user, cart_date,quantity ) VALUES (?,?, ?, ?)';
  db.query(query, [id_product,id_user, date_created, 1 ], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.status(201).json({ user_id:id_user, date_created: date_created, id_product:id_product, quantity: 1});
  });
});


module.exports=router;
