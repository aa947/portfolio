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
import './App.css';
import Reviews from './components/Reviews';
import Forecast from './components/services/Forecast';
import Services from './components/services';
import CreditCard from './components/services/creditCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CoronaVirus from './components/services/coronaVirus';
import DgUrl from './components/services/dg-url';





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
            <Route exact path="/services/corona" render={(props) => <CoronaVirus {...props} {...this.props} />} />
            <Route exact path="/services/creditCard" render={(props) => <CreditCard {...props} {...this.props} />} />

            <Route exact path="/services/dg-url" render={(props) => <DgUrl {...props} {...this.props} />} />

            <Route path="/services/forecast" render={(props) => <Forecast {...props} {...this.props} />} />
            <Route path="/projects/:project_id" render={(props) => <Project_details {...props} {...this.props} />} />
            <Route path="/certificates/:cert_id" render={(props) => <Cert_details {...props} {...this.props} />} />
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
