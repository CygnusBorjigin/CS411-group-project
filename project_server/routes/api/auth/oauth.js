const express = require("express");
const cors = require("cors");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));
const bodyParser = require('body-parser');
const configFile = require("../../../../../config.json");
const oauth = express();
oauth.use(cors())
oauth.use(bodyParser.json())

oauth.get('/getAccessToken', async (req, res) => {
    console.log(req)
    const params = `?client_id=${configFile.oauthKey.clientID}&client_secret=${configFile.oauthKey.clientSecret}&code=${req.query.code}`
    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        res.json(data);
    })
})

oauth.get('/getUserData', async (req, res) => {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
})

module.exports = oauth;