import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import footer from './Footer';
import Footer from './Footer';
import { useParams } from 'react-router-dom';


class Project_details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: []
        };

    }

    componentDidMount() {
        // params.project_id
         let   project_id  = this.props.match.params.project_id;
         console.log(project_id)
        fetch('/api/p/'+ project_id).then(res => res.json())
            .then((project) => {
                console.log(project)
                this.setState({ project})}
            );

    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Project Details</h6>
                            <div className="row">
                           <div className="col md-4" >  <p> projectName : { this.state.project.name } </p> </div>
                           <div className="col md-8" >  <p> projectName : { this.state.project.lang} </p> </div>
                           </div>
                        </div>
                        <div className="card-body">
                        <div> <p> Intro:  { this.state.project.intro } </p> </div>
                        <div> <p> date:  { this.state.project.date } </p> </div>
                        <div> <p> github_url:  { this.state.project.github_url } </p> </div>
                        <div> <p> tasks:  { this.state.project.tasks } </p> </div>
                        <div> <p> features:  { this.state.project.features } </p> </div>
                        <div> <p> inspired_by:  { this.state.project.inspired_by } </p> </div>
                        </div>
                    </div>
                </div>

                    {/* big row */}
                {/* <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        
                        <div className="card-body">
                        </div>
                    </div>
                </div> */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Project_details;
