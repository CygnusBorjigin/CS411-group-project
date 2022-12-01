const Twit = require('twit');
const configFile = require("../../../config.json");

export const fetchTweet = async (movieName) => {
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
