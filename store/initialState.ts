import { Genre, Game, GameDetail } from "types";

interface DetailGame {
  [key: string]: GameDetail;
}

export interface State {
  app: {
    title: string;
    width: number | null;
    height: number | null;
  },
  genres: {
    list: Array<Genre> | null;
  },
  games: {
    anticipated: Array<Game> | null,
    detail: DetailGame;
  }
}

const initialState: State = {
  app: {
    title: '',
    width: null,
    height: null,
  },
  genres: {
    list: null,
  },
  games: {
    anticipated: null,
    detail: {},
  },
};

export default initialState;
