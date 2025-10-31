const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {authorizeRoles}=require('../middleware/roleMiddleware')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');

// Public routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected routes
// router.post('/', authMiddleware, addBook);

// Logged-in users (any role) can add reviews
router.post('/books/:id/reviews', authMiddleware, (req, res) => {
  // your review logic here
});
router.put('/:id', authMiddleware, updateBook);
// router.delete('/:id', authMiddleware, deleteBook);
router.delete('/books/:id', authMiddleware, authorizeRoles('admin'), (req, res) => {
  // your delete logic here
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
