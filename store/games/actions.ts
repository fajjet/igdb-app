import ACTIONS, { GameActionTypes } from './types';
import { Game } from 'types';

export const setAnticipatedGames = (games: Array<Game>): GameActionTypes => {
  return {
    type: ACTIONS.SET_ANTICIPATED_GAMES,
    payload: {
      games,
    }
  }
};
