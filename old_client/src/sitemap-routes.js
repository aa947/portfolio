import React from 'react';
import { Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro';
// import RowOfElements from './components/RowOfElements';
import Project_col from './components/Project_col';
import Edu_col from './components/Edu_col';
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




 
export default (
    <Route>
            <Route path="/contact">
              <Contact />
            </Route>
          
            <Route path="/">
              <Home />
            </Route>
    </Route>
);