import ACTIONS, { GameActionTypes } from './types';
import { Game, GameDetail } from 'types';

export const setAnticipatedGames = (games: Array<Game>): GameActionTypes => {
  return {
    type: ACTIONS.SET_ANTICIPATED_GAMES,
    payload: {
      games,
    }
  }
};

export const addGame = (game: GameDetail) : GameActionTypes => {
  return {
    type: ACTIONS.ADD_GAME,
    payload: {
      game,
    }
  }
};
