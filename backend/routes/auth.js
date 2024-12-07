// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Move to environment variable in production
const SECRET_KEY = process.env.JWT_SECRET || 'My super secret key';

router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        if (username === 'saiharsha' && password === 'saiharsha') {
            const token = jwt.sign(
                { username, timestamp: Date.now() }, 
                SECRET_KEY, 
                { expiresIn: '1h' }
            );
            return res.json({ 
                token,
                user: { username },
                message: 'Login successful'
            });
        }

        res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Verify token endpoint
router.get('/verify', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ valid: true, user: decoded });
    } catch (error) {
        res.status(401).json({ valid: false, message: 'Invalid token' });
    }
});

module.exports = router;