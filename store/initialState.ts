import { Genre, Game, GameDetail, Platform, GameMode, Company } from "types";

interface DetailGame {
  [key: string]: GameDetail;
}

interface CompanyState {
  [key: string]: Company;
}

export interface State {
  app: {
    title: string;
    width: number | null;
    height: number | null;
  },
  static: {
    genres: Array<Genre> | null;
    platforms: Array<Platform> | null,
    gameModes: Array<GameMode> | null;
  },
  games: {
    anticipated: Array<Game> | null,
    detail: DetailGame;
  },
  companies: CompanyState,
}

const initialState: State = {
  app: {
    title: '',
    width: null,
    height: null,
  },
  static: {
    genres: null,
    platforms: null,
    gameModes: null,
  },
  games: {
    anticipated: null,
    detail: {},
  },
  companies: {},
};

export default initialState;
