import React, { Component } from 'react';
import './css/header.css';
import TopTextCard from '../cards/TopTextCard';


class Numbers extends Component {


  render() {
    return (
      <React.Fragment>

        <TopTextCard
          cardLink="/meetings"
          color="primary"
          title="Book a Meeting"
          text="Get a Free Quote"
          iconClass="fas fa-calendar-alt"
        />
        <TopTextCard
          cardLink="/meetings"
          color="primary"
          title="Book a Meeting"
          text="Get a Free Quote"
          iconClass="fas fa-calendar-alt"
        />

        <TopTextCard
          cardLink="/meetings"
          color="primary"
          title="Book a Meeting"
          text="Get a Free Quote"
          iconClass="fas fa-calendar-alt"
        />

        <TopTextCard
          cardLink="/meetings"
          color="primary"
          title="Book a Meeting"
          text="Get a Free Quote"
          iconClass="fas fa-calendar-alt"
        />



        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-success text-uppercase mb-1">
                    <a href="/claim-your-free-service"> Activity Docs </a>
                  </div>
                  <div className="p mb-0 font-weight-bold text-gray-800">coming soon .. </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-cog fa-2x text-gray-300"></i>
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
                  <div className="text-sm font-weight-bold text-info text-uppercase mb-1">
                    <a href="/report"> My Report </a>
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="p mb-0 mr-3 font-weight-bold text-gray-800">work summary</div>
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


        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-sm font-weight-bold text-warning text-uppercase mb-1">
                    <a href="/#reviews"> Add a Review </a>
                  </div>
                  <div className="p mb-0 font-weight-bold text-gray-800">Review My Work</div>
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
