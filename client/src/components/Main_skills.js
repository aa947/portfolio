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

    componentDidMount() {
        fetch('/api/certs').then(res => res.json())
            .then(certs => this.setState({ certs }, () => console.log('Customers fetched...', certs)));

    }

    render() {
        return (
            <React.Fragment>

                {/* skill Card */}
                <div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Express</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-node-js fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skill Card */}
                <div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">React</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-react fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">MongoDB</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">NodeJs</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-node-js fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">JavaScript</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">90%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-js-square fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">CSS</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">30%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-css3-alt fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">HTML</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-code fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">PHP</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-php fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Bootstrap</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-bootstrap fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Git</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
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



{/* skill Card */}
<div className="col-lg-4 mb-3">
                    <div className="card border shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">mySQL</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-1.5x text-green-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



               
            </React.Fragment>
        );

    }
}

export default Edu_col;