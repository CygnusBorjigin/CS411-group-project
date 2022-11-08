// import frameworks
const express = require('express');
const movies = express.Router();
const cors = require('cors');
const axios = require('axios');
const {response} = require("express");
const configFile = require("../../../config.json");

movies.use(cors());

movies.get("/", (req, res) => {
    const config = {
        method: 'post',
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${configFile.movieApiKey}&language=en-US&page=1`,
        headers: {
            'X-RapidAPI-Key': 'c4eb1b0c40msh6357472b3c67f26p1eceddjsn879814040bef',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };

    axios(config)
        .then(function (response) {
            const movieRes = response.data;
            const cleaned = movieRes.results.map(each => {
                return {
                    id: each.id,
                    backdrop_path: each.backdrop_path,
                    original_title: each.original_title,
                    overview: each.overview,
                    release_date: each.release_date
                }
            });
            res.json(cleaned);
        })
        .catch(function (error) {
            console.log(error);
        });

})

module.exports = movies;