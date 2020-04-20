import React from 'react';
import { useRouter } from 'next/router'

const GamePage = (props: any) => {

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug)

  return (
    <>
      <div className={'content-wrapper'}>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Game page</h1>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  )
};

export default React.memo(GamePage);
