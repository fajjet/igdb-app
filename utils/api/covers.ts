import { Cover } from 'types';

export const fetchCoversByArrayOfIds = async (ids: Array<number>) : Promise<Cover[]> => {
  if (!Array.isArray(ids)) return [];
  const response = await fetch('/api/covers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, image_id',
      where: `id = (${ids.filter(v => !!v)})`,
    }),
  });
  const result = await response.json();
  return result.map((cover: any) => {
    return {
      id: cover.id,
      imageId: cover.image_id,
    }
  });
};
