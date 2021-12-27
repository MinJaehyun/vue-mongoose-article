const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const { Article } = require("./routes");

const app = express();
const PORT = 3000;

require('dotenv').config()

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// POST, /create
app.post("/create", Article.articleCreate);

// GET, /detail (세부)
app.get("/detail/:id", Article.articleDetail);

// POST, /update
app.patch("/update", Article.articleUpdate);

// GET, /read (전체)
app.get("/read", Article.articleRead);

// POST, /delete/:id
app.delete("/delete/:id", Article.articleDelete);

// app.listen
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

module.exports = app;
