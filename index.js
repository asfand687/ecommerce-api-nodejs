const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const dbConnection = require('./config/dbConnection');

dbConnection()


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send(`Welcome to the Home Route! Running on PORT:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});