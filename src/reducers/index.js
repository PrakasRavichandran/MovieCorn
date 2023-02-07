import { combineReducers } from 'redux';
import movieReducers from './movieReducers';
import personReducers from './personReducers';
import tvReducers from './tvReducers';
import searchReducers from './searchReducers';

export default combineReducers({
  movies: movieReducers,
  persons: personReducers,
  tv: tvReducers,
  search: searchReducers,
});
