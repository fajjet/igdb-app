
export const fetchCoversByArrayOfIds = async (ids: Array<number>) => {
  if (!ids || !ids?.length) return null;
  const response = await fetch('/api/covers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'image_id',
      where: `id = (${ids})`,
    }),
  });
  const result = await response.json();
  return result.map((cover: any) => cover.image_id);
};
