const Pool = require("pg").Pool;
const process = require("process");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
    user: "postgres",
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

module.exports = pool;
