const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chartRoutes = require('./routes/charts');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/chart', chartRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
