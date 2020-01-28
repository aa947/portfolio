import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';


import './css/intro.css';
import { Link } from 'react-router-dom';

class Contact_form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            inputEmail: ''
            


        };

        this.subscribe = this.subscribe.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

    }

    subscribe(event) {
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/api/sub', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    }

    

    handleChangeEmail(event) {
        this.setState({ inputEmail: event.target.value })
    }

   
    componentDidMount() {

    }

    render() {


        return (

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">News letter</h6>
                </div>
                <div className="card-body">
                    <p> Subscribe to My News Update </p>
                    <p> Promise: No more than 1 mail/month. </p>
                    <form onSubmit={this.subscribe}>


                      

                        <div className="form-group row">
                            <label htmlFor="inputEmail" className="col-sm-2 col-md-2 col-form-label" >Email *</label>
                            <div className="col-sm-10 col-md-8">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.inputEmail} onChange={this.handleChangeEmail} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col col-md-6" ></div>
                            <div className="col-sm-10 col-md-6 ">
                                <button type="submit" className="btn btn-primary" onSubmit={this.subscribe}>Subscribe</button>
                            </div>
                        </div>
                    </form>

                </div>
                {/* <!-- end column --> */}
            </div>
        );
    }
}

export default Contact_form;
