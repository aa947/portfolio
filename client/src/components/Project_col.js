import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact_form from './Contact_form';


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
        fetch('/api/projects').then(res => res.json())
            .then(projects => this.setState({ projects }));

    }

    render() {


        return (
            <div className="col-lg-6 mb-4">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                       <div style={{ float: "left" }}> Projects </div>
                        <div  style={{ float: "right", fontSize:"0.8rem" }}> All Projects >> </div>
                        </h6>
                    </div>
                    <div className="card-body">


                        {/* <!-- start project row --> */}


                        {this.state.projects.map((p) => {



                            return (<div key={p._id}>
                                <p style={{ marginBottom: "5%" }}><i className="fas fa-chevron-right"></i> {p.name} - {p.date}  {'\u00A0'}  <i className={p.fontAwesome}></i>
                                    {'\u00A0'}
                                    <a href={p.live_demo} title="visit Live Demo" target="_blank">
                                        <button className="btn btn-link"> visit <i className="fas fa-hand-pointer"></i> </button>
                                    </a>


                                    {'\u00A0'}
                                    <Link title="View more Details" to={{ pathname: "/api/p/" + p._id, project_id: p._id }}>
                                        <button className="btn btn-link" > details <i className="fas fa-graduation-cap"></i> </button>
                                    </Link>
                                </p>
                            </div>);

                        })}


                        {/* <!-- end project row --> */}


                    </div>
                </div>

                <Contact_form />
            </div>



        );
    }
}

export default Project_col;
