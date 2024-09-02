


  const express = require('express');

const app = express();
const port = process.env.PORT || 3002;  // Use environment variable for port

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
