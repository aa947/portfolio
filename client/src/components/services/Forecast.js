import React, { Component } from 'react'
import axios from 'axios'
import Skycons from 'react-skycons'
import '../css/forecast.css';
// import '../css/forecast_template.css';
import Dotenv from 'dot-env';
// import Geocode from "react-geocode";
// import  convert from 'xml-js';
 


export default class Forecast extends Component {

    constructor(props) {
        super(props)

        this.state = {
            forecast: '',
            geo: {
                lat: '',
                long: ''
            },
            loading: true

        }

        this.getGeo = this.getGeo.bind(this);
    }


    // GetCurrentAddress = (lat, long) => {


    //     // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    //     Geocode.setApiKey('');

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


    getGeo = (a) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                //console.log('position..', position);
                a.setState({ geo: { lat: position.coords.latitude, long: position.coords.longitude } });

            //    let dataAsJson = {};
            //     fetch(`http://api.geonames.org/findNearestAddress?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=ahmad.ali`)
            //     .then(response => response.text())
            //     .then(str => { console.log('str', str);  
            //         dataAsJson = convert.xml2json(str, {compact: true, spaces: 4});
            //                 })
     
                axios.post('/api/s/forecast', { geo: { lat: position.coords.latitude, long: position.coords.longitude } })
                    .then((res) => { a.setState({ forecast: res.data }) })
                    .then(a.setState({ loading: false }))
            })
        } else {
            alert('Geo location is not Available on your browser')
        }
    }

    componentDidMount() {


        this.getGeo(this);


    }

    componentDidUpdate() {
        console.log('component update ...')

    }

    render() {
        //console.log('state  .. ', this.state);
        let f = this.state.forecast;
        let c = f.currently;
        let t = f.daily;

      

        return (
            <div className="forecast">

<div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Forecast</h6>
                    </div>
                    <div className="card-body">
                    <div id="currentDetailsWrapper">

                    <div id="currentDetails">
                    <div className="uv_index uv0">
        <span style={{ fontSize: "20px"}} className="label swip">Current Location:</span>
        <span className="val swap">
          <span  style={{ fontSize: "20px"}} className="num uv__index__value">{ this.state.forecast && <span> {this.state.forecast.timezone.split('/')[1]}, [ { this.state.geo.lat }, { this.state.geo.long} ] </span>  }</span>
        </span>
      </div>
                    </div></div>
                        
                    <div id="currentDetailsWrapper">
    <img className="gradient-scroll" src="/images/gradient-scroll.png" alt="Gradient" />
    <div id="currentDetails">
      <div className="wind">
        <span className="label swip">Wind:</span>
        <span className="val swap">
          <span className="num swip wind__speed__value">{ f.currently && <span>{ c.windSpeed }</span>  }</span>
          <span className="unit swap">mph</span>
          
          <span className="direction" title="ENE" style={{display:"inline-block","-ms-transform": "rotate(62deg)", "-webkit-transform": "rotate(62deg)", transform:"rotate(62deg)"}}>
          {/* ↑ */}
          </span>
        </span>
      </div>

      <div className="humidity">
        <span className="label swip">Humidity:</span>
        <span className="val swap">
          <span className="num swip humidity__value">{ f.currently && <span>{ c.humidity*100 }</span>  }</span><span className="unit swap">%</span>
        </span>
      </div>

      <div className="dew_point">
        <span className="label swip">Dew Pt:</span>
        <span className="val swap">
          <span className="num dew__point__value">{ f.currently && <span>{ c.dewPoint }</span>  }</span><span className="unit">˚</span>
        </span>
      </div>

      <div className="current_details_break"></div>

      <div className="uv_index uv0">
        <span className="label swip">UV Index:</span>
        <span className="val swap">
          <span className="num uv__index__value">{ f.currently && <span>{ c.uvIndex }</span>  }</span>
        </span>
      </div>

      <div className="visibility">
        
        <span className="label swip">Visibility:</span>
        <span className="val swap">
          <span className="num swip visibility__value">+{ f.currently && <span>{ c.visibility }</span>  }</span>
          <span className="unit swap">mi</span>
        </span>
      </div>

      <div className="pressure">
        <span className="label swip">Pressure:</span>
        <span className="val swap">
          <span className="num swip pressure__value">{ f.currently && <span>{ c.pressure }</span>  }</span>
          <span className="unit swap">hPa</span>
        </span>
      </div>
    </div>
  </div>



<br /> <br/>


<div id="currentDetails">
                    <div className="uv_index uv0">
                <span style={{ display: "inline-block"}} >
                    {f.currently && <Skycons
                    style={{ width: "300px", height: "150px" }}
                    color='black'
                    icon={c.icon.replace(/-/g, '_').toUpperCase()}
                    autoplay={true}
                />}
                </span>
               
                    <h1 > {f.currently &&(<>
                     
                        <span style={{ fontSize: "40px" }}> { Math.floor(c.temperature)} ˚&nbsp; </span>
                        <span style={{ fontSize: "40px" }}> Feels like: </span>
                        <span style={{ fontSize: "40px" }}> { Math.floor(c.apparentTemperature)} ˚&nbsp; </span>
                     </>)} </h1>
               
                
               
                    <h1 > {f.currently &&(<>
                     
                        <span style={{ fontSize: "40px" }}> { c.summary} </span>
                        
                     </>)} </h1>
              

        
      </div>
</div>






<br/> <br />

<div id="currentDetailsWrapper">
<div id="currentDetails">
                                <div className="uv_index uv0">
                                    <span style={{ fontSize: "20px" }} className="label swip"></span>
                                    <span className="val swap">
                                        <span style={{ fontSize: "20px" }} className="num uv__index__value">This Week: </span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Status:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{t.summary}</span>}</span><span className="unit"></span>
                                    </span>
                                </div>

                               


        </div>
    </div>






    <div id="currentDetailsWrapper">
<div id="currentDetails">
                                <div className="uv_index uv0">
                                    <span style={{ fontSize: "20px" }} className="label swip"></span>
                                    <span className="val swap">
                                        <span style={{ fontSize: "20px" }} className="num uv__index__value">Today: </span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Status:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{t.data[0].summary}</span>}</span><span className="unit"></span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip"> Temp. High:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[0].temperatureLow )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Temp. Low:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[0].temperatureHigh )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>


        </div>
    </div>


    <div id="currentDetailsWrapper">
<div id="currentDetails">
                                <div className="uv_index uv0">
                                    <span style={{ fontSize: "20px" }} className="label swip"></span>
                                    <span className="val swap">
                                        <span style={{ fontSize: "20px" }} className="num uv__index__value">Tomorrow: </span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Status:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{t.data[1].summary}</span>}</span><span className="unit"></span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip"> Temp. High:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[1].temperatureLow )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Temp. Low:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[1].temperatureHigh )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>


        </div>
    </div>



    <div id="currentDetailsWrapper">
<div id="currentDetails">
                                <div className="uv_index uv0">
                                    <span style={{ fontSize: "20px" }} className="label swip"></span>
                                    <span className="val swap">
                                        <span style={{ fontSize: "20px" }} className="num uv__index__value">After Tomorrow: </span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Status:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{t.data[2].summary}</span>}</span><span className="unit"></span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip"> Temp. High:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[2].temperatureLow )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>

                                <div className="dew_point">
                                    <span className="label swip">Temp. Low:</span>
                                    <span className="val swap">
                                        <span className="num dew__point__value">{f.daily && <span>{ Math.floor( t.data[2].temperatureHigh )}</span>}</span><span className="unit">˚</span>
                                    </span>
                                </div>


        </div>
    </div>

  {/* end card */}

                    </div>
                </div>
         

<br />
            <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Forecast API Info</h6>
                    </div>
                    <div className="card-body">

                    <p style={{fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> This Service uses Dark Sky API to retrive forecast data depends on your current location. </p> 

                    <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> It gives you detailed information about today, and less detailed information for the next 2 days. </p>

                    <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> You will be asked to give permission for this website to tack your current location, please accept that. </p>
{/* 
                    <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> </p>

                    <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> </p> */}
                    </div>
                </div>
        







         
            </div>
        )
    }
}

