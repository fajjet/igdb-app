import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";

import { State } from "store/initialState";
// import { GenreCard } from "components";
import { fetchMostAnticipatedGames } from 'utils/api';

const Home = () => {

  // const genres = useSelector((state: State) => state.genres.list);
  const games = useSelector((state: State) => state.games.anticipated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostAnticipatedGames());
  }, []);

  return (
    <>
      <Link href={'/another'} passHref>
        <a>another page</a>
      </Link>
      {games?.map((game) => {
        return (
          <div>{game?.name}</div>
        )
      })}
    </>
  )
};

export default React.memo(Home);
