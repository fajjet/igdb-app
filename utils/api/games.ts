import { Dispatch } from "redux";

import { Game } from 'types';
import { fetchCoversByArrayOfIds } from "./covers";
import actions from 'store/actions';

export const fetchMostAnticipatedGames = () => {
  return async (dispatch: Dispatch) => {
    const now = new Date().getTime();
    const response = await fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fields: 'id, name, cover, slug, genres, first_release_date, hypes',
        where: [`first_release_date > ${Math.round(now / 1000)}`, 'hypes != null'],
        sort: 'hypes desc',
        limit: 12,
      }),
    });
    const games = await response.json();
    const coverIds = games.map((g: any) => g.cover);
    const covers = await fetchCoversByArrayOfIds(coverIds);
    const gamesWithCovers = games.map((game: any): Array<Game> => {
      const cover = covers.find(c => c.id === game.cover);
      return {
        ...game,
        cover: cover?.imageId,
        firstReleaseDate: game.first_release_date,
      };
    });
    dispatch(actions.setAnticipatedGames(gamesWithCovers));
  }
};

export const fetchDetailGameBySlug = (slug: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fields: '*',
        where: `slug = "${slug}"`,
      }),
    });
    const game = response.json();
    console.log(game)
  }
};
