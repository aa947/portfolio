import React, { Component } from 'react';
import './css/intro.css';

class Main_skills extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-node-js fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-react fa-6x text-green-300"></i>

                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <img src={process.env.PUBLIC_URL + "/imgs/mongodb.png"} width="100vw" />
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-css3-alt fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fas fa-database fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-js-square fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-html5 fa-6x text-green-300"></i>

                </div>


                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-bootstrap fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-git-alt fa-6x text-green-300"></i>
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <img src={process.env.PUBLIC_URL + "/imgs/redux.jpg"} width="100vw" />
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-3">
                    <i className="fab fa-php fa-6x text-green-300"></i>
                </div>

            </React.Fragment>
        );

    }
}

export default Main_skills;