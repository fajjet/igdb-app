import ACTION, { GenresActionTypes } from './types';
// import { AnyAction } from "redux";
import initialState, { State } from '../initialState';

export default function GenresReducer(
  state = initialState.genres,
  action: GenresActionTypes,
) : State['genres'] {
  switch (action.type) {
    case ACTION.UPDATE_GENRES: {
      const { genres } = action.payload;
      return {
        ...state,
        list: genres,
      };
    }
    default:
      return state
  }
}
