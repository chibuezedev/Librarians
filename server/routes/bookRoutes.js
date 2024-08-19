const express = require("express");
const router = express.Router();

const BookControllers = require("../controllers/auth");

router.get("/all", BookControllers.allBooks);

router.post("/add", BookControllers.addBook);

router.put("/update/:id", BookControllers.updateBook);

router.delete("/:id", BookControllers.deleteBook);

module.exports = router;
