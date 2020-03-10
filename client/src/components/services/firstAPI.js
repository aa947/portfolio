import React, { Component } from 'react'
// import axios from 'axios'

export default class firstAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            stocks: []
        }

    }


    componentDidMount(){
       // set endpoint and your access key
    // let endpoint = 'live'
    // let access_key = '2dc501a8766aa41a6aa024831b75a1ca';

// get the most recent exchange rates via the "live" endpoint:
// axios.get("http://api.currencylayer.com/live?access_key=2dc501a8766aa41a6aa024831b75a1ca&currencies=USD,AUD,CAD,PLN,MXN&format=1",
//  { dataType: 'jsonp'})
// .then((res)=>{ 
//     console.log( 'Api RESponse' , res.data);
//     this.setState({quotes: this.state.quotes.push(res.data.quotes.USDAUD)});
// }).catch((err)=>{console.log(err)})


// ({
//     url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key,   
//     dataType: 'jsonp',
//     success: function(json) {

//         // exchange rata data is stored in json.quotes
//         alert(json.quotes.USDGBP);
        
//         // source currency is stored in json.source
//         alert(json.source);
        
//         // timestamp can be accessed in json.timestamp
//         alert(json.timestamp);
        
//     }
// });










fetch('/api/s/stocks').then(res => res.json())
            .then(stocks => this.setState({ stocks: stocks.stock_prices }, () => console.log('stocks fetched...', stocks)));

    }
    
    render() {
        console.log('state stocks .. ', this.state.stocks);
        let stocks = this.state.stocks
        return (
            <div>
                <h1> First API </h1>
                 { stocks.map((s)=>{
                     return (
                         <>
                         <p>adj_close:  { s.adj_close }</p>
                         <p></p>
                         <p></p>
                         <p></p>
                         </>
                     )
                 }) } 
            </div>
        )
    }
}
