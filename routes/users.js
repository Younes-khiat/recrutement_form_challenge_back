const express = require('express');
const router = express.Router();
const users = require('../models/users'); 

router.post('/register', async (req, res) => {
  console.log(12);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend's origin
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST');
    try {
      console.log(11);
      console.log(req.body);
      const userData = (req.body);
      console.log(66);
      // const parsedData = JSON.stringify(userData);
      console.log(13);

      console.log(userData);
      console.log(15);
console.log(22);
      const user = new users(userData);
      console.log(25);
      await user.save();
console.log(33);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  });
  module.exports = router;