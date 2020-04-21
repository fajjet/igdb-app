import { Cover } from 'types';

export const fetchCoversByArrayOfIds = async (ids: Array<number>) : Promise<Cover[]> => {
  const response = await fetch('/api/covers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, image_id',
      where: `id = (${ids})`,
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
