// import frameworks
const express = require('express');
const movies = express.Router();
const cors = require('cors');
const axios = require('axios');
const {response} = require("express");
const configFile = require("../../../../../config.json");
const Twit = require("twit");

movies.use(cors());

movies.get("/", async (req, res) => {
    const result = await movieWithTweets();
    res.send(result);
})

const fetchTweet = async (movieName) => {
    const twitterConfig = configFile.twitterConfig;

    const T = new Twit(twitterConfig);

    const res = await T.get('search/tweets', {q: `${movieName}`, count: 50});
    return res.data.statuses.map(each => {
        return {
            id: each.id,
            text: each.text
        }
    });
}


const movieWithTweets = async () => {
    const config = {
        method: 'post',
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${configFile.movieApiKey}&language=en-US&page=1`,
        headers: configFile.movieAPIHeader
    };

    const movieRes = await axios(config);
    const result = await Promise.all(movieRes.data.results.map(async (each, index) => {
        const tweets = await fetchTweet(each.original_title);
        const eachRes = {
            id: each.id,
            original_title: each.original_title,
            overview: each.overview,
            tweets: tweets
        }
        return eachRes
    }));
    return result
}

module.exports = movies;