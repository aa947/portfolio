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
                        <p> 2011 - 2016: </p>
                        <p> Damascus Univercity - Degree Of Pharmacy  - Syria </p>
                        <p>2018 - ongoing</p>
                        <p> Kiron Open Hier Education - Assossiate Degree in Computer Science - Germany </p>
                    </div>
                </div>

                {/* <!-- Approach --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary"> Certificates </h6>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li> Full Stack - FreeCodeCamp </li>
                            <li> Express - HongKong Univercity (coursera) </li>
                            <li> PHP stack - Univercity of Mitchigan (coursera) </li>
                            <li> CS50 - Harvard Univercity (EDX) </li>
                            <li> Front End Specilaization - Univercity of Mitchigan (coursera </li>
                            <li> Mathematical thinking in comuter science </li>
                            <li> Computer Science 101 - Stranford Univercity (online)</li>
                            <li>HTML, CSS, and Javascript for Web Developers - Johns Hopkins University (coursera)</li>
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