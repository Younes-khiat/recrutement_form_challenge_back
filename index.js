const express = require('express');
// const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// // Configure EJS
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});