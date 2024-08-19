const express = require("express");
const router = express.Router();

const AuthControllers = require("../controllers/auth");

router.post("/register", AuthControllers.register);

router.post("/login", AuthControllers.login);

module.exports = router;
