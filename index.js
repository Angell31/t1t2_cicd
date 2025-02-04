// index.js
const express = require('express');
const app = express();
const port = 3030;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world! Your app is running on Express.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
