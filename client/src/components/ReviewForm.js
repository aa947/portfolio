import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


import './css/intro.css';
// import { Link } from 'react-router-dom';

class Contact_form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            inputName: '',
            rel: 'I worked directly for You',
            inputMessage: ''


        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRel = this.handleChangeRel.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

    }

    sendMessage(event) {
        event.preventDefault();
       // console.log(this.state);

       let { inputName, inputMessage } = this.state;

        if(inputMessage=="" || inputName == "" ){
            toast.error("Please fill in All Review form fields to send a message", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            })
            return false;
        }

        axios.post('/api/addReview', this.state)
            .then(res => {
                //  console.log(res);
                toast.success("Thank You for Reviewing me, keep encourging people !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false
                })
                this.setState({
                    inputName: '',
                    rel: 'I worked directly for You',
                    inputMessage: ''
                });
            })
            .catch(err => console.log(err))


    }

    handleChangeName(event) {
        this.setState({ inputName: event.target.value })
    }

    handleChangeRel(event) {
        this.setState({ rel: event.target.value })
    }

    handleChangeMessage(event) {
        this.setState({ inputMessage: event.target.value })
    }


    render() {


        return (
            <>

                {/* <div className="card shadow mb-4 col-12">
 <div className="card-header py-3">
     <h6 className="m-0 font-weight-bold text-primary">Contact Me</h6>
 </div>
 <div className="card-body"> */}

                <div className="col col-12">
                    <h4 style={{ textAlign: 'center' }}>Add Review </h4>
                </div>

                <br />

                <div className="col col-12">
                    <form onSubmit={this.sendMessage}>
                        <div className="row">
                            <div className="col col-4">

                                <div className="form-group row">
                                    <label htmlFor="inputEmail" className="col col-12" >Your Name</label>
                                    <div className="col col-12">
                                        <input type="name" className="form-control" id="inputName" placeholder="Your name is visible" value={this.state.inputName} onChange={this.handleChangeName} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputName" className="col col-12">How do you Know me </label>
                                    <div className="col col-12">

                                        {/* <input type="text" className="form-control col col-12" id="inputName" placeholder="Name" value={this.state.inputName} onChange={this.handleChangeName} /> */}

                                        <select id="rel" className="form-control col col-12" name="rel" onChange={this.handleChangeRel} >
                                            <option value="I worked directly for You">I worked directly for You</option>
                                            <option value="You and me worked together">You and me worked together</option>
                                            <option value="inspiration">inspiration</option>
                                            <option value="Other">Other</option>
                                        </select>


                                    </div>
                                </div>

                                {/* col 4 */}
                            </div>

                            <div className="col col-6" >
                                <div className="form-group row">
                                    <label htmlFor="inputMessage" className="col col-12 col-form-label">Review</label>
                                    <div className="col col-12">
                                        <textarea type="text" className=" col col-12 form-control" id="inputMessage" value={this.state.inputMessage} placeholder="Tell everyone about me in 115 letters" maxLength="115" rows="5" cols="50" onChange={this.handleChangeMessage}  ></textarea>
                                    </div>
                                </div>

                            </div> <div className="col col-2">
                                <div className="form-group row">
                                    <div className="col col-md-4" ></div>
                                    <div className="col-sm-10 col-md-8 ">
                                        <button type="submit" className="btn btn-secondary add_review" onSubmit={this.sendMessage} >Add Review</button>
                                    </div>
                                </div>

                                {/* col 2 */}
                            </div>

                            {/* row */}
                        </div>

                    </form>

                    {/* col12 */}
                </div>

                {/* </div>
</div> */}

            </>
        );
    }
}

export default Contact_form;
