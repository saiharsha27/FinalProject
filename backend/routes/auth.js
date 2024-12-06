const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'My super secret key';

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'saiharsha' && password === 'saiharsha') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
