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
}
