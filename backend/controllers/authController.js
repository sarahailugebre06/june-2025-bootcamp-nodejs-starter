// const db = require('../config/db');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// // exports.register = async (req, res) => {
// //    console.log("BODY CONTENT:", req.body); // <-- add this
// //   const { name, email, password } = req.body;
// //   const hashedPassword = await bcrypt.hash(password, 10);
// //   db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
// //     [name, email, hashedPassword], (err, result) => {
// //       if (err) return res.status(400).json({ error: err.message });
// //       res.json({ message: 'User registered successfully' });
// //   });
// // };
// exports.register = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
// // ✅ Default role is "reader"
//     const userRole = role && role === "admin" ? "admin" : "reader";
//   db.query(
//     'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
//     [name, email, hashedPassword], 
//     (err, result) => {
//       if (err) return res.status(400).json({ error: err.message });

//       // Generate JWT token
//       const token = jwt.sign({ id: result.insertId }, JWT_SECRET, { expiresIn: '1h' });

//       // Return token and user info
//       res.json({
//         token,
//         user: { id: result.insertId, name, email }
//       });
//   });
// };

// exports.login = (req, res) => {
//   const { email, password } = req.body;
//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, users) => {
//     if (err) return res.status(400).json({ error: err.message });
//     if (!users.length) return res.status(400).json({ error: 'User not found' });

//     const valid = await bcrypt.compare(password, users[0].password);
//     if (!valid) return res.status(400).json({ error: 'Invalid password' });

//     const token = jwt.sign({ id: users[0].id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user: { id: users[0].id, name: users[0].name, email: users[0].email } });
//   });
// };
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// 🧩 REGISTER CONTROLLER
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // ✅ Default role is "reader"
    const userRole = role && role === "admin" ? "admin" : "reader";

    // Check if email already exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, users) => {
      if (err) return res.status(500).json({ error: err.message });
      if (users.length > 0) return res.status(400).json({ error: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, userRole],
        (err, result) => {
          if (err) return res.status(400).json({ error: err.message });

          const token = jwt.sign(
            { id: result.insertId, role: userRole },
            JWT_SECRET,
            { expiresIn: "7d" }
          );

          res.json({
            message: "User registered successfully",
            token,
            user: { id: result.insertId, name, email, role: userRole },
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// 🧩 LOGIN CONTROLLER
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, users) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!users.length) return res.status(400).json({ error: "User not found" });

    const user = users[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  });
};
