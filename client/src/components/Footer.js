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
        <div>
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Ahmad Ali </span> {'\u00A0'}
            <span title="visits number"><i className="fas fa-eye">  { this.state.count }</i>  </span> {'\u00A0'}
            <span title="number of unique visitors"><i className="fas fa-user"> { this.state.unique }</i>  </span>{'\u00A0'}
          </div>
        </div>
      </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
