import { Dispatch } from "redux";

import { keysToCamel } from 'utils';
import { Game, GameBase, GameDetail, Cover } from 'types';
import { fetchCoversByArrayOfIds } from "./covers";
import { fetchInvolvedCompaniesByIds, fetchAndDispatchCompaniesByIds } from './companies';
import { fetchEnginesByIds } from './gameEngines';
import { fetchSreenshotsByIds } from './screenshots';
import actions from 'store/actions';

const baseFields = 'id, name, cover, slug, genres, first_release_date, hypes, total_rating';
const detailFields = `platforms, status, category, total_rating, 
game_engines, game_modes, involved_companies, similar_games, rating, status, storyline, summary, screenshots`;

const attachCoversToGames = (games: Array<any>, covers: Array<Cover>) => {
  return games.map((game) => {
    const cover = covers.find(c => c.id === game.cover);
    const imageId = cover?.imageId || '';
    return {
      ...game,
      coverHash: imageId,
    };
  });
};

export const fetchBaseGamesDataWithCoversByIds = async (ids: Array<number>) => {
  const response = await fetch('/api/games', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, cover, slug',
      where: `id = (${ids.filter(v => !!v)})`
    }),
  });
  const games: Array<GameBase> = (await response.json()).map((el: object) => keysToCamel(el));
  const coverIds = games.map((g) => g.cover);
  const covers = await fetchCoversByArrayOfIds(coverIds);
  const gamesWithCovers: Array<GameBase> = attachCoversToGames(games, covers);
  return gamesWithCovers;
};

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
    const games: Array<Game> = (await response.json()).map((el: object) => keysToCamel(el));
    const coverIds = games.map((g) => g.cover);
    const covers = await fetchCoversByArrayOfIds(coverIds);
    const gamesWithCovers: Array<Game> = attachCoversToGames(games, covers);
    dispatch(actions.setAnticipatedGames(gamesWithCovers));
  }
};

export const fetchDetailGameBySlug = async (slug: string, dispatch: Dispatch) : Promise<GameDetail | null> => {
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
  const game: GameDetail = keysToCamel(responseArray[0]);

  const involvedCompanies = await (fetchInvolvedCompaniesByIds(game.involvedCompanies));
  const companiesIds = involvedCompanies.map(c => c.company);

  const cover = await fetchCoversByArrayOfIds([game.cover]);

  game.coverHash = cover?.[0]?.imageId;
  game.involvedCompaniesData = involvedCompanies;
  game.gameEnginesData = await fetchEnginesByIds(game.gameEngines);
  game.screenshotsData = await fetchSreenshotsByIds(game.screenshots);

  fetchAndDispatchCompaniesByIds(companiesIds, dispatch);

  fetchBaseGamesDataWithCoversByIds(game.similarGames).then(games => {
    dispatch(actions.bindSimilarGamesDataBySlug(games, game.slug));
  });

  return game;
};
