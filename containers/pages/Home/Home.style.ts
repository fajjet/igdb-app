import styled from 'styled-components';
import { provider } from 'styles';

const Home: any = {};

Home.Root = styled.div`
  padding: 8rem 0;
  min-height: 100vh;
`;

Home.Title = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  padding-bottom: 1rem;
  color: ${provider.color.aquamarineHeading};
  margin-top: 0;
`;

Home.Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

Home.Game = styled.div`
 
`;

export default Home;
