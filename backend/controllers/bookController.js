const db = require('../config/db');
// const fetch = require("node-fetch");
// Get all books
exports.getAllBooks = (req, res) => {
  db.query('SELECT * FROM books ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get a single book by ID
exports.getBookById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Book not found' });
    res.json(results[0]);
  });
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author, description, cover_url } = req.body;
  db.query('INSERT INTO books (title, author, description, cover_url) VALUES (?, ?, ?, ?)',
    [title, author, description, cover_url], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Book added successfully', bookId: result.insertId });
    });
};

// Update book
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, description, cover_url } = req.body;
  db.query('UPDATE books SET title=?, author=?, description=?, cover_url=? WHERE id=?',
    [title, author, description, cover_url, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Book updated successfully' });
    });
};

// Delete book
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM books WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Book deleted successfully' });
  });
};
// Fetch books from Google Books API
// exports.searchbook("/search", async (req, res) => {
//   const query = req.query.q || "education"; // default search term
//   try {
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//     const data = await response.json();

//     // Simplify response
//     const books = data.items?.map((item) => ({
//       id: item.id,
//       title: item.volumeInfo.title,
//       authors: item.volumeInfo.authors || ["Unknown"],
//       description: item.volumeInfo.description || "No description available",
//       thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
//       publishedDate: item.volumeInfo.publishedDate || "Unknown",
//     })) || [];

//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch books" });
//   }
// });
exports.addReview = async (bookId, reviewData) => {
  const book = await Book.findById(bookId);
  if (!book) throw new Error('Book not found');

  // Add new review
  book.reviews.push(reviewData);

  // Update rating and review count
  book.reviewCount = book.reviews.length;
  book.rating =
    book.reviews.reduce((acc, r) => acc + r.rating, 0) / book.reviewCount;

  await book.save();
  return reviewData;
};