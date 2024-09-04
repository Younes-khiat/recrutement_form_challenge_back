const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// Configure EJS
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs'); // Ensure you provide the correct extension
});


// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});