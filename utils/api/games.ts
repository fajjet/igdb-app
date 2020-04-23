import { Dispatch } from "redux";

import { keysToCamel } from 'utils';
import { GameResponse, GameDetail } from 'types';
import { fetchCoversByArrayOfIds } from "./covers";
import actions from 'store/actions';

const baseFields = 'id, name, cover, slug, genres, first_release_date, hypes';
const detailFields = `platforms, status, category, 
game_engines, game_modes, involved_companies, multiplayer_modes, rating, status, storyline, summary, total_rating`;

export const fetchMostAnticipatedGames = () => {
  return async (dispatch: Dispatch) => {
    const now = new Date().getTime();
    const response = await fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fields: baseFields,
        where: [`first_release_date > ${Math.round(now / 1000)}`, 'hypes != null'],
        sort: 'hypes desc',
        limit: 12,
      }),
    });
    const games: Array<GameResponse> = (await response.json()).map((el: object) => keysToCamel(el));
    const coverIds = games.map((g) => g.cover);
    const covers = await fetchCoversByArrayOfIds(coverIds);
    const gamesWithCovers = games.map((game) => {
      const cover = covers.find(c => c.id === game.cover);
      const imageId = cover?.imageId || '';
      return {
        ...game,
        cover: imageId,
      };
    });
    dispatch(actions.setAnticipatedGames(gamesWithCovers));
  }
};

export const fetchDetailGameBySlug = async (slug: string) : Promise<GameDetail | null> => {
  const response = await fetch('/api/games', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: baseFields + ',' + detailFields,
      where: `slug = "${slug}"`,
    }),
  });
  const responseArray: Array<object> = await response.json();
  if (!responseArray.length) {
    return null;
  }
  const game: any = keysToCamel(responseArray[0]);
  const cover = await fetchCoversByArrayOfIds([game.cover]);
  game.cover = cover[0]?.imageId;
  return game;
};
