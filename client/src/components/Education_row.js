import React, { Component } from 'react';
import MainSkills from './Main_skills';
import NewsLetterForm from './NewsLetter_form';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';



import './css/intro.css';
import { Link } from 'react-router-dom';

class Education_row extends Component {
    constructor() {
        super();
        this.state = {
            certs: []
        };
    }

    componentDidMount() {
        fetch('/api/certs').then(res => res.json())
            .then(certs => this.setState({ certs }));

    }

    render() {


        return (
            <DocumentTitle title='Education | Ahmad Ali'>

                <>
                    <Helmet>
                        <meta property="og:title" content="Ahmad Ali - Full Stack Developer" />
                        <meta property="og:description" content="Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS." />
                        <meta property="og:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                        <meta property="og:url" content="https://www.ahmad-ali.co.uk/" />
                        <meta name="author" content="Ahmad Ali" />
                        <meta name="twitter:card" content="Ahmad Ali Full Stack Developer" />
                        <meta name="twitter:image" content="https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0" />
                    </Helmet>

                    <div className="col-lg-12 mb-12">

                        {/* <!-- Illustrations --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Education</h6>
                            </div>
                            <div className="card-body">
                                <p> <i className="fas fa-chevron-right"></i>   2011 - 2016: </p>
                                <p> Bachelor degree in pharmacy and pharmaceutical chemistry - Damascus University - Syria </p>
                                <p><i className="fas fa-chevron-right"></i>   2018 - ongoing:</p>
                                <p>Associate degree in Computer Science - Kiron Open Higher Education - Germany </p>
                            </div>
                        </div>

                        {/* <!-- Approach --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary"> Certificates </h6>
                            </div>
                            <div className="card-body">

                                {this.state.certs.map((cert) => {
                                    return (
                                        <div>
                                            <p style={{ marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> {cert.cert_name} - {cert.provider} ( {cert.course_host} )
                                    {'\u00A0'}
                                                <a href={cert.course_url} title="visit course page" target="_blank" rel="noopener noreferrer">
                                                    <button className="btn btn-link text-muted">  <i className="fas fa-external-link-alt"> visit</i> </button>
                                                </a>


                                                {'\u00A0'}
                                                <Link to={{ pathname: "/certificates/" + cert._id, cert_id: cert._id }} title="view certificate">
                                                    <button className="btn btn-link text-muted" >  <i className="fas fa-graduation-cap"> details</i> </button>
                                                </Link>
                                            </p>
                                        </div>
                                    );


                                })}

                            </div>
                        </div>

                        {/* <!-- Project Card Example --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Main Skills</h6>
                            </div>
                            <div className="card-body">


                                <div className="row">
                                    {/*Skills Cards */}
                                    <MainSkills />

                                </div>
                            </div>
                        </div>

                        <NewsLetterForm />


                    </div>

                </>
            </DocumentTitle>

        );
    }
}

export default Education_row;
