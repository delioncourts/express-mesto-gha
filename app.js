const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/users'));

app.listen(PORT, () => {
  console.log('server is set');
});
