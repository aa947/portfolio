import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';

import './css/intro.css';

class Edu_col extends Component {
    constructor() {
        super();
        this.state = {
            certs: []
        };
    }

    // componentDidMount() {
    //     fetch('/api/certs').then(res => res.json())
    //         .then(certs => this.setState({ certs }));

    // }

    render() {
        return (
            <React.Fragment>

                {/*
<div className="col-lg-4 mb-3 sm-6">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">ReactNative</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">30%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-git-alt fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 */}


                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-node-js fa-6x text-green-300"></i>

                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-react fa-6x text-green-300"></i>

                </div>


                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    {/* <i className="fas fa-database fa-6x text-green-300"></i> */}
                    <img src={process.env.PUBLIC_URL + "/imgs/mongodb.png"} alt="mongodb" width="100vw" />
                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-css3-alt fa-6x text-green-300"></i>
                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fas fa-database fa-6x text-green-300"></i>
                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-js-square fa-6x text-green-300"></i>
                </div>



                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-html5 fa-6x text-green-300"></i>

                </div>


                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-bootstrap fa-6x text-green-300"></i>
                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-git-alt fa-6x text-green-300"></i>
                </div>

                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    {/* <i className="fas fa-database fa-6x text-green-300"></i> */}
                    <img src={process.env.PUBLIC_URL + "/imgs/redux.jpg"} alt="redux" width="100vw" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-php fa-6x text-green-300"></i>
                </div>



            </React.Fragment>
        );

    }
}

export default Edu_col;