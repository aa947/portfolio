import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';

export default class FreeService extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            company: '',
            phone: '',
            projectName: '',
            projectDesc: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        let eventName = event.target.name;
        let eventValue = event.target.value;
        // console.log( 'handle change line 21' , { [eventName] :   eventValue })
        this.setState({ ...this.state, [eventName]: eventValue })
    }

    handleSubmit(e) {
        e.preventDefault()
        let { name, email, company, phone, projectName, projectDesc } = this.state;
        if (name === "" || phone === "" || company === "" || email === "" || projectName === "" || projectDesc === "") {
            toast.error("Please fill in All form fields to submit a valid Application", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            })
            return false;
        }
        axios.post('/api/claim-free-service', this.state)
            .then(res => {
                //console.log(res)
                toast.success("Thank You for contacting us, we will responde soon!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <DocumentTitle title="Claim your free service | Ahmad Ali">
                <>
                    {/* adding meta data with Helmet */}
                    <Helmet>
                        <meta property="og:title" content="Claim your free service | Ahmad Ali" />
                        <meta property="og:description" content="We are providing a single minor task for free to our new clients. please fill up the form below and we will get in touch with you. Note: we have the right to determaine if your task can be done for free or NOT. we have the right to refuse doing the task for free without further explanations.If you think that your task can NOT be done for free, we encourage you to submit it anyway and we'll get back to you." />
                        <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                        <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
                        <meta name="author" content="Ahmad Ali" />
                        <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
                        <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                    </Helmet>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Claim Your Free Service</h6>
                        </div>
                        <div className="card-body pr-5 pl-5">
                            <p> We are providing a single minor task for free to our new clients.</p>
                            <p> please fill up the form below and we will get in touch with you. </p>
                            <p> Note: we have the right to determaine if your task can be done for free or NOT. we have the right to refuse doing the task for free without further explanations. </p>
                            <p>If you think that your task can NOT be done for free, we encourage you to submit it anyway and we'll get back to you.</p>

                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-3 col-md-3 col-form-label" >Name: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <input type="text" className="form-control" name="name" placeholder="your Name" value={this.state.name} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-3 col-md-3 col-form-label" >Email: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="company" className="col-sm-3 col-md-3 col-form-label" >Company: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <input type="text" className="form-control" name="company" placeholder="Your Company" value={this.state.company} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-3 col-md-3 col-form-label" >Phone: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <input type="tel" className="form-control" name="phone" placeholder="Your Phone with country code" value={this.state.phone} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="projectName" className="col-sm-3 col-md-3 col-form-label">Project Name: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <input type="text" className="form-control" name="projectName" placeholder="Project Name" value={this.state.projectName} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="projectDesc" className="col-sm-3 col-md-3 col-form-label">Project Description: *</label>
                                    <div className="col-sm-8 col-md-8">
                                        <textarea type="text" className="form-control" name="projectDesc" rows="10" cols="33" value={this.state.projectDesc} placeholder="Please Give as much information as possible" onChange={this.handleChange}  ></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 col-md-3" ></div>
                                    <div className="col-sm-8 col-md-8">
                                        <label htmlFor="#" className="col-12 col-form-label"> If you need to submit files with your Application please attach the to this Email: <a className="text-primary" href="mailto:ahmad.ali14@zohomail.eu">ahmad.ali14@zohomail.eu</a></label>
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <div className="col col-md-4" ></div>
                                    <div className="col-sm-10 col-md-8 ">
                                        <button type="submit" className="btn btn-secondary" onSubmit={this.handleSubmit} >Submit Application</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <Footer /> */}

                </>
            </DocumentTitle>
        );
    }
}