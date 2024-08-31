const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);
const app = express();

app.use(cors({
  origin: 'http://localhost:3000' ,

}));
app.use((bodyParser.json()));

const userRouter = require('./routes/users');
const port = 3002;
app.use(express.json());
app.use('/',userRouter);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
