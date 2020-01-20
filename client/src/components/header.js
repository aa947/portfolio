import React, { Component } from 'react';
import './header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Header extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
    }

    render() {
        return (
            <div>
            <Row>
            <Col>
                <header className="header">
                    <a href="" className="logo"><img src={process.env.PUBLIC_URL + '/imgs/logo.png'} id='logo_img' align="left" className="App-logo" alt="logo" /></a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" ><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="#work">About</a></li>
                        <li><a href="#about">Resume</a></li>
                        <li><a href="#careers">Projects</a></li>
                        <li><a href="#careers">Publications</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </header>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
