import { Game, GameDetail, GameBase } from "types";

enum Types {
  SET_ANTICIPATED_GAMES = 'SET_ANTICIPATED_GAMES',
  ADD_GAME = 'ADD_GAME',
  BIND_SIMILAR_GAMES_DATA = 'BIND_SIMILAR_GAMES_DATA',
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

interface bindSimilarGamesData {
  type: typeof Types.BIND_SIMILAR_GAMES_DATA,
  payload: {
    similarGamesData: Array<GameBase>,
    slug: string,
  }
}

export type GameActionTypes = setAnticipatedGames | addGame | bindSimilarGamesData;

export default Types;
