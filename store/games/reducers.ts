import ACTION, { GameActionTypes } from './types';
import initialState, { State } from '../initialState';

export default function GamesReducer(
  state = initialState.games,
  action: GameActionTypes,
) :  State['games'] {
  switch (action.type) {
    case ACTION.SET_ANTICIPATED_GAMES: {
      const { games } = action.payload;
      return {
        ...state,
        anticipated: games,
      };
    }
    case ACTION.ADD_GAME: {
      const { game } = action.payload;
      const games = state.detail;
      return {
        ...state,
        detail: {
          ...games,
          [game.slug]: game,
        }
      };
    }
    case ACTION.BIND_SIMILAR_GAMES_DATA: {
      const { similarGamesData, slug } = action.payload;
      const games = state.detail;
      const game = games[slug];
      return {
        ...state,
        detail: {
          ...games,
          [slug]: {
            ...game,
            similarGamesData,
          }
        }
      };
    }
    default:
      return state
  }
}
