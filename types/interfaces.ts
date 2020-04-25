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

export interface InvolvedCompany {
  company: number;
  developer: boolean;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
}

export interface Company {
  id: number;
  country: number;
  description: string;
  developed: Array<number>;
  logo: number;
  name: string;
  slug: string;
}

export interface GameDetail extends Game {
  summary: string;
  storyline: string;
  rating: number;
  gameModes: Array<number>;
  platforms: Array<number>;
  involvedCompanies: Array<InvolvedCompany>;
}

export interface GameResponse extends Omit<Game, 'cover'>{
  cover: number;
}

export interface Cover {
  id: number;
  imageId: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  logo?: string;
}

export interface PlatformResponse extends Omit<Platform, 'logo'>{
  platformLogo: number;
}

export interface GameMode {
  id: number;
  name: string;
  slug: string;
}
