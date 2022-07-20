const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');

const app = express();

connectDB();

app.use(cors());

app.options('*', cors());

app.use(
  express.urlencoded({
    extended: true,
    limit: '25mb',
  })
);

app.use(express.json({ limit: '25mb' }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

// 3) ROUTES

app.get('/', (req, res) => {
  // Sending the response
  res.send('Hello World!');

  // Ending the response
  res.end();
});

const port = process.env.PORT || 5001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
