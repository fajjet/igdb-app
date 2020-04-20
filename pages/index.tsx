import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { State } from "store/initialState";
import { Home } from 'containers';
import { fetchMostAnticipatedGames } from 'utils/api';

const HomePage = () => {

  const games = useSelector((state: State) => state.games.anticipated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostAnticipatedGames());
  }, []);

  return (
    <Home
      games={games}
    />
  )
};

export default React.memo(HomePage);
