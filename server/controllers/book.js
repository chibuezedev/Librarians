const Book = require("../models/Book");

const allBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const addBook = async (req, res) => {
  const { title, author, publishedDate, genre, availableCopies } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      publishedDate,
      genre,
      availableCopies,
    });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: "Book removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  allBooks,
  addBook,
  deleteBook,
  updateBook,
};
