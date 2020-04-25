import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Head from 'next/head'
import { useRouter } from 'next/router';

import actions from 'store/actions';
import { State } from "store/initialState";
import { fetchDetailGameBySlug } from 'utils/api';
import { Game } from 'containers';

const GamePage = () => {

  const [error, setError] = useState(false);
  const router = useRouter();
  const slug = String(router.query.slug);

  const dispatch = useDispatch();
  const games = useSelector((state: State) => state.games.detail);
  const game = games[slug];

  const fetchData = async () => {
    if (!game) {
      const response = await fetchDetailGameBySlug(slug, dispatch);
      if (response) {
        dispatch(actions.addGame(response));
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{game?.name}</title>
        <meta name="description" content={game?.summary} />
      </Head>
      <Game
        data={game}
        error={error}
      />
    </>
  )
};

export default GamePage;
