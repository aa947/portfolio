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
                        <div className="row">

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href="https://www.ahmad-ali.co.uk/projects/5e2daeeaa8c12f9e0d60f35c"> Roye Interiors LTD </a> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href ="https://www.ahmad-ali.co.uk/projects/5ebd91cd4ca526208ccdd56e"> Hex Luxury LTD </a> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href ="https://cyf-tv-show-react-hooks.netlify.app/" target="_blank"> Tv shows React challenge </a> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href ="https://tfl-react-challenge.netlify.app/" target="blank"> TFL React challenge </a> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href="https://www.ahmad-ali.co.uk/projects/5ec6cf158c2df5825b4922a4">Prfl 20 </a> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <a href="https://www.ahmad-ali.co.uk/projects/5ec6d37f8c2df5825b4922a6"> Video Subtitles Editor </a> </p>
                        </div>




                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/forecast' }}>Weather Forecast </Link> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/creditCard' }}>Credit Card Animation </Link> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/corona' }}>Corona Virus Live Monitor </Link> </p>
                        </div>

                        <div className="col-12 col-md-6">
                        <p style={{ fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> <Link to={{ pathname: '/services/dg-url' }}> dg-url </Link> </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
