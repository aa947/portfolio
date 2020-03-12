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
            loading: true
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



    componentDidMount() {
        this.GetData(this);
        this.interval = setInterval(() => this.GetData(this), 60 * 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {
        let { recovered, deaths, confirmed, source, loading } = this.state;

        const conetent = loading ? (
        
        <div className="spinnerDiv">
            <CircularProgress style={{marginLeft: "40%" }} size={200} thickness={2} />
          </div>
          
          ):(
            <>
            <div className = "currentDetailsWrapper">

            <div className = "currentDetails">
                    {confirmed && <h1 style={{ color: "blue" }} > Confirmed  Cases Globally :  {confirmed} </h1>
    }


            </div>
        </div >

    <div className="currentDetailsWrapper">

        <div className="currentDetails">

            {recovered && <h1 style={{ color: "green" }} >  Recovered Cases :  {recovered} </h1>}


        </div>
    </div>

    <div className="currentDetailsWrapper">

        <div className="currentDetails">

            {deaths && <h1 style={{ color: "red" }} >  Deaths :  {deaths} </h1>}


        </div>
    </div>


    <div className="currentDetailsWrapper">

        <div className="currentDetails" >

            {source && <h6> Source:  {source} , counters are updated every minute. </h6>}


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
            </div>
        </div>
        <Footer />
    </>
)
    }
}

export default CoronaVirus
