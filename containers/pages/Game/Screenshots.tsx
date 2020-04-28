import React, { useRef } from 'react';
import Swiper from "swiper";

import { ImageSizes, Screenshot } from 'types';
import {getImageUrl } from "utils";
import Styled from './Game.style';

interface Props {
  data?: Array<Screenshot>;
}

const Screenshots = (props: Props) => {

  const swiper = useRef<null | Swiper>(null);

  const getSwiperContainer = (node: HTMLDivElement) => {
    if (swiper.current !== null) return false;
    swiper.current = new Swiper(node, {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
    });
    return true;
  };

  const onScreenshotSlideClick = (e: React.SyntheticEvent, index: number) => {
    swiper?.current?.slideTo(index);
  };

  return (
    <Styled.Screenshots as={'section'}>
      <div className={'content-wrapper'}>
        <h2>Screenshots</h2>
        {!!props.data?.length && (
          <Styled.ScreenshotsSwiper ref={getSwiperContainer}>
            <div className={'swiper-wrapper'}>
              {props.data?.map((screenshot, index) => {
                const image = getImageUrl(screenshot.imageId, ImageSizes.screenshotBig);
                return (
                  <Styled.ScreenshotSlide
                    onClick={(e: React.SyntheticEvent) => onScreenshotSlideClick(e, index)}
                    key={screenshot.id}
                    className={'swiper-slide'}
                  >
                    <Styled.ScreenshotSlideCover>
                      <img src={image}/>
                    </Styled.ScreenshotSlideCover>
                    <img src={image} alt={''}/>
                  </Styled.ScreenshotSlide>
                )
              })}
            </div>
          </Styled.ScreenshotsSwiper>
        )}
      </div>
    </Styled.Screenshots>
  )
};

export default React.memo(Screenshots);
