import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";

import { State } from "store/initialState";
import { fetchGenres } from "utils/api";
import { GenreCard } from "components";
// import { Genre } from 'types';
// import { api } from 'utils';

const Home = () => {

  const dispatch = useDispatch();
  const genres = useSelector((state: State) => state.genres);

  useEffect(() => {
    genres.list === null && dispatch(fetchGenres());
  }, []);

  return (
    <>
      <Link href={'/another'} passHref>
        <a>another page</a>
      </Link>
      {genres.list && genres.list.map((genre) => {
        return <GenreCard
          key={genre.id}
          { ...genre }
        />
      })}
    </>
  )
};

export default Home;
