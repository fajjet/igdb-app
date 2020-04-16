import React, { useEffect, useState } from 'react';

import { Layout } from 'containers';
import { GenreCard } from "components";
import { Genre } from 'types';

const Home = () => {

  const [ genres, setGenres ] = useState([]);

  const fetchData = async () => {

    const result = await fetch('/api/genres', {
      method: 'POST',
    });

    return await result.json();
  };

  useEffect(() => {

    fetchData().then(res => {
      setGenres(res);
    })

  }, []);

  return (
    <Layout>
      {genres.map((genre: Genre) => {
        return <GenreCard
          key={genre.id}
          { ...genre }
        />
      })}
    </Layout>
  )
};

export default Home;
