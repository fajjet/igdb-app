import { GameEngine } from 'types';

export const fetchEnginesByIds = async (ids: Array<number>) => {
  const response = await fetch('/api/game_engines', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, slug',
      where: `id = (${ids})`,
    }),
  });
  const result: Array<GameEngine> = await response.json();
  return result;
};
