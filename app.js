const express = require('express');
const app = express();
var bodyParser = require("body-parser");

const admin = require('./routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', admin);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It Works!'
    });
});

module.exports = app;