import { Genre } from "types";

export interface State {
  app: {
    title: string;
    width: number | null;
    height: number | null;
  },
  genres: {
    list: Array<Genre> | null;
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
  }
};

export default initialState;
