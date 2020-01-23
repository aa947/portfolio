
import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import footer from './Footer';
import Footer from './Footer';
import { useParams } from 'react-router-dom';


class Cert_details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cert: []

        };




    }

   

    componentDidMount() {
        // params.project_id
        let cert_id = this.props.match.params.cert_id;
        fetch('/api/c/' + cert_id).then(res => res.json())
            .then((cert) => {
                console.log(cert)
                this.setState({ cert })
            }
            );

    }

    render() {


        return (
            <React.Fragment>
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">{this.state.cert.cert_name}</h5>
                          
                        </div>

                        <div className="card-body">
                            <div> <p><span className="m-0 font-weight-bold text-primary"> Provider: </span>  {this.state.cert.provider} </p> </div>

                            <div> <p> <span className="m-0 font-weight-bold text-primary"> Visit Provider: </span>  {this.state.cert.provider_url} </p> </div>
                            <div> <p><span className="m-0 font-weight-bold text-primary">course_Url: </span>  {this.state.cert.course_url} </p> </div>
                            <div> <p> <span className="m-0 font-weight-bold text-primary">Course_host: </span> {this.state.cert.course_host} </p> </div>
                            <div> <p> <span className="m-0 font-weight-bold text-primary">Course_host_url: </span>  {this.state.cert.course_host_url} </p> </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">Certificate:</h5>
                        </div>
                        <div className="card-body">


                          <img src={ this.state.cert.cert_photo } width="100%" height="100%" />
                    
                           
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
                <br />
                <Footer />
            </React.Fragment >
        );
    }
}

export default Cert_details;
