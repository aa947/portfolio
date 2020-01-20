import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


class App extends Component {
  render() {
    return (
      <div>
      < Header />
        <Container>
          
          < Intro />
        </Container>
</div>
    );
  }
}

export default App;
