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

export interface GameResponseFields {
  id?: number | any;
  age_ratings?: Array<number> | any;
  artworks?: Array<number> | any;
  category?: number | any;
  cover?: number | any;
  created_at?: number | any;
  external_games?: Array<number> | any;
  first_release_date?: number | any;
  franchise?: number | any;
  franchises?: Array<number> | any;
  game_engines?: Array<number> | any;
  game_modes?: Array<number> | any;
  genres?: Array<number> | any;
  hypes?: number | any;
  involved_companies?: Array<number> | any;
  keywords?: Array<number> | any;
  name?: string | any;
  platforms?: Array<number> | any;
  player_perspectives?: Array<number> | any;
  popularity?: number | any;
  pulse_count?: number | any;
  release_dates?: Array<number> | any;
  screenshots?: Array<number> | any;
  similar_games?: Array<number> | any;
  slug?: string | any;
  storyline?: string | any;
  summary?: string | any;
  tags?: Array<number> | any;
  themes?: Array<number> | any;
  updated_at?: number | any;
  url?: string | any;
  videos?: Array<number> | any;
  websites?: Array<number> | any;
}

export interface Game {
  id: number;
  cover: string;
  name: string;
  slug: string;
  genres: Array<number>;
  firstReleaseDate: number;
  hypes: number;
}

export interface Cover {
  id: number;
  imageId: number;
}

