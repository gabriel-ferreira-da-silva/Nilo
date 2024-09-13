const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "nilo_secret_key";

require('dotenv').config();

const router = express.Router();


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



router.post('/login/admin', (req, res) => {
  const {username,password} = req.body;
  if(!username || !password){
    return res.status(400).json({message: "username or password are empty"})
  }

  const query = "select * from managers where username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const user = results[0];
    if (password!=user.password) 
      return res.status(400).json({ message: 'Invalid username or password' });
    
    const token = jwt.sign({ userId: user.id, username: user.username,role:"admin" }, JWT_SECRET, { expiresIn: '1h' });
    console.log(token)
    return res.json({ token });
  });
});


router.post('/login/user', (req, res) => {
  const {username,password} = req.body;
  if(!username || !password){
    return res.status(400).json({message: "username or password are empty"})
  }

  const query = "select * from users where username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const user = results[0];
    if (password!=user.password) 
      return res.status(400).json({ message: 'Invalid username or password' });
    
    const token = jwt.sign({ userId: user.id, username: user.username, email: user.email, name:user.name , role:"user" }, JWT_SECRET, { expiresIn: '1h' });
    console.log("token showuld be here")
    console.log(token)
    return res.json({ token });
  });
});


module.exports = router;