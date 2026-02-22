const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 CI/CD Project is Running Successfully!</h1>
        <p>Deployed using GitHub + Jenkins + Docker</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});