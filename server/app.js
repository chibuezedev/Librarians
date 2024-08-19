"use-strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(logger("dev"));
}

// cors middleware
const { STAGE } = process.env;
const { CLIENT_BASE_URL } = process.env;
const ENV = process.env.NODE_ENV;

const corsOptions = {
  methods: ["PUT", "PATCH", "DELETE", "POST", "GET"],
  exposedHeaders: "Authorization",
  origin: STAGE === "LIVE" && ENV === "production" ? CLIENT_BASE_URL : "*",
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTION") {
    return res.sendStatus(200);
  }
  return next();
});

// mongodb session middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
    store: new MongoStore({ mongoUrl: process.env.MONGO_LOG }),
  })
);
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
