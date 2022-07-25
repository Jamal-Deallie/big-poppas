const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
const webhookRouter = require('./routes/webhookRoutes');
const contactRouter = require('./routes/contactRoutes');
const newsLetterRouter = require('./routes/newsLetterRoutes');
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

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/checkout', checkoutRouter);
app.use('/webhook', webhookRouter);
app.use('/contactus', contactRouter);
app.use('/newsletter', newsLetterRouter);

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
