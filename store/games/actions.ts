import ACTIONS from './types';
import { AnyAction } from "redux";

export const setAnticipatedGames = (games: any): AnyAction => {
  return {
    type: ACTIONS.SET_ANTICIPATED_GAMES,
    payload: {
      games,
    }
  }
};
