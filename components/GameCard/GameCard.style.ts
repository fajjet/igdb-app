import styled from 'styled-components';
import { provider } from 'styles';

const GameCard: any = {};

GameCard.Root = styled.div<{ color: string }>`
  padding-top: 130%;
  position: relative;
  background-color: ${provider.hexToRgba(provider.color.aquamarine, 0.15)};
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    box-shadow:0 0 30px ${provider.hexToRgba(provider.color.purple, 0.75)};
    opacity: 0;
    transition: all 0.5s ease;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    box-shadow:0 0 30px ${provider.hexToRgba(provider.color.aquamarine, 0.75)};
    opacity: 0;
    transition: all 0.5s ease;
  }
  
  &:hover{
    &:after, &:before{
      opacity: 1;
    }
  }
`;

GameCard.Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: saturate(50%);
  transition: filter 0.3s ease, transform 0.5s ease;
  z-index: 2;
  overflow: hidden;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  ${GameCard.Root}:hover & {
    filter: none;
    img {
      transform: scale(1.005);
    }
  }
`;

GameCard.Genres = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`;

GameCard.Genre = styled.div`
  color: white;
  background-color: ${provider.color.purple700};
  font-size: 10px;
  margin-left: 10px;
  padding: 1px 3px;
  letter-spacing: 1px;
`;

GameCard.Date = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${provider.color.aquamarine};
  color: white;
  font-size: 10px;
  padding: 5px;
  letter-spacing: 1px;
  font-weight: 400;
  z-index: 3;
`;

GameCard.HoverCover = styled.div`
  
`;

export default GameCard;
