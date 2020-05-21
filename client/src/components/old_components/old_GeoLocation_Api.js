
    // GetCurrentAddress = (lat, long) => {


    //     // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    //     Geocode.setApiKey('AIzaSyArxJIXt3GBq2nO2opV2uQyJJtnyBOTxE0');

    //     // set response language. Defaults to english.
    //     Geocode.setLanguage("en");

    //     // set response region. Its optional.
    //     // A Geocoding request with region=es (Spain) will return the Spanish city.
    //     //Geocode.setRegion("es");

    //     // Enable or disable logs. Its optional.
    //     Geocode.enableDebug();

    //     // Get address from latidude & longitude.
    //     Geocode.fromLatLng(long, lat, 'AIzaSyArxJIXt3GBq2nO2opV2uQyJJtnyBOTxE0').then(
    //         response => {
    //             const address = response.results[0].formatted_address;
    //             console.log('Address', address);
    //         },
    //         error => {
    //             console.error(error);
    //         }
    //     );

        // Get latidude & longitude from address.
        // Geocode.fromAddress("Eiffel Tower").then(
        //   response => {
        //     const { lat, lng } = response.results[0].geometry.location;
        //     console.log(lat, lng);
        //   },
        //   error => {
        //     console.error(error);
        //   }
        // );

    // }

    // Getaddress= (lat, long) =>{
    //     fetch(`http://api.geonames.org/findNearestAddress?lat=${lat}&lng=${long}&username=ahmad.ali`)
    // }














  //    let dataAsJson = {};
                //     fetch(`http://api.geonames.org/findNearestAddress?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=ahmad.ali`)
                //     .then(response => response.text())
                //     .then(str => { console.log('str', str);  
                //         dataAsJson = convert.xml2json(str, {compact: true, spaces: 4});
                //                 })