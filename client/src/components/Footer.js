import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            unique:0
        };

    }

    componentDidMount() {
      fetch('/api/footer').then(res => res.json())
          .then(res => this.setState({ count: res.count, unique: res.unique }  ));

  }

    render() {
        return (
            <React.Fragment>

<footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Ahmad Ali 2020 </span> {'\u00A0'}
            <span><i class="fas fa-eye"></i>  { this.state.count } </span> {'\u00A0'}
            <span><i class="fas fa-fingerprint"></i>  { this.state.unique } </span>{'\u00A0'}
          </div>
        </div>
      </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
