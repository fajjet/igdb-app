import { Genre } from "types";

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
    anticipated: Array<any> | null,
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
  },
};

export default initialState;
