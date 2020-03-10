import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact_form from './Contact_form';
import NewsLetter_form from './NewsLetter_form';




import './css/intro.css';
// import { Link } from 'react-router-dom';

class Contact_row extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="col-lg-12 mb-12">





<Contact_form />


<NewsLetter_form />

               

            </div>



        );

    }
}


export default Contact_row;
