import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';

import './css/intro.css';

class Project_col extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col-lg-6 mb-4">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Prpjects</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {/* <!-- start project row --> */}
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                    <div className="card-body">
                                        Issue Tracker
                      <div className="text-white-50 small">Express-Mongo</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                    <div className="card-body">
                                        Personal Libraray
                      <div className="text-white-50 small">Express-Mongo</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        Roye Interiors
                      <div className="text-white-50 small">PHP</div>
                                    </div>
                                </div>
                            </div>




                            {/* empty Devs for the design purpose */}
                            <div className="col-lg-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Express-Mongo</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">Issue Tracker</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fab fa-node-js fa-2x text-green-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">CSS</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">Benzen Ring</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fab fa-node-js fa-2x text-green-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* hey */}
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>



                            {/* <!-- end project row --> */}
                        </div>

                    </div>
                </div>
            </div>



        );
    }
}

export default Project_col;
