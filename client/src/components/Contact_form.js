import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import { toast } from 'react-toastify';


import './css/intro.css';
// import { Link } from 'react-router-dom';

class Contact_form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            inputEmail: '',
            inputName: '',
            inputMessage: ''


        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

    }

    sendMessage(event) {
        event.preventDefault();
        //console.log(this.state);
        let { inputEmail, inputName, inputMessage } = this.state;
        if (inputEmail == "" || inputName == "" || inputMessage == "") {
            toast.error("Please fill in All form fields to send a message", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            })
            return false;
        }
        axios.post('/api/sendMessage', this.state)
            .then(res => {
                //console.log(res)
                toast.success("Thank You for contacting me, I will responde soon!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false
                })
            })
            .catch(err => console.log(err))
    }




    handleChangeName(event) {
        this.setState({ inputName: event.target.value })
    }

    handleChangeEmail(event) {
        this.setState({ inputEmail: event.target.value })
    }

    handleChangeMessage(event) {
        this.setState({ inputMessage: event.target.value })
    }

    componentDidMount() {

    }

    render() {


        return (


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Contact Me</h6>
                </div>
                <div className="card-body">
                    <p> Tell me about your project and I will give you a reflection, or Just say Hi! </p>

                    <p>Phone: +(44) 7383 164 194</p>

                    <br />
                    <form onSubmit={this.sendMessage}>
                        <div className="form-group row">
                            <label htmlFor="inputEmail" className="col-sm-3 col-md-3 col-form-label" >Email: *</label>
                            <div className="col-sm-8 col-md-8">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.inputEmail} onChange={this.handleChangeEmail} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputName" className="col-sm-3 col-md-3 col-form-label">Name: *</label>
                            <div className="col-sm-8 col-md-8">
                                <input type="text" className="form-control" id="inputName" placeholder="Name" value={this.state.inputName} onChange={this.handleChangeName} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputMessage" className="col-sm-3 col-md-3 col-form-label">Message: *</label>
                            <div className="col-sm-8 col-md-8">
                                <textarea type="text" className="form-control" id="inputMessage" rows="5" cols="33" value={this.state.inputMessage} placeholder="Message" onChange={this.handleChangeMessage}  ></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col col-md-4" ></div>
                            <div className="col-sm-10 col-md-8 ">
                                <button type="submit" className="btn btn-secondary" onSubmit={this.sendMessage} >Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact_form;
