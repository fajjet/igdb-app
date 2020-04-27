import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Head from 'next/head';

import { State } from "store/initialState";
import { Home } from 'containers';
import { fetchMostAnticipatedGames } from 'utils/api';

const HomePage = () => {

  const games = useSelector((state: State) => state.games.anticipated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games === null) {
      dispatch(fetchMostAnticipatedGames());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Home games={games} />
    </>
  )
};

export default React.memo(HomePage);
