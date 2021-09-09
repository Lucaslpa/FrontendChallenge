import * as actionTypes from "./actionTypes";

export const buildActions = (dispatch) => {
  return {
    SET_PATIENTS: (patients) =>
      dispatch({ type: actionTypes.SET_PATIENTS, payload: patients }),
    SET_LOADING: () => dispatch({ type: actionTypes.SET_LOADING }),
  };
};
