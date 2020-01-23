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
import Project_details from './components/project_details';
import Cert_details from './components/Cert_details';
import Project_row from './components/projects_row';
import Contact_row from './components/Contact_row';
import Education_row from './components/Education_row';
import Contact_form from './components/Contact_form';

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

    function Projects() {
      return (
        <React.Fragment>
          <Project_row />
          <Footer />
        </React.Fragment>

      );
    }

    function Contact() {
      return (
        <React.Fragment>
         <Contact_row  />
          <Footer />
        </React.Fragment>
      );
    }

    function Education() {
      return (
        <React.Fragment>
          <Education_row />
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

            <img src="https://dl.dropbox.com/s/2du08hmcfnaqv4p/logo.png?dl=0" width ="25%"   />

            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown no-arrow d-sm-none"></li>

              <li className="nav-item dropdown no-arrow mx-1" > <Link to="/" className="nav-link dropdown-toggle" style={{color: "black"}} >Home</Link></li>

              <li className="nav-item dropdown no-arrow mx-1"> <Link to="/projects" className="nav-link dropdown-toggle" style= {{color: "black"}}>Projects </Link> </li>

              <li className="nav-item dropdown no-arrow mx-1"><Link to="/contact" className="nav-link dropdown-toggle" style={{color: "black"}} > Contact </Link> </li>

              <li className="nav-item dropdown no-arrow mx-1"><Link to="/education" className="nav-link dropdown-toggle" style={{color: "black"}} > Education </Link> </li>

              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="tel:+447383164194">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Call us ></span>
                  <img className="img-profile rounded-circle" src="https://dl.dropbox.com/s/jq67lusuwgpwbme/phone.png?dl=0" /></a> </li>

            </ul>

          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
              </Route>
              <Route path="/education">
              <Education />
            </Route>
            <Route path="/api/p/:project_id" render={ (props) => <Project_details {...props} {...this.props}  />  } / >
            <Route path="/api/c/:cert_id" render={ (props) => <Cert_details {...props} {...this.props}  />  } / >
              {/* <Project_details /> */}
            {/* </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
