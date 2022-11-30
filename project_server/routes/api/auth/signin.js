// import frameworks
const express = require('express');
const {readFileSync} = require("fs");
const signin = express.Router();

signin.get('/', (req, res) => {
    res.send("This is for signin");
});

signin.post('/', (req, res) => {
    const {name, password} = req.body;
    let userFile = JSON.parse(readFileSync('./routes/api/auth/userInfo.json', 'utf8'));
    if (name in Object.keys(userFile) == false){
        res.send("user does not exist");
        return
    }


})

module.exports = signin;