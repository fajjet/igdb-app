import ACTION, { StaticActionTypes } from './types';
import initialState, { State } from '../initialState';

export default function StaticReducer(
  state = initialState.static,
  action: StaticActionTypes,
) : State['static'] {
  switch (action.type) {
    case ACTION.SET_GENRES: {
      const { genres } = action.payload;
      return {
        ...state,
        genres,
      };
    }
    case ACTION.SET_PLATFORMS: {
      const { platforms } = action.payload;
      return {
        ...state,
        platforms,
      };
    }
    case ACTION.SET_GAME_MODES: {
      const { gameModes } = action.payload;
      return {
        ...state,
        gameModes,
      };
    }
    default:
      return state
  }
}
