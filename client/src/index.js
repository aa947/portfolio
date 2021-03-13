import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Extra_App from './Extra_App';
import "bootstrap/dist/css/bootstrap.min.css";
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("root")
);

// ReactDOM.render( <Extra_App />, document.getElementById('Extra_App') );

//registerServiceWorker();
