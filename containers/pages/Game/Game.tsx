import React from 'react';

import {Text} from "components";
import Styled from './Game.style';

const Game = (props: any) => {
  return (
    <Styled.Root>
      <div className={'content-wrapper'}>
        <Text as={'h1'} view={'h1'}>Game</Text>
      </div>
    </Styled.Root>
  )
};

export default React.memo(Game);
