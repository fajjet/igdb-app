import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { fetchGenres } from "utils/api";
import { Header, Footer } from 'containers';

type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )
};

export default React.memo(Page);
