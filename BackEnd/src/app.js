
const express = require('express');

const app = express();

const dotenv = require('dotenv');

const mongoose = require('mongoose');

//Importing routes
const authRoute = require('./routes/auth');


 dotenv.config();

 // Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, content-type, Accept, Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


//Connect to database
mongoose.connect(process.env.DB_CONNECT, 
{useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Success! Connected to db!')
);

//Middleware
app.use(express.json());





//Route Middleeware
app.use('/api', authRoute);



//Listen to server
app.listen(3000, () => console.log('Server is Running'));


module.exports = app;























