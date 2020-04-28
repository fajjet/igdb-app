import { Game } from 'types';

export const getRelativeHypeLevel = (games: Array<Game>, gameIndex: number) => {
  const sum = games.reduce((acc, cur) => {
    const hype = cur.hypes || 0;
    return acc + hype;
  }, 0);
  const avg = sum / games.length;
  const point = avg;
  const currentGameHype = games[gameIndex]?.hypes || 0;
  const level = currentGameHype / point;
  return level > 1 ? 1 : level;
};
