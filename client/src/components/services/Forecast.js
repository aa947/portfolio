import React, { Component } from 'react'
import axios from 'axios'

export default class Forecast extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            forecast: []
        }

    }


    componentDidMount(){
    

fetch('/api/s/forecast').then(res => res.json())
            .then(forecast => this.setState({ forecast: this.state.forecast.push(forecast) }, () => console.log('forecast fetched...', forecast)));

    }
    
    render() {
        console.log('state forecast .. ', this.state.forecast);
        let forecast = this.state.forecast[0];
        return (
            <div>
                <h1> Forecast </h1>
               <p>{ typeof(this.state.forecast) }</p>
            </div>
        )
    }
}

