const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const productRouter = require('./server/ProductServer');
const authRouter = require('./server/AuthenticationServer');
const cartRouter = require('./server/CartServer');
const itemRouter = require('./server/ItemServer');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', productRouter);       
app.use('/api', itemRouter);       
app.use('/api', cartRouter);       
app.use('/auth', authRouter);         

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
