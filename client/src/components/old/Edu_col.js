import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Main_skills from './Main_skills';
import './css/intro.css';
import { Link } from 'react-router-dom';
import NewsLetter_form from './NewsLetter_form';

class Edu_col extends Component {
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
            <div className="col-lg-6 mb-4">

                {/* Main Skills */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Main Skills</h6>
                    </div>
                    <div className="card-body">


                        <div className="row">

                            <Main_skills />

                        </div>
                    </div>
                </div>


                {/* <!-- Illustrations --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Education</h6>
                    </div>
                    <div className="card-body">
                        <p> <i className="fas fa-chevron-right"></i>   2011 - 2016: </p>
                        <p> Bachelor degree in pharmacy and pharmaceutical chemistry - Damascus University - Syria </p>
                        <p><i className="fas fa-chevron-right"></i>   2018 - ongoing:</p>
                        <p>Associate degree in Computer Science - Kiron Open Higher Education - Germany </p>
                    </div>
                </div>

                {/* <!-- Approach --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary"> Certificates ({this.state.certs.length})</h6>
                    </div>
                    <div className="card-body">
                        {this.state.certs.map((cert) => {
                            return (
                                <div key={cert._id}>
                                    <p style={{ marginBottom: "5%" }}><i className="fas fa-chevron-right"></i> {cert.cert_name} - {cert.provider} ( {cert.course_host} )
                                    {'\u00A0'}
                                        <a href={cert.course_url} title="visit course page" target="_blank">
                                            <button className="btn btn-link text-muted">  <i className="fas fa-external-link-alt"> visit</i>  </button>
                                        </a>


                                        {/* {'\u00A0'} */}
                                        <Link to={{ pathname: "/certificates/" + cert._id, cert_id: cert._id }} title="view certificate">
                                            <button className="btn btn-link text-muted" >  <i className="fas fa-graduation-cap"> details</i> </button>
                                        </Link>
                                    </p>
                                </div>
                            );



                        })}
                    </div>
                </div>

                {/* <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Main Skills</h6>
                    </div>
                    <div className="card-body">


                        <div className="row">

                            <Main_skills />

                        </div>
                    </div>
                </div> */}

                <NewsLetter_form />

            </div>

        );
    }
}

export default Edu_col;