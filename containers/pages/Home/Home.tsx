import React from 'react';

import { Game } from "types";
import { GameCard } from "components";
import Styled from './Home.style';

interface Props {
  games: Array<Game> | null;
}

const Home = (props: Props) => {
  const { games } = props;
  return (
    <Styled.Root>
      <Styled.Grid>
        {games?.map(game => {
          const { name, id, genres, slug, cover } = game;
          return (
            <Styled.Game key={id}>
              <GameCard
                id={id}
                genres={genres}
                slug={slug}
                cover={cover}
                name={name}
              />
            </Styled.Game>
          )
        })}
      </Styled.Grid>
    </Styled.Root>
  )
};

export default React.memo(Home);
