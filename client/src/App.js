import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
// import Header from './components/header';
import Intro from './components/intro';
// import RowOfElements from './components/RowOfElements';
import Project_col from './components/Project_col';
import Edu_col from './components/Edu_col';


class App extends Component {
  render() {
    return (
      <div>
      
          <Intro />
          <div className="row"> 
          <Project_col />
          <Edu_col />
          </div>
          
      
</div>
    );
  }
}

export default App;
