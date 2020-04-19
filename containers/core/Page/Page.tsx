import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { fetchGenres } from "utils/api";

type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    return () => {
      console.log('unmounted')
    }
  }, []);

  return (
    <>
      <div>Header</div>
      {props.children}
      <div>footer</div>
    </>
  )
};

export default React.memo(Page);
