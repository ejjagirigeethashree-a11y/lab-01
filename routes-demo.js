const express = require('express');

const app = express();

const PORT = 3002;

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Routes Demo!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is About Page!');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('This is Contact Page!');
});

// Dynamic Route
app.get('/user/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}!`);
});

// Start Server
app.listen(PORT, () => {
    // Query Parameters
app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
});
});