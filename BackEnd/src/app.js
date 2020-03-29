
const express = require('express');

const app = express();

const dotenv = require('dotenv');

const mongoose = require('mongoose');

//Importing routes
const authRoute = require('./routes/auth');


 dotenv.config();


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
























