import * as actionTypes from "./actionTypes";

export const buildActions = (dispatch) => {
  return {
    SET_PATIENT: (patient) => {
      return dispatch({ type: actionTypes.SET_PATIENT, payload: patient });
    },
    SET_LOADING: () => dispatch({ type: actionTypes.SET_LOADING }),
    SET_OPEN_MODAL: () => dispatch({ type: actionTypes.SET_OPEN_MODAL }),
  };
};
