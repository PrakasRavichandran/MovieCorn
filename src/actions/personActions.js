import tmdb from '../apis/tmdb';
import createPersonDetails from '../utils/createPersonDetails';
import { FETCH_PERSON, REMOVE_PERSON, FETCH_PERSON_CREDITS } from './types';

export const fetchPerson = (id) => async (dispatch) => {
  try {
    const response = await tmdb.get(`/person/${id}`, {
      params: {
        append_to_response: 'credits',
      },
    });

    const details = createPersonDetails(response.data);

    dispatch({
      type: FETCH_PERSON,
      payload: details,
      error: null,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PERSON,
      payload: null,
      error: error,
    });
  }
};

export const fetchPersonCredits = (id) => async (dispatch) => {
  const response = await tmdb.get(`/person/${id}/combined_credits`);

  dispatch({
    type: FETCH_PERSON_CREDITS,
    payload: response.data,
    error: null,
  });
};

export const removePerson = () => {
  return {
    type: REMOVE_PERSON,
    payload: null,
    error: null,
  };
};
