import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Main_skills from './Main_skills';


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
            .then(certs => this.setState({ certs }, () => console.log('Customers fetched...', certs)));

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
                                <p><i class="fas fa-chevron-right"></i> {cert.cert_name} - {cert.provider} ( {cert.course_host} )
                                    {'\u00A0'}
                                    <a href={cert.course_url} title="visit course page" target="_blank">
                                        <i class="fas fa-hand-pointer"></i>
                                    </a>


                                    {'\u00A0'}
                                    <Link to={{ pathname: "/api/c/" + cert._id, cert_id: cert._id }} title="view certificate">
                                        <i class="fas fa-graduation-cap"></i>
                                    </Link>

                                </p>
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

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">News letter</h6>
                    </div>
                    <div className="card-body">
                        <p> Subscribe to My News Update </p>
                        <p> Interesting updates once a month </p>
                        <p> Promise: No more than 1 mail/month. </p>
                        <form>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-md-2 col-form-label" >Email *</label>
                                <div className="col-sm-10 col-md-8">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col col-md-6" ></div>
                                <div className="col-sm-10 col-md-6 ">
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    {/* <!-- end column --> */}
                </div>


            </div>



        );
    }
}

export default Education_row;
