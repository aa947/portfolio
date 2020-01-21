import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';

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

        {/* <!-- Content Row --> */}
        <div className="row" >

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Lines Coded</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">+20,000</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-code fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Courses Attended</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">+40</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-certificate fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Towards Goal</div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">40%</div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-bullseye fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Projects Done</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">+50</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-tasks fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}

        <div className="row" display= "table-row">

          {/* <!-- Area Chart --> */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
             
              {/* <!-- Card Body --> */}
              <div className="card-body"  display = "table-cell"   >
                  <p> I'm Ahmad Ali</p>
                  <p>  Junior MERN Developer </p>
                  <p text-align="justify"> I am living in london Now using code pen to test my Front End Portfolio App, I have been studying Computer since form a year now and it is going Good, I activvelly looking for Job. </p>
                                  <p> Name: Ahmad Ali </p>
                  <p> Location: London, UK </p>
                  <p> E-mail: aallii300300@gmail.com </p>
                  <p> Age: 26 </p>
                  <p> Employment: Looking For work. </p>
                  <pre> Follow ME !!  hi
                  
                  </pre>
                
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
