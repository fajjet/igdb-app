import { Game } from "types";

enum Types {
  SET_ANTICIPATED_GAMES = 'SET_ANTICIPATED_GAMES',
}

interface setAnticipatedGames {
  type: typeof Types.SET_ANTICIPATED_GAMES,
  payload: {
    games: Array<Game>,
  }
}

export type GameActionTypes = setAnticipatedGames;

export default Types;
