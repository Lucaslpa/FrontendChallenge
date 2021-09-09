import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PatientsContext } from "./Contexts/Patients";

ReactDOM.render(
  <React.StrictMode>
    <PatientsContext>
      <App />
    </PatientsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
