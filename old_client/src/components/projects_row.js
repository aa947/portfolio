import React, { Component } from 'react';
import Contact_form from './Contact_form';
import './css/intro.css';
import { Link } from 'react-router-dom';

class Project_row extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch('/api/projects').then(res => res.json())
            .then(projects => this.setState({ projects }));

    }

    render() {

        return (
            <div className="col-lg-12 mb-12">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {/* <!-- start project row --> */}

                            {this.state.projects.map((p) => {
                                return (<div className="col col-12" >

                                    <p style={{ marginBottom: "1%", marginTop: "1%", display: "inline-block" }}><i className="fas fa-chevron-right"></i> <i className={p.fontAwesome}></i>  {p.name} - {p.date}

                                        <a href={p.live_demo} title="visit Live Demo" target="_blank">
                                            <button className="btn btn-link text-muted">  <i className="fas fa-external-link-alt"> visit</i> </button>
                                        </a>


                                        {/* {'\u00A0'} */}
                                        <Link title="View more Details" to={{ pathname: "/p/" + p._id, project_id: p._id }}>
                                            <button className="btn btn-link text-muted" >  <i className="fas fa-info-circle"> details</i> </button>
                                        </Link>
                                    </p>
                                </div>);
                            })}

                            {/* <!-- end project row --> */}
                        </div>

                    </div>
                </div>

                <Contact_form />
            </div>
        );
    }
}

export default Project_row;
