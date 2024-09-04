const express = require('express');
// const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// // Configure EJS
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to the API' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});