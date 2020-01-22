import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
// import Header from './components/header';
import Intro from './components/intro';
// import RowOfElements from './components/RowOfElements';
import Project_col from './components/Project_col';
import Edu_col from './components/Edu_col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

class App extends Component {
  render() {
    function Home() {
      return (

        <React.Fragment>
          <Intro />
          <div className="row">
            <Project_col />
            <Edu_col />
          </div>
          <Footer />
        </React.Fragment>);
    }

    function About() {
      return (
        <React.Fragment>
          <h2>Resume</h2>
          <Footer />
        </React.Fragment>

      );
    }

    function Users() {
      return (
        <React.Fragment>
          <h2>Contact</h2>
          <Footer />
        </React.Fragment>
      );
    }

    function P1() {
      return(
        <React.Fragment>
        <h2>Project 1</h2>
        <Footer />
        </React.Fragment>
      )
    }


    return (



      <Router>
        <div>

          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            <img src="https://dl.dropbox.com/s/2du08hmcfnaqv4p/logo.png?dl=0" />

            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown no-arrow d-sm-none"></li>

              <li className="nav-item dropdown no-arrow mx-1"> <Link to="/" className="nav-link dropdown-toggle">Projects</Link></li>

              <li className="nav-item dropdown no-arrow mx-1"> <Link to="/about" className="nav-link dropdown-toggle">Resume </Link> </li>

              <li className="nav-item dropdown no-arrow mx-1"><Link to="/users" className="nav-link dropdown-toggle" > Contact </Link> </li>

              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Call us ></span>
                  <img className="img-profile rounded-circle" src="https://dl.dropbox.com/s/jq67lusuwgpwbme/phone.png?dl=0" /></a> </li>

            </ul>

          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/p1">
              <P1 />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
