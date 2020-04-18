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
