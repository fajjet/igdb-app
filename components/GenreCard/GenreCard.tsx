import React from 'react';

import { Genre } from 'types';
import Styled from './GenreCard.style';

interface Props extends Genre {

}

const GenreCard = (props: Props) => {
  const { name } = props;

  return (
    <Styled.Root>
      {name}
    </Styled.Root>
  )
};

export default GenreCard;
