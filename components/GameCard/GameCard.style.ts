import styled from 'styled-components';
// import { provider } from 'styles';

const GameCard: any = {};

GameCard.Root = styled.div`
  padding-top: 130%;
  position: relative;
  background-color: red;
`;

GameCard.Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default GameCard;
