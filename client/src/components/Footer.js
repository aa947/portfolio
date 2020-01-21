import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends Component {
    constructor() {
        super();

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>

<footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Ahmad Ali 2020 </span>
          </div>
        </div>
      </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
