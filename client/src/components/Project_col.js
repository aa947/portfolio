import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact_form from './Contact_form';
import Publication from './Publication';

import domain from '../config';
import { isLocalhost } from '../helpers';

// import './css/intro.css';
import { Link } from 'react-router-dom';

class Project_col extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        let projectsUrl = isLocalhost ? `${domain}/api/projects` : '/api/projects';

        fetch(projectsUrl).then(res => res.json())
            .then(projects => this.setState({ projects }));

    }

    render() {


        return (
            <div className="col-lg-6 mb-4">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            <div style={{ float: "left" }}> Projects ({this.state.projects.length}) </div>

                        </h6>
                    </div>
                    <div className="card-body">

                        {/* <!-- start project row --> */}


                        {this.state.projects.map((p) => {



                            return (<div key={p._id}>
                                <p style={{ marginBottom: "7%" }}><i className="fas fa-chevron-right"></i>{'\u00A0'}<i className={p.fontAwesome}></i> {p.name} - {p.date}

                                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    <a href={p.live_demo} title="visit Live Demo" target="_blank" className="btn-link text-muted">
                                        <i className="fas fa-external-link-alt"> visit</i>
                                    </a>


                                    {'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    <Link title="View more Details" to={{ pathname: "/projects/" + p._id, project_id: p._id }} className="btn-link text-muted">
                                        <i className="fas fa-info-circle"> details</i>
                                    </Link>
                                </p>
                            </div>);


                        })}


                        {/* <!-- end project row --> */}

                    </div>
                </div>

                {/* <Publication /> */}

                <Contact_form />


            </div>



        );
    }
}

export default Project_col;
