// import frameworks
const express = require('express');
const {readFileSync} = require("fs");
const signin = express.Router();

signin.get('/', (req, res) => {
    res.send("This is for signin");
});

signin.post('/', (req, res) => {
    const userInfo = req.body;
    let userFile = JSON.parse(readFileSync('./routes/api/auth/userInfo.json', 'utf8'));
    if (Object.keys(userFile).includes(userInfo.name)){
        const storedPassword = userFile[userInfo.name].password;
        if (storedPassword === userInfo.password) {
            res.send(userInfo.name);
        } else {
            res.send("false")
        }
    } else {
        res.send("user does not exist");
    }
})

module.exports = signin;