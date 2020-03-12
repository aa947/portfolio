const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://www.worldometers.info/coronavirus/";

let siteName = "";
const numbers = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();

  siteName = $('div.navbar > div.container > div.navbar-header > div.logo > a.navbar-brand > img').attr('title');

  

  $(" div.maincounter-number ").each((index, element) => {
    numbers.add($(element).text());
  });


  
  return {
   
    numbers: [...numbers],
    siteName
  };
};

module.exports = getResults;
