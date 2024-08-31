const express = require('express');
const router = express.Router();
const users = require('../models/users'); 

router.post('/register', async (req, res) => {
  console.log(12);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST');
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
  module.exports = router;