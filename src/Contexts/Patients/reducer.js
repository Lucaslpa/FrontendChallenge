import * as actionTypes from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PATIENTS:
      return { ...state, patients: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
