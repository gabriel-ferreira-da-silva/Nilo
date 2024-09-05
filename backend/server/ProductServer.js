const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));


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

app.get('/products', (req, res) => {
  db.query('SELECT * FROM product', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM product WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Product not found');
      return;
    }
    res.json(results[0]);
  });
});

app.post('/products', (req, res) => {
  const { name, description, category, image_url, rate } = req.body;
  const query = 'INSERT INTO product (name, description, category, image_url, rate) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, description, category, image_url, rate], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.status(201).json({ id: results.insertId, name, description, category, image_url, rate });
  });
});


app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, category, image_url, rate } = req.body;
  const query = 'UPDATE product SET name = ?, description = ?, category = ?, image_url = ?, rate = ? WHERE id = ?';
  db.query(query, [name, description, category, image_url, rate, id], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('Product not found');
      return;
    }
    res.json({ id, name, description, category, image_url, rate });
  });
});

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM product WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('Product not found');
      return;
    }
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
