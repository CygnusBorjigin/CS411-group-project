// impoer frameworks
const express = require('express');
const authen = express.Router();


authen.get('/',  (req, res) => {
    res.send('This is the authentication');
});

authen.post("/", (req, res) => {
    
})

module.exports = authen;