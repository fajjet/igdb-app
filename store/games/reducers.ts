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
    default:
      return state
  }
}
