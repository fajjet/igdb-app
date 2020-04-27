import styled from 'styled-components';
import { provider } from 'styles';
import { percentageToColor } from "utils";

const Game: any = {};

Game.Root = styled.div`
  padding: 8rem 0;
  min-height: 100vh;
`;

Game.Grid = styled.div`
  position: relative;
`;

Game.MainColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 400px);
  padding-right: 4rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-bottom: 1.5rem;
  }
`;

Game.ImageColumn = styled.div`
  width: 400px;
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  img {
    max-width: 100%;
  }
`;

Game.RowInfoItem = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  opacity: 0.7;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  position: relative;
  &:not(:last-child) {
    &:after{
      content: '-';
      position: absolute;
      top: 0;
      right: -1.15rem;
      display: block;
    }
  }
`;

Game.Summary = styled.div`
  line-height: 1.7;
  max-width: 750px;
  white-space: pre-wrap;
  padding-bottom: 2rem;
`;

Game.Head = styled.div`
  margin-bottom: 1.5rem;
`;

Game.Genres = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

Game.Developers = styled.div`
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${provider.color.aquamarineHeading};
`;

Game.InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
`;

Game.InfoItemName = styled.div`
  flex-shrink: 0;
  font-weight: 500;
  padding-right: 0.5rem;
  opacity: 0.8;
`;

Game.InfoItemValue = styled.div`
  
`;

Game.Storyline = styled.div`
  padding-top: 1rem;
  h2 {
    opacity: 0.7;
  } 
  p {
    line-height: 1.7;
    white-space: pre-wrap;
  } 
`;

Game.Similar = styled.div`
  overflow: hidden;
  max-width: 100%;
  h2 {
    opacity: 0.7;
    margin-bottom: 2.5rem;
  }
`;

Game.SimilarSwiper = styled.div`
  margin: 0 -1rem;
  .swiper-wrapper{
    white-space: nowrap;
    width: 100%;
  }
`;

Game.RowInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

Game.SimilarSlide = styled.div`
  white-space: normal;
  display: inline-block;
  padding: 0 1rem;
  width: 14rem;
  height: 16rem;
  transition: opacity 0.15s ease;
  &:hover{
    opacity: 0.75;
  }
`;

Game.SimilarSlideWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: ${provider.hexToRgba(provider.color.aquamarine, 0.15)};
  img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

Game.Rating = styled.div`

  font-weight: 500;
  margin-bottom: 2rem;
  color: ${provider.color.aquamarine};
  font-size: 2rem;
  position: relative;
  opacity: 0.8;
  
  i {
    vertical-align: middle;
    display: inline-block;
  }
  
  span {
    padding-right: 0.5rem;
    text-shadow: none;
    vertical-align: middle;
    display: inline-block;
  }
`;

Game.RatingScale = styled.div<{ rating: number }>`
  content: '';
  display: inline-block;
  height: 25px;
  width: 16px;
  vertical-align: middle;
  margin-left: 0.75rem;
  border: 3px solid ${provider.color.aquamarine};
  position: relative;
  
  &:after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: ${props => props.rating * 100}%;
    width: 100%;
    background-color: ${props => percentageToColor(props.rating, true)};
  }
`;

Game.Screenshots = styled.div`
  padding: 1rem 0 3rem 0;
  overflow: hidden;
  h2 {
    opacity: 0.7;
    margin-bottom: 2.5rem;
  }
`;

Game.ScreenshotsSwiper = styled.div`
  .swiper-wrapper{
    white-space: nowrap;
  }
`;

Game.ScreenshotSlide = styled.div`
  white-space: normal;
  display: inline-block;
  max-width: 100%;
  opacity: 0.75;
  filter: grayscale(100%);
  transition: opacity 0.3s ease, filter 0.3s ease;
  &.swiper-slide-active {
    opacity: 1;
    filter: none;
  }
  &:not(.swiper-slide-active) {
     &:hover{
      opacity: 1;
      cursor: pointer;
    }
  }
  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export default Game;
