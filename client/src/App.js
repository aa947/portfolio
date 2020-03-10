/* eslint-disable */
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
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import Edit_project from './components/Edit_project';
import Services from './components/Services';
import FirstAPI from './components/services/firstAPI';
import Forecast from './components/services/Forecast';
import CreditCard from './components/services/creditCard';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Call it once in your app. At the root of your app is the best place
toast.configure()

class App extends Component {

 

  render() {


    function Home() {
      return (

        <React.Fragment>
          <Intro />
          <Services />
          <div className="row">
            <Project_col />
            <Edu_col />
            <br />
           

          </div>
          <Reviews />
          <br />
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
          <Contact_row />
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
          {/* nav rapper */}


<Nav />


          {/* end of loer nav rapper */}

          {/* end nav rapper */}

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
            <Route path="/api/p/:project_id" render={(props) => <Project_details {...props} {...this.props} />} />
            <Route exact path="/api/s/firstAPI" render={(props) => <FirstAPI {...props} {...this.props} />} />
            <Route exact path="/api/s/creditCard" render={(props) => <CreditCard {...props} {...this.props} />} />
            <Route exact path="/api/s/forecast" render={(props) => <Forecast {...props} {...this.props} />} />
            <Route path="/api/e/:project_id" render={(props) => <Edit_project {...props} {...this.props} />} />
            {/* <Route path="/api/edit_project/:project_id" render={(props) => <Project_details {...props} {...this.props} />} /> */}
            <Route path="/api/c/:cert_id" render={(props) => <Cert_details {...props} {...this.props} />} />
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
