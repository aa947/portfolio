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

        };
    }

    componentDidMount() {

    }

    render() {
        return (
                <div className="col-lg-6 mb-4">

                {/* <!-- Illustrations --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Education</h6>
                    </div>
                    <div className="card-body">
                        <p> <i class="fas fa-chevron-right"></i>   2011 - 2016: </p>
                        <p> Damascus Univercity - Degree Of Pharmacy  - Syria </p>
                        <p><i class="fas fa-chevron-right"></i>   2018 - ongoing</p>
                        <p> Kiron Open Hier Education - Assossiate Degree in Computer Science - Germany </p>
                    </div>
                </div>

                {/* <!-- Approach --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary"> Certificates </h6>
                    </div>
                    <div className="card-body">
                        <ul type="none">
                            <p><li><i class="fas fa-chevron-right"></i> Full Stack - FreeCodeCamp </li></p>
                            <li><i class="fas fa-chevron-right"></i> Express - HongKong Univercity (coursera) </li>
                            <li><i class="fas fa-chevron-right"></i> PHP stack - Univercity of Mitchigan (coursera) </li>
                            <li><i class="fas fa-chevron-right"></i> CS50 - Harvard Univercity (EDX) </li>
                            <li><i class="fas fa-chevron-right"></i> Front End Specilaization - Univercity of Mitchigan (coursera </li>
                            <li><i class="fas fa-chevron-right"></i> Mathematical thinking in comuter science </li>
                            <li><i class="fas fa-chevron-right"></i> Computer Science 101 - Stranford Univercity (online)</li>
                            <li><i class="fas fa-chevron-right"></i> HTML, CSS, and Javascript for Web Developers - Johns Hopkins University (coursera)</li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Project Card Example --> */}
    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Main Skills</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">MongoDB <span className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Express JS <span className="float-right">70%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">React JS <span className="float-right">30%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Node JS <span className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">PHP <span className="float-right">50%</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

<br />
                        <div className="row">
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


                    </div>
                    </div>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Publications</h6>
                    </div>
                    <div className="card-body">
                        <p> Site Views Counter Toturial - Medium</p>
                        <p> Promises or Callbacks - Dev </p>
                        <p> connect to Your MongoDb Atlas - Dev </p>

                    </div>
                </div>
                {/* <!-- end column --> */}
            </div>

      );
    }
}

export default Edu_col;