import ACTIONS, { StaticActionTypes } from './types';
import { Genre, Platform, GameMode } from "types";

export const setGenres = (genres: Array<Genre>): StaticActionTypes => {
  return {
    type: ACTIONS.SET_GENRES,
    payload: {
      genres,
    }
  }
};

export const setPlatforms = (platforms: Array<Platform>): StaticActionTypes => {
  return {
    type: ACTIONS.SET_PLATFORMS,
    payload: {
      platforms,
    }
  }
};

export const setGameModes = (gameModes: Array<GameMode>): StaticActionTypes => {
  return {
    type: ACTIONS.SET_GAME_MODES,
    payload: {
      gameModes,
    }
  }
};
