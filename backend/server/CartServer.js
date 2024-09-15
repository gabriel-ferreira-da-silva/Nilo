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

router.get('/cart', (req, res) => {
  db.query('SELECT * FROM cart', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

router.get('/cart/user', (req,res)=>{
  const { id_user } = req.query;
  const query = "select * from cart where id_user = ?"
  db.query(query, [id_user],(err,results)=>{
    if(err){
      res.status(500).send("error in query")
      return;
    }
    res.json(results)
  })
})



router.get('/cart/user/current', (req, res) => {
  const { id_user } = req.query; // Read from query params
  const query = "SELECT * FROM cart WHERE id_user = ? AND date_sold IS NULL";

  db.query(query, [id_user], (err, results) => {
    if (err) {
      res.status(500).send("Error in query");
      console.error(err);
      return;
    }
    console.log("Current cart:", results[0]);
    const cart = results[0];
    res.json(cart)
  });
});


router.post('/cart', (req,res)=>{
  const {id_user,date_created} = req.body;
  const query = "insert into cart(id_user, date_created) values(?,?)"
  db.query(query, [id_user,date_created],(err,results)=>{
    if(err){
      res.status(500).send("error in query");
      console.log(err);
      console.log("jsndfkjafskjansfdkjasf");

      return;
    }
    console.log("me nataasdfnasdfasjdfakjfdn"+results)
    res.json(results)
  })
})

router.put('/cart/sell',(req,res)=>{
  const {id_user,date_created,date_sold} = req.body;
  console.log(req.body)
  const query = 'UPDATE cart set date_sold = ? where id_user=? and date_created=?'
  db.query(query,[date_sold, id_user,date_created],(err,results)=>{
    if(err){
      console.log(err)
      res.status(500).send("cart/sell route error")
      return;
    }
    
    if (results.affectedRows === 0) {
      res.status(404).send('Product not found');
      return;
    }
    res.json(results);
  })
});

module.exports=router;
