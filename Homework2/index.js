const mongoose = require("mongoose");

const Book = require("./books");

const URI =
  "mongodb+srv://<user>:<password>@cluster0.je1al.mongodb.net/semos?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

async function createNewBook1() {
  try {
    const book = new Book({
      title: "Robinson Crusoe",
      author: "Daniel Defoe",
      releaseYear: 1719,
      pages: 320,
      genre: "Novel",
    });
    await book.save();
    console.log("Book created:", book);
  } catch (err) {
    console.log(err);
  }
}

// createNewBook1();

async function createNewBook2() {
  try {
    const book = new Book({
      title: "The Alchemist",
      author: "Paulo Coelho",
      releaseYear: 1988,
      pages: 208,
      genre: "Adventure fiction",
    });
    await book.save();
    console.log("Book created:", book);
  } catch (err) {
    console.log(err);
  }
}

// createNewBook2();

async function createNewBook3() {
  try {
    const book = new Book({
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      releaseYear: 1960,
      pages: 281,
      genre: "Gothic novel",
    });
    book.save();
    console.log("Book created:", book);
  } catch (err) {
    console.log(err);
  }
}

// createNewBook3();

async function findBooks() {
  const bookList = await Book.find();
  console.log("Book list:", bookList);
}

// findBooks();

async function findBooksReleasedAfter1900() {
  try {
    const booksRealeasedAfter1900 = await Book.find({
      releaseYear: { $gt: 1900 },
    });
    console.log("Books released after 1900:", booksRealeasedAfter1900);
  } catch (err) {
    console.log(err);
  }
}

// findBooksReleasedAfter1900();

async function findTheStranger() {
  try {
    const theStranger = await Book.find({ title: { $in: ["The Stranger"] } });
    console.log("Info about the book 'The Stranger':", theStranger);
  } catch (err) {
    console.log(err);
  }
}

// findTheStranger();

async function findBooksWithGenreSpecified() {
  try {
    const booksWithGenre = await Book.find({
      genre: { $exists: true },
    });
    console.log("Books that have genre:", booksWithGenre);
  } catch (err) {
    console.log(err);
  }
}

// findBooksWithGenreSpecified();

async function sortDescendingByReleaseYear() {
  try {
    const sortBooksByReleaseYearDescending = await Book.find().sort({
      releaseYear: -1,
    });
    console.log(
      "Books sorted in descending order by release year:",
      sortBooksByReleaseYearDescending
    );
  } catch (err) {
    console.log(err);
  }
}

// sortDescendingByReleaseYear();

async function updateGenre() {
  try {
    const updateGenreInHarryPotterBook = await Book.updateOne(
      { title: "Harry Potter and the Goblet of Fire" },
      { $set: { genre: "Fantasy fiction" } }
    );
    console.log(
      "Harry Potter and the Goblet of Fire with updated genre:",
      updateGenreInHarryPotterBook
    );
  } catch (err) {
    console.log(err);
  }
}

// updateGenre();

async function updateBooksWithGenre() {
  try {
    const updatedBooksWithGenre = await Book.updateMany(
      { genre: { $exists: true } },
      { $set: { isAvailable: false } }
    );
    console.log("Available books:", updatedBooksWithGenre);
    console.log(`${updatedBooksWithGenre.modifiedCount} books were updated.`);
  } catch (err) {
    console.log(err);
  }
}

// updateBooksWithGenre();

async function createBook4() {
  try {
    const book = new Book({
      title: "Captain Singleton",
      author: "Daniel Defoe",
      releaseYear: 1720,
      pages: 306,
      genre: "Adventure fiction",
      isAvailable: false,
    });
    book.save();
    console.log("Book created:", book);
  } catch (err) {
    console.log(err);
  }
}

// createBook4();

async function updateBooksByAuthor() {
  try {
    const updatedBooks = await Book.updateMany(
      { author: "Daniel Defoe" },
      { $set: { isAvailable: true } }
    );
    console.log(
      "Updated availability of books written by Daniel Defoe:",
      updatedBooks
    );
  } catch (err) {
    console.log(err);
  }
}

// updateBooksByAuthor();

async function findAndDeleteOldestBook() {
  try {
    const oldestBook = await Book.find().sort({ releaseYear: 1 }).limit(1);
    console.log("Oldest book:", oldestBook);
    const deleteOldestBook = await Book.deleteOne({ _id: oldestBook[0]._id });
    console.log(" Deleted oldest book:", deleteOldestBook);
  } catch (err) {
    console.log(err);
  }
}

// findAndDeleteOldestBook();
