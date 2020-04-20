import ACTIONS, { GenresActionTypes } from './types';
import { Genre } from "types";

export const updateGenres = (genres: Array<Genre>): GenresActionTypes => {
  return {
    type: ACTIONS.UPDATE_GENRES,
    payload: {
      genres,
    }
  }
};
