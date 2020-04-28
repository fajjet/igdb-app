import { GameEngine } from 'types';

export const fetchEnginesByIds = async (ids: Array<number>) => {
  if (!Array.isArray(ids)) return [];
  const response = await fetch('/api/game_engines', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, slug',
      where: `id = (${ids.filter(v => !!v)})`,
    }),
  });
  const result: Array<GameEngine> = await response.json();
  return result;
};
