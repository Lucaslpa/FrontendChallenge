import { actionTypes } from "./Actions";

export const buildActions = (dispatch) => {
  return {
    SET_PATIENTS: (patients) => {
      return dispatch({ type: actionTypes.SET_PATIENTS, payload: patients });
    },
    SET_LOADING: () => dispatch({ type: actionTypes.SET_LOADING }),
    SET_LOADING_GM: () => dispatch({ type: actionTypes.SET_LOADING_GM }),
    SET_PAGE: (newPage) =>
      dispatch({ type: actionTypes.SET_PAGE, payload: newPage }),
  };
};
