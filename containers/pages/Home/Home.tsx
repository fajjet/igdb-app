import React from 'react';
import Link from 'next/link';

import { Game } from "types";
import { GameCard, Loader } from "components";
import Styled from './Home.style';

interface Props {
  games: Array<Game> | null;
}

const Home = (props: Props) => {
  const { games } = props;
  return (
    <Styled.Root>
      <div className={'content-wrapper'}>
        <Styled.Title as={'h1'}>Most anticipated games</Styled.Title>
        {games === null && (
          <Loader/>
        )}
        <Styled.Grid>
          {games?.map(game => {
            const { name, id, genres, slug, cover } = game;
            return (
              <Link href={`/games/[slug]`} as={`/games/${slug}`} passHref>
                <Styled.Game key={id} as={'a'}>
                  <GameCard
                    id={id}
                    genres={genres}
                    slug={slug}
                    cover={cover}
                    name={name}
                  />
                </Styled.Game>
              </Link>
            )
          })}
        </Styled.Grid>
      </div>
    </Styled.Root>
  )
};

export default React.memo(Home);
