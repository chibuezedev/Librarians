const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    availableCopies: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
