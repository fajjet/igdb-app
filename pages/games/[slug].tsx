import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";

import { fetchDetailGameBySlug } from 'utils/api';
import { Game } from 'containers';

const GamePage = (props: any) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug)

  useEffect(() => {
    dispatch(fetchDetailGameBySlug(Array.isArray(slug) ? '' : slug));
  }, []);

  return (
    <>
      <Game/>
    </>
  )
};

export default React.memo(GamePage);
