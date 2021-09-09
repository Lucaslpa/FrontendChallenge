import { useReducer, createContext, useContext } from "react";
import PropTypes from "prop-types";

import { reducer } from "./reducer";

const initialState = {
  patients: [],
  loading: true,
  loadingGM: false,
  page: 1,
};
const Context = createContext([]);

export const PatientsContext = ({ children }) => {
  return (
    <Context.Provider value={[...useReducer(reducer, initialState)]}>
      {children}
    </Context.Provider>
  );
};

PatientsContext.propTypes = {
  children: PropTypes.any,
};

export const usePatientsContext = () => {
  const context = useContext(Context);

  return [...context];
};
