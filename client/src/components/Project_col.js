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
            .then(projects => this.setState({ projects }, () => console.log('Customers fetched...', projects)));

    }

    render() {


        return (
            <div className="col-lg-6 mb-4">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                      

                            {/* <!-- start project row --> */}


                            {this.state.projects.map((p) => {

                                {/* return (
                                    <div className="col-lg-6 mb-4">
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">{p.date}</div>
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto">
                                                                <Link title="View more Details" to={{ pathname: "/api/p/" + p._id, project_id: p._id }}>  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{p.name}</div> </Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className={p.fontAwesome}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ); */}

                                
                         {/* return (
                                <div>
                                <p style={{  }}>  <i className="fas fa-chevron-right"></i> {p.name}     <i className={p.fontAwesome}></i>   { p.date}
                                    
                                    <a href={p.live_demo} title="View live demo" target="_blank">
                                       <button className="btn btn-link"> visit live <i className="fas fa-hand-pointer"></i> </button>
                                    </a>

                                    <Link title="View more Details" to={{ pathname: "/api/p/" + p._id, project_id: p._id }}>  

                                       <button className="btn btn-link" > details <i className="fas fa-info-circle"></i> </button>
                                    </Link>
                                </p>
                                </div>
                            );
 */}

                            return(<div>
                                <p style={{ marginBottom: "5%" }}><i className="fas fa-chevron-right"></i> {p.name} - {p.date}  {'\u00A0'}  <i className={p.fontAwesome}></i> 
                                    {'\u00A0'}
                                    <a  href={p.live_demo} title="visit Live Demo" target="_blank">
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
