/**
 * Author:    Ahmad Ali
 * Created:   March.2020
 * File: Scrapper for https://ahmad-ali.co.uk/services/corona
 * 
 * (c) Copyright by Ahmad Ali.
 **/

const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://www.worldometers.info/coronavirus/";

let siteName = "";
const numbers = [];

const fetchData = async (siteUrl) => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async (siteUrl) => {
  const $ = await fetchData(siteUrl);
  numbers.length=0;
  siteName = $('div.navbar > div.container > div.navbar-header > div.logo > a.navbar-brand > img').attr('title');

  
  

  $(" div.maincounter-number ").each((index, element) => {
    numbers.push($(element).text());
  });


  
  return {
   
    numbers: numbers,
    siteName
  };
};

module.exports = getResults;
