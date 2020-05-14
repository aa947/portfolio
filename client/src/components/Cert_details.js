
import React, { Component } from 'react';
import './css/header.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import footer from './Footer';
import Footer from './Footer';
// import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';


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


        //meta stuff 
        const head = document.querySelector('head');

        const title = document.createElement('title');
        title.innerText=this.state.cert.cert_name;
        head.appendChild(title);
  
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:titel');
        meta.setAttribute('content', 'Ahmad Ali - Full Stack Developer');
        head.appendChild(meta);
  
        const meta1 = document.createElement('meta');
        meta1.setAttribute('property', 'og:description');
        meta1.setAttribute('content', 'Full-stack developer, back-ended with the precision of chemistry and medical practise.  Educated to degree level with 1 years’ experience in web development. This has given me skills in JS: MERN, PHP: WP_API, DB: MONGO, SQL, HTML and CSS.');
        head.appendChild(meta1);
  
       
  
        const meta2 = document.createElement('meta');
        meta2.setAttribute('property', 'og:image');
        meta2.setAttribute('content', 'https://dl.dropbox.com/s/2kqh712gqev9yhy/ahmad-ali-200-200.jpg?dl=0');
        head.appendChild(meta2);
  
        const meta3 = document.createElement('meta');
        meta3.setAttribute('property', '"og:url');
        meta3.setAttribute('content', "https://www.ahmad-ali.co.uk/");
        head.appendChild(meta3);
  
        const meta4 = document.createElement('meta');
        meta4.setAttribute('property', 'author');
        meta4.setAttribute('content', 'Ahmad Ali');
        head.appendChild(meta4);
  
  

    }

    render() {


        return (
            <DocumentTitle title={`Ahmad - ${this.state.cert.cert_name}`}>
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




            <React.Fragment>
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">{this.state.cert.cert_name}</h5>
                          
                        </div>

                        <div className="card-body">
                            <div> <p><span className="m-0 font-weight-bold text-primary"> Provider: </span>  {this.state.cert.provider} </p> </div>

                            
                            <div> <p> <span className="m-0 font-weight-bold text-primary">Course Host: </span> {this.state.cert.course_host} </p> </div>
                        

                            <div className="row">
                                
                                    <div><a href={this.state.cert.provider_url} target='_blank'><button className="btn btn-primary" title="visit course provider" style={{marginBottom:"5px"}} >visit course provider {'\u00A0'} {'\u00A0'} {'\u00A0'} </button> </a>
                                    {'\u00A0'}
                                        <a href={this.state.cert.course_host_url} target='_blank' >  <button className="btn btn-success" style={{marginBottom:"5px"}}> Visit course host {'\u00A0'} </button> </a> 
                                        {'\u00A0'}
                                        <a href={this.state.cert.course_url} target='_blank' > <button className="btn btn-info" style={{marginBottom:"5px"}}>visit course page {'\u00A0'} </button></a>
                                        
                                    </div>
                                </div>
                              
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
            </>
</DocumentTitle>
        );
    }
}

export default Cert_details;
