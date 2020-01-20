import React, { Component } from 'react';
import './css/header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'





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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL +'/imgs/logo.png'} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Header;
