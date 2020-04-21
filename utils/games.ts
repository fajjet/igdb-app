import { Game } from 'types';

export const getRelativeHypeLevel = (games: Array<Game>, gameIndex: number) => {
  let sum = 0;
  const max = games.reduce((acc, cur) => {
    const hype = cur.hypes || 0;
    sum += hype;
    return hype > acc ? hype : acc;
  }, 0);
  const avg = sum / games.length;
  const point = avg + ((max - avg) / 2);
  const currentGameHype = games[gameIndex]?.hypes || 0;
  const level = currentGameHype / point;
  return level > 1 ? 1 : level;
};
