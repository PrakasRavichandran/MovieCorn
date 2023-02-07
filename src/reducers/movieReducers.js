/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_TOP_RATED_MOVIES,
  FETCH_TRENDING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIE_CREDITS,
  REMOVE_MOVIE,
  FETCH_NOW_PLAYING,
} from '../actions/types';

const INITIAL_STATE = {
  topRatedMovies: null,
  trendingMovies: null,
  popularMovies: null,
  upcomingMovies: null,
  nowPlaying: null,
  movie: null,
  credits: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_RATED_MOVIES:
      return { ...state, topRatedMovies: action.payload, error: action.error };
    case FETCH_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.payload, error: action.error };
    case FETCH_POPULAR_MOVIES:
      return { ...state, popularMovies: action.payload, error: action.error };
    case FETCH_UPCOMING_MOVIES:
      return { ...state, upcomingMovies: action.payload, error: action.error };
    case FETCH_NOW_PLAYING:
      return { ...state, nowPlaying: action.payload, error: action.error };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload, error: action.error };
    case FETCH_MOVIE_CREDITS:
      return { ...state, credits: action.payload };
    case REMOVE_MOVIE:
      return { ...state, movie: action.payload, error: action.error };
    default:
      return state;
  }
};
