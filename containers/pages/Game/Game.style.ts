import styled from 'styled-components';
import { provider } from 'styles';

const Game: any = {};

Game.Root = styled.div`
  padding: 8rem 0;
  min-height: 100vh;
`;

Game.Grid = styled.div`
  display: grid;
  grid-template-columns: auto 400px;
  grid-column-gap: 3.5rem;
`;

Game.MainColumn = styled.div`
  
`;

Game.ImageColumn = styled.div`
  img {
    max-width: 100%;
  }
`;

Game.ReleaseDate = styled.div`
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  opacity: 0.7;
  margin-top: 1.5rem;
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
  margin-bottom: 1rem;
`;

Game.InfoItemName = styled.div`
  flex-shrink: 0;
  font-weight: 500;
  padding-right: 0.5rem;
`;

Game.InfoItemValue = styled.div`
  
`;

export default Game;
