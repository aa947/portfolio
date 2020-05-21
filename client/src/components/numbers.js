import React, { Component } from 'react';
import './css/header.css';


class Numbers extends Component {

  render() {
    return (
      <React.Fragment>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-primary text-uppercase mb-1">
                    <a href="/meetings"> Schedule a Meeting </a>
                  </div>
                  <div className="p mb-0 font-weight-bold text-gray-800">Get a Free Quote</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar-alt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-success text-uppercase mb-1">
                    <a href="#"> Claim A Free Service </a>
                  </div>
                  <div className="p mb-0 font-weight-bold text-gray-800">coming soon ..</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-cog fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-info text-uppercase mb-1">
                    <a href="#"> My Growth Report </a>
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="p mb-0 mr-3 font-weight-bold text-gray-800">coming soon ..</div>
                    </div>
                    <div className="col">
                      {/* <div className="progress progress-sm mr-2">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-warning text-uppercase mb-1">
                    <a href="/#reviews"> Add a Review </a>
                  </div>
                  <div className="p mb-0 font-weight-bold text-gray-800">help others to know me</div>
                </div>
                <div className="col-auto">
                  <i className="fas fas fa-bullhorn fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Numbers;
