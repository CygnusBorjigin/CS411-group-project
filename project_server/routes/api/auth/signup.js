// import frameworks
'use strict';
const express = require('express');
const signup = express.Router();
const {readFileSync, writeFileSync} = require('fs');

signup.get('/', (req, res) => {
    res.send('this is for signup');
});

signup.post('/', async (req, res) => {
    const {name, password} = req.body;
    let userFile = JSON.parse(readFileSync('./routes/api/auth/userInfo.json', 'utf8'));
    if (name in Object.keys(userFile)){
        res.send("user already exist");
        return
    }
    userFile[name] = {
        password: password,
        moviesLiked: [],
        friends: []
    }
    writeFileSync('./routes/api/auth/userInfo.json', JSON.stringify(userFile, null, 2), 'utf8');
    res.send('user registered');

})

module.exports = signup;