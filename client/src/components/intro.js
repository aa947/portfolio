import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import { SocialIcon } from 'react-social-icons';
import Numbers from './numbers';

import './css/intro.css';

class Intro extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

      fetch('/api/views')
      .then(res => res.json())
      .then(data => console.log(data) );
    }

    render() {
        return (
            <div display="table">
            {/* added dev up */}
             {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Welcome ... How can I help ??</h1>
          <a href="mailto:aallii300300@gmail.com" target="_blank" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-envelope fa-sm text-white-50"></i> Drop A message </a>
        </div>

        {/* <!-- Content Row for Numbers --> */}
        <div className="row" >

          <Numbers />

        </div>

        {/* <!-- Content Row --> */}

        <div className="row" display= "table-row">

          {/* <!-- Area Chart --> */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
             
              {/* <!-- Card Body --> */}
              <div className="card-body"  display = "table-cell"   >
                  <h1 className="text_1"> I'm Ahmad Ali</h1>
                  <h2> Junior MERN Developer </h2>
                  <pre>
                    
                  </pre>
                  <p text-align="justify"> From a medical background I came, through a dozen of countries, proffissions, cousres I benetrated, Ended up Here In front of You. All of those life Experiences make me a good choice for your next Role. </p>
                                  <p>Remember: the way we think is always different from What we've teached to think in.</p>
                  <pre> Location: London, UK   
                  
                   </pre>
                  <pre> Know Me More..
                  
                  </pre>
                  
                  <SocialIcon url="https://www.linkedin.com/in/ahmad-ali-07383164194/" /> {'\u00A0'}
                  <SocialIcon url="https://twitter.com/AhmadAl43872454" /> {'\u00A0'}
                  <SocialIcon url="https://github.com/aa947" /> {'\u00A0'}
                  <SocialIcon url="https://www.facebook.com/ahmad623" /> {'\u00A0'}

                  
                 
                
                </div>
              </div>
          </div>

          {/* <!-- Pie Chart --> */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
           
              {/* <!-- Card Body --> */}
              <div className="card-body" display ="table-cell"  >
                <img src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" width="97%"  />
              </div>
            </div>
          </div>
          {/* end photo */}
        </div>
        {/* added Div */}
        </div>
        );
    }
}

export default Intro;
