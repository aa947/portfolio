import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class HHeader extends Component {
    constructor() {
        super();

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>

                {/* //  <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Search --> */}
                    <img src="https://dl.dropbox.com/s/2du08hmcfnaqv4p/logo.png?dl=0" />

                    {/* <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li className="nav-item dropdown no-arrow d-sm-none">



                        </li>

                        {/* <!-- Nav Item - Alerts --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects
     </a> </li>
                        {/* <!-- Dropdown - Alerts --> */}

                        {/* <!-- Nav Item - Alerts --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resume
</a> </li>
                        {/* <!-- Nav Item - Messages --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact </a> </li>


                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Call us ></span>
                                <img className="img-profile rounded-circle" src="https://dl.dropbox.com/s/jq67lusuwgpwbme/phone.png?dl=0" /> </a> </li>

                    </ul>

                </nav>
            </React.Fragment>
        );
    }
}

export default HHeader;
