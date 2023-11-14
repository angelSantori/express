const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: 'localhost',
    user: 'angel28',
    password: 'FullStack2023.',
    database: 'fullstackapi',
    insecureAuth: true,
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;