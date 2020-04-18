import ACTION from './types';
import { AnyAction } from "redux";
import initialState from '../initialState';

export default function AppReducer(
  state = initialState.app,
  action: AnyAction,
) {
  switch (action.type) {
    case ACTION.SET_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    case ACTION.CHANGE_DIMENSIONS:
      const { width, height } = action.payload;
      return {
        ...state,
        width,
        height
      };
    default:
      return state
  }
}
