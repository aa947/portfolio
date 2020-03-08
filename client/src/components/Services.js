import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                   <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Services</h6>
                    </div>
                    <div className="card-body">
                        
 <p> <Link to={{pathname: '/api/s/firstAPI' }}> First APi </Link> </p>
 <p> <Link to={{pathname: '/api/s/forecast' }}> Forecast </Link> </p>

                    </div>
                </div>
            </div>
        )
    }
}
