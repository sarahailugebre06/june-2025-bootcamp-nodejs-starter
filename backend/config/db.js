// // const mysql = require('mysql2');
// // const dotenv = require('dotenv');
// // dotenv.config();

// // const connection = mysql.createConnection({
// //   host: process.env.DB_HOST || 'localhost',
// //   user: process.env.DB_USER || 'root',
// //   password: process.env.DB_PASS || '',
// //   database: process.env.DB_NAME || 'read_for_change_db'
// // });

// // connection.connect((err) => {
// //   if (err) throw err;
// //   console.log('Connected to MySQL database');
// // });

// // module.exports = connection;
// // const mysql = require('mysql2');
// // const dotenv = require('dotenv');
// // dotenv.config();

// // const connection = mysql.createConnection({
// //   host: process.env.DB_HOST || 'localhost',
// //   user: process.env.DB_USER || 'root',
// //   password: process.env.DB_PASSWORD || '', // corrected
// //   database: process.env.DB_NAME || 'read_for_change_db',
// //   port: process.env.DB_PORT || 3306,      // added port
// //   connectTimeout: 10000                   // optional, 10s timeout
// // });

// // connection.connect((err) => {
// //   if (err) {
// //     console.error('Database connection failed:', err);
// //     return;
// //   }
// //   console.log('Connected to MySQL database');
// // });

// // module.exports = connection;
// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

// // Create a connection pool (better for cloud DBs)
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10, // max 10 concurrent connections
//   queueLimit: 0,
//   connectTimeout: 10000, // optional
// });

// // module.exports = pool.promise(); // use promise-based queries
// module.exports = pool;
// backend/config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

module.exports = pool.promise(); // promise-based
