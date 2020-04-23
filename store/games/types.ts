import { Game, GameDetail } from "types";

enum Types {
  SET_ANTICIPATED_GAMES = 'SET_ANTICIPATED_GAMES',
  ADD_GAME = 'ADD_GAME'
}

interface setAnticipatedGames {
  type: typeof Types.SET_ANTICIPATED_GAMES,
  payload: {
    games: Array<Game>,
  }
}

interface addGame {
  type: typeof Types.ADD_GAME,
  payload: {
    game: GameDetail,
  }
}

export type GameActionTypes = setAnticipatedGames | addGame;

export default Types;
