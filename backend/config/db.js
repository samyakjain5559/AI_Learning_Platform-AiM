const mysql = require('mysql2');
require('dotenv/config');

var pool = mysql.createPool({
    //connectionLimit: 0,
    host: "localhost",
    user: "root",
    port: "3306",
    password: "password",
    database: "node_twitterclone"
})

module.exports = pool;