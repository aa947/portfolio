import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';


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
            .then(projects => this.setState({ projects }, () => console.log('Customers fetched...', projects)));

    }

    render() {


        return (
            <div className="col-lg-12 mb-12">

                {/* <!-- Color System --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Prpjects</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {/* <!-- start project row --> */}


                            {this.state.projects.map((p) => {

                                return (
                                    <div className="col-lg-4 mb-3">
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
                                );


                            })}




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

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Contct Us</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <h6> How can I help? </h6><h6> tell me about your project and I will give you a tooght. OR Just say Hi ! </h6>
                        </div>
                        <br />
                        <div className="row">
                        <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-md-4 col-form-label" >Email *</label>
    <div className="col-sm-10 col-md-8">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-md-4 col-form-label">Name *</label>
    <div className="col-sm-10 col-md-8">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Name" />
    </div>
  </div>
  
  <div className="form-group row">
  <label for="inputPassword3" className="col-sm-2 col-md-4 col-form-label">Message *</label>
    <div className="col-sm-10 col-md-8">
      <textarea type="password" className="form-control" id="inputPassword3" placeholder="Message" ></textarea>
    </div>
  </div>
  <div className="form-group row">
  <div className="col col-md-4" ></div>
    <div className="col-sm-10 col-md-8 ">
      <button type="submit" className="btn btn-primary">Send Message</button>
    </div>
  </div>
</form>
                        </div>
                        </div>
                    </div>
                </div>



        );
    }
}

export default Project_row;
