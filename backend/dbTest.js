const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("✅ Connected to MySQL successfully!");
    const [rows] = await connection.query("SHOW TABLES;");
    console.log("📋 Tables:", rows);
    await connection.end();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

connectDB();
