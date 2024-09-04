


const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Make sure to include path

const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/users');

mongoose.connect(`${process.env.MONGODB_URI}`).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});


const app = express();
const port = 3002;

// Set EJS as the view engine
app.set('view engine', 'ejs');
console.log('Views directory:', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views')); // Explicitly set views directory


const allowedOrigins = ['https://recrutement-form-challenge-front.vercel.app'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,

}));




app.use(express.json());

app.use('/',userRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });