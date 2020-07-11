import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './css/RowOfElements.css';

class RowOfElements extends Component {
    constructor() {
        super();
        this.state = {

        };
       
    }
    
    componentDidMount() {

    }

   

    render() {

        let img_height = {
        height: '100px' 
    };

        return (
            <Container>
               <Row>
                    <Col xs={12}>
                        <section className="ftco-section ftco-partner">
                            <Container>
                                <h2 style={{ marginLeft : '40%' }}  className="mb-4">In The News</h2>
                                {/* <div className="row" style="text-align: center !important; ">  style="margin-left: 50%;" */}
                                <Row>
                                    {/* <div className="col-sm ftco-animate fadeInUp ftco-animated"> */}
                                    <Col>
                                        <a href="#" className="partner"><img style={img_height} src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" className="img-fluid" alt="Colorlib Template" /></a>
                                    </Col>
                                    {/* <div className="col-sm ftco-animate fadeInUp ftco-animated"> */}
                                    <Col>
                                         <a href="#" className="partner"><img style={img_height} src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" className="img-fluid" alt="Colorlib Template" /></a>
                                    </Col>
                                    {/* <div className="col-sm ftco-animate fadeInUp ftco-animated"> */}
                                    <Col>
                                        <a href="#" className="partner"><img style={img_height} src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" className="img-fluid" alt="Colorlib Template" /></a>
                                    </Col>
                                    {/* <div className="col-sm ftco-animate fadeInUp ftco-animated"> */}
                                    <Col>
                                          <a href="#" className="partner"><img style={img_height} src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" className="img-fluid" alt="Colorlib Template" /></a>
                                    </Col>
                                    {/* <div className="col-sm ftco-animate fadeInUp ftco-animated"> */}
                                    <Col>
                                         <a href="#" className="partner"><img style={{height: 100 +'px'}} src="https://dl.dropbox.com/s/rxxlqyc82hve8w2/main.jpg?dl=0" className="img-fluid" alt="Colorlib Template" /></a>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RowOfElements;
