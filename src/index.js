import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PatientsContext } from "./Contexts/Patients";
import { PatientModalContext } from "./Contexts/PatientModal";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <PatientsContext>
      <PatientModalContext>
        <Router>
          <App />
        </Router>
      </PatientModalContext>
    </PatientsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
