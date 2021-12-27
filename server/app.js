const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const { Article } = require("./routes");

//
const usersRouter = require('./routes/users');
const toDoListRouter = require('./routes/toDoList');

const app = express();
const PORT = 3000;

require('dotenv').config()

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/users', usersRouter);
app.use('/todo', toDoListRouter);

// POST, /create
app.post("/create", Article.articleCreate);

// app.listen
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

module.exports = app;