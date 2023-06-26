const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Set the port number as desired

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the routes for HTML, JavaScript, and CSS files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/style_sheet.css', (req, res) => {
  res.sendFile(path.join(__dirname + '/style_sheet.css'));
});
app.get('/rs.txt', (req, res) => {
    res.sendFile(path.join(__dirname + '/rs.txt'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
