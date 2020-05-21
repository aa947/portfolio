import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Services extends Component {
   
    render() {
        return (
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            Featured Projects
                        
                        </h6>
                    </div>
                    <div className="card-body">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/forecast' }}>Weather Forecast </Link> </p>

                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/creditCard' }}>Credit Card Animation </Link> </p>

                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/corona' }}>Corona Virus Live Monitor </Link> </p>

                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/dg-url' }}> dg-url </Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}
