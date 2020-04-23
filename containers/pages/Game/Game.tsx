import React from 'react';

import {GameDetail, ImageSizes} from 'types';
import {Loader, Text} from "components";
import {getImageUrl} from "utils";
import Styled from './Game.style';

interface Props {
  data: GameDetail | null;
  error: boolean;
}

const Game = (props: Props) => {
  const { data, error } = props;
  return (
    <Styled.Root>
      <div className={'content-wrapper'}>
        {!data && !error && (
          <Loader/>
        )}
        {error && (
          <Text as={'h1'} view={'h1'}>404: Game not found</Text>
        )}
        {data && (
          <>
            <Text as={'h1'} view={'h1'}>{data.name}</Text>
            <br/>
            <img src={getImageUrl(data.cover, ImageSizes.fhd)} alt={data.name + ' cover'}/>
          </>
        )}
      </div>
    </Styled.Root>
  )
};

export default React.memo(Game);
