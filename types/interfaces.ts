export type ApiOptions = {
  fields?: string | Array<string>;
  sort?: string | Array<string>;
  where?: string | Array<string>;
  limit?: number;
  offset?: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  cover: string;
  name: string;
  slug: string;
  genres: Array<number>;
  hypes: number;
  firstReleaseDate: number;
}

export interface GameDetail extends Game {
  summary: string;
  rating: number;
}

export interface GameResponse extends Omit<Game, 'cover'>{
  cover: number;
}

export interface Cover {
  id: number;
  imageId: string;
}

