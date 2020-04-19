import { Genre } from 'types';

enum Types {
  UPDATE_GENRES = 'UPDATE_GENRES',
}

interface UpdateGenres {
  type: typeof Types.UPDATE_GENRES
  payload: {
    genres: Array<Genre>,
  }
}

export default Types;

export type GenresActionTypes = UpdateGenres;
