import styled from 'styled-components';
// import { provider } from 'styles';

const Home: any = {};

Home.Root = styled.div`
  padding: 8rem 0;
  min-height: 100vh;
`;

Home.Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
`;

Home.Game = styled.div`
 
`;

export default Home;
