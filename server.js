const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get('/api/save-theme', (req, res) => require('./api/save-theme')(req, res));
app.post('/api/save-theme', (req, res) => require('./api/save-theme')(req, res));
app.get('/api/challenge-3/save-theme', (req, res) => require('./api/save-theme')(req, res));
app.post('/api/challenge-3/save-theme', (req, res) => require('./api/save-theme')(req, res));

if (require.main === module) {
    app.listen(3002, () => console.log('Challenge 3 running on http://localhost:3002'));
}

module.exports = app;
