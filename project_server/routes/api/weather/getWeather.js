// import frameworks
const axios = require("axios");
const express = require("express");
const weather = express.Router();
const cors = require("cors");

weather.use(cors());

weather.get("/", async (req, res) => {
    const result = await getWeather();
    res.send(result);
})

const getWeather = async() => {
    const config = {
        method: 'get',
        url: 'https://api.weather.gov/gridpoints/ALY/72,10/forecast',
        headers: { }
    };

    const response = await axios(config);
    let res = []
    response.data.properties.periods.forEach((each, index) => {
       if (index % 2 == 0) {
           res.push({
               time: each.startTime.substring(0, 10),
               temperature: each.temperature,
               condition: each.shortForecast
           })
       }
    });
    return res;
}

module.exports = weather;