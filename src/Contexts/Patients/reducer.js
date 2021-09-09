/* eslint-disable no-case-declarations */
import * as actionTypes from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PATIENTS:
      const patients = [...state.patients, ...action.payload];
      return { ...state, patients };
    case actionTypes.SET_LOADING:
      return { ...state, loading: !state.loading };
    case actionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    case actionTypes.SET_LOADING_GM:
      return { ...state, loadingGM: !state.loadingGM };
    default:
      return state;
  }
};
