import ACTIONS from './types';
import { AnyAction } from "redux";

export const setTitle = (title: string): AnyAction => {
  return {
    type: ACTIONS.SET_TITLE,
    payload: { title }
  }
};

export const changeDimensions = (width: number, height: number): AnyAction => {
  return {
    type: ACTIONS.CHANGE_DIMENSIONS,
    payload: { width, height }
  }
};
