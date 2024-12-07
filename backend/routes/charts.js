// routes/charts.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET || 'My super secret key';

// Sample data
const chartData = {
    summary: [
        { year: 2020, investment: 150 },
        { year: 2021, investment: 200 }
    ],
    reports: [
        { region: 'EMDEs', adoption: 15 },
        { region: 'Advanced Economies', adoption: 60 }
    ]
};

// Authentication middleware
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'Authentication token required' });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Protected routes
router.get('/summary', authenticate, (req, res) => {
    try {
        res.json(chartData.summary);
    } catch (error) {
        console.error('Summary error:', error);
        res.status(500).json({ message: 'Error fetching summary data' });
    }
});

router.get('/reports', authenticate, (req, res) => {
    try {
        res.json(chartData.reports);
    } catch (error) {
        console.error('Reports error:', error);
        res.status(500).json({ message: 'Error fetching reports data' });
    }
});

module.exports = router;