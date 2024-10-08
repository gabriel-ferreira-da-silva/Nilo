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

router.get('/products', (req, res) => {
  db.query('SELECT * FROM product', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


router.get('/info/product', (req, res) => {
  const query = `
    SELECT COUNT(*) AS productCount FROM product
  `;

  db.query(query, [], (err, results) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Server error');
      return;
    }

    const productCount = results[0].productCount;
    res.json({ count: productCount });
  });
});


router.get('/products/batch', (req, res) => {
  const {_page, _limit}  = req.query;
  
  const page = parseInt(_page, 10) || 1;
  const limit = parseInt(_limit, 10) || 3; 
  const offset = (page - 1 ) * limit;

  const query = `
            select * from product
            limit ? offset ?
      `
  
  db.query(query,[limit, offset], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    console.log(limit)
    console.log(offset)
    console.log(results)
    res.json(results);
  });
});


router.get('/products/:id', (req, res) => {
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

router.post('/products', (req, res) => {
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


router.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, category, image_url, price, rate } = req.body;
  const query = 'UPDATE product SET name = ?, description = ?, category = ?, image_url = ?, rate = ?, price = ? WHERE id = ?';
  db.query(query, [name, description, category, image_url, rate,price,  id], (err, results) => {
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

router.delete('/products/:id', (req, res) => {
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

module.exports=router;
