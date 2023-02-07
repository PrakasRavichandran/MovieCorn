import tmdb from '../apis/tmdb';
import createMovieList from '../utils/createMovieList';
import createMovieDetails from '../utils/createMovieDetails';
import {
  FETCH_TRENDING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIE_CREDITS,
  REMOVE_MOVIE,
  FETCH_NOW_PLAYING,
} from './types';

export const fetchTrendingMovies = () => async (dispatch) => {
  const response = await tmdb.get('/trending/movie/week');
  dispatch({
    type: FETCH_TRENDING_MOVIES,
    payload: response.data.results,
    error: null,
  });
};

export const fetchPopularMovies = () => async (dispatch) => {
  const response = await tmdb.get('/movie/popular');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_POPULAR_MOVIES,
    payload: list,
    error: null,
  });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const response = await tmdb.get('/movie/top_rated');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: list,
    error: null,
  });
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await tmdb.get('/movie/upcoming');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: list,
    error: null,
  });
};

export const fetchNowPlaying = () => async (dispatch) => {
  const response = await tmdb.get('/movie/now_playing');
  const list = createMovieList(response.data.results);

  dispatch({
    type: FETCH_NOW_PLAYING,
    payload: list,
    error: null,
  });
};

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const response = await tmdb.get(`/movie/${id}`, {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    });

    const details = createMovieDetails(response.data);

    dispatch({
      type: FETCH_MOVIE,
      payload: details,
      error: null,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIE,
      payload: null,
      error: error,
    });
  }
};

export const fetchMovieCredits = (id) => async (dispatch) => {
  const response = await tmdb.get(`/movie/${id}/credits`);

  dispatch({
    type: FETCH_MOVIE_CREDITS,
    payload: response.data,
    error: null,
  });
};

export const removeMovie = () => {
  return {
    type: REMOVE_MOVIE,
    payload: null,
    error: null,
  };
};
