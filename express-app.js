
const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js and Express server!');
});

// GET /about
app.get('/about', (req, res) => {
    res.json({
        name: 'Geetha',
        section: 'A'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

// 404 response
app.use((req, res) => {
    res.status(404).send('Page Not Found!');
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
