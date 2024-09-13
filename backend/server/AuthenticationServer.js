const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

const router = express.Router();


router.post('/login', (req, res) => {
  res.status(200).json({ token: 'test123' });
});


module.exports = router;