import React from 'react';
import { useSelector } from "react-redux";

import { State } from 'store/initialState';
import { GameDetail, ImageSizes } from 'types';
import { Loader, Text } from "components";
import { getImageUrl } from "utils";
import Styled from './Game.style';

interface Props {
  data: GameDetail | null;
  error: boolean;
}

const InfoItem = (props: { name: string, children: React.ReactNode }) => {
  return !!props.children ? (
    <Styled.InfoItem>
      <Styled.InfoItemName>{props.name}</Styled.InfoItemName>
      <Styled.InfoItemValue>{props.children}</Styled.InfoItemValue>
    </Styled.InfoItem>
  ) : null
};

const Game = (props: Props) => {
  const { data, error } = props;
  const {
    firstReleaseDate,
    genres: gameGenres = [],
    involvedCompanies = [],
  } = data || {};

  const genres  = useSelector((state: State) => state.static.genres);
  const gameModes  = useSelector((state: State) => state.static.gameModes);
  const companies  = useSelector((state: State) => state.companies);

  const developers: string[] = [];
  const publishers: string[] = [];
  const supporting: string[] = [];

  involvedCompanies.forEach((ic) => {
    const id = ic.company;
    const name = companies[id]?.name;
    if (ic.developer) developers.push(name);
    if (ic.publisher) publishers.push(name);
    if (ic.supporting) supporting.push(name);
  });

  const date = process.browser && firstReleaseDate && new Date(firstReleaseDate * 1000);
  const releaseDate = date && new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(date);

  const genresArray = genres?.filter(g => gameGenres.includes(g.id)).map(g => g.name);
  const modes = gameModes?.filter(mode => data?.gameModes?.includes(mode.id)).map(m => m.name);

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
            <Styled.Grid>
              <Styled.MainColumn>
                <Styled.Head>
                  <Text as={'h1'} view={'h1'} style={{ lineHeight: '1' }}>{data.name}</Text>
                  <br/>
                  <Styled.Developers>{developers?.join(', ')}</Styled.Developers>
                  <Styled.ReleaseDate as={'time'}>{releaseDate}</Styled.ReleaseDate>
                </Styled.Head>
                <Styled.Summary>{data?.summary}</Styled.Summary>
                <InfoItem name={'Genre:'} children={genresArray?.join(', ')}/>
                <InfoItem name={'Game modes:'} children={modes?.join(', ')}/>
                <InfoItem name={'Publishers:'} children={publishers?.join(', ')}/>
                <InfoItem name={'Supporting developers:'} children={supporting?.join(', ')}/>
              </Styled.MainColumn>
              <Styled.ImageColumn>
                <img src={getImageUrl(data.cover, ImageSizes.fhd)} alt={data.name + ' cover'}/>
              </Styled.ImageColumn>
            </Styled.Grid>
          </>
        )}
      </div>
    </Styled.Root>
  )
};

export default React.memo(Game);
