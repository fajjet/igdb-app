import { Dispatch  } from "redux";

import actions from 'store/actions';

export const fetchGenres = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch('/api/genres', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fields: 'id, name, slug',
      }),
    });
    const genres = await response.json();
    dispatch(actions.updateGenres(genres));
  }
};
