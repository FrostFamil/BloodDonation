
const express = require('express');

const app = express();

const dotenv = require('dotenv');

const mongoose = require('mongoose');

//Importing routes
const authRoute = require('./routes/auth');


 dotenv.config();

 // Add headers
 app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


//Middleware
app.use(express.json());





//Route Middleeware
app.use('/api', authRoute);

//Connect to database
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-cim8y.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, 
{useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Success! Connected to db!')
);


//Listen to server
app.listen(process.env.PORT || 3000);


module.exports = app;























