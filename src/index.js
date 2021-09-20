import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PatientsContext } from "./Contexts/Patients";
import { PatientModalContext } from "./Contexts/PatientModal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <PatientsContext>
      <PatientModalContext>
        <Router>
          <Switch>
          <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/patient/:uuid">
              <App />
            </Route>
          </Switch>
        </Router>
      </PatientModalContext>
    </PatientsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
