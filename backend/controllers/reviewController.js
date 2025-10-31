const db = require('../config/db');

// Get all reviews for a book
exports.getReviewsByBook = (req, res) => {
  const { bookId } = req.params;
  db.query(
    `SELECT r.id, r.rating, r.comment, r.created_at, u.name as reviewer
     FROM reviews r JOIN users u ON r.user_id = u.id
     WHERE r.book_id = ?
     ORDER BY r.created_at DESC`,
    [bookId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
// Get all reviews by the logged-in user
exports.getReviewsByUser = (req, res) => {
  const userId = req.userId;

  const query = `
    SELECT r.id, r.book_id, r.rating, r.comment, r.created_at
    FROM reviews r
    WHERE r.user_id = ?
    ORDER BY r.created_at DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add review
exports.addReview = (req, res) => {
  const { bookId } = req.params;
  const userId = req.userId;
  const { rating, comment } = req.body;

  db.query(
    'INSERT INTO reviews (user_id, book_id, rating, comment) VALUES (?, ?, ?, ?)',
    [userId, bookId, rating, comment],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Review added successfully', reviewId: result.insertId });
    }
  );
};

// Update review
exports.updateReview = (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const { rating, comment } = req.body;

  // Ensure user owns the review
  db.query('SELECT * FROM reviews WHERE id=? AND user_id=?', [id, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(403).json({ error: 'Not authorized' });

    db.query('UPDATE reviews SET rating=?, comment=? WHERE id=?', [rating, comment, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Review updated successfully' });
    });
  });
};

// Delete review
exports.deleteReview = (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  db.query('SELECT * FROM reviews WHERE id=? AND user_id=?', [id, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(403).json({ error: 'Not authorized' });

    db.query('DELETE FROM reviews WHERE id=?', [id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Review deleted successfully' });
    });
  });
};
