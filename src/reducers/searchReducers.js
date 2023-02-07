/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_QUERY, REMOVE_SEARCH_QUERY } from '../actions/types';

const INITIAL_STATE = {
  results: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, results: action.payload, error: action.error };
    case REMOVE_SEARCH_QUERY:
      return { ...state, results: action.payload, error: action.error };
    default:
      return state;
  }
};
