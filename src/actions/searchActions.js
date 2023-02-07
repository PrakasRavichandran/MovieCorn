import tmdb from '../apis/tmdb';
import createSearchList from '../utils/createSearchList';
import { SEARCH_QUERY, REMOVE_SEARCH_QUERY } from './types';

export const searchQuery = (query) => async (dispatch) => {
  try {
    const response = await tmdb.get(`/search/multi`, {
      params: {
        query,
      },
    });

    const list = createSearchList(response.data.results);

    dispatch({
      type: SEARCH_QUERY,
      payload: list,
      error: null,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_QUERY,
      payload: null,
      error: error,
    });
  }
};

export const removeSearchQuery = () => {
  return {
    type: REMOVE_SEARCH_QUERY,
    payload: null,
    error: null,
  };
};
