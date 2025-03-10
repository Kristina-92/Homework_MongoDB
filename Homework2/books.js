const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
  releaseYear: Number,
  pages: Number,
  genre: String,
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model("Book", booksSchema, "books");

module.exports = Book;
