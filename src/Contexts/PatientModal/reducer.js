/* eslint-disable no-case-declarations */
import * as actionTypes from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PATIENT:
      const patient = action.payload;
      return { ...state, patient };
    case actionTypes.SET_LOADING:
      return { ...state, loading: !state.loading };
    case actionTypes.SET_OPEN_MODAL:
      return { ...state, modalIsOpen: !state.modalIsOpen };
    default:
      return state;
  }
};
