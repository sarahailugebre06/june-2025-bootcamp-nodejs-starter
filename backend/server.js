// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();


// const app = express();
// app.use(cors({
//   origin: [
//     "http://localhost:3000",
//     "http://192.168.1.103:3000"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }))
// app.use(express.json());
// // const express = require('express');
// // const app = express();
// const db = require('./config/db');

// // app.get('/test-db', async (req, res) => {
// //   try {
// //     const [rows] = await db.query('SELECT * FROM users LIMIT 5');
// //     res.json(rows);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // Import Routes
// const authRoutes = require('./routes/auth');
// const bookRoutes = require('./routes/books');
// const reviewRoutes = require('./routes/reviews');

// app.use('/api/auth', authRoutes);
// app.use('/api/books', bookRoutes);
// app.use('/api/reviews', reviewRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://192.168.1.103:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Database
const db = require('./config/db');

// Routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
