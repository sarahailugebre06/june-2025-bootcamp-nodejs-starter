const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getReviewsByBook,getReviewsByUser, addReview, updateReview, deleteReview } = require('../controllers/reviewController');

// Public route
router.get('/:bookId', getReviewsByBook);
// ✅ New route for user’s reviews
router.get('/', authMiddleware, getReviewsByUser);
// Protected routes
// router.post('/:bookId', authMiddleware, addReview);
router.post('/:bookId', authMiddleware, addReview);
// async (req, res) => {
//   try {
//     const { bookId } = req.params;
//     const { rating, content } = req.body;

//     // req.user comes from authMiddleware
//     const review = await addReview(bookId, {
//       userId: req.user.id,
//       userName: req.user.name || 'Anonymous',
//       rating,
//       content,
//       date: new Date(),
//       helpful: 0,
//     });

//     res.status(201).json(review);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to add review' });
//   }
// });
router.put('/:id', authMiddleware, updateReview);
router.delete('/:id', authMiddleware, deleteReview);

module.exports = router;
