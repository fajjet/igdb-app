import { Dispatch  } from "redux";

import { Cover, PlatformResponse, GameMode, Genre} from 'types';
import actions from 'store/actions';
import {keysToCamel} from "../helpers";

export const fetchPlatformLogosByIds = async (ids: Array<number>) : Promise<Cover[]> => {
  const response = await fetch('/api/platform_logos', {
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

export const fetchGameModes = async () : Promise<GameMode[]> => {
  const response = await fetch('/api/game_modes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, slug',
    }),
  });
  return await response.json();
};

export const fetchGenres = async () : Promise<Genre[]> => {
  const response = await fetch('/api/genres', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, slug',
    }),
  });
  return response.json();
};

export const fetchPlatforms = async () => {
  const response = await fetch('/api/platforms', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: 'id, name, platform_logo, slug',
    }),
  });
  return response.json();
};

export const fetchStaticData = () => {
  return async (dispatch: Dispatch) => {
    const genres = await fetchGenres();
    dispatch(actions.setGenres(genres));

    const platforms: Array<PlatformResponse> = (await fetchPlatforms()).map((el: object) => keysToCamel(el));
    const logoIds = platforms.map((logo) => logo.platformLogo).filter(v => !!v);
    const logos = await fetchPlatformLogosByIds(logoIds);
    const platformsWithLogos = platforms.map((platform) => {
      const logo = logos.find(logo => logo.id === platform.platformLogo);
      const imageId = logo?.imageId || undefined;
      return {
        ...platform,
        logo: imageId,
      };
    });
    dispatch(actions.setPlatforms(platformsWithLogos));

    const gameModes = await fetchGameModes();
    dispatch(actions.setGameModes(gameModes));
  }
};
