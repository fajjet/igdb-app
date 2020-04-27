import ACTIONS, { GameActionTypes } from './types';
import { Game, GameDetail, GameBase } from 'types';

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

export const bindSimilarGamesDataBySlug = (similarGamesData: Array<GameBase>, slug: string) : GameActionTypes => {
  return {
    type: ACTIONS.BIND_SIMILAR_GAMES_DATA,
    payload: {
      similarGamesData,
      slug,
    }
  }
};
