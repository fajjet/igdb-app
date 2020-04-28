import React, { useRef } from 'react';
import Swiper from "swiper";

import { ImageSizes, GameBase } from 'types';
import {getImageUrl } from "utils";
import Styled from './Game.style';
import {Loader} from "components";
import Link from "next/link";

interface Props {
  data?: Array<GameBase>;
}

const Similar = (props: Props) => {

  const swiper = useRef<null | Swiper>(null);

  const getSwiperContainer = (node: HTMLDivElement) => {
    if (swiper.current !== null) return false;
    swiper.current = new Swiper(node, {
      slidesPerView: "auto",
      grabCursor: true,
    });
    return true;
  };

  return (
    <Styled.Similar as={'section'}>
      <div className={'content-wrapper'}>
        <h2>Similar games</h2>
        {!props.data && (<Loader/>)}
        {!!props.data?.length && (
          <Styled.SimilarSwiper ref={getSwiperContainer}>
            <div className={'swiper-wrapper'}>
              {props.data?.map(game => {
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
  )
};

export default React.memo(Similar);
