import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './css/intro.css';

class Intro extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <Jumbotron>
                            <Row>
                                <Col xs={6} className="some_margin" > <div>
                                    <h1> I'm Ahmad Ali </h1>
                                    <h2> Junior MERN Developer </h2>
                                    <p text-align="justify"> I am living in london Now using code pen to test my Front End Portfolio App, I have been studying Computer since form a year now and it is going Good, I activvelly looking for Job. </p>
                                    <p> Name: Ahmad Ali </p>
                                    <p> Age: 26 </p>
                                    <p> Location: London, UK </p>
                                    <p> E-mail: aallii300300@gmail.com </p>
                                    <h2> 40 Projects Done </h2>
                                    <h2> Avialable for Hiring </h2>
                                </div> </Col>
                                <Col xs={6} className="some_margin"> <div>
                                    <img src='https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0' />
                                </div> </Col>
                            </Row>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Intro;
