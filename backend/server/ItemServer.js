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

router.get('/item', (req, res) => {
  db.query('SELECT * FROM item', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    console.log(results)
    res.json(results);
  });
});


router.post('/item', (req,res)=>{
  const {id_product, id_user, cart_date} = req.body;
  console.log("+==================================")
  console.log("this is body::::::"+req.body)
  console.log("+==================================")
  
  const query = 'INSERT INTO item (id, id_user, cart_date, quantity) VALUES (?, ?, ?, 1)';

  db.query(query, [id_product,id_user,cart_date],(err,results)=>{
    if(err){
      console.log(err)
      res.status(500).send("error in db")
      return;
    }
    console.log([id_product,id_user]) 

    res.json(results)
  })
})



router.get('/item/cart', (req, res) => {
  const { id_user,date_created } = req.query; 
  const query = "SELECT * FROM item WHERE id_user = ? AND cart_date = ?";
  console.log("item by cartt" + id_user + date_created)
  db.query(query, [id_user, date_created], (err, results) => {
    if (err) {
      res.status(500).send("Error in query");
      console.error(err);
      return;
    }
    console.log("results\n:"+ results+"*****************************************");
    res.json(results);
  });
});


module.exports=router;
