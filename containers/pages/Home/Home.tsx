import React from 'react';
import Link from 'next/link';
import { useSelector } from "react-redux";

import { State } from 'store/initialState';
import { Game } from "types";
import { getRelativeHypeLevel } from 'utils';
import { GameCard, Loader, Text } from "components";
import Styled from './Home.style';

interface Props {
  games: Array<Game> | null;
}

const Home = (props: Props) => {
  const { games } = props;
  const genres = useSelector((state: State) => state.static.genres);

  return (
    <Styled.Root>
      <div className={'content-wrapper'}>
        <Text as={'h1'} view={'h1'} style={{ marginBottom: '3rem', lineHeight: '1.15' }}>Most anticipated games</Text>
        {games === null && (
          <Loader/>
        )}
        <Styled.Grid>
          {games?.map((game, index) => {
            const { id, slug } = game;
            const hype = getRelativeHypeLevel(games, index);
            const gameGenres = genres?.filter(g => game.genres.includes(g.id));
            return (
              <Link href={`/games/[slug]`} as={`/games/${slug}`} passHref key={id}>
                <Styled.Game as={'a'}>
                  <GameCard
                    { ...game }
                    hypeLevel={hype}
                    genres={gameGenres || null}
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
