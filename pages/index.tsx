import React, { useEffect } from 'react';
import Link from 'next/link';
import { useGet } from "restful-react";
import { useDispatch } from "react-redux";

import actions from 'store/actions';
// import { GenreCard } from "components";
// import { Genre } from 'types';
// import { api } from 'utils';

const Home = () => {

  const { data } = useGet({
    path: "/api/feeds",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setTitle('new title'))
  }, []);

  return (
    <>
      <Link href={'/another'} passHref>
        <a>another page</a>
      </Link>
      {data?.map((el: any) => {
        return (
          <div>{el.name}</div>
        )
      })}
      {/*{genres.map((genre) => {*/}
      {/*  return <GenreCard*/}
      {/*    key={genre.id}*/}
      {/*    { ...genre }*/}
      {/*  />*/}
      {/*})}*/}
    </>
  )
};

export default Home;
