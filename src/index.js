import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
import App from "./App";
import { PatientsContext } from "./Contexts/Patients";
import { PatientModalContext } from "./Contexts/PatientModal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/patient/:uuid">
        <App />
      </Route>
    </Switch>
  </Router>
);

const Contexts = ({ children }) => (
  <PatientsContext>
    <PatientModalContext>{children}</PatientModalContext>
  </PatientsContext>
);

ReactDOM.render(
  <React.StrictMode>
    <Contexts>
      <Routes />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);

Contexts.propTypes = {
  children: PropTypes.any,
};
