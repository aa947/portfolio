import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';


import './css/intro.css';
import { Link } from 'react-router-dom';

class Contact_row extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="col-lg-12 mb-12">




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


export default Contact_row;
