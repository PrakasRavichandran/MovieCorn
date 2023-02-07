import tmdb from '../apis/tmdb';
import createMovieList from '../utils/createMovieList';
import createTVDetails from '../utils/createTVDetails';
import { FETCH_POPULAR_TV, FETCH_TOP_RATED_TV, FETCH_TV, FETCH_TV_CREDITS, REMOVE_TV } from './types';

export const fetchPopularTV = () => async (dispatch) => {
  const response = await tmdb.get('/tv/popular');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_POPULAR_TV,
    payload: list,
    error: null,
  });
};

export const fetchTopRatedTV = () => async (dispatch) => {
  const response = await tmdb.get('/tv/top_rated');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_TOP_RATED_TV,
    payload: list,
    error: null,
  });
};

export const fetchTV = (id) => async (dispatch) => {
  try {
    const response = await tmdb.get(`/tv/${id}`, {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    });

    const details = createTVDetails(response.data);

    dispatch({
      type: FETCH_TV,
      payload: details,
      error: null,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TV,
      payload: null,
      error: error,
    });
  }
};

export const removeTV = () => {
  return {
    type: REMOVE_TV,
    payload: null,
    error: null,
  };
};

export const fetchTVCredits = (id) => async (dispatch) => {
  const response = await tmdb.get(`/tv/${id}/credits`);

  dispatch({
    type: FETCH_TV_CREDITS,
    payload: response.data,
    error: null,
  });
};
