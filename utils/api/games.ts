import { Dispatch } from "redux";

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
        fields: '*',
        where: [`first_release_date > ${Math.round(now / 1000)}`, 'hypes != null'],
        sort: 'hypes desc',
        limit: 10,
      }),
    });
    const games = await response.json();
    dispatch(actions.setAnticipatedGames(games));
  }
};
