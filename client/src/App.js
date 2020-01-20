import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import RowOfElements from './components/RowOfElements';


class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Container>
          
          <Intro />
          <RowOfElements />
        </Container>
</div>
    );
  }
}

export default App;
