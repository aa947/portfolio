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

    }

    render() {
        return (
            <div display="table">
            {/* added dev up */}
             {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Welcome ...</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-envelope fa-sm text-white-50"></i> Drop A message </a>
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
                  <h1 className="text_1"> I'm Ahmad Ali, 26yrs</h1>
                  <h2> a Junior MERN Developer </h2>
                  <pre>
                    
                  </pre>
                  <p text-align="justify"> From a medical background I came, through a dozen of countries, proffissions, cousres I benetrated, Ended up Here In front of You. All of those life Experiences make me a good choice for your next Role. </p>
                                  <p>Remember: the we think is always different from What we've teached to think in.</p>
                  <pre> Location: London, UK   
                  
                   </pre>
                  <pre> Know Me More..
                  
                  </pre>
                  <p> 
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                  <SocialIcon network="twitter" bgColor="#ff5a01" />
                  <SocialIcon url="https://www.example.com" label="Our portfolio" />
                  <SocialIcon url="aallii300300@gmail.com" label="send me Email" />

                  </p>
                 
                
                </div>
              </div>
          </div>

          {/* <!-- Pie Chart --> */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
           
              {/* <!-- Card Body --> */}
              <div className="card-body" display ="table-cell" boxSizing = "content-box" >
                <img src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" width="97%"  />
              </div>
            </div>
          </div>
        </div>
        {/* added Div */}
        </div>
        );
    }
}

export default Intro;
