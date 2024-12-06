const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'My super secret key';

const chartData = {
    summary: [ { year: 2020, investment: 150 }, { year: 2021, investment: 200 } ],
    reports: [ { region: 'EMDEs', adoption: 15 }, { region: 'Advanced Economies', adoption: 60 } ]
};

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token required.');

    try {
        req.user = jwt.verify(token.split(' ')[1], SECRET_KEY);
        next();
    } catch {
        res.status(403).send('Invalid token.');
    }
};

router.get('/summary', authenticate, (req, res) => {
    res.json(chartData.summary);
});

router.get('/reports', authenticate, (req, res) => {
    res.json(chartData.reports);
});

module.exports = router;
