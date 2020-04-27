import React, { useRef } from 'react';
import {useSelector} from "react-redux";
import Swiper from "swiper";
import Link from 'next/link';

import {State} from 'store/initialState';
import {GameDetail, ImageSizes, GameCategories, GameStatuses } from 'types';
import {Loader, Text} from "components";
import {getImageUrl } from "utils";
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
    involvedCompaniesData = [],
  } = data || {};

  const category = !!data?.category && GameCategories[data.category];
  const status = typeof data?.status !== 'undefined' && GameStatuses[data.status];
  const rating = data?.totalRating || data?.rating;

  const swiper = useRef<null | Swiper>(null);

  const image = getImageUrl(data?.coverHash, ImageSizes.fhd);

  const getSimilarSwiperContainer = (node: HTMLDivElement) => {
    if (swiper.current !== null) return false;
    swiper.current = new Swiper(node, {
      slidesPerView: "auto",
    });
    return true;
  };

  const genres  = useSelector((state: State) => state.static.genres);
  const gameModes  = useSelector((state: State) => state.static.gameModes);
  const platforms  = useSelector((state: State) => state.static.platforms);
  const companies  = useSelector((state: State) => state.companies);

  const developers: string[] = [];
  const publishers: string[] = [];
  const supporting: string[] = [];

  involvedCompaniesData.forEach((ic) => {
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
  const modes = gameModes?.filter(m => data?.gameModes?.includes(m.id)).map(m => m.name);
  const gamePlatforms = platforms?.filter(p => data?.platforms?.includes(p.id)).map(p => p.name);
  const engines = data?.gameEnginesData?.map(e => e.name);

  return (
    <Styled.Root>
        {!data && !error && (
          <div className={'content-wrapper'}>
            <Loader/>
          </div>
        )}
        {error && (
          <div className={'content-wrapper'}>
            <Text as={'h1'} view={'h1'}>404: Game not found</Text>
          </div>
        )}
        {data && (
          <>
          <div className={'content-wrapper'}>
            <Styled.Grid>
              <Styled.MainColumn>
                <Styled.Head as={'section'}>
                  <Text as={'h1'} view={'h1'} style={{ lineHeight: '1.15' }}>{data.name}</Text>
                  <br/>
                  <Styled.Developers>{developers?.join(', ')}</Styled.Developers>
                  <Styled.RowInfo>
                    {releaseDate && (<Styled.RowInfoItem as={'time'}>{releaseDate}</Styled.RowInfoItem>)}
                    {status && (<Styled.RowInfoItem>{`${status}`}</Styled.RowInfoItem>)}
                    {category && (<Styled.RowInfoItem>{`${category}`}</Styled.RowInfoItem>)}
                  </Styled.RowInfo>
                </Styled.Head>
                <Styled.Summary>{data?.summary}</Styled.Summary>
                {rating && (
                  <Styled.Rating>
                    <span>Rating:</span>
                    <i>{Math.round(rating)}</i>
                    <Styled.RatingScale rating={rating}/>
                  </Styled.Rating>
                )}
                <InfoItem name={'Genre:'} children={genresArray?.join(', ')}/>
                <InfoItem name={'Game modes:'} children={modes?.join(', ')}/>
                <InfoItem name={'Publishers:'} children={publishers?.join(', ')}/>
                <InfoItem name={'Supporting developers:'} children={supporting?.join(', ')}/>
                <InfoItem name={'Platforms:'} children={gamePlatforms?.join(', ')}/>
                <InfoItem name={'Game engines:'} children={engines?.join(', ')}/>
                {data?.storyline && (
                  <Styled.Storyline as={'section'}>
                    <h2>Storyline</h2>
                    <p>{data?.storyline}</p>
                  </Styled.Storyline>
                )}
              </Styled.MainColumn>
              <Styled.ImageColumn>
                <img src={image} alt={data.name + ' cover'}/>
              </Styled.ImageColumn>
            </Styled.Grid>
          </div>
            <Styled.Similar as={'section'}>
              <div className={'content-wrapper'}>
                <h2>Similar games</h2>
                {!data?.similarGamesData && (<Loader/>)}
                {!!data?.similarGamesData?.length && (
                  <Styled.SimilarSwiper ref={getSimilarSwiperContainer}>
                    <div className={'swiper-wrapper'}>
                      {data?.similarGamesData?.map(game => {
                        const image = getImageUrl(game.coverHash, ImageSizes.coverBig);
                        return (
                          <Styled.SimilarSlide key={game.id} className={'swiper-slide'}>
                            <Link as={`/games/${game.slug}`} href={`/games/[slug]`} passHref>
                              <Styled.SimilarSlideWrapper as={'a'}>
                                <img src={image} alt={game.name} title={game.name}/>
                              </Styled.SimilarSlideWrapper>
                            </Link>
                          </Styled.SimilarSlide>
                        )
                      })}
                    </div>
                  </Styled.SimilarSwiper>
                )}
              </div>
            </Styled.Similar>
          </>
        )}
    </Styled.Root>
  )
};

export default React.memo(Game);
