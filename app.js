const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js')

const { PORT = 3000} = process.env;

const app = express();

/*app.use('/users', (req, res) => {
    console.log('hello,  username')
    res.status(200).send('all ok')
})

app.use('/users/:id', (req, res) => {
    const id = req.params.id
})

app.use('/', (req, res) => {
    res.status(200).send('all ok')
})

app.use('/', (req, res) => {
    res.status(200).send('all ok')
})

//mongoose.connect('mongodb://localhost:27017/mestodb'); */

app.listen(3000, () => {
console.log('sunny bunny')});