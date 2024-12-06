const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5749622',
    password: 'DGHv3pPjKq',
    database: 'sql5749622'
});

module.exports = pool.promise();
