import React, { useEffect, useState } from 'react';
import { Game, ImageSizes, Genre } from 'types';

import { getImageUrl } from "utils";
import Styled from './GameCard.style';

interface Props extends Omit<Game, 'genres'> {
  hypeLevel: number;
  genres: Array<Genre> | null;
}

const GameCard = (props: Props) => {
  const { cover, hypeLevel, firstReleaseDate, genres, name } = props;

  const fhdImage = getImageUrl(cover, ImageSizes.fhd);
  const smallImage = getImageUrl(cover, ImageSizes.coverSmall);

  const [image, setImage] = useState(smallImage);

  const date = process.browser && new Date(firstReleaseDate * 1000);
  const releaseDate = date && new Intl.DateTimeFormat('en-US').format(date);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImage(fhdImage);
    };
    img.src = fhdImage;
  }, []);

  return (
    <Styled.Root as={'article'}>
      <Styled.Cover>
        <img src={image} alt={`${name} cover`}/>
      </Styled.Cover>
      <Styled.Date>
        {releaseDate}
      </Styled.Date>
      <Styled.Genres>
        {genres?.map(genre => {
          return (
            <Styled.Genre>
              {genre.name}
            </Styled.Genre>
          )
        })}
      </Styled.Genres>
      <Styled.Hype>
        <Styled.HypeBar level={hypeLevel}>
          <span>hype</span>
        </Styled.HypeBar>
      </Styled.Hype>
    </Styled.Root>
  )
};

export default React.memo(GameCard);
