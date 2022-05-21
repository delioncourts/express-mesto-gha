const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
console.log('server is set')});