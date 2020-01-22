import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';


import './css/intro.css';
import { Link } from 'react-router-dom';

class Project_col extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
     const projects = [{
    "name": "Issue Tracker",
    "lang": "Express, MongoDb",
    "photo": "https://i.imgur.com/RDsgV6y.png",
    "date" : "jan 2020",
    "github_url": "https://github.com/aa947/issueTracker",
    "live_demo": "https://ahmad-ali-issuetracker.ahmadali5.repl.co/",
    "intro": " Tracking Projects with Issues From the users of the Platform. ",
    "tasks": " Creat Update Delete Open and Close Issues. ",
    "features" : " REST API ",
    "inspired_by": "FreeCodeCamp",
    "likes":0,
    "likes_ops": [],
    "comments": [],
    "fontAwesome": "fab fa-node-js fa-2x text-green-300"
 },
 {
    "name": "Exer_Tracker",
    "lang": "Node, MongoDB",
    "photo": "https://i.imgur.com/HrdeznZ.png",
    "date" : "jan 2020",
    "github_url": "https://github.com/aa947/Exercise-Tracker",
    "live_demo": "https://ahmad-ali-exercise-tracker-1.ahmadali5.repl.co/",
    "intro": "Track the time you spend it in burning calories, for Each User ",
    "tasks": " signUp, insert exercices and time, get report of your past exercises ",
    "features" : "REST API",
    "inspired_by": "FreeCodeCamp",
    "likes":0,
    "likes_ops": [],
    "comments": [],
    "fontAwesome": "fab fa-node-js fa-2x text-green-300"
 }]

        return (
            <div className="col-lg-6 mb-4">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Prpjects</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {/* <!-- start project row --> */}
                        

{ projects.map((p1)=> {   

return(
    <div className="col-lg-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">{p1.date}</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                      <Link to="/p1">  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{p1.name}</div> </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className={p1.fontAwesome}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
);


}) }


                           

                            {/* hey */}
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>
                            <div className="col-lg-6 mb-4">
                            </div>



                            {/* <!-- end project row --> */}
                        </div>

                    </div>
                </div>
            </div>



        );
    }
}

export default Project_col;
