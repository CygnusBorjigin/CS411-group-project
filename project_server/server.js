// import frameworks
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = (...args)=>
    import('node-fetch').then(({default:fetch}) => fetch(...args)); 
var bodyParser = require('body-parser');
const CLIENT_ID = "efce7bffbbdda4faaedd";
const CLIENT_SECRET = "10b1a0d289d23da0ae3ff28fc5b4b3c4ab2627e5";

app.use(cors());
app.use(bodyParser.json());

//code being passed from front end
app.get('/getAccessToken', async function (req, res){
    req.query.code;
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET+ "&code=" + req.query.code;
    await fetch("https://github.com/login/oauth/access_token" + params,{
        method: "POST",
        headers: {
            "Accept" : "application/json"
        }
    }).then((response) =>{
        return response.json();
    }).then((data) => {
        res.json(data);
    });
});

//get user data
app.get('/getUserData', async function(req, res){
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization" : req.get("Authorization")
        }
    }).then((response) =>{
        return response.json();
    }).then((data) => {
        res.json(data);
    });
})

// Make sure the server is runing
app.get('/', (req, res) => {
    res.send('The server is working');
});

app.use(express.json());

// connect to the top level
app.use('/api/auth', require('./routes/api/auth/gateway.js'));
app.use('/api/movielist', require("./routes/api/movie/currentMovie.js"));
app.use("/api/weather", require("./routes/api/weather/getWeather"));

// initialize and start the server
const PORT = 3030;
app.listen(PORT, () => console.log('Server is started on port 3030'));
