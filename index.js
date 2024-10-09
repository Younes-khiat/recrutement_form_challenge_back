const express = require ('express');
const mongoose = require('mongoose');
const path = require('path'); // Make sure to include path
const users = require('./models/users');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(`${process.env.MONGODB_URI}`).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});


const app = express();
const port = 3002;

// Set EJS as the view engine
app.set('view engine', 'ejs');
console.log('Views directory:', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views')); // Explicitly set views directory

app.use(cors({
  origin: /https:\/\/recrutement-form-challenge-front-[^.]+\.vercel\.app$/,  // Allow any subdomain of vercel.app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Explicit allowed headers
  credentials: true,

}));

app.use(express.json());

app.post('/register', async (req, res) => {
  console.log(12);
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // res.header('Access-Control-Allow-Methods', 'POST');
    try {
      const userData = (req.body);

      
      const user = new users(userData);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  });

app.get('/', (req, res) => {
    res.render('index'); // Renders views/index.ejs
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });