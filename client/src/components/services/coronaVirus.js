import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../Footer';
import '../css/coronaVirus.css';
import CircularProgress from '@material-ui/core/CircularProgress';





export class CoronaVirus extends Component {

    constructor(props) {
        super(props)

        this.state = {
            source: '',
            recovered: '',
            deaths: '',
            deaths: '',
            loading: true,
            uk: {
                source: '',
                recovered: '',
                deaths: '',
                deaths: '',
                ukLoading: true
            },
            spain: {
                source: '',
                recovered: '',
                deaths: '',
                deaths: '',
                spainLoading: true
            },
            italy: {
                source: '',
                recovered: '',
                deaths: '',
                deaths: '',
                italyLoading: true
            }
        }
    }

    GetData = (b) => {
        axios.get('/api/s/corona')
            //.then((res)=> res.json())
            .then((res) => {
                console.log('data....', res.data);
                let data = res.data;
                b.setState({
                    source: data.source,
                    recovered: data.recovered,
                    confirmed: data.confirmed,
                    deaths: data.deaths,
                    loading: false
                })
            })
    };


    GetUKData = (b) => {
        axios.get('/api/s/corona/uk')
            //.then((res)=> res.json())
            .then((res) => {
                console.log('uk data....', res.data);
                let data = res.data;
                b.setState({uk: {
                    source: data.source,
                    recovered: data.recovered,
                    confirmed: data.confirmed,
                    deaths: data.deaths,
                    ukLoading: false
                }})
            })
    };

    GetSpainData = (b) => {
        axios.get('/api/s/corona/spain')
            //.then((res)=> res.json())
            .then((res) => {
                console.log('spain data....', res.data);
                let data = res.data;
                b.setState({spain: {
                    source: data.source,
                    recovered: data.recovered,
                    confirmed: data.confirmed,
                    deaths: data.deaths,
                    spainLoading: false
                }})
            })
    };

    GetItalyData = (b) => {
        axios.get('/api/s/corona/italy')
            //.then((res)=> res.json())
            .then((res) => {
                console.log('italy data....', res.data);
                let data = res.data;
                b.setState({italy: {
                    source: data.source,
                    recovered: data.recovered,
                    confirmed: data.confirmed,
                    deaths: data.deaths,
                    italyLoading: false
                }})
            })
    };


    componentDidMount() {
        this.GetData(this);
        this.interval = setInterval(() => this.GetData(this), 60 * 1000);

        this.GetUKData(this);
        this.ukinterval = setInterval(() => this.GetUKData(this), 60 * 1000);

        this.GetSpainData(this);
        this.spaininterval = setInterval(() => this.GetSpainData(this), 60 * 1000);

        this.GetItalyData(this);
        this.italyinterval = setInterval(() => this.GetItalyData(this), 60 * 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.ukinterval);
        clearInterval(this.spaininterval);
        clearInterval(this.italyinterval);

    }



    render() {
        let { recovered, deaths, confirmed, source, loading, uk, italy, spain } = this.state;

        const conetent = loading ? (
        
        <div className="spinnerDiv">
            <CircularProgress style={{marginLeft: "40%" }} size={200} thickness={2} />
          </div>
          
          ):(
            <>
            <div className = "currentDetailsWrapper">

            <div className = "currentDetails">
                    {confirmed && <h2 style={{ color: "#555" }} > Confirmed  Cases Globally :    <span style={{ color: "blue", fontSize:"25px" }}> {confirmed} </span> </h2>
    }


            </div>
        </div >

    <div className="currentDetailsWrapper">

        <div className="currentDetails">

            {recovered && <h2 style={{ color: "#555" }} >  Recovered Cases :  <span style={{ color: "green", fontSize:"25px" }}> {recovered} </span> </h2>}


        </div>
    </div>

    <div className="currentDetailsWrapper">

        <div className="currentDetails">

            {deaths && <h2 style={{ color: "#555" }} >  Deaths :  <span style={{ color: "red", fontSize:"25px" }}> {deaths}  </span> </h2>}


        </div>
    </div>


    <div className="currentDetailsWrapper">

        <div className="currentDetails" >

            {source && <h6> Source:  {source} , counters are updated every minute. </h6>}


        </div>
    </div>

        </>
        )


        const ukconetent = uk.ukLoading ? (
        
            <div className="spinnerDiv">
                <CircularProgress style={{marginLeft: "40%" }} size={200} thickness={2} />
              </div>
              
              ):(
                <>
                <div className = "currentDetailsWrapper">
    
                <div className = "currentDetails">
                        {uk.confirmed && <h2 style={{ color: "#555" }} > Confirmed  Cases In the UK : <span style={{ color: "blue", fontSize:"25px" }}> {uk.confirmed} </span> </h2>
        }
    
    
                </div>
            </div >
    
        <div className="currentDetailsWrapper">
    
            <div className="currentDetails">
    
                {uk.recovered && <h2 style={{ color: "#555" }} >  Recovered Cases : <span style={{ color: "green", fontSize:"25px" }}> {uk.recovered} </span> </h2>}
    
            </div>
        </div>
    
        <div className="currentDetailsWrapper">
    
            <div className="currentDetails">
    
                {uk.deaths && <h2 style={{ color: "#555" }} >  Deaths : <span style={{ color: 'red', fontSize: "25px" }}> {uk.deaths} </span> </h2>}
    
    
            </div>
        </div>
    
    
        <div className="currentDetailsWrapper">
    
            <div className="currentDetails" >
    
                {uk.source && <h6> Source:  {uk.source} , counters are updated every minute. </h6>}
    
    
            </div>
        </div>
    
            </>
            )
    

///////////////////////////////////////////////////////////////////////////

            const spainConetent = spain.spainLoading ? (
        
                <div className="spinnerDiv">
                    <CircularProgress style={{marginLeft: "40%" }} size={200} thickness={2} />
                  </div>
                  
                  ):(
                    <>
                    <div className = "currentDetailsWrapper">
        
                    <div className = "currentDetails">
                            {spain.confirmed && <h2 style={{ color: "#555" }} > Confirmed  Cases In the Spain : <span style={{ color: "blue", fontSize:"25px" }}> {spain.confirmed} </span> </h2>
            }
        
        
                    </div>
                </div >
        
            <div className="currentDetailsWrapper">
        
                <div className="currentDetails">
        
                    {spain.recovered && <h2 style={{ color: "#555" }} >  Recovered Cases : <span style={{ color: "green", fontSize:"25px" }}> {spain.recovered} </span> </h2>}
        
                </div>
            </div>
        
            <div className="currentDetailsWrapper">
        
                <div className="currentDetails">
        
                    {spain.deaths && <h2 style={{ color: "#555" }} >  Deaths : <span style={{ color: 'red', fontSize: "25px" }}> {spain.deaths} </span> </h2>}
        
        
                </div>
            </div>
        
        
            <div className="currentDetailsWrapper">
        
                <div className="currentDetails" >
        
                    {spain.source && <h6> Source:  {source} , counters are updated every minute. </h6>}
        
        
                </div>
            </div>
        
                </>
                )
    
                

                const italyconetent = italy.italyLoading ? (
        
                    <div className="spinnerDiv">
                        <CircularProgress style={{marginLeft: "40%" }} size={200} thickness={2} />
                      </div>
                      
                      ):(
                        <>
                        <div className = "currentDetailsWrapper">
            
                        <div className = "currentDetails">
                                {italy.confirmed && <h2 style={{ color: "#555" }} > Confirmed  Cases In the Italy : <span style={{ color: "blue", fontSize:"25px" }}> {italy.confirmed} </span> </h2>
                }
            
            
                        </div>
                    </div >
            
                <div className="currentDetailsWrapper">
            
                    <div className="currentDetails">
            
                        {italy.recovered && <h2 style={{ color: "#555" }} >  Recovered Cases : <span style={{ color: "green", fontSize:"25px" }}> {italy.recovered} </span> </h2>}
            
                    </div>
                </div>
            
                <div className="currentDetailsWrapper">
            
                    <div className="currentDetails">
            
                        {italy.deaths && <h2 style={{ color: "#555" }} >  Deaths : <span style={{ color: 'red', fontSize: "25px" }}> {italy.deaths} </span> </h2>}
            
            
                    </div>
                </div>
            
            
                <div className="currentDetailsWrapper">
            
                    <div className="currentDetails" >
            
                        {italy.source && <h6> Source:  {italy.source} , counters are updated every minute. </h6>}
            
            
                    </div>
                </div>
            
                    </>
                    )
            





return (
    <>

        <div className="row">
            <div className="col-lg-12 mb-12">

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Corona Virus Numbers Update</h6>
                    </div>
                    <div className="card-body">




                        { conetent }



                    </div>
                </div>


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Corona Virus United Kingdom <img src="https://dl.dropbox.com/s/tah8h6kgt0q04f5/uk_flag.gif?dl=0" width="40px" /></h6>
                    </div>
                    <div className="card-body">




                        { ukconetent }



                    </div>
                </div>



                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Corona Virus Spain <img src="https://dl.dropbox.com/s/1dha7r6qrvd3ow7/spain.gif?dl=0" width="40px" /></h6>
                    </div>
                    <div className="card-body">




                        { spainConetent }



                    </div>
                </div>



                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Corona Virus Italy <img src="https://dl.dropbox.com/s/pzcoeu6tfdlq3hy/italy.gif?dl=0" width="40px" /></h6>
                    </div>
                    <div className="card-body">




                        { italyconetent }



                    </div>
                </div>




            </div>
        </div>
        <Footer />
    </>
)
    }
}

export default CoronaVirus
