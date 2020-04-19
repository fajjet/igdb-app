import ACTION from './types';
import { AnyAction } from "redux";
import initialState from '../initialState';

export default function GenresReducer(
  state = initialState.genres,
  action: AnyAction,
) {
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
