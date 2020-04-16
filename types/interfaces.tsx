
export interface ApiOptions {
  fields?: string;
  sort?: string;
  where?: string;
  limit?: number;
  offset?: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}
