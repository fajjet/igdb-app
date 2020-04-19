import ACTIONS from './types';
import { Genre } from "types";
import { AnyAction } from "redux";

export const updateGenres = (genres: Array<Genre>): AnyAction => {
  return {
    type: ACTIONS.UPDATE_GENRES,
    payload: {
      genres,
    }
  }
};
