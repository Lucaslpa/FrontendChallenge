import { PatientModalContext } from "./PatientModal";
import { PatientsContext } from "./Patients";
import PropTypes from "prop-types";

export const Contexts = ({ children }) => (
  <PatientsContext>
    <PatientModalContext>{children}</PatientModalContext>
  </PatientsContext>
);

Contexts.propTypes = {
  children: PropTypes.any,
};
