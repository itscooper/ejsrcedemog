const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS page
app.get('/', (req, res) => {
  res.render('index', req.query);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});