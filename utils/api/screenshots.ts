import { Screenshot } from 'types';

export const fetchSreenshotsByIds = async (ids: Array<number>) => {
  const response = await fetch('/api/screenshots', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: '*',
      where: `id = (${ids})`,
    }),
  });
  const result: Array<Screenshot> = await response.json();
  return result;
};
