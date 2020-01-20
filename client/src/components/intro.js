import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './intro.css';

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
            <div>
            <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col><img src={process.env.PUBLIC_URL + '/imgs/main.jpg'} id='ahmad_img' align="middle" className="" alt="Ahmad Ali" /> </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default Intro;
