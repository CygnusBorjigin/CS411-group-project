var Twit = require('twit');
const configFile = require("../../../config.json");

const fetchTweet = async (movieName) => {
    const twitterConfig = configFile.twitterConfig;

    const T = new Twit(twitterConfig);

    let res = [];

    res = await T.get('search/tweets', {q: `${movieName}`, count: 10});
    return res.data.statuses.map(each => {
        return {
            id: each.id,
            text: each.text
        }
    });
}

module.exports = fetchTweet()