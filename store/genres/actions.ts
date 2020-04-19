import ACTIONS, { GenresActionTypes } from './types';
import { Genre } from "types";
// import { AnyAction } from "redux";

export const updateGenres = (genres: Array<Genre>): GenresActionTypes => {
  return {
    type: ACTIONS.UPDATE_GENRES,
    payload: {
      genres,
    }
  }
};
