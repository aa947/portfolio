/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Intro from './components/intro';
import Project_col from './components/Project_col';
import Edu_col from './components/Edu_col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Project_details from './components/project_details';
import Cert_details from './components/Cert_details';
import Project_row from './components/projects_row';
import Contact_row from './components/Contact_row';
import Education_row from './components/Education_row';
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
import Meetings from './components/tasks/meetings';
import Blog from './components/blog/Blog';
import Connecting_to_Atlas from './components/blog/posts/connecting_your_app_to_mongodb_atlas';
import FreeService from './components/tasks/FreeService';
import Report from './components/tasks/Report';
import domain from './config';
import { isLocalhost } from './helpers';
import Experience from './components/Experience';
import WhoAmI from './components/WhoImI';
import CallToActionsCards from './components/CallToActionCards';
import VolunteeringExperience from './components/VolunteeringExperience';




// Call it once in your app. At the root of your app is the best place
toast.configure()

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitors: {
        count: 0,
        unique: 0
      }
    }
  }


  componentDidMount() {
    let viewsUrl = isLocalhost ? `${domain}/api/views` : '/api/views';
    fetch(viewsUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          visitors: {
            count: data.count,
            unique: data.unique
          }
        })
      })
  }

  render() {

    const Home = () => {
      return (
        <React.Fragment>

          <CallToActionsCards />

          {/* <Intro /> */}
          <WhoAmI />
          <Experience />
          <VolunteeringExperience />
          <Services />
          <div className="row"
          //  style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
          >
            <Project_col />
            <Edu_col />
            <br />
          </div>
          <Reviews />
          <br />
          <Footer visitors={this.state.visitors} />
        </React.Fragment >);
    }

    const Projects = () => {
      return (
        <React.Fragment>
          <Project_row />
          <Footer visitors={this.state.visitors} />
        </React.Fragment>

      );
    }

    const Contact = () => {
      return (
        <React.Fragment>
          <Contact_row />
          <Footer visitors={this.state.visitors} />
        </React.Fragment>
      );
    }

    const Education = () => {
      return (
        <React.Fragment>
          <Education_row />
          <Footer visitors={this.state.visitors} />
        </React.Fragment>
      )
    }


    return (
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* **
              *
              * Blog Routes
              */}
            <Route exact path="/blog"> <Blog visitors={this.state.visitors} /> </Route>
            <Route exact path="/blog/posts/connecting-your-app-to-mongodb-atlas">
              <Connecting_to_Atlas />
            </Route>

            {/* **
              *
              * Other Routes
              */}
            <Route path="/contact"
              component={(props) => <Contact {...props} title="contact" />}
            />

            <Route exact path="/claim-your-free-service"
              component={(props) => <FreeService {...props} />}
            />

            <Route path="/education">
              <Education />
            </Route>

            <Route exact path="/meetings" render={(props) => <Meetings {...props} {...this.props} />} />

            <Route exact path="/report" render={(props) => <Report {...props} {...this.props} />} />

            <Route exact path="/services/corona" render={(props) => <CoronaVirus {...props} {...this.props} />} />
            <Route exact path="/services/creditCard" render={(props) => <CreditCard {...props} {...this.props} />} />

            <Route exact path="/services/dg-url" render={(props) => <DgUrl {...props} {...this.props} />} />

            <Route path="/services/forecast" render={(props) => <Forecast {...props} {...this.props} />} />
            <Route path="/projects/:project_id" render={(props) => <Project_details {...props} {...this.props} />} />
            <Route path="/certificates/:cert_id" render={(props) => <Cert_details {...props} {...this.props} />} />

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }

}

export default App;
