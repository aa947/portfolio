import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Main_skills from './Main_skills';
import NewsLetter_form from './NewsLetter_form';


import './css/intro.css';
import { Link } from 'react-router-dom';

class Education_row extends Component {
    constructor() {
        super();
        this.state = {
            certs: []
        };
    }

    componentDidMount() {
        fetch('/api/certs').then(res => res.json())
            .then(certs => this.setState({ certs }));

    }

    render() {


        return (
            <div className="col-lg-12 mb-12">

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

                        {this.state.certs.map((cert) => {
                            return (
                                <div>
                                <p style={{ marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> {cert.cert_name} - {cert.provider} ( {cert.course_host} )
                                    {'\u00A0'}
                                    <a href={cert.course_url} title="visit course page" target="_blank">
                                       <button className="btn btn-link"> visit <i className="fas fa-hand-pointer"></i> </button>
                                    </a>


                                    {'\u00A0'}
                                    <Link to={{ pathname: "/api/c/" + cert._id, cert_id: cert._id }} title="view certificate">
                                       <button className="btn btn-link" > details <i className="fas fa-graduation-cap"></i> </button>
                                    </Link>
                                </p>
                                </div>
                            );


                        })}

                    </div>
                </div>

                {/* <!-- Project Card Example --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Main Skills</h6>
                    </div>
                    <div className="card-body">


                        <div className="row">
                            {/*Skills Cards */}
                            <Main_skills />

                        </div>
                    </div>
                </div>

<NewsLetter_form />


            </div>



        );
    }
}

export default Education_row;
