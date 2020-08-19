/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
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
import { isLocalhost, chooseSideColor } from './helpers';
import Experience from './components/Experience';
import WhoAmI from './components/WhoImI';
import CallToActionsCards from './components/CallToActionCards';
import VolunteeringExperience from './components/VolunteeringExperience';
import Skills from './components/Skills';
import FeauterdProjects from './components/FeaturedProjects';
import OwnProjects from './components/OwnProjects';
import CoursesProjects from './components/CoursesProjects';
import FormalEducation from './components/FormalEducation';
import OnlineEducation from './components/OnlineEducation';
import EmbededBlog from './components/EmbededBlog'
import YoutubeChannel from './components/YoutubeChannel';
import Contact_form from './components/Contact_form';
import ReviewForm from './components/ReviewForm';
import QuickSiteMap from './components/QuiuclSiteMap';




// Call it once in your app. At the root of your app is the best place
toast.configure()

class App extends Component {

  render() {

    const Home = () => {
      return (
        <React.Fragment>

          <CallToActionsCards />

          <div id="who-am-i" />
          <WhoAmI />

          <div id="quick-site-map" />
          <QuickSiteMap />

          <div id="experience" />
          <Experience />

          <div id="vlounteering" />
          <VolunteeringExperience />

          <div id="skills" />
          <Skills
            change={true}
          />

          <div id="featured-projects" />
          <FeauterdProjects />

          <div id="own-projects" />
          <OwnProjects />

          <div id="courses-project" />
          <CoursesProjects />

          <div id="formal-education" />
          <FormalEducation />

          <div id="online-education" />
          <OnlineEducation />

          <div id="blog" />
          <EmbededBlog />

          <div id="youtube" />
          <YoutubeChannel />

          <div id="contact" />
          <Contact_form />

          <div id="add-review" />
          <ReviewForm />

          <div id="" />
          <Reviews />
          <br />
          {/* <Footer visitors={this.state.visitors} /> */}

        </React.Fragment>
      );
    }

    const Projects = () => {
      return (
        <>
          <div id="featured-projects" />
          <FeauterdProjects />

          <div id="own-projects" />
          <OwnProjects />

          <div id="courses-project" />
          <CoursesProjects />
        </>

      );
    }

    const Contact = () => {
      return (
        <>
          <div id="contact" />
          <Contact_form />
        </>
      );
    }

    const Education = () => {
      return (
        <>
          <div id="formal-education" />
          <FormalEducation />

          <div id="online-education" />
          <OnlineEducation />
        </>
      )
    }

    const NewBlog = () => {
      return (
        <div>
          <div id="blog" />
          <EmbededBlog />
          <div id="youtube" />
          <YoutubeChannel />
        </div>
      );
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
            <Route exact path="/blog"> <NewBlog /> </Route>
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
          <Footer />

        </div>
      </Router>
    );
  }

}

export default App;
