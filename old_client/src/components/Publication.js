import React, { Component } from 'react';

class Publication extends Component {

    render() {

        return (

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Publications:</h6>
                </div>
                <div className="card-body">

                    <p style={{ marginBottom: "7%" }}><i className="fas fa-chevron-right"></i>{'\u00A0'}<i class="fab fa-youtube"></i> Site views counter with Node and MongoDB - tutorial on youtube <i><span style={{ fontSize: "12px" }}> published Feb 2020 </span></i>
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <a href="https://www.youtube.com/playlist?list=PLrMI74uzoMfm4fFCCJvLrpYtV4U1A-6Kj" title="visit publication" target="_blank" className="btn-link text-muted">
                            <i className="fas fa-external-link-alt"> visit</i>
                        </a>
                    </p>

                    <p style={{ marginBottom: "7%" }}><i className="fas fa-chevron-right"></i>{'\u00A0'}<i class="fas fa-newspaper"></i> Promises or Callbacks .. key Notices in MongoDB - article on DEV.to <i><span style={{ fontSize: "12px" }}> published Jan 2020 </span></i>
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <a href="https://dev.to/ahmad_ali/promises-or-callbacks-key-notices-in-mongodb-15po" title="visit publication" target="_blank" className="btn-link text-muted">
                            <i className="fas fa-external-link-alt"> visit</i>
                        </a>
                    </p>

                </div>
            </div>
        );
    }
}

export default Publication;
