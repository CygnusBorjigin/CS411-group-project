// import frameworks
const express = require('express');
const signin = express.Router();

signin.get('/', (req, res) => {
    res.send("This is for signin");
})

module.exports = signin;