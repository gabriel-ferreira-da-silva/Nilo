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

router.get('/cart', (req, res) => {
  db.query('SELECT * FROM cart', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

router.get('/cart/user', (req, res) => {
  const {id_user} = req.body;
  const query = 'SELECT * FROM cart WHERE id_user = ?';
  db.query(query,[id_user], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});



router.post('/cart', (req, res) => {
  const { id_user } = req.body;
  const today = new Date()
  const formatDate = format(today, 'yyyy-MM-dd');
  const query = 'INSERT INTO cart (user_id, date_created) VALUES (?, ?)';
  db.query(query, [id_user,formatDate], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.status(201).json({ user_id:id_user, date_created: formatDate});
  });
});


module.exports=router;
