import styled from 'styled-components';
import { provider } from 'styles';

const GameCard: any = {};

GameCard.Root = styled.div`
  padding-top: 130%;
  position: relative;
  background-color: ${provider.hexToRgba(provider.color.aquamarine, 0.15)};
  overflow: hidden;
`;

GameCard.Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: saturate(35%);
  transition: filter 0.5s ease, transform 0.75s ease;
  
  ${GameCard.Root}:hover & {
    filter: none;
    transform: scale(1.015);
  }
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

GameCard.Genres = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
`;

GameCard.Hype = styled.div`
  position: absolute;
  bottom: calc(50% - 0.5rem);
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: rgba(255,255,255,0.1);
  backdrop-filter: saturate(150%) blur(10px);
  
  span{
    font-size: 8px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    padding-right: 5px;
    white-space: nowrap;
  }
`;

const g = {
  c2: 'white',
  c1: provider.color.purple,
};

GameCard.HypeBar = styled.div<{ level: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(to right, ${g.c2} 0%, ${g.c1} 50%, black 99%);
  width: ${props => props.level * 100}%;
  opacity: 0.75;
`;

export default GameCard;
