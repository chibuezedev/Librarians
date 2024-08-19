const express = require("express");
const router = express.Router();

const {
  allBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.get("/all", allBooks);

router.post("/add", addBook);

router.put("/update/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
