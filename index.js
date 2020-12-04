require("dotenv").config()
const axios = require("axios")

const GIPHY_API_BASE_URL = "http://www.omdbapi.com/?i=";
const SEARCH_KEYWORD = "tt3896198";

axios
    .get(
        `${GIPHY_API_BASE_URL}${SEARCH_KEYWORD}/&apikey=${process.env.GIPHY_API_KEY}
    `
    )
    .then((res) => {
        const movie = res.data.data;
        movie.map((gif) => {
            console.log(poster.url);
        });
    });