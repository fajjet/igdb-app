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

export interface GameBase {
  id: number;
  cover: number;
  coverHash?: string;
  name: string;
  slug: string;
}

export interface Game extends GameBase{
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
  totalRating: number;
  status: number;
  category: number;
  gameModes: Array<number>;
  gameEngines: Array<number>;
  platforms: Array<number>;
  screenshots: Array<number>;
  involvedCompanies: Array<number>;
  similarGames: Array<number>;
  involvedCompaniesData?: Array<InvolvedCompany>;
  gameEnginesData?: Array<GameEngine>;
  similarGamesData?: Array<GameBase>
  screenshotsData?: Array<Screenshot>;
}

export interface Cover {
  id: number;
  imageId: string;
}

export interface GameEngine {
  id: number;
  name: string;
  slug: string;
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

export interface Screenshot {
  id: number;
  imageId: string;
}
