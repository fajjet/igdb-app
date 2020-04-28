import { Screenshot } from 'types';
import {keysToCamel} from "../helpers";

export const fetchSreenshotsByIds = async (ids: Array<number>) => {
  if (!Array.isArray(ids)) return [];
  const response = await fetch('/api/screenshots', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, image_id',
      where: `id = (${ids.filter(v => !!v)})`,
    }),
  });
  const result: Array<Screenshot> = (await response.json()).map((el: object) => keysToCamel(el));
  return result;
};
