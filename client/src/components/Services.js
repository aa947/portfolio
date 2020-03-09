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
                        
                    {/* <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{pathname: '/api/s/firstAPI' }}> First APi </Link> </p> */}
                    <p style={{fontSize: "20px",  marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{pathname: '/api/s/forecast' }}>Weather Forecast </Link> </p>

                   
                    </div>
                    <div className="card-header py-3">
                        <p style={{ fontSize:"0.8rem" }} className="m-0 font-weight-bold text-primary"> ** Active Pages from this site that use APIs to Give you some valuable Data. </p>
                    </div>
                </div>
            </div>
        )
    }
}
