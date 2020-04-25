import { Genre, Platform, GameMode } from 'types';

enum Types {
  SET_GENRES = 'SET_GENRES',
  SET_PLATFORMS = 'SET_PLATFORMS',
  SET_GAME_MODES = 'SET_GAME_MODES',
}

interface setGenres {
  type: typeof Types.SET_GENRES
  payload: {
    genres: Array<Genre>,
  }
}

interface setPlatforms {
  type: typeof Types.SET_PLATFORMS
  payload: {
    platforms: Array<Platform>,
  }
}

interface setGameModes {
  type: typeof Types.SET_GAME_MODES
  payload: {
    gameModes: Array<GameMode>,
  }
}

export default Types;

export type StaticActionTypes = setGenres | setPlatforms | setGameModes;
