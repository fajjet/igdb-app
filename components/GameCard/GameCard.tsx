import React from 'react';
import {Game, ImageSizes} from 'types';

import {getImageUrl} from "utils/api";
import Styled from './GameCard.style';

interface Props extends Game {

}

const GameCard = (props: Props) => {
  const { name, cover } = props;

  const imageUrl = getImageUrl(cover, ImageSizes.fhd);

  return (
    <Styled.Root>
      {name}
      <Styled.Cover>
        <img src={imageUrl} alt={''}/>
      </Styled.Cover>
    </Styled.Root>
  )
};

export default React.memo(GameCard);
