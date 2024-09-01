const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouter = require('./routes/users');

mongoose.connect(`${process.env.MONGODB_URI}`);

const app = express();
const port = 3002;

app.use(cors({
  origin: 'https://recrutement-form-challenge-back-2.onrender.com' ,

}));
app.use((bodyParser.json()));

app.use(express.json());
app.use('/',userRouter);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
