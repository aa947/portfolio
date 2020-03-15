var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var convert = require('xml-js');
const getResults = require("../src/CoronaScrapper");
const getUKResult = require("../src/uk_corona_scrapper");



/*
* sTocks. 
*/
router.get('/stocks', function (req, res, next) {
  var intrinioSDK = require('intrinio-sdk');
  intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "Ojk2ZTI5NTNmMjU5M2JkNjhjODk0MTEwZjU2ZTJlNWU4";

  var securityAPI = new intrinioSDK.SecurityApi();

  var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

  var opts = {
    'startDate': new Date("2020-03-06"), // Date | Return prices on or after the date
    'endDate': new Date("2020-03-07"), // Date | Return prices on or before the date
    'frequency': "daily", // String | Return stock prices in the given frequency
    'pageSize': 100, // Number | The number of results to return
    'nextPage': null // String | Gets the next page of data from a previous API call
  };

  securityAPI.getSecurityStockPrices(identifier, opts).then(function (data) {
    console.log(data);
    res.json(data);
  }, function (error) {
    console.error(error);
  });

});




// /*
// * Forecast met -Office
// */
// router.get('/forecast', function (req, res, next) { 
//   let APIkey = 'f41970e1-c7a5-4110-9057-c0023ace4e16';
//   let resource= 'val/wxfcs/all/xml/3840?res=3hourly'
//   let url = "http://datapoint.metoffice.gov.uk/public/data/"+resource+"&key="+APIkey;

//   let dataAsJson = {};
//   // fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/xml/3840?res=3hourly&key=f41970e1-c7a5-4110-9057-c0023ace4e16')
//   fetch(url)
//   .then(response => response.text())
//   .then(str => { console.log('str', str);  
//                   dataAsJson = convert.xml2json(str, {compact: true, spaces: 4});
//                  })
//   .then(() => { res.send(dataAsJson)  });



// });


router.post('/forecast', (req, res)=>{
  console.log(req.body);
  let long = req.body.geo.long;
  let lat = req.body.geo.lat;


fetch(`https://api.darksky.net/forecast/32a9ba97f5b4e020604d55e29b3056e2/${lat},${long}?units=uk2`)
  .then(rees => rees.json())
  .then(data => res.json(data));
  
});


router.post('/forecast_change', (req, res)=>{
  console.log(req.body);
  let city = req.body.city;


// fetch("https://www.mapquestapi.com/geocoding/v1/address?key=4aHQ0ttL4o2eZAysY1RkyxVLjO41PT3D&inFormat=kvp&outFormat=json&location=london&thumbMaps=false")
fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=4aHQ0ttL4o2eZAysY1RkyxVLjO41PT3D&location=${city}`)
  .then(rees => { return rees.json()} )
   .then(data => { return res.json(data.results);});
  
});


router.get('/corona', async (req, res)=>{
  const result = await getResults("https://www.worldometers.info/coronavirus/");
    res.json({
      source: result.siteName,
      confirmed: result.numbers[0],
      recovered: result.numbers[2],
      deaths: result.numbers[1]
    })
});


router.get('/corona/uk', async (req, res)=>{
  const result = await getUKResult();
    res.json({
      source: result.siteName,
      confirmed: result.numbers[0],
      recovered: result.numbers[2],
      deaths: result.numbers[1]
    })
});

router.get('/corona/spain', async (req, res)=>{
  const result = await getResults("https://www.worldometers.info/coronavirus/country/spain/");
    res.json({
      source: result.siteName,
      confirmed: result.numbers[0],
      recovered: result.numbers[2],
      deaths: result.numbers[1]
    })
});

router.get('/corona/italy', async (req, res)=>{
  const result = await getResults("https://www.worldometers.info/coronavirus/country/italy/");
    res.json({
      source: result.siteName,
      confirmed: result.numbers[0],
      recovered: result.numbers[2],
      deaths: result.numbers[1]
    })
});


module.exports = router;