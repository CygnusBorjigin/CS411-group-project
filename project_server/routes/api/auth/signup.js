// import frameworks
const express = require('express');
const signup = express.Router();

signup.get('/', (req, res) => {
    res.send('this is for signup');
})

module.exports = signup;