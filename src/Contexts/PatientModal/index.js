import { useReducer, createContext, useContext } from "react";
import PropTypes from "prop-types";

import { reducer } from "./reducer";

const initialState = {
  modalIsOpen: false, 
  patient: {}
};
const Context = createContext({});

export const PatientModalContext = ({ children }) => {
  return (
    <Context.Provider value={[...useReducer(reducer, initialState)]}>
      {children}
    </Context.Provider>
  );
};

PatientModalContext.propTypes = {
  children: PropTypes.any,
};

export const usePatientModalContext = () => {
  const context = useContext(Context);

  return [...context];
};
