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
    default:
      return state
  }
}
